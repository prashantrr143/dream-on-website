import type { Article } from './types'
import { article as euAiAct } from './articles/eu-ai-act-for-financial-services-operations'
import { article as azureOpenAiUae } from './articles/azure-openai-uae-north-data-residency'
import { article as pilotToProduction } from './articles/taking-an-ai-pilot-to-production'
import { article as soc2Evidence } from './articles/soc-2-evidence-from-pipelines'
import { article as kycAutomation } from './articles/kyc-automation-without-black-boxes'
import { article as azureFinops } from './articles/azure-finops-quick-wins'

export type { Article, ArticleSection, ArticleSource } from './types'

/**
 * Every Insights article, published or not.
 *
 * Drafts render only in development, or in a build with
 * INSIGHTS_PREVIEW=1 (e.g. a Vercel preview for review). Production
 * builds never include them, and they never reach the nav, sitemap or
 * search index, which use `publishedArticles` only.
 */
export const ALL_ARTICLES: Article[] = [
  euAiAct,
  azureOpenAiUae,
  pilotToProduction,
  soc2Evidence,
  kycAutomation,
  azureFinops,
]

export const INSIGHTS_PREVIEW =
  process.env.NODE_ENV !== 'production' || process.env['INSIGHTS_PREVIEW'] === '1'

const byDate = (a: Article, b: Article) => (b.publishedAt ?? b.reviewedAt).localeCompare(a.publishedAt ?? a.reviewedAt)

export const publishedArticles = ALL_ARTICLES.filter((a) => a.status === 'published').sort(byDate)

/** What the /insights pages render: published, plus drafts in preview. */
export const visibleArticles = (INSIGHTS_PREVIEW ? ALL_ARTICLES : publishedArticles).slice().sort(byDate)

/** True once at least one article is published (drives nav, footer, sitemap). */
export const hasArticles = publishedArticles.length > 0

export function getVisibleArticle(slug: string): Article | undefined {
  return visibleArticles.find((a) => a.slug === slug)
}
