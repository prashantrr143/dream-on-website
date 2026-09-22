import type { MetadataRoute } from 'next'
import { hasArticles } from '@/lib/perspectives'
import { SITE_URL, indexableRoutes } from '@/lib/seo'

/**
 * Driven from the same table as the page metadata, so a route cannot be
 * given a title and then forgotten here, and a noindex page cannot leak
 * into the sitemap.
 *
 * /perspectives is listed but has no posts yet: lib/perspectives.ts
 * exports an empty array, and the index page calls notFound() while it
 * is empty. It is therefore excluded until there is something to crawl.
 */

/** Rough importance, used only to order crawl priority. */
const PRIORITY: Record<string, number> = {
  '/': 1.0,
  '/solutions': 0.9,
  '/applied-ai': 0.9,
  '/industries': 0.8,
  '/how-we-work': 0.8,
  '/about-us': 0.8,
  '/contact-us': 0.8,
}

function priorityFor(route: string): number {
  if (PRIORITY[route] !== undefined) return PRIORITY[route] as number
  // Second-level pages sit just below their section.
  return route.split('/').filter(Boolean).length > 1 ? 0.7 : 0.6
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = indexableRoutes().filter((route) => {
    if (route === '/perspectives') return hasArticles
    return true
  })

  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency:
      route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: priorityFor(route),
  }))
}
