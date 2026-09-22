"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { PRIMARY_CTA } from '@/lib/cta'



const atAGlance = [
  { value: "Conflicts", label: "Pre-engagement checks", sub: "Party and matter screening before work begins" },
  { value: "Matter data", label: "Practice integration", sub: "One view across intake, matters and billing" },
  { value: "Privilege", label: "Confidentiality boundaries", sub: "Access modelled around the duty of confidence" },
  { value: "Retention", label: "Lifecycle rules", sub: "Retention and disposal encoded, not remembered" }
]

const pressures = [
  {
    title: "Client intake that has to clear before it can start",
    description: "Engagement cannot begin until identity, source of funds where relevant, and conflict position are settled. Each of those checks has a different owner and a different system, so intake becomes a sequence of waits rather than a process.",
    points: [
      "Identity and engagement documents collected ad hoc",
      "Approval steps tracked in email rather than a system",
      "No shared view of which checks are outstanding"
    ]
  },
  {
    title: "Conflict checking across a growing client base",
    description: "A conflict search is only as good as the data behind it. Party names, corporate groups, former matters and lateral hires all have to be searchable, and the result has to be defensible if it is ever questioned.",
    points: [
      "Party names recorded inconsistently across matters",
      "Corporate relationships not modelled as relationships",
      "Search results that are hard to reconstruct later"
    ]
  },
  {
    title: "Matter and fee visibility arriving too late",
    description: "Time, disbursements and write-offs typically surface at billing. By then the economics of a matter are already set. The problem is that the data exists but is not assembled while the work is still in flight.",
    points: [
      "Time capture lagging behind the work itself",
      "Budget position visible only at month end",
      "Realisation analysed retrospectively, matter by matter"
    ]
  },
  {
    title: "Practice-management systems that do not join up",
    description: "Practice management, document management, finance and CRM are each competent on their own. The friction sits in the gaps: data re-keyed between them, and no single record anyone fully trusts.",
    points: [
      "Duplicate client records across systems",
      "Integrations built as one-off exports",
      "Reporting assembled by hand from several sources"
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
    title: "Intake and conflict-check workflows",
    description: "Structured intake that captures parties as data rather than free text, routes approvals explicitly, and records the basis on which an engagement was cleared to proceed.",
    capabilities: [
      "Party and related-entity data modelling",
      "Conflict search with a retained result record",
      "Approval routing with named accountability",
      "Engagement-letter and document capture"
    ],
    icon: 'consulting',
    href: '/solutions/consulting',
    hrefLabel: 'Technology consulting'
  },
  {
    title: "Practice-management integration",
    description: "Integration layers between practice management, document management, finance and CRM, so a client or matter is one record with one owner rather than four partial copies.",
    capabilities: [
      "API-led integration between practice systems",
      "Master client and matter record design",
      "Event-driven synchronisation, not nightly exports",
      "Migration paths off point-to-point interfaces"
    ],
    icon: 'automation',
    href: '/solutions',
    hrefLabel: 'IT services'
  },
  {
    title: "Matter and fee intelligence",
    description: "Reporting built on a model of the matter lifecycle, so budget position, time recorded and realisation are visible while the matter is running rather than after it closes.",
    capabilities: [
      "Matter lifecycle and time data modelling",
      "Budget-versus-actual views during the matter",
      "Realisation and write-off analysis",
      "Definitions versioned so reports stay comparable"
    ],
    icon: 'analytics',
    href: '/solutions/data',
    hrefLabel: 'Data engineering'
  },
  {
    title: "Applied AI with hard boundaries",
    description: "Document summarisation, clause extraction and search assistance, scoped so privileged material stays inside defined boundaries and a professional reviews anything that leaves the system.",
    capabilities: [
      "Explicit data boundaries for privileged content",
      "Retrieval scoped to permitted matters only",
      "Human review before any client-facing output",
      "Logged prompts and outputs for accountability"
    ],
    icon: 'ai-ml',
    href: '/responsible-ai',
    hrefLabel: 'Responsible AI'
  }
]

const governance = [
  {
    title: "Confidentiality and privilege",
    description: "The professional duty of confidence and legal professional privilege are obligations your firm carries. We translate them into access models, storage boundaries and logging, so the architecture reflects the duty rather than working against it.",
    icon: 'security' as YsIconName
  },
  {
    title: "Conflict-of-interest controls",
    description: "Conflict rules set by the relevant bar or professional body require checks that can be evidenced. We design the data structures and audit records that make a clearance decision reconstructible after the fact.",
    icon: 'partnership' as YsIconName
  },
  {
    title: "Data retention and disposal",
    description: "Matter files carry retention periods driven by regulation, limitation and engagement terms. We encode those schedules into the platform so retention and disposal are enforced rather than left to memory.",
    icon: 'support' as YsIconName
  },
  {
    title: "GDPR and equivalent privacy regimes",
    description: "The GDPR and UK GDPR, and equivalents such as India's DPDP Act and the Gulf PDPLs, set expectations around lawful basis, data-subject rights and cross-border transfer. We build the consent, access and deletion mechanics your organisation needs in order to answer a request.",
    icon: 'global' as YsIconName
  },
  {
    title: "Boundaries on what AI may touch",
    description: "Whether a model may see privileged or client-confidential material is a policy decision, not a technical default. We implement that decision as enforced scope, retention settings and logging on every AI-assisted workflow.",
    icon: 'ai-ml' as YsIconName
  }
]

const LegalProfessionalServices = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Industries"
        title="Legal and professional services, engineered around confidentiality."
        lede="Client onboarding, conflict checks, matter and fee intelligence, and practice-management integration — built so the duty of confidence is a property of the architecture rather than a policy document beside it."
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
                  fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--ys-ink)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
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
        title="Where professional-services systems come under strain."
        lede="These constraints are structural to the sector. They shape what an engineering approach has to account for before any code is written."
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
        title="Our services, applied to legal and professional services."
        lede="Enterprise engineering practice, shaped by the confidentiality and conflict obligations a professional firm operates under."
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
        title="Obligations your firm is held to."
        lede="These are duties your firm carries. Our part is to design and document controls so the systems you run can evidence them."
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
        title="Talk through a practice-systems build."
        body="Whether it is intake that stalls, a conflict search you cannot fully defend, or four systems holding the same client — describe it and we will set out how we would approach it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default LegalProfessionalServices
