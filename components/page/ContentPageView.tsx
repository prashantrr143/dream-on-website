import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/StructuredData'
import { SITE_URL } from '@/lib/seo'
import { PRIMARY_CTA, SECONDARY_CTA, contactHref } from '@/lib/cta'
import type { Block, ContentPage } from '@/content/pages/types'
import type { CollectionItem } from '@/content/types'
import { stories } from '@/content/stories'
import { insights } from '@/content/insights'
import { news } from '@/content/news'
import { events } from '@/content/events'
import { recognitions } from '@/content/recognitions'
import { Tabs } from './Tabs'
import { WorkflowDiagram } from './WorkflowDiagram'

/**
 * Renders a data-driven page (content/pages/*.ts): hero, then each block
 * in its own section with alternating tones, then the contact banner.
 * Blocks with nothing to show render nothing.
 */

const muted: React.CSSProperties = { fontSize: 15, lineHeight: 1.65, color: 'var(--ink-muted)' }

function CardGrid({ cards, columns = 3 }: { cards: { title: string; body: string; href?: string; bullets?: string[] }[]; columns?: number | undefined }) {
  const cols = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'
  return (
    <ul className={`grid grid-cols-1 ${cols}`} style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
      {cards.map((c) => {
        const inner = (
          <>
            <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, color: 'var(--ink)', marginBottom: 8 }}>{c.title}</h3>
            <p style={muted}>{c.body}</p>
            {c.bullets && c.bullets.length > 0 && (
              <ul style={{ marginTop: 12, paddingLeft: 18, listStyle: 'disc' }}>
                {c.bullets.map((b) => (
                  <li key={b} style={{ ...muted, fontSize: 14, marginBottom: 4 }}>{b}</li>
                ))}
              </ul>
            )}
            {c.href && (
              <span className="ys-card-more" aria-hidden="true">
                Read more <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </span>
            )}
          </>
        )
        return (
          <li key={c.title} style={{ minWidth: 0 }}>
            {c.href ? (
              <a href={c.href} className="ys-card-light ys-card-link" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 26 }}>
                {inner}
              </a>
            ) : (
              <div className="ys-card-light" style={{ height: '100%', padding: 26 }}>{inner}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function ItemCards({ items }: { items: CollectionItem[] }) {
  return (
    <CardGrid cards={items.slice(0, 6).map((i) => ({ title: i.title, body: i.summary, href: i.href }))} />
  )
}

function InFocus({ block }: { block: Extract<Block, { type: 'inFocus' }> }) {
  const match = (i: CollectionItem) =>
    (!block.industries?.length || block.industries.some((x) => i.industries.includes(x))) &&
    (!block.services?.length || block.services.some((x) => i.services.includes(x))) &&
    (!block.clouds?.length || block.clouds.some((x) => i.clouds.includes(x)))
  const tabs = [
    { label: 'Thought leadership', items: insights.filter(match) },
    { label: 'Customer stories', items: stories.filter(match) },
    { label: 'News', items: news.filter(match) },
    { label: 'Recognitions', items: recognitions.filter(match) },
    { label: 'Events', items: events.filter(match) },
  ].filter((t) => t.items.length > 0)
  if (tabs.length === 0) return null
  return (
    <PageSection tone="white" eyebrow={block.kicker ?? 'In focus'} title={block.title ?? 'In focus'}>
      <Tabs tabs={tabs.map((t) => ({ label: t.label, content: <ItemCards items={t.items} /> }))} />
    </PageSection>
  )
}

const CLOUDS = [
  { name: 'AWS', href: '/what-we-do/cloud/aws', body: 'Landing zones, migration, data and AI workloads, and cost control on AWS.' },
  { name: 'Microsoft Azure', href: '/what-we-do/cloud/microsoft-azure', body: 'Governed Azure platforms, from landing zones to data and AI workloads.' },
  { name: 'Google Cloud', href: '/what-we-do/cloud/google-cloud', body: 'Secure foundations, data platforms and AI workloads on Google Cloud.' },
]

function BlockView({ block, tone }: { block: Block; tone: 'white' | 'light' }) {
  const head = 'title' in block ? { eyebrow: block.kicker, title: block.title, lede: block.lede } : {}
  const id = block.id
  switch (block.type) {
    case 'statement':
      return (
        <PageSection id={id} tone={tone} {...head}>
          <p className="ys-statement">{block.text}</p>
        </PageSection>
      )
    case 'cards':
      if (block.cards.length === 0) return null
      return (
        <PageSection id={id} tone={tone} {...head}>
          <CardGrid cards={block.cards} columns={block.columns} />
        </PageSection>
      )
    case 'tabs':
      if (block.tabs.length === 0) return null
      return (
        <PageSection id={id} tone={tone} {...head}>
          <Tabs
            tabs={block.tabs.map((t) => ({
              label: t.label,
              content: (
                <div style={{ maxWidth: '70ch' }}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink)' }}>{t.description}</p>
                  <ul style={{ marginTop: 16, paddingLeft: 20, listStyle: 'disc' }}>
                    {t.bullets.map((b) => (
                      <li key={b} style={{ ...muted, marginBottom: 6 }}>{b}</li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        </PageSection>
      )
    case 'steps':
      return (
        <PageSection id={id} tone={tone} {...head}>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
            {block.steps.map((s, i) => (
              <li key={s.title} className="ys-card-light" style={{ padding: 26, minWidth: 0 }}>
                <p className="ys-eyebrow" aria-hidden="true" style={{ marginBottom: 10 }}>{String(i + 1).padStart(2, '0')}</p>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ ...muted, fontSize: 14 }}>{s.body}</p>
              </li>
            ))}
          </ol>
        </PageSection>
      )
    case 'list':
      if (block.items.length === 0) return null
      return (
        <PageSection id={id} tone={tone} {...head}>
          <ul className="ys-check-list">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>
      )
    case 'accordion':
    case 'faq': {
      const items = block.type === 'faq' ? block.items.map((f) => ({ title: f.q, body: f.a })) : block.items
      if (items.length === 0) return null
      return (
        <PageSection id={id} tone={tone} {...head}>
          {block.type === 'faq' && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: block.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
                }),
              }}
            />
          )}
          <div style={{ maxWidth: '56rem' }}>
            {items.map((it) => (
              <details key={it.title} className="ys-faq">
                <summary>{it.title}</summary>
                <p>{it.body}</p>
              </details>
            ))}
          </div>
        </PageSection>
      )
    }
    case 'links':
      if (block.links.length === 0) return null
      return (
        <PageSection id={id} tone={tone} {...head}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '4px 28px', listStyle: 'none', margin: 0, padding: 0 }}>
            {block.links.map((l) => (
              <li key={l.href} style={{ borderBottom: '1px solid var(--line)' }}>
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
        </PageSection>
      )
    case 'offer':
      return (
        <PageSection id={id} tone={tone} eyebrow={block.kicker ?? 'Start here'} title={block.title ?? block.name} lede={block.lede ?? block.summary}>
          <div className="ys-card-light ys-offer">
            <div>
              <p className="ys-offer-label">What&rsquo;s included</p>
              <ul className="ys-check-list">
                {block.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="ys-offer-label">What you get</p>
              <p style={muted}>{block.deliverable}</p>
            </div>
          </div>
        </PageSection>
      )
    case 'layers':
      return (
        <PageSection id={id} tone={tone} {...head}>
          <ol className="ys-layers">
            {block.layers.map((l, i) => (
              <li key={l.title} className={i % 2 ? 'is-flipped' : ''}>
                <div className="ys-layer-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                  <a href={l.href} className="ys-link">
                    {l.linkLabel} <ArrowRight className="w-3.5 h-3.5 inline" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </PageSection>
      )
    case 'note':
      return (
        <PageSection id={id} tone={tone}>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: '80ch' }}>{block.text}</p>
        </PageSection>
      )
    case 'workflow':
      return (
        <PageSection id={id} tone={tone} eyebrow={block.kicker ?? 'How it works'} title={block.title ?? 'Human + AI in control'} lede={block.lede ?? 'Agents do the routine work; a person approves what matters, and every step is logged. Select a step to see the detail.'}>
          <WorkflowDiagram />
        </PageSection>
      )
    case 'modelNeutral':
      return (
        <PageSection id={id} tone={tone} eyebrow={block.kicker ?? 'Model-neutral'} title={block.title ?? 'Model-neutral by design'} lede={block.lede ?? 'We choose the model that fits the task and run it where your data lives.'}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20 }}>
            <div className="ys-card-light" style={{ padding: 26 }}>
              <p className="ys-offer-label">Models we build with</p>
              <ul className="ys-chip-row">
                {['Claude', 'OpenAI models', 'Open-weight models'].map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="ys-card-light" style={{ padding: 26 }}>
              <p className="ys-offer-label">Where they run</p>
              <ul className="ys-chip-row">
                {['Amazon Bedrock', 'Google Cloud Vertex AI', 'Microsoft Foundry', 'Direct APIs'].map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
          <p style={{ ...muted, marginTop: 16 }}>
            <a href="/what-we-do/applied-ai/claude" className="ys-link">See our Claude practice</a>
          </p>
        </PageSection>
      )
    case 'cloudChooser':
      return (
        <PageSection id={id} tone={tone} eyebrow={block.kicker ?? 'Multi-cloud'} title={block.title ?? 'Choose your cloud'} lede={block.lede}>
          <CardGrid cards={CLOUDS.map((c) => ({ title: c.name, body: c.body, href: c.href }))} />
        </PageSection>
      )
    case 'inFocus':
      return <InFocus block={block} />
  }
}

export function ContentPageView({ page }: { page: ContentPage }) {
  const isService = page.parents.length > 0
  let tone: 'white' | 'light' = 'light'
  return (
    <SharedLayout>
      <BreadcrumbSchema trail={[...page.parents.filter((p) => !p.path.includes('#')), { name: page.name, path: page.path }]} />
      {isService && (
        <ServiceSchema services={[{ name: page.name, description: page.meta.description, url: `${SITE_URL}${page.path}` }]} />
      )}
      <PageHero
        eyebrow={page.hero.kicker}
        title={page.hero.h1}
        lede={page.hero.subhead}
        primaryCta={{ label: PRIMARY_CTA.label, href: contactHref(page.contactInterest) }}
        visual={page.path.includes('/cloud') ? 'layers' : page.path.includes('/applied-ai') ? 'circuit' : page.path.includes('/industries') ? 'network' : 'lanes'}
        breadcrumbs={page.parents}
      />
      {page.blocks.map((block, i) => {
        tone = tone === 'light' ? 'white' : 'light'
        return <BlockView key={`${block.type}-${i}`} block={block} tone={tone} />
      })}
      <PageCTA
        title={page.contact?.title ?? 'Enterprise AI, engineered to be trusted'}
        body={page.contact?.body ?? 'Tell us what you are working on. A senior member of the team replies within one working day.'}
        primaryCta={{ label: PRIMARY_CTA.label, href: contactHref(page.contactInterest) }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
