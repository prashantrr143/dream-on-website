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

const solutionAreas = [
  {
    title: "Cloud & Infrastructure",
    description: "Secure, scalable cloud foundations that support long-term growth — from migration through optimization.",
    href: "/solutions/cloud",
    capabilities: ["Cloud migration", "Infrastructure as code", "Multi-cloud strategy", "Observability & reliability"],
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "AI & Machine Learning",
    description: "Applied AI systems that are reliable, governable, and suitable for production use in regulated environments.",
    href: "/solutions/ai-ml",
    capabilities: ["ML model deployment", "Document intelligence", "Workflow automation", "Responsible AI practices"],
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "Data & Analytics",
    description: "Data platforms and pipelines that turn raw information into reliable, governed, actionable intelligence.",
    href: "/solutions/data",
    capabilities: ["Data platform engineering", "Real-time streaming", "Business intelligence", "Data governance"],
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines, infrastructure automation, and continuous monitoring that accelerate delivery without sacrificing reliability.",
    href: "/solutions/devops",
    capabilities: ["CI/CD automation", "Infrastructure as code", "Container orchestration", "Performance monitoring"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Security & Compliance",
    description: "Security architecture, compliance automation, and governance embedded into system design from the outset.",
    href: "/solutions/security",
    capabilities: ["Zero-trust architecture", "Compliance automation", "Identity management", "Threat detection"],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Digital Consulting",
    description: "Strategic transformation consulting — from assessment through execution — shaped by your specific context and constraints.",
    href: "/solutions/consulting",
    capabilities: ["Digital strategy", "Process optimization", "Change management", "Technology risk assessment"],
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  }
]

const capabilityPillars = [
  {
    title: "Enterprise Software & Platform Engineering",
    description: "Designing and building core software systems and platforms that form the backbone of enterprise operations.",
    capabilities: [
      "Custom enterprise software development",
      "Platform and service architecture",
      "Integration with existing systems"
    ]
  },
  {
    title: "Cloud & Infrastructure Foundations",
    description: "Establishing secure, scalable cloud and infrastructure foundations that support long-term growth.",
    capabilities: [
      "Cloud architecture and migration",
      "Infrastructure as code and environment automation",
      "Observability, reliability, and performance"
    ]
  },
  {
    title: "Data & Intelligent Systems",
    description: "Building data platforms and applied AI systems that are reliable, governable, and suitable for production.",
    capabilities: [
      "Data platforms and pipelines",
      "Applied AI and automation",
      "Document and workflow intelligence"
    ]
  },
  {
    title: "Security, Risk & Governance",
    description: "Embedding security, compliance, and governance into system design and delivery from the outset.",
    capabilities: [
      "Secure system architecture",
      "Regulatory and audit readiness",
      "Responsible AI and data practices"
    ]
  }
]

const outcomes = [
  "Reduced delivery and operational risk",
  "Systems that scale predictably",
  "Clear data ownership and accountability",
  "Audit-friendly architectures",
  "Long-term maintainability"
]

/* ── Component ────────────────────────────────────── */

export default function SolutionsPage() {
  return (
    <SharedLayout>
      {/* ── Hero — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '-5%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.1), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(46, 196, 182, 0.06), transparent 60%)',
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
                color: '#8b84ff',
                marginBottom: '24px'
              }}
            >
              What we do
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
              Enterprise software, cloud, and AI — built with discipline.
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
              We design and deliver systems for organizations operating in complex, regulated, and high-trust environments. Every engagement is shaped by your context, constraints, and long-term goals.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
              <Link href="/contact-us" className="stripe-btn-light group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link href="/how-we-work" className="stripe-btn-ghost">
                How We Work
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Solution Areas — White ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000000' }}>
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
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Solutions
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
              Explore our capabilities.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '520px'
              }}
            >
              Six practice areas that reflect the kinds of problems we take responsibility for — not a list of tools.
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
            {solutionAreas.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  backgroundColor: '#0a0a0f',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(255, 255, 255, 0.08)' }}
              >
                <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={solution.iconPath} />
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'white',
                      marginBottom: '12px'
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '24px'
                    }}
                  >
                    {solution.description}
                  </p>

                  {/* Capabilities */}
                  <div style={{ marginBottom: '24px', flex: 1 }}>
                    {solution.capabilities.map((cap) => (
                      <div
                        key={cap}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          marginBottom: '10px'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                          <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer link */}
                <Link
                  href={solution.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 36px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s ease'
                  }}
                  className="group-hover:!bg-white/5"
                >
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#8b84ff',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Explore {solution.title}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    style={{
                      color: '#8b84ff',
                      transition: 'transform 0.2s ease'
                    }}
                    className="group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Capability Pillars — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '-8%',
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
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Our focus
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
              Four pillars of capability.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              We group our work into capability areas that reflect the kinds of problems we take responsibility for. Each engagement is shaped by organizational context and long-term system goals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {capabilityPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontSize: '40px',
                    fontWeight: 700,
                    color: 'rgba(99, 91, 255, 0.2)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginBottom: '20px'
                  }}
                >
                  0{index + 1}
                </div>

                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.45)',
                    marginBottom: '24px'
                  }}
                >
                  {pillar.description}
                </p>

                {/* Capabilities list */}
                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255, 255, 255, 0.3)',
                      marginBottom: '12px'
                    }}
                  >
                    Includes
                  </p>
                  {pillar.capabilities.map((cap) => (
                    <div
                      key={cap}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '8px'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5 }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── What This Enables — Off-white ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#0a0a0f' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center'
            }}
            className="max-md:!grid-cols-1 max-md:!gap-12"
          >
            {/* Left */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#8b84ff',
                  marginBottom: '20px'
                }}
              >
                Outcomes
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
                What this enables.
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '440px'
                }}
              >
                Our capabilities are delivered through a structured, collaborative model designed for enterprise environments.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link
                  href="/how-we-work"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#8b84ff',
                    textDecoration: 'none'
                  }}
                >
                  View how we work
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>

            {/* Right — outcomes list */}
            <motion.div variants={fadeUp}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 24px',
                      backgroundColor: '#000000',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(99, 91, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'white',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
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
            Start with a conversation.
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
            If you&apos;re planning or evolving a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we&apos;re happy to talk.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/contact-us" className="stripe-btn-ghost">
              Talk to an Architect
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
