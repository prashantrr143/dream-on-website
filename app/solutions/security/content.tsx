"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'An audit or a client security review is coming.',
    body: 'The questionnaire is long, the evidence is scattered across teams, and the deadline is fixed.',
  },
  {
    quote: 'Nobody can say who has access to what.',
    body: 'Accounts outlive the people who held them. Admin rights were granted in a hurry and never taken back.',
  },
  {
    quote: 'We have security tools, but no security design.',
    body: 'Products were bought one incident at a time. Alerts fire, but nobody knows which ones matter.',
  },
]

const SERVICES = [
  {
    title: 'Identity and zero trust',
    body: 'Access decided per request, not per network location. One identity across your estate, with entitlements granted, reviewed and removed on purpose.',
    gets: [
      'Single sign-on and multi-factor authentication with Microsoft Entra ID',
      'Privileged access with approval and expiry',
      'Conditional access and a joiner-mover-leaver process',
    ],
  },
  {
    title: 'Threat detection and response design',
    body: 'Detection rules and response runbooks in Microsoft Sentinel, so alerts arrive with the context your team, or your managed security provider, needs to act.',
    gets: [
      'Detection rules tuned to your estate',
      'Response runbooks with named owners',
      'A post-incident review process',
    ],
  },
  {
    title: 'Data protection',
    body: 'Classify what matters, encrypt it in transit and at rest, and control where it is allowed to go.',
    gets: [
      'Classification and labeling with Microsoft Purview',
      'Data loss prevention policies',
      'Key management in Azure Key Vault',
    ],
  },
  {
    title: 'Compliance and audit evidence',
    body: 'Controls mapped to the frameworks you are held to, with the evidence auditors ask for collected as your systems run.',
    gets: [
      'Control mapping and gap analysis',
      'Evidence collected automatically where possible',
      'A remediation plan in priority order',
    ],
  },
]

const THREATS = [
  { name: 'Ransomware', severity: 'Critical', controls: 'Immutable backup, isolation and tested recovery' },
  { name: 'Data breach', severity: 'Critical', controls: 'Encryption, data loss prevention and least-privilege access' },
  { name: 'Phishing', severity: 'High', controls: 'Email filtering, DMARC and phishing-resistant sign-in' },
  { name: 'Insider threat', severity: 'Medium', controls: 'Privileged access controls and regular access reviews' },
]

const FRAMEWORKS = [
  { name: 'ISO/IEC 27001', description: 'Information security management' },
  { name: 'SOC 2', description: 'Trust services criteria for service organizations' },
  { name: 'GDPR', description: 'EU data protection, and the UK equivalent' },
  { name: 'DORA', description: 'EU digital operational resilience for financial entities' },
  { name: 'NIS2', description: 'EU cybersecurity rules for essential and important entities' },
  { name: 'UK Cyber Essentials', description: 'UK baseline technical controls' },
  { name: 'UAE IA / NESA standards', description: 'UAE information assurance standards' },
  { name: 'PCI DSS', description: 'Payment card data security' },
  { name: 'HIPAA', description: 'US healthcare data protection' },
  { name: 'ISO/IEC 42001', description: 'Management systems for AI' },
]

const CORE_STACK = [
  'Microsoft Entra ID',
  'Microsoft Defender for Cloud',
  'Microsoft Sentinel',
  'Microsoft Purview',
  'Azure Key Vault',
  'Azure Policy',
]

const ALSO_STACK = ['AWS security services', 'Google Cloud security services', 'Okta', 'HashiCorp Vault', 'Splunk']

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

const EnterpriseSecurity = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Security & Compliance"
        title="Controls you can prove, built into the systems you run."
        lede="Identity, zero trust, data protection and audit evidence on Microsoft Azure and Microsoft 365, designed against the frameworks you are held to."
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
        title="Security designed in, and evidenced."
        lede="Four areas of work, fitted to the estate you already run rather than replacing it wholesale. We design and build the controls; we don’t run a security operations center."
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

      {/* ── 4. Threats ── */}
      <PageSection
        tone="white"
        eyebrow="Threat protection"
        title="Threats, and the controls we design against them."
        lede="The attack patterns that most often reach regulated businesses, and where we start."
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '16px' }}>
          {THREATS.map((threat) => (
            <motion.div key={threat.name} className="ys-card-light" style={{ padding: '24px', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }}>{threat.name}</h3>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--ys-ink-muted)',
                    background: 'var(--ys-surface-alt)',
                    border: '1px solid var(--ys-border)',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {threat.severity}
                </span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>{threat.controls}</p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 5. Frameworks ── */}
      <PageSection
        tone="light"
        eyebrow="Compliance frameworks"
        title="Frameworks we design controls against."
        lede="We help you design and evidence controls against these standards and regulations. We don’t certify or audit, and listing a framework here is not a claim of certification. We prepare you for the auditors who do."
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '16px' }}>
          {FRAMEWORKS.map((framework) => (
            <motion.div key={framework.name} className="ys-card-light" style={{ padding: '24px', minWidth: 0 }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '6px' }}>{framework.name}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>{framework.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 6. Stack ── */}
      <PageSection
        tone="white"
        eyebrow="Technology"
        title="Azure-first, by design."
        lede="Microsoft Azure and the Microsoft security stack are our specialism. If your estate already runs on AWS or Google Cloud, we work there too."
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
        title="Is an audit or a security review on the calendar?"
        body="Tell us the framework and the deadline. We will tell you where the gaps are, which ones matter most, and what it takes to close them."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default EnterpriseSecurity
