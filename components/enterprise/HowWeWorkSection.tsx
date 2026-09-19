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

/**
 * Delivery commitments.
 *
 * Each is a promise we can be held to in a contract, not a value
 * statement — that is the point of the section heading.
 */
const deliveryPrinciples = [
  {
    title: "A fixed price for the first step",
    description: "You know what the first piece of work costs before it starts.",
    accent: "#0A84FF"
  },
  {
    title: "One in-house team",
    description: "No subcontracting, no rotating strangers. The people who scope it build it.",
    accent: "#00D1FF"
  },
  {
    title: "Your code in your accounts",
    description: "Repositories and infrastructure are yours from day one, not handed over at the end.",
    accent: "#00D1FF"
  },
  {
    title: "Your data stays yours",
    description: "No client data trains models or leaves the boundary you define.",
    accent: "#0A84FF"
  }
]

const HowWeWorkSection = () => {
  return (
    <section
      id="how"
      className="ys-section-white"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle gradient accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse at 0% 50%, rgba(10, 132, 255, 0.06), transparent 70%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="enterprise-container-wide relative" style={{ zIndex: 1 }}>
        <div
          className="grid lg:grid-cols-2 items-start"
          style={{ gap: '80px' }}
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
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(10, 132, 255, 0.8)',
                marginBottom: '16px'
              }}
            >
              What you can rely on
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: 'var(--ys-ink)',
                marginBottom: '24px'
              }}
            >
              Dependable, in writing.
            </h2>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.65,
                color: 'var(--ys-ink-muted)',
                maxWidth: '480px',
                marginBottom: '32px'
              }}
            >
              These are commitments, not aspirations. Each one goes into the
              engagement letter, so you can hold us to it.
            </p>
            <Link
              href="/how-we-work"
              className="stripe-btn-ghost group"
            >
              See how we deliver
              <ArrowRight
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
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
              gap: '0'
            }}
          >
            {deliveryPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '24px 0',
                  borderBottom: index < deliveryPrinciples.length - 1
                    ? '1px solid var(--ys-border)'
                    : 'none',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                {/* Accent dot */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: principle.accent,
                    marginTop: '8px',
                    flexShrink: 0,
                    opacity: 0.8
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--ys-ink)',
                      marginBottom: '6px'
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'var(--ys-ink-muted)'
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
