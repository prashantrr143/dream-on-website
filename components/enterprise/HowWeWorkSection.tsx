"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
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

// Delivery principles - systems-first, architecture-driven
const deliveryPrinciples = [
  {
    title: "Architecture before implementation",
    description: "We design systems thoughtfully before writing code."
  },
  {
    title: "Governance and security by design",
    description: "Security and compliance are built in from day one."
  },
  {
    title: "Incremental, production-ready delivery",
    description: "We ship working software regularly, not everything at the end."
  },
  {
    title: "Collaboration over hand-offs",
    description: "We work alongside your teams, not in isolation."
  }
]

const HowWeWorkSection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        backgroundColor: 'hsl(var(--premium-gray-900))'
      }}
    >
      <div className="enterprise-container-wide">
        <div
          className="grid lg:grid-cols-2 items-start"
          style={{ gap: 'var(--space-16)' }}
        >
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-medium)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wide)',
                color: 'hsl(var(--premium-gray-400))',
                marginBottom: 'var(--space-4)'
              }}
            >
              How We Work
            </p>
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 'var(--leading-snug)',
                color: 'white',
                marginBottom: 'var(--space-6)'
              }}
            >
              Structured delivery for enterprise environments.
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-400))',
                maxWidth: 'var(--prose-width)',
                marginBottom: 'var(--space-8)'
              }}
            >
              Our delivery model is designed for organizations where reliability,
              security, and governance matter as much as speed. We bring structure
              without rigidity.
            </p>
            <Link
              href="/how-we-work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                color: 'white',
                textDecoration: 'none'
              }}
              className="group"
            >
              View Our Delivery Model
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </motion.div>

          {/* Right Column - Principles */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)'
            }}
          >
            {deliveryPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  paddingBottom: 'var(--space-6)',
                  borderBottom: index < deliveryPrinciples.length - 1
                    ? '1px solid hsl(var(--premium-gray-700))'
                    : 'none'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-medium)',
                    color: 'white',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'hsl(var(--premium-gray-400))'
                  }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
