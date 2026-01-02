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
    title: "Foundational Technology Platforms",
    value: "Modern, scalable cloud and platform engineering that becomes a stable foundation for all business systems.",
    outcomes: ["Reduce infrastructure complexity", "Improve deployment velocity", "Enable horizontal scaling"],
    capabilities: [
      {
        name: "Cloud Architecture & Strategy",
        description: "Multi-cloud design, migration planning, and infrastructure optimization across AWS, Azure, and GCP."
      },
      {
        name: "DevOps & Platform Engineering",
        description: "CI/CD pipelines, infrastructure as code, container orchestration, and environment automation."
      },
      {
        name: "Database & Data Infrastructure",
        description: "Database design, performance tuning, migration services, and high-availability configurations."
      },
      {
        name: "Observability & Monitoring",
        description: "Real-time monitoring, alerting systems, capacity planning, and operational visibility."
      }
    ]
  },
  {
    title: "Intelligent Systems & Data Engineering",
    value: "AI-powered systems and data platforms that transform information into reliable, actionable intelligence.",
    outcomes: ["Increase data reliability", "Enable predictive capabilities", "Automate decision support"],
    capabilities: [
      {
        name: "AI Systems & Automation",
        description: "Custom AI model development, process automation, and intelligent workflow integration."
      },
      {
        name: "Data Platforms & Analytics",
        description: "Data warehousing, real-time analytics, business intelligence, and self-service reporting."
      },
      {
        name: "System Integration",
        description: "API development, enterprise service bus, data synchronization, and legacy modernization."
      }
    ]
  },
  {
    title: "Secure & Governed Operations",
    value: "Security architecture and compliance frameworks that protect systems and satisfy regulatory requirements.",
    outcomes: ["Reduce operational risk", "Achieve compliance posture", "Enable secure collaboration"],
    capabilities: [
      {
        name: "Security Engineering",
        description: "Zero-trust architecture, threat detection, security audits, and vulnerability management."
      },
      {
        name: "Compliance & Risk Frameworks",
        description: "SOC 2, HIPAA, PCI DSS, GDPR compliance, risk assessment, and audit preparation."
      },
      {
        name: "Identity & Access Management",
        description: "Authentication systems, authorization frameworks, and privileged access controls."
      }
    ]
  },
  {
    title: "Build & Delivery Excellence",
    value: "Custom engineering and design that delivers production-ready systems built for maintainability and scale.",
    outcomes: ["Accelerate time to production", "Improve system quality", "Reduce technical debt"],
    capabilities: [
      {
        name: "Custom Software Engineering",
        description: "Web applications, APIs, microservices, and enterprise system development."
      },
      {
        name: "UX & Product Design",
        description: "User research, interface design, design systems, and accessibility compliance."
      },
      {
        name: "Performance & Optimization",
        description: "Performance audits, code optimization, database tuning, and scalability improvements."
      }
    ]
  },
  {
    title: "Strategic Advisory & Enablement",
    value: "Technology strategy and organizational enablement that aligns technical decisions with business outcomes.",
    outcomes: ["Align technology with strategy", "Build internal capability", "Reduce transformation risk"],
    capabilities: [
      {
        name: "Technology Strategy",
        description: "Digital strategy development, technology roadmaps, and architecture governance."
      },
      {
        name: "Assessment & Transformation",
        description: "Current state analysis, gap assessment, and transformation program design."
      },
      {
        name: "Training & Knowledge Transfer",
        description: "Custom training programs, hands-on workshops, and capability building."
      }
    ]
  }
]

export default function ServicesPage() {
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
            Our Capabilities & Services
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
            Delivering technology outcomes that matter—trusted systems, platforms that scale, and operations that are secure and governed.
          </motion.p>
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
          >
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
            <Link
              href="/how-we-work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--space-4) var(--space-8)',
                backgroundColor: 'transparent',
                color: 'hsl(var(--premium-gray-600))',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid hsl(var(--premium-gray-200))',
                transition: 'all 0.2s ease'
              }}
            >
              How We Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-600))',
              maxWidth: '800px'
            }}
          >
            We group our expertise into capability pillars that enable secure, scalable, and governable enterprise systems. Each pillar represents a strategic domain where we deliver measurable outcomes—not just services, but lasting improvements to how your technology operates.
          </p>
        </motion.div>
      </section>

      {/* Capability Pillars */}
      {capabilityPillars.map((pillar, pillarIndex) => (
        <section
          key={pillarIndex}
          style={{
            paddingTop: 'var(--space-20)',
            paddingBottom: 'var(--space-20)',
            backgroundColor: pillarIndex % 2 === 0 ? 'hsl(var(--premium-gray-50))' : 'white'
          }}
        >
          <motion.div
            className="enterprise-container-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Pillar Header */}
            <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-10)' }}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                {pillar.title}
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))',
                  maxWidth: '720px'
                }}
              >
                {pillar.value}
              </p>
            </motion.div>

            {/* Strategic Outcomes */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: 'var(--space-8)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-12)'
              }}
            >
              {pillar.outcomes.map((outcome, outcomeIndex) => (
                <div
                  key={outcomeIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    fontSize: 'var(--text-base)',
                    color: 'hsl(var(--premium-gray-600))',
                    fontWeight: 'var(--font-medium)'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ color: 'hsl(var(--premium-gray-400))' }}
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

            {/* Capabilities Grid */}
            <motion.div
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)'
              }}
            >
              {pillar.capabilities.map((capability, capIndex) => (
                <motion.div
                  key={capIndex}
                  variants={fadeUp}
                  style={{
                    padding: 'var(--space-8)',
                    backgroundColor: pillarIndex % 2 === 0 ? 'white' : 'hsl(var(--premium-gray-50))',
                    borderRadius: '12px',
                    border: '1px solid hsl(var(--premium-gray-100))'
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-semibold)',
                      color: 'hsl(var(--premium-gray-900))',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    {capability.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'hsl(var(--premium-gray-500))'
                    }}
                  >
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      ))}

      {/* CTA Section */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-32)',
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
            Ready to discuss how we can tailor these capabilities to your organization?
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
            Every engagement starts with understanding your context—your systems, your constraints, and your goals.
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
              href="/how-we-work"
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
              View How We Work
            </Link>
          </div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
