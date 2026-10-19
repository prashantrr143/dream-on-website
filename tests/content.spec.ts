import { test, expect } from '@playwright/test'
import { indexableRoutes } from '../lib/seo'

/** Site-wide content checks (audit G-03, G-14, H-03). */

const ROUTES = indexableRoutes().filter((r) => r !== '/insights' && r !== '/case-studies')

test('content is visible without JavaScript (G-03)', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false })
  const page = await ctx.newPage()
  for (const route of ['/', '/what-we-do', '/what-we-do/applied-ai', '/who-we-are/how-we-work', '/what-we-do/industries/financial-services']) {
    await page.goto(route)
    const headings = page.locator('main h2')
    const n = await headings.count()
    expect(n, route).toBeGreaterThan(0)
    for (let i = 0; i < n; i++) {
      const h = headings.nth(i)
      const opacity = await h.evaluate((el) => {
        let o = 1
        for (let e: Element | null = el; e; e = e.parentElement) o *= Number(getComputedStyle(e).opacity)
        return o
      })
      expect(opacity, `${route} h2 #${i}`).toBe(1)
    }
  }
  await ctx.close()
})

test('sections are already visible mid-scroll, with no reveal delay (G-03)', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
  // No waiting: whatever is in view must already be painted.
  const visible = await page.evaluate(() =>
    Array.from(document.querySelectorAll('main h2, main h3'))
      .filter((el) => {
        const r = el.getBoundingClientRect()
        return r.top >= 0 && r.bottom <= window.innerHeight
      })
      .map((el) => {
        let o = 1
        for (let e: Element | null = el; e; e = e.parentElement) o *= Number(getComputedStyle(e).opacity)
        return o
      })
  )
  expect(visible.length).toBeGreaterThan(0)
  for (const o of visible) expect(o).toBe(1)
})

test('no raw escape sequences render on any page', async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(route)
    const text = await page.locator('body').innerText()
    expect(text, route).not.toMatch(/\\u[0-9a-fA-F]{4}/)
  }
})

test('no meta keywords, and service pages carry Service schema (G-14)', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('meta[name="keywords"]')).toHaveCount(0)
  await page.goto('/what-we-do/cloud')
  const types = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((els) => els.map((e) => JSON.parse(e.textContent || '{}')['@type']))
  expect(types).toContain('Service')
  expect(types).toContain('BreadcrumbList')
  expect(types).toContain('Organization')
})

test('each home problem links somewhere different (H-03)', async ({ page }) => {
  await page.goto('/')
  const tabs = page.locator('.ys-pp-tab')
  await expect(tabs).toHaveCount(6)
  const hrefs: (string | null)[] = []
  for (let i = 0; i < 6; i++) {
    await tabs.nth(i).click()
    await expect(tabs.nth(i)).toHaveAttribute('aria-selected', 'true')
    hrefs.push(await page.locator('#pp-panel .ys-pp-link').getAttribute('href'))
  }
  expect(new Set(hrefs).size).toBe(6)
})

test('problem picker: arrow keys move between problems and stop auto-advance', async ({ page }) => {
  await page.goto('/')
  await page.locator('.ys-pp-tab').first().focus()
  await page.keyboard.press('ArrowDown')
  await expect(page.locator('#pp-tab-1')).toBeFocused()
  await expect(page.locator('#pp-tab-1')).toHaveAttribute('aria-selected', 'true')
  await page.keyboard.press('End')
  await expect(page.locator('#pp-tab-5')).toHaveAttribute('aria-selected', 'true')
  await page.waitForTimeout(6000)
  await expect(page.locator('#pp-tab-5')).toHaveAttribute('aria-selected', 'true')
})

test('the published-insights switch agrees with the article files', async () => {
  const { ALL_ARTICLES } = await import('../lib/insights')
  const { PUBLISHED_INSIGHT_SLUGS } = await import('../lib/insights/published')
  const published = ALL_ARTICLES.filter((a) => a.status === 'published').map((a) => a.slug).sort()
  expect([...PUBLISHED_INSIGHT_SLUGS].sort()).toEqual(published)
})
