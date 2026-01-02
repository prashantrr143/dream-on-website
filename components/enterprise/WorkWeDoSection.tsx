"use client"

import { motion, type Variants } from 'framer-motion'

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
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Systems-first work areas - architecture and delivery driven
const workAreas = [
  "Building and modernizing core software platforms",
  "Designing secure, scalable cloud foundations",
  "Embedding governance and compliance into system architecture",
  "Developing production-grade AI and data systems",
  "Creating operational frameworks for long-term maintainability"
]

const WorkWeDoSection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        backgroundColor: 'hsl(var(--premium-gray-50))'
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
              The Kind of Work We Do
            </p>
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 'var(--leading-snug)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-6)'
              }}
            >
              Long-term systems, not short-term experiments.
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-500))',
                maxWidth: 'var(--prose-width)'
              }}
            >
              We take on work that matters to organizations over years, not months.
              Our focus is on building systems that can evolve, scale, and withstand
              the scrutiny of auditors, regulators, and operations teams.
            </p>
          </motion.div>

          {/* Right Column - Work Areas List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)'
            }}
          >
            {workAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-medium)',
                    color: 'hsl(var(--premium-gray-300))',
                    marginTop: '4px',
                    fontVariantNumeric: 'tabular-nums'
                  }}
                >
                  0{index + 1}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-normal)',
                    color: 'hsl(var(--premium-gray-700))',
                    lineHeight: 'var(--leading-relaxed)'
                  }}
                >
                  {area}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkWeDoSection
