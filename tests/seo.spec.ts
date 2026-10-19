import { test, expect, type APIRequestContext } from '@playwright/test'

/**
 * Indexing guardrails. Google Search Console reports every URL in a
 * redirect chain as "Page with redirect", and a sitemap or canonical that
 * points at a redirect splits indexing signals. These tests keep:
 * - every non-canonical URL one 308 away from a 200,
 * - the sitemap made only of 200, self-canonical, indexable URLs,
 * - robots.txt and robots headers free of contradictions.
 */

const PROD = 'yatisphere.com'

async function hop(request: APIRequestContext, host: string, path: string) {
  const res = await request.get(path, { headers: { host }, maxRedirects: 0 })
  return { status: res.status(), location: res.headers()['location'] ?? '' }
}

const toPath = (location: string) => location.replace(/^https?:\/\/[^/]+/, '').split('#')[0] || '/'

const SINGLE_HOP: [host: string, path: string, expected: string][] = [
  [`www.${PROD}`, '/', `https://${PROD}/`],
  [`www.${PROD}`, '/who-we-are/about/', `https://${PROD}/who-we-are/about`],
  [PROD, '/who-we-are/about/', '/who-we-are/about'],
  [`www.${PROD}`, '/services/', `https://${PROD}/what-we-do`],
  [PROD, '/solutions', '/what-we-do'],
  [PROD, '/solutions/cloud', '/what-we-do/cloud'],
  [PROD, '/solutions/devops/', '/what-we-do/services/devops-platform-engineering'],
  [PROD, '/solutions/consulting', '/what-we-do/consulting'],
  [PROD, '/solutions/modernization', '/what-we-do/services/modernization'],
  [PROD, '/applied-ai', '/what-we-do/applied-ai'],
  [PROD, '/solutions/ai-ml', '/what-we-do/applied-ai'],
  [PROD, '/industries/government-public-sector', '/what-we-do'],
  [PROD, '/what-we-do/cloud/google-cloud', '/what-we-do/cloud'],
  [PROD, '/what-we-do/industries/healthcare', '/what-we-do'],
  [`www.${PROD}`, '/industries/enterprise-technology', `https://${PROD}/what-we-do/industries/software-saas`],
  [PROD, '/about-us', '/who-we-are/about'],
  [PROD, '/how-we-work', '/who-we-are/how-we-work'],
  [PROD, '/responsible-ai', '/who-we-are/responsible-ai'],
  [PROD, '/security', '/who-we-are/trust'],
  [PROD, '/trust', '/who-we-are/trust'],
  [PROD, '/perspectives', '/insights'],
  [PROD, '/policy', '/privacy#cookies'],
  [PROD, '/terms/', '/privacy'],
  [`www.${PROD}`, '/sitemap.xml', `https://${PROD}/sitemap.xml`],
  [`www.${PROD}`, '/contact-us/?interest=security', `https://${PROD}/contact-us?interest=security`],
]

for (const [host, path, expected] of SINGLE_HOP) {
  test(`${host}${path} reaches its final URL in one redirect`, async ({ request }) => {
    const first = await hop(request, host, path)
    expect(first.status).toBe(308)
    expect(first.location.endsWith(expected) || first.location === expected).toBe(true)

    // The target must answer 200 directly: no second hop.
    const finalPath = toPath(first.location)
    const second = await hop(request, PROD, finalPath)
    // /insights is a 404 until an article is published; that is not a chain.
    if (finalPath === '/insights') expect([200, 404]).toContain(second.status)
    else expect(second.status).toBe(200)
  })
}

test('canonical URLs are served directly, never redirected', async ({ request }) => {
  for (const path of ['/', '/who-we-are/about', '/what-we-do/cloud', '/sitemap.xml', '/robots.txt']) {
    expect((await hop(request, PROD, path)).status, path).toBe(200)
  }
})

test('every sitemap URL is a 200, self-canonical and indexable', async ({ request }) => {
  const xml = await (await request.get('/sitemap.xml', { headers: { host: PROD } })).text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]!)
  expect(urls.length).toBeGreaterThan(10)
  expect(xml).not.toContain('<changefreq>') // ignored by Google; removed
  for (const url of urls) {
    expect(url.startsWith(`https://${PROD}`), url).toBe(true)
    expect(url.endsWith('/') && url !== `https://${PROD}/`, `${url} has a trailing slash`).toBe(false)
    const path = url.replace(`https://${PROD}`, '') || '/'
    const res = await request.get(path, { headers: { host: PROD }, maxRedirects: 0 })
    expect(res.status(), url).toBe(200)
    const html = await res.text()
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
    expect(canonical, `${url} canonical`).toBe(url)
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? ''
    expect(robots, `${url} robots`).not.toContain('noindex')
  }
})

test('robots.txt blocks nothing that carries its own noindex', async ({ request }) => {
  const robots = await (await request.get('/robots.txt', { headers: { host: PROD } })).text()
  expect(robots).toContain(`Sitemap: https://${PROD}/sitemap.xml`)
  expect(robots).not.toMatch(/Disallow:\s*\/privacy/)
  expect(robots).not.toMatch(/^Host:/m)
  // /privacy stays crawlable and says noindex itself.
  const html = await (await request.get('/privacy', { headers: { host: PROD } })).text()
  expect(html).toMatch(/<meta name="robots" content="[^"]*noindex/)
})

test('production pages carry no blanket X-Robots-Tag; other hosts are noindex', async ({ request }) => {
  const prod = await request.get('/who-we-are/about', { headers: { host: PROD } })
  expect(prod.headers()['x-robots-tag']).toBeUndefined()
  const preview = await request.get('/who-we-are/about', { headers: { host: 'yatisphere-git-branch.vercel.app' } })
  expect(preview.headers()['x-robots-tag']).toContain('noindex')
})

// No customer stories yet: every stories URL goes to Insights in one
// temporary hop instead of a 404 (or a 308 into a 404).
const STORIES_FALLBACK: [string, string][] = [
  [PROD, '/case-studies'],
  [PROD, '/case-studies/some-old-story'],
  [PROD, '/customer-stories'],
  [PROD, '/customer-stories?industry=Financial%20services'],
  [`www.${PROD}`, '/case-studies/'],
]

for (const [host, path] of STORIES_FALLBACK) {
  test(`${host}${path} goes to /insights in one temporary redirect`, async ({ request }) => {
    const first = await hop(request, host, path)
    expect(first.status).toBe(307)
    expect(toPath(first.location)).toBe('/insights')
    const second = await hop(request, PROD, '/insights')
    expect(second.status).toBe(200)
  })
}
