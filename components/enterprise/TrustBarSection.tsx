"use client"

import { motion } from 'framer-motion'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'

/**
 * Positioning band directly under the hero.
 *
 * Replaces a list of industry keywords (which duplicated the industry
 * section below it) with the architectural point of view that actually
 * differentiates the practice. No unverifiable claims.
 */
const positions: { icon: YsIconName; title: string; body: string }[] = [
  {
    icon: 'consulting',
    title: 'Architecture before implementation',
    body: 'We design the system before writing code, so the decisions that are expensive to reverse get made deliberately.',
  },
  {
    icon: 'security',
    title: 'Governance by design',
    body: 'Security, compliance and auditability are built in from the first sprint — not retrofitted before a review.',
  },
  {
    icon: 'growth',
    title: 'Production-grade delivery',
    body: 'We ship working software incrementally, built for long operational lifetimes rather than demo day.',
  },
]

const TrustBarSection = () => {
  return (
    <section
      style={{
        paddingTop: 'clamp(56px, 7vw, 88px)',
        paddingBottom: 'clamp(56px, 7vw, 88px)',
        backgroundColor: 'var(--ys-surface)',
        borderBottom: '1px solid var(--ys-border)'
      }}
    >
      <div className="enterprise-container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="ys-eyebrow"
          style={{ marginBottom: 'clamp(28px, 3.5vw, 40px)' }}
        >
          How we close the architectural gap
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="ys-position-grid"
        >
          {positions.map((p) => (
            <div key={p.title}>
              <YsIcon name={p.icon} size={28} />
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: '-0.018em',
                  color: 'var(--ys-ink)',
                  marginTop: 16,
                  marginBottom: 8,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--ys-ink-body)' }}>
                {p.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBarSection
