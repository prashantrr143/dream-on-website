import { NextResponse, type NextRequest } from 'next/server'

/**
 * URL canonicalization in ONE redirect.
 *
 * Google reports every intermediate URL in a redirect chain as "Page with
 * redirect", and chains waste crawl budget. Previously a request like
 * https://www.yatisphere.com/services/ took three hops (strip the
 * trailing slash, then www -> apex, then /services -> /solutions).
 * Here the host, the trailing slash and any legacy path are resolved
 * together, so every non-canonical URL reaches its final address in a
 * single 308. (http -> https is done by Vercel before this runs.)
 *
 * next.config sets skipTrailingSlashRedirect so Next's own slash redirect
 * does not run first and split this back into two hops.
 */

const CANONICAL_HOST = 'yatisphere.com'

/**
 * Old URL -> current URL (revamp IA). Every entry points at a final URL,
 * never at another legacy one, so each resolves in a single hop.
 */
export const LEGACY: Record<string, string> = {
  // Services and pillars
  '/services': '/what-we-do',
  '/solutions': '/what-we-do',
  '/solutions/cloud': '/what-we-do/cloud',
  '/solutions/devops': '/what-we-do/services/devops-platform-engineering',
  '/solutions/data': '/what-we-do/services/data-analytics',
  '/solutions/security': '/what-we-do/services/security-compliance',
  '/solutions/modernization': '/what-we-do/services/modernization',
  '/solutions/software-engineering': '/what-we-do/services/software-engineering',
  '/solutions/consulting': '/what-we-do/consulting',
  '/solutions/ai-ml': '/what-we-do/applied-ai',
  '/applied-ai': '/what-we-do/applied-ai',
  // Industries
  '/industries': '/what-we-do#industries',
  '/industries/financial-services': '/what-we-do/industries/financial-services',
  '/industries/legal-professional-services': '/what-we-do/industries/legal-professional-services',
  '/industries/healthcare': '/what-we-do/industries/healthcare',
  '/industries/government-public-sector': '/what-we-do/industries/public-sector',
  '/industries/enterprise-technology': '/what-we-do/industries/software-saas',
  '/industries/software-saas': '/what-we-do/industries/software-saas',
  // Who we are
  '/about-us': '/who-we-are/about',
  '/how-we-work': '/who-we-are/how-we-work',
  '/responsible-ai': '/who-we-are/responsible-ai',
  '/security': '/who-we-are/trust',
  '/trust': '/who-we-are/trust',
  // Insights and stories
  '/perspectives': '/insights',
  '/case-studies': '/customer-stories',
  // /policy was a duplicate privacy policy; Terms were withdrawn.
  '/policy': '/privacy#cookies',
  '/terms': '/privacy',
}

const LEGACY_PREFIXES: [string, string][] = [
  ['/perspectives/', '/insights/'],
  ['/case-studies/', '/customer-stories/'],
]

export function canonicalPath(pathname: string): string {
  let path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (path === '') path = '/'
  const legacy = LEGACY[path]
  if (legacy) return legacy
  for (const [from, to] of LEGACY_PREFIXES) {
    if (path.startsWith(from)) return to + path.slice(from.length)
  }
  return path
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  const host = (request.headers.get('host') ?? '').toLowerCase()
  const isWww = host === `www.${CANONICAL_HOST}`
  const path = canonicalPath(url.pathname)

  if (!isWww && path === url.pathname) return NextResponse.next()

  // On www, send to the canonical origin; elsewhere (localhost, previews)
  // stay on the current origin so the redirect works there too.
  const origin = isWww ? `https://${CANONICAL_HOST}` : url.origin
  const destination = new URL(path, origin)
  destination.search = url.search
  return NextResponse.redirect(destination, 308)
}

export const config = {
  // Everything except Next's build assets, so www/robots.txt and
  // www/sitemap.xml are canonicalized too.
  matcher: ['/((?!_next/static|_next/image).*)'],
}
