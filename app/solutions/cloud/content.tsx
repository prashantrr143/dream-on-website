"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'Cloud costs keep rising and nobody can say why.',
    body: 'Spend grows every month. Half the resources have no clear owner, and the bill arrives after the money is gone.',
  },
  {
    quote: 'Our migration keeps slipping.',
    body: 'Workloads still sit in a data center you want to leave. Every plan stalls on dependencies nobody has mapped.',
  },
  {
    quote: 'Our cloud grew faster than our controls.',
    body: 'Subscriptions created by hand, inconsistent networking, access nobody has reviewed. The next audit will find it before you do.',
  },
]

const SERVICES = [
  {
    title: 'Azure landing zones',
    body: 'A secure foundation for every workload. Subscriptions, networking, identity and policy defined as code, so new teams start compliant.',
    gets: [
      'Landing zone built in Terraform or Bicep',
      'Policy guardrails and role-based access',
      'Network and identity design, documented',
    ],
  },
  {
    title: 'Migration and re-platforming',
    body: 'Workloads moved in planned waves, with dependencies mapped first. Cutover planned for minimal disruption, with tested rollback at every step.',
    gets: [
      'Dependency map and wave plan',
      'A runbook for each workload',
      'Tested rollback for every cutover',
    ],
  },
  {
    title: 'FinOps and cost control',
    body: 'Tagging, budgets and rightsizing, so every dollar of spend has an owner and a reason.',
    gets: [
      'Cost reported by team and product',
      'Rightsizing and reservation recommendations',
      'Budgets and alerts that flag overspend early',
    ],
  },
  {
    title: 'Resilience and recovery',
    body: 'Availability zones, backup and disaster recovery designed to the recovery targets you set, then tested.',
    gets: [
      'Recovery targets agreed for each system',
      'Backup and failover design',
      'A recovery test run with your team',
    ],
  },
]

const SCENARIOS = [
  {
    tag: 'Financial services',
    problem: 'Regulators want to see the controls, not hear about them.',
    approach: 'An Azure landing zone with policy-as-code guardrails and evidence collection built in.',
    points: [
      'Controls mapped to ISO 27001 and SOC 2 criteria',
      'Policy-as-code guardrails',
      'Evidence collected as the platform runs',
    ],
  },
  {
    tag: 'Legal & professional services',
    problem: 'Client data has to stay where you promised it would.',
    approach: 'Region-pinned storage, private networking and access scoped by team and client.',
    points: [
      'Data residency enforced by policy',
      'Private endpoints for sensitive services',
      'Access reviews and audit logging',
    ],
  },
  {
    tag: 'Software & SaaS',
    problem: 'The platform has to scale before the next large customer signs.',
    approach: 'An autoscaling Azure platform with zone-redundant design and cost reported per tenant.',
    points: [
      'Scaling tied to demand',
      'Load testing before major launches',
      'Cost visibility per tenant',
    ],
  },
]

const STEPS = [
  { n: '01', title: 'Discover', body: 'We review your workloads, dependencies, spend and current controls, and agree what matters most.' },
  { n: '02', title: 'Design', body: 'A target platform on Azure, sized to your compliance, performance and cost needs.' },
  { n: '03', title: 'Migrate', body: 'Phased migration in planned waves. Cutover planned for minimal disruption, with tested rollback at every step.' },
  { n: '04', title: 'Run', body: 'We operate and tune it, or hand over to your team with a run guide.' },
]

const CORE_STACK = [
  'Microsoft Azure',
  'Azure landing zones',
  'Terraform',
  'Bicep',
  'Azure Kubernetes Service',
  'Azure Monitor',
  'Microsoft Cost Management',
  'Azure Site Recovery',
]

const ALSO_STACK = ['AWS', 'Google Cloud', 'VMware', 'Pulumi']

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

const CloudInfrastructure = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Cloud & Infrastructure"
        title="Cut cloud cost and risk — on a platform your own engineers can run."
        lede="Azure landing zones, migration, FinOps and resilience, designed and delivered by the team that will support it."
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
        title="A cloud platform with an owner for every part."
        lede="Microsoft Azure is our specialism. Each piece below can stand alone, or we deliver the platform as a whole."
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
      <PageSection tone="white" eyebrow="Where we apply it" title="Typical problems, and what the platform is built to do.">
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
      <PageSection tone="light" eyebrow="How it runs" title="From first review to a platform you can run.">
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
        lede="Microsoft Azure is our specialism. If your estate already runs on AWS or Google Cloud, we work there too."
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
        title="Not sure what your cloud costs, or what it would survive?"
        body="Describe your estate in a few lines. We will tell you plainly where the cost and risk sit, and what to fix first."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default CloudInfrastructure
