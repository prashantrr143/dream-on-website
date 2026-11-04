import { test, expect } from '@playwright/test'

/** Site search was removed (2026-11-04): no header control, old URL goes home. */

test('no search control in the header, desktop or mobile', async ({ page }) => {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 375, height: 812 }]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await expect(page.locator('.ys-hdr').getByRole('button', { name: 'Search' })).toHaveCount(0)
  }
})

test('/search redirects to the home page', async ({ request }) => {
  const res = await request.get('/search', { maxRedirects: 0 })
  expect(res.status()).toBe(308)
  expect(res.headers()['location']).toMatch(/\/$/)
})
