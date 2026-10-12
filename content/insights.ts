import type { CollectionItem } from './types'
import { publishedArticles } from '@/lib/insights'

/**
 * Insights as collection items, for carousels and "In focus" tabs.
 * Published articles only (drafts never appear here). The articles
 * themselves live in lib/insights/articles/.
 */
export const insights: CollectionItem[] = publishedArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  summary: a.summary,
  date: a.publishedAt ?? a.reviewedAt,
  industries: [],
  services: [],
  clouds: [],
  href: `/insights/${a.slug}`,
}))
