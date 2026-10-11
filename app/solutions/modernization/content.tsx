"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'Our core system is old and nobody dares touch it.',
    body: 'It works, mostly. The people who understood it have moved on, and every change feels like a risk to the business.',
  },
  {
    quote: 'We’ve been told to modernize, but not what that means.',
    body: 'Vendors propose rebuilds. The board wants a number. Nobody has mapped what the estate actually does.',
  },
  {
    quote: 'Our last transformation program stalled.',
    body: 'A big-bang plan, nothing usable until the end, and the funding ran out before the value arrived.',
  },
]

const SERVICES = [
  {
    title: 'Architecture review',
    body: 'An independent read on your current estate: what is load-bearing, what is holding you back, and what it would take to change it.',
    gets: [
      'Current-state assessment and risk review',
      'A map of applications and integrations',
      'Options with trade-offs, not a single answer',
    ],
  },
  {
    title: 'Legacy re-platforming',
    body: 'Moving systems off aging platforms without stopping the business, in steps that are each reversible and useful on their own.',
    gets: [
      'Portfolio triage: retain, re-platform, rebuild, retire',
      'Old and new designed to run side by side',
      'Cutover runbooks with tested rollback',
    ],
  },
  {
    title: 'Costed roadmaps',
    body: 'A sequenced, costed plan that ties modernization work to business outcomes, so funding and delivery capacity line up.',
    gets: [
      'Initiatives sequenced against dependencies',
      'Cost and effort estimates',
      'A business case you can take to the board',
    ],
  },
  {
    title: 'Operating model and change',
    body: 'Team boundaries, handoffs and training, so the new platform has owners and people actually use it.',
    gets: [
      'Ownership and team design',
      'Training for the people who will run it',
      'Adoption tracked after go-live',
    ],
  },
]

const SCENARIOS = [
  {
    tag: 'Financial services',
    problem: 'Every change has to route through one aging core platform.',
    approach: 'New services built around the old core, taking over one function at a time.',
    points: [
      'Interfaces defined before anything moves',
      'Old and new running side by side',
      'Each step reversible',
    ],
  },
  {
    tag: 'Legal & professional services',
    problem: 'Practice systems built up over years, joined by spreadsheets.',
    approach: 'An integration layer, and a roadmap that retires the manual joins first.',
    points: [
      'A map of where data is re-keyed today',
      'Integrations ranked by risk and effort',
      'Systems retired once nothing depends on them',
    ],
  },
  {
    tag: 'Software & SaaS',
    problem: 'A monolith that slows every release.',
    approach: 'Decomposition along business domains, starting where change is most frequent.',
    points: [
      'Domain map and service boundaries',
      'Shared CI/CD from the first service',
      'Teams that own what they ship',
    ],
  },
]

const STEPS = [
  { n: '01', title: 'Assess', body: 'Architecture and estate review, stakeholder interviews and a prioritized list of findings.' },
  { n: '02', title: 'Define', body: 'A target architecture on Azure, a sequenced roadmap and the business case to fund it.' },
  { n: '03', title: 'Deliver', body: 'Re-platforming in reversible steps, with training and adoption support alongside.' },
  { n: '04', title: 'Improve', body: 'Review technical debt and refine the roadmap as the business changes.' },
]

const CORE_STACK = [
  'Microsoft Azure',
  'Azure Migrate',
  'Azure App Service',
  'Azure Kubernetes Service',
  'Azure SQL',
  'Azure API Management',
  '.NET',
  'Java',
]

const ALSO_STACK = ['AWS', 'Google Cloud', 'VMware', 'Oracle Database']

/* ── Helpers ──────────────────────────────────────── */

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }} aria-hidden="true">
      <path d="M4 8l3.5 3.5L12 4" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TickList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <Tick />
          <span style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--ys-ink-body)' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((chip) => (
        <li
          key={chip}
          style={{
            padding: '5px 11px',
            borderRadius: '6px',
            background: 'var(--ys-surface-alt)',
            border: '1px solid var(--ys-border)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--ys-ink-body)',
          }}
        >
          {chip}
        </li>
      ))}
    </ul>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--ys-ink-muted)',
  marginBottom: '10px',
}

/* ── Component ────────────────────────────────────── */

const ModernizationAdvisory = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Modernization & Advisory"
        title="Modernize the estate you have, on a roadmap you can fund."
        lede="Architecture reviews, legacy re-platforming and costed roadmaps, with Microsoft Azure as the target platform. We stay through delivery, so the plan is one we have to live with too."
        visual="layers"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      {/* ── 2. Situations ── */}
      <PageSection tone="white" eyebrow="Where teams get stuck" title="Three situations we get called into.">
        <motion.div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {SITUATIONS.map((s) => (
            <motion.div key={s.quote} className="ys-card-light" style={{ padding: '28px', minWidth: 0 }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35, color: 'var(--ys-ink)', marginBottom: '12px', textWrap: 'pretty' }}>
                &ldquo;{s.quote}&rdquo;
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', maxWidth: '62ch' }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 3. Services ── */}
      <PageSection
        tone="light"
        eyebrow="What we do"
        title="Advice you can act on, and the delivery behind it."
        lede="From the first architecture review through re-platforming and adoption, shaped by your constraints and your funding."
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '20px' }}>
          {SERVICES.map((service) => (
            <motion.div key={service.title} className="ys-card-light" style={{ padding: '32px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--ys-ink)', marginBottom: '12px' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', marginBottom: '22px', maxWidth: '62ch' }}>
                {service.body}
              </p>
              <p style={labelStyle}>You get</p>
              <TickList items={service.gets} />
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 4. Scenarios ── */}
      <PageSection tone="white" eyebrow="Where we apply it" title="Typical problems, and how we sequence the work.">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '20px' }}>
          {SCENARIOS.map((scenario) => (
            <motion.div key={scenario.tag} className="ys-card-light" style={{ padding: '30px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ys-link-on-light)', marginBottom: '14px' }}>
                {scenario.tag}
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35, color: 'var(--ys-ink)', marginBottom: '10px', textWrap: 'pretty' }}>
                {scenario.problem}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', marginBottom: '20px', maxWidth: '62ch' }}>
                {scenario.approach}
              </p>
              <TickList items={scenario.points} />
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 5. How it runs ── */}
      <PageSection tone="light" eyebrow="How it runs" title="From an honest assessment to a system that runs.">
        <motion.ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          {STEPS.map((step) => (
            <motion.li key={step.n} className="ys-card-light" style={{ padding: '26px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span aria-hidden="true" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--ys-link-on-light)', marginBottom: '10px' }}>
                {step.n}
              </span>
              <h3 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.018em', color: 'var(--ys-ink)', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ys-ink-body)', maxWidth: '62ch' }}>{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </PageSection>

      {/* ── 6. Stack ── */}
      <PageSection
        tone="white"
        eyebrow="Technology"
        title="Azure-first, by design."
        lede="Microsoft Azure is our specialism and our default target platform. If your estate already runs on AWS, Google Cloud or on-premises, we work there too."
      >
        <motion.div className="ys-card-light" style={{ padding: 'clamp(24px, 3.5vw, 36px)', minWidth: 0 }}>
          <p style={labelStyle}>Core stack</p>
          <Chips items={CORE_STACK} />
          <details style={{ marginTop: '22px', paddingTop: '18px', borderTop: '1px solid var(--ys-border)' }}>
            <summary
              className="ys-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ys-link-on-light)]"
              style={{ cursor: 'pointer', fontSize: '14px' }}
            >
              We also work with
            </summary>
            <div style={{ marginTop: '14px' }}>
              <Chips items={ALSO_STACK} />
            </div>
          </details>
        </motion.div>
      </PageSection>

      {/* ── 7. Closing call to action ── */}
      <PageCTA
        title="Not sure where to start with an aging core system?"
        body="Describe the estate and the pressure on it. We will give you an honest read and a first view of the order to tackle it in."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default ModernizationAdvisory
