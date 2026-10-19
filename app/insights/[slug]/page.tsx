import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { SITE_URL, SITE_NAME, socialMeta } from '@/lib/seo'
import { visibleArticles, getVisibleArticle } from '@/lib/insights'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { ArrowRight } from 'lucide-react'
import { ArticleToc } from '@/components/insights/ArticleToc'

/** Only visible articles get pages; drafts exist only in preview builds. */
export const dynamicParams = false

export function generateStaticParams() {
  return visibleArticles.map((a) => ({ slug: a.slug }))
}

/** Stable, unique anchors from section headings. */
function sectionIds(headings: (string | undefined)[]): string[] {
  const seen = new Map<string, number>()
  return headings.map((h) => {
    if (!h) return ''
    const base = h.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section'
    const n = (seen.get(base) ?? 0) + 1
    seen.set(base, n)
    return n === 1 ? base : `${base}-${n}`
  })
}

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getVisibleArticle((await params).slug)
  if (!a) return {}
  const url = `${SITE_URL}/insights/${a.slug}`
  // Google shows about 60 characters; the brand suffix goes when it would
  // push the title past that, so the article's own words are never cut.
  const base = a.seoTitle ?? a.title
  const title = `${base} | ${SITE_NAME}`.length <= 60 ? `${base} | ${SITE_NAME}` : base
  return {
    title: { absolute: title },
    description: a.summary,
    alternates: { canonical: url },
    ...(a.status === 'draft' ? { robots: { index: false, follow: false } } : {}),
    ...socialMeta({
      title,
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

  const ids = sectionIds(a.sections.map((x) => x.heading))
  const toc = a.sections
    .map((x, i) => (x.heading ? { id: ids[i]!, label: x.heading } : null))
    .filter((x): x is { id: string; label: string } => x !== null)
  if (a.sources.length > 0) toc.push({ id: 'sources', label: 'Sources' })

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
        <div className="ys-art-layout">
          {/* Details first in the DOM, so small screens see them before the text. */}
          <aside className="ys-art-aside" aria-label="About this article">
            <dl className="ys-art-meta">
              <div><dt>Written by</dt><dd>{a.author}</dd></div>
              <div><dt>Reading time</dt><dd>{a.readTime}</dd></div>
              {a.publishedAt && <div><dt>Published</dt><dd>{longDate(a.publishedAt)}</dd></div>}
              <div><dt>Facts checked</dt><dd>{longDate(a.reviewedAt)}</dd></div>
            </dl>
            <div className="ys-art-cta">
              <p className="ys-art-cta-kicker">{a.category}</p>
              <p className="ys-art-cta-title">Working on this now?</p>
              <p className="ys-art-cta-body">A senior engineer replies within one working day.</p>
              <a href={PRIMARY_CTA.href} className="ys-cta-primary inline-flex items-center gap-2">
                {PRIMARY_CTA.label}
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </aside>

          <ArticleToc items={toc} />

          <article className="ys-art">
            {a.sections.map((section, i) => (
              <section key={i} id={section.heading ? ids[i] : undefined}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {a.sources.length > 0 && (
              <section id="sources" aria-labelledby="sources-heading" className="ys-art-sources">
                <h2 id="sources-heading" className="ys-eyebrow">Sources</h2>
                <ol>
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} className="ys-link" target="_blank" rel="noopener noreferrer">
                        {s.title}
                      </a>
                      {' — '}
                      {s.publisher}
                    </li>
                  ))}
                </ol>
                <p>
                  This article is general information, not legal or regulatory advice. Rules and products change; check the
                  sources for the current position.
                </p>
              </section>
            )}

            {a.related.length > 0 && (
              <nav aria-label="Related" className="ys-art-related">
                <h2 className="ys-eyebrow">Related</h2>
                <ul>
                  {a.related.map((r) => (
                    <li key={r.href}>
                      <a href={r.href}>
                        {r.label}
                        <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </article>
        </div>
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
