import type { ContentPage } from './types'

/**
 * Cloud pillar, provider pages and capability pages.
 * Cloud-neutral: AWS, Microsoft Azure and Google Cloud are treated as equals.
 * Vendor names are used nominatively only.
 */

const WHAT_WE_DO = { name: 'What we do', path: '/what-we-do' }
const CLOUD = { name: 'Cloud', path: '/what-we-do/cloud' }


const CAPABILITY_LINKS = {
  migration: {
    label: 'Cloud migration',
    href: '/what-we-do/cloud/migration',
    descriptor: 'Move workloads in planned waves, with tested rollback.',
  },
  landingZones: {
    label: 'Landing zones',
    href: '/what-we-do/cloud/landing-zones',
    descriptor: 'A governed foundation that new teams start on.',
  },
  finops: {
    label: 'FinOps',
    href: '/what-we-do/cloud/finops',
    descriptor: 'Spend with an owner, a budget and a reason.',
  },
  managedOps: {
    label: 'Managed operations',
    href: '/what-we-do/cloud/managed-operations',
    descriptor: 'Run, monitor, patch and improve your platform.',
  },
  resilience: {
    label: 'Resilience & DR',
    href: '/what-we-do/cloud/resilience',
    descriptor: 'Recovery targets you set, designed and tested.',
  },
}

const CLAUDE_LINK = {
  label: 'Claude practice',
  href: '/what-we-do/applied-ai/claude',
  descriptor: 'Build with Claude through your own cloud account.',
}

const BLUEPRINT_LINK = {
  label: 'Blueprint',
  href: '/blueprint',
  descriptor: 'A short first engagement that ends in a plan you can act on.',
}

export const pages: ContentPage[] = [
  // ───────────────────────────── Pillar ─────────────────────────────
  {
    path: '/what-we-do/cloud',
    name: 'Cloud',
    parents: [WHAT_WE_DO],
    meta: {
      title: 'Cloud consulting: AWS, Azure, GCP | YatiSphere',
      description:
        'Cloud consulting across AWS, Microsoft Azure and Google Cloud: landing zones, migration, FinOps, managed operations and disaster recovery.',
    },
    hero: {
      kicker: 'WHAT WE DO / CLOUD',
      h1: 'Every cloud, run as one',
      subhead:
        'We help you design, migrate and operate secure platforms on AWS, Microsoft Azure and Google Cloud, with cost and resilience under control.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Most enterprises run on more than one cloud, by choice or by history. We advise on, build and run platforms on AWS, Microsoft Azure and Google Cloud, and we recommend the cloud that fits, not the one we resell. One accountable senior team works from the first review to day-to-day running, and your code, your cloud and your region are yours from day one.',
      },
      {
        type: 'cloudChooser',
        id: 'choose-your-cloud',
        title: 'Choose your cloud',
        lede: 'The same standards for governance, cost and recovery, applied in each provider’s own way.',
      },
      {
        type: 'cards',
        id: 'capabilities',
        title: 'Our capabilities',
        columns: 3,
        cards: [
          {
            title: 'Migration',
            body: 'Workloads still sit in a data center you want to leave, and every plan stalls on dependencies nobody has mapped. We map them first, then move in planned waves with tested rollback.',
            href: '/what-we-do/cloud/migration',
          },
          {
            title: 'Landing zones',
            body: 'Accounts, subscriptions or projects created by hand drift apart fast. We define identity, networking and policy as code, so new teams start compliant.',
            href: '/what-we-do/cloud/landing-zones',
          },
          {
            title: 'FinOps',
            body: 'Spend grows every month and the bill arrives after the money is gone. We give every cost an owner, a budget and a reason.',
            href: '/what-we-do/cloud/finops',
          },
          {
            title: 'Managed operations',
            body: 'A platform nobody owns degrades quietly. We run, monitor, patch and improve it during agreed hours, alongside your team.',
            href: '/what-we-do/cloud/managed-operations',
          },
          {
            title: 'Resilience & DR',
            body: 'Backups that have never been restored are a hope, not a plan. We design recovery to the targets you set, then test it with your team.',
            href: '/what-we-do/cloud/resilience',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Exit the data center',
            description:
              'A move off on-premises hardware planned around your contracts, dependencies and risk appetite, not a single big-bang weekend.',
            bullets: [
              'Discovery and dependency mapping',
              'Wave plan with a runbook for each workload',
              'Cutover planned for minimal disruption, with tested rollback',
            ],
          },
          {
            label: 'Govern a sprawling estate',
            description:
              'An estate that grew faster than its controls, brought under one set of guardrails without stopping delivery.',
            bullets: [
              'Landing zone defined in Terraform or the provider’s native tooling',
              'Policy guardrails and role-based access',
              'Access reviews and audit logging switched on',
            ],
          },
          {
            label: 'Get spend under control',
            description:
              'Cost reported by team and product, with commitments and rightsizing based on what you actually run.',
            bullets: [
              'Tagging and ownership standards',
              'Budgets and alerts that flag overspend early',
              'Commitment and rightsizing plan',
            ],
          },
          {
            label: 'Run more than one cloud',
            description:
              'Consistent identity, networking, cost reporting and recovery across AWS, Microsoft Azure and Google Cloud, so a second cloud does not mean a second set of rules.',
            bullets: [
              'Shared standards, implemented natively on each cloud',
              'One view of cost across providers',
              'A single run guide for your operations team',
            ],
          },
          {
            label: 'Prepare for AI workloads',
            description:
              'A governed place to run models and data close to your existing platform, with access, logging and cost visible from the start.',
            bullets: [
              'Private networking and identity for model access',
              'Data kept in the region you choose',
              'Usage and cost reported per team',
            ],
          },
        ],
      },
      {
        type: 'list',
        id: 'outcomes',
        title: 'Outcomes',
        items: [
          'Every cloud resource has an owner, a budget and a reason to exist.',
          'New teams start on a governed foundation instead of building their own.',
          'Migrations move in planned waves, each with a tested way back.',
          'Recovery targets are agreed, written down and tested.',
          'Your engineers can run the platform without us, and have the run guide to prove it.',
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud'] },
    ],
    contactInterest: 'Cloud',
  },

  // ───────────────────────────── AWS ─────────────────────────────
  {
    path: '/what-we-do/cloud/aws',
    name: 'AWS',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'AWS consulting and landing zones | YatiSphere',
      description:
        'AWS consulting: landing zones with AWS Control Tower, migration, data and AI with Amazon Bedrock, FinOps and managed operations.',
    },
    hero: {
      kicker: 'CLOUD / AWS',
      h1: 'Built right on AWS',
      subhead: 'We help you build governed, cost-efficient platforms and AI workloads on AWS.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'AWS gives you a lot of building blocks and very few defaults. We help you set the account structure, guardrails, cost controls and recovery design early, so growth on AWS stays governed. We recommend AWS when it fits your workloads, and say so when it does not.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do on AWS',
        columns: 3,
        cards: [
          {
            title: 'Landing zones and governance',
            body: 'A multi-account structure set up with AWS Control Tower and AWS Organizations, with service control policies and centralized logging from the start.',
            href: '/what-we-do/cloud/landing-zones',
          },
          {
            title: 'Migration and modernization',
            body: 'Servers and applications moved with AWS Application Migration Service and AWS Transform, in waves planned around your dependencies.',
            href: '/what-we-do/cloud/migration',
          },
          {
            title: 'Data and AI on AWS',
            body: 'Data platforms on Amazon S3 and Amazon Redshift, and AI workloads on Amazon Bedrock and Amazon SageMaker, with access and cost visible per team.',
          },
          {
            title: 'FinOps',
            body: 'Spend broken down with AWS Cost Explorer and AWS Budgets, with Savings Plans and Reserved Instances sized to what you actually run.',
            href: '/what-we-do/cloud/finops',
          },
          {
            title: 'Managed operations',
            body: 'Monitoring with Amazon CloudWatch, patching with AWS Systems Manager, and Amazon EKS clusters kept current during agreed hours.',
            href: '/what-we-do/cloud/managed-operations',
          },
        ],
      },
      {
        type: 'statement',
        id: 'ai',
        title: 'AI on AWS',
        text: 'Amazon Bedrock gives you managed access to foundation models inside your AWS account, and Claude is available there, so you can build with it under the identity, networking and billing you already have.',
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CLAUDE_LINK,
          CAPABILITY_LINKS.landingZones,
          CAPABILITY_LINKS.migration,
          CAPABILITY_LINKS.finops,
          CAPABILITY_LINKS.managedOps,
          CAPABILITY_LINKS.resilience,
        ],
      },
      { type: 'inFocus', title: 'In focus', clouds: ['aws'] },
    ],
    contactInterest: 'Cloud: AWS',
  },

  // ───────────────────────────── Azure ─────────────────────────────
  {
    path: '/what-we-do/cloud/microsoft-azure',
    name: 'Microsoft Azure',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Azure consulting and landing zones | YatiSphere',
      description:
        'Microsoft Azure consulting: Azure landing zones and Azure Policy, migration, data and AI with Microsoft Foundry, FinOps and managed operations.',
    },
    hero: {
      kicker: 'CLOUD / MICROSOFT AZURE',
      h1: 'Built right on Azure',
      subhead:
        'We help you build governed, cost-efficient platforms and AI workloads on Microsoft Azure.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Azure often arrives with Microsoft 365 and Entra ID already in place, and subscriptions multiply quickly after that. We help you set the management group structure, policy, cost controls and recovery design early, so growth on Azure stays governed. We recommend Azure when it fits your workloads, and say so when it does not.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do on Azure',
        columns: 3,
        cards: [
          {
            title: 'Landing zones and governance',
            body: 'Azure landing zones built on management groups and Azure Policy, with role-based access through Microsoft Entra ID, defined in Terraform or Bicep.',
            href: '/what-we-do/cloud/landing-zones',
          },
          {
            title: 'Migration and modernization',
            body: 'Discovery and assessment with Azure Migrate, then servers, databases and applications moved in waves planned around your dependencies.',
            href: '/what-we-do/cloud/migration',
          },
          {
            title: 'Data and AI on Azure',
            body: 'Data platforms on Microsoft Fabric and Azure Databricks, and AI workloads on Microsoft Foundry, with access and cost visible per team.',
          },
          {
            title: 'FinOps',
            body: 'Spend broken down with Microsoft Cost Management, with Azure Reservations and Azure savings plan for compute sized to what you actually run.',
            href: '/what-we-do/cloud/finops',
          },
          {
            title: 'Managed operations',
            body: 'Monitoring with Azure Monitor, patching with Azure Update Manager, and Azure Kubernetes Service clusters kept current during agreed hours.',
            href: '/what-we-do/cloud/managed-operations',
          },
        ],
      },
      {
        type: 'statement',
        id: 'ai',
        title: 'AI on Azure',
        text: 'Microsoft Foundry gives you managed access to models inside your Azure subscription, and Claude is available there, so you can build with it under the identity, networking and billing you already have.',
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CLAUDE_LINK,
          CAPABILITY_LINKS.landingZones,
          CAPABILITY_LINKS.migration,
          CAPABILITY_LINKS.finops,
          CAPABILITY_LINKS.managedOps,
          CAPABILITY_LINKS.resilience,
        ],
      },
      { type: 'inFocus', title: 'In focus', clouds: ['microsoft-azure'] },
    ],
    contactInterest: 'Cloud: Azure',
  },

  // ───────────────────────────── Google Cloud ─────────────────────────────
  {
    path: '/what-we-do/cloud/google-cloud',
    name: 'Google Cloud',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Google Cloud consulting services | YatiSphere',
      description:
        'Google Cloud consulting: landing zones with Organization Policy, migration, data and AI with BigQuery and Vertex AI, FinOps and managed operations.',
    },
    hero: {
      kicker: 'CLOUD / GOOGLE CLOUD',
      h1: 'Built right on Google Cloud',
      subhead:
        'We help you build governed, cost-efficient platforms and AI workloads on Google Cloud.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Google Cloud often starts with a data or AI team and spreads from there, one project at a time. We help you set the resource hierarchy, guardrails, cost controls and recovery design early, so growth on Google Cloud stays governed. We recommend Google Cloud when it fits your workloads, and say so when it does not.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do on Google Cloud',
        columns: 3,
        cards: [
          {
            title: 'Landing zones and governance',
            body: 'A resource hierarchy of organization, folders and projects, with Organization Policy constraints and IAM set centrally, defined in Terraform.',
            href: '/what-we-do/cloud/landing-zones',
          },
          {
            title: 'Migration and modernization',
            body: 'Virtual machines moved with Migrate to Virtual Machines, and applications re-platformed onto Google Kubernetes Engine or Cloud Run where that pays off.',
            href: '/what-we-do/cloud/migration',
          },
          {
            title: 'Data and AI on Google Cloud',
            body: 'Data platforms on BigQuery, and AI workloads on Vertex AI, with access and cost visible per team.',
          },
          {
            title: 'FinOps',
            body: 'Spend broken down with Cloud Billing reports and budgets, with committed use discounts sized to what you actually run.',
            href: '/what-we-do/cloud/finops',
          },
          {
            title: 'Managed operations',
            body: 'Monitoring and logging with Google Cloud Observability, and Google Kubernetes Engine clusters and VM patching kept current during agreed hours.',
            href: '/what-we-do/cloud/managed-operations',
          },
        ],
      },
      {
        type: 'statement',
        id: 'ai',
        title: 'AI on Google Cloud',
        text: 'Google Cloud Vertex AI gives you managed access to models inside your Google Cloud project, and Claude is available there, so you can build with it under the identity, networking and billing you already have.',
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CLAUDE_LINK,
          CAPABILITY_LINKS.landingZones,
          CAPABILITY_LINKS.migration,
          CAPABILITY_LINKS.finops,
          CAPABILITY_LINKS.managedOps,
          CAPABILITY_LINKS.resilience,
        ],
      },
      { type: 'inFocus', title: 'In focus', clouds: ['google-cloud'] },
    ],
    contactInterest: 'Cloud: Google Cloud',
  },

  // ───────────────────────────── Migration ─────────────────────────────
  {
    path: '/what-we-do/cloud/migration',
    name: 'Migration',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Cloud migration services | YatiSphere',
      description:
        'Cloud migration services to AWS, Microsoft Azure or Google Cloud: dependency mapping, wave planning, and cutover with tested rollback.',
    },
    hero: {
      kicker: 'CLOUD / MIGRATION',
      h1: 'Migrations that stay on plan',
      subhead:
        'We move workloads to AWS, Microsoft Azure or Google Cloud in planned waves, with dependencies mapped first and a tested way back.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Most migrations slip for the same reason: a dependency nobody knew about surfaces on cutover night. We map what talks to what before anything moves, choose the right path for each workload, and plan every cutover for minimal disruption, with tested rollback.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Discovery and dependency mapping',
            body: 'Plans stall on systems nobody has mapped. We inventory servers, databases and integrations, and record who owns each one.',
          },
          {
            title: 'Target platform choice',
            body: 'The right cloud depends on your workloads, skills and contracts. We recommend the one that fits, and the landing zone it will run on.',
          },
          {
            title: 'Wave planning and runbooks',
            body: 'Big-bang moves concentrate risk. We group workloads into waves, each with a runbook, an owner and a rollback step.',
          },
          {
            title: 'Rehost, re-platform or rebuild',
            body: 'Not every workload deserves a rewrite. We decide case by case whether to move as-is, swap in managed services, or rebuild.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Data center exit',
            description:
              'A move off on-premises hardware timed to your lease and support contracts, with the riskiest systems moved when the team has the most practice.',
            bullets: [
              'Inventory and dependency map',
              'Wave plan aligned to contract dates',
              'Decommissioning checklist for each source system',
            ],
          },
          {
            label: 'Cloud-to-cloud moves',
            description:
              'Moving between AWS, Microsoft Azure and Google Cloud, or consolidating onto one, with data transfer and identity planned up front.',
            bullets: [
              'Service-by-service mapping between providers',
              'Data transfer plan and cutover window',
              'Identity and access rebuilt on the target',
            ],
          },
          {
            label: 'Application modernization',
            description:
              'Applications moved onto containers or managed databases where that lowers running cost or effort, rather than lifting every server as-is.',
            bullets: [
              'Containers on managed Kubernetes or serverless runtimes',
              'Managed databases in place of self-run servers',
              'Pipelines and infrastructure as code for each app',
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
            title: 'Assess',
            body: 'We review workloads, dependencies, spend and current controls, and agree what matters most.',
          },
          {
            title: 'Plan',
            body: 'We choose the target platform and path for each workload, and group them into waves with runbooks.',
          },
          {
            title: 'Move',
            body: 'Each wave is rehearsed, then cut over, planned for minimal disruption, with tested rollback.',
          },
          {
            title: 'Settle',
            body: 'We tune cost and performance after each wave, then run the platform or hand over with a run guide.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'A dependency map and inventory with an owner for each system',
          'A wave plan, and a runbook for each workload',
          'A tested rollback for every cutover',
          'A landing zone ready before the first workload arrives',
          'A run guide your team can operate from',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Which cloud should we migrate to?',
            a: 'It depends on your workloads, your team’s skills, your existing licensing and contracts, and where your data must live. We work on AWS, Microsoft Azure and Google Cloud, and recommend the one that fits rather than one we resell.',
          },
          {
            q: 'Will there be downtime?',
            a: 'Some workloads need a short cutover window. We plan each cutover for minimal disruption, agree the window with you in advance, and rehearse a tested rollback before it happens.',
          },
          {
            q: 'Do we have to modernize everything as we move?',
            a: 'No. Many workloads are best moved as-is and improved later. We pick the path per workload, based on cost, risk and how long you expect to keep it.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CAPABILITY_LINKS.landingZones,
          CAPABILITY_LINKS.resilience,
          CAPABILITY_LINKS.finops,
          BLUEPRINT_LINK,
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud', 'migration'] },
    ],
    contactInterest: 'Cloud',
  },

  // ───────────────────────────── Landing zones ─────────────────────────────
  {
    path: '/what-we-do/cloud/landing-zones',
    name: 'Landing zones',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Landing zone consulting: AWS, Azure | YatiSphere',
      description:
        'Landing zone consulting for AWS, Microsoft Azure and Google Cloud: identity, networking, policy and logging defined as code, so new teams start compliant.',
    },
    hero: {
      kicker: 'CLOUD / LANDING ZONES',
      h1: 'A foundation teams start on',
      subhead:
        'We build governed landing zones on AWS, Microsoft Azure and Google Cloud, with identity, networking and policy defined as code.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'When accounts, subscriptions or projects are created by hand, networking drifts, access goes unreviewed and the next audit finds it before you do. A landing zone fixes that once: a structure, guardrails and logging that every new workload inherits.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Structure and identity',
            body: 'Without a clear structure, permissions sprawl. We set up AWS Organizations, Azure management groups or the Google Cloud resource hierarchy, with access tied to your identity provider.',
          },
          {
            title: 'Policy guardrails',
            body: 'Rules written in a wiki are not enforced. We express them as service control policies, Azure Policy or Organization Policy constraints, so the platform blocks what is not allowed.',
          },
          {
            title: 'Networking',
            body: 'Inconsistent networks are hard to secure and harder to connect. We design hub-and-spoke or shared networks, private connectivity and DNS once, for every team.',
          },
          {
            title: 'Logging and evidence',
            body: 'Auditors want to see controls, not hear about them. We centralize audit logs and configuration history so evidence is collected as the platform runs.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'New landing zone',
            description:
              'A foundation built before the first workloads arrive, sized to the teams and environments you expect.',
            bullets: [
              'Structure, identity and networking design',
              'Built in Terraform or the provider’s native tooling',
              'A vending process for new accounts, subscriptions or projects',
            ],
          },
          {
            label: 'Retrofit an existing estate',
            description:
              'Guardrails brought into an estate that grew without them, in stages, so delivery keeps moving.',
            bullets: [
              'Gap review against your target controls',
              'Policies introduced in audit mode first, then enforced',
              'Workloads moved into the new structure in batches',
            ],
          },
          {
            label: 'Regulated workloads',
            description:
              'Controls for data residency, private networking and access, with evidence available when an auditor asks.',
            bullets: [
              'Data residency enforced by policy',
              'Private endpoints for sensitive services',
              'Access reviews and audit logging',
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
            title: 'Agree the rules',
            body: 'We work with your security, platform and finance teams to agree structure, controls and naming.',
          },
          {
            title: 'Design',
            body: 'We document identity, networking, policy and logging, and review the design with you before building.',
          },
          {
            title: 'Build as code',
            body: 'The landing zone is built in version control, so every change is reviewed and repeatable.',
          },
          {
            title: 'Onboard and hand over',
            body: 'We onboard the first workloads with your team, then run it or hand over with a run guide.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'A landing zone defined in your own repository',
          'Policy guardrails and role-based access, documented',
          'Network and identity design you can explain to an auditor',
          'Centralized audit logging',
          'A repeatable way to create new accounts, subscriptions or projects',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Do you use the providers’ own landing zone tooling?',
            a: 'Where it fits, yes, for example AWS Control Tower or Azure landing zones. We use Terraform when you want one approach across clouds, and we explain the trade-off before we start.',
          },
          {
            q: 'We already have workloads running. Is it too late?',
            a: 'No. We introduce guardrails in audit mode first, show you what would break, then enforce them and move workloads across in batches.',
          },
          {
            q: 'Can one landing zone cover more than one cloud?',
            a: 'Each cloud needs its own, built natively. We apply the same standards for identity, networking, tagging and logging to each, so they behave consistently.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CAPABILITY_LINKS.migration,
          CAPABILITY_LINKS.finops,
          CAPABILITY_LINKS.managedOps,
          BLUEPRINT_LINK,
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud', 'landing-zones'] },
    ],
    contactInterest: 'Cloud',
  },

  // ───────────────────────────── FinOps ─────────────────────────────
  {
    path: '/what-we-do/cloud/finops',
    name: 'FinOps',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'FinOps and cloud cost optimization | YatiSphere',
      description:
        'FinOps and cloud cost optimization for AWS, Microsoft Azure and Google Cloud: tagging, budgets, rightsizing and commitments, starting with a cost review.',
    },
    hero: {
      kicker: 'CLOUD / FINOPS',
      h1: 'Cloud spend with an owner',
      subhead:
        'We make cloud cost visible by team and product, and cut what you do not need, on AWS, Microsoft Azure and Google Cloud.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Cloud spend grows every month, half the resources have no clear owner, and the bill arrives after the money is gone. FinOps fixes the habits behind that: every cost tagged to an owner, budgets that warn early, and commitments bought on evidence.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Tagging and ownership',
            body: 'Untagged spend cannot be managed. We set tagging standards, enforce them by policy, and report cost by team and product.',
          },
          {
            title: 'Rightsizing and cleanup',
            body: 'Oversized machines and forgotten resources quietly add up. We find them and agree with owners what to resize, schedule or remove.',
          },
          {
            title: 'Commitments',
            body: 'Reservations, savings plans and committed use discounts only pay off if they match real usage. We size them to what you actually run.',
          },
          {
            title: 'Budgets and alerts',
            body: 'Finding overspend at month end is too late. We set budgets and alerts so the owning team hears about it first.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Cost review',
            description:
              'A review of your bill and estate, ending in a prioritized list of savings actions.',
            bullets: [
              'Spend by account, subscription or project, and team',
              'Commitment, rightsizing and idle-resource findings',
              'An estimated savings range for each action',
            ],
          },
          {
            label: 'FinOps practice setup',
            description:
              'The reporting, policies and routines that keep cost under control after the first round of savings.',
            bullets: [
              'Tagging standard enforced by policy',
              'Cost reports by team and product',
              'A monthly review routine with owners',
            ],
          },
          {
            label: 'Multi-cloud cost view',
            description:
              'One way of reporting spend across AWS, Microsoft Azure and Google Cloud, using each provider’s billing exports.',
            bullets: [
              'Billing exports collected in one place',
              'Shared tagging and allocation rules',
              'A single report for finance and engineering',
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
            title: 'See',
            body: 'We pull billing data and inventory, and break spend down by account, subscription or project, and by team.',
          },
          {
            title: 'Find',
            body: 'We identify rightsizing, cleanup and commitment opportunities, and estimate the savings range for each.',
          },
          {
            title: 'Act',
            body: 'We agree actions with owners, make the changes, and buy commitments only where usage supports them.',
          },
          {
            title: 'Keep it there',
            body: 'Tagging, budgets and a monthly review keep spend from drifting back.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Cost reported by team and product',
          'A savings report with prioritized actions',
          'A commitment plan based on your real usage',
          'Budgets and alerts routed to named owners',
          'A tagging standard enforced by policy',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'What access do you need for the cost review?',
            a: 'Read-only access to billing data and resource inventory. We do not change anything during the review unless you ask us to.',
          },
          {
            q: 'How much will we save?',
            a: 'We will not guess before we have seen your estate. The review gives an estimated savings range for each action, worked out from your own data.',
          },
          {
            q: 'Do you resell cloud or take a share of savings?',
            a: 'No. We do not resell cloud capacity, so our advice is not tied to how much you spend or with whom.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CAPABILITY_LINKS.landingZones,
          CAPABILITY_LINKS.managedOps,
          CAPABILITY_LINKS.migration,
          BLUEPRINT_LINK,
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud', 'finops'] },
    ],
    contactInterest: 'Cloud',
  },

  // ───────────────────────────── Managed operations ─────────────────────────────
  {
    path: '/what-we-do/cloud/managed-operations',
    name: 'Managed operations',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Managed cloud operations services | YatiSphere',
      description:
        'Managed cloud operations for AWS, Microsoft Azure and Google Cloud: run, monitor, patch and improve your platform during agreed hours.',
    },
    hero: {
      kicker: 'CLOUD / MANAGED OPERATIONS',
      h1: 'A platform someone owns',
      subhead:
        'We run, monitor, patch and improve your platform on AWS, Microsoft Azure or Google Cloud during agreed hours.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'A platform nobody owns degrades quietly: patches slip, alerts go to a shared inbox, and costs creep. We take on the day-to-day running during hours we agree with you. Out of hours, your team or your existing provider stays on call, with our runbooks to work from.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Monitoring and alerting',
            body: 'Alerts that go to everyone go to no one. We set up metrics, logs and alerts routed to a named owner, with a runbook for each.',
          },
          {
            title: 'Patching and upgrades',
            body: 'Unpatched systems and old Kubernetes versions pile up risk. We patch and upgrade on an agreed schedule, with change records.',
          },
          {
            title: 'Cost and capacity',
            body: 'Platforms drift out of shape as usage changes. We review cost and capacity each month and adjust before it becomes a problem.',
          },
          {
            title: 'Continuous improvement',
            body: 'Running a platform should make it better over time. We fix recurring issues at the root and keep infrastructure as code current.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Run alongside your team',
            description:
              'We share operations with your engineers, taking agreed areas so your team can focus on product work.',
            bullets: [
              'Responsibilities agreed per system',
              'Shared runbooks and on-call handoffs',
              'Monthly service review',
            ],
          },
          {
            label: 'Run it for you',
            description:
              'We operate the platform during agreed hours, with your team or your existing provider covering out-of-hours.',
            bullets: [
              'Monitoring, patching and backups checked',
              'Incident response during agreed hours',
              'Clear escalation path for out-of-hours',
            ],
          },
          {
            label: 'Stabilize, then hand over',
            description:
              'A fixed period to bring a neglected platform up to standard, then a handover to your own team.',
            bullets: [
              'Backlog of patches and upgrades cleared',
              'Alerts and runbooks put in place',
              'Handover with a run guide and training',
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
            title: 'Take stock',
            body: 'We review the platform, open issues, alerts and runbooks, and agree what we own and when.',
          },
          {
            title: 'Stabilize',
            body: 'We clear the patching backlog, fix noisy alerts and write the runbooks that are missing.',
          },
          {
            title: 'Run',
            body: 'We monitor, patch and respond during agreed hours, with a clear handoff to your out-of-hours cover.',
          },
          {
            title: 'Improve',
            body: 'Each month we review incidents, cost and capacity, and agree what to fix next.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Agreed hours of coverage and a clear out-of-hours escalation path',
          'Alerts routed to a named owner, with a runbook for each',
          'Patching and upgrades on an agreed schedule',
          'A monthly service review covering incidents, cost and capacity',
          'Infrastructure as code kept current, in your repository',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Do you provide round-the-clock cover?',
            a: 'No. We operate during hours we agree with you. Out of hours, your own team or your existing provider stays on call, and we give them the runbooks and escalation path to do it.',
          },
          {
            q: 'Do you run a security operations center?',
            a: 'No. We apply security patches and configuration, and route security alerts to whoever handles them for you today.',
          },
          {
            q: 'Can we take operations back in-house later?',
            a: 'Yes. Everything lives in your cloud accounts and your repositories, and we hand over with a run guide when you are ready.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CAPABILITY_LINKS.resilience,
          CAPABILITY_LINKS.finops,
          CAPABILITY_LINKS.landingZones,
          BLUEPRINT_LINK,
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud', 'managed-operations'] },
    ],
    contactInterest: 'Cloud',
  },

  // ───────────────────────────── Resilience & DR ─────────────────────────────
  {
    path: '/what-we-do/cloud/resilience',
    name: 'Resilience & DR',
    parents: [WHAT_WE_DO, CLOUD],
    meta: {
      title: 'Cloud disaster recovery services | YatiSphere',
      description:
        'Cloud resilience and disaster recovery on AWS, Microsoft Azure and Google Cloud: recovery targets agreed, backup and failover designed, then tested.',
    },
    hero: {
      kicker: 'CLOUD / RESILIENCE & DR',
      h1: 'Recovery you have tested',
      subhead:
        'We design backup, failover and disaster recovery on AWS, Microsoft Azure and Google Cloud to the targets you set, then test it with your team.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'A backup that has never been restored is a hope, not a plan. We agree how long each system can be down and how much data it can lose, design to those targets using each cloud’s own zones, regions and recovery services, and then prove it with a test your team runs.',
      },
      {
        type: 'cards',
        id: 'what-we-do',
        title: 'What we do',
        columns: 2,
        cards: [
          {
            title: 'Recovery targets',
            body: 'Without agreed targets, every system gets the same treatment. We set recovery time and recovery point objectives per system, with the business.',
          },
          {
            title: 'Backup design',
            body: 'Backups are often incomplete or stored next to what they protect. We design backup policies, retention and isolation per system.',
          },
          {
            title: 'Failover and multi-region design',
            body: 'A single zone or region is a single point of failure. We design zone-redundant and cross-region failover where the targets need it.',
          },
          {
            title: 'Recovery testing',
            body: 'Untested runbooks fail under pressure. We run recovery tests with your team and fix what they reveal.',
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Resilience review',
            description:
              'A look at how your current platform would cope with a zone, region or data loss event, and what to fix first.',
            bullets: [
              'Recovery targets agreed per system',
              'Gaps against those targets',
              'A prioritized remediation plan',
            ],
          },
          {
            label: 'Disaster recovery build',
            description:
              'Backup and failover designed and built using services such as AWS Elastic Disaster Recovery, Azure Site Recovery or Google Cloud Backup and DR Service.',
            bullets: [
              'Backup and failover design',
              'Infrastructure as code for the recovery environment',
              'Runbooks for each recovery scenario',
            ],
          },
          {
            label: 'Recovery testing',
            description:
              'Scheduled tests that show whether recovery works, how long it takes and what breaks along the way.',
            bullets: [
              'Test plan agreed with system owners',
              'Recovery run with your team',
              'Findings fixed and the test repeated',
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
            title: 'Set targets',
            body: 'We agree recovery time and recovery point objectives for each system with its owners.',
          },
          {
            title: 'Design',
            body: 'We design backup, redundancy and failover to meet those targets at a cost you accept.',
          },
          {
            title: 'Build',
            body: 'We build it as code. Any cutover is planned for minimal disruption, with tested rollback.',
          },
          {
            title: 'Test',
            body: 'We run a recovery test with your team, fix what it finds, and schedule the next one.',
          },
        ],
      },
      {
        type: 'list',
        id: 'what-you-get',
        title: 'What you get',
        items: [
          'Recovery targets agreed and written down for each system',
          'Backup and failover design, documented',
          'Runbooks for each recovery scenario',
          'A recovery test run with your team, and its results',
          'A schedule for testing again',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions we get asked',
        items: [
          {
            q: 'Does every system need multi-region failover?',
            a: 'No. Most do not. We match the design to the recovery targets for each system, so you only pay for redundancy where the business needs it.',
          },
          {
            q: 'Can you recover from on-premises into the cloud?',
            a: 'Yes. The cloud can act as a recovery site for on-premises systems, which is also a common first step toward migration.',
          },
          {
            q: 'How often should we test recovery?',
            a: 'At least once a year for each critical system, and after any major change. We help you set a schedule your team can keep.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          CAPABILITY_LINKS.managedOps,
          CAPABILITY_LINKS.migration,
          CAPABILITY_LINKS.landingZones,
          BLUEPRINT_LINK,
        ],
      },
      { type: 'inFocus', title: 'In focus', services: ['cloud', 'resilience'] },
    ],
    contactInterest: 'Cloud',
  },
]
