"use client"

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
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
      staggerChildren: 0.06,
      delayChildren: 0.15
    }
  }
}

const painPoints = [
  "PoCs that never reach production",
  "AI systems that fail audits",
  "Data pipelines no one trusts",
  "Cloud platforms that bleed cost",
  "Models that drift without detection",
  "Integrations that break under load"
]

const RealitySection = () => {
  return (
    <section className="enterprise-section-dark">
      <div className="enterprise-container">
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
              What Breaks in Real-World AI
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
              We&apos;ve seen how enterprise AI fails.
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-400))',
                maxWidth: 'var(--prose-width)'
              }}
            >
              Most AI initiatives stall between prototype and production. The
              gap isn&apos;t technical—it&apos;s architectural.
            </p>
          </motion.div>

          {/* Right Column - Pain Points List */}
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
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span
                  style={{
                    color: 'hsl(var(--premium-gray-500))',
                    marginRight: 'var(--space-4)'
                  }}
                >
                  —
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-normal)',
                    color: 'hsl(var(--premium-gray-300))'
                  }}
                >
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RealitySection
