"use client"

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
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

const principles = [
  "Architecture before automation",
  "Governance before scale",
  "Determinism over demos",
  "Systems, not scripts",
  "Observability by default",
  "Security as foundation"
]

const PhilosophySection = () => {
  return (
    <section className="enterprise-section bg-background">
      <div className="enterprise-container">
        <div style={{ maxWidth: '42rem' }}>
          {/* Section Header - Left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: 'var(--space-16)' }}
          >
            <p
              className="enterprise-badge"
              style={{ marginBottom: 'var(--space-4)' }}
            >
              How We Think
            </p>
            <h2 className="enterprise-heading-lg">
              Our approach to enterprise AI.
            </h2>
          </motion.div>

          {/* Manifesto Statements - Larger, spaced, declarative */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-5)'
            }}
          >
            {principles.map((principle, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-medium)',
                  letterSpacing: 'var(--tracking-tight)',
                  lineHeight: 'var(--leading-snug)',
                  color: 'hsl(var(--premium-gray-900))'
                }}
              >
                {principle}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
