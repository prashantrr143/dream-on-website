"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const visualReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
}

const audiences = [
  {
    title: "Enterprises in regulated industries",
    description:
      "Financial services, healthcare, and government organizations where systems must satisfy auditors as much as users. We build with compliance woven into every layer.",
    href: "/solutions/consulting",
    gradient: "linear-gradient(135deg, hsla(243, 100%, 68%, 0.15), hsla(192, 80%, 55%, 0.1))",
    accentColor: "hsl(243, 100%, 68%)",
    decorBorder: "hsla(243, 100%, 68%, 0.2)"
  },
  {
    title: "Engineering-led organizations",
    description:
      "Technical leadership teams building production systems — not demos — with long operational lifetimes. We bring architecture rigor and delivery discipline.",
    href: "/solutions",
    gradient: "linear-gradient(135deg, hsla(192, 80%, 55%, 0.15), hsla(155, 65%, 50%, 0.1))",
    accentColor: "hsl(192, 80%, 55%)",
    decorBorder: "hsla(192, 80%, 55%, 0.2)"
  },
  {
    title: "Companies modernizing legacy infrastructure",
    description:
      "Organizations moving from fragile systems to scalable, maintainable platforms without disrupting operations. Incremental modernization, not big-bang rewrites.",
    href: "/solutions/cloud",
    gradient: "linear-gradient(135deg, hsla(155, 65%, 50%, 0.12), hsla(243, 100%, 68%, 0.08))",
    accentColor: "hsl(155, 65%, 50%)",
    decorBorder: "hsla(155, 65%, 50%, 0.2)"
  }
]

const AudienceSection = () => {
  return (
    <section
      className="stripe-section"
      style={{
        backgroundColor: 'white'
      }}
    >
      <div className="enterprise-container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <p
            style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'hsl(243, 100%, 68%)',
              marginBottom: '16px'
            }}
          >
            Who We Work With
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: 'hsl(210, 76%, 15%)',
              maxWidth: '36rem'
            }}
          >
            Built for organizations where systems must endure.
          </h2>
        </motion.div>

        {/* Alternating Content Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {audiences.map((audience, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={index}
                className="alternating-block"
              >
                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ order: isReversed ? 2 : 1 }}
                  className={isReversed ? 'lg:order-2' : 'lg:order-1'}
                >
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: 'hsl(210, 76%, 15%)',
                      marginBottom: '16px'
                    }}
                  >
                    {audience.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '17px',
                      lineHeight: 1.65,
                      color: 'hsl(220, 9%, 46%)',
                      marginBottom: '24px',
                      maxWidth: '480px'
                    }}
                  >
                    {audience.description}
                  </p>
                  <a
                    href={audience.href}
                    className="group"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'hsl(243, 100%, 68%)',
                      textDecoration: 'none'
                    }}
                  >
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </motion.div>

                {/* Visual Side - Gradient card with decorative elements */}
                <motion.div
                  variants={visualReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    order: isReversed ? 1 : 2,
                    minHeight: '300px',
                    borderRadius: '16px',
                    background: audience.gradient,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className={isReversed ? 'lg:order-1' : 'lg:order-2'}
                >
                  {/* Decorative shapes */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20%',
                      right: '10%',
                      width: '120px',
                      height: '120px',
                      border: `1px solid ${audience.decorBorder}`,
                      borderRadius: '12px',
                      opacity: 0.8
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '15%',
                      width: '80px',
                      height: '80px',
                      border: `1px solid ${audience.decorBorder}`,
                      borderRadius: '50%',
                      opacity: 0.5
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '40%',
                      left: '40%',
                      width: '160px',
                      height: '1px',
                      backgroundColor: audience.decorBorder,
                      transform: 'rotate(-30deg)',
                      opacity: 0.4
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '8px',
                      height: '8px',
                      backgroundColor: audience.accentColor,
                      borderRadius: '50%',
                      opacity: 0.4
                    }}
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AudienceSection
