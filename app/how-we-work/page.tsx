"use client"

import { motion, type Variants } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { DeliveryDiagram, PageHero, PageSection, PageCTA } from '@/components/enterprise'

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Core principles
const principles = [
  {
    title: "Architecture before implementation",
    description: "We design systems thoughtfully before writing code, ensuring the foundation is sound."
  },
  {
    title: "Governance and security by design",
    description: "Security and compliance are built in from day one, not bolted on later."
  },
  {
    title: "Clear ownership and accountability",
    description: "Every deliverable has an owner. Every decision has a trail."
  },
  {
    title: "Incremental, production-ready delivery",
    description: "We ship working software regularly, not everything at the end."
  },
  {
    title: "Collaboration over hand-offs",
    description: "We work alongside your teams, not in isolation."
  },
  {
    title: "Transparency throughout",
    description: "You always know where we are, what's working, and what needs attention."
  }
]

// What clients can expect
const expectations = [
  "Transparency in progress, risks, and decisions",
  "Predictable delivery with no surprises",
  "Clear communication at every stage",
  "Respect for your enterprise constraints",
  "Systems built for production, not demos"
]

export default function HowWeWorkPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Delivery"
        title="How We Work"
        lede="Our delivery model is designed for enterprise environments where reliability, security, and governance matter as much as speed."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
      />

      {/* Principles Section */}
      <PageSection tone="white" eyebrow="Principles" title="Our Principles">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 16 }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '22px 20px',
                minWidth: 0
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: '8px'
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--ys-ink-body)',
                  lineHeight: 1.6
                }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* How We Deliver - Main Section with DeliveryDiagram */}
      <PageSection
        tone="light"
        eyebrow="Delivery model"
        title="How We Deliver"
        lede="A structured, collaborative delivery model designed for enterprise environments—adaptable to context, scale, and regulatory needs."
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ minWidth: 0 }}
        >
          <DeliveryDiagram />
        </motion.div>
      </PageSection>

      {/* How We Collaborate */}
      <PageSection tone="white" eyebrow="Collaboration" title="How We Collaborate">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' }}
        >
          {/* Working With Your Teams */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <h3
              style={{
                fontSize: 'clamp(18px, 2vw, 21px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px'
              }}
            >
              Working With Your Teams
            </h3>
            <div
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <p>
                We work with your teams, not over them. Our engagements are designed to integrate with your existing engineering, security, and operations functions.
              </p>
              <p>
                Clear communication and documentation are non-negotiable. You will always know what we are doing, why we are doing it, and what decisions need your input.
              </p>
            </div>
          </motion.div>

          {/* Enterprise Constraints */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <h3
              style={{
                fontSize: 'clamp(18px, 2vw, 21px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px'
              }}
            >
              Respecting Enterprise Constraints
            </h3>
            <div
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <p>
                We work within your governance frameworks, not around them. Your data ownership is respected throughout—we do not use client data to train models.
              </p>
              <p>
                Security is not an afterthought. We design systems with clear data boundaries, least-privilege access, and audit-friendly architectures.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </PageSection>

      {/* What You Can Expect */}
      <PageSection tone="light" eyebrow="Expectations" title="What You Can Expect">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 12 }}
        >
          {expectations.map((expectation, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 18px',
                minWidth: 0
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0, color: 'var(--ys-link-on-light)' }}
              >
                <path
                  d="M16.5 5.5L7.5 14.5L3.5 10.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.5,
                  color: 'var(--ys-ink-body)',
                  minWidth: 0
                }}
              >
                {expectation}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Closing CTA */}
      <PageCTA
        title="Start with a Conversation"
        body="If you're planning a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we're happy to talk."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}
