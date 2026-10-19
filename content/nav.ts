import { site } from './site'
import { hasMembership } from './types'
import { stories } from './stories'
import { news } from './news'
import { events } from './events'
import { hasArticles } from '@/lib/insights/published'

/**
 * Header menu tree for the revamp (brief section 4), as data.
 *
 * Wired into components/nav in Phase 1; until then the live header still
 * reads lib/nav.ts. Interaction stays hover + click (owner decision,
 * overriding the brief's click-only).
 *
 * Any node may be hidden; hidden nodes, empty groups and empty panels are
 * removed by `cleanNav` before rendering.
 */

type Hidden = boolean | (() => boolean)

export interface NavLink {
  label: string
  href: string
  hidden?: Hidden
}

export interface NavGroup {
  label: string
  /** A group without children renders as a plain link row in region B. */
  href?: string
  children?: NavLink[]
  hidden?: Hidden
}

export interface NavPanel {
  kind: 'panel'
  id: string
  label: string
  /** Section overview page: first row of the mobile menu, link for crawlers. */
  overviewHref: string
  intro: { heading: string; body: string; link: NavLink }
  /**
   * Region C's default content: shown when the panel opens, until a group
   * is activated, so region C is never blank. Omit it to leave region C
   * empty. tests/nav.spec.ts fails if its href isn't a live route (checked
   * there rather than here, so the header doesn't ship page data).
   */
  featured?: NavFeatured
  groups: NavGroup[]
  hidden?: Hidden
}

export interface NavFeatured {
  /** Shown UPPERCASE. */
  kicker: string
  title: string
  /** One line. */
  summary: string
  href: string
  /** Path under /public; without one, a code-drawn placeholder is shown. */
  image?: string
  imageAlt?: string
}

export interface NavDirect {
  kind: 'link'
  id: string
  label: string
  href: string
  hidden?: Hidden
}

export type NavItem = NavPanel | NavDirect

/** Set once a careers page has content (brief K); hidden until then. */
const CAREERS_LIVE = false
const PRODUCTS: NavLink[] = []

const W = '/what-we-do'

export const NAV_TREE: NavItem[] = [
  {
    kind: 'panel',
    id: 'what-we-do',
    label: 'What we do',
    overviewHref: '/what-we-do',
    featured: {
      kicker: 'Start here',
      title: 'The Solution Blueprint',
      summary: 'Two to four weeks to agree the problem, the design and the plan before any build.',
      href: '/blueprint',
    },
    intro: {
      heading: 'What we do',
      body: 'IT services and applied AI, built and run by senior engineers.',
      link: { label: 'Explore what we do', href: '/what-we-do' },
    },
    groups: [
      {
        label: 'Industries',
        children: [
          { label: 'Financial services', href: `${W}/industries/financial-services` },
          { label: 'Legal & professional services', href: `${W}/industries/legal-professional-services` },
          { label: 'Software & SaaS', href: `${W}/industries/software-saas` },
        ],
      },
      {
        label: 'Consulting',
        children: [
          { label: 'Consulting overview', href: `${W}/consulting` },
          { label: 'Technology strategy', href: `${W}/consulting/technology-strategy` },
          { label: 'Enterprise architecture', href: `${W}/consulting/enterprise-architecture` },
          { label: 'AI strategy & readiness', href: `${W}/consulting/ai-strategy` },
          { label: 'Cloud strategy & FinOps', href: `${W}/consulting/cloud-strategy-finops` },
          { label: 'Modernization roadmaps', href: `${W}/consulting/modernization-roadmaps` },
          { label: 'Architecture due diligence', href: `${W}/consulting/due-diligence` },
        ],
      },
      {
        label: 'Cloud',
        children: [
          { label: 'Cloud overview', href: `${W}/cloud` },
          { label: 'AWS', href: `${W}/cloud/aws` },
          { label: 'Microsoft Azure', href: `${W}/cloud/microsoft-azure` },
          { label: 'Migration', href: `${W}/cloud/migration` },
          { label: 'Landing zones', href: `${W}/cloud/landing-zones` },
          { label: 'FinOps', href: `${W}/cloud/finops` },
          { label: 'Managed operations', href: `${W}/cloud/managed-operations` },
          { label: 'Resilience & DR', href: `${W}/cloud/resilience` },
        ],
      },
      {
        label: 'Applied AI',
        children: [
          { label: 'Applied AI overview', href: `${W}/applied-ai` },
          { label: 'Claude practice', href: `${W}/applied-ai/claude` },
          { label: 'Agentic automation', href: `${W}/applied-ai/agentic-automation` },
          { label: 'Enterprise AI platforms', href: `${W}/applied-ai/ai-platforms` },
          { label: 'Knowledge assistants', href: `${W}/applied-ai/knowledge-assistants` },
          { label: 'AI governance', href: `${W}/applied-ai/ai-governance` },
          { label: 'AI-assisted engineering', href: `${W}/applied-ai/ai-assisted-engineering` },
        ],
      },
      {
        label: 'Engineering & data',
        children: [
          { label: 'Software engineering', href: `${W}/services/software-engineering` },
          { label: 'Data & analytics', href: `${W}/services/data-analytics` },
          { label: 'DevOps & platform engineering', href: `${W}/services/devops-platform-engineering` },
          { label: 'Security & compliance', href: `${W}/services/security-compliance` },
          { label: 'Legacy modernization', href: `${W}/services/modernization` },
        ],
      },
      { label: 'Products & accelerators', children: PRODUCTS },
      { label: 'Alliances', href: '/alliances', hidden: () => !hasMembership(site.partners) },
    ],
  },
  {
    kind: 'panel',
    id: 'who-we-are',
    label: 'Who we are',
    overviewHref: '/who-we-are/about',
    // The brief's "A fixed price for the first step" is reworded: pricing
    // language was removed site-wide (owner decision, 2026-10-11).
    featured: {
      kicker: 'How we work',
      title: 'Start with a Blueprint',
      summary: 'A 2–4 week discovery engagement before any build.',
      href: '/blueprint',
    },
    intro: {
      heading: 'Who we are',
      body: 'Senior consultants and engineers, and how we work.',
      link: { label: 'Explore who we are', href: '/who-we-are/about' },
    },
    groups: [
      { label: 'About us', href: '/who-we-are/about' },
      { label: 'Leadership', href: '/who-we-are/leadership' },
      { label: 'How we work', href: '/who-we-are/how-we-work' },
      { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
      { label: 'Trust & security', href: '/who-we-are/trust' },
    ],
  },
  {
    kind: 'panel',
    id: 'insights',
    label: 'Insights',
    overviewHref: '/insights',
    featured: {
      kicker: 'Latest insight',
      title: 'Taking an AI pilot to production',
      summary: 'What changes between a demo and a system a regulated business can run.',
      href: '/insights/taking-an-ai-pilot-to-production',
    },
    intro: {
      heading: 'Insights',
      body: 'Notes on cloud, AI and governance from engineers who build it.',
      link: { label: 'Explore insights', href: '/insights' },
    },
    groups: [
      { label: 'All insights', href: '/insights', hidden: () => !hasArticles },
      { label: 'AI pilots to production', href: '/insights/taking-an-ai-pilot-to-production', hidden: () => !hasArticles },
      { label: 'KYC without black boxes', href: '/insights/kyc-automation-without-black-boxes', hidden: () => !hasArticles },
      { label: 'SOC 2 evidence from pipelines', href: '/insights/soc-2-evidence-from-pipelines', hidden: () => !hasArticles },
      { label: 'Customer stories', href: '/customer-stories', hidden: () => stories.length === 0 },
      { label: 'News', href: '/news', hidden: () => news.length === 0 },
      { label: 'Events', href: '/events', hidden: () => events.length === 0 },
    ],
  },
  { kind: 'link', id: 'careers', label: 'Careers', href: '/careers', hidden: !CAREERS_LIVE },
]

const isHidden = (h?: Hidden) => (typeof h === 'function' ? h() : Boolean(h))

export function cleanNav(items: NavItem[]): NavItem[] {
  return items.flatMap((item): NavItem[] => {
    if (isHidden(item.hidden)) return []
    if (item.kind === 'link') return [item]
    const groups = item.groups.flatMap((g): NavGroup[] => {
      if (isHidden(g.hidden)) return []
      if (!g.children) return g.href ? [g] : []
      const children = g.children.filter((c) => !isHidden(c.hidden))
      return children.length ? [{ ...g, children }] : []
    })
    return groups.length ? [{ ...item, groups }] : []
  })
}

export const NAV = cleanNav(NAV_TREE)
