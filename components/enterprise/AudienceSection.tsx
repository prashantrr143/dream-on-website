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
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Systems-first audience - less AI-centric, more enterprise-focused
const audiences = [
  {
    title: "Enterprises in regulated industries",
    description:
      "Financial services, healthcare, and government organizations where systems must satisfy auditors as much as users."
  },
  {
    title: "Engineering-led organizations",
    description:
      "Technical leadership teams building production systems—not demos—with long operational lifetimes."
  },
  {
    title: "Companies modernizing legacy infrastructure",
    description:
      "Organizations moving from fragile systems to scalable, maintainable platforms without disrupting operations."
  },
  {
    title: "Teams navigating complex compliance requirements",
    description:
      "Industries where SOC 2, HIPAA, GDPR, and other regulatory frameworks shape every architectural decision."
  }
]

const AudienceSection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        backgroundColor: 'hsl(var(--background))'
      }}
    >
      <div className="enterprise-container-wide">
        {/* Section Header - Left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--space-12)' }}
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
            Who We Work With
          </p>
          <h2
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              maxWidth: '32rem'
            }}
          >
            Built for organizations where systems must endure.
          </h2>
        </motion.div>

        {/* Audience Grid - Clean cards without icons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 'var(--space-6)' }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              style={{
                padding: 'var(--space-8)',
                backgroundColor: 'hsl(var(--premium-gray-50))',
                borderRadius: '8px',
                border: '1px solid hsl(var(--premium-gray-100))'
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-medium)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-2)'
                }}
              >
                {audience.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-500))'
                }}
              >
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AudienceSection
