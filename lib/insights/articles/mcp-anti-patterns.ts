import type { Article } from '../types'

/**
 * Published 2026-11-12. Third MCP piece, after "Anatomy of MCP" and "MCP
 * governance": the mistakes, for the engineers who build servers and the
 * architects who approve them.
 *
 * Every figure is from the sources listed: Anthropic's engineering posts
 * (writing tools for agents, Sep 2025; advanced tool use and code execution
 * with MCP, Nov 2025), the RAG-MCP paper (Gan and Sun, May 2025), LangChain's
 * ReAct benchmark (Feb 2025), the Invariant Labs, General Analysis and JFrog
 * disclosures, Simon Willison's lethal trifecta post, and the MCP
 * specification. Code samples are illustrative.
 */
export const article: Article = {
  slug: 'mcp-anti-patterns',
  title: 'MCP anti-patterns: fifteen mistakes to avoid when you build or adopt MCP',
  seoTitle: 'MCP anti-patterns and pitfalls to avoid',
  summary:
    'Fifteen MCP mistakes in tool design, security and operations, each tied to a real incident or measurement, with what to do instead.',
  category: 'Applied AI',
  readTime: '12 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-12',
  reviewedAt: '2026-11-12',
  tags: {
    industries: ['legal-professional-services', 'financial-services', 'software-saas'],
    services: ['applied-ai', 'agentic-automation', 'ai-governance', 'claude'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Most MCP servers work in the demo. The trouble starts later, when the agent has forty tools to choose from, a real user’s data behind them and a support ticket written by a stranger in its context. At that point a few design decisions made in the first week turn out to matter a great deal.',
        'This is a list of those decisions, made the wrong way. Each one is tied to something that actually happened or was measured: a published incident, a CVE, or a benchmark. We grouped them into three parts. The first six are about how tools are designed, the next five about security, and the last four about running MCP in production. If you are new to the protocol, our anatomy of MCP covers the vocabulary used here.',
      ],
    },
    {
      heading: 'Part one: tool design',
      paragraphs: [
        'Anthropic’s engineering team put the core idea plainly in September 2025: tools are a contract between deterministic systems and a non-deterministic agent, so you should design them for agents rather than the way you would write an API for other developers. Almost every mistake in this section comes from forgetting that.',
      ],
    },
    {
      heading: '1. Mirroring your REST API one endpoint at a time',
      paragraphs: [
        'It is tempting, and plenty of generators will do it for you: one MCP tool per endpoint. A user API with create, update, get, list, delete, get permissions and set permissions becomes seven tools, and all seven sit in the model’s context on every request whether they are needed or not.',
        'The model then has to act as an API client: work out the call order, carry IDs from one call to the next, and stitch the results together. Each extra step is another chance to pick the wrong tool or pass the wrong ID.',
        'What to do instead: design tools around the tasks people ask for. If agents keep calling `list_users` and then `get_user_permissions` in sequence, give them one tool that answers the actual question. Anthropic recommends consolidating functionality where workflows repeat, and its examples replace separate list and read calls with a single search that returns what the agent needs next.',
      ],
      code: {
        lang: 'jsonc',
        caption: 'Illustrative. Three endpoint-shaped tools on the left of the decision, one task-shaped tool on the right.',
        text: `// Before: the model must chain these correctly
{ "name": "list_matters" }
{ "name": "get_matter" }
{ "name": "get_matter_parties" }

// After: one tool that answers the question people actually ask
{
  "name": "matters_find_conflicts",
  "description": "Check a list of party names against open and closed matters. Returns each possible match with the matter number, the responsible partner and why it matched (exact name, former name, parent company). Use before opening any new matter.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "parties": { "type": "array", "items": { "type": "string" }, "maxItems": 50 },
      "include_closed": { "type": "boolean", "default": true }
    },
    "required": ["parties"]
  }
}`,
      },
    },
    {
      heading: '2. Loading every tool into every conversation',
      paragraphs: [
        'Tool definitions are not free. Anthropic reported seeing tool definitions consume 134,000 tokens in its own setup before optimization, and noted that a single Jira server uses about 17,000. That is context the model cannot use for the task, and you pay for it on every turn.',
        'It also hurts accuracy. In LangChain’s February 2025 benchmark, models got worse as tasks spanned more tool domains, and GPT-4o’s calendar scheduling accuracy fell to 2% at seven domains. The RAG-MCP paper (May 2025) found that retrieving a shortlist of relevant tools instead of listing them all raised tool-selection accuracy from 13.6% to 43.1%.',
        'What to do instead: keep the always-loaded set small and load the rest on demand. On Claude, marking tools with `defer_loading` and enabling the Tool Search Tool means only the tools a task needs enter context; Anthropic reported Opus 4.5 going from 79.5% to 88.1% on its MCP evaluation with it switched on. If your client has no equivalent, split large servers so a host only connects the ones a given agent needs. One practitioner rule of thumb is five to fifteen tools per server; treat that as a starting point and measure.',
      ],
    },
    {
      heading: '3. Descriptions written as an afterthought',
      paragraphs: [
        'A tool description is the only documentation the model gets, and it reads it every time. “Gets data from the CRM” tells the model nothing about when to use the tool, what the parameters mean, or how it differs from the three other CRM tools beside it.',
        'Write descriptions the way you would brief a new colleague: what the tool is for, when not to use it, what each parameter expects, and any convention that is obvious to your team but not to an outsider. Name parameters precisely; `user_id` beats `user`. And namespace tools by service and resource, such as `asana_projects_search` and `asana_users_search`, so tools from different servers do not collide or blur together. Anthropic found that the choice of prefix or suffix naming alone made a measurable difference in its evaluations, so test it rather than guess.',
      ],
    },
    {
      heading: '4. Returning everything the API returns',
      paragraphs: [
        'An endpoint that returns forty fields, internal UUIDs and ten thousand rows is fine for a program. For a model, every one of those tokens competes with the task. Opaque IDs are especially costly. Anthropic found agents work far better with names and readable identifiers than with cryptic ones, and that resolving UUIDs to meaningful names reduces hallucinated IDs.',
        'Return what the agent needs for its next step, in a readable form. Add pagination, filters and sensible default limits, and truncate with a note that says how to get more. Anthropic suggests a `response_format` parameter so the agent can ask for a concise or detailed answer; in its example the detailed response took 206 tokens and the concise one 72. If you declare an `outputSchema`, return `structuredContent` that matches it, so clients can validate the result instead of parsing prose.',
      ],
    },
    {
      heading: '5. Errors the model cannot act on',
      paragraphs: [
        'MCP distinguishes two kinds of failure. Protocol errors are JSON-RPC errors for things like an unknown tool or malformed request. Tool execution errors, such as a failed API call or invalid input, are returned as a normal result with `isError: true`, precisely so the model can read them and try again. Servers that throw everything as a protocol error, or return a bare “Error: invalid input”, leave the agent guessing and burning calls.',
      ],
      code: {
        lang: 'json',
        caption: 'A tool execution error the model can fix on its next attempt.',
        text: `{
  "jsonrpc": "2.0",
  "id": 7,
  "result": {
    "isError": true,
    "content": [{
      "type": "text",
      "text": "No matter found with number 2219. Matter numbers are four digits and start with the year, for example 2291. Did you mean 2291 (Acme internal investigation)? Use matters_search to look up a matter by client name."
    }]
  }
}`,
      },
    },
    {
      heading: '6. Asking the model to do the computer’s job',
      paragraphs: [
        'Filtering a spreadsheet, summing invoice lines, joining two lists, calculating a ratio: a model can do these, but slowly, expensively and not always correctly. Passing ten thousand rows through context so the model can find the twelve that matter is the worst of both worlds.',
        'Do deterministic work in code. Either build it into the tool (return the twelve rows, not ten thousand) or let the agent write code that calls tools in a sandbox and returns only the result. Anthropic’s code-execution approach cut one example workflow from about 150,000 tokens to about 2,000. That is one measured example rather than a promise, and a sandbox brings its own security and running costs, but the principle holds: numbers that matter should be calculated by code.',
      ],
    },
    {
      heading: 'Part two: security',
      paragraphs: [
        'The incidents in this part share a pattern. Nothing was wrong with the model, and in two of them nothing was wrong with the MCP server code either. The design gave the agent more power than the situation could safely support.',
      ],
    },
    {
      heading: '7. Connecting with a god-mode credential',
      paragraphs: [
        'In July 2025 General Analysis showed how a developer using Cursor with the Supabase MCP server could leak a whole database. The agent ran with the `service_role` key, which bypasses row-level security by design. An attacker filed a support ticket containing instructions; when the developer asked the agent to look at recent tickets, it followed them, read the `integration_tokens` table and wrote the contents back into the ticket thread, where the attacker could read them.',
        'The fix is boring and effective. Give each MCP connection the narrowest credential that does the job: a read-only role, a single project, a scoped token, ideally acting with the requesting user’s own permissions. If the agent only needs to read tickets, it should not hold a key that can read everything.',
      ],
    },
    {
      heading: '8. Putting the lethal trifecta in one session',
      paragraphs: [
        'Simon Willison named the pattern in June 2025. An agent that has access to private data, is exposed to untrusted content and can communicate externally can be made to send that data to an attacker. Any two are manageable. All three in the same session is the hole.',
        'In May 2025 Invariant Labs showed it with GitHub’s official MCP server: a malicious issue in a public repository steered an agent into reading the user’s private repositories and publishing what it found in a pull request. Invariant was clear that this was not a bug in the server code. Every tool the agent used was one the user had approved.',
        'What to do instead: decide per agent which leg to remove, because prompt filters and model alignment reduce the risk rather than remove it. Run agents that read public or customer-submitted content in sessions that cannot reach private data, or remove their ability to write anywhere external. Willison suggests the external-communication leg is usually the easiest to cut. Where you cannot cut a leg, put a person in front of every outbound action.',
      ],
      code: {
        lang: 'yaml',
        caption: 'Illustrative gateway rule: once untrusted content enters a session, outbound tools need approval.',
        text: `session_taint:
  untrusted_sources: [github.list_issues, support.read_ticket, web.fetch]
on_tainted_session:
  require_approval: [github.create_pull_request, email.send, slack.post_message]
  deny: [http.request]          # no free-form egress after untrusted input`,
      },
    },
    {
      heading: '9. Believing what the server says about itself',
      paragraphs: [
        'MCP clients receive a lot of self-description from servers: tool descriptions, annotations such as `readOnlyHint`, and during sign-in, OAuth metadata. All of it is controlled by the server. The specification says annotations must be treated as untrusted unless they come from a trusted server, and that applies just as much to the rest.',
        'CVE-2025-6514 shows why. In July 2025 JFrog disclosed that `mcp-remote`, a widely used proxy that lets desktop hosts reach remote servers, would pass a malicious server’s `authorization_endpoint` value to the operating system when opening a browser, allowing command execution on the user’s machine. It was rated 9.6 and fixed in version 0.1.16. The lesson goes beyond one package: validate everything a server sends before acting on it, and only connect clients to servers you have approved.',
      ],
    },
    {
      heading: '10. Installing servers by name from a public index',
      paragraphs: [
        'The `postmark-mcp` package on npm looked like Postmark’s official server. From version 1.0.16 it quietly blind-copied every email it sent to the publisher. Anyone who installed it by searching for the name, or who let a version range float, got the backdoor automatically.',
        'Treat MCP servers like any other dependency with access to sensitive data. Install from the vendor’s own repository or a registry you control, pin exact versions, review changes before upgrading, and record a hash of each server’s `tools/list` output so a changed description is caught before the model reads it.',
      ],
    },
    {
      heading: '11. Treating local servers as harmless',
      paragraphs: [
        'A stdio server is a process on someone’s laptop, running with their files, their network access and whatever credentials sit in its configuration. It has no OAuth and no sandbox unless you add one. API keys pasted into MCP configuration files tend to end up in repositories, backups and screenshots.',
        'Manage local servers through endpoint controls: an approved list, containers where practical, secrets from a vault or the operating system keychain rather than plain-text config, and developers’ local servers included in the same inventory as remote ones.',
      ],
    },
    {
      heading: 'Part three: running it',
      paragraphs: [],
    },
    {
      heading: '12. Building a stateful server on a stateless protocol',
      paragraphs: [
        'Since the July 2026 specification, MCP has no protocol sessions: the `initialize` handshake and the `Mcp-Session-Id` header are gone, and any server instance may receive any request. A server that keeps a half-finished workflow in process memory will break the first time a load balancer sends the next call somewhere else.',
        'Keep state explicit. Return a handle or `requestState` and expect it back, store long-lived state in your own database, and design so that any instance can serve any call. That is also what makes the server cheap to scale.',
      ],
    },
    {
      heading: '13. Making long jobs synchronous',
      paragraphs: [
        'A conflict search across a large client base or a document pack for due diligence can take minutes. Holding a `tools/call` open that long invites timeouts, retries and duplicate work. If the operation can take longer than a client is willing to wait, run it as a task using the `io.modelcontextprotocol/tasks` extension, return a handle straight away, and let the client check progress, add input or cancel.',
      ],
    },
    {
      heading: '14. Destructive tools with no brakes',
      paragraphs: [
        'Models retry. Networks drop responses. A `send_payment` or `delete_record` tool that is not idempotent will eventually run twice. One that runs with no confirmation will eventually run when nobody meant it to.',
      ],
      bullets: [
        'Accept an idempotency key on every write tool and ignore repeats.',
        'Offer a dry run that returns what would change, and require it before the real call for anything irreversible.',
        'Put a named person in front of actions that move money, send external messages, change records of legal significance or delete data.',
        'Prefer soft deletes and reversible changes, so a mistake can be undone.',
      ],
    },
    {
      heading: '15. Shipping without evaluations or telemetry',
      paragraphs: [
        'A server that works for the five prompts its developer tried is not tested. Tool selection, argument quality and error recovery all vary with the model, the other tools present and how users phrase things.',
        'Build an evaluation set from realistic tasks with known correct outcomes, run it against each model and client you support, and rerun it whenever a tool, description or model changes. Anthropic’s guidance is to measure accuracy alongside runtime, token use, tool errors and the sequence of calls agents make. In production, log every tool call with the user, agent, tool, arguments and result, so you can see which tools are never used, which fail most, and which call sequences look wrong. Those logs are also your audit trail.',
      ],
    },
    {
      heading: 'Before you build one at all',
      paragraphs: [
        'A last pitfall sits above all fifteen: building an MCP server when you do not need one. MCP earns its keep when several hosts, such as Claude, an IDE and your own agent, need the same capability, or when a vendor ships a server you would otherwise have to build. If a single application calls a handful of internal functions, ordinary function calling inside that application is simpler, faster and easier to secure. Use MCP where reuse and a standard interface pay for the extra moving parts.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the most common MCP anti-pattern?',
      a: 'Mirroring a REST API one endpoint per tool. It fills the model’s context with tool definitions, forces the model to chain calls and pass IDs correctly, and lowers tool-selection accuracy. Design tools around the tasks users ask for instead.',
    },
    {
      q: 'How many tools should an MCP server expose?',
      a: 'As few as the tasks require. Accuracy falls as the number of visible tools grows. Keep the always-loaded set small, load the rest on demand with tool search where the client supports it, and measure selection accuracy with your own evaluation set rather than relying on a fixed number.',
    },
    {
      q: 'What is the lethal trifecta in MCP?',
      a: 'Simon Willison’s name for an agent that has access to private data, is exposed to untrusted content and can communicate externally. With all three in one session, injected instructions can make the agent send private data to an attacker. Remove at least one of the three for each agent.',
    },
    {
      q: 'Should MCP tools throw errors?',
      a: 'Only for protocol problems such as an unknown tool or malformed request. Failures during execution should be returned as a result with isError set to true and a message that tells the model how to correct its next attempt.',
    },
    {
      q: 'When should I not use MCP?',
      a: 'When one application calls a few internal functions that no other host needs. Ordinary function calling inside that application is simpler and easier to secure. MCP pays off when several hosts share the same capability or a vendor provides the server.',
    },
  ],
  sources: [
    {
      title: 'Writing effective tools for agents, with agents',
      url: 'https://www.anthropic.com/engineering/writing-tools-for-agents',
      publisher: 'Anthropic',
    },
    {
      title: 'Introducing advanced tool use on the Claude Developer Platform',
      url: 'https://www.anthropic.com/engineering/advanced-tool-use',
      publisher: 'Anthropic',
    },
    {
      title: 'Code execution with MCP: building more efficient agents',
      url: 'https://www.anthropic.com/engineering/code-execution-with-mcp',
      publisher: 'Anthropic',
    },
    {
      title: 'RAG-MCP: Mitigating Prompt Bloat in LLM Tool Selection via Retrieval-Augmented Generation',
      url: 'https://arxiv.org/abs/2505.03275',
      publisher: 'arXiv (Gan and Sun)',
    },
    {
      title: 'The lethal trifecta for AI agents: private data, untrusted content, and external communication',
      url: 'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',
      publisher: 'Simon Willison',
    },
    {
      title: 'GitHub MCP Exploited: Accessing private repositories via MCP',
      url: 'https://invariantlabs.ai/blog/mcp-github-vulnerability',
      publisher: 'Invariant Labs',
    },
    {
      title: 'Supabase MCP can leak your entire SQL database',
      url: 'https://generalanalysis.com/blog/supabase-mcp-blog',
      publisher: 'General Analysis',
    },
    {
      title: 'Critical RCE Vulnerability in mcp-remote: CVE-2025-6514',
      url: 'https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/',
      publisher: 'JFrog',
    },
    {
      title: 'postmark-mcp: npm malicious backdoor email theft',
      url: 'https://www.koi.ai/blog/postmark-mcp-npm-malicious-backdoor-email-theft',
      publisher: 'Koi Security',
    },
    {
      title: 'Tools (specification)',
      url: 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'The 2026-07-28 Specification',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28/',
      publisher: 'Model Context Protocol',
    },
  ],
  related: [
    { label: 'The anatomy of MCP', href: '/insights/anatomy-of-mcp' },
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation' },
  ],
}
