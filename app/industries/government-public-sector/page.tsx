"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'



const atAGlance = [
  {
    value: "Residency",
    label: "Data stays where policy says",
    sub: "Region-pinned storage, processing and backup paths."
  },
  {
    value: "Accessibility",
    label: "Built to WCAG 2.2 AA",
    sub: "Keyboard, contrast and assistive-tech paths designed in, not retrofitted."
  },
  {
    value: "Auditability",
    label: "Every action traceable",
    sub: "Immutable logs, retention windows and exportable evidence."
  },
  {
    value: "Handover",
    label: "Operable in-house",
    sub: "Open standards, documented runbooks, no single-vendor lock."
  }
]

const pressures = [
  {
    title: "Residency and sovereignty are architectural, not a setting",
    description: "Where citizen data lives, where it is processed, and where backups and logs land are policy decisions that reach into region selection, managed-service choice and every third-party dependency. Retrofitting residency after a platform is running is usually a rebuild.",
    points: [
      "Region and availability-zone constraints on every data path",
      "Third-party and SaaS processors inside the boundary",
      "Backup, replica and log destinations often overlooked"
    ],
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "Accessibility is a legal floor, not a polish pass",
    description: "Citizen-facing services must work for people using screen readers, keyboard-only navigation, magnification and low-bandwidth connections. Accessibility defects found at the end of a build are expensive; found in a public service, they exclude people.",
    points: [
      "WCAG 2.2 AA as an acceptance criterion, not a later audit",
      "Assistive-technology paths tested as part of delivery",
      "Plain-language content and error recovery"
    ],
    iconPath: "M12 2a10 10 0 100 20 10 10 0 000-20zM8 12h8M12 8v8"
  },
  {
    title: "Procurement demands evidence before it demands code",
    description: "Public tenders ask suppliers to document architecture, security posture, data handling, exit plans and total cost before anything is built. Teams that treat documentation as a downstream chore find the evidence trail does not match the running system.",
    points: [
      "Architecture and control documentation that matches reality",
      "Exit and transition plans stated up front",
      "Cost models that survive multi-year budget scrutiny"
    ],
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Someone else has to run it in five years",
    description: "Departmental teams inherit systems from whoever built them, often after the delivery partner has moved on. Platforms that depend on proprietary glue, undocumented deployment steps or a single person's knowledge become the next modernisation programme.",
    points: [
      "Open standards and portable formats over proprietary glue",
      "Infrastructure as code so environments are reproducible",
      "Runbooks and knowledge transfer treated as deliverables"
    ],
    iconPath: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  }
]

const whatWeBuild = [
  {
    title: "Infrastructure departments can operate",
    description: "Cloud and on-premise environments defined as code, pinned to the regions your policy allows, with reproducible builds and documented operational procedures.",
    capabilities: [
      "Region-constrained landing zones",
      "Terraform-managed environments",
      "Disaster recovery and failover design",
      "Runbooks written for in-house teams"
    ],
    href: "/solutions/cloud",
    linkLabel: "Cloud infrastructure",
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Release processes that produce an audit trail",
    description: "Pipelines where every change to a citizen-facing service is reviewed, tested, attributable and reversible — and where the record of that is a by-product of the process rather than a manual log.",
    capabilities: [
      "Change approval encoded in the pipeline",
      "Automated accessibility and regression checks",
      "Signed artefacts and deployment provenance",
      "Rollback paths tested, not assumed"
    ],
    href: "/solutions/devops",
    linkLabel: "DevOps & automation",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Identity, access and security controls",
    description: "Access models built around least privilege and separation of duties, with logging and monitoring designed so that questions about who did what are answerable months later.",
    capabilities: [
      "Role and attribute-based access design",
      "Immutable audit logging with retention rules",
      "Encryption in transit and at rest",
      "Control mapping for assessor review"
    ],
    href: "/solutions/security",
    linkLabel: "Security engineering",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    title: "Data platforms with retention and lineage built in",
    description: "Data architecture where records retention, lineage and lawful-basis constraints are enforced by the platform, and where reporting does not require copying citizen data into ungoverned spreadsheets.",
    capabilities: [
      "Retention and disposal policy in the schema",
      "Lineage from source to published figure",
      "Access-governed reporting layers",
      "Anonymisation and minimisation patterns"
    ],
    href: "/solutions/data",
    linkLabel: "Data engineering",
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  }
]

const governance = [
  {
    title: "Data residency and sovereignty",
    description: "India's Digital Personal Data Protection Act 2023 and sector-specific directions constrain where personal data may be stored and processed, and who may act as a processor. We design region selection, dependency choice and data flows against those constraints and document the result."
  },
  {
    title: "Accessibility standards",
    description: "WCAG 2.2 Level AA is the reference standard for citizen-facing services, alongside national guidance such as the Guidelines for Indian Government Websites. We treat conformance as a build-time acceptance criterion and produce the testing evidence that reviewers ask for."
  },
  {
    title: "Security baselines and incident reporting",
    description: "CERT-In directions set expectations for log retention and incident reporting timelines, and ISO/IEC 27001 is the common reference for information security management. We design controls and logging so your organisation can evidence them — YatiSphere is not itself a certification body or certificate holder."
  },
  {
    title: "Procurement, auditability and open standards",
    description: "Public procurement expects documented architecture, stated exit plans and preference for open standards and portable data formats. We write that documentation alongside the system so the evidence pack reflects what actually runs."
  },
  {
    title: "Records retention and disposal",
    description: "Public records obligations set how long records must be kept and when they must be disposed of. We encode retention windows, legal holds and disposal workflows in the platform rather than leaving them to operational discipline."
  },
  {
    title: "Responsible use of AI in public services",
    description: "Where AI touches a citizen decision, explainability, human review and contestability are not optional. We scope AI narrowly, keep a human in the loop on consequential decisions, and document how outputs are produced and reviewed."
  }
]

const GovernmentPublicSector = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Industries"
        image={{ src: '/brand/yatisphere/imagery/industry-government.png', alt: 'Government technology' }}
        title="Government and public sector."
        lede="Citizen-facing systems with data residency, accessibility and audit trails — built on infrastructure departments can operate themselves after we hand it over."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {atAGlance.map((item) => (
            <motion.div
              key={item.value}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
                  fontWeight: 700,
                  color: 'var(--ys-ink)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '10px'
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '6px'
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: 'var(--ys-ink-muted)'
                }}
              >
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* The pressures */}
      <PageSection
        tone="light"
        eyebrow="The pressures"
        title="What makes public-sector delivery different."
        lede="These are the structural constraints that shape the architecture before a single feature is discussed."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {pressures.map((pressure) => (
            <motion.div
              key={pressure.title}
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
                  <path d={pressure.iconPath} />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  marginBottom: '12px'
                }}
              >
                {pressure.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '24px'
                }}
              >
                {pressure.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--ys-border)' }}>
                {pressure.points.map((point) => (
                  <div
                    key={point}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M4 8l3.5 3.5L12 4" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* What we build */}
      <PageSection
        tone="white"
        eyebrow="What we build"
        title="Our services, applied to public services."
        lede="The same engineering practice we bring to any enterprise platform, scoped to the constraints a department works under. Our team includes public-sector systems experience from national-scale citizen platforms."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {whatWeBuild.map((item) => (
            <motion.div
              key={item.title}
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
                  <path d={item.iconPath} />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  marginBottom: '12px'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '24px'
                }}
              >
                {item.description}
              </p>

              <div style={{ marginBottom: '24px', flex: 1 }}>
                {item.capabilities.map((cap) => (
                  <div
                    key={cap}
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
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{cap}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--ys-border)' }}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2"
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--ys-link-on-light)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.linkLabel}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          style={{
            marginTop: '28px',
            maxWidth: '46rem',
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--ys-ink-body)'
          }}
        >
          Where a programme needs shaping before it needs building, that starts with{' '}
          <a href="/solutions/consulting" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>architecture and advisory</a>.
          Where AI is in scope, we scope it against our{' '}
          <a href="/responsible-ai" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>responsible AI position</a>{' '}
          and our{' '}
          <a href="/applied-ai" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>applied AI practice</a>.
          The full service catalogue is on the{' '}
          <a href="/solutions" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>solutions page</a>.
        </motion.p>
      </PageSection>

      {/* Governance context */}
      <PageSection
        tone="light"
        eyebrow="Governance context"
        title="Standards your organisation is held to."
        lede="These are the frameworks public bodies answer to. We design controls against them and produce the evidence your assessors and auditors ask for — the obligations remain your organisation's."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {governance.map((item) => (
            <motion.div
              key={item.title}
              className="ys-card-light"
              style={{ padding: '32px', minWidth: 0 }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  marginBottom: '12px'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)'
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* CTA — Deep Blue */}
      <PageCTA
        title="Bring us the constraint, not just the requirement."
        body="Residency, accessibility, retention, handover — tell us what your programme is held to and we will tell you how we would architect against it."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default GovernmentPublicSector
