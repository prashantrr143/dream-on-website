import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor, SITE_URL } from '@/lib/seo'
import { siteConfig } from '@/lib/site.config'
import { PRIMARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/blueprint')

/**
 * The fixed-price Solution Blueprint (audit G-17 secondary CTA).
 *
 * Everything here restates the offer already described under Engagement
 * models on /how-we-work: one named problem, 2–4 weeks, fixed price,
 * solution design, costed delivery plan and risks. The price and the
 * sample deliverable appear only once they are set in siteConfig.
 */

const STEPS = [
  { name: 'Discover', body: 'We agree the problem, the constraints and how success will be measured, with the people who own them.' },
  { name: 'Design', body: 'We design the solution against your systems, your cloud and the rules you answer to.' },
  { name: 'Costed plan', body: 'We turn the design into a delivery plan with a fixed price, milestones and named risks.' },
  { name: 'Readout', body: 'We walk your stakeholders through it, and you decide whether to go ahead.' },
]

const DELIVERABLES = [
  { name: 'Problem statement', body: 'The problem in business terms, the constraints, and what "solved" will look like.' },
  { name: 'Solution blueprint', body: 'The target architecture and how it fits the systems you already run.' },
  { name: 'Fixed, costed delivery plan', body: 'Scope, milestones and a fixed price for the build, so the next step has no open-ended estimate.' },
  { name: 'Risk register', body: 'What could go wrong, how likely it is, and what we would do about it.' },
]

const FAQ = [
  {
    q: 'Who is the Blueprint for?',
    a: 'Teams with one named problem — a system nobody dares touch, an AI pilot that stalled, data nobody can get answers from — who want a design and a fixed price before committing to a build.',
  },
  {
    q: 'How long does it take?',
    a: 'Two to four weeks, depending on the size of the problem and how quickly we can reach the people and systems involved.',
  },
  {
    q: 'What does it cost?',
    a: 'A fixed price, agreed before the work starts, so you know what the first piece of work costs. The plan it produces then puts a fixed price on the build.',
  },
  {
    q: 'Who does the work?',
    a: 'The same in-house team that would build it. The people who scope your solution are the people who build it, launch it and stay to run it.',
  },
  {
    q: 'What happens to our data during the Blueprint?',
    a: 'We work in your environment and within the boundaries you set. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
  },
]

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}

export default function BlueprintPage() {
  const { priceFrom, currency, sampleDeliverablePdf } = siteConfig.blueprint
  const price = priceFrom && currency ? formatPrice(priceFrom, currency) : null

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${SITE_URL}/blueprint`,
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <SharedLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Solution Blueprint · 2–4 weeks · fixed price"
        title="Know what it will take, and what it will cost, before you build."
        lede="One named problem. A solution design, a fixed costed delivery plan and a risk register, delivered by the team that would build it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        visual="lanes"
      >
        {price && (
          <p style={{ fontSize: 15, color: 'var(--on-dark-muted)' }}>
            From <strong style={{ color: 'var(--on-dark)' }}>{price}</strong>
          </p>
        )}
      </PageHero>

      <PageSection
        tone="light"
        eyebrow="How it runs"
        title="Four steps, two to four weeks."
      >
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0, counterReset: 'step' }}
        >
          {STEPS.map((step, i) => (
            <li key={step.name} className="ys-card-light" style={{ padding: 26, minWidth: 0 }}>
              <p className="ys-eyebrow" aria-hidden="true" style={{ marginBottom: 10 }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{step.name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection tone="white" eyebrow="What you get" title="Four deliverables you keep.">
        <ul className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {DELIVERABLES.map((d) => (
            <li key={d.name} className="ys-card-light" style={{ padding: 26, minWidth: 0 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{d.name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{d.body}</p>
            </li>
          ))}
        </ul>
        {sampleDeliverablePdf && (
          <p style={{ marginTop: 24 }}>
            <a href={sampleDeliverablePdf} className="ys-link" download>
              Download a sample deliverable (PDF)
            </a>
          </p>
        )}
      </PageSection>

      <PageSection tone="light" eyebrow="Questions" title="Before you book.">
        <div style={{ maxWidth: '52rem' }}>
          {FAQ.map((f) => (
            <details key={f.q} className="ys-faq" style={{ borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
              <summary style={{ cursor: 'pointer', fontSize: 17, fontWeight: 600, color: 'var(--ink)' }}>{f.q}</summary>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.65, color: 'var(--ink-muted)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="Start with one problem."
        body="Tell us what it is in a 30-minute call. If a Blueprint is the right first step, we'll say so and send a fixed price."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}
