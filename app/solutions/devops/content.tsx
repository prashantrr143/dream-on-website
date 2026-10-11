"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'Releases are manual and everyone dreads them.',
    body: 'Deployments depend on one person’s checklist. When something breaks, rolling back takes longer than shipping did.',
  },
  {
    quote: 'Our environments never match.',
    body: 'Test passes, production fails. Nobody can rebuild an environment from scratch, so nobody dares change one.',
  },
  {
    quote: 'Security reviews hold up every release.',
    body: 'Scans run at the end, findings arrive late and the release waits. Evidence for auditors is pulled together by hand.',
  },
]

const SERVICES = [
  {
    title: 'CI/CD pipelines',
    body: 'Build, test and release pipelines with a quality gate at each promotion and a defined rollback path.',
    gets: [
      'Pipelines in Azure DevOps or GitHub Actions',
      'Quality gates before every promotion',
      'Automated rollback on failed health checks',
    ],
  },
  {
    title: 'Infrastructure as code',
    body: 'Environments defined in version control, so provisioning is reviewable, repeatable and recoverable.',
    gets: [
      'Terraform or Bicep modules for each environment',
      'Infrastructure changes reviewed like application code',
      'Environments you can rebuild on demand',
    ],
  },
  {
    title: 'Container platforms and observability',
    body: 'Azure Kubernetes Service platforms with scaling policies and progressive delivery, plus the metrics, logs and traces to see what is happening.',
    gets: [
      'AKS clusters with scaling policies',
      'Blue-green and canary releases',
      'Alerts routed to a named owner',
    ],
  },
  {
    title: 'Security in the pipeline',
    body: 'Scanning, policy checks and secrets handling run inside the pipeline, not as a separate review at the end.',
    gets: [
      'Code, dependency and container scanning in CI',
      'Secrets held in Azure Key Vault',
      'Pipeline evidence ready for audit',
    ],
  },
]

const SCENARIOS = [
  {
    tag: 'Software & SaaS',
    problem: 'Manual deployments keep causing outages.',
    approach: 'Automated CI/CD with blue-green deployments and defined rollback paths.',
    points: [
      'Blue-green and canary release patterns',
      'Automated rollback on failed health checks',
      'Quality gates before every promotion',
    ],
  },
  {
    tag: 'Financial services',
    problem: 'Every release needs security sign-off.',
    approach: 'Security scanning and policy checks built into the pipeline across every environment.',
    points: [
      'Static, dynamic and dependency scanning in CI',
      'Secrets management and rotation',
      'Audit-ready pipeline evidence',
    ],
  },
  {
    tag: 'Legal & professional services',
    problem: 'A small team looks after too many systems to release by hand.',
    approach: 'Shared pipeline templates and infrastructure as code, so a small team can run many applications safely.',
    points: [
      'Reusable pipeline templates',
      'Environments rebuilt from code',
      'A change history for every release',
    ],
  },
]

const CORE_STACK = [
  'Azure DevOps',
  'GitHub Actions',
  'Terraform',
  'Bicep',
  'Azure Kubernetes Service',
  'Azure Container Registry',
  'Azure Key Vault',
  'Azure Monitor',
]

const ALSO_STACK = ['AWS', 'Google Cloud', 'Jenkins', 'GitLab CI', 'Pulumi', 'Helm', 'Prometheus', 'Grafana']

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

const DevOpsAutomation = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="DevOps & Platform Automation"
        title="Releases that are routine, not risky."
        lede="CI/CD, infrastructure as code and observability on Microsoft Azure, so every change reaches production through the same tested path."
        visual="lanes"
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
        title="One tested path from commit to production."
        lede="We build the pipeline, the platform under it and the controls around it, on Azure by default."
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
      <PageSection tone="white" eyebrow="Where we apply it" title="Typical problems, and the practices we put in place.">
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

      {/* ── 5. Stack ── */}
      <PageSection
        tone="light"
        eyebrow="Technology"
        title="Azure-first, by design."
        lede="Microsoft Azure is our specialism. If your pipelines already run on AWS, Google Cloud or another toolchain, we work there too."
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

      {/* ── 6. Closing call to action ── */}
      <PageCTA
        title="How long does a change take to reach production?"
        body="If the honest answer is “it depends,” tell us about your release process. We will show you where the time and the risk go."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default DevOpsAutomation
