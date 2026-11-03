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
      h1: 'Industries we know well',
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
      title: 'KYC and onboarding automation for banks | YatiSphere',
      description:
        'KYC and onboarding automation, post-trade systems, AML monitoring and core modernization for banks, insurers and fintechs, built for regulators.',
    },
    hero: {
      kicker: 'Industries · Financial services',
      h1: 'Regulator-ready platforms for financial services.',
      subhead:
        'We modernize core systems, automate onboarding and KYC, and put AI into production for banks, insurers, wealth managers and fintechs, so every decision can be explained.',
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
        body: 'Tell us the process and the deadline. We reply within one working day.',
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
        'Client intake, conflict checks, practice-system integration and AI with confidentiality built in, for law firms and professional services firms.',
    },
    hero: {
      kicker: 'Industries · Legal & professional services',
      h1: 'Matter opening, conflict checks and AI for law firms',
      subhead:
        'We build the intake and conflict-search systems behind new matters, connect them to the practice and document systems your firm already runs, and set up AI on client documents once your risk team has agreed what it may see.',
    },
    blocks: [],
    // Pilot of the less-templated industry page (2026-11-03): a worked
    // example, uneven further work and a point of view on AI, in place of
    // four identical problem/solution/bullets/outcome cards.
    industry: {
      slug: 'legal-professional-services',
      forWho: ['Law firms', 'In-house legal teams', 'Accounting and tax firms', 'Advisory and consulting firms', 'Corporate services providers'],
      context: {
        title: 'Where the time goes',
        paragraphs: [
          'In most firms a new instruction still starts as an email or a Word form. Someone in business acceptance re-keys the parties into the practice management system, runs a name search, exports the hits to a spreadsheet and chases partners for sign-off. Each step makes sense on its own. Together they turn a same-day request into several days, and leave the reasoning behind each clearance spread across inboxes.',
          'The fix is rarely another conflicts product; most firms already own one. The work is in the data that feeds it: parties captured once and properly structured, corporate groups and former names resolved, and every decision recorded where a partner, an auditor or a client can find it later.',
        ],
      },
      example: {
        name: 'Intake and conflict checks',
        title: 'One new matter, step by step',
        lede: 'An illustrative instruction: a partner is asked to act for Acme Holdings on a share purchase, with Bluewater Shipping on the other side. The names are invented. The problems are common.',
        rows: [
          {
            step: 'The request',
            today: 'An email to business acceptance. The client name is in the subject line and the other side is mentioned halfway down the body.',
            after: 'An intake form that records the client, related entities, the counterparty and key individuals as separate parties, each with its source.',
          },
          {
            step: 'The search',
            today: 'A search for "Acme Holdings" misses "ACME Holdings Ltd" in the time-recording system, and Acme Marine FZE, a subsidiary the firm acted against last year.',
            after: 'Name matching that handles spelling, legal suffixes and former names, and extends the search to the corporate group using company registry data.',
          },
          {
            step: 'The review',
            today: 'The hit list goes into a spreadsheet, is emailed to three partners and waits for replies.',
            after: 'Each hit goes to the partner who owns the related matter, inside the system, with the reason it matched. The decision and the note are stored with the search.',
          },
          {
            step: 'Opening the matter',
            today: 'The matter is set up in the practice management system. A day later someone creates the document workspace by hand.',
            after: 'Approval opens the matter and its workspace together, with any ethical wall in place from the first document.',
          },
          {
            step: 'Six months later',
            today: 'A client asks how a conflict was cleared, and someone goes looking through old email.',
            after: 'The record shows who searched, what matched, who decided and why.',
          },
        ],
        note: 'We connect to what the firm already runs, such as Intapp, Aderant, Elite 3E, iManage or NetDocuments, through their APIs where they exist. We do not resell any of them.',
        href: '/what-we-do/applied-ai/agentic-automation',
        linkLabel: 'How we automate document-heavy workflows',
      },
      more: {
        title: 'Other work we take on for firms',
        items: [
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
          'The first question a risk partner asks about AI is rarely which model to use. It is whether the tool can see a matter the user is walled off from, and whether anything typed into it leaves the firm. We settle those two in the design, before anyone writes a prompt.',
          'In practice that means retrieval limited to the matters a user can already open, logs of every prompt and answer kept under the firm’s retention policy, and a lawyer reviewing anything that goes to a client. We do not use client data to train or fine-tune models. ABA Formal Opinion 512 (July 2024) places the competence and confidentiality duties for generative AI on the lawyer, so the controls have to be ones a partner can explain to a client.',
          'Good first uses are narrow: a summary of a long disclosure bundle with page references, key clauses pulled from a set of leases, or a first-draft conflict memo built from the search results. Each one ends with a lawyer, and each is measured against a set of real examples before it goes live.',
        ],
        href: '/what-we-do/applied-ai/ai-governance',
        linkLabel: 'How we set AI boundaries',
      },
      standards: {
        lede: 'These are your firm’s duties. We are not regulated by these bodies; our job is to make sure the systems we build let you evidence them.',
        regions: [
          { region: 'United States', bodies: 'ABA Model Rules, state bar rules' },
          { region: 'England and Wales', bodies: 'SRA Standards and Regulations' },
          { region: 'UAE', bodies: 'DIFC and ADGM rules, UAE PDPL' },
          { region: 'India', bodies: 'Bar Council of India rules, DPDP Act' },
        ],
        items: [
          {
            title: 'Confidentiality and privilege',
            body: 'Access to a matter follows its team and any ethical walls, and the same rule applies everywhere the data goes, including search and AI tools.',
          },
          {
            title: 'Conflicts',
            body: 'Professional rules expect a firm to show how a conflict was identified and resolved. The clearance record in the example above exists for exactly that question.',
          },
          {
            title: 'Retention and disposal',
            body: 'Periods come from regulation, limitation and engagement terms. Attached to the matter, they let files be kept and disposed of on schedule.',
          },
          {
            title: 'Privacy law',
            body: 'GDPR and UK GDPR, India’s DPDP Act and the UAE, DIFC and ADGM regimes each have rules on cross-border transfer and on requests from individuals. We build the access, export and deletion steps a request needs.',
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
        { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access models and audit evidence' },
        { label: 'Trust center', href: '/who-we-are/trust', descriptor: 'How we handle your data' },
        BLUEPRINT,
      ],
      cta: {
        title: 'How long does a new matter take to open at your firm?',
        body: 'Tell us roughly, and where it stalls. We reply within one working day.',
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
      title: 'Pass SaaS security reviews and get SOC 2 ready | YatiSphere',
      description:
        'Pass enterprise security reviews, get SOC 2 ready, scale multi-tenant platforms and ship AI features safely. For SaaS and software companies.',
    },
    hero: {
      kicker: 'Industries · Software & SaaS',
      h1: 'Win enterprise security reviews and ship AI features customers trust',
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
          'In practice that means three habits. Security evidence comes out of the pipeline automatically. Tenancy is a deliberate design decision with known costs. AI features are scoped, tested and monitored like any other part of the product.',
        ],
      },
      build: [
        {
          title: 'Security reviews and SOC 2 readiness',
          problem: 'Enterprise deals stall at the security questionnaire.',
          body: 'Control design, logging and evidence generation mapped to the Trust Services Criteria or ISO/IEC 27001 Annex A, so questionnaires and audits find a system that matches its documentation.',
          bullets: [
            'Control design mapped to the criteria your auditor tests',
            'Evidence generated by the pipeline on every release',
            'Answers for CAIQ, SIG and custom questionnaires',
          ],
          outcome: 'Security reviews stop blocking deals.',
          href: '/what-we-do/services/security-compliance',
          linkLabel: 'Security and compliance',
        },
        {
          title: 'Platform modernization without a rewrite',
          problem: 'The monolith slows every release, but a rewrite would stop the roadmap.',
          body: 'Decomposition planned around the seams that actually constrain you, sequenced so the product keeps shipping. We design the target and the route to it; in our experience a full rewrite is rarely the cheapest path.',
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
            body: 'The GDPR and UK GDPR, US state privacy laws and India’s DPDP Act drive residency, retention, subject-rights and subprocessor commitments. We design data flows and deletion paths so the commitments in your contracts are actually enforced by the platform.',
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
        { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering', descriptor: 'Reviewed pipelines and supply-chain hygiene' },
        { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Evaluation, boundaries and review' },
        BLUEPRINT,
      ],
      cta: {
        title: 'A deal stuck in security review?',
        body: 'Send us the questionnaire or the audit scope. We reply within one working day.',
      },
    },
  },
]
