import type { Metadata } from 'next'
import { ArrowRight, Check, X } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor, SITE_URL } from '@/lib/seo'
import { siteConfig } from '@/lib/site.config'
import { PRIMARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/blueprint')

/**
 * The Solution Blueprint: the usual first engagement and the site-wide
 * secondary CTA (review, 2026-10-20). Answers, in order, what a buyer asks
 * about a paid discovery: is it for me, what happens week by week, what do
 * I keep, what do you need from us, what does it cost, and what happens
 * next. No price is published; the fee model matches WorkingWithUs
 * (owner to confirm). The sample deliverable appears only once it is set
 * in siteConfig.
 */

const WEEKS = [
  {
    when: 'Week 1',
    name: 'Discover',
    body: 'Workshops with the people who own the problem and the systems. We agree the problem, the constraints and how success will be measured.',
  },
  {
    when: 'Week 2',
    name: 'Design',
    body: 'We design the solution against your systems, your cloud and the rules you answer to, and test it with your architects.',
  },
  {
    when: 'Week 3',
    name: 'Plan',
    body: 'The design becomes a delivery plan: scope, milestones, team, sequencing and the named risks.',
  },
  {
    when: 'Week 4',
    name: 'Readout',
    body: 'We walk your stakeholders through it and answer the hard questions. You decide what happens next.',
  },
]

const DELIVERABLES = [
  { name: 'Problem statement', body: 'The problem in business terms, the constraints, and what "solved" will look like, agreed with your sponsor.' },
  { name: 'Solution blueprint', body: 'The target architecture and how it fits the systems you already run, with the decisions behind it.' },
  { name: 'Delivery plan', body: 'Scope, milestones, team and sequencing for the build, detailed enough for any competent team to follow.' },
  { name: 'Risk register', body: 'What could go wrong, how likely it is, and what we would do about it.' },
]

const GOOD_FIT = [
  'You have one named problem, such as a system nobody dares touch, an AI pilot that stalled, or a security review that blocks a deal',
  'A decision about it has to be made in the next quarter',
  'You want an independent design before you commit budget to a build',
]

const NOT_A_FIT = [
  'You already have an agreed design and need people to build it: start with project delivery instead',
  'You want a broad AI or digital strategy covering the whole business',
]

const FROM_YOU = [
  { name: 'A sponsor', body: 'Someone who owns the outcome and can make the go or no-go decision at the readout.' },
  { name: 'Time from the right people', body: 'A few hours a week from the people who run the systems and processes involved.' },
  { name: 'Access to what exists', body: 'Read access to the relevant documentation, architecture and, where needed, systems, inside the boundaries you set.' },
]

const FAQ = [
  {
    q: 'How long does it take?',
    a: 'Two to four weeks. A tightly scoped problem with the right people available can finish in two; one that spans several systems or teams takes four.',
  },
  {
    q: 'How is it priced?',
    a: 'A fixed fee, agreed before we start, once we understand the size of the problem. The first conversation to scope it costs nothing.',
  },
  {
    q: 'Who does the work?',
    a: 'Senior engineers who have built and run systems like yours: the same people who would lead the build if you go ahead with us.',
  },
  {
    q: 'Are we committed to building with you afterwards?',
    a: 'No. The blueprint, the plan and the risk register are yours. You can build with us, build in-house or with another firm, or decide not to build at all.',
  },
  {
    q: 'What happens to our data during the Blueprint?',
    a: 'We work in your environment and within the boundaries you set, under an NDA and a data processing agreement where personal data is involved. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
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
        eyebrow="Solution Blueprint · 2–4 weeks · fixed fee"
        title="Know what it will take before you build."
        lede="One named problem. A solution design, a delivery plan and a risk register, delivered by the senior engineers who would build it, and yours to keep whatever you decide."
        primaryCta={{ label: 'Scope a Blueprint', href: `${PRIMARY_CTA.href}?interest=Consulting` }}
        secondaryCta={{ label: 'What you get', href: '#deliverables' }}
        visual="lanes"
      />

      {/* Is it right for you */}
      <PageSection tone="white" title="Is a Blueprint the right first step?">
        <div className="ys-bp-fit">
          <div className="ys-bp-fit-col is-yes">
            <p className="ys-bp-fit-label">It is a good fit when</p>
            <ul>{GOOD_FIT.map((x) => <li key={x}><Check strokeWidth={2.5} aria-hidden="true" />{x}</li>)}</ul>
          </div>
          <div className="ys-bp-fit-col is-no">
            <p className="ys-bp-fit-label">It is not the right fit when</p>
            <ul>{NOT_A_FIT.map((x) => <li key={x}><X strokeWidth={2.5} aria-hidden="true" />{x}</li>)}</ul>
          </div>
        </div>
      </PageSection>

      {/* Week by week */}
      <PageSection
        tone="light"
        title="How the four weeks run"
        lede="A smaller problem compresses into two weeks. The order stays the same."
      >
        <ol className="ys-bp-weeks">
          {WEEKS.map((w) => (
            <li key={w.name}>
              <p className="ys-bp-when">{w.when}</p>
              <h3>{w.name}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* What you keep */}
      <PageSection id="deliverables" tone="white" title="What you keep at the end">
        <div className="ys-bp-keep">
          <ul className="ys-bp-deliverables">
            {DELIVERABLES.map((d, i) => (
              <li key={d.name}>
                <span className="ys-bp-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{d.name}</h3>
                  <p>{d.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <aside className="ys-bp-own">
            <p className="ys-bp-own-title">Yours, whatever you decide</p>
            <p>
              Build with us, build in-house or with another firm, or stop. The documents are written to be used by any
              competent team, not to lock you in.
            </p>
            {sampleDeliverablePdf && (
              <a href={sampleDeliverablePdf} className="ys-link" download>
                Download a sample deliverable (PDF)
              </a>
            )}
            <a href="/who-we-are/how-we-work" className="ys-bp-own-link">
              What happens after the Blueprint
              <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </PageSection>

      {/* What we need from you */}
      <PageSection tone="light" title="What we need from you">
        <dl className="ys-wwu-list ys-bp-needs">
          {FROM_YOU.map((n) => (
            <div key={n.name}>
              <dt>{n.name}</dt>
              <dd>{n.body}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      {/* Questions */}
      <PageSection tone="white" title="Common questions">
        <div style={{ maxWidth: '52rem' }}>
          {FAQ.map((f) => (
            <details key={f.q} className="ys-faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="Start with one problem."
        body="Tell us what it is. If a Blueprint is the right first step, we will say so, and scope it with you at no cost."
        primaryCta={{ label: 'Scope a Blueprint', href: `${PRIMARY_CTA.href}?interest=Consulting` }}
      />
    </SharedLayout>
  )
}
