import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { NAV } from '../content/nav'

/** Header mega-menu, desktop (>=1200px). */

test.use({ viewport: { width: 1440, height: 900 } })

const trigger = (page: Page, name: string) =>
  page.locator('.ys-hdr-nav').getByRole('button', { name, exact: true })
const panel = (page: Page) => page.locator('.ys-mega')

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('hover opens after a short delay; leaving the header closes it', async ({ page }) => {
  await trigger(page, 'Services').hover()
  await expect(panel(page)).toBeVisible()
  await expect(trigger(page, 'Services')).toHaveAttribute('aria-expanded', 'true')

  // Moving across the panel keeps it open...
  await page.locator('.ys-mega2-cols').hover()
  await page.waitForTimeout(300)
  await expect(panel(page)).toBeVisible()

  // ...leaving the header closes it.
  await page.mouse.move(700, 850)
  await expect(panel(page)).toHaveCount(0)
})

test('hovering another trigger switches panels', async ({ page }) => {
  await trigger(page, 'Services').hover()
  await expect(panel(page)).toHaveAttribute('aria-label', 'Services')
  await trigger(page, 'Company').hover()
  await expect(panel(page)).toHaveAttribute('aria-label', 'Company')
  await expect(panel(page)).toHaveCount(1)
})

test('click pins a hover-opened panel; clicking again closes it', async ({ page }) => {
  await trigger(page, 'Services').hover()
  await expect(panel(page)).toBeVisible()
  await trigger(page, 'Services').click()
  await page.mouse.move(700, 850)
  await page.waitForTimeout(400)
  await expect(panel(page)).toBeVisible()

  await trigger(page, 'Services').click()
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'Services')).toHaveAttribute('aria-expanded', 'false')
})

test('switching triggers swaps panels; only one is open', async ({ page }) => {
  await trigger(page, 'Services').click()
  await trigger(page, 'Company').click()
  await expect(panel(page)).toHaveCount(1)
  await expect(panel(page)).toHaveAttribute('aria-label', 'Company')
  await expect(trigger(page, 'Services')).toHaveAttribute('aria-expanded', 'false')
})

test('Esc closes and returns focus to the trigger', async ({ page }) => {
  await trigger(page, 'Company').click()
  await page.keyboard.press('Escape')
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'Company')).toBeFocused()
})

test('outside click closes', async ({ page }) => {
  await trigger(page, 'Services').click()
  await page.mouse.click(700, 800)
  await expect(panel(page)).toHaveCount(0)
})

test('keyboard open moves focus to region A', async ({ page }) => {
  await trigger(page, 'Services').focus()
  await page.keyboard.press('Enter')
  await expect(panel(page)).toBeVisible()
  await expect(page.locator('.ys-mega2-cols a').first()).toBeFocused()
})

test('tabbing out of the panel closes it', async ({ page }) => {
  await trigger(page, 'Company').focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.ys-mega2-cols a').first()).toBeFocused()
  const count = await page.locator('.ys-mega a').count()
  for (let i = 0; i < count; i++) await page.keyboard.press('Tab')
  await expect(panel(page)).toHaveCount(0)
})

test('opening a panel causes no layout shift', async ({ page }) => {
  // Home streams some sections in; measure once it has settled, and compare
  // position and width (a layout shift moves content; it doesn't change
  // how much content there is).
  await page.waitForLoadState('networkidle')
  const box = async () => {
    const b = (await page.locator('main h1').boundingBox())!
    return { x: b.x, y: b.y, width: b.width }
  }
  const before = await box()
  await trigger(page, 'Services').click()
  await page.waitForTimeout(400)
  expect(await box()).toEqual(before)
})

test('every link in the rendered menu answers 200 directly', async ({ request }) => {
  const hrefs = new Set<string>()
  for (const item of NAV) {
    if (item.kind === 'link') hrefs.add(item.href)
    else {
      hrefs.add(item.overviewHref)
      hrefs.add(item.intro.link.href)
      for (const g of item.groups) {
        if (g.href) hrefs.add(g.href)
        for (const c of g.children ?? []) hrefs.add(c.href)
      }
    }
  }
  expect(hrefs.size).toBeGreaterThan(15)
  for (const href of hrefs) {
    const res = await request.get(href.split('#')[0]!, { maxRedirects: 0 })
    expect(res.status(), href).toBe(200)
  }
})

test('no serious or critical axe issues with each panel open', async ({ page }) => {
  for (const name of ['Services', 'Company']) {
    await trigger(page, name).click()
    await page.waitForTimeout(350)
    const { violations } = await new AxeBuilder({ page }).include('.ys-hdr').analyze()
    const bad = violations.filter((v) => v.impact === 'serious' || v.impact === 'critical')
    expect(bad, `${name}: ${bad.map((v) => v.id).join(', ')}`).toEqual([])
    await page.keyboard.press('Escape')
  }
})

test('only one search button shows on desktop', async ({ page }) => {
  await expect(page.locator('.ys-hdr-search-m')).toBeHidden()
  await expect(page.locator('.ys-hdr-burger')).toBeHidden()
  await expect(page.locator('.ys-hdr-right').getByRole('button', { name: 'Search' })).toBeVisible()
})

/* ---- Mega-menu separation from the page (nav-fix) ---- */

test('scrim click closes the panel and returns focus to the trigger', async ({ page }) => {
  await trigger(page, 'Services').click()
  const scrim = page.locator('.ys-nav-scrim')
  await expect(scrim).toBeVisible()
  await expect(scrim).toHaveAttribute('aria-hidden', 'true')
  await page.mouse.click(1400, 860)
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'Services')).toBeFocused()
  await expect(scrim).toHaveCount(0)
})

test('open panel floats: rounded, shadowed, and set apart from the header', async ({ page }) => {
  await trigger(page, 'Services').click()
  await page.waitForTimeout(400)
  const mega = await panel(page).evaluate((el) => {
    const s = getComputedStyle(el)
    return { radius: parseFloat(s.borderBottomLeftRadius), gap: s.borderTopWidth, shadow: s.boxShadow, bg: s.backgroundColor }
  })
  expect(mega.radius).toBeGreaterThan(0)
  expect(mega.gap).toBe('12px')
  expect(mega.shadow).not.toBe('none')
  // The header keeps the page navy, so the lighter panel reads as lifted.
  const header = await page.locator('.ys-hdr').evaluate((el) => getComputedStyle(el).backgroundColor)
  expect(header).not.toBe(mega.bg)
})

test('no serious or critical axe issues with the panel and scrim open', async ({ page }) => {
  await trigger(page, 'Company').click()
  await page.waitForTimeout(350)
  const { violations } = await new AxeBuilder({ page }).analyze()
  expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id)).toEqual([])
})
