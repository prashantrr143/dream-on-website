import type { Cloud, IndustrySlug } from '../types'

/**
 * Page content for the revamp templates (brief section 6).
 *
 * Every /what-we-do page is data: a hero plus an ordered list of blocks,
 * rendered by components/page/ContentPage.tsx. Block types map to the
 * brief's template sections; anything optional renders nothing when absent.
 */

export interface Hero {
  /** UPPERCASE breadcrumb kicker, e.g. "WHAT WE DO / CLOUD". */
  kicker: string
  /** 3–6 words. */
  h1: string
  /** One sentence. */
  subhead: string
  image?: string
  imageAlt?: string
}

export interface Meta {
  /** <= 60 characters including " | YatiSphere". */
  title: string
  /** <= 155 characters. */
  description: string
}

export interface Card {
  title: string
  body: string
  href?: string
  /** Optional short list under the body. */
  bullets?: string[]
}

export interface LinkItem {
  label: string
  href: string
  descriptor?: string
}

/** Each block may carry an `id` so menus can deep-link to it. */
interface BlockBase {
  id?: string
  kicker?: string
  title?: string
  lede?: string
}

export type Block =
  /** Large statement paragraph under the hero. */
  | (BlockBase & { type: 'statement'; text: string })
  /** Image/text-style cards ("Our capabilities", "Where we help", "How we help"). */
  | (BlockBase & { type: 'cards'; cards: Card[]; columns?: 2 | 3 | 4 })
  /** "Our solutions": horizontal tabs, each with a description and 3–4 bullets. */
  | (BlockBase & { type: 'tabs'; tabs: { label: string; description: string; bullets: string[] }[] })
  /** Numbered steps (engagement flow, principles). */
  | (BlockBase & { type: 'steps'; steps: { title: string; body: string }[] })
  /** Plain list (outcomes, deliverables). Statements; numbers only if real. */
  | (BlockBase & { type: 'list'; items: string[] })
  /** Accordion ("Standards your organization is held to"). */
  | (BlockBase & { type: 'accordion'; items: { title: string; body: string }[] })
  /** FAQ accordion; also emitted as FAQPage JSON-LD. */
  | (BlockBase & { type: 'faq'; items: { q: string; a: string }[] })
  /** Grid of links with descriptors (industries grid, related pages). */
  | (BlockBase & { type: 'links'; links: LinkItem[] })
  /** A packaged offer: what's included and the deliverable. Never a price. */
  | (BlockBase & { type: 'offer'; name: string; summary: string; includes: string[]; deliverable: string })
  /** Alternating large image/text sections (theme page "five layers"). */
  | (BlockBase & { type: 'layers'; layers: { title: string; body: string; href: string; linkLabel: string }[] })
  /** Small print, e.g. the trademark disclaimer. */
  | { type: 'note'; text: string; id?: string }
  /** Applied AI: interactive "Human + AI in control" workflow diagram. */
  | (BlockBase & { type: 'workflow' })
  /** Applied AI: "Model-neutral by design" strip. */
  | (BlockBase & { type: 'modelNeutral' })
  /** Cloud pillar: "Choose your cloud" cards. */
  | (BlockBase & { type: 'cloudChooser' })
  /** In focus: tabs from stories/insights/news/events filtered by these tags; hidden when empty. */
  | (BlockBase & { type: 'inFocus'; industries?: IndustrySlug[]; services?: string[]; clouds?: Cloud[] })

/**
 * Industry pages (rewrite, 2026-10-19). Rendered by IndustryView in full:
 * the brevity rules for service pages do not apply, because each section
 * here has to deliver what its heading promises.
 */
export interface IndustryDetail {
  slug: IndustrySlug
  /** Who we work with, as short chips. */
  forWho: string[]
  /** What makes IT in this sector different. */
  context: { title: string; paragraphs: string[] }
  /** Problem-led capabilities. */
  build: {
    title: string
    /** In the client's words. */
    problem: string
    body: string
    bullets: string[]
    outcome: string
    href: string
    linkLabel: string
  }[]
  standards: {
    lede: string
    /** Regulators and rule-makers by region, where the sector has them. */
    regions?: { region: string; bodies: string }[]
    items: { title: string; body: string }[]
  }
  /** The first engagement, made specific to the sector. */
  start: { lede: string; steps: { title: string; body: string }[] }
  related: LinkItem[]
  cta: { title: string; body: string }
}

export interface ContentPage {
  /** Full path, e.g. "/what-we-do/cloud/aws". */
  path: string
  meta: Meta
  hero: Hero
  /** Ancestors for breadcrumbs (excluding Home and this page). */
  parents: { name: string; path: string }[]
  /** Breadcrumb name for this page. */
  name: string
  blocks: Block[]
  /** Preset for the contact banner/overlay, e.g. "Claude". */
  contactInterest?: string
  /** Contact banner override. */
  contact?: { title: string; body: string }
  /** Industry page: rendered by IndustryView instead of the block list. */
  industry?: IndustryDetail
  /** Section hub rendered by its own view. */
  hub?: 'industries'
}
