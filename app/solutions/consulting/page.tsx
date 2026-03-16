"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { ArrowRight } from 'lucide-react'

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
  { value: "85%", label: "Success Rate", sub: "Transformation projects delivered" },
  { value: "40%", label: "Faster Delivery", sub: "Average project acceleration" },
  { value: "$2.5M", label: "Average ROI", sub: "Typical cost savings achieved" },
  { value: "500+", label: "Engagements", sub: "Across regulated industries" }
]

const services = [
  {
    title: "Digital Strategy & Roadmap",
    description: "Comprehensive digital transformation strategy aligned with your business objectives and market dynamics.",
    activities: [
      "Current state assessment and gap analysis",
      "Future state vision and roadmap development",
      "Technology stack evaluation",
      "ROI modeling and business case development"
    ],
    deliverables: ["Strategic roadmap", "Technology architecture", "Implementation plan"],
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and eliminate inefficiencies through systematic process reengineering.",
    activities: [
      "Business process mapping and analysis",
      "Automation opportunity identification",
      "Workflow optimization and redesign",
      "Performance metrics and KPI development"
    ],
    deliverables: ["Process maps", "Automation strategy", "Performance framework"],
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  },
  {
    title: "Change Management",
    description: "Guide your organization through transformation with proven methodologies that ensure lasting adoption.",
    activities: [
      "Stakeholder analysis and engagement",
      "Communication strategy and execution",
      "Training program development",
      "Adoption tracking and optimization"
    ],
    deliverables: ["Change strategy", "Training materials", "Communication plan"],
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Data & Analytics Strategy",
    description: "Unlock the power of your data with comprehensive analytics, governance, and self-service enablement.",
    activities: [
      "Data maturity assessment",
      "Analytics use case identification",
      "Data governance framework design",
      "Self-service analytics enablement"
    ],
    deliverables: ["Data strategy", "Analytics roadmap", "Governance framework"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Technology Risk Assessment",
    description: "Identify and mitigate technology risks with security-first thinking and compliance automation.",
    activities: [
      "Security and compliance gap analysis",
      "Risk identification and prioritization",
      "Mitigation strategy development",
      "Governance and oversight framework"
    ],
    deliverables: ["Risk assessment", "Mitigation plan", "Governance model"],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Performance Optimization",
    description: "Maximize ROI and operational efficiency through continuous improvement and outcome measurement.",
    activities: [
      "Performance baseline establishment",
      "Optimization opportunity analysis",
      "Continuous improvement framework",
      "Success metrics and monitoring"
    ],
    deliverables: ["Performance baseline", "Optimization plan", "Monitoring dashboard"],
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }
]

const phases = [
  {
    step: "01",
    title: "Assess",
    duration: "2 – 4 weeks",
    activities: ["Current state analysis", "Technology audit", "Process mapping", "Stakeholder interviews"],
    outcome: "Comprehensive assessment report with prioritized findings"
  },
  {
    step: "02",
    title: "Strategize",
    duration: "3 – 6 weeks",
    activities: ["Vision & strategy development", "Roadmap creation", "Business case modeling", "Risk assessment"],
    outcome: "Digital transformation strategy and executive blueprint"
  },
  {
    step: "03",
    title: "Plan",
    duration: "4 – 8 weeks",
    activities: ["Implementation planning", "Resource allocation", "Change management strategy", "Success metrics"],
    outcome: "Detailed implementation blueprint with milestones"
  },
  {
    step: "04",
    title: "Execute",
    duration: "6 – 18 months",
    activities: ["Phased implementation", "Change management execution", "Training & enablement", "Continuous monitoring"],
    outcome: "Successful transformation with measurable outcomes"
  },
  {
    step: "05",
    title: "Optimize",
    duration: "Ongoing",
    activities: ["Performance monitoring", "Continuous improvement", "Innovation identification", "Strategic refinement"],
    outcome: "Sustained value creation and competitive advantage"
  }
]

const industries = [
  { name: "Financial Services", projects: "150+", iconPath: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v4m4-4v4m4-4v4" },
  { name: "Healthcare", projects: "100+", iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "Manufacturing", projects: "120+", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Technology", projects: "200+", iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { name: "E-commerce", projects: "80+", iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
  { name: "Government", projects: "60+", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
]

/* ── Component ────────────────────────────────────── */

const DigitalConsulting = () => {
  return (
    <SharedLayout>
      {/* ── Hero — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          backgroundColor: '#0A2540'
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '-8%',
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.12), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(46, 196, 182, 0.08), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#635BFF',
                marginBottom: '24px'
              }}
            >
              Digital Consulting
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: 'white',
                marginBottom: '24px'
              }}
            >
              Strategic transformation consulting for the enterprise.
            </h1>
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '560px',
                marginBottom: '40px'
              }}
            >
              We help organizations develop comprehensive strategies, optimize processes, and achieve sustainable digital success — with proven methodologies and disciplined execution.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
              <Link href="/contact-us" className="stripe-btn-light group">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link href="/case-studies" className="stripe-btn-ghost">
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              marginTop: '80px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              overflow: 'hidden'
            }}
            className="max-md:!grid-cols-2"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '32px',
                  backgroundColor: 'rgba(10, 37, 64, 0.95)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#635BFF', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Consulting Services — White ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'white' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#635BFF',
                marginBottom: '20px'
              }}
            >
              What we deliver
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#0A2540',
                marginBottom: '20px'
              }}
            >
              End-to-end consulting services.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#425466',
                maxWidth: '520px'
              }}
            >
              From strategy through execution — every engagement is shaped by your specific context, constraints, and ambition.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '24px'
            }}
            className="max-sm:!grid-cols-1"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '36px',
                  backgroundColor: '#F6F9FC',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(10, 37, 64, 0.08)' }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(99, 91, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.iconPath} />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0A2540',
                    marginBottom: '12px'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#425466',
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#425466', lineHeight: 1.5 }}>{activity}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverable tags */}
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(10, 37, 64, 0.06)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#635BFF', marginRight: '4px', lineHeight: '26px' }}>
                    Deliverables:
                  </span>
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#0A2540',
                        backgroundColor: 'white',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(10, 37, 64, 0.08)',
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
        </motion.div>
      </section>

      {/* ── Transformation Process — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '120px',
          backgroundColor: '#0A2540'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.1), transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#635BFF',
                marginBottom: '20px'
              }}
            >
              Our methodology
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              A proven five-phase approach.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              Structured enough to de-risk delivery. Flexible enough to adapt to what we learn along the way.
            </p>
          </motion.div>

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {phases.map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '0',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
                className="max-sm:!grid-cols-1"
              >
                {/* Step number column */}
                <div
                  style={{
                    padding: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(99, 91, 255, 0.08)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#635BFF',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {phase.step}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '32px 36px' }}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-center"
                    style={{ gap: '12px', marginBottom: '16px' }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'white'
                      }}
                    >
                      {phase.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.4)',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        letterSpacing: '0.02em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {phase.duration}
                    </span>
                  </div>

                  <div
                    className="flex flex-col lg:flex-row"
                    style={{ gap: '32px' }}
                  >
                    {/* Activities */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
                        {phase.activities.map((activity) => (
                          <div
                            key={activity}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                              <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)', lineHeight: 1.5 }}>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div
                      style={{
                        minWidth: '240px',
                        paddingLeft: '32px',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                      className="max-lg:!border-l-0 max-lg:!pl-0 max-lg:!pt-4 max-lg:!border-t max-lg:!border-t-[rgba(255,255,255,0.06)]"
                    >
                      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: '6px' }}>
                        Outcome
                      </p>
                      <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Industry Expertise — Off-white ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F6F9FC' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#635BFF',
                marginBottom: '20px'
              }}
            >
              Industry expertise
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#0A2540',
                marginBottom: '20px'
              }}
            >
              Deep knowledge across regulated sectors.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#425466',
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              We bring hands-on experience from organizations where technology decisions carry real consequences.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '16px'
            }}
            className="max-lg:!grid-cols-3 max-sm:!grid-cols-2"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                style={{
                  padding: '28px 20px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.06)',
                  textAlign: 'center',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                }}
                whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(10, 37, 64, 0.08)' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(99, 91, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '16px'
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={industry.iconPath} />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#0A2540',
                    letterSpacing: '-0.01em',
                    marginBottom: '4px'
                  }}
                >
                  {industry.name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#635BFF'
                  }}
                >
                  {industry.projects}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px',
          backgroundColor: '#0A2540'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.08), transparent 60%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1, textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '20px'
            }}
          >
            Ready to transform your business?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.55)',
              marginBottom: '40px',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Let our consultants guide your transformation journey with strategies and methodologies that deliver measurable results.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px', marginBottom: '40px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Schedule Strategy Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/case-studies" className="stripe-btn-ghost">
              View Transformation Stories
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center"
            style={{ gap: '24px' }}
          >
            {["Free strategy session", "Custom roadmap", "ROI analysis included", "No obligation"].map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}

export default DigitalConsulting
