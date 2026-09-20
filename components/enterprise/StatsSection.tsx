"use client"

import { motion } from 'framer-motion'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'



/**
 * Credibility band.
 *
 * YatiSphere was incorporated 22-12-2025, so company-volume figures
 * (engagements delivered, audit pass rate) cannot be substantiated yet
 * and are deliberately not claimed. Everything below is verifiable:
 * the DPIIT recognition is certificate DIPP260262, and the experience
 * figure describes the founding team, not company history.
 */
const credentials: { value: string; label: string; icon: YsIconName }[] = [
  {
    value: "15+",
    label: "Years of enterprise architecture experience in the founding team",
    icon: "consulting",
  },
  {
    value: "3",
    label: "Regulated sectors of deep focus — finance, healthcare, government",
    icon: "security",
  },
  {
    value: "5",
    label: "Delivery disciplines, engineered as one architecture",
    icon: "products",
  },
]

const StatsSection = () => {
  return (
    <section
      style={{
        paddingTop: 'clamp(60px, 7vw, 84px)',
        paddingBottom: 'clamp(60px, 7vw, 84px)',
        backgroundColor: '#0B1E3D',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      {/* Subtle brand accent */}

      <div className="enterprise-container-wide relative" style={{ zIndex: 1 }}>
        <motion.p
          className="ys-eyebrow ys-eyebrow-on-dark"
          style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}
        >
          Why teams bring us in
        </motion.p>

        <motion.div
          className="ys-credentials-grid"
        >
          {credentials.map((c) => (
            <motion.div key={c.label}>
              <YsIcon name={c.icon} size={26} />
              <div
                style={{
                  fontSize: 'clamp(2.1rem, 4vw, 2.9rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'white',
                  lineHeight: 1,
                  marginTop: 16,
                  marginBottom: 12,
                }}
              >
                {c.value}
              </div>
              <div
                aria-hidden="true"
                style={{
                  width: 32,
                  height: 2,
                  borderRadius: 2,
                  background: 'var(--ys-gradient-accent)',
                  marginBottom: 14,
                }}
              />
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 300 }}>
                {c.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Verifiable government credential */}
        <motion.div
          className="ys-dpiit"
        >
          <span className="ys-dpiit-mark" aria-hidden="true">
            <YsIcon name="security" size={22} variant="current" />
          </span>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
            <strong style={{ color: '#fff', fontWeight: 700 }}>
              Recognised startup, Government of India
            </strong>
            <br />
            Department for Promotion of Industry and Internal Trade (DPIIT) — certificate
            DIPP260262, Enterprise Software.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
