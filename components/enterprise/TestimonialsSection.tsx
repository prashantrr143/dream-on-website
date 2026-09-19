"use client"

import { motion } from 'framer-motion'



const principles = [
  {
    title: "Architecture before implementation",
    body: "Most enterprise initiatives fail not because of bad technology, but because architectural decisions were made too late. We design systems before we build them.",
    accentColor: "#0A84FF"
  },
  {
    title: "Your data stays yours",
    body: "We do not use client data to train models or feed external systems. Every engagement is governed by the principle of data sovereignty.",
    accentColor: "#00D1FF"
  },
  {
    title: "Governance is not an afterthought",
    body: "In regulated industries, compliance and security are architectural requirements — not items added at the end. We wire them in from day one.",
    accentColor: "#00D1FF"
  }
]

const TestimonialsSection = () => {
  return (
    <section
      className="ys-section-light"
    >
      <div className="enterprise-container-wide">
        {/* Section Header */}
        <motion.div
          style={{ marginBottom: '64px' }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#00D1FF',
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
              color: 'var(--ys-ink)',
              maxWidth: '32rem'
            }}
          >
            How we think about every engagement.
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '32px',
                backgroundColor: 'var(--ys-border)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid var(--ys-border)',
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
                  color: 'var(--ys-ink)',
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
                  color: 'var(--ys-ink-muted)',
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
