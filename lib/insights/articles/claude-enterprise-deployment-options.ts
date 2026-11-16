import type { Article } from '../types'

/**
 * Published 2026-11-16. Claude-specific guide that targets the
 * "claude enterprise / claude platform / claude enterprise api / deployment"
 * query cluster in Search Console and feeds the Claude practice page.
 *
 * Sources: Claude Help Center (Enterprise plan), claude.com pricing and
 * enterprise pages; Claude Platform docs (API and data retention, Claude
 * Platform on AWS, Claude Models on Google Cloud); Claude Code docs (feature
 * availability, admin setup, LLM gateway); Microsoft Learn (Claude hosting
 * comparison in Foundry); Redmond Magazine and InfoQ (Foundry GA, June 2026);
 * InfoQ (Claude Platform on AWS GA, May 2026); The New Stack (Gemini
 * Enterprise Agent Platform); pricing pages as reported by UsagePricing
 * (Oct 2026). Details checked 16 Nov 2026; providers change these often.
 */
export const article: Article = {
  slug: 'claude-enterprise-deployment-options',
  title: 'Claude for the enterprise: Claude Enterprise, the API, Bedrock, Google Cloud or Microsoft Foundry?',
  seoTitle: 'Claude enterprise deployment: plan, API, Bedrock, Foundry',
  summary:
    'There are six ways to buy Claude for a business. We compare who handles your data, which features you get, what it costs and which route suits each use.',
  category: 'Applied AI',
  readTime: '13 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-16',
  reviewedAt: '2026-11-16',
  tags: {
    industries: ['financial-services', 'legal-professional-services', 'software-saas'],
    services: ['claude', 'applied-ai', 'ai-assisted-engineering'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'The first question in most of our Claude conversations isn’t about prompts or agents. It’s “where do we actually buy it?” Two years ago the answer was simple. Today there are six routes: the Claude Enterprise plan, the Claude API direct from Anthropic, Claude Platform on AWS, Amazon Bedrock, Google Cloud’s Agent Platform (what used to be Vertex AI) and Microsoft Foundry.',
        'They all give you the same family of models. What changes is who handles your data, how quickly new features reach you, who sends the invoice and who picks up the phone when something breaks. We’ve seen teams choose a route because procurement already had a contract with that cloud, then find out six months later that the feature they planned around wasn’t offered there, or that their privacy team had signed off a different data processor.',
        'What follows is how the options look in November 2026 and how we help clients choose. These details move quickly, so check anything you rely on against the provider’s current documentation before you sign.',
      ],
    },
    {
      heading: '1. Start with who is using Claude',
      paragraphs: [
        'Most of the confusion comes from treating two different purchases as one. If your people will use Claude themselves, to write, analyze, research or code, you’re buying seats. That means the Claude Enterprise plan, or Team if you’re smaller. If your own software and agents will call Claude, you’re buying API access, and the real choice is between Anthropic and one of the clouds.',
        'Plenty of companies need both, and that’s fine. A setup we recommend often is Enterprise seats for staff and engineers, with API access through whichever cloud already holds the data for the applications you build. The two can sit under separate contracts, with separate data processors, so it pays to decide them separately rather than forcing one answer onto both.',
      ],
    },
    {
      heading: '2. Then decide who is allowed to process your data',
      paragraphs: [
        'Your privacy and security people will ask this before anything else, so answer it early. On some routes Anthropic processes your prompts and outputs. On others the cloud provider does, inside its own environment, and Anthropic never sees the traffic. If your contracts or regulator say only your existing cloud provider may process the data, several options drop out straight away, and you can stop comparing features you were never going to be allowed to use.',
      ],
    },
    {
      heading: '3. Claude Enterprise, for your people',
      paragraphs: [
        'Claude Enterprise is Anthropic’s plan for organizations whose staff use Claude directly. You get the Claude apps, Claude Code, Cowork and connectors, plus the admin side: single sign-on, SCIM provisioning, roles, audit logs, a Compliance API, spend controls and your own retention settings. Anthropic lists the seat at $20 per user per month on annual billing. The catch is easy to miss: the Help Center says the seat fee covers access only, and all usage is billed on top at API rates. We’ve seen budgets built on the seat price alone, and they don’t survive the first month.',
        'It also matters for engineering teams. When developers use Claude Code on Enterprise seats, admins can push policy centrally through server-managed settings and see usage in the analytics dashboards. Some of that only works when developers sign in with a Claude subscription, not when Claude Code points at a cloud provider. We come back to this in the Claude Code section below.',
      ],
    },
    {
      heading: '4. The Claude API, straight from Anthropic',
      paragraphs: [
        'Going direct gets you everything first: new models on launch day, Agent Skills, code execution, batch processing, Managed Agents and the betas. Anthropic is the data processor, and its commercial terms don’t allow training on customer content. Its documentation goes further and says retained data is never used for training without your express permission.',
        'Retention is set per organization. You can ask Anthropic’s sales team for zero data retention, where prompts and outputs aren’t stored once the response comes back. If you handle health data, you can switch on HIPAA readiness with a business associate agreement, but note that it’s permanent once enabled. One wrinkle catches ZDR customers out: the most capable “Covered Models”, Claude Fable and Mythos, need 30-day retention, so they won’t run under zero retention unless Anthropic agrees. The usual workaround is a separate workspace just for those models.',
      ],
    },
    {
      heading: '5. Claude Platform on AWS',
      paragraphs: [
        'This one launched in May 2026 and it’s easy to mix up with Bedrock. It’s Anthropic’s own platform, reached through your AWS account. You sign in with IAM, the bill arrives through AWS Marketplace, calls show up in CloudTrail and the token prices match the direct API. Because Anthropic runs it, new features land on Anthropic’s timetable, which its documentation describes as usually the same day as the Claude API.',
        'The difference is who touches the data. Anthropic, not AWS, processes inference. At launch AWS said requests were handled outside the AWS security boundary; Anthropic now runs workspaces created since September 18, 2026, on AWS infrastructure, while older workspaces may still be processed outside AWS. Either way, Anthropic remains the data processor. Retention works like the direct API, zero retention is available on request, and you can keep inference in the US with a per-request setting. Anthropic is upfront that HIPAA readiness isn’t offered here, and it points anyone needing FedRAMP High, IL4 or IL5, HIPAA, or AWS as the only data processor towards Bedrock instead.',
      ],
    },
    {
      heading: '6. Amazon Bedrock',
      paragraphs: [
        'On Bedrock, AWS runs the service and processes the data. Nothing leaves your AWS environment, the IAM, networking and logging you already have keep working, and Claude simply appears on the AWS bill. For a lot of regulated AWS customers that settles it, because nothing new enters the data path and nobody needs to update a records-of-processing entry.',
        'What you give up is speed and a few features. Models and features arrive on Bedrock’s release schedule rather than Anthropic’s, and some Anthropic platform features, Agent Skills for example, aren’t offered there. Anthropic’s zero retention program doesn’t apply either, because Anthropic isn’t the processor; AWS’s terms do. Bedrock and Claude Platform on AWS draw from separate capacity, and we’ve seen teams use one as a fallback for the other.',
      ],
    },
    {
      heading: '7. Google Cloud’s Agent Platform',
      paragraphs: [
        'Google rebranded Vertex AI as the Gemini Enterprise Agent Platform in 2026, and Claude sits in its Model Garden. Anthropic now documents two flavors. In the Google-managed one, Google runs the service, processes the data, sets its own model retirement dates and handles quotas. In the Anthropic-managed one, Anthropic is the processor and retention follows the direct API, with zero retention on request.',
        'If your data and security tooling already live in Google Cloud, the Google-managed version keeps processing inside that boundary, much as Bedrock does on AWS. Check which models your region actually offers before you commit, because Google doesn’t offer the same Claude models everywhere.',
      ],
    },
    {
      heading: '8. Microsoft Foundry',
      paragraphs: [
        'Claude became generally available in Microsoft Foundry at the end of June 2026, with Azure sign-in, Azure billing and Anthropic’s standard API prices. There are two hosting choices. “Hosted on Azure” runs inference on Azure, stores data at rest in the Azure geography you pick and supports a US data zone. “Hosted on Anthropic” gets you API features the Azure-hosted version doesn’t have yet, but your data may be processed outside Azure.',
        'Either way, Anthropic still runs the models and is an independent data processor, which isn’t the same arrangement as Bedrock or Google-managed Agent Platform. When Foundry went GA, reporting pointed out that the EU residency commitments you get on Bedrock and Google Cloud didn’t yet cover Foundry. If you’re on Azure with EU residency requirements, check where that stands today before you choose it.',
      ],
    },
    {
      heading: '9. Who processes the data, side by side',
      paragraphs: [
        'Here’s the short version we give privacy teams. It reflects what Anthropic and the cloud providers document as of November 2026. Use it to start the conversation with your DPO, not to end it.',
      ],
      code: {
        lang: 'text',
        caption: 'Who processes inference data on each route (November 2026). Confirm against current provider terms.',
        text: `Route                         Processor   ZDR / retention
Claude Enterprise (seats)     Anthropic   Custom retention controls
Claude API (direct)           Anthropic   ZDR on request; HIPAA option
Claude Platform on AWS        Anthropic   ZDR on request; no HIPAA
Amazon Bedrock                AWS         AWS terms; Anthropic ZDR n/a
Google Cloud, Google-managed  Google      Google terms
Google Cloud, Anthropic-mgd   Anthropic   As direct API
Microsoft Foundry             Anthropic   Azure-hosted: data in Azure geo`,
      },
    },
    {
      heading: '10. Features, model timing and Claude Code',
      paragraphs: [
        'New models and betas show up on the direct API and Claude Platform on AWS first. Bedrock and Google-managed Agent Platform have their own schedules. For major models the gap is usually short, but newer platform features like Agent Skills, code execution or Managed Agents can take longer. If your design leans on one of them, confirm it’s live on your route, in your region, before you build. We’ve had to redesign around this more than once.',
        '[Claude Code](/what-we-do/applied-ai/ai-assisted-engineering) deserves its own note. Anthropic publishes a feature-availability page by provider, and most things work everywhere: the command line, the IDE extensions, subagents, hooks, skills and [MCP servers](/insights/mcp-governance-for-regulated-firms). Server-managed settings, the analytics dashboards and some newer features only work when developers sign in with a Claude subscription. Teams running Claude Code through a cloud provider, including Claude Platform on AWS, use managed settings files or OS policies pushed by device management, or run Anthropic’s self-hosted Claude apps gateway to deliver settings remotely. Anthropic’s admin guide suggests deciding early whether developers need Enterprise seats as well as cloud access, and we agree. It’s far easier to settle before rollout than after.',
      ],
    },
    {
      heading: '11. What it costs',
      paragraphs: [
        'Token prices are close to identical across routes for the same model. As of this month, Anthropic lists Claude Opus 5.5 at $4 per million input tokens and $20 per million output tokens, and Claude Sonnet 5.5 at $2 and $10. Prompt caching cuts the cost of repeated context a lot. Claude Platform on AWS charges the same rates, Foundry uses Anthropic’s standard pricing, and Bedrock and Google Cloud publish their own price pages.',
        'In our experience the platform isn’t where the money goes. Existing committed-spend deals with a cloud provider often make the cloud route cheaper in practice. Enterprise adds seat fees on top of usage. And sending routine work to Sonnet or Haiku instead of Opus usually saves more than any choice of route.',
      ],
    },
    {
      heading: '12. How we usually advise clients',
      paragraphs: [
        'We start with the data processor question and with where the data already lives, then look at features, and only then at cost. Most of the companies we work with end up somewhere close to one of these setups:',
      ],
      bullets: [
        'People and products on one cloud. Enterprise seats for staff, and Bedrock, Google-managed Agent Platform or Foundry for the agents and apps you build, so production data stays with the cloud provider you already trust.',
        'Building on the newest features. The direct API or Claude Platform on AWS, when you need things like Managed Agents or Agent Skills the week they ship and you’re comfortable with Anthropic as processor.',
        'Tightly regulated work. A cloud provider as the only processor (Bedrock or Google-managed), or the direct API with HIPAA readiness when what you need is a BAA with Anthropic.',
        'Claude Code for a large engineering org. Enterprise seats if you want central policy and analytics with the least effort, or a cloud provider behind an LLM gateway if every model call has to stay inside your cloud and you can live with pushing policy through device management (or running a Claude apps gateway).',
      ],
    },
    {
      paragraphs: [
        'One more thing, whichever route you pick: put a gateway, or at least one shared configuration point, between your applications and the provider. It gives you a log of every call and a place to enforce budgets, and it means you can change routes later without rewriting code. Given how much this market changed in 2026 alone, you’ll probably want to.',
      ],
    },
    {
      heading: 'Before you sign',
      paragraphs: ['These are the questions we ask clients to answer in writing before procurement commits to a route.'],
      bullets: [
        'Which uses need seats, which need API access, and who owns each budget?',
        'Who has to be the data processor, and does that match what your DPA and records of processing say?',
        'Do you need standard retention, zero retention or HIPAA readiness, and is it offered on this route for the models you plan to use?',
        'Where must inference run, and does the route offer that region or data zone for those models?',
        'Which features does the design depend on, and are they live on this route today?',
        'For Claude Code, how will policy reach developer machines, and will developers need Enterprise seats as well?',
        'How will you log usage, cap spend and switch providers if you need to? (Our [AI governance operating model](/insights/enterprise-ai-governance-operating-model) covers the controls.)',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the difference between Claude Enterprise and the Claude API?',
      a: 'Claude Enterprise is for people: seats for the Claude apps and Claude Code, with SSO, SCIM, audit logs and admin controls, and usage billed at API rates on top of the seat fee. The Claude API is for software: your own applications and agents calling Claude directly.',
    },
    {
      q: 'Is Claude on Amazon Bedrock the same as Claude Platform on AWS?',
      a: 'No. On Bedrock, AWS runs the service and processes your data. Claude Platform on AWS is run by Anthropic, which is the data processor, and gets new features on Anthropic’s timetable. AWS provides sign-in, CloudTrail logging and billing. Newer workspaces run on AWS infrastructure, but Anthropic still handles the data.',
    },
    {
      q: 'Does Anthropic train on enterprise data?',
      a: 'Anthropic’s commercial terms bar training on customer content from its commercial services, including Enterprise and the API. On Bedrock and the Google-managed route, the cloud provider is the data processor and its terms apply.',
    },
    {
      q: 'Can Claude run in Microsoft Azure?',
      a: 'Yes. Claude has been generally available in Microsoft Foundry since June 2026, hosted on Azure or hosted on Anthropic. Anthropic operates the models and is the data processor in both cases; check current regional and residency options before choosing.',
    },
    {
      q: 'Which Claude deployment is best for regulated industries?',
      a: 'Usually a route where your existing cloud provider is the only data processor, such as Bedrock or Google-managed Agent Platform. If what you need is a BAA with Anthropic, the direct API with HIPAA readiness works too. Your contracts and regulator decide which.',
    },
  ],
  sources: [
    {
      title: 'What is the Enterprise plan?',
      url: 'https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan',
      publisher: 'Claude Help Center',
    },
    {
      title: 'Claude Enterprise pricing',
      url: 'https://claude.com/pricing/enterprise',
      publisher: 'Anthropic',
    },
    {
      title: 'API and data retention',
      url: 'https://platform.claude.com/docs/en/manage-claude/api-and-data-retention',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Claude Platform on AWS',
      url: 'https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Anthropic launches Claude Platform on AWS',
      url: 'https://infoq.com/news/2026/05/anthropic-claude-aws',
      publisher: 'InfoQ',
    },
    {
      title: 'Claude Models on Google Cloud (Google managed)',
      url: 'https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai',
      publisher: 'Claude Platform Docs',
    },
    {
      title: 'Gemini Enterprise Agent Platform, the evolution of Vertex AI',
      url: 'https://thenewstack.io/?p=22820335',
      publisher: 'The New Stack',
    },
    {
      title: 'Compare Azure-hosted and Anthropic-hosted Claude models',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/claude-models-hosting-comparison',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Claude in Microsoft Foundry is now generally available',
      url: 'https://claude.com/blog/claude-in-microsoft-foundry',
      publisher: 'Anthropic',
    },
    {
      title: 'Claude reaches GA on Microsoft Foundry: European enterprises cannot deploy it',
      url: 'https://infoq.com/news/2026/07/claude-foundry-ga-europe/',
      publisher: 'InfoQ',
    },
    {
      title: 'Claude Code feature availability by provider',
      url: 'https://code.claude.com/docs/en/feature-availability',
      publisher: 'Claude Code Docs',
    },
    {
      title: 'Claude Code admin setup',
      url: 'https://code.claude.com/docs/en/admin-setup',
      publisher: 'Claude Code Docs',
    },
    {
      title: 'Claude Opus 5.5 priced at $4/$20; Sonnet 5.5 at $2/$10',
      url: 'https://www.usagepricing.com/blueprint/activity/anthropic-2026-10-05-opus-5-5-price-cut',
      publisher: 'UsagePricing',
    },
  ],
  related: [
    { label: 'Claude implementation services', href: '/what-we-do/applied-ai/claude' },
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'Every AI agent needs an identity', href: '/insights/ai-agent-identity-access-delegation' },
  ],
}
