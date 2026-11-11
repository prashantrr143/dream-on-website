import type { Article } from '../types'

/**
 * Published 2026-11-11, rewritten the same day as a technical piece for
 * security architects and platform teams at law firms, banks and B2B SaaS.
 *
 * Facts are taken only from the sources listed. Spec details are checked
 * against the MCP 2026-07-28 release post, the 2026-07-28 authorization
 * pages, the security best practices page, the EMA stable announcement
 * (2026-06-18), the OWASP MCP Top 10 project page (beta, v0.1) and the NSA
 * AISC press release (2026-05-20). The JSON and YAML samples are
 * illustrative: field names follow the spec where it defines them; the
 * gateway policy and log record formats are our own suggestion.
 *
 * Re-check each quarter: OWASP is still in beta, DCR removal is scheduled
 * for a future spec version, and IdP support for ID-JAG is still rolling out.
 */
export const article: Article = {
  slug: 'mcp-governance-for-regulated-firms',
  title: 'MCP governance: a technical guide to letting AI agents into your systems',
  seoTitle: 'MCP governance: a technical guide',
  summary:
    'How MCP authorization, tool metadata and gateways work, what real incidents exploited, and the controls regulated firms need before agents go live.',
  category: 'Security & Compliance',
  readTime: '13 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-11',
  reviewedAt: '2026-11-11',
  tags: {
    industries: ['legal-professional-services', 'financial-services', 'software-saas'],
    services: ['applied-ai', 'ai-governance', 'agentic-automation', 'local-ai'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Plugging an agent into a system over the Model Context Protocol takes an afternoon. Explaining to your CISO, or to a client’s outside-counsel guidelines, exactly what that agent can reach and on whose authority takes considerably longer. That second job is what we mean by MCP governance.',
        'It comes down to four questions you should be able to answer for every agent in production. Which servers can it connect to? Whose permissions does it use when it gets there? What can it change without a person signing off? And what record exists afterwards? This guide works through each one at the level of the protocol, because most of the useful controls live in details that policy documents tend to skip.',
        'For context: Anthropic released MCP in November 2024 and donated it to the Linux Foundation’s Agentic AI Foundation in December 2025. Everything below refers to the specification dated July 28, 2026, which is current as we write.',
      ],
    },
    {
      heading: 'What actually happens on an MCP call',
      paragraphs: [
        'An MCP host is the application the user works in, such as Claude Desktop, an IDE or your own agent. The host runs one MCP client per server it connects to. Servers expose tools (functions the model can call), resources (data it can read) and prompts. Messages are JSON-RPC 2.0, carried either over stdio, when the server is a local process the host starts, or over Streamable HTTP, when the server is remote.',
        'Two methods matter most for governance. `tools/list` returns every tool the server offers, each with a name, a plain-language description, a JSON Schema for its inputs and optional annotations. `tools/call` invokes one of them. The detail people miss is that the description is not documentation for humans. It is placed in the model’s context, and the model reads it as guidance on when and how to use the tool. Whoever controls that text has a say in what your agent does.',
      ],
      code: {
        lang: 'json',
        caption: 'One entry from a tools/list response. The description is read by the model; the annotations are hints the server declares about itself.',
        text: `{
  "name": "search_matters",
  "description": "Search open matters by client or party name. Returns matter number, title and responsible partner.",
  "inputSchema": {
    "type": "object",
    "properties": { "query": { "type": "string" } },
    "required": ["query"]
  },
  "annotations": {
    "readOnlyHint": true,
    "openWorldHint": false
  }
}`,
      },
    },
    {
      paragraphs: [
        'Those annotations look like a permission system. They are not. The specification calls them hints and says clients must treat them as untrusted unless they come from a trusted server. A malicious or buggy server can mark a tool `readOnlyHint: true` and delete records anyway. Use annotations to decide when to prompt a user; enforce read-only access in the backend system itself.',
      ],
    },
    {
      heading: 'Three incidents, three different failure points',
      paragraphs: [
        'It helps to look at what has gone wrong in practice, because the failures did not come from one place.',
        'In June 2025 Asana found a logic flaw in the MCP server it had launched in May. Requests from one organization could return data belonging to another. Asana took the server offline for nearly two weeks and contacted about 1,000 potentially affected customers. Nothing was wrong with the protocol or the model; tenant isolation failed inside the server.',
        'In September 2025 Koi Security found an npm package called `postmark-mcp` that imitated Postmark’s real MCP server. Versions up to 1.0.15 behaved normally. Version 1.0.16 added one line that blind-copied every outgoing email to an address the publisher controlled. Postmark confirmed it had nothing to do with the package. This was an ordinary supply-chain attack on a new kind of package.',
        'On June 30, 2026 Microsoft Incident Response described an attack on a finance workflow in which the description of an approved third-party MCP tool was edited to steer the agent into gathering data and sending it out. Each tool call looked legitimate on its own. The attack lived entirely in metadata the agent trusted.',
        'Each of those needs a different control: server-side testing and vendor due diligence for the first, package provenance and version pinning for the second, and change control over tool metadata for the third. A single “AI security” checkbox does not cover them.',
      ],
    },
    {
      heading: 'Authorization: what the spec requires',
      paragraphs: [
        'For remote servers, MCP authorization is OAuth 2.1 with a few specific rules. The MCP server is an OAuth resource server. It does not issue tokens; it accepts them. When a client calls it without a valid token, the server returns `401` with a `WWW-Authenticate` header pointing to its Protected Resource Metadata document (RFC 9728). That document names the authorization server or servers the MCP server trusts. The client then discovers the authorization server’s endpoints through RFC 8414 metadata or OpenID Connect Discovery and runs an authorization code flow with PKCE.',
      ],
      code: {
        lang: 'http',
        caption: 'Discovery starts with a 401. The client follows resource_metadata to find which authorization server to use.',
        text: `HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer resource_metadata="https://mcp.example-firm.com/.well-known/oauth-protected-resource"

GET /.well-known/oauth-protected-resource
{
  "resource": "https://mcp.example-firm.com",
  "authorization_servers": ["https://login.example-firm.com"],
  "scopes_supported": ["matters.read", "matters.write"]
}`,
      },
    },
    {
      paragraphs: [
        'Three rules in that flow carry most of the security weight. First, clients must send the `resource` parameter from RFC 8707 in both the authorization and token requests, so the token is minted for one specific MCP server. Second, the server must check that a token was issued for it and reject anything else. Third, token passthrough is forbidden: an MCP server must not forward the token it received to an upstream API. If the server needs to call your document management system on the user’s behalf, it is a client of that system and gets its own token, for example through an RFC 8693 token exchange.',
        'The July 2026 release tightened this further. Clients must validate the `iss` parameter (RFC 9207) on the authorization response before redeeming the code, which closes a mix-up attack where a client is tricked into sending a code to the wrong authorization server. Client credentials are now bound to the authorization server that issued them and cannot be reused with another. Dynamic Client Registration is deprecated in favor of Client ID Metadata Documents, where the client ID is a URL pointing to a document the client publishes about itself. DCR still works for now but will be removed in a future version.',
        'If you build an MCP server that proxies a third-party API, read the confused deputy section of the security best practices. When a proxy uses one static client ID with the upstream provider, the provider’s consent cookie can let a malicious client obtain an authorization code without the user ever seeing a consent screen. The specification requires such proxies to collect consent per client before forwarding the user upstream.',
      ],
    },
    {
      heading: 'Putting the identity provider back in charge',
      paragraphs: [
        'Plain OAuth leaves the decision with each employee: they see a consent screen and click allow. That is the wrong place for a bank or a law firm to make access decisions. The Enterprise-Managed Authorization extension, declared stable on June 18, 2026, moves the decision to your identity provider.',
        'The flow has two token requests. After the user signs in to the MCP host with SSO, the client performs an RFC 8693 token exchange at your IdP and receives an Identity Assertion JWT Authorization Grant, or ID-JAG, scoped to one MCP server. The client then presents the ID-JAG to that server’s authorization server using the RFC 7523 JWT bearer grant and receives an ordinary access token. The user never sees a consent screen, and an administrator decides once, in the IdP, which groups may reach which servers.',
        'Two caveats. The ID-JAG itself is still an IETF draft. And the flow only works when the client, the IdP and the MCP server all support it, which in late 2026 is true for a growing but still partial set of products. Ask each vendor directly before you plan around it.',
      ],
    },
    {
      heading: 'Treat tool metadata as code',
      paragraphs: [
        'Once you accept that a tool description is an instruction to the model, the controls follow naturally. You would not let a third party change code in production without review. Tool metadata deserves the same treatment.',
      ],
      bullets: [
        'Pin each approved server to a version and record a hash of its `tools/list` output at approval time.',
        'Compare the live `tools/list` against that hash on every connection. If a description, schema or annotation changes, block the server until someone reviews the diff. This also catches the “rug pull”, where a tool behaves well until after approval.',
        'Install servers only from the publisher’s own repository or a registry you control, never a package found by name in a public index.',
        'Enforce read-only and scope limits in the target system, with a database role or API scope that cannot write, rather than relying on what the server says about itself.',
        'Treat everything a tool returns as untrusted input. An email or document can contain instructions aimed at the agent, which is why write actions need a person in the loop.',
      ],
    },
    {
      heading: 'Designing the gateway',
      paragraphs: [
        'Past a handful of agents, put a gateway between MCP clients and servers. It is one place to authenticate callers, apply per-role allowlists, inspect tool metadata, rate-limit, filter egress and write the audit log. Without one, each of those controls has to be rebuilt in every client and every server, and some never will be.',
        'Two changes in the July 2026 specification make gateways easier to run. Every Streamable HTTP request must now carry `Mcp-Method` and `Mcp-Name` headers, such as `tools/call` and `search_matters`, so a gateway or WAF can route and meter on the operation without parsing JSON bodies. And protocol sessions are gone: the `initialize` handshake and the `Mcp-Session-Id` header were retired, and each request carries its own version and capabilities, so gateway and server instances can sit behind a plain round-robin load balancer. One recommendation of our own: if you enforce policy on the headers, also check that they match the JSON-RPC body and reject the request when they do not.',
      ],
      code: {
        lang: 'yaml',
        caption: 'An illustrative gateway policy. The format is ours, not part of the spec; the point is what it encodes.',
        text: `server: dms-matters
version: 2.4.1
tools_list_sha256: 3f9c1e...b72a        # recorded at approval
on_metadata_change: block_and_review
allow:
  - role: associate
    tools: [search_matters, get_matter_summary]
  - role: partner
    tools: [search_matters, get_matter_summary, add_file_note]
require_approval:
  - tool: add_file_note
    approver: requesting_user
egress: deny_all                        # server may not call the internet
response_filters: [client_identifiers, account_numbers]
rate_limit: 60/min per user
kill_switch: enabled`,
      },
    },
    {
      heading: 'Local servers run as the user',
      paragraphs: [
        'A stdio server is a process on the user’s machine. It runs with that user’s file access, network access and stored credentials, and nothing in the protocol sandboxes it. Some developer tools will also start servers listed in a project’s configuration file, so opening an unfamiliar repository with MCP enabled can mean running someone else’s code. The security best practices require clients to show the exact command and get explicit approval before a one-click setup installs a local server.',
        'For a regulated firm, that points to a short list. Allow only approved local server packages through endpoint management. Run them in a container or sandbox where you can. Keep API keys out of MCP configuration files, which tend to end up in repositories and backups. And include developers’ local servers in the inventory; OWASP lists shadow MCP servers as its ninth risk for a reason.',
      ],
    },
    {
      heading: 'Logging something you can actually use',
      paragraphs: [
        'Missing audit and telemetry is number eight on the OWASP MCP Top 10. The fix is not more log volume. It is one record per tool call, written by the gateway, that ties together the person, the agent, the server, the exact tool and arguments, what came back, and who approved any change. For privileged or regulated content you may prefer to store a hash of the arguments and response alongside a pointer to the source record, rather than the text itself.',
        'Do not rely on the protocol’s own Logging feature for this. It was deprecated in the July 2026 release, along with Roots and Sampling, and in any case it is the server reporting on itself.',
      ],
      code: {
        lang: 'json',
        caption: 'An illustrative audit record for one tool call. Field names are our suggestion.',
        text: `{
  "ts": "2026-11-11T09:42:17Z",
  "trace_id": "a71c0e4d2b",
  "user": "j.rao@example-firm.com",
  "agent": "intake-assistant",
  "server": "dms-matters@2.4.1",
  "method": "tools/call",
  "tool": "add_file_note",
  "args_sha256": "9be0...41d2",
  "data_class": "privileged",
  "result": "ok",
  "approved_by": "j.rao@example-firm.com",
  "approved_at": "2026-11-11T09:42:09Z"
}`,
      },
    },
    {
      paragraphs: [
        'Keep a trace ID that spans every call in one agent run. Attacks like the one Microsoft described look harmless one call at a time. They stand out as a sequence, such as a read from a sensitive system followed by a write to an external one. Records like this also map directly to what the NIST AI RMF expects under its Manage function, and to the record-keeping and human-oversight obligations for high-risk systems under the EU AI Act.',
      ],
    },
    {
      heading: 'Keeping up with the specification',
      paragraphs: [
        'MCP now has a formal deprecation policy with a minimum window of twelve months. The July 2026 release deprecated Roots, Sampling and Logging, the older HTTP+SSE transport and Dynamic Client Registration. None of them stops working overnight, but servers and clients that depend on them have a clock running. Record the protocol version of every server in your inventory and review the list whenever a new specification is published.',
      ],
    },
    {
      heading: 'Who owns what',
      paragraphs: [
        'In most firms, security owns the approved server list, the gateway rules and the metadata reviews. Identity or IT owns the IdP policy that decides which groups reach which servers. The business owner of each agent decides which tools need human approval, because they know what a wrong action costs. Risk, compliance or the general counsel sets the data classes and reviews the logs. The platform team runs the servers and keeps versions current. Write that split down; MCP governance stalls fastest when everyone assumes someone else approved the server.',
      ],
    },
    {
      heading: 'If you are starting this month',
      paragraphs: [
        'Inventory first, including local servers on developer machines. Then block anything not on the list. Put your two or three most sensitive connections behind a gateway with per-user tokens and a recorded `tools/list` hash, switch on approval for every write tool those agents have, and start writing audit records to your own systems. Review one week of those records with the business owner before you add the next server. That is a month of work for a small team, and it covers most of what the incidents above exploited.',
      ],
    },
    {
      heading: 'Where local models fit',
      paragraphs: [
        'Running the model on your own hardware keeps prompts and documents inside your network, which matters for privileged and regulated data. It does nothing about what the agent can reach. An agent backed by a local model still connects to your systems over MCP, and a poisoned tool description or an over-privileged server is exactly as dangerous there. We treat the two as separate decisions: where the model runs, and what the agent is allowed to touch.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is MCP governance?',
      a: 'The controls that decide which AI agents may connect to which systems over the Model Context Protocol, whose permissions they use, which actions need a person to approve them, and what audit record is kept of each tool call.',
    },
    {
      q: 'Are MCP tool annotations like readOnlyHint a security control?',
      a: 'No. The MCP specification calls them hints and says clients must treat them as untrusted unless they come from a trusted server. Enforce read-only access in the target system, for example with a database role or API scope that cannot write.',
    },
    {
      q: 'Can an MCP server pass the user’s token to another API?',
      a: 'No. Token passthrough is forbidden by the specification. The server must only accept tokens issued for it, and it must obtain its own token for any upstream API, for example through an OAuth token exchange.',
    },
    {
      q: 'What is Enterprise-Managed Authorization in MCP?',
      a: 'An MCP extension, stable since June 18, 2026, that lets an organization’s identity provider decide which MCP servers each employee may use. The client exchanges an SSO assertion for an ID-JAG at the IdP and then for an access token at the MCP server’s authorization server.',
    },
    {
      q: 'What changed for security in the July 2026 MCP specification?',
      a: 'Clients must validate the RFC 9207 iss parameter, client credentials are bound to the authorization server that issued them, Dynamic Client Registration is deprecated in favor of Client ID Metadata Documents, and HTTP requests carry Mcp-Method and Mcp-Name headers that gateways can filter on.',
    },
  ],
  sources: [
    {
      title: 'The 2026-07-28 Specification',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28/',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Authorization (2026-07-28)',
      url: 'https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/index',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Authorization security considerations (2026-07-28)',
      url: 'https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Security Best Practices',
      url: 'https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Enterprise-Managed Authorization is now stable',
      url: 'https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Donating the Model Context Protocol and establishing the Agentic AI Foundation',
      url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation',
      publisher: 'Anthropic',
    },
    {
      title: 'Model Context Protocol (MCP): Security Design Considerations for AI-Driven Automation (press release)',
      url: 'https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/',
      publisher: 'National Security Agency',
    },
    {
      title: 'OWASP MCP Top 10',
      url: 'https://owasp.org/www-project-mcp-top-10/',
      publisher: 'OWASP',
    },
    {
      title: 'Securing AI agents: when AI tools move from reading to acting',
      url: 'https://www.microsoft.com/en-us/security/blog/2026/06/30/securing-ai-agents-ai-tools-move-from-reading-acting/',
      publisher: 'Microsoft Security',
    },
    {
      title: 'Asana Discloses Data Exposure Bug in MCP Server',
      url: 'https://www.upguard.com/blog/asana-discloses-data-exposure-bug-in-mcp-server',
      publisher: 'UpGuard',
    },
    {
      title: 'postmark-mcp: npm malicious backdoor email theft',
      url: 'https://www.koi.ai/blog/postmark-mcp-npm-malicious-backdoor-email-theft',
      publisher: 'Koi Security',
    },
  ],
  related: [
    { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
    { label: 'Local AI', href: '/what-we-do/applied-ai/local-ai' },
    { label: 'The anatomy of MCP', href: '/insights/anatomy-of-mcp' },
  ],
}
