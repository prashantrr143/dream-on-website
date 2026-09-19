/**
 * Single source of truth for Perspectives articles.
 *
 * The array is intentionally empty: the page previously listed eight
 * article cards with no article behind any of them. While it is empty
 * the /perspectives route returns 404 and every link to it is hidden,
 * so nothing advertises writing that does not exist.
 *
 * Adding an entry here brings the page and its links back automatically.
 */

export interface Article {
  slug: string
  title: string
  category: string
  summary: string
  readTime: string
  /** ISO 8601 date, e.g. "2026-09-19" */
  publishedAt: string
  author: string
}

export const articles: Article[] = []

/** True when there is at least one real article to show. */
export const hasArticles = articles.length > 0
