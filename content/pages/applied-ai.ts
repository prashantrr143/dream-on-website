import type { ContentPage } from './types'

/**
 * Applied AI pillar, Claude practice and five capability pages.
 *
 * Model-neutral and cloud-neutral: Claude, OpenAI models and open-weight
 * models, run on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry
 * or direct APIs. No clients, metrics or certifications are claimed.
 */

const WHAT_WE_DO = { name: 'What we do', path: '/what-we-do' }
const APPLIED_AI = { name: 'Applied AI', path: '/what-we-do/applied-ai' }

const ALIGNMENT_LINE =
  'Designs aligned to EU AI Act risk tiers, ISO/IEC 42001 and the NIST AI RMF . Alignment, not certification.'

const NO_TRAINING =
  'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.'

const CLAUDE_LINK = {
  label: 'Claude practice',
  href: '/what-we-do/applied-ai/claude',
  descriptor: 'Adopt Claude, build agents with it and connect it to your systems.',
}

const RESPONSIBLE_AI_LINK = {
  label: 'Responsible AI',
  href: '/who-we-are/responsible-ai',
  descriptor: 'What we will and will not build, and how we keep people in control.',
}

const APPLIED_AI_LINK = {
  label: 'Applied AI',
  href: '/what-we-do/applied-ai',
  descriptor: 'From pilot to production, inside the systems you already use.',
}

export const pages: ContentPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Pillar
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai',
    meta: {
      title: 'AI implementation from pilot to production | YatiSphere',
      description:
        'Take an AI pilot into production: evaluation, human approval, audit trails and integration with the systems you run. Model- and cloud-neutral.',
    },
    hero: {
      kicker: 'WHAT WE DO / APPLIED AI',
      h1: 'AI implementation, from pilot to production',
      subhead: 'We take AI pilots into production inside the systems you already use, with testing, approvals and an audit trail.',
    },
    parents: [WHAT_WE_DO],
    name: 'Applied AI',
    contactInterest: 'Applied AI',
    contact: { title: 'Have an AI pilot that stalled?', body: 'Tell us what it does and where it got stuck.' },
    blocks: [
      {
        type: 'statement',
        text:
          'Most AI pilots stall for the same reasons: the demo runs on sample data, nobody owns integration or security, and nobody can say what the model touches or who approved its output. We design, build and run AI inside your systems, with your data boundaries, human approval where liability sits and evaluation against a target you set. ' +
          ALIGNMENT_LINE,
      },
      {
        type: 'cards',
        title: 'Applied AI services',
        columns: 3,
        cards: [
          {
            title: 'Claude practice',
            body: 'Claude enterprise adoption, Claude Code for engineering teams, agents built with Claude and secure connections to your systems.',
            href: '/what-we-do/applied-ai/claude',
          },
          {
            title: 'Agentic automation',
            body: 'Agents for document-heavy processes such as document intake and claims, with human approval gates where liability sits.',
            href: '/what-we-do/applied-ai/agentic-automation',
          },
          {
            title: 'Local AI',
            body: 'Open-weight models and agents on your own servers or private cloud, for data that cannot go to a third-party AI service.',
            href: '/what-we-do/applied-ai/local-ai',
          },
          {
            title: 'Enterprise AI platforms',
            body: 'A shared foundation for every team: model gateway, routing, prompt and version control, evaluation, observability and cost control.',
            href: '/what-we-do/applied-ai/ai-platforms',
          },
          {
            title: 'Knowledge assistants',
            body: 'Answers grounded in your documents, with citations, and retrieval scoped to what each user can already see.',
            href: '/what-we-do/applied-ai/knowledge-assistants',
          },
          {
            title: 'AI governance',
            body: 'Data boundaries, audit trails, evaluation and policy controls, so the compliance team signs off rather than shuts it down.',
            href: '/what-we-do/applied-ai/ai-governance',
          },
          {
            title: 'AI-assisted engineering',
            body: 'Coding assistants such as Claude Code, rolled out with guardrails, review practices and agreed measures.',
            href: '/what-we-do/applied-ai/ai-assisted-engineering',
          },
        ],
      },
      {
        type: 'workflow',
        title: 'Where a person reviews or approves',
        lede: 'AI drafts, checks and routes. People approve where the decision carries liability, and every step is logged.',
      },
      {
        type: 'modelNeutral',
        title: 'Models and clouds we work with',
        lede: 'We work with Claude, OpenAI models and open-weight models, run on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry or direct APIs. We pick the model for the task and the cloud for your estate, and keep the option to switch.',
      },
      {
        type: 'tabs',
        title: 'Typical AI projects',
        tabs: [
          {
            label: 'Document intake',
            description:
              'Forms, packs and correspondence read, classified and extracted into your systems, with exceptions routed to a person.',
            bullets: [
              'Classification and field extraction with confidence scores',
              'Validation against your business rules',
              'Human review queue for low-confidence items',
              'Full audit trail of each document and decision',
            ],
          },
          {
            label: 'Claims and case handling',
            description:
              'Agents that gather evidence, summarize a case and draft a recommendation, while a handler makes the decision.',
            bullets: [
              'Evidence gathering across your existing systems',
              'Case summaries with links back to sources',
              'Draft recommendations for human approval',
              'Logged reasoning and approvals for audit',
            ],
          },
          {
            label: 'Internal knowledge search',
            description:
              'Ask a question in plain language and get a cited answer from policies, procedures and past work.',
            bullets: [
              'Answers with citations to the source document',
              'Results limited to what each user can already access',
              'Feedback loop to improve answer quality',
            ],
          },
          {
            label: 'Engineering productivity',
            description:
              'Coding assistants introduced with policies, review practices and measurement, so speed does not cost quality.',
            bullets: [
              'Usage policies and repository guardrails',
              'Review and testing practices for AI-written code',
              'Measurement agreed before rollout',
            ],
          },
        ],
      },
      {
        type: 'list',
        title: 'What changes once AI is in production',
        items: [
          'Pilots that become production systems with an owner, a run guide and monitoring.',
          'Fewer manual re-keying steps in document-heavy processes.',
          'A clear record of what data each AI system touches and who approved its output.',
          'Accuracy tested on your data against a target you set before go-live.',
          'Less rework if you change model or cloud later.',
          'An honest answer when a simpler fix solves the problem better than AI.',
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai'] },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Why do AI pilots stall before production?',
            a: 'Usually for the same reasons: the demo runs on sample data, nobody owns integration or security, and nobody can say what the model touches or who approved its output. Fixing that is engineering and governance work more than a better model.',
          },
          {
            q: 'Which models and clouds do you work with?',
            a: 'Claude, OpenAI models and open-weight models, run on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry or direct APIs. We pick the model for the task and the cloud for your estate, and keep the option to switch.',
          },
          {
            q: 'Do your AI agents act without human approval?',
            a: 'Not where a decision carries liability. AI drafts, checks and routes the work; a named person approves consequential actions, and every step is logged in your environment.',
          },
          {
            q: 'How do you test an AI system before go-live?',
            a: 'Acceptance tests and pass thresholds are agreed with the business before the build starts, and a release goes ahead only when it meets them. The same tests run again after every change to the model, the prompts or the data.',
          },
          {
            q: 'Can we use AI without sending data to a third-party AI service?',
            a: 'Yes. Our local AI work runs open-weight models and agents on your own servers or private cloud, for data that cannot go to an outside provider.',
          },
          {
            q: 'Do you use our data to train models?',
            a: 'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Claude practice
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/claude',
    meta: {
      title: 'Claude implementation services for enterprises | YatiSphere',
      description:
        'Independent Claude implementation partner: Claude Enterprise and Claude Code rollout, agents and MCP integrations on Bedrock, Google Cloud, Foundry or API.',
    },
    hero: {
      kicker: 'APPLIED AI / CLAUDE',
      h1: 'Claude implementation services for the enterprise',
      subhead:
        'An independent implementation partner for Claude Enterprise, Claude Code, Claude agents and MCP integrations, run inside the cloud boundary you choose.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'Claude practice',
    contactInterest: 'Claude',
    contact: { title: 'Rolling out Claude or Claude Code?', body: 'Tell us how many people, which systems and which cloud.' },
    blocks: [
      {
        type: 'cards',
        title: 'Claude services',
        columns: 3,
        cards: [
          {
            title: 'Claude Enterprise rollout',
            body: 'SSO and SCIM, roles, connectors, retention settings, spend limits and enablement for teams using Claude.',
          },
          {
            title: 'Claude Code for engineering teams',
            body: 'Managed policy, permissions, MCP allowlists, gateway routing and productivity measurement for Claude Code.',
          },
          {
            title: 'Agents built with Claude',
            body: 'Workflow agents on the Claude API, the Claude Agent SDK or Managed Agents, with approval gates and audit logs.',
          },
          {
            title: 'Connecting Claude to your systems with MCP',
            body: 'Secure Model Context Protocol integrations to internal data and tools, with scoped access and logging.',
          },
          {
            title: 'Evaluation and cost control',
            body: 'Test sets, red-teaming, monitoring and model routing so the right Claude model handles each task.',
          },
          {
            title: 'Choosing where Claude runs',
            body: 'An independent comparison of Claude Enterprise, the API, Bedrock, Google Cloud and Microsoft Foundry for your data and contracts.',
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Where Claude can run, and what changes',
        items: [
          {
            title: 'Claude Enterprise (seats for your people)',
            body: 'For when your staff use Claude themselves. You get the Claude apps, Claude Code, Cowork and connectors, with SSO, SCIM, audit logs, a Compliance API and your own retention settings. Anthropic processes the data, and you pay a seat fee plus usage at API rates.',
          },
          {
            title: 'Claude API, direct from Anthropic',
            body: 'Where new models and features land first, including Agent Skills, code execution and Managed Agents. Anthropic processes the data, and you can ask for zero data retention or HIPAA readiness. We use it when a build depends on the latest features.',
          },
          {
            title: 'Claude Platform on AWS',
            body: 'Anthropic’s own platform, reached through your AWS account with IAM, AWS billing and CloudTrail. You get features on Anthropic’s timetable, but Anthropic, not AWS, is the data processor, even though newer workspaces run on AWS infrastructure.',
          },
          {
            title: 'Amazon Bedrock',
            body: 'AWS runs the service and your data never leaves your AWS environment. New features follow Bedrock’s schedule, which can lag a little. For most regulated AWS customers, this is where we start.',
          },
          {
            title: 'Google Cloud Agent Platform (formerly Vertex AI)',
            body: 'Two versions: Google-managed, where Google processes the data, and Anthropic-managed, where Anthropic does. Check which Claude models your region offers before you commit.',
          },
          {
            title: 'Microsoft Foundry',
            body: 'Generally available since June 2026, hosted on Azure or on Anthropic, with Azure sign-in, billing and a US data zone. Anthropic still runs the models and processes the data, so check EU residency if it applies to you.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Claude Code rollout for engineering teams',
        tabs: [
          {
            label: 'Access',
            description: 'Decide how developers sign in and where model traffic goes before anyone installs it.',
            bullets: [
              'Enterprise seats with SSO and SCIM, or a cloud provider behind an LLM gateway',
              'Allowed providers locked in managed settings',
              'Spend limits per user and for the organization',
            ],
          },
          {
            label: 'Policy',
            description: 'Organization-wide settings that developers cannot override.',
            bullets: [
              'Managed settings pushed from the server or by device management',
              'Permission rules, sandboxing and hooks for risky commands',
              'An allowlist of approved MCP servers',
            ],
          },
          {
            label: 'Measurement',
            description: 'A baseline first, then the same measures after rollout.',
            bullets: [
              'Cycle time, review load and defect trends',
              'Usage and cost by team from telemetry',
              'Developer feedback, including where it does not help',
            ],
          },
        ],
      },
      {
        type: 'offer',
        name: 'Claude rollout baseline',
        summary:
          'A fixed-scope first engagement for teams getting started with Claude or Claude Code. We help you pick the right route for your data, set it up the way your security team will want it, and prove it on one real piece of work.',
        includes: [
          'Route decision: Claude Enterprise, the API, Bedrock, Google Cloud or Microsoft Foundry, matched to your data processor and residency requirements',
          'Identity, retention, logging and spend controls configured and documented',
          'Claude Code managed policy and an approved MCP server list for one engineering team',
          'One use case built and measured against a target you set',
          'A rollout plan for the next teams, with owners and costs',
        ],
        deliverable:
          'Claude running on the route you chose, with the controls in place, a pilot you’ve measured and a written plan that your security, legal and finance teams can sign off.',
      },
      {
        type: 'cards',
        title: 'Security and governance controls',
        columns: 3,
        cards: [
          {
            title: 'Data boundaries',
            body: 'We agree what data Claude may see, where it runs and who processes it before anything is built.',
          },
          {
            title: 'No training on client data',
            body: NO_TRAINING,
          },
          {
            title: 'Evaluation',
            body: 'Accuracy and behavior are tested on your data against a target you set, before go-live and after every change.',
          },
          {
            title: 'Audit logging',
            body: 'Prompts, tool calls, outputs and approvals are logged so you can answer who did what, and when.',
          },
          {
            title: 'Human approval',
            body: 'Where liability sits with a person, a person approves. Agents propose; people decide.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a Claude rollout runs',
        steps: [
          {
            title: 'Readiness',
            body: 'We agree the use cases, check the data and risks, choose where Claude runs and set the policies that apply.',
          },
          {
            title: 'Pilot on your data',
            body: 'A working version on your own data, with accuracy measured against a target you set.',
          },
          {
            title: 'Production',
            body: 'Integration with your systems, security hardening, approvals, logging and monitoring.',
          },
          {
            title: 'Run',
            body: 'We operate and improve it, or hand over to your team with a run guide.',
          },
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Who implements Claude for enterprises?',
            a: 'Anthropic sells Claude directly and through AWS, Google Cloud and Microsoft. The hands-on work, choosing a route, setting up identity and data controls, rolling out Claude Code and building agents and MCP integrations, is usually done by an implementation partner. That’s what we do. We’re independent and not affiliated with Anthropic.',
          },
          {
            q: 'Should we buy Claude Enterprise or use the API?',
            a: 'It depends who’s using it. Claude Enterprise is for people using the Claude apps and Claude Code, and you pay seat fees plus usage at API rates. The API is for your own applications and agents. Most enterprises end up with both, usually with API access through the cloud they already run on.',
          },
          {
            q: 'Which cloud should we run Claude on?',
            a: 'Usually the one where your data and security controls already live. The bigger question is who processes the data: on Bedrock and Google-managed Agent Platform it’s the cloud provider, while on the direct API, Claude Platform on AWS and Microsoft Foundry it’s Anthropic. Features and regions differ too, so we check both against your requirements early on.',
          },
          {
            q: 'Does Anthropic train on our data?',
            a: "Anthropic's commercial terms bar training on customer content from its commercial services, and on Bedrock or Google-managed Agent Platform the cloud provider's terms apply. We review the current terms with you, configure retention settings and confirm them in writing. " +
              NO_TRAINING,
          },
          {
            q: 'How do you roll out Claude Code safely?',
            a: 'First we settle how developers sign in and where model traffic goes. Then we push managed settings for permissions, sandboxing and an approved list of MCP servers, and add a gateway if you need logging or budgets. We measure productivity before rollout and after, and we tell you where it isn’t helping as well as where it is.',
          },
          {
            q: 'Can Claude connect to our internal systems?',
            a: 'Yes. We use the Model Context Protocol (MCP) to connect Claude to internal data and tools, with access scoped to what each use case needs and every call logged.',
          },
          {
            q: 'How long does a pilot take?',
            a: 'It depends on the use case, data and integrations involved, so we do not promise a fixed duration. Each pilot is scoped in the Blueprint before work starts.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services and guides',
        links: [
          {
            label: 'Claude deployment options compared',
            href: '/insights/claude-enterprise-deployment-options',
            descriptor: 'Claude Enterprise, the API, Bedrock, Google Cloud and Microsoft Foundry: who processes your data and which to choose.',
          },
          {
            label: 'AI-assisted engineering',
            href: '/what-we-do/applied-ai/ai-assisted-engineering',
            descriptor: 'Coding assistants rolled out with guardrails and measurement.',
          },
          {
            label: 'Agentic automation',
            href: '/what-we-do/applied-ai/agentic-automation',
            descriptor: 'Agents for document-heavy processes, with human approval.',
          },
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Oversight, logging and alignment to recognized frameworks.',
          },
          RESPONSIBLE_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'claude'] },
      {
        type: 'note',
        text: 'Claude and Anthropic are trademarks of Anthropic, PBC. AWS, Microsoft Azure and Google Cloud are trademarks of their respective owners. YatiSphere is an independent company and is not affiliated with or endorsed by Anthropic.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Agentic automation
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/agentic-automation',
    meta: {
      title: 'AI agents for document-heavy workflows | YatiSphere',
      description:
        'AI agents for intake, KYC and claims, plus knowledge assistants with citations, with human approval gates, audit logs and evaluation on your own data.',
    },
    hero: {
      kicker: 'APPLIED AI / AGENTIC AUTOMATION',
      h1: 'AI agents for intake, KYC and claims workflows',
      subhead: 'We build AI agents that handle document-heavy processes and hand decisions to people where liability sits.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'Agentic automation',
    contactInterest: 'Applied AI',
    contact: { title: 'Have a document-heavy process that eats hours?', body: 'Tell us what the documents are and who decides.' },
    blocks: [
      {
        type: 'statement',
        text: 'Forms, claims and correspondence are still read and re-keyed by hand, with every delay landing on a customer. We build agents that read, check and route that work inside your systems, with a person approving the decisions that carry risk and a log of every step.',
      },
      {
        type: 'cards',
        title: 'AI agent services',
        columns: 2,
        cards: [
          {
            title: 'Process selection',
            body: 'We find the steps where an agent helps, the ones where it should not act alone, and say plainly when a simpler fix works better.',
          },
          {
            title: 'Agent design and build',
            body: 'Single and multi-agent workflows that use your tools and data through scoped, logged connections.',
          },
          {
            title: 'Human approval gates',
            body: 'Clear points where a person reviews, edits or rejects what the agent proposes before anything is committed.',
          },
          {
            title: 'Evaluation and monitoring',
            body: 'Test sets built from your cases, accuracy targets you set, and monitoring once the agent is live.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Typical agent workflows',
        tabs: [
          {
            label: 'Document intake',
            description: 'Incoming documents classified, extracted and validated, with exceptions sent to a reviewer.',
            bullets: [
              'Classification and field extraction',
              'Checks against your business rules',
              'Review queue for low-confidence items',
            ],
          },
          {
            label: 'Claims and case handling',
            description: 'Agents gather evidence and draft a recommendation; a handler decides.',
            bullets: [
              'Evidence collected across existing systems',
              'Case summaries linked to sources',
              'Approvals recorded for audit',
            ],
          },
          {
            label: 'Back-office requests',
            description: 'Routine internal requests triaged and prepared, so teams spend time on the exceptions.',
            bullets: [
              'Triage and routing by request type',
              'Drafted responses for review',
              'Escalation rules you control',
            ],
          },
          {
            label: 'Knowledge assistants',
            description: 'Answers from your own documents, with citations, retrieving only what the person asking can already see.',
            bullets: ['Answers cite the source passage', 'Retrieval respects existing access rights', 'Evaluated on your own questions before go-live'],
          },
          {
            label: 'AI platform foundation',
            description: 'One gateway, routing, evaluation and cost control in your own cloud account, so every team runs AI on the same controls.',
            bullets: ['LLM gateway and model routing', 'Prompt and version control', 'Observability and cost per use case'],
          },
        ],
      },
      {
        type: 'steps',
        title: 'How an agent project runs',
        steps: [
          { title: 'Assess', body: 'We map the process, check the data and risks, and agree where people must approve.' },
          { title: 'Pilot', body: 'A working agent on your own data, measured against an accuracy target you set.' },
          { title: 'Productionize', body: 'Integration, security hardening, approval gates, logging and monitoring.' },
          { title: 'Run', body: 'We operate and improve it, or hand over to your team with a run guide.' },
        ],
      },
      {
        type: 'list',
        title: 'What you get at go-live',
        items: [
          'A process map showing where the agent acts and where people approve.',
          'A working agent integrated with your systems.',
          'An evaluation set and accuracy report on your data.',
          'Audit logs of agent actions and human approvals.',
          'A run guide and monitoring dashboards.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Will an agent make decisions on its own?',
            a: 'Only where you decide it should. Where liability sits with a person, a person approves, and that is designed in from the start.',
          },
          {
            q: 'Which models do you use?',
            a: 'We are model-neutral. We work with Claude, OpenAI models and open-weight models, and choose based on the task, your data rules and your cloud.',
          },
          {
            q: 'What if AI is not the right answer?',
            a: 'We will tell you. If a rules engine, a form change or a simpler integration solves the problem, that is what we recommend.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          CLAUDE_LINK,
          {
            label: 'Enterprise AI platforms',
            href: '/what-we-do/applied-ai/ai-platforms',
            descriptor: 'The shared foundation agents run on.',
          },
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Oversight, logging and policy controls.',
          },
          RESPONSIBLE_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'agentic-automation'] },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Enterprise AI platforms
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/ai-platforms',
    meta: {
      title: 'Enterprise AI platform and LLM gateway | YatiSphere',
      description:
        'Enterprise AI platforms with an LLM gateway, model routing, evaluation and cost control, on Amazon Bedrock, Vertex AI, Microsoft Foundry or direct APIs.',
    },
    hero: {
      kicker: 'APPLIED AI / ENTERPRISE AI PLATFORMS',
      h1: 'One foundation for AI',
      subhead: 'We build the shared platform every team uses to run AI: one gateway, one set of controls, any model.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'Enterprise AI platforms',
    contactInterest: 'Applied AI',
    blocks: [
      {
        type: 'statement',
        text: 'When every team picks its own model, keys and logging, nobody can see costs, risks or what data is leaving. A shared AI platform gives every team the same foundations (gateway, routing, prompt and version control, evaluation, observability and cost management) in your own cloud account, on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry or direct APIs.',
      },
      {
        type: 'cards',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'LLM gateway',
            body: 'One controlled entry point for model access, with authentication, data rules and logging applied the same way for every team.',
          },
          {
            title: 'Model routing',
            body: 'Send each task to the model that fits it on quality, cost and data rules, and switch models without rewriting applications.',
          },
          {
            title: 'Evaluation',
            body: 'Shared test sets and regression checks so a prompt or model change is measured before it reaches users.',
          },
          {
            title: 'Cost control',
            body: 'Usage visible by team and use case, with budgets, alerts and caching where it helps.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Typical projects',
        tabs: [
          {
            label: 'Platform foundation',
            description: 'The gateway, identity, logging and network controls deployed in your own cloud account.',
            bullets: [
              'Gateway with access policies per team',
              'Private networking and key management',
              'Central logging and observability',
            ],
          },
          {
            label: 'Model operations',
            description: 'Prompt and version control, routing rules and evaluation pipelines.',
            bullets: [
              'Versioned prompts and configurations',
              'Routing across Claude, OpenAI and open-weight models',
              'Evaluation gates before release',
            ],
          },
          {
            label: 'FinOps for AI',
            description: 'Know what AI costs, who is spending it and what it returns.',
            bullets: [
              'Usage and cost by team and use case',
              'Budgets and alerts',
              'Optimization through routing and caching',
            ],
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a project runs',
        steps: [
          { title: 'Assess', body: 'We review current AI use, data rules and cloud estate, and agree what the platform must enforce.' },
          { title: 'Design', body: 'A target architecture for gateway, routing, evaluation and cost control in your cloud.' },
          { title: 'Build', body: 'Infrastructure as code, onboarding of the first use cases and runbooks.' },
          { title: 'Run', body: 'We operate and extend the platform, or hand over to your platform team.' },
        ],
      },
      {
        type: 'list',
        title: 'What you get',
        items: [
          'A platform architecture and decision record.',
          'A gateway and routing layer deployed in your cloud account.',
          'Shared evaluation pipelines and test sets.',
          'Cost dashboards by team and use case.',
          'Onboarding guides for new teams and use cases.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Do we need a platform before our first use case?',
            a: 'Not always. We often build the first use case and the minimum platform it needs together, then extend the platform as more teams join.',
          },
          {
            q: 'Can we use more than one model provider?',
            a: 'Yes. The platform is model-neutral by design, so you can use Claude, OpenAI models and open-weight models side by side and change them later.',
          },
          {
            q: 'Which cloud do you build on?',
            a: 'The one your estate already uses. We build on Amazon Bedrock, Google Cloud Vertex AI and Microsoft Foundry, or with direct APIs.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          CLAUDE_LINK,
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Policy controls the platform enforces.',
          },
          {
            label: 'Agentic automation',
            href: '/what-we-do/applied-ai/agentic-automation',
            descriptor: 'Agents that run on the platform.',
          },
          RESPONSIBLE_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'ai-platforms'] },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Knowledge assistants
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/knowledge-assistants',
    meta: {
      title: 'Enterprise knowledge assistants (RAG) | YatiSphere',
      description:
        'Enterprise knowledge assistants that answer from your documents with citations, with retrieval scoped to what each user can already see.',
    },
    hero: {
      kicker: 'APPLIED AI / KNOWLEDGE ASSISTANTS',
      h1: 'Answers your people can check',
      subhead: 'We build assistants that answer from your own documents, cite their sources and respect existing access rights.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'Knowledge assistants',
    contactInterest: 'Applied AI',
    blocks: [
      {
        type: 'statement',
        text: 'People spend too long finding the right policy, procedure or past piece of work. A knowledge assistant answers in plain language from your own content, shows where each answer came from, and only retrieves what the person asking can already see.',
      },
      {
        type: 'cards',
        title: 'What we do',
        columns: 3,
        cards: [
          {
            title: 'Permission-aware retrieval',
            body: 'Retrieval scoped to what each user can already see in the source systems, so the assistant never widens access.',
          },
          {
            title: 'Answers with citations',
            body: 'Every answer links to the passages it was drawn from, so people can check it before relying on it.',
          },
          {
            title: 'Quality and evaluation',
            body: 'Test questions from your teams, accuracy targets you set and feedback that improves answers over time.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Typical projects',
        tabs: [
          {
            label: 'Internal knowledge search',
            description: 'A single place to ask about policies, procedures and guidance.',
            bullets: ['Plain-language questions', 'Cited answers', 'Links to the source documents'],
          },
          {
            label: 'Team assistants',
            description: 'Assistants for a specific team, grounded in that team’s documents and past work.',
            bullets: ['Scoped content sources', 'Templates and drafting help', 'Feedback from users'],
          },
          {
            label: 'Assistants in existing tools',
            description: 'The assistant where people already work, rather than another app to open.',
            bullets: ['Embedded in your intranet or workspace tools', 'Single sign-on', 'Usage and quality reporting'],
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a project runs',
        steps: [
          { title: 'Assess', body: 'We review content sources, access rules and the questions people actually ask.' },
          { title: 'Pilot', body: 'An assistant on a defined set of your content, measured against an accuracy target you set.' },
          { title: 'Scale', body: 'More sources, permission sync, monitoring and integration into everyday tools.' },
          { title: 'Run', body: 'We keep content and quality current, or hand over to your team with a run guide.' },
        ],
      },
      {
        type: 'list',
        title: 'What you get',
        items: [
          'An assistant that answers from your content with citations.',
          'Retrieval that respects existing access rights.',
          'An evaluation set and accuracy report.',
          'Usage and quality monitoring.',
          'A content and run guide for your team.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Can users see documents they are not allowed to?',
            a: 'No. Retrieval is scoped to what each user can already see in the source systems, and we test that before go-live.',
          },
          {
            q: 'What happens when the assistant does not know?',
            a: 'It should say so. We design and test for that, and every answer shows its sources so people can check it.',
          },
          {
            q: 'Is our content used to train the model?',
            a: NO_TRAINING,
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          CLAUDE_LINK,
          {
            label: 'Enterprise AI platforms',
            href: '/what-we-do/applied-ai/ai-platforms',
            descriptor: 'Gateway, routing, evaluation and cost control.',
          },
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Oversight, logging and policy controls.',
          },
          RESPONSIBLE_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'knowledge-assistants'] },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. AI governance
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/ai-governance',
    meta: {
      title: 'Enterprise AI governance services | YatiSphere',
      description:
        'Enterprise AI governance that runs: inventory, risk tiers, approvals, controls and evidence, aligned to the NIST AI RMF, ISO/IEC 42001 and the EU AI Act.',
    },
    hero: {
      kicker: 'APPLIED AI / AI GOVERNANCE',
      h1: 'Enterprise AI governance that actually runs',
      subhead: 'We build the operating model, controls and evidence that let your organization approve AI quickly and prove it stays under control.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'AI governance',
    contactInterest: 'Applied AI',
    contact: { title: 'Need AI through a risk, audit or customer review?', body: 'Tell us what you are using AI for and who has to approve it.' },
    blocks: [
      {
        type: 'statement',
        text:
          'Most organizations now have an AI policy, but far fewer can show who approved each use, what data it touches and how they would stop it. We turn policy into an operating model: an inventory that stays current, risk tiers that decide the controls, approval gates with a fast lane for low-risk work, and evidence your auditors, customers and regulators can check. ' +
          ALIGNMENT_LINE,
      },
      {
        type: 'cards',
        title: 'What we put in place',
        columns: 2,
        cards: [
          {
            title: 'Ownership and decisions',
            body: 'A named executive, a small governance council and clear owners for every AI use, so decisions get made quickly and by the right people. We fit this to your existing risk committees rather than adding a new bureaucracy.',
            bullets: ['Roles and decision rights', 'Short policy and acceptable-use standard', 'Board reporting'],
          },
          {
            title: 'Inventory and risk tiers',
            body: 'A complete inventory of the AI you build, buy, find inside vendor products and that staff use directly, each use tiered by its consequences. The tier decides the controls, so low-risk requests move in days.',
            bullets: ['Discovery, including shadow AI', 'Tiering and impact assessments', 'Vendor and contract review'],
          },
          {
            title: 'Controls that run',
            body: 'Controls built into a shared technical layer every approved use passes through, so they work whether or not anyone remembers the policy. That includes data rules, logging, evaluation, human oversight and a way to stop.',
            bullets: ['AI gateway and data boundaries', 'Approvals and audit trails', 'Evaluation, monitoring, kill switches'],
          },
          {
            title: 'Assurance and evidence',
            body: 'Evidence on demand that controls operated, organized for the reviewer in front of you: internal audit, a customer questionnaire, a supervisor or a certification body.',
            bullets: ['Evidence register', 'Internal audit readiness', 'ISO/IEC 42001 readiness'],
          },
        ],
      },
      {
        type: 'example',
        kicker: 'Worked example',
        title: 'One AI use case, from request to evidence',
        lede: 'An illustrative request: a commercial team wants AI to extract key clauses from customer contracts.',
        afterLabel: 'With governance that runs',
        rows: [
          {
            step: 'The request',
            today: 'A team buys a tool on a card or switches on a vendor feature. Legal hears about it months later.',
            after: 'A short intake form creates an inventory record with an owner, a purpose and what the tool may not do.',
          },
          {
            step: 'Classification',
            today: 'Every request gets the same committee review, so simple ones wait weeks and people stop asking.',
            after: 'The use is tiered on consequences, data and autonomy. Low tiers take a fast lane; this one is tier 2.',
          },
          {
            step: 'Approval',
            today: 'An email thread approves the idea. Nobody records the conditions or the residual risk.',
            after: 'An impact assessment records harms, oversight and test results, and a named owner accepts the residual risk.',
          },
          {
            step: 'Build or buy',
            today: 'The vendor contract says nothing about training on your data or model changes.',
            after: 'Contract terms cover data use, change notice and logs. The use runs behind the shared AI gateway with data rules applied.',
          },
          {
            step: 'Go-live',
            today: 'It goes live when the demo looks good.',
            after: 'It goes live when it passes an evaluation set with thresholds agreed before the build, and a lawyer approves each output.',
          },
          {
            step: 'Change',
            today: 'The vendor swaps the underlying model. Nobody notices.',
            after: 'A model, prompt or data change triggers re-testing in proportion to the tier, recorded in the inventory.',
          },
          {
            step: 'Audit',
            today: 'Someone spends two weeks reconstructing what happened from emails and screenshots.',
            after: 'The evidence register points to the approval, test results, logs and recertification date in minutes.',
          },
        ],
        note: 'Illustrative. The names of steps and tiers follow our method; your existing risk taxonomy can be used instead.',
      },
      {
        type: 'offer',
        kicker: 'Start here',
        name: 'AI governance baseline',
        summary: 'A fixed-scope first engagement that gives you a working governance program for the AI you already use, before you scale further.',
        includes: [
          'Discovery of AI in use: built, bought, embedded in vendor products and used by staff',
          'Inventory with owners, purposes and risk tiers',
          'Operating model: decision rights, council, fast lane and board reporting',
          'Policy stack: AI policy, acceptable-use, risk and procurement standards',
          'Impact assessments for your highest-risk uses',
          'Control gap analysis against NIST AI RMF, ISO/IEC 42001 and the regulations that apply to you',
        ],
        deliverable:
          'A working inventory and tiering method, a policy stack your teams can follow, impact assessments for the riskiest uses, and a prioritized twelve-month roadmap for controls and assurance.',
      },
      {
        type: 'accordion',
        title: 'Rules and standards we map your controls to',
        items: [
          {
            title: 'EU AI Act',
            body: 'As amended by the Digital Omnibus (Regulation (EU) 2026/1744): prohibitions and AI literacy already apply, general-purpose model and transparency obligations apply, and high-risk obligations start on December 2, 2027, for Annex III uses such as credit scoring and employment, and on August 2, 2028, for AI in regulated products.',
          },
          {
            title: 'NIST AI RMF and ISO/IEC standards',
            body: 'The NIST AI RMF 1.0 and its Generative AI Profile; ISO/IEC 42001 for an AI management system, ISO/IEC 42005 for impact assessments, and ISO/IEC 42006, which governs the bodies that certify against 42001.',
          },
          {
            title: 'US state laws on automated decisions',
            body: 'Colorado’s SB 26-189, which replaced its 2024 AI Act and takes effect on January 1, 2027, and California’s CCPA rules on automated decision-making technology, operative from January 1, 2027, with risk assessments to be filed with the state privacy agency from 2028.',
          },
          {
            title: 'Sector regulators',
            body: 'For US banks, the April 2026 model risk guidance (SR 26-2), which leaves generative and agentic AI out of scope, and the OCC’s November 2026 examiner framework for bank AI. For US law firms, ABA Formal Opinion 512 and state bar guidance.',
          },
          {
            title: 'Customer and contract requirements',
            body: 'AI sections in security questionnaires, requests for an AI management system or ISO/IEC 42001 certificate, and AI clauses in master service agreements.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a governance program is built',
        steps: [
          { title: 'Discover', body: 'We find the AI you use, including vendor features and staff tools, and record owners and purposes.' },
          { title: 'Tier', body: 'Each use is classified by consequences, data and autonomy, which sets the controls it needs.' },
          { title: 'Design', body: 'Decision rights, policies, lifecycle gates and the control layer are designed to fit your existing risk structure.' },
          { title: 'Implement', body: 'Controls go into the platform and the riskiest uses first: data rules, logging, evaluation, oversight and a way to stop.' },
          { title: 'Assure', body: 'Monitoring, recertification, board reporting and an evidence register keep the program current and auditable.' },
        ],
      },
      {
        type: 'list',
        title: 'What you can show a reviewer',
        items: [
          'An AI inventory with owners, purposes, risk tiers and recertification dates.',
          'Impact assessments and test results for every high-risk use.',
          'A control map against the NIST AI RMF, ISO/IEC 42001 and the rules that apply to you.',
          'Logs, approvals and evaluation results produced by the platform, not reconstructed.',
          'Quarterly board reporting on coverage, speed, incidents and exceptions.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Where should an AI governance program start?',
            a: 'With the inventory. You cannot classify, control or report on AI you do not know about. A first inventory, including vendor features and the tools staff use directly, usually changes the priorities more than any framework does.',
          },
          {
            q: 'Will governance slow our AI projects down?',
            a: 'It should do the opposite. Risk tiers let low-risk requests take a fast lane decided in days, and answering the sign-off questions early is usually what lets higher-risk projects reach production instead of stalling at review.',
          },
          {
            q: 'Does this cover AI built into the software we already buy?',
            a: 'Yes. For most enterprises that is where most AI comes from. We help you find it, review vendors and add contract terms on data use, change notice, logging and incidents.',
          },
          {
            q: 'What about AI agents?',
            a: 'Agents need a few extra controls because they act rather than advise: their own identities and limited permissions, approvals bound to specific consequential actions, audit trails of every action, and a way to stop them that sits outside the agent.',
          },
          {
            q: 'Does this give us a certification?',
            a: 'No. We help you align with ISO/IEC 42001, the NIST AI RMF and the rules that apply to you, and can prepare you for certification. Certification itself is carried out by an accredited certification body.',
          },
          {
            q: 'Do you provide legal advice?',
            a: 'No. We work alongside your legal and compliance teams and build the operational and technical controls that put their requirements into practice.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Guides and related services',
        links: [
          {
            label: 'Enterprise AI governance: the full guide',
            href: '/insights/enterprise-ai-governance-operating-model',
            descriptor: 'Operating model, inventory, tiers, controls, assurance and a 12-month roadmap.',
          },
          {
            label: 'Kill switches, approvals and audit logs',
            href: '/insights/ai-agent-kill-switches-approvals-audit-logs',
            descriptor: 'A reference design for controlling AI agents.',
          },
          RESPONSIBLE_AI_LINK,
          {
            label: 'Agentic automation',
            href: '/what-we-do/applied-ai/agentic-automation',
            descriptor: 'AI agents with approvals and audit trails built in.',
          },
          APPLIED_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'ai-governance'] },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. AI-assisted engineering
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/applied-ai/ai-assisted-engineering',
    meta: {
      title: 'Claude Code rollout for engineering teams | YatiSphere',
      description:
        'AI-assisted engineering: roll out coding assistants such as Claude Code with guardrails, review practices and measurement agreed before you start.',
    },
    hero: {
      kicker: 'APPLIED AI / AI-ASSISTED ENGINEERING',
      h1: 'AI coding assistant rollout for engineering teams',
      subhead: 'We help engineering teams adopt coding assistants such as Claude Code with guardrails, review practices and honest measurement.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'AI-assisted engineering',
    contactInterest: 'Claude',
    contact: { title: 'Rolling out a coding assistant?', body: 'Tell us the team size and the tools you use today.' },
    blocks: [
      {
        type: 'statement',
        text: 'Coding assistants can speed up engineering work, but without policies, review practices and measurement they also add risk and noise. We roll them out so your teams get the benefit while your standards for security, quality and ownership stay in place.',
      },
      {
        type: 'cards',
        title: 'Rollout services',
        columns: 2,
        cards: [
          {
            title: 'Rollout',
            body: 'Phased adoption of coding assistants such as Claude Code, starting with teams and repositories where the fit is clearest.',
          },
          {
            title: 'Guardrails and policies',
            body: 'Permissions, approved tools, data rules and repository settings agreed with security before broad use.',
          },
          {
            title: 'Review practices',
            body: 'Code review and testing practices adapted for AI-written code, so ownership stays with engineers.',
          },
          {
            title: 'Measurement',
            body: 'Measures agreed before rollout, a baseline taken first, and reporting on what changes, including where it does not help.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Typical rollouts',
        tabs: [
          {
            label: 'Assistant rollout',
            description: 'Getting coding assistants into daily use across teams.',
            bullets: ['Pilot team selection', 'Setup and configuration', 'Enablement sessions and playbooks'],
          },
          {
            label: 'Secure configuration',
            description: 'Controls that match your security and data policies.',
            bullets: ['Permission and tool policies', 'Tool connections over MCP with scoped access', 'Usage logging'],
          },
          {
            label: 'Impact measurement',
            description: 'Evidence on whether the assistants are helping.',
            bullets: ['Baseline before rollout', 'Delivery and quality measures', 'Developer feedback'],
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a rollout runs',
        steps: [
          { title: 'Readiness', body: 'We review your repositories, security rules and delivery practices, and agree the measures.' },
          { title: 'Pilot', body: 'A pilot with selected teams, with guardrails in place and a baseline taken first.' },
          { title: 'Rollout', body: 'Wider adoption with playbooks, review practices and enablement.' },
          { title: 'Measure and improve', body: 'Regular reporting against the agreed measures, and adjustments where needed.' },
        ],
      },
      {
        type: 'list',
        title: 'What you get after the pilot',
        items: [
          'A rollout plan and usage policies agreed with security.',
          'Configured coding assistants with guardrails in place.',
          'Review and testing practices for AI-written code.',
          'A measurement baseline and regular impact reports.',
          'Playbooks your teams can keep using.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'Do you only work with Claude Code?',
            a: 'No. We have a dedicated Claude practice, and we also work with other coding assistants your teams already use.',
          },
          {
            q: 'How do you measure impact?',
            a: 'We agree measures such as cycle time, review load, defect trends and developer feedback before rollout, take a baseline, and report what changes.',
          },
          {
            q: 'Will AI-written code reach production without review?',
            a: 'No. Engineers remain responsible for the code they merge, and we adapt review and testing practices accordingly.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          CLAUDE_LINK,
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Policies and oversight for AI use.',
          },
          {
            label: 'Enterprise AI platforms',
            href: '/what-we-do/applied-ai/ai-platforms',
            descriptor: 'Shared controls and cost visibility.',
          },
          RESPONSIBLE_AI_LINK,
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'ai-assisted-engineering'] },
    ],
  },
]
