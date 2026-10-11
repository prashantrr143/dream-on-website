/**
 * One service taxonomy for the whole site (audit S-02).
 *
 * The header, footer, /solutions hub and service cards all read from
 * here, so a service is named the same way everywhere.
 */

export interface Service {
  name: string
  href: string
  /** One line, shown under the name in menus and cards. */
  descriptor: string
}

export const IT_SERVICES: Service[] = [
  {
    name: 'Software & Platform Engineering',
    href: '/solutions/software-engineering',
    descriptor: 'APIs, integration and core platform builds',
  },
  {
    name: 'Cloud & Infrastructure',
    href: '/solutions/cloud',
    descriptor: 'Azure landing zones, migration and FinOps',
  },
  {
    name: 'DevOps & Platform Automation',
    href: '/solutions/devops',
    descriptor: 'CI/CD, infrastructure as code, platform teams',
  },
  {
    name: 'Data & Analytics',
    href: '/solutions/data',
    descriptor: 'Microsoft Fabric, Databricks and governed reporting',
  },
  {
    name: 'Security & Compliance',
    href: '/solutions/security',
    descriptor: 'Identity, zero trust and audit evidence',
  },
  {
    name: 'Modernization & Advisory',
    href: '/solutions/modernization',
    descriptor: 'Legacy re-platforming and costed roadmaps',
  },
]

export const AI_SERVICES: Service[] = [
  {
    name: 'AI architecture & readiness',
    href: '/applied-ai#architecture',
    descriptor: 'Where AI fits, and what has to be true first',
  },
  {
    name: 'Agentic workflow automation',
    href: '/applied-ai#agentic',
    descriptor: 'Agents that do the work, with a person approving',
  },
  {
    name: 'Enterprise AI platforms',
    href: '/applied-ai#platforms',
    descriptor: 'Azure OpenAI and Microsoft Foundry, in your tenant',
  },
  {
    name: 'Responsible AI & governance',
    href: '/responsible-ai',
    descriptor: 'What we commit to, and how you can check',
  },
]

export interface Industry {
  name: string
  href: string
  descriptor: string
}

/** Featured sectors (audit I-01, G-11). */
export const FEATURED_INDUSTRIES: Industry[] = [
  {
    name: 'Financial services',
    href: '/industries/financial-services',
    descriptor: 'Banks, insurers, wealth managers and fintechs',
  },
  {
    name: 'Legal & professional services',
    href: '/industries/legal-professional-services',
    descriptor: 'Law firms and advisory practices',
  },
  {
    name: 'Software & SaaS',
    href: '/industries/software-saas',
    descriptor: 'Product companies scaling a regulated platform',
  },
]

/** Shown smaller, as "Also experienced in", and kept out of the main menu. */
export const OTHER_INDUSTRIES: Industry[] = [
  {
    name: 'Healthcare',
    href: '/industries/healthcare',
    descriptor: 'Clinical and administrative systems',
  },
  {
    name: 'Government & public sector',
    href: '/industries/government-public-sector',
    descriptor: 'Public services and agencies',
  },
]
