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

export type UseCaseSector = 'law' | 'banking' | 'saas'

export interface UseCase {
  sector: UseCaseSector
  title: string
  /** The problem in the client's words. */
  problem: string
  /** What the local model or agent does. */
  local: string
  /** Why this data cannot go to a third-party AI service. */
  why: string
  /** Where a person stays in control. */
  decides: string
  /** The value, stated plainly. No invented numbers. */
  value: string
  href?: string
  linkLabel?: string
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
  /** Use cases with full detail and a sector filter (Local AI, 2026-11-11). Shown in full, not cut to one sentence. */
  | (BlockBase & { type: 'useCases'; items: UseCase[] })
  /** Worked example, step by step: today vs. what we build. Same layout as the industry pages. */
  | (BlockBase & {
      type: 'example'
      rows: { step: string; today: string; after: string }[]
      note?: string
      /** Heading for the "after" column. Default: "What we build". */
      afterLabel?: string
    })
  /** Local AI: hybrid routing illustration (sensitive work local, the rest to a cloud model). */
  | (BlockBase & { type: 'localRouting' })
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
  /**
   * Optional page-specific sections (2026-11-03). An industry page may use
   * these instead of `build`, so the sector pages stop sharing one shape.
   */
  /** A worked example: one real-world flow, step by step, today vs. after. */
  example?: {
    /** Short name for hub listings, e.g. "Intake and conflict checks". */
    name: string
    title: string
    lede: string
    rows: { step: string; today: string; after: string }[]
    note?: string
    href?: string
    linkLabel?: string
  }
  /** Further work, as short paragraphs of uneven length. No bullets. */
  more?: { title: string; items: { title: string; body: string; href?: string; linkLabel?: string }[] }
  /** A longer passage with a point of view. */
  opinion?: { name: string; title: string; paragraphs: string[]; href?: string; linkLabel?: string }
  /** Problem-led capabilities. */
  build?: {
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
