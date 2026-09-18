import type { MetadataRoute } from 'next'

/**
 * The /case-studies pages are unlinked from navigation while their
 * content is rebuilt around real engagements. Disallowing them here
 * keeps the placeholder material out of search results in the
 * meantime; remove these entries once the pages carry real work.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/case-studies', '/case-studies/'],
    },
    sitemap: 'https://yatisphere.com/sitemap.xml',
  }
}
