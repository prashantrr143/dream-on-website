"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'

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

const capabilities = [
  {
    title: "Enterprise Software & Platforms",
    description:
      "Core software systems that form the backbone of enterprise operations — designed for reliability, maintainability, and scale.",
    link: "/solutions",
    icon: Zap,
    iconColor: "#0A84FF",
    iconBg: "rgba(10, 132, 255, 0.1)"
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable cloud foundations that support long-term growth. Multi-cloud, hybrid, and on-premise.",
    link: "/solutions/cloud",
    icon: Globe,
    iconColor: "#00D1FF",
    iconBg: "rgba(0, 209, 255, 0.1)"
  },
  {
    title: "Applied AI, Data & Governance",
    description:
      "Production-grade AI and data systems with governance, auditability, and compliance built in. Responsible by design.",
    link: "/applied-ai",
    icon: Shield,
    iconColor: "#00D1FF",
    iconBg: "rgba(0, 209, 255, 0.1)"
  }
]

const CapabilitiesSection = () => {
  return (
    <section
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        backgroundColor: '#F4F7FB'
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
              color: '#0A84FF',
              marginBottom: '16px'
            }}
          >
            Core Capabilities
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'hsl(210, 76%, 15%)',
              maxWidth: '32rem'
            }}
          >
            Enterprise systems across three critical domains.
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.a
                key={index}
                href={capability.link}
                variants={fadeUp}
                className="group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid hsl(var(--premium-gray-100))',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: capability.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: capability.iconColor }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'hsl(210, 76%, 15%)',
                    marginBottom: '12px'
                  }}
                >
                  {capability.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'hsl(220, 9%, 46%)',
                    marginBottom: '24px',
                    flex: 1
                  }}
                >
                  {capability.description}
                </p>

                {/* Link */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#0A84FF'
                  }}
                >
                  Learn more
                  <ArrowRight
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
