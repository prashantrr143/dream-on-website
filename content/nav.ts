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
  /** One line under the label in region B. */
  desc?: string
  /** Icon key, mapped to a Lucide icon in MegaPanel. */
  icon?: string
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
  /** One quiet link under the columns, e.g. the Blueprint. */
  footer?: NavLink
  groups: NavGroup[]
  hidden?: Hidden
}

export interface NavFeatured {
  /** Optional steps drawn as the card's preview (e.g. the Blueprint weeks). */
  steps?: string[]
  /** What the client keeps, shown as chips under the steps. */
  deliverables?: string[]
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

/**
 * Navigation, simplified (2026-11-01, SEO and marketing review: "too much
 * noise"). Three short panels of plain links, ordered by what buyers look
 * for, plus Insights as a direct link. No icons, descriptions, featured
 * cards or assurance lists: the pages carry the detail.
 */
export const NAV_TREE: NavItem[] = [
  {
    kind: 'panel',
    id: 'what-we-do',
    label: 'Services',
    overviewHref: W,
    intro: {
      heading: 'All services',
      body: 'Cloud, software, data and AI for regulated businesses.',
      link: { label: 'All services', href: W },
    },
    footer: { label: 'Start with a Solution Blueprint', href: '/blueprint' },
    groups: [
      {
        label: 'Applied AI',
        children: [
          { label: 'AI pilot to production', href: `${W}/applied-ai` },
          { label: 'Agentic automation', href: `${W}/applied-ai/agentic-automation` },
          { label: 'AI governance', href: `${W}/applied-ai/ai-governance` },
          { label: 'Claude practice', href: `${W}/applied-ai/claude` },
          { label: 'AI-assisted engineering', href: `${W}/applied-ai/ai-assisted-engineering` },
        ],
      },
      {
        label: 'Cloud and engineering',
        children: [
          { label: 'Cloud foundations', href: `${W}/cloud` },
          { label: 'Cloud migration', href: `${W}/cloud/migration` },
          { label: 'Software and data', href: `${W}/engineering-data` },
          { label: 'Security and compliance', href: `${W}/services/security-compliance` },
          { label: 'Architecture review', href: `${W}/consulting/enterprise-architecture` },
        ],
      },
      { label: 'Products', children: PRODUCTS },
      { label: 'Alliances', href: '/alliances', hidden: () => !hasMembership(site.partners) },
    ],
  },
  {
    kind: 'panel',
    id: 'industries',
    label: 'Industries',
    overviewHref: `${W}/industries`,
    intro: {
      heading: 'All industries',
      body: 'Financial services, legal and SaaS.',
      link: { label: 'All industries', href: `${W}/industries` },
    },
    groups: [
      { label: 'Financial services', href: `${W}/industries/financial-services` },
      { label: 'Legal & professional services', href: `${W}/industries/legal-professional-services` },
      { label: 'Software & SaaS', href: `${W}/industries/software-saas` },
    ],
  },
  {
    kind: 'panel',
    id: 'who-we-are',
    label: 'Company',
    overviewHref: '/who-we-are/about',
    intro: {
      heading: 'About us',
      body: 'Our vision, principles, people and how we work.',
      link: { label: 'About us', href: '/who-we-are/about' },
    },
    groups: [
      { label: 'About us', href: '/who-we-are/about' },
      { label: 'Leadership', href: '/who-we-are/leadership' },
      { label: 'How we work', href: '/who-we-are/how-we-work' },
      { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
      { label: 'Trust center', href: '/who-we-are/trust' },
      { label: 'Customer stories', href: '/customer-stories', hidden: () => stories.length === 0 },
      { label: 'News', href: '/news', hidden: () => news.length === 0 },
      { label: 'Events', href: '/events', hidden: () => events.length === 0 },
    ],
  },
  { kind: 'link', id: 'insights', label: 'Insights', href: '/insights', hidden: () => !hasArticles },
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
