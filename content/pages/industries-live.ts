import type { ContentPage } from './types'

/**
 * Industries hub and the three published industry pages (rewrite,
 * 2026-10-19). Every section delivers what its heading says, in full.
 *
 * Ground rules for this copy:
 * - Regimes are rules our clients answer to and that we design for, never
 *   approvals or certifications we hold.
 * - No client names, logos or metrics: none can be published yet.
 * - Clouds are AWS and Microsoft Azure; models are chosen per use case.
 */

const parents = [
  { name: 'What we do', path: '/what-we-do' },
  { name: 'Industries', path: '/what-we-do/industries' },
]

const BLUEPRINT = { label: 'Solution Blueprint', href: '/blueprint', descriptor: 'Two to four weeks to a plan you can trust' }

export const pages: ContentPage[] = [
  // ---------------------------------------------------------------------------
  // Hub
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries',
    name: 'Industries',
    parents: [{ name: 'What we do', path: '/what-we-do' }],
    hub: 'industries',
    meta: {
      title: 'Industries: legal, financial services, SaaS | YatiSphere',
      description:
        'IT services and AI for financial services, legal and professional services, and software and SaaS companies, where systems face scrutiny.',
    },
    hero: {
      kicker: 'Industries',
      h1: 'Industries: financial services, legal and SaaS',
      subhead:
        'We focus on three sectors where a system has to answer to a regulator, a client or an enterprise buyer, as well as to its users.',
    },
    blocks: [],
  },

  // ---------------------------------------------------------------------------
  // Financial services
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/financial-services',
    name: 'Financial services',
    parents,
    contactInterest: 'Financial services',
    meta: {
      title: 'AI agents for KYC and onboarding at banks | YatiSphere',
      description:
        'AI agents for KYC, onboarding and claims at banks, insurers and fintechs: the agent does the checks, your team approves, and every step is examiner-ready.',
    },
    hero: {
      kicker: 'Industries · Financial services',
      h1: 'AI agents for KYC, onboarding and claims, with an examiner-ready trail',
      subhead:
        'Agents gather documents, screen against sanctions and PEP lists and draft the case. Your analysts approve. Every check is logged for the examiner, on core systems we modernize where they hold the work back.',
    },
    blocks: [],
    industry: {
      slug: 'financial-services',
      forWho: ['Retail and commercial banks', 'Insurers', 'Wealth and asset managers', 'Payments and fintech', 'Brokers and market infrastructure'],
      context: {
        title: 'Why financial services IT is different',
        paragraphs: [
          'In financial services the architecture answers to a regulator as well as a customer. Core systems cannot be destabilized, reporting has to be reproducible on request, and any model that touches credit, risk or eligibility has to be explainable.',
          'So we change systems in reversible steps, capture lineage and audit records as part of the build, and put a person in charge of every consequential decision. Speed matters, but only on systems that can show their working.',
        ],
      },
      build: [
        {
          title: 'Onboarding and KYC automation',
          problem: 'Client onboarding takes weeks, and nobody can say where an application is stuck.',
          body: 'Document capture, verification, screening and case handling in one flow, with a live view of every application. Automation extracts and triages; an analyst makes the decision.',
          bullets: [
            'Document understanding for onboarding packs',
            'Sanctions, PEP and adverse-media triage with human adjudication',
            'Explicit, documented limits on automated decisioning',
          ],
          outcome: 'Faster onboarding, with every decision explainable to an auditor.',
          href: '/what-we-do/applied-ai/agentic-automation',
          linkLabel: 'Agentic automation',
        },
        {
          title: 'Post-trade and settlement systems',
          problem: 'Breaks surface late and land with the wrong team.',
          body: 'Reconciliation, break detection and exception workflow, built so a break is caught early and routed to whoever can resolve it before cut-off. Led by engineers who have run post-trade settlement platforms at a global investment bank.',
          bullets: [
            'Reconciliation across custodians and counterparties',
            'Break detection with routed, owned exception queues',
            'An audit record of every break, action and resolution',
          ],
          outcome: 'Fewer late breaks, and a clear owner for each one.',
          href: '/what-we-do/services/software-engineering',
          linkLabel: 'Software engineering',
        },
        {
          title: 'AML monitoring and sanctions screening',
          problem: 'Alert volumes keep rising, and investigators cannot keep up.',
          body: 'Monitoring and screening workflows where alerts are prioritized, investigated and closed with a record a reviewer can follow. Systems flag; people decide.',
          bullets: [
            'Alert triage and prioritization',
            'Case management with a full audit trail',
            'Human review of potential matches before any action',
          ],
          outcome: 'Investigators spend their time on the alerts that matter.',
          href: '/what-we-do/services/data-analytics',
          linkLabel: 'Data and analytics',
        },
        {
          title: 'Core modernization and regulatory data',
          problem: 'The core system is decades old, and every regulatory report is rebuilt by hand.',
          body: 'API and event layers that let modern channels work with long-lived core systems without a rewrite, and reporting data with lineage, so any submission can be regenerated from source on request. Built on AWS or Microsoft Azure, in your accounts and your region.',
          bullets: [
            'Stable interfaces in front, systems of record behind',
            'Lineage captured as part of the pipeline',
            'Infrastructure as code with segregation of duties',
          ],
          outcome: 'New products ship without touching the core, and reports can be reproduced on request.',
          href: '/what-we-do/services/modernization',
          linkLabel: 'Application modernization',
        },
      ],
      standards: {
        lede: 'These are the rules your organization answers to. We are not approved or authorized by any regulator, and we do not hold certifications on your behalf. We design and document controls so you can evidence them.',
        regions: [
          { region: 'United States', bodies: 'SEC, FINRA, state regulators' },
          { region: 'United Kingdom', bodies: 'FCA, PRA' },
          { region: 'European Union', bodies: 'DORA, EBA guidelines, EU AI Act' },
          { region: 'UAE', bodies: 'CBUAE, DFSA, ADGM FSRA' },
          { region: 'India', bodies: 'RBI, SEBI, DPDP Act' },
        ],
        items: [
          {
            title: 'Regulatory reporting',
            body: 'Each regime sets what must be reported, in what form and on what cycle. We design data platforms so submissions come from traceable sources and can be reproduced on request.',
          },
          {
            title: 'Operational resilience',
            body: 'DORA and equivalent rules expect you to know your critical services, test recovery and manage third-party risk. We design for failover, document dependencies and build the evidence into operations.',
          },
          {
            title: 'PCI DSS for cardholder data',
            body: 'Where card data is in scope, we architect segmentation, key handling and logging so your organization can evidence the controls. The certification stays yours.',
          },
          {
            title: 'Audit trail and data residency',
            body: 'Regulated workloads need a defensible record of access and change, and a clear answer on where data sits. We settle both at design time; retrofitting them a month before an inspection is expensive and rarely convincing.',
          },
          {
            title: 'Model governance for AI in decisions',
            body: 'Any model that influences credit, pricing or risk needs a documented purpose, data provenance, validation, monitoring and a route to challenge a decision. We build those controls alongside the model, from the first sprint. We do not use client data to train or fine-tune models, unless you ask us to in writing for your own dedicated model.',
          },
        ],
      },
      start: {
        lede: 'Most financial services work starts with a Solution Blueprint: two to four weeks on one named problem.',
        steps: [
          { title: 'Map the process', body: 'We walk the journey end to end, for example from application to account opened, and find where time and risk build up.' },
          { title: 'Map the controls', body: 'We record the regulatory and audit expectations that apply, and where the evidence for each will come from.' },
          { title: 'Agree the plan', body: 'You get the target design, a phased delivery plan and the risks, before any build begins.' },
        ],
      },
      related: [
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Controls for models that touch decisions' },
        { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access architecture and audit evidence' },
        { label: 'Cloud', href: '/what-we-do/cloud', descriptor: 'AWS and Microsoft Azure, in your accounts' },
        BLUEPRINT,
      ],
      cta: {
        title: 'Facing a regulator, an audit or a backlog?',
        body: 'Tell us the process and the deadline.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Legal & professional services
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/legal-professional-services',
    name: 'Legal & professional services',
    parents,
    contactInterest: 'Legal & professional services',
    meta: {
      title: 'Law firm intake and conflict check automation | YatiSphere',
      description:
        'AI agents for client intake, conflict checks and lateral hire screening at US law firms, with a partner approving every clearance and a full audit trail.',
    },
    hero: {
      kicker: 'Industries · Legal & professional services',
      h1: 'AI agents for law firm intake and conflict checks',
      subhead:
        'Intake, conflict search and the practice-system plumbing behind new matters for US law firms, plus AI on client documents once your general counsel has agreed what it may see.',
    },
    blocks: [],
    // Pilot of the less-templated industry page (2026-11-03): a worked
    // example, uneven further work and a point of view on AI, in place of
    // four identical problem/solution/bullets/outcome cards.
    industry: {
      slug: 'legal-professional-services',
      forWho: ['Law firms', 'Corporate legal departments', 'Accounting and tax firms', 'Consulting and advisory firms'],
      context: {
        title: 'Where the time goes',
        paragraphs: [
          'In most firms a new matter still starts as an email or a Word form. Someone in new business intake re-keys the parties into the practice management system, runs a name search, exports the hits to a spreadsheet and chases partners for sign-off. Each step makes sense on its own. Together they turn a same-day request into several days, and leave the reasoning behind each clearance spread across inboxes.',
          'The fix is rarely another conflicts product; most firms already own one. The work is in the data that feeds it: parties captured once and properly structured, corporate groups and former names resolved, and every decision recorded where a partner, an auditor or a client can find it later.',
        ],
      },
      example: {
        name: 'Intake and conflict checks',
        title: 'One new matter, step by step',
        lede: 'An illustrative new matter: a partner is asked to represent Acme Holdings in an acquisition, with Bluewater Logistics on the other side. The names are invented. The problems are common.',
        rows: [
          {
            step: 'The request',
            today: 'An email to new business intake. The client name is in the subject line and the other side is mentioned halfway down the body.',
            after: 'An intake form that records the client, related entities, the counterparty and key individuals as separate parties, each with its source.',
          },
          {
            step: 'The search',
            today: 'A search for "Acme Holdings" misses "ACME Holdings, Inc." in the time and billing system, and Acme Freight LLC, a subsidiary the firm was adverse to last year.',
            after: 'Name matching that handles spelling, entity suffixes and former names, extends the search to the corporate family using company data, and screens the parties against the OFAC sanctions lists.',
          },
          {
            step: 'The review',
            today: 'The hit list goes into a spreadsheet, is emailed to three partners and waits in their inboxes.',
            after: 'Each hit goes to the partner who owns the related matter, inside the system, with the reason it matched. The decision and the note are stored with the search.',
          },
          {
            step: 'Opening the matter',
            today: 'The matter is set up in the practice management system. A day later someone creates the document workspace by hand, and the ethical screen is added after that.',
            after: 'Approval opens the matter and its workspace together, with any ethical screen in place from the first document.',
          },
          {
            step: 'Six months later',
            today: 'A client asks how a conflict was cleared, and someone goes looking through old email.',
            after: 'The record shows who searched, what matched, who decided and why.',
          },
        ],
        note: 'We measure it the way the conflicts department would: hours from request to cleared matter, how many planted conflicts a test search catches, and how long hits wait for a partner. We connect to what the firm already runs, such as Intapp, Aderant, Elite 3E, iManage or NetDocuments, through their APIs where they exist, and we do not resell any of them.',
        href: '/what-we-do/applied-ai/agentic-automation',
        linkLabel: 'How we automate document-heavy workflows',
      },
      more: {
        title: 'Other work we take on for firms',
        items: [
          {
            title: 'Lateral hire conflicts',
            body: 'An incoming partner brings a list of prior matters and clients, usually as a spreadsheet. We turn it into searchable parties, run it against the firm’s records before the start date, and set up the screens Rule 1.10 calls for where a conflict can be cured by screening.',
          },
          {
            title: 'Getting practice systems to agree',
            body: 'Client and matter data that matches across practice management, documents, billing and CRM, with one system named as the owner of each field. Unglamorous, and usually the reason the more visible projects stall.',
            href: '/what-we-do/engineering-data',
            linkLabel: 'Software and data',
          },
          {
            title: 'Matter budgets partners actually see',
            body: 'Budget against time recorded, by matter and phase, refreshed daily. The responsible partner hears about it when a matter passes an agreed threshold. In most firms that only becomes visible once the bill is written down.',
          },
        ],
      },
      opinion: {
        name: 'AI on client documents',
        title: 'AI on client documents',
        paragraphs: [
          'The first question a general counsel or risk partner asks about AI is rarely which model to use. It is whether the tool can see a matter the user is walled off from, and whether anything typed into it leaves the firm. We settle those two in the design, before anyone writes a prompt.',
          'In practice that means retrieval limited to the matters a user can already open, logs of every prompt and answer kept under the firm’s retention policy, and a lawyer reviewing anything that goes to a client. We do not use client data to train or fine-tune models. ABA Formal Opinion 512 (July 2024) places the competence and confidentiality duties for generative AI on the lawyer, so the controls have to be ones a partner can explain to a client.',
          'Good first uses are narrow: a summary of a long disclosure bundle with page references, key clauses pulled from a set of leases, or a first-draft conflict memo built from the search results. Each one ends with a lawyer, and each is measured against a set of real examples before it goes live.',
        ],
        href: '/what-we-do/applied-ai/ai-governance',
        linkLabel: 'How we set AI boundaries',
      },
      standards: {
        lede: 'These are your firm’s duties under the ABA Model Rules as your state has adopted them. We are not your ethics counsel; our job is to make sure the systems we build let you evidence the duties.',
        items: [
          {
            title: 'Confidentiality (Rule 1.6)',
            body: 'Rule 1.6(c) asks for reasonable efforts to prevent unauthorized access to client information. In a system that means access follows the matter team and its ethical screens, everywhere the data goes, search and AI tools included.',
          },
          {
            title: 'Conflicts (Rules 1.7 to 1.10)',
            body: 'Current clients, former clients and conflicts imputed across the firm. The clearance record in the example above is built to show how each one was identified and resolved.',
          },
          {
            title: 'Client screening and sanctions',
            body: 'OFAC sanctions apply to every US firm, and ABA Formal Opinion 491 expects lawyers to ask questions when a transaction looks wrong. Screening at intake, with the result stored on the matter, covers both.',
          },
          {
            title: 'Outside counsel guidelines',
            body: 'Corporate clients increasingly send security questionnaires and audit rights with their guidelines. A system that records access and clearance decisions makes those answers quicker and easier to stand behind.',
          },
          {
            title: 'Retention and breach notification',
            body: 'File retention rules vary by state, and every state has a data breach notification law. Retention periods attached to the matter, and logs of who accessed what, are what you need when either comes up.',
          },
        ],
      },
      start: {
        lede: 'Most firms start with a Blueprint on intake and conflicts: two to four weeks, a fixed fee, and a design your risk committee can review.',
        steps: [
          { title: 'Follow one matter', body: 'We trace a recent matter from first email to open workspace, with the people who handled it.' },
          { title: 'List the duties', body: 'The confidentiality, conflict and retention rules that apply, and where the evidence for each will come from.' },
          { title: 'Agree the plan', body: 'Target design, phased plan and risks, before anything is built.' },
        ],
      },
      related: [
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Scope, logging and review for AI tools' },
        { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access controls and evidence for client audits' },
        { label: 'Trust center', href: '/who-we-are/trust', descriptor: 'How we handle your data' },
        BLUEPRINT,
      ],
      cta: {
        title: 'How long does a new matter take to open at your firm?',
        body: 'Tell us roughly, and where it stalls.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Software & SaaS
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/software-saas',
    name: 'Software & SaaS',
    parents,
    contactInterest: 'Software & SaaS',
    meta: {
      title: 'AI agents for SaaS companies | YatiSphere',
      description:
        'We build AI agents into SaaS products and operations, with evaluation, human approval and audit evidence your enterprise customers will review.',
    },
    hero: {
      kicker: 'Industries · Software & SaaS',
      h1: 'AI agents for SaaS, in your product and in your operations',
      subhead:
        'We build agentic features your customers’ security teams can approve, and put agents to work on support, onboarding and engineering, with a person approving the actions that matter.',
    },
    blocks: [],
    industry: {
      slug: 'software-saas',
      forWho: ['B2B SaaS companies', 'Product teams adding AI agents', 'Scale-ups selling to enterprises', 'Platform and engineering teams'],
      context: {
        title: 'Why agents in SaaS are different',
        paragraphs: [
          'Your customers no longer want another chat box. They want AI that does the work inside your product: updates the record, files the ticket, reconciles the account. The moment an agent can act, their security team asks new questions. What can it do, on whose authority, with which tenant’s data, and how is it stopped when it goes wrong?',
          'The answers are design decisions, not policy documents. Each agent gets a defined job and a small set of tools with permissions scoped to the tenant and the user. Consequential actions wait for a person. It is tested against agreed cases before launch and after every change, and every action lands in an audit log your customers can export.',
        ],
      },
      example: {
        name: 'Agentic support escalation',
        title: 'One support escalation, handed off',
        lede: 'An illustrative ticket at a B2B SaaS company: a customer, Brightline Analytics, reports that last month’s invoice double-charged three seats. The names are invented. The pattern is common.',
        rows: [
          {
            step: 'The ticket',
            today: 'A support engineer reads the ticket, asks the customer for the invoice number and waits a day for the reply.',
            after: 'The agent reads the ticket, finds the account and the invoice itself, and confirms the details back to the customer in minutes.',
          },
          {
            step: 'The investigation',
            today: 'Billing, product logs and the CRM are checked by hand in three tools, and the findings sit in a private note.',
            after: 'The agent checks billing, seat history and recent changes through scoped, read-only tools, and writes up what it found with the evidence attached.',
          },
          {
            step: 'The fix',
            today: 'The engineer asks finance for a credit note and the ticket goes quiet for two days.',
            after: 'The agent drafts the credit and the customer reply. Both wait for a person: refunds and account changes never run without approval.',
          },
          {
            step: 'The approval',
            today: 'A finance lead approves in chat. Nobody records why.',
            after: 'The billing owner approves or edits in one place, with the agent’s evidence in front of them. The decision and the reason are stored with the ticket.',
          },
          {
            step: 'The security review',
            today: 'An enterprise prospect asks how AI touches their data. The answer is assembled from memory.',
            after: 'The agent’s tools, permissions, data boundary, approval points and audit log are already documented, so the questionnaire answers itself.',
          },
        ],
        note: 'Illustrative. Agents can only use the tools and permissions they are given; consequential actions are approved by a named person.',
        href: '/what-we-do/applied-ai/agentic-automation',
        linkLabel: 'How we build agents',
      },
      build: [
        {
          title: 'Agentic features in your product',
          problem: 'Customers want AI that does the work in our product, and their security teams want to know exactly what it can do.',
          body: 'Agents with a defined job, tools exposed through your APIs or MCP servers, permissions scoped to the tenant and the user, approval steps and undo for consequential actions, and an evaluation harness in place before launch.',
          bullets: [
            'Tool and permission design, per tenant and per user',
            'MCP servers and APIs your agents and your customers’ agents can call',
            'Approval steps, undo and an exportable audit log',
          ],
          outcome: 'Agent features enterprise customers are comfortable switching on.',
          href: '/what-we-do/applied-ai/agentic-automation',
          linkLabel: 'Agentic automation',
        },
        {
          title: 'Agents for your own operations',
          problem: 'Support, onboarding and billing operations grow with every customer we add.',
          body: 'Agents for ticket triage and investigation, customer onboarding and configuration, and billing and renewal operations, working in your existing tools, with your team handling the exceptions and approving what matters.',
          bullets: [
            'Support triage, investigation and drafted replies',
            'Onboarding and configuration checklists run by an agent',
            'Billing and renewal tasks with a named approver',
          ],
          outcome: 'Repetitive work moves to agents; your team handles the judgment calls.',
          href: '/what-we-do/applied-ai',
          linkLabel: 'Applied AI',
        },
        {
          title: 'AI-assisted engineering',
          problem: 'Our engineers use coding assistants, but nobody can say what it is doing to quality or security.',
          body: 'Rollout of Claude Code and other coding assistants with guardrails: what the assistant may touch, review rules for AI-written code, secrets and dependency checks in the pipeline, and measures that show the effect on delivery.',
          bullets: [
            'Usage policy and repository guardrails',
            'Review and test rules for AI-written changes',
            'Before-and-after delivery measures',
          ],
          outcome: 'Faster delivery you can show to your board and your auditor.',
          href: '/what-we-do/applied-ai/ai-assisted-engineering',
          linkLabel: 'AI-assisted engineering',
        },
        {
          title: 'Security reviews and SOC 2 evidence, AI included',
          problem: 'Enterprise deals stall at the security questionnaire, and now it has an AI section.',
          body: 'Control design, logging and evidence mapped to the Trust Services Criteria or ISO/IEC 27001 Annex A, with the AI parts documented the same way: data boundary, providers, agent permissions, evaluation results and approval records.',
          bullets: [
            'Evidence generated by the pipeline on every release',
            'AI data boundary and provider exposure documented',
            'Answers for CAIQ, SIG and custom questionnaires',
          ],
          outcome: 'Security reviews, AI questions included, stop blocking deals.',
          href: '/what-we-do/services/security-compliance',
          linkLabel: 'Security and compliance',
        },
        {
          title: 'The platform the agents run on',
          problem: 'Agents are only as safe as the platform, the data and the tenant isolation under them.',
          body: 'Multi-tenant architecture, data platforms and modernization on AWS, Microsoft Azure or Google Cloud, defined as code, with tenant isolation enforced at the data layer so an agent can never reach another customer’s records.',
          bullets: [
            'Tenancy model and data partitioning',
            'Decomposition without a feature freeze',
            'Cost attribution per tenant, including AI usage',
          ],
          outcome: 'A platform that can carry agents without new risk.',
          href: '/what-we-do/cloud',
          linkLabel: 'Cloud',
        },
      ],
      standards: {
        lede: 'These are the questions your buyers, auditors and regulators ask once AI can act in your product. We design the controls and generate the evidence. Certifications and obligations stay with your company; YatiSphere does not hold or issue them.',
        items: [
          {
            title: 'Agent permissions and authority',
            body: 'Reviewers ask what an agent can do and on whose authority. Each agent gets an explicit list of tools, permissions inherited from the user it acts for, limits per tenant, and named approval points for actions with financial, contractual or data consequences.',
          },
          {
            title: 'AI and customer data',
            body: 'Enterprise buyers ask where their data goes when an AI feature runs. We document the boundary and configure providers so customer data is not retained for training. We do not use client data to train or fine-tune models, unless you ask us to in writing for your own dedicated model.',
          },
          {
            title: 'Evaluation and monitoring',
            body: 'Agents are tested against representative cases with pass thresholds agreed before launch, re-run after every model, prompt or tool change, and monitored in production. We align the approach to the NIST AI RMF and ISO/IEC 42001 where your customers ask for them.',
          },
          {
            title: 'SOC 2 and ISO/IEC 27001',
            body: 'Both are assessed by an independent auditor or certification body. We provide readiness: control design, logging and evidence mapped to the Trust Services Criteria or Annex A, with AI features covered like any other part of the system.',
          },
          {
            title: 'Tenant isolation',
            body: 'How tenant data is partitioned is the first question a reviewer asks, and agents make it sharper. We enforce isolation at the data layer, so an agent acting for one customer cannot read or change another’s records.',
          },
          {
            title: 'Privacy and data protection',
            body: 'The GDPR and UK GDPR, US state privacy laws and India’s DPDP Act drive residency, retention, subject-rights and subprocessor commitments, including for AI providers. We design data flows and deletion paths so the commitments in your contracts are enforced by the platform.',
          },
        ],
      },
      start: {
        lede: 'Most software companies start with a Solution Blueprint: two to four weeks on one agent, in your product or in your operations.',
        steps: [
          { title: 'Pick one workflow', body: 'We choose the job with the clearest value: a feature customers are asking for, or an operations queue that grows with every customer.' },
          { title: 'Design the agent', body: 'Tools, permissions, approval points, evaluation cases and the data boundary, written down before anything is built.' },
          { title: 'Agree the plan', body: 'You get a phased build plan, the evidence each phase produces for security reviews, and the cost to run it.' },
        ],
      },
      related: [
        { label: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation', descriptor: 'Agents with approval points and audit trails' },
        { label: 'Claude practice', href: '/what-we-do/applied-ai/claude', descriptor: 'Claude, Claude Code and MCP integrations' },
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Evaluation, boundaries and review' },
        BLUEPRINT,
      ],
      cta: {
        title: 'An agent on your roadmap?',
        body: 'Tell us what it should do and who has to approve it.',
      },
    },
  },
]
