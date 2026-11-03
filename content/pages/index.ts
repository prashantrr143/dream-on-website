import type { ContentPage } from './types'
import { pages as whatWeDo } from './what-we-do'
import { pages as consulting } from './consulting'
import { pages as cloud } from './cloud'
import { pages as appliedAi } from './applied-ai'
import { pages as engineeringData } from './engineering-data'
import { pages as industries } from './industries'
import { pages as industriesLive } from './industries-live'

export type { ContentPage } from './types'

import { RETIRED, liveHref } from './retired'

export { RETIRED, liveHref } from './retired'

/** Retired paths (see retired.ts): kept as data, not published. */
export const RETIRED_PATHS = new Set<string>(Object.keys(RETIRED))

type Linkish = { href?: string; label?: string; title?: string }

/**
 * Point every link in a page at a live URL, then drop links that now
 * point back at the page itself and duplicates that two retired pages
 * merging into one target would create.
 */
function relink(page: ContentPage): ContentPage {
  const fix = <T extends Linkish>(items: T[]): T[] => {
    const seen = new Set<string>()
    const out: T[] = []
    for (const it of items) {
      if (!it.href) { out.push(it); continue }
      const href = liveHref(it.href)
      if (href === page.path) {
        // A card keeps its text as a capability on the page; a bare link goes.
        if ('body' in it) out.push({ ...it, href: undefined })
        continue
      }
      if (seen.has(href)) continue
      seen.add(href)
      out.push({ ...it, href })
    }
    return out
  }
  const blocks = page.blocks.map((b) => {
    if (b.type === 'cards') return { ...b, cards: fix(b.cards) }
    if (b.type === 'links') return { ...b, links: fix(b.links) }
    if (b.type === 'layers') return { ...b, layers: b.layers.map((l) => ({ ...l, href: liveHref(l.href) })) }
    return b
  })
  const industry = page.industry && {
    ...page.industry,
    ...(page.industry.build ? { build: page.industry.build.map((x) => ({ ...x, href: liveHref(x.href) })) } : {}),
    related: fix(page.industry.related),
  }
  return { ...page, blocks, ...(industry ? { industry } : {}) }
}

/** Every published data-driven page under /what-we-do. */
export const CONTENT_PAGES: ContentPage[] = [
  ...whatWeDo,
  ...consulting,
  ...cloud,
  ...appliedAi,
  ...engineeringData,
  ...industriesLive,
  ...industries,
].filter((p) => !RETIRED_PATHS.has(p.path))
  .map(relink)

export function getContentPage(path: string): ContentPage | undefined {
  return CONTENT_PAGES.find((p) => p.path === path)
}
