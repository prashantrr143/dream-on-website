/**
 * Insights articles are typed data, not MDX: no extra build tooling, and
 * the same object feeds the page, the index, search and the sitemap.
 */

export interface ArticleSource {
  title: string
  url: string
  /** Publisher, e.g. "European Commission", "Microsoft Learn". */
  publisher: string
}

export interface ArticleSection {
  /** h2. Omit for the opening section. */
  heading?: string
  paragraphs: string[]
  /** Optional bullet list, rendered after the paragraphs. */
  bullets?: string[]
}

export interface Article {
  slug: string
  title: string
  /** One or two sentences. Also the meta description: 155 characters max. */
  summary: string
  category: 'Applied AI' | 'Regulation' | 'Security & Compliance' | 'Cloud' | 'Financial services'
  readTime: string
  author: 'YatiSphere team'
  /**
   * Drafts are visible only in development (or with INSIGHTS_PREVIEW=1)
   * and never appear in the nav, sitemap or search. Set to 'published'
   * and add publishedAt after review.
   */
  status: 'draft' | 'published'
  /** ISO date, set when published. */
  publishedAt?: string
  /** ISO date the facts were last checked against the sources. */
  reviewedAt: string
  sections: ArticleSection[]
  /** Every factual claim about law, regulation or a product traces here. */
  sources: ArticleSource[]
  /** Up to three internal links shown after the article. */
  related: { label: string; href: string }[]
}
