import type { Article } from '../types'

/**
 * Published 2026-11-13. Seventh piece in the agent series: who an agent is
 * and whose authority it acts on. Every earlier article says "give each
 * agent its own identity"; this one shows how.
 *
 * Sources: Salesloft Drift incident (GTIG / Security Affairs / CyberScoop,
 * Aug 2025); NIST NCCoE concept paper (Feb 5, 2026); OCC Bulletin
 * 2026-54 as summarized by King & Spalding; Microsoft Learn (Entra Agent ID
 * and ID Governance); MC1506733 on the blueprint creation default (Oct 2026); AWS (AgentCore Identity OBO GA, Apr 30,
 * 2026); RFC 8693, RFC 8707; IETF drafts for ID-JAG and on-behalf-of for AI
 * agents (work in progress); MCP Enterprise-Managed Authorization (stable
 * Jun 18, 2026). Token and policy samples are illustrative.
 */
export const article: Article = {
  slug: 'ai-agent-identity-access-delegation',
  title: 'Every AI agent needs an identity: access, delegation and least privilege',
  seoTitle: 'AI agent identity: access, delegation and least privilege',
  summary:
    'Why shared keys and borrowed logins turn agent mistakes into breaches, and how to give each AI agent its own identity, delegated access and short-lived tokens.',
  category: 'Security & Compliance',
  readTime: '14 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-13',
  reviewedAt: '2026-11-13',
  tags: {
    industries: ['financial-services', 'legal-professional-services', 'software-saas'],
    services: ['ai-governance', 'agentic-automation', 'applied-ai', 'claude'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Between August 8 and 18, 2025, a threat actor that Google tracks as UNC6395 used stolen OAuth access and refresh tokens to export data from the Salesforce instances of hundreds of organizations, then searched the exports for AWS keys, Snowflake tokens and passwords. The tokens belonged to Drift, an AI chat agent that Salesloft customers had connected to Salesforce. Salesforce itself was not breached. The attackers did not need to break anything: they held valid, long-lived credentials that an AI integration had been trusted with, and they used them exactly as designed until Salesloft and Salesforce revoked every Drift token on August 20.',
        'That is the identity problem with AI agents in one incident. Agents need access to systems to be useful. How that access is granted, what it is scoped to, how long it lasts and whether anyone can tell the agent apart from a person decides whether a mistake, an injected instruction or a stolen token stays small or becomes a breach.',
        'Every article in this series so far has said the same thing in passing: give each agent its own identity, scoped and short-lived. This one explains how. It covers what an agent identity is, the three ways agents get access and the right token pattern for each, how to keep privileges least, and how to run identities for agents the way you already run them for people. It is written for identity, security and platform teams, and for the architects who have to sign off agent designs.',
      ],
    },
    {
      heading: 'Part one: the problem',
      paragraphs: [],
    },
    {
      heading: '1. Three ways agents get access, and why two are wrong',
      paragraphs: [
        'Look at how agents in your organization actually authenticate today and you will usually find one of three patterns.',
      ],
      bullets: [
        'Borrowed human credentials: the agent runs with a user’s session, personal access token or API key. It can do everything that person can do, and in the logs it is that person. When something goes wrong you cannot tell what the human did from what the agent did, and you cannot revoke the agent without locking out the human.',
        'Shared service accounts and static keys: one client ID and secret, or one API key, used by several agents or several instances of one agent, often with broad scopes and no expiry. There is no attribution, no way to cut off one agent, and a stolen key works until someone notices.',
        'An identity per agent, with delegated access: each agent is a distinct principal in your identity provider, with an accountable owner. When it acts for a person, it receives a token that carries both identities and can never exceed what that person may do. When it acts for itself, it gets narrow permissions for its job, through short-lived credentials it never sees directly.',
      ],
    },
    {
      paragraphs: [
        'Only the third pattern holds up under the questions supervisors and auditors now ask. The OCC’s November 2026 examiner framework, as summarized by King & Spalding, says banks should manage AI agents’ identities and permissions with the same care as privileged human users. NIST’s National Cybersecurity Center of Excellence made the same point in a February 2026 concept paper on agent identity and authorization, which frames the work around identifying agents distinctly from people, authenticating them, authorizing them, delegating access from users, logging their actions and tracking the data they use.',
      ],
    },
    {
      heading: '2. What an agent identity actually is',
      paragraphs: [
        'An agent identity is a non-human principal in your directory, like a service account but with more context attached. At minimum it should carry a unique identifier, a human sponsor who is accountable for it, a stated purpose, the version or template it was created from, the permissions it holds, and its lifecycle dates: created, last reviewed, due for review, retired.',
        'It helps to separate the type of agent from the running instance. Microsoft Entra Agent ID, now generally available, models this explicitly. An agent identity blueprint is the template and holds the authentication credentials; agent identities are created from it and hold the permissions; and an agent can optionally have an agent user for systems that only understand user accounts. Agent identities are confidential clients by design, so they cannot be public clients that keep secrets in a browser or on a device. Other platforms use different names, but the separation is worth copying wherever you are: one place to rotate credentials for a whole class of agents, and per-instance identities you can scope, review and revoke individually.',
        'The other half of the definition is what the agent does not have. It should not have a long-lived secret in its own configuration, environment variables or prompt. Credentials belong in the platform, a vault or a workload identity mechanism, and the agent asks for a short-lived token when it needs one.',
      ],
    },
    {
      heading: 'Part two: the three access patterns',
      paragraphs: [],
    },
    {
      heading: '3. Acting for a user: delegation, not impersonation',
      paragraphs: [
        'Most enterprise agents act for someone: they read the user’s mailbox, search the documents the user can see, draft in the user’s name. The right mechanism is delegation. The agent receives a token that says, in effect, “this agent, acting for this user, for this resource, with these scopes”, and the resource enforces the user’s own permissions on top.',
        'The standard building block is OAuth 2.0 Token Exchange (RFC 8693). The agent presents the user’s token together with its own credentials and receives a new token for the downstream resource, with a narrower scope and an audience limited to that one resource. The new token carries the user as the subject and the agent in an `act` (actor) claim. Microsoft’s on-behalf-of flow works on the same principle, and AWS made on-behalf-of token exchange in Bedrock AgentCore Identity generally available on April 30, 2026, producing a scoped-down token that carries both the user and the agent identity.',
      ],
      code: {
        lang: 'json',
        caption: 'Illustrative decoded access token after an on-behalf-of exchange. The user is the subject; the agent is the actor; the audience is one resource.',
        text: `{
  "iss": "https://login.example-bank.com",
  "sub": "m.chen@example-bank.com",
  "act": { "sub": "agent:payments-exception-assistant",
           "client_id": "svc-agent-pexa" },
  "aud": "https://payments-api.example-bank.com",
  "scope": "wires.read repairs.prepare",
  "iat": 1794560100,
  "exp": 1794560400
}`,
      },
    },
    {
      paragraphs: [
        'Three rules make delegation safe. The delegated token must never grant more than the user could do directly, so the agent cannot be used to escalate. Its scope should be the subset the task needs, not everything the user has. And consent should name the agent: a person should know they are authorizing this specific agent, not a generic application. That last point is where current standards are still moving. An individual Internet-Draft on on-behalf-of authorization for AI agents proposed a parameter that names the requesting agent and records the delegation chain in the token, but it has expired without IETF endorsement, and you should treat it as a direction rather than something to build on today.',
      ],
    },
    {
      heading: '4. Acting for itself: workload identity',
      paragraphs: [
        'Some agents act on their own: a nightly reconciliation agent, a triage agent working a queue, a security agent responding to alerts. There is no user to delegate from, so the agent needs its own access, and it should be as narrow as its job.',
        'Use workload identity rather than secrets. On cloud platforms that means managed identities or workload identity federation, where the platform vouches for the running workload and no secret is stored at all. Where you must use OAuth client credentials, authenticate with a signed assertion (private key JWT) or certificate rather than a shared client secret, keep the key in a managed store, and issue tokens that last minutes. Give each autonomous agent permissions for exactly the queues, records and actions its function needs, and nothing it might need one day.',
        'Be especially careful with autonomous agents that have write access to systems of record. They are the closest thing to an unattended privileged account most organizations have ever deployed, and they should be treated with at least the same controls: approvals for elevated actions, hard limits on volume and value, and alerts when they act outside their usual pattern.',
      ],
    },
    {
      heading: '5. Agents calling tools and other agents',
      paragraphs: [
        'Real deployments are chains. A user asks an assistant; the assistant calls an MCP server; the server calls a document system; another agent is asked to check the result. Identity has to survive every hop without getting broader.',
        'Two rules carry most of the weight. First, every hop gets its own token for its own audience. RFC 8707 resource indicators let a client ask for a token that is only valid at one resource, and the MCP specification requires this and forbids passing a token received from a client on to an upstream API. If a server needs to call another system for the user, it exchanges the token for a new one rather than forwarding it. Second, keep the originating user visible all the way down. Token exchange can nest actor claims so the final resource knows the chain of agents involved, and the IETF is working on related ideas such as transaction tokens for agents. Whatever mechanism you use, the last system in the chain should still be able to answer “for whom, and through which agents?”',
        'For connections between AI clients and MCP servers in an enterprise, there is now a better pattern than asking each employee to click through a consent screen. MCP’s Enterprise-Managed Authorization extension, stable since June 18, 2026, lets your identity provider decide which servers each user’s client may reach. The client exchanges the user’s single sign-on assertion for an Identity Assertion JWT Authorization Grant (ID-JAG) at your identity provider, then presents it to the MCP server’s authorization server for an ordinary access token. Okta markets the same pattern as Cross App Access, and Anthropic made it generally available for Claude Team and Enterprise connectors in August 2026. The ID-JAG specification itself is still an IETF draft, so check support with each vendor before you depend on it. Our MCP governance guide walks through the flow in detail.',
      ],
    },
    {
      heading: 'Part three: least privilege that holds',
      paragraphs: [],
    },
    {
      heading: '6. Scope by task, not by agent',
      paragraphs: [
        'The usual way to scope an agent is to list everything it might ever need and grant it once. That produces agents with the combined access of every task they perform, permanently. Scope by task instead: the token for a given step carries only the scopes that step needs, requested at the time it is needed.',
        'Identity scopes are coarse, so add a second layer of authorization at the point where the agent calls tools. A policy enforcement point in front of the tools can check arguments as well as scopes: this agent may read invoices, but only for the user’s own business unit; may prepare a payment, but not above a threshold; may email, but only to internal domains. Deny by default, and allow elevated actions just in time, with an approval bound to the specific action. Our reference design for kill switches, approvals and audit logs covers that layer.',
      ],
      code: {
        lang: 'yaml',
        caption: 'Illustrative identity record for one agent. The format is ours; most of these fields map to properties in your identity provider or inventory.',
        text: `agent_id: agent:payments-exception-assistant
sponsor: Head of Payment Operations        # accountable human
blueprint: pexa-blueprint@3.2               # template holding credentials
purpose: Investigate failed wires; prepare repair instructions
modes:
  delegated:                                # acting for a signed-in user
    grant: token-exchange (RFC 8693)
    scopes_by_task:
      investigate: [wires.read, accounts.read]
      prepare_repair: [repairs.prepare]     # needs approval at the gateway
  autonomous: none                          # never acts without a user
token_lifetime_minutes: 5
refresh_tokens: false
credential_storage: platform vault; agent never sees secrets
conditional_access: [managed-runtime-only, block-outside-us-east]
review_every_days: 90
last_review: 2026-10-30`,
      },
    },
    {
      heading: '7. Short-lived everything',
      paragraphs: [
        'The Drift incident ran for ten days on stolen OAuth tokens. Long-lived credentials are what turn a compromise of the agent, its vendor or its host into ongoing access to your systems.',
        'Keep agent access tokens to minutes, not hours. Avoid issuing refresh tokens to agents where the platform allows it, and where you cannot, keep their lifetime short and bind them to the client. Store any credential the agent depends on in a vault or platform credential store, so the agent code and its prompts never contain a secret that can be logged, leaked into a model context or committed to a repository. AgentCore Identity’s token vault and Entra’s blueprint credentials are examples of this separation. Where your identity provider and resources support sender-constrained tokens, such as DPoP or mutual TLS, use them, so a stolen token is useless from another machine.',
      ],
    },
    {
      heading: '8. Revocation is a kill switch',
      paragraphs: [
        'An identity you can revoke is the most reliable stop you have, because it works even when everything else about the agent has gone wrong. If the agent has its own identity, disabling it in the identity provider cuts off every system that trusts that provider, without touching the human users the agent works for.',
        'Make revocation fast and tested. Short token lifetimes bound how long a revoked agent keeps working. Conditional access policies, which Entra now extends to agent identities, let you block an agent automatically when it signs in from an unexpected place or runtime. And revocation belongs in your incident runbooks and stop drills, with the time it takes measured, alongside the gateway switches described in our kill switch article.',
      ],
    },
    {
      heading: '9. Log both identities, every time',
      paragraphs: [
        'Attribution is the reason to do all of this. Every audit record an agent produces, in your gateway, your applications and your identity provider, should show the human on whose behalf it acted, the agent identity and version, the chain of agents involved if there was one, the scopes it held and the action it took.',
        'Delegated tokens make this straightforward, because both identities arrive in the token and can be copied into the log. Identity providers now record agent sign-ins and token issuance separately from users’, which gives you a second, independent record. Check that your downstream applications log the actor and not only the subject. A system that records only `sub` will show the human as having done everything the agent did, which is exactly the ambiguity you were trying to remove.',
      ],
    },
    {
      heading: 'Part four: running it',
      paragraphs: [],
    },
    {
      heading: '10. Joiners, movers and leavers, for agents',
      paragraphs: [
        'Agents need the same lifecycle discipline as employees, and they are easier to forget. Require a human sponsor before an agent identity is created. Review its access on a fixed cycle, more often for agents that write to systems of record. When its sponsor changes role or leaves, reassign or retire it, so you do not accumulate orphaned agents with live access. Retire identities for agents that have not run in a defined period. Microsoft Entra ID Governance now covers agent identities and their sponsors, and other identity governance tools are adding similar support.',
        'Watch the defaults, too. In October 2026 Microsoft announced (message center post MC1506733) that from November 4, users with no Entra role can create agent identity blueprints unless an administrator turns the setting off; the rollout completes in late November. Whether that suits you is a policy decision, but it should be a decision. Review who in your tenant can create agent identities and blueprints, and align it with your intake process for new AI uses.',
      ],
    },
    {
      heading: '11. Vendor and SaaS agents',
      paragraphs: [
        'Many of the agents with access to your systems are not yours. They are AI features in SaaS products, chat and sales tools, copilots and integrations that customers connect through OAuth, exactly as Drift was connected to Salesforce. Each of those connections is a standing grant of access to your data, held by someone else.',
      ],
      bullets: [
        'Inventory the OAuth grants and connected apps in your core platforms, including which are AI agents or AI features, and who approved them.',
        'Restrict scopes to what the integration needs, and prefer read-only where it will do.',
        'Shorten refresh token lifetimes and require re-authorization periodically where the platform allows it.',
        'Restrict where tokens can be used from, by IP range or network, where the platform supports it.',
        'Remove grants that are unused, and monitor for bulk exports or unusual query patterns by connected apps.',
        'Ask vendors whether they support short-lived, sender-constrained tokens and identity-provider-managed authorization, and put token handling and breach notification in the contract.',
      ],
    },
    {
      heading: '12. An access review for agents',
      paragraphs: [
        'Run this review for each agent, or each class of agent, before it goes live and on its review cycle. Every “no” is a finding.',
      ],
      bullets: [
        'Does the agent have its own identity, distinct from any person and from other agents?',
        'Does it have a named human sponsor who still works here?',
        'When it acts for a user, does it use delegated tokens that carry both identities and cannot exceed the user’s rights?',
        'Are its scopes limited to the tasks it performs, with elevated actions approved just in time?',
        'Are its tokens short-lived, and are refresh tokens avoided or tightly bounded?',
        'Is it free of secrets in its code, configuration, environment and prompts?',
        'Does every hop in its chain receive a token for its own audience, with no token passthrough?',
        'Do the systems it touches log the agent as well as the user?',
        'Can you revoke it in the identity provider, and have you measured how long that takes to take effect?',
        'Has its access been reviewed within its review period?',
      ],
    },
    {
      heading: 'If you are starting this month',
      paragraphs: [
        'A realistic first month, aimed at the agents with the most access:',
      ],
      bullets: [
        'Week 1: inventory agent access, including borrowed credentials, shared keys, service accounts used by agents and OAuth grants to vendor AI features. Rank by what each can reach.',
        'Week 2: give the top five agents their own identities with sponsors, move their secrets into a vault or workload identity, and cut token lifetimes.',
        'Week 3: switch user-facing agents to delegated tokens with the agent as actor, and confirm downstream logs record both identities.',
        'Week 4: run the access review above, revoke what fails it, test revocation as a stop drill, and set the tenant defaults for who may create agent identities.',
      ],
    },
    {
      paragraphs: [
        'Identity is unglamorous next to models and prompts, but it is where most of the damage from agent failures is either contained or multiplied. An agent with its own short-lived, narrowly scoped, revocable identity can still make mistakes. It just cannot make them with everyone’s keys.',
      ],
    },
  ],
  faq: [
    {
      q: 'Should an AI agent use a user’s credentials?',
      a: 'No. An agent running with a person’s session or API key can do everything that person can, is indistinguishable from them in logs, and cannot be revoked without locking them out. Give the agent its own identity and, when it acts for someone, a delegated token that names both.',
    },
    {
      q: 'What is on-behalf-of token exchange for AI agents?',
      a: 'An OAuth 2.0 Token Exchange (RFC 8693) in which an agent presents a user’s token and its own credentials and receives a new token for one downstream resource, with narrower scopes, the user as subject and the agent recorded as the actor.',
    },
    {
      q: 'How long should AI agent tokens last?',
      a: 'Minutes. Short-lived access tokens limit how long a stolen token or a revoked agent keeps working. Avoid refresh tokens for agents where possible, and keep credentials in a vault or workload identity mechanism rather than in the agent’s code or configuration.',
    },
    {
      q: 'What is Microsoft Entra Agent ID?',
      a: 'Microsoft’s generally available identity platform for AI agents in Entra ID. It introduces agent identity blueprints, which hold credentials, agent identities created from them, which hold permissions, and optional agent users, with conditional access and governance extended to agents.',
    },
    {
      q: 'What did the Salesloft Drift incident show about agent identity?',
      a: 'That long-lived OAuth tokens held by an AI integration are standing access to customer systems. Stolen Drift tokens were used from August 8 to 18, 2025, to export data from hundreds of Salesforce instances until all Drift tokens were revoked.',
    },
  ],
  sources: [
    {
      title: 'Widespread data theft targets Salesforce instances via Salesloft Drift',
      url: 'https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift/',
      publisher: 'Google Threat Intelligence Group',
    },
    {
      title: 'UNC6395 targets Salesloft in Drift OAuth token theft campaign',
      url: 'https://securityaffairs.com/?p=181632',
      publisher: 'Security Affairs',
    },
    {
      title: 'Hundreds of Salesforce customers impacted by attack spree linked to third-party AI agent',
      url: 'https://cyberscoop.com/salesforce-salesloft-drift-attack-spree-google/',
      publisher: 'CyberScoop',
    },
    {
      title: 'Accelerating the Adoption of Software and AI Agent Identity and Authorization (concept paper)',
      url: 'https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd',
      publisher: 'NIST NCCoE',
    },
    {
      title: 'The OCC issues examiner framework for bank use of AI',
      url: 'https://www.kslaw.com/insights/articles/the-occ-issues-examiner-framework-for-bank-use-of-ai',
      publisher: 'King & Spalding',
    },
    {
      title: 'Agent identities in Microsoft Entra Agent ID',
      url: 'https://learn.microsoft.com/entra/agent-id/agent-identities',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Governing agent identities with Microsoft Entra ID Governance',
      url: 'https://learn.microsoft.com/en-nz/Entra/id-governance/agent-id-governance-overview',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'MC1506733: Review who can create agents in Microsoft Entra',
      url: 'https://mc.merill.net/message/MC1506733',
      publisher: 'Microsoft 365 Message Center (archive)',
    },
    {
      title: 'Microsoft Entra lets users create agent blueprints by default',
      url: 'https://lazyadmin.nl/office-365/microsoft-entra-lets-users-create-agent-blueprints-by-default/',
      publisher: 'LazyAdmin',
    },
    {
      title: 'Amazon Bedrock AgentCore Identity now supports On-Behalf-Of (OBO) token exchange',
      url: 'https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore',
      publisher: 'Amazon Web Services',
    },
    {
      title: 'RFC 8693: OAuth 2.0 Token Exchange',
      url: 'https://www.rfc-editor.org/rfc/rfc8693',
      publisher: 'IETF',
    },
    {
      title: 'RFC 8707: Resource Indicators for OAuth 2.0',
      url: 'https://www.rfc-editor.org/rfc/rfc8707',
      publisher: 'IETF',
    },
    {
      title: 'OAuth 2.0 Extension: On-Behalf-Of User Authorization for AI Agents (Internet-Draft)',
      url: 'https://datatracker.ietf.org/doc/draft-oauth-ai-agents-on-behalf-of-user/',
      publisher: 'Individual Internet-Draft (expired)',
    },
    {
      title: 'Identity Assertion JWT Authorization Grant (Internet-Draft)',
      url: 'https://datatracker.ietf.org/doc/draft-ietf-oauth-identity-assertion-authz-grant/',
      publisher: 'IETF OAuth Working Group (work in progress)',
    },
    {
      title: 'Enterprise-managed authorization for MCP',
      url: 'https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/',
      publisher: 'Model Context Protocol blog',
    },
  ],
  related: [
    { label: 'Kill switches, approvals and audit logs', href: '/insights/ai-agent-kill-switches-approvals-audit-logs' },
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'Enterprise AI governance', href: '/insights/enterprise-ai-governance-operating-model' },
  ],
}
