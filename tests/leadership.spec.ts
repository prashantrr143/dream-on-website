import { test, expect } from '@playwright/test'
import { people, peopleIn, hasBio } from '../content/people'

/** Leadership listing and bio pages. */

test('listing renders one article per person, in order, with semantic headings', async ({ page }) => {
  await page.goto('/who-we-are/leadership')
  await expect(page.locator('main h1')).toHaveText('Leadership')
  const leaders = peopleIn('leadership')
  const rows = page.locator('article.ys-ldr-row')
  await expect(rows).toHaveCount(people.length)
  for (const [i, p] of leaders.entries()) {
    const row = rows.nth(i)
    await expect(row.locator('h3')).toHaveText(p.name)
    await expect(row.locator('p.ys-ldr-role')).toHaveText(p.role)
    if (p.photo) await expect(row.locator('img')).toHaveAttribute('alt', p.photo.alt)
    const more = row.getByRole('link', { name: `Read more about ${p.name}` })
    await expect(more).toHaveCount(hasBio(p) ? 1 : 0)
  }
  // Empty groups render no kicker.
  await expect(page.getByRole('heading', { level: 2, name: 'Advisors' })).toHaveCount(peopleIn('advisors').length ? 1 : 0)
})

test('bio pages exist only for people with a bio', async ({ request }) => {
  for (const p of people) {
    const res = await request.get(`/who-we-are/leadership/${p.slug}`)
    expect(res.status(), p.slug).toBe(hasBio(p) ? 200 : 404)
  }
  const sitemap = await (await request.get('/sitemap.xml')).text()
  for (const p of people) expect(sitemap.includes(`/who-we-are/leadership/${p.slug}<`), p.slug).toBe(hasBio(p))
})

test('listing photos reserve their space (no layout shift)', async ({ page }) => {
  await page.goto('/who-we-are/leadership')
  const imgs = page.locator('.ys-ldr-photo img')
  for (let i = 0; i < (await imgs.count()); i++) {
    await expect(imgs.nth(i)).toHaveAttribute('width', /\d+/)
    await expect(imgs.nth(i)).toHaveAttribute('height', /\d+/)
  }
})
