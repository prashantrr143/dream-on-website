import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor } from '@/lib/seo'
import { visibleArticles, hasArticles } from '@/lib/insights'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

export const metadata: Metadata = {
  ...metaFor('/insights'),
  // Until something is published, the page exists only as a preview.
  ...(hasArticles ? {} : { robots: { index: false, follow: false } }),
}

/** Insights index. 404 while there is nothing visible to list. */
export default function InsightsPage() {
  if (visibleArticles.length === 0) notFound()

  return (
    <SharedLayout>
      <PageHero
        eyebrow="Insights"
        title="Notes from the people who build the systems."
        lede="Practical writing on Azure, applied AI, security and regulation for teams in regulated businesses."
        visual="lanes"
      />

      <PageSection tone="white">
        <ul className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {visibleArticles.map((a) => (
            <li key={a.slug} style={{ minWidth: 0 }}>
              <a href={`/insights/${a.slug}`} className="ys-card-light" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 28 }}>
                <p className="ys-eyebrow" style={{ marginBottom: 12 }}>
                  {a.category}
                  {a.status === 'draft' && (
                    <span style={{ marginLeft: 10, padding: '2px 8px', borderRadius: 4, background: '#FEF3C7', color: '#92400E' }}>
                      Draft
                    </span>
                  )}
                </p>
                <h2 style={{ fontSize: 21, lineHeight: 1.3, color: 'var(--ink)' }}>{a.title}</h2>
                <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{a.summary}</p>
                <span className="ys-link" style={{ marginTop: 'auto', paddingTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read · {a.readTime}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageCTA
        title="Working on one of these problems?"
        body="Tell us what you are working on. A senior member of the team replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
