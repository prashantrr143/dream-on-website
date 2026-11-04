import type { Metadata } from 'next'
import { ArrowRight, Check, X } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { metaFor, SITE_URL } from '@/lib/seo'
import { siteConfig } from '@/lib/site.config'
import { PRIMARY_CTA } from '@/lib/cta'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

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

/**
 * The Blueprint run as an AI readiness assessment (2026-11-03). Searchers
 * ask for "AI readiness assessment / consulting"; this is the honest
 * version of that offer: one use case, assessed against real data.
 */
const AI_READINESS = [
  { name: 'Is it worth doing?', body: 'How long the task takes today, how often it goes wrong and what that costs, measured on real cases before anyone builds a model.' },
  { name: 'Can the model reach the data?', body: 'Where the documents and records live, who is allowed to see them, and whether they can be processed in the region you need.' },
  { name: 'How will you know it works?', body: 'A test set of real cases with known answers, built with your team, so accuracy is measured rather than demonstrated.' },
  { name: 'Where does a person decide?', body: 'The step where a named role reviews or approves the output, and what happens when they disagree with it.' },
  { name: 'What will it cost to run?', body: 'An estimate of model and platform cost per case at your volumes, next to the cost of doing it by hand.' },
  { name: 'What will a reviewer ask?', body: 'Where the use case sits under the EU AI Act, if it applies to you, and the controls a model risk, security or audit team will expect.' },
]

const FAQ = [
  {
    q: 'Can a Blueprint be used as an AI readiness assessment?',
    a: 'Yes, for one use case at a time. We check whether it is worth doing, whether the data can be used, how accuracy will be measured, where a person approves the output and what it will cost to run, and finish with a go or no-go recommendation.',
  },
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
    a: 'The team that would lead the build if you go ahead with us, so the plan is written by the people accountable for delivering it.',
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
      <BreadcrumbSchema trail={[{ name: 'Solution Blueprint', path: '/blueprint' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Solution Blueprint · 2–4 weeks · fixed fee"
        title="Solution Blueprint: a fixed-fee plan before you build"
        lede="One named problem. A solution design, a delivery plan and a risk register, delivered by the team that would build it, and yours to keep whatever you decide."
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
        <p className="ys-bp-fit-note">
          Reviewing a platform you already run, rather than planning a new build? An{' '}
          <a href="/what-we-do/consulting/enterprise-architecture" className="ys-link">enterprise architecture review</a> is usually the better first step.
        </p>
      </PageSection>

      {/* As an AI readiness assessment */}
      <PageSection id="ai-readiness" tone="light" title="Using a Blueprint as an AI readiness assessment">
        <div className="ys-bp-ai">
          <div className="ys-bp-ai-intro">
            <p>
              Most AI readiness assessments score the whole organization against a maturity model. The score tells you
              where you stand on a chart. It does not tell you whether the invoice-matching or document-review tool your
              operations team wants will work on your invoices and your documents.
            </p>
            <p>
              So we assess one use case, against your own data, and finish with a go or no-go recommendation. These are
              the questions it answers:
            </p>
          </div>
          <dl className="ys-wwu-list">
            {AI_READINESS.map((q) => (
              <div key={q.name}>
                <dt>{q.name}</dt>
                <dd>{q.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PageSection>

      {/* Week by week */}
      <PageSection
        tone="white"
        title="How a Blueprint runs"
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
      <PageSection id="deliverables" tone="light" title="What you keep at the end">
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
      <PageSection tone="white" title="What we need from you">
        <dl className="ys-wwu-list ys-bp-needs">
          {FROM_YOU.map((n) => (
            <div key={n.name}>
              <dt>{n.name}</dt>
              <dd>{n.body}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageCTA
        title="Start with one problem"
        body="Tell us what it is. If a Blueprint is the right first step, we will say so, and scope it with you at no cost."
        primaryCta={{ label: 'Scope a Blueprint', href: `${PRIMARY_CTA.href}?interest=Consulting` }}
      />

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
    </SharedLayout>
  )
}
