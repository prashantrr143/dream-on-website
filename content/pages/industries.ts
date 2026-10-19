import type { ContentPage } from './types'

/**
 * Retired industry pages (healthcare, public sector). Kept as content
 * and 308-redirected (RETIRED_PATHS). The published industry pages and
 * the hub live in industries-live.ts.
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
