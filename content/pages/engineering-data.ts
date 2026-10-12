import type { ContentPage } from './types'

/**
 * What we do / Engineering & data: the pillar page and its five service pages.
 *
 * Cloud-neutral throughout: AWS, Microsoft Azure and Google Cloud are treated
 * as equals. Vendor names appear as text only; no partnership, certification
 * or endorsement is implied.
 */

const W = '/what-we-do'
const PILLAR = `${W}/engineering-data`
const S = `${W}/services`

const WHAT_WE_DO = { name: 'What we do', path: W }
const PILLAR_PARENT = { name: 'Engineering & data', path: PILLAR }

export const pages: ContentPage[] = [
  // ---------------------------------------------------------------------------
  // Pillar
  // ---------------------------------------------------------------------------
  {
    path: PILLAR,
    meta: {
      title: 'Software, data & DevOps engineering | YatiSphere',
      description:
        'Software engineering, data platforms, DevOps, security and legacy modernization on AWS, Microsoft Azure or Google Cloud, by one accountable senior team.',
    },
    hero: {
      kicker: 'WHAT WE DO / ENGINEERING & DATA',
      h1: 'Platforms built to last',
      subhead:
        'We help you build the core systems, data platforms and delivery pipelines your operations depend on.',
    },
    parents: [WHAT_WE_DO],
    name: 'Engineering & data',
    blocks: [
      {
        type: 'statement',
        text: 'The systems your business runs on have to keep running while they change. We design, build and modernize them with one accountable senior team, on AWS, Microsoft Azure or Google Cloud. We recommend what fits, not what we resell, and the code, the cloud accounts and the region are yours from day one.',
      },
      {
        type: 'cards',
        id: 'capabilities',
        title: 'Our capabilities',
        columns: 3,
        cards: [
          {
            title: 'Software engineering',
            body: 'Core platforms, APIs and integration, built secure by default and ready to run from the first release.',
            href: `${S}/software-engineering`,
          },
          {
            title: 'Data & analytics',
            body: 'Governed data platforms that give every team the same numbers, on the stack that fits your estate.',
            href: `${S}/data-analytics`,
          },
          {
            title: 'DevOps & platform engineering',
            body: 'Pipelines, infrastructure as code and observability, so every change is reviewed, tested and reversible.',
            href: `${S}/devops-platform-engineering`,
          },
          {
            title: 'Security & compliance',
            body: 'Controls designed against the frameworks you are held to, with the evidence auditors ask for.',
            href: `${S}/security-compliance`,
          },
          {
            title: 'Legacy modernization',
            body: 'Moving off aging platforms in reversible steps while the business keeps running.',
            href: `${S}/modernization`,
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'New core platforms',
            description:
              'A new business platform designed for regulated work, with tests, pipelines and audit logging in place before the first feature ships.',
            bullets: [
              'Architecture and code you own',
              'Automated tests and CI/CD from the first sprint',
              'Audit logging built in',
            ],
          },
          {
            label: 'A single version of the numbers',
            description:
              'One governed data platform in place of competing spreadsheets and reports, with definitions agreed once and reused everywhere.',
            bullets: [
              'Shared metric definitions and a data catalog',
              'Access controls applied at the data layer',
              'Lineage from source to report',
            ],
          },
          {
            label: 'Safer, faster releases',
            description:
              'Delivery pipelines and infrastructure as code that make each release routine rather than an event.',
            bullets: [
              'Every change peer-reviewed and tested',
              'Environments rebuilt from code',
              'Rollback designed and rehearsed',
            ],
          },
          {
            label: 'Audit readiness',
            description:
              'Controls mapped to your target framework and evidence collected as your systems run, not assembled the week before the audit.',
            bullets: [
              'Control mapping and gap analysis',
              'Evidence collected automatically where possible',
              'A prioritized remediation plan',
            ],
          },
          {
            label: 'Modernizing a legacy core',
            description:
              'New services built around the old system, taking over one function at a time until it can be retired.',
            bullets: [
              'Interfaces defined before anything moves',
              'Old and new running side by side',
              'Each step reversible',
            ],
          },
        ],
      },
      {
        type: 'list',
        id: 'outcomes',
        title: 'Outcomes',
        items: [
          'Systems your team can change without fear of breaking them.',
          'Reports that agree with each other, because they draw on the same governed data.',
          'Releases that are reviewed, tested, traceable and reversible.',
          'Evidence ready when an auditor or a client security review asks for it.',
          'A modernization path funded and delivered in steps, not one large bet.',
          'Code, cloud accounts and documentation you own outright.',
        ],
      },
      {
        type: 'inFocus',
        title: 'In focus',
        services: ['engineering-data'],
      },
    ],
    contactInterest: 'Engineering & data',
  },

  // ---------------------------------------------------------------------------
  // Software engineering
  // ---------------------------------------------------------------------------
  {
    path: `${S}/software-engineering`,
    meta: {
      title: 'Custom software engineering services | YatiSphere',
      description:
        'Core platform builds, APIs and integration, Java and .NET modernization and microservices on AWS, Microsoft Azure or Google Cloud. Code you own.',
    },
    hero: {
      kicker: 'SERVICES / SOFTWARE ENGINEERING',
      h1: 'Software built for the long run',
      subhead:
        'We help you design, build and modernize the systems your business runs on, and keep them easy to change.',
    },
    parents: [WHAT_WE_DO, PILLAR_PARENT],
    name: 'Software engineering',
    blocks: [
      {
        type: 'statement',
        text: 'When the core system can’t take the change, every launch ships with another workaround bolted on. We build software to be changed, not worked around: clear interfaces, automated tests and pipelines from the first sprint, on whichever cloud you run. The architecture and the code are yours.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'APIs and integration',
            body: 'Well-defined APIs and event-driven integration between the systems you already run, with contracts, versioning and monitoring.',
            bullets: [
              'API gateways and message brokers on your cloud of choice',
              'Versioned contracts for every interface',
              'Monitoring on every interface',
            ],
          },
          {
            title: 'Core platform builds',
            body: 'New business platforms built for regulated work: secure by default, tested, and ready to run from the first release.',
            bullets: [
              'Architecture and code you own',
              'Automated tests and CI/CD from the first sprint',
              'Audit logging built in',
            ],
          },
          {
            title: 'Java and .NET modernization',
            body: 'Frameworks, runtimes and hosting upgraded in steps, so the application keeps running while it moves forward.',
            bullets: [
              'An upgrade path to supported versions',
              'Hosting on managed app services or containers',
              'Security findings cleared as part of the work',
            ],
          },
          {
            title: 'Microservices, where they earn their place',
            body: 'Service boundaries drawn along your business domains, and only where independent change is worth the extra moving parts.',
            bullets: [
              'Domain map and service boundaries',
              'Shared pipelines and observability',
              'Teams that own what they ship',
            ],
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Connect what you run',
            description:
              'Replace exports, email and re-keying with integrations that are documented, monitored and owned.',
            bullets: [
              'Inventory of current point-to-point links',
              'APIs or events chosen per interface',
              'Alerts when an integration fails',
            ],
          },
          {
            label: 'Build the next platform',
            description:
              'A new core platform for the product ideas the old one can’t carry, designed with your team and handed over in working order.',
            bullets: [
              'Architecture decision records',
              'Security and audit logging by default',
              'Runbooks and handover for your team',
            ],
          },
          {
            label: 'Get back to supported versions',
            description:
              'Java and .NET applications moved off out-of-support frameworks with builds anyone on the team can reproduce.',
            bullets: [
              'Reproducible builds',
              'Dependency and runtime upgrades in steps',
              'Regression tests before each step',
            ],
          },
        ],
      },
      {
        type: 'steps',
        id: 'how-it-runs',
        title: 'How it runs',
        steps: [
          {
            title: 'Blueprint',
            body: 'A short first engagement: we map the system, the constraints and the change you need, and recommend whether to extend, rebuild or route around it.',
          },
          {
            title: 'Design',
            body: 'Architecture, interfaces and a delivery plan agreed with your team before code is written.',
          },
          {
            title: 'Build',
            body: 'Short iterations with working software at the end of each, tested and deployed through the same pipeline every time.',
          },
          {
            title: 'Hand over',
            body: 'Documentation, runbooks and pairing with your engineers, so the team that runs it can change it.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Source code, architecture and documentation you own',
          'Automated tests and CI/CD pipelines',
          'Integration contracts and monitoring',
          'Runbooks for the team that will operate it',
          'Deployment in your cloud account and your region',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Which languages and clouds do you build on?',
            a: 'Mostly Java and Spring Boot, .NET, TypeScript and Python, on AWS, Microsoft Azure or Google Cloud. We recommend what fits your estate and your team, not what we resell.',
          },
          {
            q: 'Should we rebuild or extend our current system?',
            a: 'It depends on what the system does well today and what it needs to do next. The Blueprint gives you a recommendation with the trade-offs written down before you commit to either.',
          },
          {
            q: 'Who owns the code?',
            a: 'You do, from day one. It lives in your repositories and runs in your cloud accounts.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Legacy modernization', href: `${S}/modernization`, descriptor: 'Move off aging platforms in reversible steps' },
          { label: 'DevOps & platform engineering', href: `${S}/devops-platform-engineering`, descriptor: 'Pipelines and infrastructure as code' },
          { label: 'AI-assisted engineering', href: `${W}/applied-ai/ai-assisted-engineering`, descriptor: 'AI coding tools, with review and guardrails' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['software-engineering', 'engineering-data'] },
    ],
    contactInterest: 'Software engineering',
  },

  // ---------------------------------------------------------------------------
  // Data & analytics
  // ---------------------------------------------------------------------------
  {
    path: `${S}/data-analytics`,
    meta: {
      title: 'Data platform & analytics consulting | YatiSphere',
      description:
        'Governed data platforms on Microsoft Fabric, Databricks, Snowflake, BigQuery or Amazon Redshift, chosen to fit your estate, not a reseller deal.',
    },
    hero: {
      kicker: 'SERVICES / DATA',
      h1: 'Data you can decide on',
      subhead: 'We help you build governed data platforms that give every team the same trusted numbers.',
    },
    parents: [WHAT_WE_DO, PILLAR_PARENT],
    name: 'Data & analytics',
    blocks: [
      {
        type: 'statement',
        text: 'When finance, operations and sales each have their own number, meetings go on reconciling rather than deciding. We build data platforms with definitions agreed once, access controlled at the data layer and lineage you can follow from source to report, on the platform that fits your estate.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Data platform design',
            body: 'A lakehouse or warehouse architecture chosen for your workloads, skills and cloud. We work with Microsoft Fabric, Databricks, Snowflake, Google BigQuery and Amazon Redshift, and recommend one only after we understand your estate.',
            bullets: ['Platform options with trade-offs', 'Storage, compute and cost model', 'Deployed in your account and region'],
          },
          {
            title: 'Data engineering',
            body: 'Pipelines that ingest, clean and model data from the systems you run, tested and monitored like any other production code.',
            bullets: ['Batch and streaming ingestion', 'Data quality checks in the pipeline', 'Pipelines defined as code'],
          },
          {
            title: 'Governance and cataloging',
            body: 'Ownership, classification, access and lineage designed in. We integrate with Microsoft Purview, AWS Lake Formation and Google Cloud Knowledge Catalog (formerly Dataplex).',
            bullets: ['Data ownership and stewardship model', 'Classification and access policies', 'Lineage from source to report'],
          },
          {
            title: 'Analytics and reporting',
            body: 'A shared semantic layer and reports built on it, so a metric means the same thing wherever it appears.',
            bullets: ['Agreed metric definitions', 'Self-service reporting on governed data', 'Data ready for AI and search use cases'],
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Consolidate reporting',
            description: 'Bring scattered spreadsheets and departmental reports onto one governed platform.',
            bullets: ['Inventory of current reports and sources', 'Shared metric definitions', 'Retire duplicate reports once replaced'],
          },
          {
            label: 'Modernize the warehouse',
            description: 'Move an on-premises or aging warehouse to a cloud platform in phases, with old and new reconciled until cutover.',
            bullets: ['Workload assessment and platform choice', 'Parallel run with reconciliation', 'Phased cutover by subject area'],
          },
          {
            label: 'Prepare data for AI',
            description: 'Make the data your AI use cases depend on findable, governed and scoped to what each user is allowed to see.',
            bullets: ['Classification and access rules applied first', 'Curated, documented datasets', 'Lineage for audit and review'],
          },
        ],
      },
      {
        type: 'steps',
        id: 'how-it-runs',
        title: 'How it runs',
        steps: [
          { title: 'Blueprint', body: 'A short first engagement: current sources, reports and pain points mapped, with a recommended platform and the reasons for it.' },
          { title: 'Foundation', body: 'Platform, security, governance and pipelines-as-code set up in your cloud account and region.' },
          { title: 'Deliver by domain', body: 'One subject area at a time, from ingestion to reports, each one useful on its own.' },
          { title: 'Hand over', body: 'Runbooks, data ownership agreed and your team trained to extend the platform.' },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'A data platform in your cloud account and region',
          'Pipelines, models and tests defined as code',
          'A catalog with owners, classifications and lineage',
          'Agreed metric definitions and reports built on them',
          'Documentation and runbooks for your team',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Which data platform do you recommend?',
            a: 'The one that fits your workloads, skills, cloud and budget. Microsoft Fabric, Databricks, Snowflake, Google BigQuery and Amazon Redshift are all options; we recommend what fits, not what we resell.',
          },
          {
            q: 'Can you work with our existing warehouse?',
            a: 'Yes. Often the right first step is to govern and document what you already have before deciding whether anything needs to move.',
          },
          {
            q: 'How do you handle sensitive data?',
            a: 'Data is classified and access policies are applied at the data layer, using the governance tools native to your platform, before it is opened up for reporting or AI.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Enterprise AI platforms', href: `${W}/applied-ai/ai-platforms`, descriptor: 'Put governed data to work with AI' },
          { label: 'Security & compliance', href: `${S}/security-compliance`, descriptor: 'Controls and audit evidence' },
          { label: 'Cloud', href: `${W}/cloud`, descriptor: 'AWS, Microsoft Azure and Google Cloud' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['data-analytics', 'engineering-data'] },
    ],
    contactInterest: 'Data & analytics',
  },

  // ---------------------------------------------------------------------------
  // DevOps & platform engineering
  // ---------------------------------------------------------------------------
  {
    path: `${S}/devops-platform-engineering`,
    meta: {
      title: 'DevOps & platform engineering services | YatiSphere',
      description:
        'CI/CD, Terraform infrastructure as code, Kubernetes on EKS, AKS or GKE, and observability, so every change is reviewed, tested and reversible.',
    },
    hero: {
      kicker: 'SERVICES / DEVOPS',
      h1: 'Release with confidence',
      subhead: 'We help you make every change reviewed, tested, traceable and reversible.',
    },
    parents: [WHAT_WE_DO, PILLAR_PARENT],
    name: 'DevOps & platform engineering',
    blocks: [
      {
        type: 'statement',
        text: 'If a release needs a weekend, a war room and the one person who knows the steps, it is a risk, not a routine. We build delivery pipelines, infrastructure as code and observability that work the same way on AWS, Microsoft Azure or Google Cloud, so shipping a change becomes ordinary.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'CI/CD pipelines',
            body: 'Build, test and deploy pipelines with approvals where your controls require them, on GitHub Actions, Azure DevOps or GitLab CI.',
            bullets: ['Peer review and automated tests on every change', 'Approval gates for production', 'A change history for every release'],
          },
          {
            title: 'Infrastructure as code',
            body: 'Environments defined in Terraform and rebuilt from code, so dev, test and production stay consistent.',
            bullets: ['Reusable modules', 'Policy checks before apply', 'Drift detection'],
          },
          {
            title: 'Container platforms',
            body: 'Kubernetes on Amazon EKS, Azure Kubernetes Service (AKS) or Google Kubernetes Engine (GKE), where containers earn their place.',
            bullets: ['Cluster baselines and access controls', 'Standard deployment patterns', 'Upgrade runbooks'],
          },
          {
            title: 'Observability',
            body: 'Metrics, logs and traces with Prometheus and Grafana or your cloud’s native tools, and alerts tied to what users experience.',
            bullets: ['Service-level dashboards', 'Alerts with owners and runbooks', 'Release markers on every chart'],
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Pipeline modernization',
            description: 'Replace manual or fragile release steps with pipelines your team can read and change.',
            bullets: ['Current release process mapped', 'Pipelines defined as code', 'Rollback tested, not assumed'],
          },
          {
            label: 'Internal developer platform',
            description: 'Paved paths for building, deploying and running services, so teams start from a working, compliant baseline.',
            bullets: ['Service templates', 'Self-service environments', 'Guardrails built into the path'],
          },
          {
            label: 'Audit-ready change control',
            description: 'Change management evidence produced by the pipeline itself rather than by tickets filled in afterward.',
            bullets: ['Who changed what, and who approved it', 'Separation of duties in the pipeline', 'Exportable change history'],
          },
        ],
      },
      {
        type: 'steps',
        id: 'how-it-runs',
        title: 'How it runs',
        steps: [
          { title: 'Blueprint', body: 'A short first engagement: we trace how a change reaches production today and agree what good looks like.' },
          { title: 'Baseline', body: 'Pipelines, infrastructure as code and observability set up for one service end to end.' },
          { title: 'Roll out', body: 'The pattern extended service by service, with your engineers building alongside us.' },
          { title: 'Hand over', body: 'Templates, runbooks and documentation your platform team owns and extends.' },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Pipelines and infrastructure defined as code in your repositories',
          'Tested rollback for every deployment path',
          'Dashboards and alerts with named owners',
          'An exportable change history for audit',
          'Runbooks and templates your team owns',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Which CI/CD tools do you use?',
            a: 'GitHub Actions, Azure DevOps and GitLab CI are the most common. We work with what you have unless there is a clear reason to change.',
          },
          {
            q: 'Do we need Kubernetes?',
            a: 'Not always. Managed app services or serverless are often simpler. We recommend Kubernetes only where the workloads justify the extra moving parts.',
          },
          {
            q: 'Can this work across more than one cloud?',
            a: 'Yes. Terraform and a common pipeline pattern let you run consistent delivery on AWS, Microsoft Azure and Google Cloud.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Landing zones', href: `${W}/cloud/landing-zones`, descriptor: 'A governed foundation for your cloud' },
          { label: 'Software engineering', href: `${S}/software-engineering`, descriptor: 'Core platforms and integration' },
          { label: 'Security & compliance', href: `${S}/security-compliance`, descriptor: 'Controls and audit evidence' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['devops-platform-engineering', 'engineering-data'] },
    ],
    contactInterest: 'DevOps & platform engineering',
  },

  // ---------------------------------------------------------------------------
  // Security & compliance
  // ---------------------------------------------------------------------------
  {
    path: `${S}/security-compliance`,
    meta: {
      title: 'Security architecture & compliance | YatiSphere',
      description:
        'Identity, data protection, detection design and audit evidence for SOC 2, ISO 27001, HIPAA, DORA and more, on AWS, Microsoft Azure or Google Cloud.',
    },
    hero: {
      kicker: 'SERVICES / SECURITY',
      h1: 'Security that stands up to audit',
      subhead: 'We help you design controls and produce the evidence auditors and customers ask for.',
    },
    parents: [WHAT_WE_DO, PILLAR_PARENT],
    name: 'Security & compliance',
    blocks: [
      {
        type: 'statement',
        text: 'An audit or a client security review is coming, the evidence is scattered across teams and the deadline is fixed. We design and build controls into the systems you run, on AWS, Microsoft Azure or Google Cloud, so the answers come with evidence. We don’t run a security operations center: detection is designed by us and run by your team or your managed security provider.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Identity and zero trust',
            body: 'Access decided per request, not per network location. One identity across your estate, with entitlements granted, reviewed and removed on purpose.',
            bullets: [
              'Single sign-on and MFA with Microsoft Entra ID, AWS IAM Identity Center, Google Cloud IAM or Okta',
              'Privileged access with approval and expiry',
              'A joiner-mover-leaver process',
            ],
          },
          {
            title: 'Threat detection and response design',
            body: 'Detection rules and response runbooks so alerts arrive with the context your team, or your managed security provider, needs to act.',
            bullets: [
              'SIEM design on Microsoft Sentinel, Amazon Security Lake with Amazon GuardDuty, or Google Security Operations',
              'Detection rules tuned to your estate',
              'Response runbooks with named owners',
            ],
          },
          {
            title: 'Data protection',
            body: 'Classify what matters, encrypt it in transit and at rest, and control where it is allowed to go.',
            bullets: ['Classification and labeling', 'Data loss prevention policies', 'Key management in your cloud’s key service'],
          },
          {
            title: 'Compliance and audit evidence',
            body: 'Controls mapped to the frameworks you are held to, with the evidence auditors ask for collected as your systems run.',
            bullets: ['Control mapping and gap analysis', 'Evidence collected automatically where possible'],
          },
        ],
      },
      {
        type: 'accordion',
        id: 'audit-readiness',
        kicker: 'AUDIT READINESS',
        title: 'What your auditor asks, and what we build',
        lede: 'Each question an auditor or a client security review will ask, and the control we put in place so the answer comes with evidence.',
        items: [
          {
            title: 'Who can access production, and who approved it?',
            body: 'Roles in your identity provider (such as Microsoft Entra ID, AWS IAM Identity Center or Google Cloud IAM), just-in-time privileged access, and access reviews with an exportable log.',
          },
          {
            title: 'How do you detect and respond to incidents?',
            body: 'Detection rules and response runbooks in your SIEM (such as Microsoft Sentinel, Amazon Security Lake with Amazon GuardDuty, or Google Security Operations), run by your team or your managed security provider.',
          },
          {
            title: 'How is sensitive data classified, protected and encrypted?',
            body: 'Classification and labeling, data loss prevention policies, and encryption keys held in your cloud’s key management service.',
          },
          {
            title: 'How do changes reach production, and who signed them off?',
            body: 'Infrastructure and policy as code, with peer review, pipeline approvals and a change history for every release.',
          },
          {
            title: 'How do you manage risk from third parties and AI models?',
            body: 'An inventory of suppliers and models in use, private access to AI endpoints, and logging of who called which model with what data.',
          },
          {
            title: 'Can you show the evidence for the last twelve months?',
            body: 'Logs and control evidence retained to your policy in immutable storage, exportable on request.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Audit preparation',
            description: 'Get ready for a first or renewal audit against your target framework, with gaps closed in priority order.',
            bullets: ['Control mapping and gap analysis', 'Evidence collection designed in', 'Readiness for the auditor who certifies'],
          },
          {
            label: 'Client security reviews',
            description: 'Answer long security questionnaires from your customers with evidence rather than assurances.',
            bullets: ['Reusable answer library', 'Evidence linked to each control', 'Gaps flagged before the deadline'],
          },
          {
            label: 'AI security',
            description: 'The same identity, data protection and logging rules applied to the AI models your teams are building on, designed in from the start.',
            bullets: [
              'Model endpoints behind private networking and your identity provider',
              'Controls against prompt injection and data leakage',
              'Model access logging: who called which model, with what data',
              'Retrieval scoped to what each user is already allowed to see',
            ],
          },
        ],
      },
      {
        type: 'cards',
        id: 'frameworks',
        kicker: 'COMPLIANCE FRAMEWORKS',
        title: 'Frameworks we design controls against',
        lede: 'We help you design and evidence controls against these standards and regulations. We don’t certify or audit, and listing a framework here is not a claim of certification.',
        columns: 4,
        cards: [
          { title: 'SOC 2', body: 'Trust services criteria for service organizations' },
          { title: 'ISO/IEC 27001', body: 'Information security management' },
          { title: 'HIPAA', body: 'US healthcare data protection' },
          { title: 'PCI DSS', body: 'Payment card data security' },
          { title: 'GDPR and UK GDPR', body: 'EU and UK data protection' },
          { title: 'DORA', body: 'EU digital operational resilience for financial entities' },
          { title: 'NIS2', body: 'EU cybersecurity rules for essential and important entities' },
          { title: 'UK Cyber Essentials', body: 'UK baseline technical controls' },
          { title: 'UAE IA standards', body: 'UAE information assurance standards' },
          { title: 'ISO/IEC 42001', body: 'Management systems for AI' },
        ],
      },
      {
        type: 'steps',
        id: 'how-it-runs',
        title: 'How it runs',
        steps: [
          { title: 'Review', body: 'A security architecture review of your current estate against your target framework.' },
          { title: 'Prioritize', body: 'Gaps ranked by risk and by what your auditor or customers will ask about first.' },
          { title: 'Build', body: 'Controls built into your identity, cloud, pipelines and data platform, with evidence collection designed in.' },
          { title: 'Hand over', body: 'Runbooks and evidence exports for your team or your managed security provider to operate.' },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Controls mapped to your target framework',
          'Evidence collected as your systems run',
          'Detection rules and response runbooks with named owners',
          'An access model with reviews and an exportable log',
          'Documentation ready for your auditor',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Do you run a security operations center?',
            a: 'No. We design detection and response and build it into your estate. It is run by your team or your managed security provider.',
          },
          {
            q: 'Can you certify us against SOC 2 or ISO/IEC 27001?',
            a: 'No. We help you design and evidence the controls, and prepare you for the independent auditor who certifies.',
          },
          {
            q: 'Which clouds and security tools do you work with?',
            a: 'AWS, Microsoft Azure and Google Cloud, and their native identity, SIEM and data protection services, alongside tools such as Okta, HashiCorp Vault and Splunk where you already run them.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'AI governance', href: `${W}/applied-ai/ai-governance`, descriptor: 'Policies and controls for AI use' },
          { label: 'DevOps & platform engineering', href: `${S}/devops-platform-engineering`, descriptor: 'Audit-ready change control' },
          { label: 'Landing zones', href: `${W}/cloud/landing-zones`, descriptor: 'A governed foundation for your cloud' },
          { label: 'Trust center', href: '/who-we-are/trust', descriptor: 'How we handle your data' },
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['security-compliance', 'engineering-data'] },
    ],
    contactInterest: 'Security & compliance',
  },

  // ---------------------------------------------------------------------------
  // Legacy modernization
  // ---------------------------------------------------------------------------
  {
    path: `${S}/modernization`,
    meta: {
      title: 'Legacy application modernization | YatiSphere',
      description:
        'Architecture reviews, legacy re-platforming and costed roadmaps to AWS, Microsoft Azure or Google Cloud, in reversible steps while the business runs.',
    },
    hero: {
      kicker: 'SERVICES / MODERNIZATION',
      h1: 'Modernize without stopping',
      subhead: 'We help you move off aging platforms in reversible steps while the business keeps running.',
    },
    parents: [WHAT_WE_DO, PILLAR_PARENT],
    name: 'Legacy modernization',
    blocks: [
      {
        type: 'statement',
        text: 'The core system works, mostly. The people who understood it have moved on, and every change feels like a risk. We modernize the estate you have, on a roadmap you can fund, and stay through delivery so the plan is one we have to live with too. Our architects have led modernization programs at global investment banks, Big Four consultancies and national e-government platforms.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Architecture review',
            body: 'An independent read on your current estate: what is load-bearing, what is holding you back, and what it would take to change it.',
            bullets: ['Current-state assessment and risk review', 'Options with trade-offs, not a single answer'],
          },
          {
            title: 'Legacy re-platforming',
            body: 'Moving systems off aging platforms without stopping the business, in steps that are each reversible and useful on their own.',
            bullets: ['Portfolio triage: retain, re-platform, rebuild, retire', 'Old and new designed to run side by side', 'Cutover runbooks with tested rollback'],
          },
          {
            title: 'Costed roadmaps',
            body: 'A sequenced plan with the business case to fund it, built around your constraints rather than a vendor’s preferred platform.',
            bullets: ['Initiatives sequenced against dependencies', 'Cost and effort estimates'],
          },
          {
            title: 'Target platform choice',
            body: 'AWS, Microsoft Azure, Google Cloud or on-premises, chosen for your workloads, skills and regulatory needs. We recommend what fits, not what we resell.',
            bullets: ['Workload-by-workload assessment', 'Data residency in the region you choose'],
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Strangle the aging core',
            description: 'When every change has to route through one aging core platform, we build new services around it and take over one function at a time.',
            bullets: ['Interfaces defined before anything moves', 'Old and new running side by side', 'Each step reversible'],
          },
          {
            label: 'Replace the manual joins',
            description: 'When systems built up over years are joined by spreadsheets, we add an integration layer and retire the manual joins first.',
            bullets: ['Integrations ranked by risk and effort', 'Systems retired once nothing depends on them'],
          },
          {
            label: 'Break up the monolith',
            description: 'When one codebase slows every team down, we decompose along business domains, starting where change is most frequent.',
            bullets: ['Domain map and service boundaries', 'Shared CI/CD from the first service', 'Teams that own what they ship'],
          },
        ],
      },
      {
        type: 'steps',
        id: 'how-it-runs',
        title: 'How it runs',
        steps: [
          { title: 'Assess', body: 'Architecture and estate review, stakeholder interviews and a prioritized list of findings.' },
          { title: 'Define', body: 'A target architecture on the platform that fits, a sequenced roadmap and the business case to fund it.' },
          { title: 'Deliver', body: 'Re-platforming in reversible steps. Adoption is part of delivery: runbooks, handover and training for the team that will run it.' },
          { title: 'Improve', body: 'Review technical debt and refine the roadmap as the business changes.' },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'A map of what your estate actually does and what depends on it',
          'A target architecture and a sequenced, costed roadmap',
          'Re-platformed systems with tested rollback at each step',
          'Runbooks and training for the team that will run them',
          'Code and cloud accounts you own',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Do we have to rebuild everything?',
            a: 'Rarely. Most estates are a mix: some systems are retained, some re-platformed, a few rebuilt and some retired. The assessment tells you which is which.',
          },
          {
            q: 'How do you keep the business running during the move?',
            a: 'Old and new run side by side, each step is reversible, and every cutover has a runbook with a tested rollback.',
          },
          {
            q: 'Our last transformation program stalled. What is different?',
            a: 'Smaller steps that are each useful on their own, a roadmap you can fund in stages, and the same senior team from assessment through delivery.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Modernization roadmaps', href: `${W}/consulting/modernization-roadmaps`, descriptor: 'Advisory before you commit' },
          { label: 'Cloud migration', href: `${W}/cloud/migration`, descriptor: 'Move workloads to AWS, Microsoft Azure or Google Cloud' },
          { label: 'Software engineering', href: `${S}/software-engineering`, descriptor: 'Java and .NET modernization' },
          { label: 'Blueprint', href: '/blueprint', descriptor: 'A short first engagement' },
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['modernization', 'engineering-data'] },
    ],
    contactInterest: 'Legacy modernization',
  },
]
