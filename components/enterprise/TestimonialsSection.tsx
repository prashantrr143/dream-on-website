"use client"

import { motion, type Variants } from 'framer-motion'

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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const principles = [
  {
    title: "Architecture before implementation",
    body: "Most enterprise initiatives fail not because of bad technology, but because architectural decisions were made too late. We design systems before we build them.",
    accentColor: "#635BFF"
  },
  {
    title: "Your data stays yours",
    body: "We do not use client data to train models or feed external systems. Every engagement is governed by the principle of data sovereignty.",
    accentColor: "hsl(192, 80%, 55%)"
  },
  {
    title: "Governance is not an afterthought",
    body: "In regulated industries, compliance and security are architectural requirements — not items added at the end. We wire them in from day one.",
    accentColor: "hsl(155, 65%, 50%)"
  }
]

const TestimonialsSection = () => {
  return (
    <section
      className="stripe-section"
      style={{
        backgroundColor: '#000000'
      }}
    >
      <div className="enterprise-container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8b84ff',
              marginBottom: '16px'
            }}
          >
            Our Operating Principles
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'white',
              maxWidth: '32rem'
            }}
          >
            How we think about every engagement.
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '32px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  width: '32px',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: principle.accentColor,
                  marginBottom: '24px',
                  opacity: 0.7
                }}
              />

              {/* Principle title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}
              >
                {principle.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.65)',
                  flex: 1
                }}
              >
                {principle.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
