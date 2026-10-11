import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /api/ holds no indexable content. Do NOT disallow pages that carry
      // a noindex (e.g. /privacy): a blocked page's noindex can't be read,
      // and redirects that land there (/policy, /terms) could not be
      // followed. /search is crawlable but noindex for the same reason.
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
