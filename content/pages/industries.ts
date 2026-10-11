import type { ContentPage } from './types'

/**
 * Industry pages (brief section 6, industry template).
 *
 * Governance and regulatory content is carried over from the previous
 * app/industries/* pages. Regimes are framed as rules our clients answer to
 * and that we design for — never as approvals or certifications we hold.
 */

const parents = [
  { name: 'What we do', path: '/what-we-do' },
  { name: 'Industries', path: '/what-we-do#industries' },
]

const TRAINING =
  'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.'

export const pages: ContentPage[] = [
  // ---------------------------------------------------------------------------
  // Financial services
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/financial-services',
    name: 'Financial services',
    parents,
    contactInterest: 'Financial services',
    meta: {
      title: 'KYC automation and core modernization | YatiSphere',
      description:
        'KYC automation for banks, post-trade settlement systems, AML monitoring and governed AI, built for the regulators your firm answers to.',
    },
    hero: {
      kicker: 'INDUSTRIES / FINANCIAL SERVICES',
      h1: 'Finance, built for scrutiny',
      subhead:
        'We help banks, insurers, wealth managers and fintechs modernize core platforms and adopt AI regulators can follow.',
    },
    blocks: [
      { type: 'inFocus', industries: ['financial-services'] },
      {
        type: 'statement',
        text: 'In financial services the architecture has to answer to a regulator as well as a customer. Core systems cannot be destabilized, reporting has to be reproducible on request, and any model that touches credit, risk or eligibility has to be explainable. Speed matters, but only on systems that can show their working.',
      },
      {
        type: 'cards',
        title: 'How we help',
        columns: 2,
        cards: [
          {
            title: 'Onboarding and KYC automation',
            body: 'Document capture, verification and case handling with a single view of where each application is stuck. Document extraction and screening triage go where a human still decides.',
            href: '/what-we-do/applied-ai/agentic-automation',
            bullets: [
              'Document understanding for onboarding packs',
              'Triage with human adjudication',
              'Explicit boundaries on automated decisioning',
            ],
          },
          {
            title: 'Post-trade and settlement systems',
            body: 'Reconciliation, break detection and exception workflow, built so a break surfaces early and lands with whoever can resolve it before cut-off. Led by engineers who have run post-trade settlement platforms at a global investment bank.',
            href: '/what-we-do/services/software-engineering',
            bullets: [
              'Reconciliation across custodians and counterparties',
              'Break detection with routed, owned exception queues',
              'Audit records of every break, action and resolution',
            ],
          },
          {
            title: 'AML transaction monitoring and sanctions screening',
            body: 'Monitoring and screening workflows where alerts are triaged, investigated and closed with a record a reviewer can follow. Systems flag; people decide.',
            href: '/what-we-do/services/data-analytics',
            bullets: [
              'Alert triage and prioritization',
              'Case management with a full audit trail',
              'Human review of potential matches before any action',
            ],
          },
          {
            title: 'Core platforms and regulatory data',
            body: 'API and event layers that let modern channels talk to long-lived core systems without rewriting them, and reporting data with lineage so a submission can be reproduced rather than reconstructed. Built on AWS, Microsoft Azure or Google Cloud, in your account and your region.',
            href: '/what-we-do/services/modernization',
            bullets: [
              'Stable interfaces in front, systems of record behind',
              'Lineage captured as part of the pipeline',
              'Infrastructure as code with segregation of duties',
            ],
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Standards your organization is held to',
        lede: 'We do not hold these certifications on your behalf. We design and document controls so your organization can evidence them against the regimes that apply to it.',
        items: [
          {
            title: 'Regimes by region',
            body: 'UK: FCA, PRA. EU: DORA, EBA guidelines. UAE: CBUAE, DFSA, ADGM FSRA. US: SEC, FINRA. India: RBI, SEBI. These are the regimes financial services firms answer to. We are not approved or authorized by any of these regulators; we design the reporting and controls that help your organization meet them.',
          },
          {
            title: 'Regulatory reporting obligations',
            body: 'Each supervisory regime sets out what must be reported, in what form and on what cycle. We design data platforms so those submissions can be produced from traceable sources and reproduced on request.',
          },
          {
            title: 'PCI DSS for cardholder data',
            body: 'Where card data is in scope, PCI DSS defines the control expectations for storage, transmission and access. We architect segmentation, key handling and logging so your organization can evidence those controls. The certification itself remains yours to hold.',
          },
          {
            title: 'Audit trail and data residency',
            body: 'Regulated workloads need a defensible record of access and change, and a clear answer on where data physically sits. Both are architectural decisions, made at design time rather than retrofitted before an inspection.',
          },
          {
            title: 'Model governance for AI in decisioning',
            body: `Any model influencing credit, pricing or risk outcomes needs documented purpose, data provenance, validation, monitoring and a route to challenge a decision. We build those controls alongside the model, not after it. ${TRAINING}`,
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Controls for models that touch decisions' },
          { label: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation', descriptor: 'Onboarding and case workflows with human sign-off' },
          { label: 'Data and analytics', href: '/what-we-do/services/data-analytics', descriptor: 'Reporting platforms with lineage' },
          { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access architecture and audit evidence' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
    ],
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
      title: 'Law firm intake and AI with confidentiality | YatiSphere',
      description:
        'Client intake automation, practice-system integration and AI for law firms, with confidentiality and privilege built into the architecture.',
    },
    hero: {
      kicker: 'INDUSTRIES / LEGAL & PROFESSIONAL',
      h1: 'Confidentiality by design',
      subhead:
        'We help firms run intake, matters and knowledge on systems where client confidence is built into the architecture.',
    },
    blocks: [
      { type: 'inFocus', industries: ['legal-professional-services'] },
      {
        type: 'statement',
        text: 'A professional firm runs on client confidence. Intake has to clear before work can start, the same client often lives in several systems, and AI raises a direct question about what a model may see. The duty of confidence should be a property of the architecture, not a policy document beside it.',
      },
      {
        type: 'cards',
        title: 'How we help',
        columns: 2,
        cards: [
          {
            title: 'Intake and conflict-check workflows',
            body: 'Structured intake that captures parties as data rather than free text, routes approvals explicitly, and records the basis on which an engagement was cleared to proceed.',
            href: '/what-we-do/consulting',
            bullets: [
              'Party and related-entity data modeling',
              'Conflict search with a retained result record',
              'Approval routing with named accountability',
            ],
          },
          {
            title: 'Practice-system integration',
            body: 'Integration between practice management, document management, finance and CRM, so a client or matter is one record with one owner rather than several partial copies.',
            href: '/what-we-do/services/software-engineering',
            bullets: [
              'API-led integration between practice systems',
              'Master client and matter record design',
              'Event-driven synchronization, not nightly exports',
            ],
          },
          {
            title: 'Matter and fee reporting',
            body: 'Reporting built on the matter lifecycle, so budget position, time recorded and realization are visible while the matter is running rather than after it closes.',
            href: '/what-we-do/services/data-analytics',
          },
          {
            title: 'Knowledge assistants with hard boundaries',
            body: `Summarization, clause extraction and search assistance, scoped so privileged material stays inside defined boundaries and a professional reviews anything that leaves the system. ${TRAINING}`,
            href: '/what-we-do/applied-ai/knowledge-assistants',
            bullets: [
              'Retrieval scoped to permitted matters only',
              'Human review before any client-facing output',
              'Logged prompts and outputs for accountability',
            ],
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Standards your organization is held to',
        lede: 'These are duties your firm carries. Our part is to design and document controls so the systems you run can evidence them.',
        items: [
          {
            title: 'Professional rules we design for',
            body: 'England and Wales: SRA Standards and Regulations. Solicitors and barristers: Law Society and Bar rules. UAE: DIFC and ADGM courts and regulatory context. US: ABA Model Rules of Professional Conduct. These are the rules law firms and their lawyers answer to. We are not regulated by any of these bodies; we design the conflict, confidentiality and record-keeping controls that help your firm meet them.',
          },
          {
            title: 'Confidentiality and privilege',
            body: 'The professional duty of confidence and legal professional privilege are obligations your firm carries. We translate them into access models, storage boundaries and logging, so the architecture reflects the duty rather than working against it.',
          },
          {
            title: 'Conflict-of-interest controls',
            body: 'Professional conduct rules require conflict checks that can be evidenced. We design the data structures and audit records that make a clearance decision reconstructible after the fact.',
          },
          {
            title: 'Data retention and disposal',
            body: 'Matter files carry retention periods driven by regulation, limitation and engagement terms. We encode those schedules into the platform so retention and disposal are enforced rather than left to memory.',
          },
          {
            title: 'GDPR and equivalent privacy regimes',
            body: "The GDPR and UK GDPR, and equivalents such as India's DPDP Act and the Gulf PDPLs, set expectations around lawful basis, data-subject rights and cross-border transfer. We build the consent, access and deletion mechanics your organization needs to answer a request.",
          },
          {
            title: 'Boundaries on what AI may touch',
            body: 'Whether a model may see privileged or client-confidential material is a policy decision, not a technical default. We implement that decision as enforced scope, retention settings and logging on every AI-assisted workflow.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          { label: 'Knowledge assistants', href: '/what-we-do/applied-ai/knowledge-assistants', descriptor: 'Search and drafting help, scoped to permitted matters' },
          { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Policy turned into enforced scope and logging' },
          { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Access models around the duty of confidence' },
          { label: 'Trust', href: '/who-we-are/trust', descriptor: 'How we handle your data' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
    ],
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
      title: 'SOC 2 readiness and SaaS platforms | YatiSphere',
      description:
        'SOC 2 readiness for SaaS, customer security questionnaires, multi-tenant architecture and AI features shipped responsibly.',
    },
    hero: {
      kicker: 'INDUSTRIES / SOFTWARE & SAAS',
      h1: 'Ready for the enterprise buyer',
      subhead:
        'We help product companies scale their platforms, pass customer security reviews and ship AI features responsibly.',
    },
    blocks: [
      { type: 'inFocus', industries: ['software-saas'] },
      {
        type: 'statement',
        text: "Your biggest prospects send a security questionnaire before they sign, the platform is straining under the tenants it already has, and the roadmap now includes AI. Answering a reviewer honestly takes architecture designed to be answerable and evidence the pipeline generates, while the product keeps shipping.",
      },
      {
        type: 'cards',
        title: 'How we help',
        columns: 2,
        cards: [
          {
            title: 'Incremental platform modernization',
            body: 'Decomposition planned around the seams that actually constrain you, sequenced so the product keeps shipping. We design the target state and the route to it, rather than proposing a rewrite.',
            href: '/what-we-do/services/modernization',
            bullets: [
              'Seam analysis and decomposition sequencing',
              'Strangler-pattern migration paths',
              'API and contract design between services',
            ],
          },
          {
            title: 'Cloud platform and tenancy architecture',
            body: 'Environments defined as code on AWS, Microsoft Azure or Google Cloud, with tenant isolation modeled deliberately and the cost and blast-radius consequences of that choice made explicit.',
            href: '/what-we-do/cloud',
            bullets: [
              'Tenancy model selection and data partitioning',
              'Multi-region and failover design',
              'Cost attribution per tenant and per service',
            ],
          },
          {
            title: 'Release governance and supply-chain hygiene',
            body: 'Pipelines where review, testing, provenance and rollback are properties of the process. SBOMs, scan results and change records fall out of the pipeline instead of being assembled later.',
            href: '/what-we-do/services/devops-platform-engineering',
            bullets: [
              'CI/CD with enforced review and test gates',
              'SBOM generation and artifact signing',
              'Progressive delivery with tested rollback',
            ],
          },
          {
            title: 'AI features designed as product surface',
            body: `AI scoped to a defined job, with the data boundary stated, an evaluation harness in place before launch, and human review where an output carries consequence. Model-neutral, with a Claude practice. ${TRAINING}`,
            href: '/what-we-do/applied-ai',
            bullets: [
              'Data boundary and provider exposure defined',
              'Evaluation sets and regression tracking',
              'Human-in-the-loop on consequential outputs',
            ],
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Standards your organization is held to',
        lede: "These are the frameworks your buyers, auditors and regulators hold you to. We design controls against them and generate the evidence. The certifications and obligations remain your organization's.",
        items: [
          {
            title: 'Multi-tenancy and data isolation',
            body: 'How tenant data is partitioned, how a query is scoped, and what prevents cross-tenant access are the first questions an enterprise reviewer asks. We design isolation at the data layer and make the enforcement point explicit and testable.',
          },
          {
            title: 'SOC 2 and ISO/IEC 27001 readiness',
            body: 'Both are assessed against your organization by an independent auditor or certification body. What we provide is readiness support: control design, logging and evidence generation mapped to the Trust Services Criteria or Annex A, so the assessment finds a system that matches its documentation. YatiSphere does not hold or issue these certifications.',
          },
          {
            title: 'Customer security reviews and due diligence',
            body: 'Standard questionnaires such as CAIQ and SIG, plus bespoke enterprise reviews, ask about architecture, access control, encryption, subprocessors and incident handling. We help you build the architecture and the evidence set that make those answers straightforward and accurate.',
          },
          {
            title: 'Privacy and data protection obligations',
            body: "The GDPR and UK GDPR, US state privacy laws, India's DPDP Act 2023 and equivalent regimes drive residency, retention, subject-rights and subprocessor commitments. We design data flows and deletion paths so those commitments are enforceable in the platform, not only in the contract.",
          },
          {
            title: 'Release governance and change control',
            body: 'Change management is a control in its own right under most frameworks. We encode approval, segregation of duties, testing and rollback in the pipeline so the change record is generated by the process rather than reconstructed for an auditor.',
          },
          {
            title: 'Dependency and supply-chain assurance',
            body: 'Frameworks and customer questionnaires increasingly ask for a software bill of materials, provenance and a documented vulnerability response. We build SBOM generation, artifact signing and advisory triage into the delivery pipeline as routine practice.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Control design and audit evidence' },
          { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering', descriptor: 'Governed pipelines and supply-chain hygiene' },
          { label: 'Modernization', href: '/what-we-do/services/modernization', descriptor: 'Incremental change without a rewrite' },
          { label: 'Claude practice', href: '/what-we-do/applied-ai/claude', descriptor: 'Building product features on Claude' },
          { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Evaluation, boundaries and review' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Healthcare
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/healthcare',
    name: 'Healthcare',
    parents,
    contactInterest: 'Healthcare',
    meta: {
      title: 'Health data platforms for HIPAA and DSPT | YatiSphere',
      description:
        'FHIR and HL7 integration, consent management and PHI access controls for healthcare organizations, designed against HIPAA, NHS DSPT and GDPR.',
    },
    hero: {
      kicker: 'INDUSTRIES / HEALTHCARE',
      h1: 'Care data, governed',
      subhead:
        'We help healthcare organizations connect clinical systems with consent and access rules enforced by design.',
    },
    blocks: [
      { type: 'inFocus', industries: ['healthcare'] },
      {
        type: 'statement',
        text: 'Clinical data is spread across systems that were never designed to share, and every connection carries consent, access and retention obligations. Clinicians need the record without friction, and the same record must not be broadly readable. Those rules belong in the architecture, not in policy and hope.',
      },
      {
        type: 'cards',
        title: 'How we help',
        columns: 2,
        cards: [
          {
            title: 'Patient platforms and clinical integration',
            body: 'Patient-facing services and the integration layer beneath them, built against interoperability standards rather than bespoke file exchanges.',
            href: '/what-we-do/services/software-engineering',
            bullets: [
              'HL7 and FHIR-based interface design',
              'Patient identity and record matching',
              'Consent scope carried through every interface',
            ],
          },
          {
            title: 'Security architecture for PHI',
            body: 'Access models, encryption and logging designed around protected health information, so least privilege and full auditability are properties of the platform.',
            href: '/what-we-do/services/security-compliance',
            bullets: [
              'Role and purpose-based access to PHI',
              'Read-level audit logging, not only writes',
              'Break-glass access with mandatory review',
            ],
          },
          {
            title: 'Clinical data platforms',
            body: 'Data platforms where consent scope, retention class and access rules travel with the record, so analytics and reporting inherit the same constraints as the source system.',
            href: '/what-we-do/services/data-analytics',
            bullets: [
              'Consent and retention modeled as first-class data',
              'De-identification pipelines for secondary use',
              'Lineage from reported figure back to source',
            ],
          },
          {
            title: 'Applied AI under clinical governance',
            body: `Document extraction, operational forecasting and triage support, scoped so a clinician remains the decision-maker and every model input and output is attributable. ${TRAINING}`,
            href: '/what-we-do/applied-ai/ai-governance',
            bullets: [
              'Data minimization before any model sees a record',
              'Model documentation, versioning and monitoring',
              'Clear separation from clinical decision-making',
            ],
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Standards your organization is held to',
        lede: 'We do not hold these certifications on your behalf. Our work is to design controls against these standards and produce the evidence your organization needs to demonstrate them.',
        items: [
          {
            title: 'Health-data rules we design for',
            body: 'US: HIPAA Privacy and Security Rules. UK: NHS Data Security and Protection Toolkit (DSPT). UK and EU: GDPR and UK GDPR special-category health data. UAE: Department of Health Abu Dhabi and Dubai Health Authority health-data rules. These are the rules healthcare organizations answer to. We are not certified or approved under any of them; we design the controls and evidence that help your organization meet them.',
          },
          {
            title: 'Health-data safeguards',
            body: 'These regimes all expect technical safeguards for health information. We architect and document those controls (access, audit, integrity and transmission security) so your organization can evidence them. The compliance posture remains yours.',
          },
          {
            title: 'Consent management',
            body: 'Consent has scope, duration and a withdrawal path. We model it as enforceable state that every read and every downstream pipeline checks, rather than as a flag captured once at registration.',
          },
          {
            title: 'Retention schedules',
            body: 'Record-retention obligations vary by record type and jurisdiction. We encode those schedules into storage and archival design so retention and disposal are executed and evidenced by the platform.',
          },
          {
            title: 'Least-privilege access to PHI',
            body: 'Access should be granted by role and by purpose, scoped to the care relationship, and reviewed. We design the authorization model and the review mechanics that make that workable at clinical speed.',
          },
          {
            title: 'Auditability of every access',
            body: 'In health data, reading a record is itself an event worth recording. We build audit logging that captures reads as well as writes, retains them appropriately, and makes them queryable when a question is asked.',
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'PHI access, encryption and audit' },
          { label: 'Data and analytics', href: '/what-we-do/services/data-analytics', descriptor: 'Clinical data platforms with lineage' },
          { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Clinician-in-the-loop AI controls' },
          { label: 'Cloud', href: '/what-we-do/cloud', descriptor: 'Your cloud, your region' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Public sector
  // ---------------------------------------------------------------------------
  {
    path: '/what-we-do/industries/public-sector',
    name: 'Public sector',
    parents,
    contactInterest: 'Public sector',
    meta: {
      title: 'Public sector digital services advisory | YatiSphere',
      description:
        'Architecture reviews, WCAG 2.2 accessibility, security baselines and modernization roadmaps for public bodies that run their own services.',
    },
    hero: {
      kicker: 'INDUSTRIES / PUBLIC SECTOR',
      h1: 'Services citizens can trust',
      subhead: 'We help public bodies build accessible, auditable services their own teams can run.',
    },
    blocks: [
      { type: 'inFocus', industries: ['public-sector'] },
      {
        type: 'statement',
        text: 'Public services have to work for everyone, keep citizen data where policy says, and still be runnable by the department in five years. Residency, accessibility and audit trails are architectural decisions that are expensive to retrofit. We provide advisory and architecture support to the teams that own and run those services.',
      },
      {
        type: 'cards',
        title: 'How we help',
        lede: 'Our team has built national-scale e-government platforms for the Government of India.',
        columns: 2,
        cards: [
          {
            title: 'Architecture reviews',
            body: 'An independent review of a planned or running platform against the residency, resilience and handover constraints it has to meet, with findings your team can act on.',
            href: '/what-we-do/consulting',
            bullets: [
              'Residency and data-flow review of every data path',
              'Disaster recovery and failover design review',
              'Exit and handover readiness',
            ],
          },
          {
            title: 'Accessibility support',
            body: 'Support for delivery teams building citizen-facing services to WCAG 2.2 AA, with accessibility treated as an acceptance criterion and tested in the pipeline rather than audited at the end.',
            href: '/what-we-do/services/software-engineering',
            bullets: [
              'WCAG 2.2 AA review of designs and running services',
              'Automated accessibility checks in the release pipeline',
              'Testing evidence in the form reviewers ask for',
            ],
          },
          {
            title: 'Security baselines',
            body: 'Baselines your team can adopt and evidence: least privilege, separation of duties, and logging designed so questions about who did what are answerable months later.',
            href: '/what-we-do/services/security-compliance',
            bullets: [
              'Role and attribute-based access design',
              'Audit logging and retention baselines',
              'Control mapping for assessor review',
            ],
          },
          {
            title: 'Modernization roadmaps',
            body: 'A sequenced plan for moving legacy services and data forward, with retention, lineage and lawful-basis constraints carried through, in stages your team can fund and operate.',
            href: '/what-we-do/services/modernization',
            bullets: [
              'Current-state assessment of systems and data',
              'Stage-by-stage modernization plan',
              'Skills and runbook plan for in-house operation',
            ],
          },
        ],
      },
      {
        type: 'accordion',
        title: 'Standards your organization is held to',
        lede: "These are the frameworks public bodies answer to. We design controls against them and produce the evidence your assessors and auditors ask for. The obligations remain your organization's.",
        items: [
          {
            title: 'Accessibility standards',
            body: 'WCAG 2.2 Level AA is the international reference standard for citizen-facing services, alongside national guidance such as the UK Public Sector Bodies Accessibility Regulations, EN 301 549 in the EU, Section 508 in the US, and the Guidelines for Indian Government Websites. We treat conformance as a build-time acceptance criterion and produce the testing evidence reviewers ask for.',
          },
          {
            title: 'Security baselines and incident reporting',
            body: 'National cyber security regimes set expectations for logging, log retention and incident reporting timelines, for example NIS2 in the EU, NCSC guidance in the UK, the UAE Information Assurance Regulation and CERT-In directions in India. ISO/IEC 27001 is the common international reference for information security management. We design controls and logging so your organization can evidence them. YatiSphere is not itself a certification body or certificate holder.',
          },
          {
            title: 'Data residency and sovereignty',
            body: "Data protection regimes, including the GDPR, India's DPDP Act 2023, the UAE and Saudi PDPLs and sector-specific directions, constrain where personal data may be stored and processed, and who may act as a processor. We design region selection, dependency choice and data flows on AWS, Microsoft Azure or Google Cloud against the constraints that apply to you, and document the result.",
          },
          {
            title: 'Auditability and open standards',
            body: 'Public programs are expected to show documented architecture, stated exit plans and a preference for open standards and portable data formats. We help your team keep that documentation alongside the system so the evidence reflects what actually runs.',
          },
          {
            title: 'Records retention and disposal',
            body: 'Public records obligations set how long records must be kept and when they must be disposed of. We encode retention windows, legal holds and disposal workflows in the platform rather than leaving them to operational discipline.',
          },
          {
            title: 'Responsible use of AI in public services',
            body: `Where AI touches a citizen decision, explainability, human review and contestability are not optional. We scope AI narrowly, keep a human in the loop on consequential decisions, and document how outputs are produced and reviewed. ${TRAINING}`,
          },
        ],
      },
      {
        type: 'links',
        title: 'Related services',
        links: [
          { label: 'Consulting', href: '/what-we-do/consulting', descriptor: 'Architecture reviews and program shaping' },
          { label: 'Modernization', href: '/what-we-do/services/modernization', descriptor: 'Staged roadmaps your team can run' },
          { label: 'Security and compliance', href: '/what-we-do/services/security-compliance', descriptor: 'Baselines and assessor evidence' },
          { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance', descriptor: 'Human review and contestability' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
    ],
  },
]
