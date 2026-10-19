import type { ContentPage } from './types'
import { pages as whatWeDo } from './what-we-do'
import { pages as consulting } from './consulting'
import { pages as cloud } from './cloud'
import { pages as appliedAi } from './applied-ai'
import { pages as engineeringData } from './engineering-data'
import { pages as industries } from './industries'

export type { ContentPage } from './types'

/**
 * Pages kept as content but not published (positioning refresh,
 * 2026-10-19: fewer, deeper pages). Each one 308-redirects to its parent
 * in proxy.ts. Remove a path here to bring the page back.
 */
export const RETIRED_PATHS = new Set<string>([
  '/what-we-do/cloud/google-cloud',
  '/what-we-do/industries/healthcare',
  '/what-we-do/industries/public-sector',
])

/** Every published data-driven page under /what-we-do. */
export const CONTENT_PAGES: ContentPage[] = [
  ...whatWeDo,
  ...consulting,
  ...cloud,
  ...appliedAi,
  ...engineeringData,
  ...industries,
].filter((p) => !RETIRED_PATHS.has(p.path))

export function getContentPage(path: string): ContentPage | undefined {
  return CONTENT_PAGES.find((p) => p.path === path)
}
