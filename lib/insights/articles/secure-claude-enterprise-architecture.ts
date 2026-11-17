import type { Article } from '../types'

/**
 * Published 2026-11-17. Reference architecture for running the Claude API
 * in a regulated enterprise, adapted from YatiSphere's architecture
 * blueprint. Four drawings in components/insights/ClaudeArchitectureDiagrams.
 * Provider facts checked on 2026-11-17 against Anthropic's Claude Platform
 * docs (data retention, workload identity federation, workspaces, Admin API,
 * Claude Platform on AWS, Claude in Microsoft Foundry), AWS Bedrock VPC
 * endpoint docs, Google Cloud Vertex AI networking docs and the MCP
 * authorization spec (revision 2026-07-28).
 */
export const article: Article = {
  slug: 'secure-claude-enterprise-architecture',
  title: 'A secure architecture for the Claude API in the enterprise',
  seoTitle: 'Secure Claude API architecture for the enterprise',
  summary:
    'A reference architecture for the Claude API in regulated firms: one gateway, no static keys, private routes, approval gates and logs an auditor can follow.',
  category: 'Security & Compliance',
  readTime: '15 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-17',
  reviewedAt: '2026-11-17',
  tags: {
    industries: ['financial-services', 'legal-professional-services', 'software-saas'],
    services: ['claude', 'applied-ai', 'ai-governance', 'security-compliance'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'You can get Claude answering questions in an afternoon. Getting it through a security review at a bank or a law firm is a different job. The reviewers ask the same five things every time: who can call the model, which company processes the data, what gets kept and for how long, what an agent is allowed to change, and how you would find out if something went wrong.',
        'Below is the architecture we use to answer them. It holds up whether you reach Claude through Anthropic’s own API, Claude Platform on AWS, Amazon Bedrock, Google Cloud or Microsoft Foundry, and it leaves you free to change route later. If you haven’t picked a route yet, start with our comparison of [Claude enterprise deployment options](/insights/claude-enterprise-deployment-options).',
        'A quick warning: the provider details here are correct as of November 2026, and they move fast. Check anything you depend on against the current docs before you build.',
      ],
    },
    {
      heading: '1. Give Claude one front door',
      paragraphs: [
        'If you only take one idea from this piece, take this one: no application should call a model provider directly. Every call goes through an AI gateway that you own and run inside your network. The gateway works out who is calling, applies your data and spend rules, writes a log line, and sends the request down the one route that caller is cleared to use.',
        'Agents need a second door, for tools. That is the MCP gateway, which checks the agent’s identity and its tool list before anything touches a system of record. Logging, evaluation, cost control and incident runbooks don’t belong to any one box in the drawing. They watch all of them.',
      ],
      figure: {
        key: 'claude-reference-architecture',
        caption: 'Logical architecture. Numbers match the interface table: protocol and authentication on every hop.',
      },
      bullets: [
        'You probably own a gateway already. Azure API Management, Amazon API Gateway, Apigee and Kong all do the job, and so do dedicated LLM gateways. Spend your time on the policy; the product choice matters much less.',
        'With routing and policy in one place, moving a workload from one Claude route to another becomes a config change. Nobody has to touch application code.',
      ],
    },
    {
      heading: '2. Pick the route by who processes the data',
      paragraphs: [
        'Before you compare features, settle who is allowed to process your data. That question alone usually knocks out half the options. On the Claude API, Claude Platform on AWS and Microsoft Foundry, Anthropic processes prompts and outputs. On Amazon Bedrock and the Google-managed version of Google Cloud’s Gemini Enterprise Agent Platform, the cloud provider does.',
        'Nothing stops you running several routes, one per data class, all behind the same gateway. Whichever route you land on, check its region, retention mode and features before you build.',
        'Figure 2 sets the five routes side by side. To pick one, work through these in order and stop at the first match:',
      ],
      bullets: [
        'Only your cloud provider may process the data: Amazon Bedrock, or the Google-managed version of Google Cloud.',
        'You need a HIPAA BAA with Anthropic: the Claude API with a HIPAA-enabled organization.',
        'You want AWS IAM and AWS billing: Claude Platform on AWS.',
        'You are standardized on Microsoft Azure: Microsoft Foundry.',
        'None of the above: the Claude API direct, where new models and features usually land first.',
      ],
      figure: {
        key: 'claude-route-decision',
        caption: 'Route matrix: processor, workload identity, private path, audit trail and HIPAA coverage for each route.',
      },
    },
    {
      heading: '3. Get rid of static API keys',
      paragraphs: [
        'Many AI credential leaks start with a long-lived API key. Someone copies it into a CI variable, pastes it into a notebook, or commits it by accident, and it works for anyone who finds it. The better pattern is to give each workload a short-lived identity from the identity provider you already run, and let the gateway hold its own credential for the provider.',
        'On the Claude API, that means workload identity federation. The workload presents a JWT from AWS IAM, Google Cloud or any standards-compliant OIDC issuer (GitHub Actions, Kubernetes, Microsoft Entra ID and Okta all qualify), and Anthropic swaps it for a short-lived token. You can set the token lifetime anywhere from 60 seconds to 24 hours; the default is one hour. On the cloud routes, a cloud IAM role does the same job, and Claude Platform on AWS uses SigV4 signing as its main method.',
        'Watch for one thing during migration. If an old `ANTHROPIC_API_KEY` environment variable is still set, it quietly overrides federation, and everything looks fine until someone audits it. Unset it everywhere the workload runs.',
      ],
      bullets: [
        'People sign in through Microsoft Entra ID or Okta with MFA. Console and cloud admin roles use named accounts, never shared ones.',
        'Workloads reach the gateway with OIDC tokens from your identity provider.',
        'Each agent gets its own identity. Don’t let agents borrow a shared service account or a person’s token; we explain why in [every AI agent needs an identity](/insights/ai-agent-identity-access-delegation).',
        'Create one Claude Console workspace per environment and data class. Each has its own members, keys, rate limits and spend limit, and a key scoped to a workspace can reach only that workspace. Use workspace-scoped keys, or service accounts with explicit workspace memberships.',
        'Keep Admin API keys (`sk-ant-admin...`) in a vault, and let only automation use them.',
      ],
      code: {
        lang: 'bash',
        caption: 'Workload identity federation for the Claude SDK, configured through environment variables. The workload holds no API key.',
        text: `ANTHROPIC_FEDERATION_RULE_ID=fdrl_...
ANTHROPIC_ORGANIZATION_ID=<organization uuid>
ANTHROPIC_SERVICE_ACCOUNT_ID=svac_...
ANTHROPIC_WORKSPACE_ID=wrkspc_...
ANTHROPIC_IDENTITY_TOKEN_FILE=/var/run/secrets/anthropic.com/token
# and make sure ANTHROPIC_API_KEY is unset`,
      },
    },
    {
      heading: '4. Lock down the network',
      paragraphs: [
        'Model traffic should have exactly two ways out of your network. One is a private endpoint to a cloud AI service. The other is an egress proxy that allows the approved provider API and nothing else. Your applications and agents live in a subnet with no internet route at all, which means the only way they can reach Claude is through the gateway.',
      ],
      figure: {
        key: 'claude-network-boundary',
        caption: 'Network view on AWS: subnets, route tables and security groups. Only the egress subnet has a default route.',
      },
      bullets: [
        'On AWS, create an interface endpoint for the Bedrock endpoint you call, `com.amazonaws.<region>.bedrock-mantle` (Messages API) or `com.amazonaws.<region>.bedrock-runtime` (InvokeModel and Converse), or for `com.amazonaws.<region>.aws-external-anthropic` (Claude Platform on AWS). Turn on private DNS and the SDK keeps its normal base URL. On Bedrock, an endpoint policy can then limit which principals and models are allowed.',
        'On Google Cloud, use a Private Service Connect endpoint for Google APIs and put the project inside a VPC Service Controls perimeter.',
        'On Azure, place the Foundry resource in an Azure Virtual Network.',
        'For the direct Claude API, run an egress proxy that allows only the provider API host and logs every connection. Block other AI endpoints by default too. It stops people quietly wiring unapproved AI tools into your network.',
        'Pin each route to the regions your rules allow. Claude Platform on AWS can run US-only inference per request at 1.1x the price, and Foundry offers Global and US Data Zone deployments.',
      ],
    },
    {
      heading: '5. What the gateway does with each call',
      paragraphs: [
        'The gateway runs the same checks, in the same order, on every request. The important ones are strict: if a check can’t run, the request doesn’t leave. A logging outage should stop traffic rather than let it through unrecorded.',
      ],
      bullets: [
        'Authenticate the caller and tie it to an app, a team and, where relevant, an agent.',
        'Confirm that caller may use this model, route and data class.',
        'Classify the request as public, internal, confidential or restricted, using the app’s registration plus content checks.',
        'Strip or tokenize PII and secrets the use case doesn’t need. This shrinks what leaves your network, but the processor stays the same.',
        'Screen the input for prompt injection and policy breaches. On AWS, Bedrock Guardrails can handle this, and on the bedrock-runtime endpoint IAM can insist on a guardrail for every InvokeModel or Converse call. Guardrails are not available on bedrock-mantle.',
        'Count tokens and requests against each app’s quota and monthly budget.',
        'Send the request to the approved route and model. A fallback route is fine, as long as it is approved for the same data class.',
        'Check the output for leaked secrets, PII and unsafe content.',
        'Log the caller, app, model, route, tokens, cost, data class, each policy decision and a trace ID.',
      ],
    },
    {
      heading: '6. Know what gets stored, and for how long',
      paragraphs: [
        'Anthropic says retained data is never used to train models without your express permission. Retention itself is the trickier part, because it varies by feature. Under zero data retention (ZDR), Anthropic doesn’t keep prompts or responses at rest once the response is returned. You get ZDR per organization through Anthropic’s sales team, and it covers the Messages and Token Counting APIs for eligible features, Claude Code with Console API keys, Claude Platform on AWS, and Anthropic-managed Claude on Google Cloud.',
        'Several features fall outside ZDR, and your design should account for that. Our rule is simple: anything that needs retention gets its own workspace and its own data-class approval, so a ZDR workspace can never call it by mistake. Also note that if Anthropic’s trust and safety systems flag a session, its inputs and outputs may be kept for up to two years, ZDR or HIPAA notwithstanding.',
        'For HIPAA, you need a signed BAA and a HIPAA-enabled organization. That covers eligible Claude API features, and once you enable it for an API organization, you can’t switch it off. Claude in Microsoft Foundry also needs the HIPAA configuration on your Azure subscription, arranged through your Anthropic account team. It doesn’t extend to Bedrock, Google Cloud’s Agent Platform, Claude Platform on AWS or Claude Code. On Bedrock and Google-managed Google Cloud, the cloud provider’s terms apply instead of Anthropic’s ZDR program.',
      ],
      code: {
        lang: 'text',
        caption: 'Features that retain data outside ZDR, per Anthropic’s data retention docs (November 2026).',
        text: `Feature                      Retention
Batch processing             29 days, not ZDR eligible
Files API                    Until deleted or expired
Code execution tool          Container data up to 30 days
Programmatic tool calling    Up to 30 days
Managed Agents (hosted)      Until you delete transcripts
MCP connector                Standard; not ZDR eligible
Agent Skills                 Standard; not ZDR eligible
Fable and Mythos models      Require 30-day retention
Prompt caching               Memory only; ZDR eligible`,
      },
    },
    {
      heading: '7. Agents only act through approved tools',
      paragraphs: [
        'Agents are the point where Claude stops suggesting things and starts doing them, so this is where most of the risk lives. Every tool call goes through the MCP gateway. Read-only tools run with a token scoped to a single server. Anything that changes data waits until a named person approves it.',
        'The current MCP specification (revision 2026-07-28) treats a protected MCP server as an OAuth 2.1 resource server, and clients must use RFC 8707 resource indicators so each token is minted for one specific server. Hold every remote MCP server you allow to that standard, including the ones vendors host for you. Our [MCP governance guide](/insights/mcp-governance-for-regulated-firms) goes deeper on the gateway itself.',
      ],
      figure: {
        key: 'claude-agent-approval',
        caption: 'Sequence for one agent tool call. Reads run with a scoped token; writes wait for a named approver.',
      },
      bullets: [
        'Give each agent the tools its job needs and no more. Adding a tool should trigger a security review and a fresh run of the test suite.',
        'Payments, filings, client messages, deletions and permission changes all wait for approval. Our [kill switch and approval design](/insights/ai-agent-kill-switches-approvals-audit-logs) walks through how.',
        'Documents, emails and web pages the agent retrieves are data. They can’t add tools or rewrite the agent’s instructions, however they are worded.',
        'Cap steps, tool calls and tokens per run at both gateways. Limits that live only in the agent’s own code are easy to bypass.',
        'Make the kill switch a single action that revokes the agent’s identity, blocks its tools and stops new runs. Practice it every quarter, because a switch nobody has used tends to fail on the day.',
      ],
    },
    {
      heading: '8. Leave a trail an auditor can follow',
      paragraphs: [
        'Pick any decision Claude helped with. An auditor should be able to see who asked, what Claude was given, what it said back, which tools it called and who signed off on the result. To get there, carry one trace ID from the user’s request through the gateway, every model call, every tool call and the approval record, and send all of it to your SIEM.',
        'Evaluation belongs in the same picture. Agree acceptance tests and pass marks with the business owner before you build. Rerun them whenever the model, prompt, tools or retrieval data change, and sample production answers every week. [Testing AI agents before production](/insights/testing-ai-agents-before-production) sets out the test plan.',
      ],
      bullets: [
        'From the gateway: caller, app, agent, model, route, tokens, cost, data class and policy decisions.',
        'Prompt and response text only where the use case needs it, encrypted, and kept for the shortest time you can defend.',
        'From the providers: CloudTrail for Bedrock and Claude Platform on AWS (inference on Claude Platform on AWS and on bedrock-mantle is logged as data events you have to switch on; bedrock-runtime inference is logged as management events by default), Google Cloud audit logs, Azure Monitor, and the Claude Console usage, cost and activity APIs.',
        'Every admin change to keys, workspaces, members and limits, with alerts on them.',
      ],
    },
    {
      heading: '9. Treat Claude Code as privileged tooling',
      paragraphs: [
        'Claude Code runs on developer laptops with access to source code, terminals and credentials. Handle it the way you would any other tool with that reach. The first decision is how your policy gets onto those machines. Enterprise seats come with server-managed settings and analytics. A Console organization issues each person a key in a dedicated Claude Code workspace; you can set per-user monthly spend limits, and the key dies when the person leaves. If you run it through a cloud route behind your gateway, you push managed settings files with device management.',
      ],
      bullets: [
        'Block reads of secrets: `.env` files, key stores and cloud credential folders.',
        'Keep a short allow-list of shell commands Claude Code can run without asking. Everything else prompts the developer.',
        'Allow only MCP servers registered through the MCP gateway.',
        'Block direct pushes to protected branches. Changes Claude writes go through pull requests and review like anyone else’s.',
        'On networks without internet egress, point Claude Code at Bedrock through a PrivateLink endpoint, or at your gateway, and turn off nonessential traffic such as telemetry.',
      ],
    },
    {
      heading: '10. Put spend limits in three places',
      paragraphs: [
        'One runaway loop shouldn’t be able to produce a bill that surprises anyone. Set limits per app at the gateway, per workspace or account at the provider, and per month in finance. Anthropic checks workspace and organization limits on every request, so the organization limit still applies to a workspace that has none of its own.',
        'Your model choice will save you more than your route choice. Send routine work to Claude Sonnet or Haiku and save Opus for the genuinely hard cases. Use prompt caching for long context you send again and again. And budget for agents carefully, because one task can turn into dozens of calls.',
      ],
    },
    {
      heading: '11. Mapping the controls to your frameworks',
      paragraphs: [
        'Anthropic holds ISO 27001:2022, ISO/IEC 42001:2023 and SOC 2 Type I and Type II, with reports available through its Trust Portal. That covers the provider’s side. Your side is the controls in this article, and they line up well with the frameworks regulated firms already report against. Use the mapping below as a starting point for a conversation with your auditor. It is not a certification claim.',
      ],
      bullets: [
        'Identity and agent identities: SOC 2 CC6.1 to CC6.3; ISO 27001 Annex A 5.15 to 5.18.',
        'Choosing the route by data processor: SOC 2 CC9.2; ISO 27001 5.19 to 5.23 (suppliers and cloud services).',
        'Redaction, classification and egress control: SOC 2 CC6.6 and CC6.7; ISO 27001 8.11, 8.12 and 8.20 to 8.22.',
        'Logging and trace IDs: SOC 2 CC7.2; ISO 27001 8.15 and 8.16; [EU AI Act](/insights/eu-ai-act-for-financial-services-operations) Article 26(6) for deployers of high-risk systems.',
        'Human approval: EU AI Act Article 26(2) on human oversight for high-risk systems; [NIST AI RMF](/insights/nist-ai-rmf-for-mid-market-teams) MAP 3.5 and GOVERN 3.2.',
        'AI inventory, owners and risk assessment: SOC 2 CC3.2; ISO 27001 5.9; the ISO/IEC 42001 AI risk and impact assessment. Our [AI governance operating model](/insights/enterprise-ai-governance-operating-model) shows where each of these sits.',
      ],
    },
    {
      heading: '12. A realistic path to production',
      paragraphs: [
        'Build the foundation once, prove it on one use case, then bring in agents and more teams. With one cloud and one data class, plan on roughly three months to the first production use case. Each extra route or regulator adds time, and it is better to say so on day one.',
      ],
      bullets: [
        'Weeks 1 to 3, blueprint: map the use case and its data, decide the route and processor, build the threat model, and get the target design signed.',
        'Weeks 4 to 8, foundation: AI gateway live, workload identity, workspaces and spend limits in place, logs flowing to the SIEM. Gate: security sign-off.',
        'Weeks 9 to 14, first use case: evaluation suite, approval gates, red-team test, and a pilot with real users. Gate: the checklist below.',
        'Month 4 onward, scale: MCP gateway and agents, Claude Code rollout, more data classes, and a stop drill every quarter.',
      ],
    },
    {
      heading: 'Before anything goes live',
      paragraphs: ['Don’t put a Claude workload into production until the owner of each item below has signed it off.'],
      bullets: [
        'The data processor for the route matches the DPA and the records of processing.',
        'Every data class is mapped to a route, a region and a retention mode.',
        'There are no static API keys in code, CI or config, and every agent has its own identity and tool list.',
        'Provider endpoints can only be reached from the gateway network.',
        'The gateway refuses to send traffic when authentication, classification, quotas or logging fail.',
        'Every remote MCP server uses OAuth 2.1, with tokens bound to that server.',
        'Writes and irreversible actions need a named approver, and someone has actually tested the kill switch.',
        'The evaluation suite meets its pass marks, and red-team findings are fixed or formally accepted.',
        'Logs with trace IDs reach the SIEM, and spend limits are set at the gateway, the workspace and the cloud account.',
      ],
    },
    {
      paragraphs: [
        'If you’d like this worked through for your own estate, we usually start with a [Solution Blueprint](/blueprint): the route decision, the threat model and a target design your security team can sign. The rest of what we do is on our [Claude implementation services](/what-we-do/applied-ai/claude) page.',
      ],
    },
  ],
  faq: [
    {
      q: 'Do we need an AI gateway if we only use one Claude route?',
      a: 'Yes. Even with one route, the gateway is the only place you can check who is calling, classify and redact data, enforce quotas and log every call. It also means you can add or switch routes later without touching application code.',
    },
    {
      q: 'How do we avoid long-lived Claude API keys?',
      a: 'On the Claude API, use workload identity federation: your identity provider issues a short-lived token, and Anthropic exchanges it for a short-lived token of its own. On Bedrock, Google Cloud, Foundry and Claude Platform on AWS, use cloud IAM roles. Either way, unset any old ANTHROPIC_API_KEY variable, because it overrides federation.',
    },
    {
      q: 'Can Claude traffic stay off the public internet?',
      a: 'On the cloud routes, yes. Use AWS PrivateLink for Bedrock and Claude Platform on AWS, Private Service Connect on Google Cloud, and a Virtual Network for the Foundry resource. The direct Claude API is reached over public TLS, so send it through an egress proxy that allows only the provider API.',
    },
    {
      q: 'Does zero data retention cover every Claude feature?',
      a: 'No. Batch processing, the Files API, the code execution tool, programmatic tool calling, Anthropic-hosted Managed Agents, the MCP connector, Agent Skills and the Covered Models (Claude Fable and Mythos) all keep data for a period. Put them in a separate workspace with its own approval, so a ZDR workspace can never call them by accident.',
    },
    {
      q: 'How should AI agents be controlled?',
      a: 'Give each agent its own identity and a short list of tools. Send every tool call through an MCP gateway with OAuth 2.1 tokens bound to one server, make writes and irreversible actions wait for a named approver, and keep a kill switch that revokes the agent and blocks its tools. Test that switch regularly.',
    },
  ],
  sources: [
    {
      title: 'API and data retention',
      url: 'https://platform.claude.com/docs/en/manage-claude/api-and-data-retention',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Workload Identity Federation',
      url: 'https://platform.claude.com/docs/en/manage-claude/workload-identity-federation',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Workspaces',
      url: 'https://platform.claude.com/docs/en/manage-claude/workspaces',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Workspace limits (Workspaces)',
      url: 'https://platform.claude.com/docs/en/manage-claude/workspaces#workspace-limits',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Claude in Amazon Bedrock',
      url: 'https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Require a guardrail for model inference (IAM condition key)',
      url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-permissions-id.html',
      publisher: 'Amazon Web Services',
    },
    {
      title: 'What certifications has Anthropic obtained?',
      url: 'https://support.claude.com/en/articles/10015870',
      publisher: 'Claude Help Center',
    },
    {
      title: 'Claude Platform on AWS',
      url: 'https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Claude in Microsoft Foundry',
      url: 'https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Use interface VPC endpoints (AWS PrivateLink) with Amazon Bedrock',
      url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html',
      publisher: 'AWS documentation',
    },
    {
      title: 'Anthropic Claude on Vertex AI via a Private Service Connect endpoint',
      url: 'https://codelabs.developers.google.com/codelabs/anthropic-on-vertexai-psc',
      publisher: 'Google Codelabs',
    },
    {
      title: 'VPC Service Controls with Gemini Enterprise Agent Platform',
      url: 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/vpc-service-controls',
      publisher: 'Google Cloud documentation',
    },
    {
      title: 'MCP authorization (revision 2026-07-28)',
      url: 'https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization',
      publisher: 'Model Context Protocol',
    },
    {
      title: 'Claude Code admin setup',
      url: 'https://code.claude.com/docs/en/admin-setup',
      publisher: 'Claude Code Docs',
    },
  ],
  related: [
    { label: 'Claude enterprise deployment options', href: '/insights/claude-enterprise-deployment-options' },
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'Every AI agent needs an identity', href: '/insights/ai-agent-identity-access-delegation' },
  ],
}
