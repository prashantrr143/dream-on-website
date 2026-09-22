import type { MetadataRoute } from 'next'
import { hasArticles } from '@/lib/perspectives'

const BASE = 'https://yatisphere.com'

/**
 * robots.txt has always advertised /sitemap.xml, but no sitemap existed,
 * so the URL 404'd and Google had no crawl list to work from.
 *
 * /perspectives is deliberately absent: it calls notFound() while
 * hasArticles is false, and submitting a 404 to Google costs crawl
 * budget and trust. It is included automatically once articles exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },

    // Primary offering
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/applied-ai', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/solutions/cloud', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/data', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/devops', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/security', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions/consulting', priority: 0.8, changeFrequency: 'monthly' },

    // Industries
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/industries/financial-services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/legal-professional-services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/healthcare', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/government-public-sector', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/enterprise-technology', priority: 0.7, changeFrequency: 'monthly' },

    // Company
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/how-we-work', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact-us', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.6, changeFrequency: 'monthly' },

    // Trust and legal
    { path: '/responsible-ai', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/security', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
  ]

  if (hasArticles) {
    routes.push({ path: '/perspectives', priority: 0.7, changeFrequency: 'weekly' })
  }

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
