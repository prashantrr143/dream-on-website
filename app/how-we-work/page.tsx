"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { DeliveryDiagram } from '@/components/enterprise'

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
      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-20)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-medium)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-4)'
            }}
          >
            Delivery
          </motion.p>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-6)',
              maxWidth: '800px'
            }}
          >
            How We Work
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-500))',
              maxWidth: '720px',
              marginBottom: 'var(--space-10)'
            }}
          >
            Our delivery model is designed for enterprise environments where reliability, security, and governance matter as much as speed.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                backgroundColor: 'hsl(var(--premium-gray-900))',
                color: 'white',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease'
              }}
            >
              Start a Conversation
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section
        style={{
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-12)'
            }}
          >
            Our Principles
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)'
            }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-6)',
                  borderLeft: '3px solid hsl(var(--premium-gray-200))',
                  backgroundColor: 'hsl(var(--premium-gray-50))'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--premium-gray-500))',
                    lineHeight: 'var(--leading-relaxed)'
                  }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How We Deliver - Main Section with DeliveryDiagram */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-24)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-4)'
            }}
          >
            How We Deliver
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-500))',
              maxWidth: '720px',
              marginBottom: 'var(--space-16)'
            }}
          >
            A structured, collaborative delivery model designed for enterprise environments—adaptable to context, scale, and regulatory needs.
          </p>
          <DeliveryDiagram />
        </motion.div>
      </section>

      {/* How We Collaborate */}
      <section
        style={{
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 'var(--space-16)'
            }}
          >
            {/* Working With Your Teams */}
            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Working With Your Teams
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)'
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
            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Respecting Enterprise Constraints
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)'
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
          </div>
        </motion.div>
      </section>

      {/* What You Can Expect */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-24)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-10)'
            }}
          >
            What You Can Expect
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-4)'
            }}
          >
            {expectations.map((expectation, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4)'
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ flexShrink: 0, color: 'hsl(var(--premium-gray-400))' }}
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
                    fontSize: 'var(--text-base)',
                    color: 'hsl(var(--premium-gray-700))'
                  }}
                >
                  {expectation}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-24)',
          backgroundColor: 'hsl(var(--premium-gray-900))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'white',
              marginBottom: 'var(--space-4)'
            }}
          >
            Start with a Conversation
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-10)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            If you're planning a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we're happy to talk.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-4) var(--space-8)',
              backgroundColor: 'white',
              color: 'hsl(var(--premium-gray-900))',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-medium)',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Start a Conversation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '4px' }}>
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
