"use client"

import { motion } from 'framer-motion'

const focusAreas = [
  "Financial Services",
  "Healthcare",
  "Government",
  "Enterprise Technology",
  "Regulated Industries"
]

const TrustBarSection = () => {
  return (
    <section
      style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        backgroundColor: '#F6F9FC',
        borderBottom: '1px solid hsl(var(--premium-gray-100))'
      }}
    >
      <div className="enterprise-container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 500,
            color: '#425466',
            marginBottom: '28px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Focused where governance and compliance are non-negotiable
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="trust-bar"
        >
          {focusAreas.map((area, i) => (
            <span
              key={i}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: '#0A2540',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#635BFF',
                  opacity: 0.5,
                  flexShrink: 0
                }}
                aria-hidden="true"
              />
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBarSection
