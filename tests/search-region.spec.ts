import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/** Header search takeover, desktop. (The region selector is off while India is the only region.) */

test.use({ viewport: { width: 1440, height: 900 } })

const searchButton = (page: import('@playwright/test').Page) =>
  page.locator('.ys-hdr-right').getByRole('button', { name: 'Search' })

test('search opens focused, suggests, and Esc returns focus', async ({ page }) => {
  await page.goto('/')
  await searchButton(page).click()
  const input = page.getByRole('combobox', { name: 'Search the site' })
  await expect(input).toBeFocused()
  await expect(page.locator('html')).toHaveCSS('overflow', 'hidden')

  await input.fill('cloud')
  const options = page.getByRole('option')
  await expect(options.first()).toBeVisible()
  expect(await options.count()).toBeLessThanOrEqual(6)

  await page.keyboard.press('ArrowDown')
  await expect(input).toHaveAttribute('aria-activedescendant', /opt-0$/)
  await expect(options.first()).toHaveAttribute('aria-selected', 'true')

  await page.keyboard.press('Escape')
  await expect(page.locator('.ys-search')).toHaveCount(0)
  await expect(searchButton(page)).toBeFocused()
})

test('Enter goes to the results page', async ({ page }) => {
  await page.goto('/')
  await searchButton(page).click()
  const input = page.getByRole('combobox', { name: 'Search the site' })
  await input.fill('landing zones')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/search\?q=landing%20zones/)
  await expect(page.getByRole('link', { name: 'Landing zones', exact: true })).toBeVisible()
})

test('Enter on a highlighted suggestion opens it', async ({ page }) => {
  await page.goto('/')
  await searchButton(page).click()
  await page.getByRole('combobox', { name: 'Search the site' }).fill('trust center')
  // Suggestions arrive once the index has loaded; Enter before then
  // correctly falls back to the results page.
  await expect(page.getByRole('option').first()).toBeVisible()
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/\/who-we-are\/trust$/)
})

test('backdrop click closes search', async ({ page }) => {
  await page.goto('/')
  await searchButton(page).click()
  await page.mouse.click(700, 700)
  await expect(page.locator('.ys-search')).toHaveCount(0)
})



test('no serious or critical axe issues with search open', async ({ page }) => {
  await page.goto('/')
  await searchButton(page).click()
  await page.getByRole('combobox', { name: 'Search the site' }).fill('data')
  await page.waitForTimeout(200)
  const { violations } = await new AxeBuilder({ page }).include('.ys-hdr').analyze()
  expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id)).toEqual([])
})

test('search results page works without JavaScript', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false })
  const page = await ctx.newPage()
  await page.goto('/search?q=fabric')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('fabric')
  await expect(page.locator('main a.ys-link').first()).toBeVisible()
  await ctx.close()
})
