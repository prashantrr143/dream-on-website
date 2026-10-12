import type { ContentPage } from './types'
import { pages as whatWeDo } from './what-we-do'
import { pages as consulting } from './consulting'
import { pages as cloud } from './cloud'
import { pages as appliedAi } from './applied-ai'
import { pages as engineeringData } from './engineering-data'
import { pages as industries } from './industries'

export type { ContentPage } from './types'

/** Every data-driven page under /what-we-do. */
export const CONTENT_PAGES: ContentPage[] = [
  ...whatWeDo,
  ...consulting,
  ...cloud,
  ...appliedAi,
  ...engineeringData,
  ...industries,
]

export function getContentPage(path: string): ContentPage | undefined {
  return CONTENT_PAGES.find((p) => p.path === path)
}
