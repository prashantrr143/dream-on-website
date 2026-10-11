import type { MetadataRoute } from 'next'
import { hasArticles, publishedArticles } from '@/lib/insights'
import { REGION_PAGES } from '@/lib/region-pages'
import { siteConfig } from '@/lib/site.config'
import { SITE_URL, indexableRoutes } from '@/lib/seo'

/**
 * Driven from the same table as the page metadata, so a route cannot be
 * given a title and then forgotten here, and a noindex page cannot leak
 * into the sitemap.
 *
 * /insights, its articles and case studies appear only once something is
 * published; drafts never do.
 */

/** Rough importance, used only to order crawl priority. */
const PRIORITY: Record<string, number> = {
  '/': 1.0,
  '/what-we-do': 0.9,
  '/what-we-do/consulting': 0.9,
  '/what-we-do/cloud': 0.9,
  '/what-we-do/applied-ai': 0.9,
  '/what-we-do/applied-ai/claude': 0.9,
  '/what-we-do/engineering-data': 0.9,
  '/who-we-are/how-we-work': 0.8,
  '/who-we-are/about': 0.8,
  '/contact-us': 0.8,
}

function priorityFor(route: string): number {
  if (PRIORITY[route] !== undefined) return PRIORITY[route] as number
  // Deeper pages sit just below their section.
  const depth = route.split('/').filter(Boolean).length
  return depth >= 3 ? 0.7 : depth === 2 ? 0.8 : 0.6
}

/**
 * lastmod only where we know a real date. Stamping every URL with the
 * build time tells Google every page changed on every deploy, and Google
 * then ignores lastmod for the whole site.
 */
function lastModifiedFor(route: string): Date | undefined {
  const article = publishedArticles.find((a) => `/insights/${a.slug}` === route)
  if (article) return new Date(article.reviewedAt > (article.publishedAt ?? '') ? article.reviewedAt : article.publishedAt!)
  const region = REGION_PAGES.find((r) => `/regions/${r.slug}` === route)
  if (region) return new Date(region.reviewedAt)
  return undefined
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = indexableRoutes().filter((route) => {
    if (route === '/insights') return hasArticles
    if (route === '/customer-stories') return siteConfig.caseStudies.length > 0
    return true
  })

  const caseStudyRoutes = siteConfig.caseStudies.map((cs) => `/customer-stories/${cs.slug}`)
  const articleRoutes = publishedArticles.map((a) => `/insights/${a.slug}`)
  const regionRoutes = REGION_PAGES.map((r) => `/regions/${r.slug}`)

  return [...routes, ...caseStudyRoutes, ...articleRoutes, ...regionRoutes].map((route) => {
    const lastModified = lastModifiedFor(route)
    return {
      url: `${SITE_URL}${route === '/' ? '' : route}`,
      ...(lastModified ? { lastModified } : {}),
      priority: priorityFor(route),
    }
  })
}
