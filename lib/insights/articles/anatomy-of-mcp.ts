import type { Article } from '../types'

/**
 * Published 2026-11-11. Companion to "MCP governance": what the protocol is
 * made of, as of the 2026-07-28 specification, for architects deciding how
 * to build or buy MCP integrations.
 *
 * Facts come from the sources listed. The JSON samples are illustrative:
 * method names and the _meta keys shown follow the specification and its
 * extension docs; payload contents are invented. The MRTR field names
 * (resultType, input_required, requestState) are as described in the
 * specification change notes; re-check them against the schema before
 * quoting this article in an implementation.
 *
 * Re-check each quarter: the registry is still a preview (API v0.1), and
 * the extension list grows.
 */
export const article: Article = {
  slug: 'anatomy-of-mcp',
  title: 'The anatomy of MCP: hosts, servers, messages and extensions',
  seoTitle: 'Anatomy of MCP (2026-07-28 spec)',
  summary:
    'What the Model Context Protocol is made of in the July 2026 spec: roles, messages, transports, primitives, round trips, extensions and the registry.',
  category: 'Applied AI',
  readTime: '10 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-11',
  reviewedAt: '2026-11-11',
  tags: {
    industries: ['legal-professional-services', 'financial-services', 'software-saas'],
    services: ['applied-ai', 'agentic-automation', 'claude'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Most explanations of the Model Context Protocol stop at “USB-C for AI”. That is fine for a slide. It is not enough when you are deciding whether to build an MCP server for your document system, which client to standardize on, or where a gateway should sit. For those decisions you need to know what the protocol is actually made of.',
        'This piece takes MCP apart as of the specification dated July 28, 2026. That release changed the protocol more than any since launch: the connection handshake is gone, servers no longer send requests to clients, and several features moved out of the core into extensions. If your mental model dates from 2025, parts of it are now wrong.',
      ],
    },
    {
      heading: 'Three roles',
      paragraphs: [
        'A host is the application the person works in: Claude, an IDE, or an agent you built. The host owns the model, the user interface and the decision about what the user is allowed to approve.',
        'Inside the host, an MCP client manages one connection to one server. A host that talks to five servers runs five clients. Keeping them separate matters, because each connection has its own authorization and its own set of tools, and nothing in the protocol lets one server see another’s traffic.',
        'A server exposes capabilities to the client. It might be a small local process wrapping your file system, or a hosted service in front of a CRM. Servers are where your data lives from the protocol’s point of view, and they are also where most of your engineering and security effort will go.',
      ],
      figure: {
        key: 'mcp-anatomy',
        caption: 'How the parts fit. The gateway is not part of the protocol, but most regulated deployments end up with one.',
      },
    },
    {
      heading: 'The wire format',
      paragraphs: [
        'Every MCP message is JSON-RPC 2.0. A request has an `id`, a `method` and `params`, and gets exactly one response with the same `id`. A notification has no `id` and gets no response. That is the whole envelope.',
        'Since July 2026 each request also describes itself. The protocol version and the client’s capabilities travel in a `_meta` object on every call, instead of being agreed once at connection time. It makes each message slightly larger and the system much simpler to run.',
      ],
      code: {
        lang: 'json',
        caption: 'A tool call under the 2026-07-28 specification. The _meta block replaces the old initialize handshake.',
        text: `{
  "jsonrpc": "2.0",
  "id": 42,
  "method": "tools/call",
  "params": {
    "name": "search_matters",
    "arguments": { "query": "Bluewater Logistics" },
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2026-07-28",
      "io.modelcontextprotocol/clientCapabilities": {
        "extensions": { "io.modelcontextprotocol/tasks": {} }
      }
    }
  }
}`,
      },
    },
    {
      heading: 'Two transports',
      paragraphs: [
        'With stdio, the host starts the server as a child process and the two exchange messages over standard input and output. There is no network, no port and no OAuth. The server simply runs with whatever access the user’s account has, which is convenient for a developer and a real consideration for a security team.',
        'Streamable HTTP is for remote servers. The client POSTs JSON-RPC messages to a single endpoint, and the server can answer with plain JSON or stream its reply. Two details from the 2026 release are worth knowing. Every request must carry `Mcp-Method` and `Mcp-Name` headers, so a load balancer, WAF or gateway can see that this is a `tools/call` to `search_matters` without parsing the body. And with the `Mcp-Session-Id` header gone, any server instance can answer any request, which means ordinary round-robin load balancing works and you do not need sticky sessions or a shared session store.',
        'The older HTTP+SSE transport, with its separate event stream endpoint, is deprecated. It still works for at least a year, but there is no reason to build on it now.',
      ],
    },
    {
      heading: 'Discovery without a handshake',
      paragraphs: [
        'Until 2026, every connection began with `initialize`, where client and server agreed on a version and exchanged capabilities. That exchange is retired. Servers must now implement `server/discover`, which returns the protocol versions, capabilities, extensions and identity the server supports. Clients may call it up front, but they do not have to; a client that already knows what it needs can go straight to `tools/list` or `tools/call`.',
      ],
    },
    {
      heading: 'What a server offers',
      paragraphs: [
        'Servers expose three kinds of thing, and the distinction is about who decides when each is used.',
      ],
      bullets: [
        'Tools are model-controlled. Each has a name, a description, a JSON Schema for its inputs and optional annotations. The model reads the descriptions and decides when to call `tools/call`. This is where actions happen, and where most risk sits.',
        'Resources are application-controlled. They are pieces of data identified by URI, read with `resources/read`, such as a matter file, a policy document or a database row. The host decides which ones to put in front of the model.',
        'Prompts are user-controlled. They are templates a server offers, such as “summarize this matter for a partner”, that a person picks from a menu.',
      ],
    },
    {
      paragraphs: [
        'In practice, tools get most of the attention because they are what turn a chat assistant into an agent. Resources are underused. If the model only needs to read a document, exposing it as a resource keeps control with the host rather than the model, which is often what a compliance team wants.',
      ],
    },
    {
      heading: 'When the server needs something back',
      paragraphs: [
        'Older versions let a server send requests to the client in the middle of a call: ask the user a question (elicitation), ask the host’s model to generate text (sampling), or ask which folders it may work in (roots). All of those relied on a connection held open in both directions, which a stateless protocol cannot offer.',
        'The 2026 specification replaces them with multi round-trip requests. When a server needs input, it does not call the client. It finishes the call with a result that says input is required, describes what it needs, and includes an opaque `requestState` value. The client collects the answer, typically by asking the user, and sends the original request again with the answer and the same `requestState`. The server picks up where it left off without holding any memory between the two calls.',
        'Sampling, roots and the protocol’s logging feature are deprecated along the way. Servers that need a model of their own are expected to call a model provider directly.',
      ],
      code: {
        lang: 'json',
        caption: 'Illustrative: the server needs a confirmation before it files a note, so it returns input_required instead of a final result.',
        text: `{
  "jsonrpc": "2.0",
  "id": 43,
  "result": {
    "resultType": "input_required",
    "requestState": "eyJzdGVwIjoiY29uZmlybSJ9...",
    "input": {
      "message": "File this note on matter 2291 (Acme internal investigation)?",
      "schema": {
        "type": "object",
        "properties": { "confirm": { "type": "boolean" } },
        "required": ["confirm"]
      }
    }
  }
}`,
      },
    },
    {
      heading: 'Long-running work: the Tasks extension',
      paragraphs: [
        'Some calls take minutes, such as running a conflict search across a large client database or generating a due-diligence pack. Tasks, which were experimental inside the core, became the extension `io.modelcontextprotocol/tasks` in July 2026. A client that supports it says so in its capabilities. The server then decides whether a given `tools/call` should run as a task, and if so answers with a task handle instead of a result. The client polls with `tasks/get`, sends further input with `tasks/update` and can stop the work with `tasks/cancel`.',
      ],
    },
    {
      heading: 'Extensions',
      paragraphs: [
        'Extensions are how MCP grows without bloating the core. Each has a reverse-DNS identifier, is off by default, and only applies when both client and server declare support. A server must still behave sensibly for clients that ignore it. Three are worth knowing now.',
      ],
      bullets: [
        'MCP Apps (`io.modelcontextprotocol/ui`), the first official extension, released in January 2026. A server can ship an interactive HTML interface as a `ui://` resource, which supporting hosts render in a sandboxed iframe next to the conversation.',
        'Tasks (`io.modelcontextprotocol/tasks`), described above.',
        'Enterprise-Managed Authorization, stable since June 2026, which lets an organization’s identity provider decide which servers each employee may use. Our MCP governance article walks through the token flow.',
      ],
    },
    {
      heading: 'Authorization, in one paragraph',
      paragraphs: [
        'Local stdio servers have no protocol-level authorization at all. Remote servers use OAuth 2.1: the server is a resource server that publishes Protected Resource Metadata telling clients which authorization server to use, clients use PKCE and name the target server with the `resource` parameter so each token is valid for one server only, and a server may never forward the token it received to another API. The July 2026 release added issuer validation, bound client credentials to the authorization server that issued them, and deprecated Dynamic Client Registration in favor of Client ID Metadata Documents. The governance article covers this in detail.',
      ],
    },
    {
      heading: 'The registry',
      paragraphs: [
        'The official MCP Registry at registry.modelcontextprotocol.io launched in preview in September 2025 and, as of November 2026, is still a preview with its API at v0.1. It does not host code. It stores metadata in a `server.json` file: a reverse-DNS name, a version, and where to get the server, either a package on npm, PyPI or a container registry, or a remote URL.',
        'The registry verifies namespaces. To publish under `io.github.your-account` you sign in with GitHub, and to publish under your own domain you prove control with a DNS or HTTP check. Be clear about what that proves. It tells you who published the metadata. It says nothing about who operates a remote endpoint the metadata points to, or whether the code is safe. For a regulated firm the registry is a useful starting point for discovery, and the registry software can be self-hosted as a private catalog. It is not an approval process.',
      ],
      code: {
        lang: 'json',
        caption: 'A minimal server.json for a hosted server. Name and URL are invented.',
        text: `{
  "$schema": "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
  "name": "com.example-firm/matters",
  "description": "Search and summarize open matters.",
  "version": "2.4.1",
  "remotes": [
    { "type": "streamable-http", "url": "https://mcp.example-firm.com/mcp" }
  ]
}`,
      },
    },
    {
      heading: 'What this means if you are building',
      paragraphs: [
        'A few things follow from the anatomy that are easy to miss on a first read of the specification.',
        'Design remote servers to be stateless from day one. The protocol no longer gives you a session, so anything a server needs to remember across a multi-step interaction belongs in `requestState`, a task, or your own data store, not in process memory.',
        'Decide early which of your data is a resource and which actions are tools. Moving a read-only lookup from a tool to a resource changes who controls it, and that is a governance decision as much as a technical one.',
        'Do not build new work on sampling, roots, the logging feature, HTTP+SSE or Dynamic Client Registration. They all still work, and they are all on a deprecation clock of at least twelve months.',
        'Put the gateway in the drawing before you put it in production. The new headers make it cheap to run, and most of the controls in our MCP governance guide assume it is there.',
      ],
    },
  ],
  faq: [
    {
      q: 'What are the main parts of MCP?',
      a: 'Hosts, which are the applications people use; clients, one per server connection inside the host; and servers, which expose tools, resources and prompts. Messages are JSON-RPC 2.0 over stdio for local servers or Streamable HTTP for remote ones.',
    },
    {
      q: 'Is MCP stateless now?',
      a: 'Yes, at the protocol layer, from the 2026-07-28 specification. The initialize handshake and the Mcp-Session-Id header were removed, and each request carries its protocol version and client capabilities in _meta. Servers must implement server/discover; clients may call it.',
    },
    {
      q: 'What is the difference between MCP tools and resources?',
      a: 'Tools are model-controlled actions the model decides to call. Resources are application-controlled data identified by URI, which the host chooses to give the model. Prompts are user-controlled templates.',
    },
    {
      q: 'How does an MCP server ask the user a question now?',
      a: 'Through a multi round-trip request. The server returns a result saying input is required, with what it needs and an opaque requestState. The client gathers the answer and resends the original request with it. Servers no longer send requests to clients.',
    },
    {
      q: 'Does the MCP Registry vet servers?',
      a: 'No. It verifies that the publisher controls the namespace, through GitHub sign-in or a DNS or HTTP check, and stores the server’s metadata. It does not check the code or who runs a remote endpoint. As of November 2026 it is still a preview.',
    },
  ],
  sources: [
    {
      title: 'The 2026-07-28 Specification',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28/',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'The 2026-07-28 MCP Specification Release Candidate',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Authorization (2026-07-28)',
      url: 'https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/index',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'MCP Apps overview',
      url: 'https://modelcontextprotocol.io/extensions/apps/overview',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Enterprise-Managed Authorization extension',
      url: 'https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'The MCP Registry',
      url: 'https://modelcontextprotocol.io/registry',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'MCP went stateless: what changed in the 2026-07-28 spec',
      url: 'https://workos.com/blog/mcp-stateless-spec-2026-07-28',
      publisher: 'WorkOS',
    },
  ],
  related: [
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'Claude practice', href: '/what-we-do/applied-ai/claude' },
    { label: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation' },
  ],
}
