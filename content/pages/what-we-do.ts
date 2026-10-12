import type { ContentPage } from './types'

/** Theme page (brief section 6B): the layered view of enterprise AI. */
export const pages: ContentPage[] = [
  {
    path: '/what-we-do',
    name: 'What we do',
    parents: [],
    meta: {
      title: 'Consulting, cloud and applied AI services | YatiSphere',
      description:
        'We advise, build and run enterprise platforms on AWS, Microsoft Azure and Google Cloud, and bring governed AI into them with Claude and the models you choose.',
    },
    hero: {
      kicker: 'WHAT WE DO',
      h1: 'Enterprise AI, engineered to be trusted',
      subhead:
        'We advise, build and run the platforms your business depends on — on AWS, Microsoft Azure and Google Cloud — and bring AI into them with Claude and the models you choose, governed from day one.',
    },
    blocks: [
      {
        type: 'statement',
        kicker: 'Our view',
        title: 'AI is only as trustworthy as the platform under it',
        text: 'Enterprise AI fails less often on the model than on everything around it: the cloud foundations, the data, the controls and the people who run it. We work on all five layers, with one accountable senior team, so what reaches production is something your auditors, customers and engineers can live with.',
      },
      {
        type: 'layers',
        kicker: 'Five layers',
        title: 'Five layers of enterprise AI',
        layers: [
          {
            title: 'Cloud foundations',
            body: 'Landing zones, identity, networking and cost control on AWS, Microsoft Azure and Google Cloud, so every workload starts on governed ground in your own accounts and region.',
            href: '/what-we-do/cloud',
            linkLabel: 'Cloud',
          },
          {
            title: 'Data and knowledge',
            body: 'Governed data platforms and knowledge stores with lineage and access rules, so AI answers from the same trusted numbers your teams use.',
            href: '/what-we-do/services/data-analytics',
            linkLabel: 'Data & analytics',
          },
          {
            title: 'Models and governance',
            body: 'Claude and the other models you choose, run where your data lives, evaluated before go-live and governed against the frameworks you answer to.',
            href: '/what-we-do/applied-ai/ai-governance',
            linkLabel: 'AI governance',
          },
          {
            title: 'Agents and applications',
            body: 'Agents and applications that do real work inside your systems, with a person approving what matters and every step logged.',
            href: '/what-we-do/applied-ai/agentic-automation',
            linkLabel: 'Agentic automation',
          },
          {
            title: 'Intelligence in operations',
            body: 'Monitoring, cost control and change management for AI in production, run by us or handed over to your team with runbooks.',
            href: '/what-we-do/cloud/managed-operations',
            linkLabel: 'Managed operations',
          },
        ],
      },
      {
        type: 'cards',
        kicker: 'Pillars',
        title: 'Four ways we help',
        columns: 4,
        cards: [
          { title: 'Consulting', body: 'Technology, architecture, cloud and AI decisions, made before anything is built.', href: '/what-we-do/consulting' },
          { title: 'Cloud', body: 'Design, migrate and operate secure platforms on AWS, Microsoft Azure and Google Cloud.', href: '/what-we-do/cloud' },
          { title: 'Applied AI', body: 'Governed AI in production, with a dedicated Claude practice.', href: '/what-we-do/applied-ai' },
          { title: 'Engineering & data', body: 'Core software, data platforms, delivery pipelines and security.', href: '/what-we-do/engineering-data' },
        ],
      },
      {
        type: 'steps',
        kicker: 'Principles',
        title: 'How we build AI you can stand behind',
        steps: [
          { title: 'Evaluated before go-live', body: 'Acceptance tests and thresholds are agreed before build, and nothing ships until it passes them.' },
          { title: 'A person approves what matters', body: 'Consequential actions wait for a named reviewer; agents never act alone on them.' },
          { title: 'Every step logged', body: 'Inputs, model versions, decisions and approvals are recorded in your environment.' },
          { title: 'Your data stays yours', body: 'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.' },
        ],
      },
      {
        type: 'links',
        id: 'industries',
        kicker: 'Industries',
        title: 'Built for sectors where a wrong answer has consequences',
        links: [
          { label: 'Financial services', href: '/what-we-do/industries/financial-services', descriptor: 'Banks, insurers, wealth managers and fintechs' },
          { label: 'Legal & professional services', href: '/what-we-do/industries/legal-professional-services', descriptor: 'Law firms and advisory practices' },
          { label: 'Software & SaaS', href: '/what-we-do/industries/software-saas', descriptor: 'Product companies selling to the enterprise' },
          { label: 'Healthcare', href: '/what-we-do/industries/healthcare', descriptor: 'Clinical and administrative systems' },
          { label: 'Public sector', href: '/what-we-do/industries/public-sector', descriptor: 'Public bodies and their delivery teams' },
        ],
      },
    ],
  },
]
