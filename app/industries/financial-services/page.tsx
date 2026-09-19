"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'



const atAGlance = [
  { value: "KYC", label: "Onboarding automation", sub: "Document capture, verification and case handling" },
  { value: "Post-trade", label: "Settlement systems", sub: "Reconciliation, breaks and exception workflow" },
  { value: "Audit trail", label: "Evidence by design", sub: "Immutable logs of who changed what, and when" },
  { value: "Zero-trust", label: "Access architecture", sub: "Least privilege across accounts, data and services" }
]

const pressures = [
  {
    title: "Regulatory reporting load",
    description: "Reporting obligations arrive on fixed cycles and in prescribed formats. When the numbers are assembled by hand from several systems, every submission is a reconciliation exercise and every correction is a manual re-run.",
    points: [
      "Data spread across core, risk and ledger systems",
      "Lineage that is hard to demonstrate to a reviewer",
      "Manual assembly that cannot be re-executed reliably"
    ]
  },
  {
    title: "Legacy core systems",
    description: "Core banking and policy administration platforms are long-lived by design. The pressure is not to replace them, but to build around them without destabilising the systems of record underneath.",
    points: [
      "Batch windows that constrain what can be real time",
      "Integration through file drops and point-to-point links",
      "Change cost that rises with every undocumented dependency"
    ]
  },
  {
    title: "Onboarding friction",
    description: "Customer and counterparty onboarding sits between commercial urgency and regulatory obligation. Verification steps, document collection and screening all have to happen, and each hand-off is where applications stall.",
    points: [
      "Document collection repeated across products",
      "Screening results that need human adjudication",
      "No single view of where a case is stuck"
    ]
  },
  {
    title: "Settlement and operational risk",
    description: "Post-trade processing is unforgiving: a break found late is more expensive than one found early. The operational question is how quickly an exception surfaces and how clearly it is routed to whoever can resolve it.",
    points: [
      "Reconciliation across custodians and counterparties",
      "Exception queues without clear ownership",
      "Limited visibility into cut-off and cut-over timing"
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
    title: "Core platform and integration engineering",
    description: "Service layers, APIs and event pipelines that let modern channels talk to long-lived core systems without rewriting them. The pattern is containment: stable interfaces in front, unchanged systems of record behind.",
    capabilities: [
      "API and integration layer design",
      "Event-driven processing for post-trade flows",
      "Batch-to-stream migration where it earns its place",
      "Decommissioning paths for point-to-point links"
    ],
    icon: 'consulting',
    href: '/solutions',
    hrefLabel: 'IT services'
  },
  {
    title: "Resilient cloud and platform operations",
    description: "Infrastructure defined as code, with environments that can be rebuilt rather than repaired, and delivery pipelines that make each change reviewable before it reaches a regulated workload.",
    capabilities: [
      "Multi-AZ and failover architecture",
      "Infrastructure as code and policy-as-code guardrails",
      "CI/CD with segregation of duties in the pipeline",
      "Data residency held in the deployment topology"
    ],
    icon: 'cloud',
    href: '/solutions/cloud',
    hrefLabel: 'Cloud infrastructure'
  },
  {
    title: "Regulatory data and reporting platforms",
    description: "Data models, ingestion and lineage designed so a reported figure can be traced back to its source records — and so a submission can be reproduced rather than reconstructed.",
    capabilities: [
      "Lineage captured as part of the pipeline",
      "Reconciliation and break detection",
      "Reporting datasets with versioned definitions",
      "Retention and archival aligned to obligation periods"
    ],
    icon: 'analytics',
    href: '/solutions/data',
    hrefLabel: 'Data engineering'
  },
  {
    title: "Applied AI inside controlled workflows",
    description: "Document extraction, screening triage and case summarisation placed where a human still decides. We treat any model touching credit, risk or eligibility as a governed asset, not a feature toggle.",
    capabilities: [
      "Document understanding for onboarding packs",
      "Triage and prioritisation with human adjudication",
      "Model documentation, versioning and monitoring",
      "Explicit boundaries on automated decisioning"
    ],
    icon: 'ai-ml',
    href: '/applied-ai',
    hrefLabel: 'AI and ML'
  }
]

const governance = [
  {
    title: "Regulatory reporting obligations",
    description: "Supervisory regimes such as those administered by the RBI and SEBI set out what must be reported, in what form and on what cycle. We design data platforms so those submissions can be produced from traceable sources and reproduced on request.",
    icon: 'analytics' as YsIconName
  },
  {
    title: "PCI DSS for cardholder data",
    description: "Where card data is in scope, PCI DSS defines the control expectations for storage, transmission and access. We architect segmentation, key handling and logging so your organisation can evidence those controls — the certification itself remains yours to hold.",
    icon: 'security' as YsIconName
  },
  {
    title: "Audit trail and data residency",
    description: "Regulated workloads need a defensible record of access and change, and a clear answer on where data physically sits. Both are architectural decisions, made at design time rather than retrofitted before an inspection.",
    icon: 'global' as YsIconName
  },
  {
    title: "Model governance for AI in decisioning",
    description: "Any model influencing credit, pricing or risk outcomes needs documented purpose, data provenance, validation, monitoring and a route to challenge a decision. We build those controls alongside the model, not after it.",
    icon: 'consulting' as YsIconName
  }
]

const FinancialServices = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Industries"
        image={{ src: '/brand/yatisphere/imagery/industry-financial-services.png', alt: 'Financial services technology' }}
        title="Financial services systems built for scrutiny."
        lede="Onboarding and KYC automation, post-trade and settlement systems, and compliance workflows — for banks, NBFCs, insurers and fintechs where the architecture has to answer to a regulator as well as a customer."
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
        title="What makes financial services engineering hard."
        lede="These are the structural constraints we design around. They are properties of the sector, not of any one organisation."
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
        title="Our services, applied to financial services."
        lede="The same engineering practice we bring to any enterprise, shaped by the controls this sector operates under."
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
        lede="We do not hold these certifications on your behalf. We design and document controls so that your organisation can evidence them against the regimes that apply to it."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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
        title="Talk through a financial services build."
        body="Bring us the constraint — a reporting deadline, a core system you cannot touch, an onboarding queue that stalls. We will tell you how we would architect around it."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default FinancialServices
