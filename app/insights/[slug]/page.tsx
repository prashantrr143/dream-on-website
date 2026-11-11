import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { SITE_URL, SITE_NAME, socialMeta } from '@/lib/seo'
import { visibleArticles, getVisibleArticle } from '@/lib/insights'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { ArrowRight } from 'lucide-react'
import { ArticleToc } from '@/components/insights/ArticleToc'
import { McpAnatomyDiagram } from '@/components/insights/McpAnatomyDiagram'
import { authorOf, authorSchema } from '@/lib/insights/author'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

/** Only visible articles get pages; drafts exist only in preview builds. */
export const dynamicParams = false

export function generateStaticParams() {
  return visibleArticles.map((a) => ({ slug: a.slug }))
}

/** Drawings an article section can include by key. */
const FIGURES = { 'mcp-anatomy': McpAnatomyDiagram } as const

/** `backtick` spans in article text render as inline code. */
function withCode(text: string) {
  if (!text.includes('`')) return text
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith('`') && part.endsWith('`') && part.length > 2 ? <code key={i}>{part.slice(1, -1)}</code> : part,
  )
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
      card: { title: a.title, kicker: `Insights · ${a.category}` },
      ...(a.publishedAt ? { publishedTime: a.publishedAt } : {}),
    }),
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getVisibleArticle((await params).slug)
  if (!a) notFound()

  const author = authorOf(a)
  const ids = sectionIds(a.sections.map((x) => x.heading))
  const toc = a.sections
    .map((x, i) => (x.heading ? { id: ids[i]!, label: x.heading } : null))
    .filter((x): x is { id: string; label: string } => x !== null)
  if (a.faq && a.faq.length > 0) toc.push({ id: 'faq', label: 'Common questions' })
  if (a.sources.length > 0) toc.push({ id: 'sources', label: 'Sources' })

  const schema =
    a.status === 'published'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          description: a.summary,
          datePublished: a.publishedAt,
          dateModified: a.reviewedAt && a.publishedAt && a.reviewedAt > a.publishedAt ? a.reviewedAt : (a.publishedAt ?? a.reviewedAt),
          author: authorSchema(a),
          publisher: { '@id': `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/insights/${a.slug}`,
          image: `${SITE_URL}/opengraph-image`,
          articleSection: a.category,
          inLanguage: 'en-US',
        }
      : null

  return (
    <SharedLayout>
      <BreadcrumbSchema trail={[{ name: 'Insights', path: '/insights' }, { name: a.title, path: `/insights/${a.slug}` }]} />
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

          <ArticleToc items={toc} />

          <article className="ys-art">
            {/* Article details as one line above the text (2026-11-11): the old
                sticky side column overlapped wide content such as code and diagrams. */}
            <p className="ys-art-byline">
              <span>
                {author ? (
                  author.linkedinUrl ? (
                    <a href={author.linkedinUrl} rel="author noopener noreferrer" target="_blank" className="ys-link">{author.name}</a>
                  ) : (
                    <a href="/who-we-are/leadership" rel="author" className="ys-link">{author.name}</a>
                  )
                ) : (
                  'YatiSphere team'
                )}
              </span>
              <span>{a.readTime}</span>
              {a.publishedAt && <span>Published {longDate(a.publishedAt)}</span>}
              <span>Facts checked {longDate(a.reviewedAt)}</span>
            </p>
            {a.sections.map((section, i) => (
              <section key={i} id={section.heading ? ids[i] : undefined}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{withCode(p)}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((b, j) => (
                      <li key={j}>{withCode(b)}</li>
                    ))}
                  </ul>
                )}
                {section.figure && (() => {
                  const Figure = FIGURES[section.figure.key]
                  return (
                    <figure className="ys-art-figure">
                      {/* Scrolls sideways on phones so the labels stay readable. */}
                      <div className="ys-art-figure-scroll" tabIndex={0} role="group" aria-label="Diagram, scroll sideways on small screens">
                        <Figure />
                      </div>
                      {section.figure.caption && <figcaption>{section.figure.caption}</figcaption>}
                    </figure>
                  )
                })()}
                {section.code && (
                  <figure className="ys-art-code">
                    <pre tabIndex={0} aria-label={section.code.caption ?? `${section.code.lang} example`}>
                      <code data-lang={section.code.lang}>{section.code.text}</code>
                    </pre>
                    {section.code.caption && <figcaption>{section.code.caption}</figcaption>}
                  </figure>
                )}
              </section>
            ))}

            {a.faq && a.faq.length > 0 && (
              <section id="faq" aria-labelledby="faq-heading">
                {a.status === 'published' && (
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: a.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
                      }),
                    }}
                  />
                )}
                <h2 id="faq-heading">Common questions</h2>
                {a.faq.map((f) => (
                  <details key={f.q} className="ys-faq">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </section>
            )}

            {a.sources.length > 0 && (
              <section id="sources" aria-labelledby="sources-heading" className="ys-art-sources">
                <h2 id="sources-heading" className="ys-eyebrow">Sources</h2>
                <ol>
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} className="ys-link" target="_blank" rel="noopener noreferrer">
                        {s.title}
                      </a>
                      {' · '}
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
        body="Tell us what you are working on."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
