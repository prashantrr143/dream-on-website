"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

// Systems-first capabilities - AI last, not first
const capabilities = [
  {
    title: "Enterprise Software & Platforms",
    description:
      "Core software systems and platforms that form the backbone of enterprise operations—designed for reliability, maintainability, and scale.",
    link: "/solutions"
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable cloud foundations that support long-term growth and operational stability. Multi-cloud, hybrid, and on-premise.",
    link: "/solutions"
  },
  {
    title: "Applied AI, Data & Governance",
    description:
      "Production-grade AI and data systems with governance, auditability, and compliance built in. Responsible by design, not bolted on.",
    link: "/solutions"
  }
]

const CapabilitiesSection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        backgroundColor: 'hsl(var(--premium-gray-50))'
      }}
    >
      <div className="enterprise-container-wide">
        {/* Section Header - Left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--space-16)' }}
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
            What We Build
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
            Enterprise systems across three domains.
          </h2>
        </motion.div>

        {/* Capabilities Grid - Equal columns with consistent vertical rhythm */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'var(--space-12)' }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Number indicator */}
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  color: 'hsl(var(--premium-gray-400))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                0{index + 1}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  letterSpacing: 'var(--tracking-tight)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                {capability.title}
              </h3>

              {/* Description */}
              <p
                className="enterprise-body"
                style={{
                  marginBottom: 'var(--space-6)',
                  flex: 1
                }}
              >
                {capability.description}
              </p>

              {/* Link */}
              <a href={capability.link} className="enterprise-link group">
                Learn more
                <ArrowRight
                  className="inline-block w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
