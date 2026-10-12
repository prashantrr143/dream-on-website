import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor, SITE_URL } from '@/lib/seo'
import { siteConfig } from '@/lib/site.config'
import { PRIMARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/blueprint')

/**
 * The Solution Blueprint: a short discovery engagement (the site-wide
 * secondary CTA). Deliberately says nothing about price or fees.
 *
 * Everything here restates the offer already described under Engagement
 * models on /how-we-work: one named problem, 2–4 weeks,
 * solution design, delivery plan and risks. The
 * sample deliverable appear only once they are set in siteConfig.
 */

const STEPS = [
  { name: 'Discover', body: 'We agree the problem, the constraints and how success will be measured, with the people who own them.' },
  { name: 'Design', body: 'We design the solution against your systems, your cloud and the rules you answer to.' },
  { name: 'Delivery plan', body: 'We turn the design into a delivery plan with scope, milestones, team and named risks.' },
  { name: 'Readout', body: 'We walk your stakeholders through it, and you decide whether to go ahead.' },
]

const DELIVERABLES = [
  { name: 'Problem statement', body: 'The problem in business terms, the constraints, and what "solved" will look like.' },
  { name: 'Solution blueprint', body: 'The target architecture and how it fits the systems you already run.' },
  { name: 'Delivery plan', body: 'Scope, milestones, team and sequencing for the build, so the next step is clear before it starts.' },
  { name: 'Risk register', body: 'What could go wrong, how likely it is, and what we would do about it.' },
]

const FAQ = [
  {
    q: 'Who is the Blueprint for?',
    a: 'Teams with one named problem — a system nobody dares touch, an AI pilot that stalled, data nobody can get answers from — who want a clear design and plan before committing to a build.',
  },
  {
    q: 'How long does it take?',
    a: 'Two to four weeks, depending on the size of the problem and how quickly we can reach the people and systems involved.',
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


export default function BlueprintPage() {
  const { sampleDeliverablePdf } = siteConfig.blueprint

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
        eyebrow="Solution Blueprint · 2–4 weeks"
        title="Know what it will take before you build."
        lede="One named problem. A solution design, a delivery plan and a risk register, delivered by the team that would build it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        visual="lanes"
      />

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
            <li key={step.name} className="ys-open-item" style={{ minWidth: 0 }}>
              <p className="ys-eyebrow" aria-hidden="true" style={{ marginBottom: 10 }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 8 }}>{step.name}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)' }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection tone="white" eyebrow="What you get" title="Four deliverables you keep.">
        <ul className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {DELIVERABLES.map((d) => (
            <li key={d.name} className="ys-open-item" style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 8 }}>{d.name}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)' }}>{d.body}</p>
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
            <details key={f.q} className="ys-faq" style={{ borderBottom: '1px solid var(--grey-200)', padding: '18px 0' }}>
              <summary style={{ cursor: 'pointer', fontSize: 17, fontWeight: 600, color: 'var(--ink-900)' }}>{f.q}</summary>
              <p style={{ marginTop: 10, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-600)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="Start with one problem."
        body="Tell us what it is. If a Blueprint is the right first step, we'll say so and explain how it would run."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}
