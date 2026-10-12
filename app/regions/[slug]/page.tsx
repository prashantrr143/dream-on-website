import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { SITE_URL, socialMeta } from '@/lib/seo'
import { REGION_PAGES } from '@/lib/region-pages'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

/** Regional pages (UK, Middle East). Content and sources: lib/region-pages.ts. */
export const dynamicParams = false

export function generateStaticParams() {
  return REGION_PAGES.map((r) => ({ slug: r.slug }))
}

const find = (slug: string) => REGION_PAGES.find((r) => r.slug === slug)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = find((await params).slug)
  if (!r) return {}
  const url = `${SITE_URL}/regions/${r.slug}`
  return {
    title: { absolute: r.metaTitle },
    description: r.metaDescription,
    alternates: { canonical: url },
    ...socialMeta({ title: r.metaTitle, description: r.metaDescription, url }),
  }
}

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

function DefinitionGrid({ items }: { items: { term: string; detail: string }[] }) {
  return (
    <dl className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
      {items.map((item) => (
        <div key={item.term} className="ys-open-item" style={{ minWidth: 0 }}>
          <dt style={{ fontSize: 16.5, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 8 }}>{item.term}</dt>
          <dd style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)' }}>{item.detail}</dd>
        </div>
      ))}
    </dl>
  )
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const r = find((await params).slug)
  if (!r) notFound()

  return (
    <SharedLayout>
      <BreadcrumbSchema trail={[{ name: r.name, path: `/regions/${r.slug}` }]} />
      <PageHero
        eyebrow={`Working with us · ${r.name}`}
        title={r.title}
        lede={r.lede}
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
        visual="network"
      />

      <PageSection tone="white" eyebrow="Regulators" title="The rules we design reporting and controls for">
        <DefinitionGrid items={r.regulators.map((x) => ({ term: x.name, detail: x.scope }))} />
      </PageSection>

      <PageSection tone="light" eyebrow="Data protection" title="Privacy law that applies to your data">
        <DefinitionGrid items={r.privacy.map((x) => ({ term: x.name, detail: x.note }))} />
      </PageSection>

      <PageSection tone="white" eyebrow="Data residency" title="Where your systems and data can live">
        <DefinitionGrid items={r.residency.map((x) => ({ term: x.region, detail: x.note }))} />
      </PageSection>

      <PageSection tone="light" eyebrow="Working arrangements" title="Hours, data terms and delivery">
        <DefinitionGrid items={r.commercial.map((x) => ({ term: x.title, detail: x.body }))} />
        <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-600)', maxWidth: '70ch' }}>{r.presence}</p>
      </PageSection>

      <PageSection tone="white">
        <section aria-labelledby="region-sources" style={{ maxWidth: '70ch' }}>
          <h2 id="region-sources" className="ys-eyebrow" style={{ marginBottom: 14 }}>
            Sources
          </h2>
          <ol style={{ paddingLeft: 22, listStyle: 'decimal' }}>
            {r.sources.map((s) => (
              <li key={s.url} style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-600)', marginBottom: 8 }}>
                <a href={s.url} className="ys-link" style={{ fontSize: 14 }} target="_blank" rel="noopener noreferrer">
                  {s.title}
                </a>
                {' — '}
                {s.publisher}
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-600)' }}>
            Facts checked {longDate(r.reviewedAt)}. General information, not legal advice.
          </p>
        </section>
      </PageSection>

      <PageCTA
        title={`Planning work in the ${r.slug === 'uk' ? 'UK' : 'Gulf'}?`}
        body="Tell us what you are working on. A senior member of the team replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
