"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { PRIMARY_CTA } from '@/lib/cta'



const atAGlance = [
  { value: "Consent", label: "Captured as state", sub: "What was agreed, by whom, and when it changed" },
  { value: "Least privilege", label: "Access to PHI", sub: "Role and purpose checked at the point of read" },
  { value: "Retention", label: "Schedules enforced", sub: "Lifecycle rules applied by the platform itself" },
  { value: "Audit trail", label: "Every access recorded", sub: "Reads logged, not only writes" }
]

const pressures = [
  {
    title: "Clinical data spread across systems that were never designed to share",
    description: "Electronic records, imaging, laboratory and scheduling systems each hold part of the patient picture. Interoperability standards exist, but adoption is uneven and much of the estate still exchanges data through flat files.",
    points: [
      "Partial HL7 and FHIR coverage across the estate",
      "Patient identity resolved differently in each system",
      "Point-to-point interfaces that resist change"
    ]
  },
  {
    title: "Consent that has to be honoured, not just recorded",
    description: "Consent is not a checkbox at registration. It is scoped, it is withdrawable, and it has to be enforced at every point where data is read or shared — including in downstream analytics that nobody had in mind at the time.",
    points: [
      "Consent scope not represented in the data model",
      "Withdrawal that does not propagate downstream",
      "Secondary use decided outside the consent record"
    ]
  },
  {
    title: "Access control at clinical speed",
    description: "Clinicians need the record in front of them without friction, and the same record must not be broadly readable across the organisation. Reconciling urgency with least privilege is an architectural problem, not a training problem.",
    points: [
      "Broad role grants used as a workaround",
      "Break-glass access without a review path",
      "Purpose of access not captured alongside identity"
    ]
  },
  {
    title: "Retention and disposal over long horizons",
    description: "Health records carry retention periods measured in years or decades, varying by record type and jurisdiction. Systems that never delete accumulate risk; systems that delete by ad hoc script accumulate a different one.",
    points: [
      "Retention periods differing by record class",
      "Archived data outside the access-control model",
      "Disposal that cannot be evidenced afterwards"
    ]
  }
]

const whatWeBuild: Array<{
  title: string
  description: string
  capabilities: string[]
  icon: YsIconName
  href: string
  hrefLabel: string
}> = [
  {
    title: "Patient platforms and clinical integration",
    description: "Patient-facing services and the integration layer beneath them — identity, appointments, records access — built against interoperability standards rather than bespoke file exchanges.",
    capabilities: [
      "HL7 and FHIR-based interface design",
      "Patient identity and record matching",
      "API layers in front of existing clinical systems",
      "Consent scope carried through every interface"
    ],
    icon: 'people',
    href: '/solutions',
    hrefLabel: 'IT services'
  },
  {
    title: "Security architecture for PHI",
    description: "Access models, encryption and logging designed around protected health information, so least-privilege access and full auditability are properties of the platform rather than operational discipline.",
    capabilities: [
      "Role and purpose-based access to PHI",
      "Encryption in transit and at rest",
      "Read-level audit logging, not only writes",
      "Break-glass access with mandatory review"
    ],
    icon: 'security',
    href: '/solutions/security',
    hrefLabel: 'Security engineering'
  },
  {
    title: "Clinical data platforms",
    description: "Data platforms where consent scope, retention class and access rules travel with the record — so analytics and reporting inherit the same constraints as the source system.",
    capabilities: [
      "Consent and retention modelled as first-class data",
      "De-identification pipelines for secondary use",
      "Lineage from reported figure back to source",
      "Retention schedules enforced by the platform"
    ],
    icon: 'analytics',
    href: '/solutions/data',
    hrefLabel: 'Data engineering'
  },
  {
    title: "Applied AI under clinical governance",
    description: "Triage support, document extraction and operational forecasting, scoped so a clinician remains the decision-maker and so every model input and output is attributable and reviewable.",
    capabilities: [
      "Clinician-in-the-loop by design",
      "Data minimisation before any model sees a record",
      "Model documentation, versioning and monitoring",
      "Clear separation from clinical decision-making"
    ],
    icon: 'ai-ml',
    href: '/responsible-ai',
    hrefLabel: 'Responsible AI'
  }
]

const governance = [
  {
    title: "HIPAA safeguards",
    description: "HIPAA sets administrative, physical and technical safeguards for protected health information. We architect and document those technical controls — access, audit, integrity, transmission security — so your organisation can evidence them; the compliance posture remains yours.",
    icon: 'security' as YsIconName
  },
  {
    title: "Consent management",
    description: "Consent has scope, duration and a withdrawal path. We model it as enforceable state that every read and every downstream pipeline checks, rather than as a flag captured once at registration.",
    icon: 'partnership' as YsIconName
  },
  {
    title: "Retention schedules",
    description: "Record-retention obligations vary by record type and jurisdiction. We encode those schedules into storage and archival design so retention and disposal are executed and evidenced by the platform.",
    icon: 'support' as YsIconName
  },
  {
    title: "Least-privilege access to PHI",
    description: "Access should be granted by role and by purpose, scoped to the care relationship, and reviewed. We design the authorisation model and the review mechanics that make that workable at clinical speed.",
    icon: 'consulting' as YsIconName
  },
  {
    title: "Auditability of every access",
    description: "In health data, reading a record is itself an event worth recording. We build audit logging that captures reads as well as writes, retains them appropriately, and makes them queryable when a question is asked.",
    icon: 'analytics' as YsIconName
  }
]

const Healthcare = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Industries"
        image={{ src: '/brand/yatisphere/imagery/industry-healthcare.png', alt: 'Healthcare technology' }}
        title="Healthcare platforms where the rules are in the architecture."
        lede="Patient platforms and clinical data systems where consent, retention and access rules are built into the design — not layered on afterwards as policy and hope."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
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
              key={item.label}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.8rem)',
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
                  color: 'var(--ys-ink-muted)',
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
        title="What healthcare systems have to reconcile."
        lede="These tensions are structural to health technology. An honest architecture starts by naming them rather than designing around the easy case."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2"
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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }} aria-hidden="true">
                      <circle cx="8" cy="8" r="3" fill="var(--ys-link-on-light)" />
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
        title="Our services, applied to healthcare."
        lede="The same engineering practice we bring to any regulated enterprise, shaped by the sensitivity of the data involved."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: '24px' }}
        >
          {whatWeBuild.map((service) => (
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
                <YsIcon name={service.icon} size={26} />
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
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

              <div style={{ marginBottom: '24px', flex: 1 }}>
                {service.capabilities.map((cap) => (
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
                  href={service.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--ys-link-on-light)',
                    textDecoration: 'none'
                  }}
                >
                  {service.hrefLabel} →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Governance context */}
      <PageSection
        tone="light"
        eyebrow="Governance context"
        title="Standards your organisation is held to."
        lede="We do not hold these certifications on your behalf. Our work is to design controls against these standards and produce the evidence your organisation needs to demonstrate them."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {governance.map((item) => (
            <motion.div
              key={item.title}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div style={{ marginBottom: '18px' }}>
                <YsIcon name={item.icon} size={24} />
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  marginBottom: '10px'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
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
        title="Talk through a healthcare build."
        body="Bring us the constraint — a consent model that has to hold across systems, an access review you cannot answer, an integration that will not scale. We will tell you how we would design it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default Healthcare
