/**
 * Which Insights articles are live. This is the publishing switch, kept in
 * its own tiny module so the header and footer (browser code) can check
 * "is there anything to link to?" without importing the article text.
 *
 * To publish an article: add its slug here and set status: 'published'
 * and publishedAt in its file under lib/insights/articles/. A test
 * (tests/content.spec.ts) fails if the two ever disagree.
 */
export const PUBLISHED_INSIGHT_SLUGS: string[] = []

/** True once at least one article is published (drives nav, footer, sitemap). */
export const hasArticles = PUBLISHED_INSIGHT_SLUGS.length > 0
