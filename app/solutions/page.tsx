"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
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
      <PageHero
        eyebrow="What we do"
        title="Enterprise software, cloud, and AI — built with discipline."
        lede="We design and deliver systems for organizations operating in complex, regulated, and high-trust environments. Every engagement is shaped by your context, constraints, and long-term goals."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How We Work', href: '/how-we-work' }}
      />

      {/* ── Solution Areas ── */}
      <PageSection
        tone="white"
        eyebrow="Solutions"
        title="Explore our capabilities."
        lede="Six practice areas that reflect the kinds of problems we take responsibility for — not a list of tools."
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 16 }}
        >
          {solutionAreas.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '11px',
                    backgroundColor: 'rgba(10, 132, 255, 0.08)',
                    border: '1px solid rgba(10, 132, 255, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={solution.iconPath} />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    marginBottom: '8px'
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--ys-ink-body)',
                    marginBottom: '18px'
                  }}
                >
                  {solution.description}
                </p>

                {/* Capabilities */}
                <div style={{ marginBottom: '4px', flex: 1 }}>
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#00D1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '13.5px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{cap}</span>
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
                  gap: '12px',
                  padding: '14px 22px',
                  borderTop: '1px solid var(--ys-border)',
                  textDecoration: 'none',
                  minWidth: 0
                }}
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ys-link-on-light)]"
              >
                <span
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: 'var(--ys-link-on-light)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Explore {solution.title}
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  style={{
                    color: 'var(--ys-link-on-light)',
                    flexShrink: 0,
                    transition: 'transform 0.2s ease'
                  }}
                  className="group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── Capability Pillars ── */}
      <PageSection
        tone="light"
        eyebrow="Our focus"
        title="Four pillars of capability."
        lede="We group our work into capability areas that reflect the kinds of problems we take responsibility for. Each engagement is shaped by organizational context and long-term system goals."
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: 16 }}
        >
          {capabilityPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: '34px',
                  fontWeight: 700,
                  color: 'var(--ys-border)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '16px'
                }}
                aria-hidden="true"
              >
                0{index + 1}
              </div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  marginBottom: '8px',
                  lineHeight: 1.3
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '18px'
                }}
              >
                {pillar.description}
              </p>

              {/* Capabilities list */}
              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--ys-border)' }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--ys-ink-muted)',
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
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="#00D1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '13.5px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── What This Enables ── */}
      <PageSection
        tone="white"
        eyebrow="Outcomes"
        title="What this enables."
        lede="Our capabilities are delivered through a structured, collaborative model designed for enterprise environments."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(28px, 4vw, 48px)', alignItems: 'start' }}
        >
          {/* Left — link through to delivery */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <Link href="/how-we-work" className="ys-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
              View how we work
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Right — outcomes list */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="ys-card-light"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    minWidth: 0
                  }}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(10, 132, 255, 0.08)',
                      border: '1px solid rgba(10, 132, 255, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--ys-ink)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </PageSection>

      {/* ── Closing CTA ── */}
      <PageCTA
        title="Start with a conversation."
        body="If you're planning or evolving a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we're happy to talk."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Talk to an Architect', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}
