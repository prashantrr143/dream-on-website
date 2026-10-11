import { ROUTE_META } from './seo'
import { publishedArticles, hasArticles } from './insights'
import { siteConfig } from './site.config'
import { REGION_PAGES } from './region-pages'
import { CONTENT_PAGES } from '@/content/pages'
import type { SearchEntry, SearchType } from './search-core'

/**
 * The search index, built from the same sources as the sitemap: the
 * data-driven /what-we-do pages, the fixed routes in lib/seo.ts, regional
 * pages and published articles. A page cannot be published without being
 * findable. Served at build time as /search-index.json.
 */

function typeFor(route: string): SearchType {
  if (route.startsWith('/what-we-do/industries/')) return 'Industries'
  if (route.startsWith('/what-we-do/')) return 'Services'
  if (route.startsWith('/customer-stories') || route.startsWith('/insights')) return 'Insights'
  return 'Pages'
}

const strip = (title: string) => title.replace(/\s*\|\s*YatiSphere$/, '')

export function buildSearchIndex(): SearchEntry[] {
  const contentPages: SearchEntry[] = CONTENT_PAGES.map((p) => ({
    // The on-page name reads better in a list than the SEO title.
    title: p.path === '/what-we-do' ? 'What we do' : p.name,
    href: p.path,
    description: p.meta.description,
    type: typeFor(p.path),
  }))

  const fixed: SearchEntry[] = Object.entries(ROUTE_META)
    .filter(([, m]) => !m.noindex)
    .filter(([r]) => (r === '/insights' ? hasArticles : true))
    .filter(([r]) => (r === '/customer-stories' ? siteConfig.caseStudies.length > 0 : true))
    .map(([route, meta]) => ({ title: strip(meta.title), href: route, description: meta.description, type: typeFor(route) }))

  const regions: SearchEntry[] = REGION_PAGES.map((r) => ({
    title: strip(r.metaTitle),
    href: `/regions/${r.slug}`,
    description: r.metaDescription,
    type: 'Pages' as const,
  }))

  const insights: SearchEntry[] = [
    ...publishedArticles.map((a) => ({ title: a.title, href: `/insights/${a.slug}`, description: a.summary, type: 'Insights' as const })),
    ...siteConfig.caseStudies.map((cs) => ({
      title: cs.title,
      href: `/customer-stories/${cs.slug}`,
      description: cs.summary,
      type: 'Insights' as const,
    })),
  ]

  return [...contentPages, ...fixed, ...regions, ...insights]
}
