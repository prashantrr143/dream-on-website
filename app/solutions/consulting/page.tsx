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

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "Assess", label: "Current state review", sub: "Architecture, process and risk audit" },
  { value: "Roadmap", label: "Prioritised plan", sub: "Sequenced initiatives and milestones" },
  { value: "Deliver", label: "Hands-on execution", sub: "We stay through implementation" },
  { value: "Adopt", label: "Change enablement", sub: "Training and adoption support" }
]

const services = [
  {
    title: "Architecture Review & Advisory",
    description: "An independent read on your current architecture: what is load-bearing, what is holding you back, and what it would take to change it.",
    activities: [
      "Current state assessment and gap analysis",
      "Application and integration landscape mapping",
      "Technology stack and vendor evaluation",
      "Target-state architecture definition (TOGAF-aligned)"
    ],
    deliverables: ["Assessment report", "Target architecture", "Option analysis"],
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    title: "Legacy Re-platforming",
    description: "Moving systems off ageing platforms without stopping the business — sequenced so each step is reversible and independently useful.",
    activities: [
      "Portfolio triage: retain, re-platform, rebuild, retire",
      "Monolith decomposition and interface design",
      "Data migration and cutover planning",
      "Coexistence patterns for phased transition"
    ],
    deliverables: ["Disposition plan", "Migration design", "Cutover runbook"],
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  },
  {
    title: "Modernisation Roadmaps",
    description: "A sequenced, costed plan tying modernisation work to business outcomes, so funding and delivery capacity line up with priorities.",
    activities: [
      "Initiative sequencing against dependencies",
      "Cost and effort modelling",
      "Business case development",
      "Delivery milestone and success measures"
    ],
    deliverables: ["Modernisation roadmap", "Business case", "Milestone plan"],
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "Process & Operating Model",
    description: "Reshaping how delivery actually runs — team boundaries, handoffs and automation — so the new architecture is supportable.",
    activities: [
      "Business process mapping and analysis",
      "Automation opportunity identification",
      "Team topology and ownership design",
      "Operational metrics and KPI development"
    ],
    deliverables: ["Process maps", "Operating model", "Automation strategy"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Technology Risk & Governance",
    description: "Surfacing the technical, security and compliance risk carried by the current estate, and the controls needed to hold it down during change.",
    activities: [
      "Security and compliance gap analysis",
      "Technical debt and obsolescence review",
      "Risk identification and prioritisation",
      "Governance and oversight framework"
    ],
    deliverables: ["Risk assessment", "Mitigation plan", "Governance model"],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Change Management",
    description: "Getting the people side of modernisation to land: who is affected, what changes for them, and how they are supported through it.",
    activities: [
      "Stakeholder analysis and engagement",
      "Communication strategy and execution",
      "Training programme development",
      "Adoption tracking and follow-through"
    ],
    deliverables: ["Change strategy", "Training materials", "Communication plan"],
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
  }
]

const phases = [
  {
    step: "01",
    title: "Assess",
    duration: "2 – 4 weeks",
    activities: ["Architecture and estate review", "Technology audit", "Process mapping", "Stakeholder interviews"],
    outcome: "Assessment report with prioritised findings"
  },
  {
    step: "02",
    title: "Define",
    duration: "3 – 6 weeks",
    activities: ["Target-state architecture", "Roadmap creation", "Business case modelling", "Risk assessment"],
    outcome: "Target architecture and sequenced modernisation roadmap"
  },
  {
    step: "03",
    title: "Plan",
    duration: "4 – 8 weeks",
    activities: ["Implementation planning", "Resource allocation", "Change management strategy", "Success measures"],
    outcome: "Implementation blueprint with milestones and dependencies"
  },
  {
    step: "04",
    title: "Execute",
    duration: "6 – 18 months",
    activities: ["Phased re-platforming", "Change management execution", "Training and enablement", "Continuous monitoring"],
    outcome: "Systems migrated in reversible steps, with adoption supported"
  },
  {
    step: "05",
    title: "Optimise",
    duration: "Ongoing",
    activities: ["Performance monitoring", "Continuous improvement", "Technical debt review", "Roadmap refinement"],
    outcome: "A roadmap that keeps pace with the business"
  }
]

const industries = [
  { name: "Financial Services", focus: "Risk & compliance", iconPath: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v4m4-4v4m4-4v4" },
  { name: "Healthcare", focus: "Data privacy", iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "Manufacturing", focus: "Operations & IoT", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Technology", focus: "Platform scale", iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { name: "E-commerce", focus: "Peak-load design", iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
  { name: "Government", focus: "Public-sector controls", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
]

/* ── Component ────────────────────────────────────── */

const ModernisationAdvisory = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Modernisation & Advisory"
        title="Modernise the estate you have, on a roadmap you can fund."
        lede="Architecture reviews, legacy re-platforming and modernisation roadmaps — plus the advisory and change work that makes transformation stick. TOGAF-aligned, and we stay through delivery."
        primaryCta={{ label: 'Start Your Transformation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* How an engagement runs */}
      <PageSection tone="white" eyebrow="How an engagement runs">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--ys-ink)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
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

      {/* Services */}
      <PageSection
        tone="light"
        eyebrow="What we deliver"
        title="Advisory, modernisation and the change work around it."
        lede="From architecture review through re-platforming and adoption — shaped by your context, constraints and funding reality."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
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

              {/* Activities */}
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {service.activities.map((activity) => (
                  <div
                    key={activity}
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
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{activity}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--ys-border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--ys-link-on-light)',
                    marginRight: '4px'
                  }}
                >
                  Deliverables:
                </span>
                {service.deliverables.map((d) => (
                  <span
                    key={d}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--ys-ink-body)',
                      background: 'var(--ys-surface)',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      border: '1px solid var(--ys-border)',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Methodology */}
      <PageSection
        tone="white"
        eyebrow="Our methodology"
        title="A structured five-phase approach."
        lede="Structured enough to de-risk delivery. Flexible enough to adapt to what we learn along the way."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.step}
              variants={fadeUp}
              className="ys-card-light"
              style={{ padding: '28px 32px', minWidth: 0 }}
            >
              <div
                className="flex flex-col sm:flex-row sm:items-center"
                style={{ gap: '12px', marginBottom: '18px' }}
              >
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--ys-link-on-light)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {phase.step}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  {phase.title}
                </h3>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--ys-ink-muted)',
                    background: 'var(--ys-surface-alt)',
                    border: '1px solid var(--ys-border)',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    alignSelf: 'flex-start'
                  }}
                >
                  {phase.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px]" style={{ gap: '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', minWidth: 0 }}>
                  {phase.activities.map((activity) => (
                    <div key={activity} style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{activity}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="lg:border-l lg:pl-6 border-t lg:border-t-0 pt-4 lg:pt-0"
                  style={{ borderColor: 'var(--ys-border)', minWidth: 0 }}
                >
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--ys-ink-muted)',
                      marginBottom: '6px'
                    }}
                  >
                    Outcome
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.6 }}>
                    {phase.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Industries */}
      <PageSection
        tone="light"
        eyebrow="Industry experience"
        title="Sectors where technology decisions carry real consequences."
        lede="Our team brings hands-on experience from regulated and operationally demanding environments."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                minWidth: 0
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'var(--ys-surface-alt)',
                  border: '1px solid var(--ys-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={industry.iconPath} />
                </svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '2px' }}>
                  {industry.name}
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ys-link-on-light)' }}>
                  {industry.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* CTA — Deep Blue */}
      <PageCTA
        title="Ready to modernise?"
        body="Start with an architecture review. You get an honest read on the estate, a sequenced roadmap, and the business case to fund it."
        primaryCta={{ label: 'Schedule Strategy Consultation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />
    </SharedLayout>
  )
}

export default ModernisationAdvisory
