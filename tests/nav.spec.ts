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
  await trigger(page, 'What we do').hover()
  await expect(panel(page)).toBeVisible()
  await expect(trigger(page, 'What we do')).toHaveAttribute('aria-expanded', 'true')

  // Moving across the panel keeps it open...
  await page.locator('.ys-mega-a').hover()
  await page.waitForTimeout(300)
  await expect(panel(page)).toBeVisible()

  // ...leaving the header closes it.
  await page.mouse.move(700, 850)
  await expect(panel(page)).toHaveCount(0)
})

test('hovering another trigger switches panels', async ({ page }) => {
  await trigger(page, 'What we do').hover()
  await expect(panel(page)).toHaveAttribute('aria-label', 'What we do')
  await trigger(page, 'Who we are').hover()
  await expect(panel(page)).toHaveAttribute('aria-label', 'Who we are')
  await expect(panel(page)).toHaveCount(1)
})

test('click pins a hover-opened panel; clicking again closes it', async ({ page }) => {
  await trigger(page, 'What we do').hover()
  await expect(panel(page)).toBeVisible()
  await trigger(page, 'What we do').click()
  await page.mouse.move(700, 850)
  await page.waitForTimeout(400)
  await expect(panel(page)).toBeVisible()

  await trigger(page, 'What we do').click()
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'What we do')).toHaveAttribute('aria-expanded', 'false')
})

test('switching triggers swaps panels; only one is open', async ({ page }) => {
  await trigger(page, 'What we do').click()
  await trigger(page, 'Who we are').click()
  await expect(panel(page)).toHaveCount(1)
  await expect(panel(page)).toHaveAttribute('aria-label', 'Who we are')
  await expect(trigger(page, 'What we do')).toHaveAttribute('aria-expanded', 'false')
})

test('Esc closes and returns focus to the trigger', async ({ page }) => {
  await trigger(page, 'Who we are').click()
  await page.keyboard.press('Escape')
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'Who we are')).toBeFocused()
})

test('outside click closes', async ({ page }) => {
  await trigger(page, 'What we do').click()
  await page.mouse.click(700, 800)
  await expect(panel(page)).toHaveCount(0)
})

test('keyboard open moves focus to region A', async ({ page }) => {
  await trigger(page, 'What we do').focus()
  await page.keyboard.press('Enter')
  await expect(panel(page)).toBeVisible()
  await expect(page.locator('.ys-mega-a a')).toBeFocused()
})

test('panel opens with no group active; hover activates one', async ({ page }) => {
  await trigger(page, 'What we do').click()
  await expect(page.locator('.ys-mega-row.is-active')).toHaveCount(0)
  await expect(page.locator('.ys-mega-cols')).toHaveCount(0)

  const cloud = page.getByRole('button', { name: /^Cloud\b/ })
  await cloud.hover()
  await expect(cloud).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('.ys-mega-cols a').first()).toHaveText('Cloud overview')
})

test('arrow keys move through groups and into region C', async ({ page }) => {
  await trigger(page, 'What we do').click()
  const rows = page.locator('.ys-mega-row')
  await rows.first().focus()
  await expect(rows.first()).toHaveAttribute('aria-expanded', 'true')

  await page.keyboard.press('ArrowDown')
  await expect(rows.nth(1)).toBeFocused()
  await expect(rows.nth(1)).toHaveAttribute('aria-expanded', 'true')

  await page.keyboard.press('ArrowRight')
  await expect(page.locator('.ys-mega-cols a').first()).toBeFocused()
  await page.keyboard.press('ArrowDown')
  await expect(page.locator('.ys-mega-cols a').nth(1)).toBeFocused()

  await page.keyboard.press('ArrowLeft')
  await expect(rows.nth(1)).toBeFocused()
})

test('tabbing out of the panel closes it', async ({ page }) => {
  await trigger(page, 'Who we are').focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.ys-mega-a a')).toBeFocused()
  const count = await page.locator('.ys-mega a').count()
  for (let i = 0; i < count; i++) await page.keyboard.press('Tab')
  await expect(panel(page)).toHaveCount(0)
})

test('geometry matches the spec at 1440px', async ({ page }) => {
  await trigger(page, 'What we do').click()
  await page.waitForTimeout(400) // let the 300ms slide-in finish
  const box = async (sel: string) => (await page.locator(sel).first().boundingBox())!
  expect((await box('.ys-hdr-bar')).height).toBe(76)
  // Floating panel (2026-10-20): it starts at the header's bottom edge (the
  // 12px gap is a transparent border, so hover never drops), and is inset
  // from both sides of the viewport.
  const mega = await box('.ys-mega')
  expect(mega.y).toBe(76)
  expect(mega.x).toBeGreaterThanOrEqual(12)
  expect(1440 - (mega.x + mega.width)).toBeGreaterThanOrEqual(12)
  // Columns keep their order and spacing inside the panel.
  const a = await box('.ys-mega-a'), b = await box('.ys-mega-b'), c = await box('.ys-mega-c')
  expect(a.x).toBeGreaterThan(mega.x)
  expect(b.x - a.x).toBeGreaterThanOrEqual(300)
  expect(c.x - b.x).toBeGreaterThanOrEqual(300)
  expect(c.x + c.width).toBeLessThanOrEqual(mega.x + mega.width)
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
  await trigger(page, 'What we do').click()
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
  expect(hrefs.size).toBeGreaterThan(30)
  for (const href of hrefs) {
    const res = await request.get(href.split('#')[0]!, { maxRedirects: 0 })
    expect(res.status(), href).toBe(200)
  }
})

test('no serious or critical axe issues with each panel open', async ({ page }) => {
  for (const name of ['What we do', 'Who we are']) {
    await trigger(page, name).click()
    if (name === 'What we do') await page.getByRole('button', { name: /^Applied AI\b/ }).hover()
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

test('region C shows the featured card on open; a group replaces it; reopening restores it', async ({ page }) => {
  await trigger(page, 'What we do').click()
  const card = page.locator('.ys-mega-featured')
  await expect(card).toBeVisible()
  await expect(card).toHaveAttribute('href', '/blueprint')

  await page.getByRole('button', { name: /^Cloud\b/ }).hover()
  await expect(page.locator('.ys-mega-cols')).toBeVisible()
  await expect(card).toHaveCount(0)

  await page.keyboard.press('Escape')
  await trigger(page, 'What we do').click()
  await expect(page.locator('.ys-mega-featured')).toBeVisible()
})

test('scrim click closes the panel and returns focus to the trigger', async ({ page }) => {
  await trigger(page, 'What we do').click()
  const scrim = page.locator('.ys-nav-scrim')
  await expect(scrim).toBeVisible()
  await expect(scrim).toHaveAttribute('aria-hidden', 'true')
  await page.mouse.click(1400, 860)
  await expect(panel(page)).toHaveCount(0)
  await expect(trigger(page, 'What we do')).toBeFocused()
  await expect(scrim).toHaveCount(0)
})

test('open panel floats: rounded, shadowed, and set apart from the header', async ({ page }) => {
  await trigger(page, 'What we do').click()
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

test('every featured card links to a live route', async ({ request }) => {
  for (const item of NAV) {
    if (item.kind !== 'panel' || !item.featured) continue
    const res = await request.get(item.featured.href, { maxRedirects: 0 })
    expect(res.status(), item.featured.href).toBe(200)
  }
})

test('no serious or critical axe issues with the panel and scrim open', async ({ page }) => {
  await trigger(page, 'Who we are').click()
  await page.waitForTimeout(350)
  const { violations } = await new AxeBuilder({ page }).analyze()
  expect(violations.filter((v) => v.impact === 'serious' || v.impact === 'critical').map((v) => v.id)).toEqual([])
})
