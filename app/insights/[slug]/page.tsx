import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { SITE_URL, SITE_NAME, socialMeta } from '@/lib/seo'
import { visibleArticles, getVisibleArticle } from '@/lib/insights'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

/** Only visible articles get pages; drafts exist only in preview builds. */
export const dynamicParams = false

export function generateStaticParams() {
  return visibleArticles.map((a) => ({ slug: a.slug }))
}

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getVisibleArticle((await params).slug)
  if (!a) return {}
  const url = `${SITE_URL}/insights/${a.slug}`
  return {
    title: { absolute: `${a.title} | ${SITE_NAME}` },
    description: a.summary,
    alternates: { canonical: url },
    ...(a.status === 'draft' ? { robots: { index: false, follow: false } } : {}),
    ...socialMeta({
      title: `${a.title} | ${SITE_NAME}`,
      description: a.summary,
      url,
      type: 'article',
      ...(a.publishedAt ? { publishedTime: a.publishedAt } : {}),
    }),
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getVisibleArticle((await params).slug)
  if (!a) notFound()

  const schema =
    a.status === 'published'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.summary,
          datePublished: a.publishedAt,
          dateModified: a.reviewedAt,
          author: { '@type': 'Organization', name: 'YatiSphere', url: SITE_URL },
          publisher: { '@id': `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/insights/${a.slug}`,
          image: `${SITE_URL}/opengraph-image`,
          articleSection: a.category,
          inLanguage: 'en-US',
        }
      : null

  return (
    <SharedLayout>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}

      <PageHero eyebrow={`Insights · ${a.category}`} title={a.title} lede={a.summary} visual="lanes">
        {a.status === 'draft' && (
          <p role="note" style={{ display: 'inline-block', padding: '10px 14px', borderRadius: 8, background: '#FEF3C7', color: '#92400E', fontSize: 14, lineHeight: 1.5 }}>
            Draft, not published. Visible only in development or preview builds. To publish: add &lsquo;{a.slug}&rsquo; to
            lib/insights/published.ts, and set status to &lsquo;published&rsquo; and publishedAt in lib/insights/articles/{a.slug}.ts.
          </p>
        )}
      </PageHero>

      <PageSection tone="white">
        <article style={{ maxWidth: '70ch' }}>
          <p style={{ fontSize: 14, color: 'var(--ink-600)', marginBottom: 28 }}>
            {a.author} · {a.readTime}
            {a.publishedAt && <> · Published {longDate(a.publishedAt)}</>}
            {' · '}Facts checked {longDate(a.reviewedAt)}
          </p>

          {a.sections.map((section, i) => (
            <section key={i} style={{ marginBottom: 32 }}>
              {section.heading && (
                <h2 style={{ fontSize: 'clamp(22px, 2.4vw, 26px)', lineHeight: 1.3, color: 'var(--ink-900)', marginBottom: 14 }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-900)', marginBottom: 16 }}>
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul style={{ paddingLeft: 22, marginBottom: 16, listStyle: 'disc' }}>
                  {section.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-900)', marginBottom: 8 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {a.sources.length > 0 && (
            <section aria-labelledby="sources-heading" style={{ borderTop: '1px solid var(--grey-200)', paddingTop: 24, marginTop: 40 }}>
              <h2 id="sources-heading" className="ys-eyebrow" style={{ marginBottom: 14 }}>
                Sources
              </h2>
              <ol style={{ paddingLeft: 22, listStyle: 'decimal' }}>
                {a.sources.map((s) => (
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
                This article is general information, not legal or regulatory advice. Rules and products change; check the
                sources for the current position.
              </p>
            </section>
          )}

          {a.related.length > 0 && (
            <nav aria-label="Related" style={{ marginTop: 32 }}>
              <h2 className="ys-eyebrow" style={{ marginBottom: 12 }}>
                Related
              </h2>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', listStyle: 'none', padding: 0 }}>
                {a.related.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} className="ys-link">
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </PageSection>

      <PageCTA
        title="Facing this in your own estate?"
        body="Tell us what you are working on. A senior member of the team replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
