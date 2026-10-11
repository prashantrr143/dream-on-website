"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'Every new product idea waits on the platform.',
    body: 'The core system can’t take the change, so each launch ships with another workaround bolted on.',
  },
  {
    quote: 'Our systems don’t talk to each other.',
    body: 'Data moves by export, email and re-keying. Every integration is a one-off that only one person understands.',
  },
  {
    quote: 'Our Java and .NET apps are stuck on old versions.',
    body: 'Frameworks out of support, builds nobody can reproduce, and security findings piling up.',
  },
]

const SERVICES = [
  {
    title: 'APIs and integration',
    body: 'Well-defined APIs and event-driven integration between the systems you already run, with contracts, versioning and monitoring.',
    gets: [
      'API design and documentation',
      'Integration through Azure API Management and Service Bus',
      'Monitoring on every interface',
    ],
  },
  {
    title: 'Core platform builds',
    body: 'New business platforms built for regulated work: secure by default, tested, and ready to run from the first release.',
    gets: [
      'Architecture and code you own',
      'Automated tests and CI/CD from the first sprint',
      'Audit logging built in',
    ],
  },
  {
    title: 'Java and .NET modernization',
    body: 'Frameworks, runtimes and hosting upgraded in steps, so the application keeps running while it moves forward.',
    gets: [
      'An upgrade path to supported versions',
      'Hosting on Azure App Service or containers',
      'Security findings cleared as part of the work',
    ],
  },
  {
    title: 'Microservices, where they earn their place',
    body: 'Service boundaries drawn along your business domains, and only where independent change is worth the extra moving parts.',
    gets: [
      'A domain map and service boundaries',
      'Shared pipelines and observability',
      'A clear call on what stays in one application',
    ],
  },
]

const CORE_STACK = [
  '.NET',
  'C#',
  'Java',
  'Spring Boot',
  'Azure App Service',
  'Azure Kubernetes Service',
  'Azure API Management',
  'Azure Service Bus',
  'Azure Functions',
]

const ALSO_STACK = ['AWS', 'Google Cloud', 'Node.js', 'TypeScript', 'Python', 'Apache Kafka']

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

const SoftwareEngineering = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Software & Platform Engineering"
        title="A platform that takes the next product, not the next workaround."
        lede="APIs, integration, core platform builds and Java or .NET modernization on Microsoft Azure, built by the senior engineers who will support what they ship."
        visual="circuit"
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
        title="Software built to be changed, not worked around."
        lede="We design, build and modernize the systems your business runs on, on Azure by default, and stay to support them."
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

      {/* ── 4. Stack ── */}
      <PageSection
        tone="white"
        eyebrow="Technology"
        title="Azure-first, by design."
        lede="Microsoft Azure is our specialism. If your applications already run on AWS or Google Cloud, we work there too."
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

      {/* ── 5. Closing call to action ── */}
      <PageCTA
        title="Is the platform the reason the roadmap keeps slipping?"
        body="Tell us what the system does and what you need it to do next. We will tell you whether to extend it, rebuild it or route around it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default SoftwareEngineering
