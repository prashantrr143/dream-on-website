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
      title: 'Industries we serve | YatiSphere',
      description:
        'IT services and governed AI for financial services, legal and professional services, and software and SaaS companies, where systems face scrutiny.',
    },
    hero: {
      kicker: 'Industries',
      h1: 'Built for work that faces scrutiny.',
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
      title: 'Financial services IT and governed AI | YatiSphere',
      description:
        'KYC and onboarding automation, post-trade systems, AML monitoring and core modernization for banks, insurers and fintechs, built for regulators.',
    },
    hero: {
      kicker: 'Industries · Financial services',
      h1: 'Regulator-ready platforms for financial services.',
      subhead:
        'We modernize core systems, automate onboarding and KYC, and run governed AI for banks, insurers, wealth managers and fintechs, so every decision can be explained.',
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
          body: 'API and event layers that let modern channels work with long-lived core systems without a rewrite, and reporting data with lineage, so a submission can be reproduced rather than reconstructed. Built on AWS or Microsoft Azure, in your accounts and your region.',
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
          { region: 'United Kingdom', bodies: 'FCA, PRA' },
          { region: 'European Union', bodies: 'DORA, EBA guidelines, EU AI Act' },
          { region: 'UAE', bodies: 'CBUAE, DFSA, ADGM FSRA' },
          { region: 'United States', bodies: 'SEC, FINRA, state regulators' },
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
            body: 'Regulated workloads need a defensible record of access and change, and a clear answer on where data sits. Both are design decisions, made at the start rather than retrofitted before an inspection.',
          },
          {
            title: 'Model governance for AI in decisions',
            body: 'Any model that influences credit, pricing or risk needs a documented purpose, data provenance, validation, monitoring and a route to challenge a decision. We build those controls with the model, not after it. We do not use client data to train or fine-tune models, unless you ask us to in writing for your own dedicated model.',
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
        body: 'Tell us the process and the deadline. A senior engineer replies within one working day.',
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
      title: 'Legal and professional services IT | YatiSphere',
      description:
        'Client intake, conflict checks, practice-system integration and AI with confidentiality built in, for law firms and professional services firms.',
    },
    hero: {
      kicker: 'Industries · Legal & professional services',
      h1: 'Intake, conflicts and AI your firm can defend.',
      subhead:
        'We help law firms and professional services firms open matters faster, connect their practice systems and use AI without putting client confidence at risk.',
    },
    blocks: [],
    industry: {
      slug: 'legal-professional-services',
      forWho: ['Law firms', 'In-house legal teams', 'Accounting and tax firms', 'Advisory and consulting firms', 'Corporate services providers'],
      context: {
        title: 'Why professional services IT is different',
        paragraphs: [
          'A professional firm runs on client confidence. Intake has to clear before work can start, the same client often lives in several systems, and AI raises a direct question about what a model is allowed to see.',
          'So we treat confidentiality as a property of the architecture, not a policy document beside it: who can see a matter is enforced in the system, every clearance decision is recorded, and AI works only inside the boundaries your firm sets.',
        ],
      },
      build: [
        {
          title: 'Client intake and conflict checks',
          problem: 'Opening a matter takes days, and conflict results live in email.',
          body: 'Structured intake that captures parties as data rather than free text, runs conflict searches against them, routes approvals to named people and keeps a record of why each engagement was cleared.',
          bullets: [
            'Party and related-entity data modeling',
            'Conflict search with a retained result record',
            'Approval routing with named accountability',
          ],
          outcome: 'Matters open faster, and every clearance can be reconstructed later.',
          href: '/what-we-do/applied-ai/agentic-automation',
          linkLabel: 'Agentic automation',
        },
        {
          title: 'Practice-system integration',
          problem: 'The same client exists in five systems, and none of them agree.',
          body: 'Integration between practice management, document management, finance and CRM, so a client or matter is one record with one owner rather than several partial copies.',
          bullets: [
            'API-led integration between practice systems',
            'Master client and matter records',
            'Event-driven synchronization, not nightly exports',
          ],
          outcome: 'One trusted record per client and matter, across every system.',
          href: '/what-we-do/services/software-engineering',
          linkLabel: 'Software engineering',
        },
        {
          title: 'Matter and fee reporting',
          problem: 'We find out a matter is over budget after it closes.',
          body: 'Reporting built on the matter lifecycle, so budget, time recorded, write-offs and realization are visible while the matter is still running, for partners and finance alike.',
          bullets: [
            'Budget versus actual by matter and phase',
            'Realization and write-off tracking',
            'Early warnings when a matter drifts',
          ],
          outcome: 'Partners act on budget overruns while there is still time to fix them.',
          href: '/what-we-do/services/data-analytics',
          linkLabel: 'Data and analytics',
        },
        {
          title: 'Knowledge assistants with hard boundaries',
          problem: 'Our lawyers want AI, but nobody will sign off on what it can see.',
          body: 'Search, summarization and clause extraction, scoped so privileged material stays inside defined boundaries and a professional reviews anything that leaves the system.',
          bullets: [
            'Retrieval limited to matters the user may access',
            'Human review before any client-facing output',
            'Every prompt and output logged',
          ],
          outcome: 'AI your risk and general counsel teams can approve.',
          href: '/what-we-do/applied-ai/knowledge-assistants',
          linkLabel: 'Knowledge assistants',
        },
      ],
      standards: {
        lede: 'These are duties your firm carries. We are not regulated by any of these bodies. Our part is to design and document controls so your systems can evidence them.',
        regions: [
          { region: 'England and Wales', bodies: 'SRA Standards and Regulations' },
          { region: 'UAE', bodies: 'DIFC and ADGM rules, UAE PDPL' },
          { region: 'United States', bodies: 'ABA Model Rules, state bar rules' },
          { region: 'India', bodies: 'Bar Council of India rules, DPDP Act' },
        ],
        items: [
          {
            title: 'Confidentiality and privilege',
            body: 'The duty of confidence and legal professional privilege are your firm’s obligations. We turn them into access models, storage boundaries and logging, so the architecture reflects the duty rather than working against it.',
          },
          {
            title: 'Conflicts of interest',
            body: 'Professional rules require conflict checks you can evidence. We design the data and audit records that let you reconstruct any clearance decision after the fact.',
          },
          {
            title: 'Retention and disposal',
            body: 'Matter files carry retention periods set by regulation, limitation and engagement terms. We build those schedules into the platform, so retention and disposal are enforced, not left to memory.',
          },
          {
            title: 'Privacy law',
            body: 'The GDPR and UK GDPR, India’s DPDP Act and the Gulf data protection laws set rules on lawful basis, data-subject rights and cross-border transfer. We build the consent, access and deletion mechanics you need to answer a request.',
          },
          {
            title: 'What AI may touch',
            body: 'Whether a model may see privileged or confidential material is your firm’s policy decision. We enforce it as scope, retention settings and logging on every AI-assisted workflow. We do not use client data to train or fine-tune models, unless you ask us to in writing for your own dedicated model.',
          },
        ],
      },
      start: {
        lede: 'Most firms start with a Solution Blueprint: two to four weeks on one named problem, such as intake or conflicts.',
        steps: [
          { title: 'Map the journey', body: 'We follow a matter from first enquiry to engagement letter, and find where time is lost and where risk sits.' },
          { title: 'Map the duties', body: 'We record the confidentiality, conflict and retention rules that apply, and how each will be enforced and evidenced.' },
          { title: 'Agree the plan', body: 'You get the target design, a phased plan and the risks, ready for your risk committee, before any build begins.' },
        ],
      },
      related: [
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Policy turned into enforced scope and logging' },
        { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access models built around the duty of confidence' },
        { label: 'Trust and security', href: '/who-we-are/trust', descriptor: 'How we handle your data' },
        BLUEPRINT,
      ],
      cta: {
        title: 'Intake, conflicts or AI on your agenda?',
        body: 'Tell us how matters open today. A senior engineer replies within one working day.',
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
      title: 'SaaS platforms, SOC 2 readiness and AI | YatiSphere',
      description:
        'Pass enterprise security reviews, get SOC 2 ready, scale multi-tenant platforms and ship AI features safely. For SaaS and software companies.',
    },
    hero: {
      kicker: 'Industries · Software & SaaS',
      h1: 'Pass the security review. Ship AI safely.',
      subhead:
        'We help software companies win enterprise deals: platforms that scale, security evidence that answers the questionnaire, and AI features customers trust.',
    },
    blocks: [],
    industry: {
      slug: 'software-saas',
      forWho: ['B2B SaaS companies', 'Scale-ups selling to enterprises', 'Product and platform teams', 'Software vendors adding AI'],
      context: {
        title: 'Why SaaS IT is different',
        paragraphs: [
          'Your biggest prospects send a security questionnaire before they sign, the platform is straining under the tenants it already has, and the roadmap now includes AI. All of it has to happen while the product keeps shipping.',
          'So we build security evidence into the pipeline rather than a spreadsheet, design tenancy deliberately, and treat AI features like any other product surface: scoped, tested and monitored.',
        ],
      },
      build: [
        {
          title: 'Security reviews and SOC 2 readiness',
          problem: 'Enterprise deals stall at the security questionnaire.',
          body: 'Control design, logging and evidence generation mapped to the Trust Services Criteria or ISO/IEC 27001 Annex A, so questionnaires and audits find a system that matches its documentation.',
          bullets: [
            'Control design mapped to the criteria your auditor tests',
            'Evidence generated by the pipeline, not collected by hand',
            'Answers for CAIQ, SIG and custom questionnaires',
          ],
          outcome: 'Security reviews stop blocking deals.',
          href: '/what-we-do/services/security-compliance',
          linkLabel: 'Security and compliance',
        },
        {
          title: 'Platform modernization without a rewrite',
          problem: 'The monolith slows every release, but a rewrite would stop the roadmap.',
          body: 'Decomposition planned around the seams that actually constrain you, sequenced so the product keeps shipping. We design the target and the route to it, rather than proposing a rewrite.',
          bullets: [
            'Seam analysis and decomposition sequencing',
            'Strangler-pattern migration paths',
            'API and contract design between services',
          ],
          outcome: 'Faster releases, with no feature freeze.',
          href: '/what-we-do/services/modernization',
          linkLabel: 'Application modernization',
        },
        {
          title: 'Multi-tenant cloud architecture',
          problem: 'One noisy tenant slows everyone, and the cloud bill grows faster than revenue.',
          body: 'Environments defined as code on AWS or Microsoft Azure, with tenant isolation chosen deliberately and its cost and blast radius made explicit.',
          bullets: [
            'Tenancy model and data partitioning',
            'Multi-region and failover design',
            'Cost attribution per tenant and per service',
          ],
          outcome: 'Predictable performance and a cost per tenant you can price against.',
          href: '/what-we-do/cloud',
          linkLabel: 'Cloud',
        },
        {
          title: 'AI features built as product',
          problem: 'Customers want AI features, and their security teams want answers about them.',
          body: 'AI scoped to a defined job, with the data boundary stated, an evaluation harness in place before launch and human review where an output carries consequence. We choose the model that fits the use case.',
          bullets: [
            'Data boundary and provider exposure documented',
            'Evaluation sets and regression tracking',
            'Human review on consequential outputs',
          ],
          outcome: 'AI features that pass the same review as the rest of the product.',
          href: '/what-we-do/applied-ai',
          linkLabel: 'Applied AI',
        },
      ],
      standards: {
        lede: 'These are the frameworks your buyers, auditors and regulators hold you to. We design the controls and generate the evidence. The certifications and obligations stay with your company; YatiSphere does not hold or issue them.',
        items: [
          {
            title: 'SOC 2 and ISO/IEC 27001',
            body: 'Both are assessed by an independent auditor or certification body. We provide readiness: control design, logging and evidence mapped to the Trust Services Criteria or Annex A.',
          },
          {
            title: 'Customer security reviews',
            body: 'Questionnaires such as CAIQ and SIG, and bespoke enterprise reviews, ask about architecture, access, encryption, subprocessors and incident handling. We build the architecture and evidence that make those answers straightforward and accurate.',
          },
          {
            title: 'Tenant isolation',
            body: 'How tenant data is partitioned and what prevents cross-tenant access are the first questions a reviewer asks. We design isolation at the data layer and make the enforcement point explicit and testable.',
          },
          {
            title: 'Privacy and data protection',
            body: 'The GDPR and UK GDPR, US state privacy laws and India’s DPDP Act drive residency, retention, subject-rights and subprocessor commitments. We design data flows and deletion paths so those commitments are enforced in the platform, not only in the contract.',
          },
          {
            title: 'Change control and supply chain',
            body: 'Approval, segregation of duties, testing and rollback are encoded in the pipeline, with SBOM generation, artifact signing and vulnerability triage as routine, so the change record is produced by the process.',
          },
          {
            title: 'AI and customer data',
            body: 'Enterprise buyers now ask where their data goes when an AI feature runs. We document the boundary and configure providers so customer data is not retained for training. We do not use client data to train or fine-tune models, unless you ask us to in writing for your own dedicated model.',
          },
        ],
      },
      start: {
        lede: 'Most software companies start with a Solution Blueprint: two to four weeks on one named problem, often the deal that is stuck in review.',
        steps: [
          { title: 'Read the asks', body: 'We review the questionnaires, audit scope or roadmap items that are blocking you, and what each one actually requires.' },
          { title: 'Find the gaps', body: 'We compare them with your architecture, pipeline and documentation, and rank the gaps by deal and audit risk.' },
          { title: 'Agree the plan', body: 'You get a phased plan that keeps the product shipping, with the evidence each phase will produce.' },
        ],
      },
      related: [
        { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Control design and audit evidence' },
        { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering', descriptor: 'Governed pipelines and supply-chain hygiene' },
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Evaluation, boundaries and review' },
        BLUEPRINT,
      ],
      cta: {
        title: 'A deal stuck in security review?',
        body: 'Send us the questionnaire or the audit scope. A senior engineer replies within one working day.',
      },
    },
  },
]
