"use client"

import { motion, type Variants } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const atAGlance = [
  {
    value: "Multi-tenant",
    label: "Isolation by design",
    sub: "Tenant boundaries enforced in the data model, not the application layer."
  },
  {
    value: "Readiness",
    label: "Audit-ready control design",
    sub: "Controls and evidence shaped for SOC 2 and ISO 27001 assessment."
  },
  {
    value: "Release",
    label: "Governed deployment",
    sub: "Reviewed, attributable, reversible changes through the pipeline."
  },
  {
    value: "Supply chain",
    label: "Dependency hygiene",
    sub: "Pinned builds, provenance and continuous vulnerability scanning."
  }
]

const pressures = [
  {
    title: "The platform outgrew the decisions it was built on",
    description: "A design that carried the first few years — a shared schema, a single deployable, a synchronous integration — becomes the thing limiting release speed and onboarding. The pressure is real, but wholesale rewrites rarely survive contact with a roadmap.",
    points: [
      "Coupling that makes every change a full regression",
      "Scaling limits reached in one component, paid for across all",
      "Rewrite appetite that exceeds the delivery window"
    ],
    iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
  },
  {
    title: "Your customers' security reviews are now your roadmap",
    description: "Enterprise buyers send due-diligence questionnaires, ask for penetration test summaries, and want to know how tenants are isolated. Answering those honestly requires architecture that was designed to be answerable, and evidence that is generated rather than assembled.",
    points: [
      "Due-diligence questionnaires blocking deal cycles",
      "Tenant isolation claims that must hold under scrutiny",
      "Evidence gathered by hand ahead of every review"
    ],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "AI was added to the product before it was designed into it",
    description: "A model call bolted onto an existing feature raises questions the original architecture never answered: whose data reaches the provider, what happens when the output is wrong, how the behaviour is evaluated, and what a customer is told about it.",
    points: [
      "Customer data crossing into third-party model providers",
      "No evaluation harness, so regressions go unnoticed",
      "Unclear human review on consequential outputs"
    ],
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "The dependency tree is larger than the codebase",
    description: "Most of what ships is code someone else wrote. Without pinned builds, provenance and a routine for acting on advisories, supply-chain risk accumulates quietly until a disclosure forces an unplanned release.",
    points: [
      "Transitive dependencies nobody chose explicitly",
      "Builds that are not reproducible from source",
      "Advisories triaged reactively, under time pressure"
    ],
    iconPath: "M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zm0 0v9m0 0l8-4.5M12 11L4 6.5"
  }
]

const whatWeBuild = [
  {
    title: "Incremental platform modernisation",
    description: "Decomposition planned around the seams that actually constrain you, sequenced so the product keeps shipping. We architect the target state and the route to it, rather than proposing a rewrite.",
    capabilities: [
      "Seam analysis and decomposition sequencing",
      "Strangler-pattern migration paths",
      "API and contract design between services",
      "Target-state architecture with staged milestones"
    ],
    href: "/solutions/consulting",
    linkLabel: "Architecture & advisory",
    iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
  },
  {
    title: "Cloud platform and tenancy architecture",
    description: "Environments defined as code, with tenant isolation modelled deliberately — shared, siloed or pooled per tier — and the cost and blast-radius consequences of that choice made explicit.",
    capabilities: [
      "Tenancy model selection and data partitioning",
      "Infrastructure as code across environments",
      "Multi-region and failover design",
      "Cost attribution per tenant and per service"
    ],
    href: "/solutions/cloud",
    linkLabel: "Cloud infrastructure",
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Release governance and supply-chain hygiene",
    description: "Pipelines where review, testing, provenance and rollback are properties of the process. The artefacts a security reviewer asks for — SBOMs, scan results, change records — fall out of the pipeline instead of being assembled later.",
    capabilities: [
      "CI/CD with enforced review and test gates",
      "SBOM generation and artefact signing",
      "Dependency and container scanning in-pipeline",
      "Progressive delivery with tested rollback"
    ],
    href: "/solutions/devops",
    linkLabel: "DevOps & automation",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "AI features designed as product surface",
    description: "Applied AI scoped to a defined job, with the data boundary stated, an evaluation harness in place before launch, and human review where an output carries consequence.",
    capabilities: [
      "Data boundary and provider exposure defined",
      "Evaluation sets and regression tracking",
      "Retrieval and grounding over model fine-tuning first",
      "Human-in-the-loop on consequential outputs"
    ],
    href: "/solutions/ai-ml",
    linkLabel: "Applied AI & ML",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
]

const governance = [
  {
    title: "Multi-tenancy and data isolation",
    description: "How tenant data is partitioned, how a query is scoped, and what prevents cross-tenant access are the first questions an enterprise reviewer asks. We design isolation at the data layer and make the enforcement point explicit and testable rather than conventional."
  },
  {
    title: "SOC 2 and ISO/IEC 27001 readiness",
    description: "Both are assessed against your organisation by an independent auditor or certification body. What we provide is readiness support: control design, logging and evidence generation mapped to the Trust Services Criteria or Annex A, so the assessment finds a system that matches its documentation. YatiSphere does not hold or issue these certifications."
  },
  {
    title: "Customer security reviews and due diligence",
    description: "Standard questionnaires such as CAIQ and SIG, plus bespoke enterprise reviews, ask about architecture, access control, encryption, subprocessors and incident handling. We help you build the architecture and the evidence set that make those answers straightforward and accurate."
  },
  {
    title: "Privacy and data protection obligations",
    description: "GDPR, India's Digital Personal Data Protection Act 2023 and equivalent regimes drive residency, retention, subject-rights and subprocessor commitments. We design data flows and deletion paths so those commitments are enforceable in the platform, not only in the contract."
  },
  {
    title: "Release governance and change control",
    description: "Change management is a control in its own right under most frameworks. We encode approval, segregation of duties, testing and rollback in the pipeline so the change record is generated by the process rather than reconstructed for an auditor."
  },
  {
    title: "Dependency and supply-chain assurance",
    description: "Frameworks and customer questionnaires increasingly ask for software bill-of-materials, provenance and a documented vulnerability response. We build SBOM generation, artefact signing and advisory triage into the delivery pipeline as routine practice."
  }
]

const EnterpriseTechnology = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Industries"
        title="Enterprise and technology."
        lede="Product companies and enterprises modernising platforms, moving to cloud, or adding AI to an existing product — without pausing the roadmap to do it."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {atAGlance.map((item) => (
            <motion.div
              key={item.value}
              variants={fadeUp}
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
        title="What tends to be true at this stage."
        lede="The constraints product and platform teams bring to us, stated plainly."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {pressures.map((pressure) => (
            <motion.div
              key={pressure.title}
              variants={fadeUp}
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
        title="Our services, applied to your platform."
        lede="Enterprise IT engineering as the core of the work, with applied AI scoped deliberately where it earns its place."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {whatWeBuild.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
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
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            marginTop: '28px',
            maxWidth: '46rem',
            fontSize: '15px',
            lineHeight: 1.65,
            color: 'var(--ys-ink-body)'
          }}
        >
          Alongside these, we work on{' '}
          <a href="/solutions/data" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>data platforms</a>{' '}
          that feed product analytics and AI features, and on{' '}
          <a href="/solutions/security" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>security engineering</a>{' '}
          for the controls your customers review. Where AI is in scope, our{' '}
          <a href="/responsible-ai" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>responsible AI position</a>{' '}
          sets the boundaries we work within. The full catalogue is on the{' '}
          <a href="/solutions" style={{ color: 'var(--ys-link-on-light)', fontWeight: 600 }}>solutions page</a>.
        </motion.p>
      </PageSection>

      {/* Governance context */}
      <PageSection
        tone="light"
        eyebrow="Governance context"
        title="Standards your organisation is held to."
        lede="These are the frameworks your buyers, auditors and regulators hold you to. We design controls against them and generate the evidence — the certifications and obligations remain your organisation's."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {governance.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
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
        title="Modernise without pausing the roadmap."
        body="Tell us where the platform is constraining you — tenancy, release speed, security review or an AI feature that needs designing properly — and we will walk through how we would approach it."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default EnterpriseTechnology
