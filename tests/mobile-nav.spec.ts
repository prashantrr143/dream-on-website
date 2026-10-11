import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/** Mobile menu (<1200px). */

test.use({ viewport: { width: 375, height: 812 }, hasTouch: true })

const burger = (page: import('@playwright/test').Page) => page.locator('.ys-hdr-burger')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('header is 72px with search left and menu right; desktop nav hidden', async ({ page }) => {
  expect((await page.locator('.ys-hdr-bar').boundingBox())!.height).toBe(72)
  await expect(page.locator('.ys-hdr-nav')).toBeHidden()
  await expect(page.locator('.ys-hdr-search-m')).toBeVisible()
  const search = (await page.locator('.ys-hdr-search-m').boundingBox())!
  const logo = (await page.locator('.ys-hdr-logo').boundingBox())!
  const menu = (await burger(page).boundingBox())!
  expect(search.x).toBeLessThan(logo.x)
  expect(menu.x).toBeGreaterThan(logo.x)
})

test('opens full-height, locks scroll, one section at a time', async ({ page }) => {
  await burger(page).click()
  await expect(burger(page)).toHaveAttribute('aria-expanded', 'true')
  const nav = page.locator('.ys-mnav')
  await expect(nav).toBeVisible()
  await expect(page.locator('html')).toHaveCSS('overflow', 'hidden')

  const services = nav.getByRole('button', { name: 'What we do' })
  await services.click()
  await expect(services).toHaveAttribute('aria-expanded', 'true')
  await expect(nav).toHaveClass(/has-open/)
  // First level-2 row is the section overview.
  await expect(nav.locator('.ys-mnav-l2 > li').first().locator('a')).toHaveAttribute('href', '/what-we-do')

  const industries = nav.getByRole('button', { name: 'Who we are' })
  await industries.click()
  await expect(industries).toHaveAttribute('aria-expanded', 'true')
  await expect(services).toHaveAttribute('aria-expanded', 'false')
})

test('level 3 expands under its group with +/-', async ({ page }) => {
  await burger(page).click()
  const nav = page.locator('.ys-mnav')
  await nav.getByRole('button', { name: 'What we do' }).click()
  const cloud = nav.getByRole('button', { name: 'Cloud', exact: true })
  await cloud.click()
  await expect(cloud).toHaveAttribute('aria-expanded', 'true')
  await expect(nav.getByRole('link', { name: 'AWS', exact: true })).toBeVisible()
})

test('Contact us is pinned at the bottom; no region control while India is the only region', async ({ page }) => {
  await burger(page).click()
  const bottom = page.locator('.ys-mnav-bottom')
  await expect(bottom.getByRole('link', { name: 'Contact us' })).toBeVisible()
  await expect(bottom.getByRole('button', { name: /Region/ })).toHaveCount(0)
})

test('Esc closes and returns focus to the menu button', async ({ page }) => {
  await burger(page).click()
  await page.keyboard.press('Escape')
  await expect(page.locator('.ys-mnav')).toHaveCount(0)
  await expect(burger(page)).toBeFocused()
})

test('mobile search opens from the left icon', async ({ page }) => {
  await page.locator('.ys-hdr-search-m').click()
  await expect(page.getByRole('combobox', { name: 'Search the site' })).toBeFocused()
})

test('no serious or critical axe issues with the menu open', async ({ page }) => {
  await burger(page).click()
  await page.locator('.ys-mnav').getByRole('button', { name: 'What we do' }).click()
  const { violations } = await new AxeBuilder({ page }).include('.ys-hdr').analyze()
  expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id)).toEqual([])
})
