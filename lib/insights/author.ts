import { people } from '@/content/people'
import type { Leader } from '@/content/types'
import { SITE_URL } from '@/lib/seo'
import type { Article } from './types'

/** The named author of an article, or undefined for a team byline. */
export function authorOf(a: Article): Leader | undefined {
  if (a.author === 'YatiSphere team') return undefined
  const slug = a.author.person
  const p = people.find((x) => x.slug === slug)
  if (!p) throw new Error(`Article "${a.slug}" credits unknown person "${slug}" (content/people.ts)`)
  return p
}

/** schema.org author: a Person with LinkedIn as sameAs, else the organization. */
export function authorSchema(a: Article) {
  const p = authorOf(a)
  if (!p) return { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'YatiSphere', url: SITE_URL }
  return {
    '@type': 'Person',
    name: p.name,
    jobTitle: p.role,
    url: p.linkedinUrl ?? `${SITE_URL}/who-we-are/leadership`,
    ...(p.linkedinUrl ? { sameAs: [p.linkedinUrl] } : {}),
    worksFor: { '@id': `${SITE_URL}/#organization` },
  }
}
