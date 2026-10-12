import { test, expect } from '@playwright/test'
import { publishedArticles } from '../lib/insights'
import { REGION_PAGES } from '../lib/region-pages'

/** Insights (drafts stay private) and the regional pages. */

test.use({ viewport: { width: 1440, height: 900 } })

test('/perspectives redirects permanently to /insights', async ({ request }) => {
  const res = await request.get('/perspectives', { maxRedirects: 0 })
  expect(res.status()).toBe(308)
  expect(res.headers()['location']).toMatch(/\/insights$/)
})

test('drafts never reach a production build, the sitemap or search', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text()
  const index = await (await request.get('/search-index.json')).json()
  const indexed = (index as { href: string }[]).map((e) => e.href)

  if (publishedArticles.length === 0) {
    expect((await request.get('/insights')).status()).toBe(404)
    expect(sitemap).not.toContain('/insights')
    expect(indexed.some((h) => h.startsWith('/insights'))).toBe(false)
    await page.goto('/')
    await expect(page.locator('.ys-hdr-nav').getByRole('link', { name: 'Insights' })).toHaveCount(0)
  } else {
    for (const a of publishedArticles) {
      expect(sitemap).toContain(`/insights/${a.slug}`)
      expect(indexed).toContain(`/insights/${a.slug}`)
    }
  }
})

for (const r of REGION_PAGES) {
  test(`/regions/${r.slug} renders with sources and is in the sitemap`, async ({ page, request }) => {
    const res = await page.goto(`/regions/${r.slug}`)
    expect(res?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(r.title)
    await expect(page.locator('#region-sources + ol li')).toHaveCount(r.sources.length)
    expect(await (await request.get('/sitemap.xml')).text()).toContain(`/regions/${r.slug}`)
  })
}

test('region control is hidden and unpublished regional pages are not served', async ({ page, request }) => {
  await page.goto('/')
  await expect(page.locator('.ys-region-trigger')).toHaveCount(0)
  if (REGION_PAGES.length === 0) {
    for (const slug of ['uk', 'middle-east']) {
      expect((await request.get(`/regions/${slug}`)).status(), slug).toBe(404)
    }
    expect(await (await request.get('/sitemap.xml')).text()).not.toContain('/regions/')
  }
})
