import { ArrowRight, Check, Quote, Scale } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/seo'
import { PRIMARY_CTA, contactHref } from '@/lib/cta'
import { publishedArticles } from '@/lib/insights'
import { CONTENT_PAGES, type ContentPage } from '@/content/pages'
import type { IndustryDetail } from '@/content/pages/types'

/**
 * Industry page (rewrite, 2026-10-19). Shows every section in full, in the
 * order a buyer from the sector reads: who it is for, why the sector is
 * different, what we build (problem first), the rules they answer to, how
 * to start, then related reading.
 */

function Schemas({ page }: { page: ContentPage }) {
  return (
    <>
      <BreadcrumbSchema trail={[...page.parents, { name: page.name, path: page.path }]} />
      <ServiceSchema services={[{ name: page.name, description: page.meta.description, url: `${SITE_URL}${page.path}` }]} />
    </>
  )
}

export function IndustryView({ page, d }: { page: ContentPage; d: IndustryDetail }) {
  const articles = publishedArticles.filter((a) => a.tags?.industries?.includes(d.slug)).slice(0, 3)

  return (
    <SharedLayout>
      <Schemas page={page} />
      <PageHero
        eyebrow={page.hero.kicker}
        title={page.hero.h1}
        lede={page.hero.subhead}
        visual="network"
        breadcrumbs={page.parents}
        primaryCta={{ label: PRIMARY_CTA.label, href: contactHref(page.contactInterest) }}
        secondaryCta={{ label: 'Start with a Blueprint', href: '/blueprint' }}
      />

      {/* Who it's for, and why the sector is different */}
      <PageSection tone="white">
        <div className="ys-ind-intro">
          <div>
            <p className="ys-eyebrow">Who we work with</p>
            <ul className="ys-ind-chips">
              {d.forWho.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="ys-ind-h2">{d.context.title}</h2>
            {d.context.paragraphs.map((p) => <p key={p} className="ys-ind-lead">{p}</p>)}
          </div>
        </div>
      </PageSection>

      {/* What we build, problem first */}
      <PageSection id="what-we-build" tone="light" eyebrow="What we build" title="The problems we are brought in to fix.">
        <ul className="ys-ind-build">
          {d.build.map((b) => (
            <li key={b.title}>
              <p className="ys-ind-problem">
                <Quote strokeWidth={2} aria-hidden="true" />
                <span>{b.problem}</span>
              </p>
              <h3>{b.title}</h3>
              <p className="ys-ind-body">{b.body}</p>
              <ul>
                {b.bullets.map((x) => <li key={x}><Check strokeWidth={2.5} aria-hidden="true" />{x}</li>)}
              </ul>
              <p className="ys-ind-outcome"><span>Outcome</span>{b.outcome}</p>
              <a href={b.href} className="ys-ind-more">
                {b.linkLabel}
                <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </PageSection>

      {/* Standards, with the disclaimer visible */}
      <PageSection id="standards" tone="white" eyebrow="Regulation and standards" title="The rules your organization answers to.">
        <p className="ys-ind-disclaimer">
          <Scale strokeWidth={2} aria-hidden="true" />
          <span>{d.standards.lede}</span>
        </p>
        {d.standards.regions && (
          <dl className="ys-ind-regions">
            {d.standards.regions.map((r) => (
              <div key={r.region}>
                <dt>{r.region}</dt>
                <dd>{r.bodies}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul className="ys-ind-standards">
          {d.standards.items.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      {/* How to start */}
      <section id="start" className="ys-hww-band" aria-labelledby="ind-start">
        <div className="enterprise-container-wide">
          <div className="ys-rai-band-head">
            <div>
              <p className="ys-eyebrow ys-eyebrow-on-dark">How to start</p>
              <h2 id="ind-start">Start with a two-to-four-week plan</h2>
            </div>
            <p>{d.start.lede}</p>
          </div>
          <ol className="ys-ind-steps">
            {d.start.steps.map((s, i) => (
              <li key={s.title}>
                <span className="ys-ind-step-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <a href="/blueprint" className="ys-hww-more ys-ind-band-link">
            How the Solution Blueprint works
            <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Related reading and services */}
      <PageSection id="related" tone="light" eyebrow="Go deeper" title={`More on ${page.name}`}>
        <div className="ys-ind-related">
          {articles.length > 0 && (
            <div>
              <p className="ys-ind-related-label">Insights</p>
              <ul className="ys-ind-articles">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <a href={`/insights/${a.slug}`} className="ys-insight-card">
                      <span className="ys-insight-meta">{a.category} · {a.readTime}</span>
                      <span className="ys-insight-title">{a.title}</span>
                      <span className="ys-card-more" aria-hidden="true">
                        Read the article <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="ys-ind-related-label">Related services</p>
            <ul className="ys-ind-links">
              {d.related.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ys-link-row">
                    <span>
                      <span className="ys-link-row-label">{l.label}</span>
                      {l.descriptor && <span className="ys-link-row-desc">{l.descriptor}</span>}
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageCTA
        title={d.cta.title}
        body={d.cta.body}
        primaryCta={{ label: PRIMARY_CTA.label, href: contactHref(page.contactInterest) }}
        secondaryCta={{ label: 'Start with a Blueprint', href: '/blueprint' }}
      />
    </SharedLayout>
  )
}

/** /what-we-do/industries: the three sectors, with what we do in each. */
export function IndustriesHub({ page }: { page: ContentPage }) {
  const industries = CONTENT_PAGES.filter((p) => p.industry)
  return (
    <SharedLayout>
      <BreadcrumbSchema trail={[...page.parents, { name: page.name, path: page.path }]} />
      <PageHero
        eyebrow={page.hero.kicker}
        title={page.hero.h1}
        lede={page.hero.subhead}
        visual="network"
        breadcrumbs={page.parents}
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
      <PageSection tone="white" title="What we build in each sector">
        <ul className="ys-ind-hub">
          {industries.map((p) => (
            <li key={p.path}>
              <a href={p.path}>
                <span className="ys-ind-hub-name">{p.name}</span>
                <span className="ys-ind-hub-h1">{p.hero.h1}</span>
                <span className="ys-ind-hub-for">{p.industry!.forWho.slice(0, 3).join(' · ')}</span>
                <span className="ys-ind-hub-list">
                  {p.industry!.build.map((b) => (
                    <span key={b.title}><Check strokeWidth={2.5} aria-hidden="true" />{b.title}</span>
                  ))}
                </span>
                <span className="ys-card-more" aria-hidden="true">
                  Explore {p.name} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ys-ind-other">
          Not in one of these sectors? The same approach applies anywhere a system has to stand up to scrutiny.{' '}
          <a href={PRIMARY_CTA.href} className="ys-link">Tell us about yours</a>.
        </p>
      </PageSection>
      <PageCTA
        title="What are you working on?"
        body="A senior engineer replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: 'Start with a Blueprint', href: '/blueprint' }}
      />
    </SharedLayout>
  )
}
