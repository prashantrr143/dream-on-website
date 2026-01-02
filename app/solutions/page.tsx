"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Capability pillars data
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
    description: "Establishing secure, scalable cloud and infrastructure foundations that support long-term growth and operational stability.",
    capabilities: [
      "Cloud architecture and migration",
      "Infrastructure as code and environment automation",
      "Observability, reliability, and performance"
    ]
  },
  {
    title: "Data & Intelligent Systems",
    description: "Building data platforms and applied AI systems that are reliable, governable, and suitable for production use.",
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

// What this enables
const outcomes = [
  "Reduced delivery and operational risk",
  "Systems that scale predictably",
  "Clear data ownership and accountability",
  "Audit-friendly architectures",
  "Long-term maintainability"
]

export default function WhatWeDoPage() {
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
            Capabilities
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
            What We Do
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
            We design and deliver enterprise software, cloud, and AI systems for organizations operating in complex, regulated, and high-trust environments.
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

      {/* Positioning Block */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-16)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
            Our Focus
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-600))',
              maxWidth: '800px'
            }}
          >
            We group our work into a small number of capability areas that reflect the kinds of problems we take responsibility for—not a list of tools or services. Each engagement is shaped by organizational context, regulatory requirements, and long-term system goals.
          </p>
        </motion.div>
      </section>

      {/* Capability Pillars */}
      <section
        style={{
          paddingTop: 'var(--space-8)',
          paddingBottom: 'var(--space-20)',
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
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)'
            }}
          >
            {capabilityPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-8)',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid hsl(var(--premium-gray-100))'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'hsl(var(--premium-gray-600))',
                    marginBottom: 'var(--space-6)'
                  }}
                >
                  {pillar.description}
                </p>
                <div
                  style={{
                    borderTop: '1px solid hsl(var(--premium-gray-100))',
                    paddingTop: 'var(--space-4)'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-medium)',
                      textTransform: 'uppercase',
                      letterSpacing: 'var(--tracking-wide)',
                      color: 'hsl(var(--premium-gray-400))',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    Includes
                  </p>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-2)'
                    }}
                  >
                    {pillar.capabilities.map((capability, capIndex) => (
                      <li
                        key={capIndex}
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'hsl(var(--premium-gray-500))',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--space-2)'
                        }}
                      >
                        <span style={{ color: 'hsl(var(--premium-gray-300))', marginTop: '2px' }}>•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* What This Enables */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-20)'
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
              marginBottom: 'var(--space-8)'
            }}
          >
            What This Enables
          </motion.h2>
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-4)'
            }}
          >
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  fontSize: 'var(--text-base)',
                  color: 'hsl(var(--premium-gray-600))'
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
                {outcome}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Bridge to How We Work */}
      <section
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'var(--space-6)'
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-semibold)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-3)'
              }}
            >
              How This Work Is Delivered
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-600))',
                maxWidth: '640px'
              }}
            >
              Our capabilities are delivered through a structured, collaborative delivery model designed for enterprise environments.
            </p>
          </div>
          <Link
            href="/how-we-work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-medium)',
              color: 'hsl(var(--premium-gray-900))',
              textDecoration: 'none'
            }}
          >
            View How We Work
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Final CTA */}
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
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            If you're planning or evolving a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we're happy to talk.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            <Link
              href="/contact-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--space-4) var(--space-8)',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid hsl(var(--premium-gray-600))',
                transition: 'all 0.2s ease'
              }}
            >
              Talk to an Architect
            </Link>
          </div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
