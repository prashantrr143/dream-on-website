import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { SITE_URL } from '@/lib/seo'
import { siteConfig } from '@/lib/site.config'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

/** One page per configured case study; any other slug is a 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return siteConfig.caseStudies.map((cs) => ({ slug: cs.slug }))
}

const find = (slug: string) => siteConfig.caseStudies.find((cs) => cs.slug === slug)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const cs = find((await params).slug)
  if (!cs) return {}
  const url = `${SITE_URL}/case-studies/${cs.slug}`
  return {
    title: { absolute: `${cs.title} | YatiSphere` },
    description: cs.summary,
    alternates: { canonical: url },
    openGraph: { type: 'article', title: cs.title, description: cs.summary, url },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const cs = find((await params).slug)
  if (!cs) notFound()

  return (
    <SharedLayout>
      <PageHero eyebrow={`${cs.industry} · ${cs.region}`} title={cs.title} lede={cs.summary} visual="layers">
        {cs.outcomes.length > 0 && (
          <dl className="flex flex-wrap" style={{ gap: 'clamp(24px, 5vw, 56px)' }}>
            {cs.outcomes.map((o) => (
              <div key={o.label} style={{ maxWidth: 240 }}>
                <dt className="sr-only">{o.label}</dt>
                <dd style={{ fontFamily: 'var(--font-heading)', fontSize: 34, fontWeight: 600, color: 'var(--on-dark)' }}>{o.value}</dd>
                <dd aria-hidden="true" style={{ fontSize: 14, color: 'var(--on-dark-muted)' }}>{o.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </PageHero>

      <PageSection tone="light" eyebrow="The situation" title="Context">
        <p className="measure">{cs.context}</p>
        <h3 style={{ marginTop: 28 }}>The constraint</h3>
        <p className="measure">{cs.constraint}</p>
        <h3 style={{ marginTop: 28 }}>What we did</h3>
        <p className="measure">{cs.approach}</p>
      </PageSection>

      {(cs.architectureImage || cs.stack.length > 0) && (
        <PageSection tone="white" eyebrow="Architecture" title="How it fits together">
          {cs.architectureImage && (
            <Image src={cs.architectureImage} alt={`Architecture for ${cs.title}`} width={1600} height={900} style={{ width: '100%', height: 'auto' }} />
          )}
          {cs.stack.length > 0 && (
            <ul className="flex flex-wrap" style={{ gap: 8, listStyle: 'none', margin: '20px 0 0', padding: 0 }} aria-label="Technology used">
              {cs.stack.map((t) => (
                <li key={t} className="ys-cap-tag">{t}</li>
              ))}
            </ul>
          )}
        </PageSection>
      )}

      {cs.quote && (
        <PageSection tone="light">
          <figure>
            <blockquote style={{ fontSize: 22, lineHeight: 1.45, color: 'var(--ink)' }}>&ldquo;{cs.quote.text}&rdquo;</blockquote>
            <figcaption style={{ marginTop: 12, color: 'var(--ink-muted)' }}>
              {cs.quote.name}, {cs.quote.role}
            </figcaption>
          </figure>
        </PageSection>
      )}

      <PageCTA
        title="Facing something similar?"
        body="Describe it in a few lines. A founder replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
