import type { Block, Card, ContentPage } from './types'

/**
 * Consulting pillar and its six sub-pages (/what-we-do/consulting/*).
 *
 * Facts only: the Blueprint runs 2–4 weeks; no other
 * durations, prices, clients or metrics. Copy stays vendor-neutral.
 */

const W = '/what-we-do'
const C = `${W}/consulting`

const PARENTS = [{ name: 'What we do', path: W }]
const SUB_PARENTS = [...PARENTS, { name: 'Consulting', path: C }]

const BLUEPRINT: Card = {
  title: 'Blueprint',
  body: 'One named problem, 2–4 weeks. You get a solution design, a delivery plan and a risk register from the team that would build it.',
  href: '/blueprint',
}

const ARCHITECTURE_REVIEW: Card = {
  title: 'Architecture review',
  body: 'An independent read on a system, platform or design you already have. We tell you what is load-bearing, what is at risk and what to change first.',
}

const ADVISORY_RETAINER: Card = {
  title: 'Advisory retainer',
  body: 'Senior architects on call as your plans meet reality. We review decisions, challenge vendor proposals and keep the roadmap current as the business changes.',
}

const ENGAGE = (cards: Card[] = [BLUEPRINT, ARCHITECTURE_REVIEW, ADVISORY_RETAINER]): Block => ({
  type: 'cards',
  id: 'how-we-engage',
  title: 'How we engage',
  columns: 3,
  cards,
})

const IN_FOCUS: Block = { type: 'inFocus', id: 'in-focus', title: 'In focus', services: ['consulting'] }

export const pages: ContentPage[] = [
  // ---------------------------------------------------------------- Pillar
  {
    path: C,
    name: 'Consulting',
    parents: PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Technology & AI strategy consulting | YatiSphere',
      description:
        'Technology, architecture, cloud and AI strategy consulting from the senior team that builds it. Start with a Blueprint in 2–4 weeks.',
    },
    hero: {
      kicker: 'WHAT WE DO / CONSULTING',
      h1: 'Clear decisions before costly builds',
      subhead:
        'We help leaders choose the right architecture, cloud and AI approach — and plan it before anything is built.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Most expensive technology mistakes are made before a line of code is written: the wrong platform, a vendor-shaped roadmap, an AI pilot with no route to production. We give you an independent view, a design that fits the systems you already run, and a clear plan for what comes next. We recommend the cloud and model that fit, not the one we resell, and the people who advise you are the people who build and run what you decide.',
      },
      {
        type: 'cards',
        id: 'capabilities',
        title: 'Our capabilities',
        columns: 3,
        cards: [
          {
            title: 'Technology strategy',
            body: 'Decide where technology spend should go, what to stop and what to build, in terms the board can fund.',
            href: `${C}/technology-strategy`,
          },
          {
            title: 'Enterprise architecture',
            body: 'A target architecture that fits the systems you already run and the rules you answer to.',
            href: `${C}/enterprise-architecture`,
          },
          {
            title: 'AI strategy & readiness',
            body: 'Find the AI use cases worth doing, check your data and controls are ready, and plan a governed route to production.',
            href: `${C}/ai-strategy`,
          },
          {
            title: 'Cloud strategy & FinOps',
            body: 'Choose the cloud that fits each workload and get its cost under control before it grows.',
            href: `${C}/cloud-strategy-finops`,
          },
          {
            title: 'Modernization roadmaps',
            body: 'A sequenced, costed plan for aging systems, in steps that are each reversible and useful on their own.',
            href: `${C}/modernization-roadmaps`,
          },
          {
            title: 'Architecture due diligence',
            body: 'An independent technical read on a platform before you invest in it, acquire it or bet a program on it.',
            href: `${C}/due-diligence`,
          },
        ],
      },
      {
        type: 'tabs',
        id: 'solutions',
        title: 'Our solutions',
        tabs: [
          {
            label: 'Decide the platform',
            description:
              'For leaders facing a platform decision that will be expensive to reverse: which cloud, which architecture, build or buy.',
            bullets: [
              'Options assessed against your constraints, not a vendor catalog',
              'Cost, risk and effort set out side by side',
              'A recommendation you can defend to the board',
            ],
          },
          {
            label: 'Get AI into production',
            description:
              'For organizations with AI pilots that stalled, or a mandate to use AI and no clear place to start.',
            bullets: [
              'Use cases ranked by value, feasibility and risk',
              'Data, security and governance readiness checked',
              'Evaluation and approval steps designed before go-live',
              'Model-neutral recommendation, with Claude among the options',
            ],
          },
          {
            label: 'Fund the modernization',
            description:
              'For estates where every change feels risky and the board wants a number before it approves a program.',
            bullets: [
              'A map of what the current estate actually does',
              'A sequenced roadmap tied to business outcomes',
              'A costed plan and business case to fund it',
            ],
          },
          {
            label: 'Control cloud spend',
            description: 'For teams whose cloud bill grows faster than the value they get from it.',
            bullets: [
              'Spend broken down by team, product and workload',
              'Waste and commitment options identified',
              'Ownership and guardrails so savings hold',
            ],
          },
          {
            label: 'Check before you commit',
            description:
              'For investors, acquirers and boards who need to know what a platform can carry before they put money behind it.',
            bullets: [
              'Architecture, code and operations reviewed',
              'Risks rated and explained in business terms',
              'What it would take to fix each finding',
            ],
          },
        ],
      },
      {
        type: 'list',
        id: 'outcomes',
        title: 'Outcomes',
        items: [
          'Decisions that are expensive to reverse are made deliberately, before build begins.',
          'A clear, scoped next step instead of an open-ended plan.',
          'A roadmap tied to business outcomes, so funding and delivery capacity line up.',
          'AI use cases with a governed route to production, not another stalled pilot.',
          'Cloud and model choices made on fit, not on what someone resells.',
          'Advice from the people who will build and run it, so the plan is one we have to live with too.',
        ],
      },
      {
        type: 'cards',
        id: 'engagement-formats',
        title: 'Engagement formats',
        columns: 3,
        cards: [BLUEPRINT, ARCHITECTURE_REVIEW, ADVISORY_RETAINER],
      },
      IN_FOCUS,
    ],
  },

  // ---------------------------------------------------- Technology strategy
  {
    path: `${C}/technology-strategy`,
    name: 'Technology strategy',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Technology strategy consulting | YatiSphere',
      description:
        'Technology strategy consulting for CIOs and CTOs: where to invest, what to retire and a plan the board can fund, from the team that builds it.',
    },
    hero: {
      kicker: 'CONSULTING / TECHNOLOGY STRATEGY',
      h1: 'A technology plan you can fund',
      subhead: 'We help you decide where technology spend should go, what to stop and what to build next.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Technology strategies fail when they are written apart from the systems, budgets and people that have to carry them out. We start from what you run today and what the business needs from it, then set out choices, costs and order of work in plain terms. Because we also build and run platforms, the plan has to survive contact with delivery.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'Where is our technology spend going, and is it worth it?',
            body: 'We map spend to the systems and outcomes it supports, so you can see what earns its keep.',
          },
          {
            title: 'What should we stop doing?',
            body: 'We identify platforms, projects and tools that cost more than they return, and how to retire them safely.',
          },
          {
            title: 'Build, buy or extend?',
            body: 'We compare options on cost, risk, lock-in and time to value, against your constraints.',
          },
          {
            title: 'Where does AI fit in our plans?',
            body: 'We place AI where it changes a real workflow, with the data and controls it needs to run safely.',
          },
          {
            title: 'Can our current team deliver this?',
            body: 'We assess skills and capacity against the plan, and show where you need to hire, train or bring in help.',
          },
          {
            title: 'What do we do first?',
            body: 'We sequence the work so early steps deliver value on their own and later ones stay open to change.',
          },
        ],
      },
      ENGAGE([BLUEPRINT, ADVISORY_RETAINER]),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'A current-state view of systems, spend and capability',
          'Strategic options with cost, risk and trade-offs set out side by side',
          'A sequenced technology roadmap tied to business outcomes',
          'A costed plan for the first phase of delivery',
          'A risk register with owners and mitigations',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Do you favor a particular cloud or vendor?',
            a: 'No. We work on AWS, Microsoft Azure and Google Cloud, and we recommend the cloud and model that fit, not the one we resell.',
          },
          {
            q: 'Who does the work?',
            a: 'Senior consultants and engineers from our in-house team. The people who shape your strategy are the people who would build and run what follows.',
          },
          {
            q: 'How do we start?',
            a: 'Usually with a Blueprint: one named problem, 2–4 weeks, ending in a design and a delivery plan.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Enterprise architecture', href: `${C}/enterprise-architecture`, descriptor: 'A target architecture that fits what you run.' },
          { label: 'Modernization roadmaps', href: `${C}/modernization-roadmaps`, descriptor: 'A sequenced, costed plan for aging systems.' },
          { label: 'AI strategy & readiness', href: `${C}/ai-strategy`, descriptor: 'AI use cases with a route to production.' },
          { label: 'How we work', href: '/who-we-are/how-we-work', descriptor: 'One team, from first conversation to running system.' },
        ],
      },
      IN_FOCUS,
    ],
  },

  // ------------------------------------------------ Enterprise architecture
  {
    path: `${C}/enterprise-architecture`,
    name: 'Enterprise architecture',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Enterprise architecture consulting | YatiSphere',
      description:
        'Enterprise architecture consulting: target architectures, integration design and architecture reviews for regulated organizations on any major cloud.',
    },
    hero: {
      kicker: 'CONSULTING / ENTERPRISE ARCHITECTURE',
      h1: 'Architecture that fits your estate',
      subhead: 'We design target architectures that work with the systems you already run and the rules you answer to.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'An architecture diagram is only useful if the organization can build it, run it and pass an audit on it. We design against your real estate, your integration points and your regulatory obligations, and we make the decisions that are expensive to reverse explicit. Our architects have led modernization programs at global investment banks, Big Four consultancies and national e-government platforms.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'What should our target architecture look like?',
            body: 'We design it against your systems, cloud and constraints, with the trade-offs written down.',
          },
          {
            title: 'How do our systems fit together today?',
            body: 'We map applications, data flows and dependencies so you can see what is load-bearing.',
          },
          {
            title: 'Is this design sound?',
            body: 'We review an existing or proposed architecture and tell you what is at risk and what to change first.',
          },
          {
            title: 'How do we integrate without creating new tangles?',
            body: 'We set integration patterns and ownership so new systems do not add hidden coupling.',
          },
          {
            title: 'Will this pass a regulator or auditor?',
            body: 'We build security, data residency and auditability into the design from the start, not before a review.',
          },
          {
            title: 'How do we keep architecture decisions consistent?',
            body: 'We set up lightweight principles, decision records and review steps your teams can actually follow.',
          },
        ],
      },
      ENGAGE(),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'Current-state map of applications, data flows and dependencies',
          'Target architecture with the reasoning behind each major decision',
          'Integration and data patterns your teams can reuse',
          'Architecture decision records and principles',
          'A transition plan from current to target state',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Do you only design, or do you build too?',
            a: 'Both. The people who design your architecture are the people who build and run it, so the design has to be one we can deliver.',
          },
          {
            q: 'Which clouds do you design for?',
            a: 'AWS, Microsoft Azure and Google Cloud, as well as hybrid and on-premises estates. We recommend what fits, not what we resell.',
          },
          {
            q: 'Who owns the architecture artifacts?',
            a: 'You do. Your code, your cloud and your documentation, in your region, from day one.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Architecture due diligence', href: `${C}/due-diligence`, descriptor: 'An independent read before you commit.' },
          { label: 'Modernization roadmaps', href: `${C}/modernization-roadmaps`, descriptor: 'Sequence the move to the target state.' },
          { label: 'Cloud overview', href: `${W}/cloud`, descriptor: 'Platforms we build and run on AWS, Azure and Google Cloud.' },
          { label: 'Trust & security', href: '/who-we-are/trust', descriptor: 'How we handle your systems and data.' },
        ],
      },
      IN_FOCUS,
    ],
  },

  // ------------------------------------------------ AI strategy & readiness
  {
    path: `${C}/ai-strategy`,
    name: 'AI strategy & readiness',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'AI strategy & readiness consulting | YatiSphere',
      description:
        'AI strategy consulting for regulated businesses: pick use cases worth doing, check data and governance readiness, and plan a governed path to production.',
    },
    hero: {
      kicker: 'CONSULTING / AI STRATEGY & READINESS',
      h1: 'AI worth putting into production',
      subhead: 'We help you choose the AI use cases worth doing and get your data, controls and teams ready to run them.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Many AI pilots stall between demo and production: the data is not ready, nobody owns the risk, and no one can say how the system will be checked. We start from the workflows where AI would change the outcome, test readiness honestly and design governance in from the start: evaluation before go-live, an audit trail, and a person who approves what matters. We are model-neutral, with a dedicated Claude practice, and we recommend the model that fits.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'Where should we use AI first?',
            body: 'We rank candidate use cases by value, feasibility and risk, and pick the ones with a real route to production.',
          },
          {
            title: 'Is our data ready?',
            body: 'We check access, quality, ownership and residency for the data each use case depends on.',
          },
          {
            title: 'Which model should we use?',
            body: 'We compare models on fit for the task, cost, data handling and where they can run, without a reseller bias.',
          },
          {
            title: 'How do we keep AI under control?',
            body: 'We design evaluation, audit trails and human approval steps before anything goes live.',
          },
          {
            title: 'Why did our pilot stall?',
            body: 'We review what was built, what blocked it and what it would take to get it into production, or to stop it.',
          },
          {
            title: 'What happens to our data?',
            body: 'It stays in your cloud and your region. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
          },
        ],
      },
      ENGAGE([BLUEPRINT, ADVISORY_RETAINER]),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'A ranked portfolio of AI use cases with value, feasibility and risk for each',
          'A data and platform readiness assessment',
          'A model recommendation with the reasoning behind it',
          'A governance design: evaluation, audit trail and human approval points',
          'A costed plan to take the first use case into production',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Do you only work with Claude?',
            a: 'No. We are model-neutral and recommend the model that fits each use case. We also run a dedicated Claude practice for organizations that choose it.',
          },
          {
            q: 'Do you use our data to train models?',
            a: 'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
          },
          {
            q: 'Can you build what you recommend?',
            a: 'Yes. The team that shapes your AI strategy is the team that builds, evaluates and runs the system inside your cloud.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Applied AI', href: `${W}/applied-ai`, descriptor: 'Governed AI in production, inside your platforms.' },
          { label: 'AI governance', href: `${W}/applied-ai/ai-governance`, descriptor: 'Evaluation, audit trail and human approval.' },
          { label: 'Claude practice', href: `${W}/applied-ai/claude`, descriptor: 'Our dedicated practice for Claude.' },
          { label: 'Responsible AI', href: '/who-we-are/responsible-ai', descriptor: 'The commitments we hold ourselves to.' },
        ],
      },
      IN_FOCUS,
    ],
  },

  // ------------------------------------------------ Cloud strategy & FinOps
  {
    path: `${C}/cloud-strategy-finops`,
    name: 'Cloud strategy & FinOps',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Cloud strategy & FinOps consulting | YatiSphere',
      description:
        'Cloud strategy and FinOps consulting: choose the right cloud for each workload across AWS, Azure and Google Cloud, and bring cloud spend under control.',
    },
    hero: {
      kicker: 'CONSULTING / CLOUD STRATEGY & FINOPS',
      h1: 'The right cloud, at the right cost',
      subhead: 'We help you choose where each workload should run and keep what it costs in line with what it is worth.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'Cloud decisions are often made one project at a time, and the bill shows it. We look across your estate, recommend where each workload should run on AWS, Microsoft Azure, Google Cloud or on-premises, and put the ownership and guardrails in place so cost stays visible. We recommend the cloud that fits, not the one we resell.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'Which cloud should this workload run on?',
            body: 'We compare platforms on fit, cost, residency and the skills you have, and recommend one with the reasons written down.',
          },
          {
            title: 'Should we be multi-cloud?',
            body: 'We set out what a second cloud would cost you in complexity and what it would actually buy.',
          },
          {
            title: 'Why is our cloud bill growing?',
            body: 'We break spend down by team, product and workload so you can see what drives it.',
          },
          {
            title: 'Where are we wasting money?',
            body: 'We find idle, oversized and unowned resources, and the commitment options that fit how you run.',
          },
          {
            title: 'Who should own cloud cost?',
            body: 'We set up tagging, budgets and accountability so the teams that spend can see and manage it.',
          },
          {
            title: 'Can we meet residency and resilience rules?',
            body: 'We design regions, landing zones and recovery plans around the obligations you answer to.',
          },
        ],
      },
      ENGAGE(),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'A workload-by-workload placement recommendation',
          'A cost baseline broken down by team, product and workload',
          'A prioritized list of savings with the effort and risk of each',
          'A FinOps operating model: tagging, budgets, ownership and review cadence',
          'A costed migration or optimization plan for the first phase',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Do you resell cloud services?',
            a: 'We recommend the cloud that fits, not the one we resell. We build on AWS, Microsoft Azure and Google Cloud.',
          },
          {
            q: 'Do you need access to our billing data?',
            a: 'Yes, read-only, within the boundaries you set. We work in your environment and the data stays in your cloud.',
          },
          {
            q: 'Can you put the changes in place?',
            a: 'Yes. The same team designs the plan, makes the changes and can stay to run the platform.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Cloud overview', href: `${W}/cloud`, descriptor: 'How we build and run on each major cloud.' },
          { label: 'FinOps', href: `${W}/cloud/finops`, descriptor: 'Ongoing cloud cost management.' },
          { label: 'Migration', href: `${W}/cloud/migration`, descriptor: 'Moving workloads with a plan you can reverse.' },
          { label: 'Landing zones', href: `${W}/cloud/landing-zones`, descriptor: 'A governed foundation for every workload.' },
        ],
      },
      IN_FOCUS,
    ],
  },

  // ------------------------------------------------- Modernization roadmaps
  {
    path: `${C}/modernization-roadmaps`,
    name: 'Modernization roadmaps',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Modernization roadmap consulting | YatiSphere',
      description:
        'Legacy modernization roadmaps: map what your estate does, sequence the work in reversible steps and build the costed plan and business case to fund it.',
    },
    hero: {
      kicker: 'CONSULTING / MODERNIZATION ROADMAPS',
      h1: 'Modernize on a roadmap you can fund',
      subhead: 'We map what your aging systems actually do and sequence the change in steps that each deliver value.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'The core system works, mostly. The people who understood it have moved on, vendors propose rebuilds, and the board wants a number. We give you an independent read on what is load-bearing, then a sequenced, costed plan that ties modernization to business outcomes, in steps that are each reversible and useful on their own. We stay through delivery, so the plan is one we have to live with too.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'What does our legacy estate actually do?',
            body: 'We map functions, data and dependencies, including the parts nobody has documented.',
          },
          {
            title: 'Rebuild, re-platform or retire?',
            body: 'We weigh each option per system on cost, risk and business value, not on what is easiest to sell.',
          },
          {
            title: 'How do we change it without stopping the business?',
            body: 'We sequence the work in reversible steps, with each one useful on its own.',
          },
          {
            title: 'What will it cost, and what will we get?',
            body: 'We build a costed plan and the business case to fund it, phase by phase.',
          },
          {
            title: 'Why did our last program stall?',
            body: 'We look at what went wrong, often a big-bang plan with nothing usable until the end, and redesign the approach.',
          },
          {
            title: 'Where does AI help with modernization?',
            body: 'We identify where AI-assisted engineering can speed up code analysis and migration, under human review.',
          },
        ],
      },
      ENGAGE([BLUEPRINT, ARCHITECTURE_REVIEW, ADVISORY_RETAINER]),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'An estate review with a prioritized list of findings',
          'A target architecture and the transition states to reach it',
          'A sequenced roadmap tied to business outcomes',
          'A costed plan and business case for each phase',
          'A risk register with owners and mitigations',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Do you push a particular target platform?',
            a: 'No. We work on AWS, Microsoft Azure, Google Cloud and on-premises, and recommend what fits your estate and constraints.',
          },
          {
            q: 'What experience does the team have?',
            a: 'Our architects have led modernization programs at global investment banks, Big Four consultancies and national e-government platforms.',
          },
          {
            q: 'Do you deliver the roadmap too?',
            a: 'Yes. We re-platform in reversible steps, and adoption is part of delivery: runbooks, handover and training for the team that will run it.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Legacy modernization', href: `${W}/services/modernization`, descriptor: 'Re-platforming delivered in reversible steps.' },
          { label: 'Enterprise architecture', href: `${C}/enterprise-architecture`, descriptor: 'Design the target state.' },
          { label: 'AI-assisted engineering', href: `${W}/applied-ai/ai-assisted-engineering`, descriptor: 'AI that helps engineers, under review.' },
          { label: 'Migration', href: `${W}/cloud/migration`, descriptor: 'Moving workloads to the cloud that fits.' },
        ],
      },
      IN_FOCUS,
    ],
  },

  // --------------------------------------------- Architecture due diligence
  {
    path: `${C}/due-diligence`,
    name: 'Architecture due diligence',
    parents: SUB_PARENTS,
    contactInterest: 'Consulting',
    meta: {
      title: 'Architecture due diligence | YatiSphere',
      description:
        'Technical and architecture due diligence for investors, acquirers and boards: an independent read on a platform’s architecture, code, security and cost.',
    },
    hero: {
      kicker: 'CONSULTING / ARCHITECTURE DUE DILIGENCE',
      h1: 'Know what you are buying',
      subhead: 'We give you an independent technical read on a platform before you invest in it, acquire it or bet a program on it.',
    },
    blocks: [
      {
        type: 'statement',
        text: 'A platform can look sound in a demo and still carry years of hidden cost. We review the architecture, code, security, operations and team behind it, and report what we find in business terms: what it can carry, what is at risk and what it would take to fix. We build and run enterprise platforms ourselves, so we know where to look.',
      },
      {
        type: 'cards',
        id: 'questions',
        title: 'Questions we help leaders answer',
        columns: 3,
        cards: [
          {
            title: 'Can this platform scale with the plan?',
            body: 'We test the architecture against the growth, load and product roadmap you are underwriting.',
          },
          {
            title: 'How much technical debt are we taking on?',
            body: 'We review code, dependencies and delivery practices, and estimate the work needed to address what we find.',
          },
          {
            title: 'Is it secure and compliant?',
            body: 'We check security controls, data handling and residency against the obligations the business will answer to.',
          },
          {
            title: 'Does the AI do what is claimed?',
            body: 'We look at how AI features are built, evaluated and governed, and where the data goes.',
          },
          {
            title: 'What does it really cost to run?',
            body: 'We review cloud spend, licensing and operational effort, and where they are likely to go.',
          },
          {
            title: 'What should we fix first after the deal?',
            body: 'We turn findings into a prioritized remediation plan you can act on from day one.',
          },
        ],
      },
      ENGAGE([ARCHITECTURE_REVIEW, BLUEPRINT]),
      {
        type: 'list',
        id: 'deliverables',
        title: 'What you get',
        items: [
          'A due diligence report with findings rated by severity',
          'Architecture, code, security and operations assessments',
          'Risks explained in business terms, with the cost and effort to address each',
          'A prioritized remediation plan',
          'A readout for your investment committee or board',
        ],
      },
      {
        type: 'faq',
        id: 'faq',
        title: 'Questions',
        items: [
          {
            q: 'Who is this for?',
            a: 'Investors, acquirers, boards and leaders who need an independent view of a platform before they commit money or a program to it.',
          },
          {
            q: 'How do you handle confidential information?',
            a: 'We work within the boundaries you and the target set, and in their environment where needed.',
          },
          {
            q: 'Can you help after the deal?',
            a: 'Yes. The same team can design and deliver the remediation, and run the platform if you need it.',
          },
        ],
      },
      {
        type: 'links',
        id: 'related',
        title: 'Related',
        links: [
          { label: 'Enterprise architecture', href: `${C}/enterprise-architecture`, descriptor: 'Target architectures and architecture reviews.' },
          { label: 'Modernization roadmaps', href: `${C}/modernization-roadmaps`, descriptor: 'Turn findings into a funded plan.' },
          { label: 'Security & compliance', href: `${W}/services/security-compliance`, descriptor: 'Controls built in, not bolted on.' },
        ],
      },
      IN_FOCUS,
    ],
  },
]
