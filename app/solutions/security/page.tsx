"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'



/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "Zero-trust", label: "Architecture design", sub: "Verify every user and device" },
  { value: "24/7", label: "Monitoring", sub: "Continuous detection and alerting" },
  { value: "Audit-ready", label: "Compliance support", sub: "Controls mapped to frameworks" },
  { value: "Assess", label: "Risk reviews", sub: "Gap analysis and remediation plans" }
]

const securityServices = [
  {
    title: "Zero-Trust Architecture",
    description: "Access decided per request rather than per network location, with identity, device posture and policy evaluated at every hop.",
    features: [
      "Identity verification at every access point",
      "Micro-segmentation of network resources",
      "Policy-driven access controls",
      "Continuous monitoring and validation"
    ],
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "Identity & Access Management",
    description: "Centralised identity across your estate: who holds which entitlements, how they got them, and when they are taken away.",
    features: [
      "Single sign-on (SSO) integration",
      "Multi-factor authentication",
      "Privileged access management",
      "Identity lifecycle and joiner-mover-leaver"
    ],
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Threat Detection & Response",
    description: "Telemetry collection, detection engineering and response runbooks, so alerts arrive with the context needed to act on them.",
    features: [
      "Threat intelligence and detection tuning",
      "Behavioural anomaly detection",
      "Automated and assisted incident response",
      "Forensic analysis and post-incident review"
    ],
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  },
  {
    title: "Data Protection & Encryption",
    description: "Classifying what matters, encrypting it in transit and at rest, and controlling where it is allowed to travel.",
    features: [
      "End-to-end data encryption",
      "Data loss prevention (DLP)",
      "Secure key management",
      "Data classification and retention controls"
    ],
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    title: "Network & Endpoint Security",
    description: "Perimeter and endpoint controls that hold up when users, workloads and devices are no longer inside one network.",
    features: [
      "Next-generation firewalls",
      "Intrusion prevention systems",
      "Endpoint detection and response",
      "VPN, secure remote access and segmentation"
    ],
    iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
  },
  {
    title: "Compliance & Governance",
    description: "Mapping your controls to the frameworks you are held to, and producing the evidence trail auditors ask for.",
    features: [
      "Control mapping to SOC 2, HIPAA, PCI DSS",
      "Audit trails and evidence collection",
      "Risk assessment frameworks",
      "Regulatory reporting workflows"
    ],
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }
]

const complianceFrameworks = [
  { name: "SOC 2 Type II", description: "Security and availability controls" },
  { name: "ISO 27001", description: "Information security management" },
  { name: "HIPAA", description: "Healthcare data protection" },
  { name: "PCI DSS", description: "Payment card data security" },
  { name: "GDPR", description: "European data privacy regulation" },
  { name: "FedRAMP", description: "Federal cloud security standards" }
]

const threatTypes = [
  { name: "Ransomware", severity: "Critical", controls: "Immutable backup, isolation and recovery testing" },
  { name: "Data breach", severity: "Critical", controls: "Encryption, DLP and least-privilege access" },
  { name: "Phishing", severity: "High", controls: "Email filtering, DMARC and user awareness" },
  { name: "Malware", severity: "High", controls: "Endpoint detection and response" },
  { name: "DDoS", severity: "High", controls: "Edge protection and rate limiting" },
  { name: "Insider threat", severity: "Medium", controls: "Privileged access and behaviour monitoring" }
]

/* ── Component ────────────────────────────────────── */

const EnterpriseSecurity = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Enterprise Security"
        title="Security architecture that holds up under audit and attack."
        lede="Zero-trust design, identity, threat detection and data protection — built into your estate and evidenced against the frameworks you are held to."
        primaryCta={{ label: 'Get Security Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--ys-ink)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '10px'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '6px'
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--ys-ink-muted)' }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Security services */}
      <PageSection
        tone="light"
        eyebrow="What we deliver"
        title="Security services."
        lede="Six areas of work, designed to fit the estate you already run rather than replace it wholesale."
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {securityServices.map((service) => (
            <motion.div
              key={service.title}
              className="ys-card-light"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--ys-surface-alt)',
                  border: '1px solid var(--ys-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  flexShrink: 0
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={service.iconPath} />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px'
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '24px'
                }}
              >
                {service.description}
              </p>

              <div style={{ marginTop: 'auto' }}>
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Threat protection */}
      <PageSection
        tone="white"
        eyebrow="Threat protection"
        title="Threats, and the controls we put against them."
        lede="How we design defences for the attack patterns that most often reach enterprise estates."
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {threatTypes.map((threat) => (
            <motion.div
              key={threat.name}
              className="ys-card-light"
              style={{ padding: '24px', minWidth: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {threat.name}
                </h3>
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
                    whiteSpace: 'nowrap'
                  }}
                >
                  {threat.severity}
                </span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>
                {threat.controls}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Compliance frameworks */}
      <PageSection
        tone="light"
        eyebrow="Compliance frameworks"
        title="Standards we help you align to."
        lede="We help your organisation design and evidence controls against these standards and regulations. We do not certify or audit — we prepare you for the people who do."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {complianceFrameworks.map((framework) => (
            <motion.div
              key={framework.name}
              className="ys-card-light"
              style={{ padding: '24px', minWidth: 0 }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '6px' }}>
                {framework.name}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>
                {framework.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* CTA — Deep Blue */}
      <PageCTA
        title="Secure your business today"
        body="Start with a security assessment: where the gaps are, which ones matter most, and what it takes to close them."
        primaryCta={{ label: 'Schedule Security Consultation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />
    </SharedLayout>
  )
}

export default EnterpriseSecurity
