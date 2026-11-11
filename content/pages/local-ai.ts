import type { ContentPage } from './types'

/**
 * Local and private AI (added 2026-11-11).
 *
 * Search intent: "local AI" and "private AI" have similar worldwide search
 * interest (Google Trends, Nov 2025 – Nov 2026); "private LLM", "on-premise
 * AI" and "self-hosted LLM" are far smaller. The page uses "local AI" in the
 * URL and H1 and "private LLM" in the copy, and is the new home for the
 * "enterprise llm platform" intent the retired ai-platforms page ranked for.
 *
 * Model and hardware facts are dated (November 2026) and need a review
 * every quarter: open-weight releases move fast. Sources are listed in the
 * project doc claude/yatisphere-local-ai-page-research-2026-11.md.
 */

const WHAT_WE_DO = { name: 'What we do', path: '/what-we-do' }
const APPLIED_AI = { name: 'Applied AI', path: '/what-we-do/applied-ai' }

export const pages: ContentPage[] = [
  {
    path: '/what-we-do/applied-ai/local-ai',
    meta: {
      title: 'Local AI: private LLMs on your own servers | YatiSphere',
      description:
        'Run open-weight LLMs and AI agents on your own servers or private cloud, so client data never leaves. Sized, tested and secured for banks and law firms.',
    },
    hero: {
      kicker: 'APPLIED AI / LOCAL AI',
      h1: 'Local AI, on infrastructure you control',
      subhead:
        'We run open-weight models and AI agents on your own servers or private cloud, so sensitive data never goes to a third-party AI service.',
    },
    parents: [WHAT_WE_DO, APPLIED_AI],
    name: 'Local AI',
    contactInterest: 'Applied AI',
    contact: {
      title: 'Data that cannot leave the building?',
      body: 'Tell us what it is and what you want AI to do with it. We will say whether local AI is the right answer.',
    },
    blocks: [
      {
        type: 'statement',
        text:
          'Local AI means the model, the data and every prompt stay on infrastructure you own or control: your data center, your private cloud account or a single server in your office. Open-weight models are now good enough for most document, search and drafting work, so for privileged files, customer records and regulated data, local is a real option rather than a compromise. It is not always the right one. We tell you when a cloud model in your own account does the job better or cheaper.',
      },
      {
        type: 'localRouting',
        title: 'Sensitive work stays in. The rest can go out.',
        lede: 'Most firms do not need every request to run locally. A routing gateway keeps privileged and regulated work on your servers and lets the rest use the strongest model available, under rules you set.',
      },
      {
        type: 'useCases',
        kicker: 'Use cases',
        title: 'Where local AI pays for itself',
        lede: 'Each of these involves data that clients, regulators or contracts keep in-house, and work that eats senior hours today. The model drafts and checks; a person decides.',
        items: [
          {
            sector: 'law',
            title: 'Privileged document review',
            problem: 'We have tens of thousands of documents for an investigation, and the client will not let them go to an outside AI service.',
            local: 'First-pass relevance ranking against the issues you define, possible-privilege flags with the passage and the reason, and short summaries by custodian.',
            why: 'Privileged and confidential client material, often under outside-counsel guidelines that restrict third-party AI tools.',
            decides: 'Lawyers make every relevance and privilege call. The model proposes and explains; it never decides.',
            value: 'Reviewers start from a ranked, pre-tagged set instead of a raw pile, and quality checks go where model and reviewer disagree.',
          },
          {
            sector: 'law',
            title: 'Contract review against your playbook',
            problem: 'Every NDA and services agreement is checked by hand against positions we agreed years ago.',
            local: 'Clause extraction, comparison with your playbook positions, and suggested redlines that cite the playbook rule behind each change.',
            why: 'Client contracts and your fallback positions are confidential, and the playbook itself is know-how you do not want leaving the firm.',
            decides: 'The lawyer accepts, edits or rejects each suggestion. Nothing goes to the other side without them.',
            value: 'Routine agreements turned around faster and more consistently, with senior time kept for the clauses that genuinely differ.',
            href: '/what-we-do/industries/legal-professional-services',
            linkLabel: 'AI for law firms',
          },
          {
            sector: 'banking',
            title: 'AML alert triage and case write-ups',
            problem: 'Most alerts turn out to be nothing, but each one still needs an investigator to pull data from five screens and write it up.',
            local: 'An agent gathers the transactions, KYC file and earlier alerts into one case summary, drafts the disposition narrative with every figure linked to its source, and flags what is missing.',
            why: 'Customer and transaction data under banking secrecy and residency rules, and suspicious-activity work that is legally confidential in most jurisdictions.',
            decides: 'The investigator closes or escalates, and decides whether anything is reported. The agent never files.',
            value: 'Investigators spend their time on judgment instead of copying data between systems, and every write-up follows the same structure.',
            href: '/what-we-do/industries/financial-services',
            linkLabel: 'AI for financial services',
          },
          {
            sector: 'banking',
            title: 'Credit memo drafting',
            problem: 'Our analysts spend days turning financial statements and borrower files into a credit memo in our house format.',
            local: 'Figures read from the statements, ratios calculated by code rather than by the model, and memo sections drafted in your template with each statement cited and policy exceptions highlighted.',
            why: 'Non-public borrower financials and your credit policy. Lenders rarely want either in a third-party AI service.',
            decides: 'The analyst owns the memo and the credit committee owns the decision. The draft is a starting point.',
            value: 'A consistent first draft early in the process, so analysts spend their time on the risk rather than the formatting.',
          },
          {
            sector: 'saas',
            title: 'AI features your enterprise customers can approve',
            problem: 'Our biggest prospects want the AI features, but their security review rules out sending their data to a third-party AI API.',
            local: 'The same AI features, served by an open-weight model inside the customer’s own cloud account or your single-tenant deployment, behind the API your product already calls.',
            why: 'The customer’s data never leaves their environment, which is often the only answer their security team will accept.',
            decides: 'The customer controls where it runs, what it can see and how long anything is kept.',
            value: 'Deals that were stuck in security review can move, without building and maintaining a second product.',
            href: '/what-we-do/industries/software-saas',
            linkLabel: 'AI for SaaS companies',
          },
          {
            sector: 'saas',
            title: 'Coding assistant on code that cannot leave',
            problem: 'Our code is our IP, some of it belongs to clients, and our contracts say it stays in-house.',
            local: 'Code completion, review and agent-style coding against a model on your own servers, connected to your repositories, with usage logged.',
            why: 'Source code, client code under contract, and the secrets that turn up in history all stay on your network.',
            decides: 'Engineers review and merge. AI-written code goes through the same review and tests as any other change.',
            value: 'Teams get AI-assisted engineering without an exception to their client contracts or security policy.',
            href: '/what-we-do/applied-ai/ai-assisted-engineering',
            linkLabel: 'AI-assisted engineering',
          },
        ],
      },
      {
        type: 'example',
        kicker: 'Worked example',
        title: 'One privileged document review, run locally',
        afterLabel: 'With local AI',
        lede: 'An illustrative internal investigation at a law firm, with the review run on the firm’s own server.',
        rows: [
          {
            step: 'Collect',
            today: 'Documents loaded into the review platform, with its AI features switched off because the client has not approved an outside AI service.',
            after: 'Documents processed on the firm’s own server. The model has no route to the internet, so the client’s terms are met by design.',
          },
          {
            step: 'First pass',
            today: 'Junior reviewers read every document, usually in date order.',
            after: 'The model ranks every document against the issues the team defines and tags each with its reasons, so reviewers start with the most relevant.',
          },
          {
            step: 'Privilege',
            today: 'Reviewers look for lawyers’ names and legal advice as they read.',
            after: 'Possible privilege flagged with the passage and the reason, for a lawyer to confirm or reject.',
          },
          {
            step: 'Quality check',
            today: 'A senior associate re-reviews a random sample.',
            after: 'Checks start with the documents where the model and the reviewer disagreed.',
          },
          {
            step: 'Record',
            today: 'Decisions sit in the platform; how each call was reached is in reviewers’ heads.',
            after: 'Every model suggestion and every lawyer decision logged on the firm’s systems, ready if the review is ever challenged.',
          },
        ],
        note: 'Before any lawyer relies on it, accuracy is measured on a sample of documents your own team has already reviewed. Names and details in this example are illustrative.',
      },
      {
        type: 'cards',
        title: 'What we build',
        columns: 2,
        cards: [
          {
            title: 'Private LLM serving',
            body: 'Open-weight models served inside your network behind an OpenAI-compatible endpoint, with access control, logging and no outbound calls.',
          },
          {
            title: 'Local document search and Q&A',
            body: 'Cited answers from your own files, with documents, embeddings and the search index kept on your hardware and limited to what each user can already open.',
          },
          {
            title: 'Local AI agents',
            body: 'Agents for intake, KYC and conflict checks that run against a local model, with a person approving what matters and every step logged.',
            href: '/what-we-do/applied-ai/agentic-automation',
          },
          {
            title: 'Hybrid routing by sensitivity',
            body: 'One gateway that sends confidential work to the local model and everything else to a frontier model in your own cloud account, under rules your compliance team sets.',
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Is local AI right for you?',
        lede: 'It pays off in a few clear situations. Outside them, a cloud model in your own account is usually simpler and cheaper.',
        items: [
          {
            title: 'Yes: the data cannot go to a third party',
            body: 'Privileged legal files, customer data your contracts keep in-house, or client terms that rule out outside AI services. Keeping the model inside your perimeter settles the question by design instead of by vendor promise.',
          },
          {
            title: 'Yes: you need to run disconnected',
            body: 'Air-gapped sites and networks with no internet route. Local models are the only option there, and the major platforms now support it, for example Foundry Local on Azure Local for Microsoft estates.',
          },
          {
            title: 'Yes: steady, high volume',
            body: 'Fixed hardware cost against per-token pricing only wins when the load is large and constant, such as overnight batch extraction across millions of pages. Published break-even estimates vary widely, so we model it on your own volumes.',
          },
          {
            title: 'Probably not: you need the strongest reasoning',
            body: 'The best closed models still lead on the hardest reasoning and agentic coding tasks. If accuracy on complex judgment is what matters, a frontier model in your own cloud account may be the better trade.',
          },
          {
            title: 'Probably not: low volume and no one to run it',
            body: 'GPUs need patching, monitoring and capacity planning. For a handful of users, a managed model with zero data retention in your cloud region usually costs less in total.',
          },
        ],
      },
      {
        type: 'tabs',
        title: 'Where it can run',
        tabs: [
          {
            label: 'One server',
            description: 'A single GPU server in your office or data center for one team or one process.',
            bullets: [
              'One 80–96 GB GPU runs 27–31B models and gpt-oss-120b',
              'Fastest route to a working pilot on real data',
              'No cloud dependency at all',
            ],
          },
          {
            label: 'Your data center',
            description: 'A multi-GPU cluster for several teams, larger models and agent workloads.',
            bullets: [
              'Needed for 100B+ mixture-of-experts models',
              'Production serving on vLLM or SGLang',
              'Integrated with your identity, logging and monitoring',
            ],
          },
          {
            label: 'Your private cloud',
            description: 'GPUs in your own AWS, Azure or Google Cloud account, in the region you choose.',
            bullets: [
              'No hardware to buy, scales with demand',
              'Network-isolated, with no public endpoint',
              'Weights and data stay in your account',
            ],
          },
          {
            label: 'Fully disconnected',
            description: 'Air-gapped environments with no route to the internet.',
            bullets: [
              'Models, updates and evaluation carried in through your change process',
              'Foundry Local on Azure Local for Microsoft estates',
              'Audit logs kept on site',
            ],
          },
          {
            label: 'Hybrid',
            description: 'Local for sensitive work, a frontier model in your cloud account for the rest.',
            bullets: [
              'Routing rules by data class, matter or client',
              'One interface for users, two back ends',
              'Every routing decision logged',
            ],
          },
        ],
      },
      {
        type: 'cards',
        title: 'Open-weight models we evaluate (November 2026)',
        lede: 'We shortlist two or three for your task and test them on your own documents against a cloud baseline. License and origin are checked against your procurement policy first; some organizations restrict models by publisher or country.',
        columns: 2,
        cards: [
          {
            title: 'Gemma 4 (Google DeepMind)',
            body: 'Apache 2.0. Sizes from phone-class models to a 26B mixture-of-experts and a 31B dense model with up to 256K context. The 31B fits unquantized on one 80 GB GPU.',
          },
          {
            title: 'Qwen3.8-27B (Alibaba)',
            body: 'Apache 2.0. A dense 27B model with image input and 262K context, strong for its size on coding and office tasks. Larger Qwen releases use their own license, so we check each one.',
          },
          {
            title: 'gpt-oss-120b and 20b (OpenAI)',
            body: 'Apache 2.0. Reasoning models built for tool use. The 120b runs on a single 80 GB GPU; the 20b on much smaller hardware.',
          },
          {
            title: 'Mistral Small 4 (Mistral AI)',
            body: 'Apache 2.0. 119B parameters with about 6.5B active per token, 256K context, reasoning and image input in one model. Needs a multi-GPU server.',
          },
          {
            title: 'DeepSeek V4 Flash (DeepSeek)',
            body: 'MIT license. 284B parameters with 13B active and a 1M-token context, aimed at agent work. Needs a multi-GPU server.',
          },
          {
            title: 'How we choose',
            body: 'We check license and publisher against your procurement policy, shortlist two or three models and test them on your own documents against a cloud baseline, starting from any AI stack you already run.',
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Local is not automatically secure',
        lede: 'A model on your network is one more service to protect. We build these controls in from the start.',
        items: [
          {
            title: 'Network isolation',
            body: 'The model endpoint is not reachable from the internet, outbound traffic is blocked, and only named applications can call it.',
          },
          {
            title: 'Access that follows your existing permissions',
            body: 'Search and agents only retrieve documents the person asking can already open, using your directory groups and matter or account permissions.',
          },
          {
            title: 'Model supply chain',
            body: 'Weights come from the publisher’s official repository, are checked against published hashes, and use safe formats such as safetensors. Each version is recorded so you know exactly what ran.',
          },
          {
            title: 'Logging and retention',
            body: 'Prompts, sources and outputs are logged to the extent your policy allows, kept on your systems and covered by your existing retention rules.',
          },
          {
            title: 'Prompt injection',
            body: 'Running locally does not stop a malicious document from instructing an agent. Agents get only the tools they need, and actions that change records wait for a person.',
          },
        ],
      },
      {
        type: 'steps',
        title: 'How a local AI project runs',
        steps: [
          { title: 'Classify', body: 'We map which data and tasks must stay local and which can use a cloud model, and agree the rules with your compliance team.' },
          { title: 'Bake-off', body: 'Two or three open-weight models tested on your own documents and questions, against a cloud baseline, with an accuracy target you set.' },
          { title: 'Size and cost', body: 'Hardware or private-cloud sizing for your real volumes, and a three-year cost compared with the cloud option.' },
          { title: 'Build and harden', body: 'Serving, search, agents and the controls above, integrated with your identity, logging and monitoring.' },
          { title: 'Run', body: 'We operate it, including model updates and re-testing, or hand over to your team with a run guide.' },
        ],
      },
      {
        type: 'list',
        title: 'What you get',
        items: [
          'A data classification showing what runs locally, what may use a cloud model and why.',
          'Bake-off results on your own data, including where the local model falls short.',
          'A sizing and three-year cost comparison you can take to finance.',
          'A working local service with no outbound data path, plus security controls and audit logs your risk team can review.',
          'A run guide covering patching, model updates and re-evaluation.',
        ],
      },
      {
        type: 'faq',
        title: 'Common questions',
        items: [
          {
            q: 'What is local AI?',
            a: 'Running an AI model on hardware you own or control, such as your own servers or a private cloud account, instead of sending data to a third-party AI service. The model weights, your data and every prompt stay inside your environment.',
          },
          {
            q: 'Is a local LLM as good as ChatGPT or Claude?',
            a: 'For most document, search and drafting work, current open-weight models are close enough. On the hardest reasoning and agentic coding tasks the best closed models still lead. We test both on your own data before you decide.',
          },
          {
            q: 'Can Claude run locally?',
            a: 'No. Claude is not released as open weights. You can use it through Amazon Bedrock, Google Cloud Vertex AI or Microsoft Foundry under your own cloud account and region, and route only the most sensitive work to a local model.',
          },
          {
            q: 'What hardware do we need?',
            a: 'It depends on the model and the number of users. One server with an 80–96 GB GPU runs 27–31B models for a team. Larger mixture-of-experts models need a multi-GPU server. Small desktop AI boxes are good for building and testing, but slow for many users at once.',
          },
          {
            q: 'Is local AI cheaper than an API?',
            a: 'Only at steady, high volume. Below that, per-token pricing usually wins once you count hardware, power and the people who run it. Most clients choose local AI for data control, not cost, and we model both on your volumes.',
          },
          {
            q: 'Does India’s DPDP law require local AI?',
            a: 'Not in general. The DPDP Rules, notified in November 2025, allow cross-border transfers unless the government restricts them, and most obligations apply from May 2027. Your sector regulator, your contracts or your clients may still require data to stay in-house. This is not legal advice.',
          },
          {
            q: 'Do you train models on our data?',
            a: 'No, unless you ask us to in writing for a model dedicated to you. Most local AI work needs no training: the model answers from your documents at the time of the question.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related',
        links: [
          {
            label: 'Agentic automation',
            href: '/what-we-do/applied-ai/agentic-automation',
            descriptor: 'AI agents for intake, KYC and claims, with approval gates.',
          },
          {
            label: 'AI governance',
            href: '/what-we-do/applied-ai/ai-governance',
            descriptor: 'Data boundaries, audit trails and policy controls.',
          },
          {
            label: 'Legal and professional services',
            href: '/what-we-do/industries/legal-professional-services',
            descriptor: 'Intake and conflict checks that keep privileged data in-house.',
          },
          {
            label: 'Financial services',
            href: '/what-we-do/industries/financial-services',
            descriptor: 'KYC and onboarding with an examiner-ready trail.',
          },
        ],
      },
      { type: 'inFocus', title: 'Further reading', services: ['applied-ai', 'local-ai'] },
    ],
  },
]
