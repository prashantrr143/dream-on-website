import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor } from '@/lib/seo'
import { siteConfig, type CaseStudy } from '@/lib/site.config'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/customer-stories')

/**
 * Case-study library (audit G-09). Returns 404 while siteConfig has no
 * case studies, and is kept out of the nav and sitemap until then.
 *
 * Filters are plain links that set ?industry=, ?service= or ?region=, so
 * they are shareable and work without JavaScript.
 */

type Filter = 'industry' | 'service' | 'region'

const valuesFor = (key: Filter, list: CaseStudy[]) =>
  Array.from(new Set(list.flatMap((cs) => (key === 'service' ? cs.services : [cs[key]])))).sort()

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const all = siteConfig.caseStudies
  if (all.length === 0) notFound()

  const params = await searchParams
  const active: Partial<Record<Filter, string>> = {}
  for (const key of ['industry', 'service', 'region'] as Filter[]) {
    const v = params[key]
    if (typeof v === 'string' && v) active[key] = v
  }

  const shown = all.filter(
    (cs) =>
      (!active.industry || cs.industry === active.industry) &&
      (!active.service || cs.services.includes(active.service)) &&
      (!active.region || cs.region === active.region)
  )

  const hrefWith = (key: Filter, value: string | null) => {
    const next = new URLSearchParams()
    for (const [k, v] of Object.entries({ ...active, [key]: value ?? undefined })) {
      if (v) next.set(k, v)
    }
    const qs = next.toString()
    return qs ? `/customer-stories?${qs}` : '/customer-stories'
  }

  return (
    <SharedLayout>
      <PageHero
        eyebrow="Case studies"
        title="Work we can show you."
        lede="What the problem was, what stood in the way, what we built and what changed, measured."
        visual="network"
      />

      <PageSection tone="light" eyebrow="Filter" title="Find work like yours">
        {(['industry', 'service', 'region'] as Filter[]).map((key) => (
          <nav key={key} aria-label={`Filter by ${key}`} style={{ marginBottom: 14 }}>
            <ul className="flex flex-wrap" style={{ gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <a href={hrefWith(key, null)} className="ys-cap-tag" aria-current={!active[key] ? 'true' : undefined}>
                  All {key === 'industry' ? 'industries' : `${key}s`}
                </a>
              </li>
              {valuesFor(key, all).map((v) => (
                <li key={v}>
                  <a href={hrefWith(key, v)} className="ys-cap-tag" aria-current={active[key] === v ? 'true' : undefined}>
                    {v}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 20, listStyle: 'none', margin: '28px 0 0', padding: 0 }}>
          {shown.map((cs) => (
            <li key={cs.slug} style={{ minWidth: 0 }}>
              <a href={`/case-studies/${cs.slug}`} className="ys-card-light" style={{ display: 'block', height: '100%', padding: 26 }}>
                {cs.outcomes[0] && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 28, fontWeight: 600, color: 'var(--ink-900)' }}>
                    {cs.outcomes[0].value}{' '}
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, color: 'var(--ink-600)' }}>
                      {cs.outcomes[0].label}
                    </span>
                  </p>
                )}
                <h3 style={{ marginTop: 14, fontSize: 17, fontWeight: 600, color: 'var(--ink-900)' }}>{cs.title}</h3>
                <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)' }}>{cs.summary}</p>
              </a>
            </li>
          ))}
        </ul>
        {shown.length === 0 && <p style={{ marginTop: 20, color: 'var(--ink-600)' }}>No case studies match those filters yet.</p>}
      </PageSection>

      <PageCTA
        title="Have a problem like these?"
        body="Describe it in a few lines. A founder replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
