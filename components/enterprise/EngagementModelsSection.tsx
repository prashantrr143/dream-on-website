"use client"

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
}

interface EngagementModel {
  title: string
  /** Commercial shape, in one short line. */
  fit: string
  body: string
  /** Marks the entry offer, shown first. */
  badge?: string
}

const models: EngagementModel[] = [
  {
    title: "Solution Blueprint",
    fit: "2\u20134 weeks \u00b7 fixed price",
    body: "A fixed-price blueprint for one named problem: solution design, costed delivery plan and risks. The entry point for most new clients.",
    badge: "Start here",
  },
  {
    title: "Project delivery",
    fit: "Fixed scope \u00b7 milestone-based",
    body: "A defined outcome, delivered end-to-end, with one team accountable for the result.",
  },
  {
    title: "Dedicated teams",
    fit: "Monthly \u00b7 scale up or down",
    body: "Engineers and delivery leads embedded with your team, under your priorities, with our delivery discipline.",
  },
  {
    title: "Managed services",
    fit: "SLA-backed \u00b7 ongoing",
    body: "We run and evolve what we (or others) built: cloud, platforms, data pipelines and AI workloads.",
  },
]

const EngagementModelsSection = () => {
  return (
    <section id="models" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: '46rem' }}
        >
          <p className="ys-eyebrow">Engagement models</p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginTop: 14,
              marginBottom: 18,
              textWrap: 'balance',
            }}
          >
            Work with us the way your organisation buys.
          </h2>
          <div className="ys-rule" />
        </motion.div>

        {/* One bordered slab; the 1px grid gap becomes the hairline dividers. */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            border: '1px solid var(--ys-border)',
            borderRadius: 14,
            background: 'var(--ys-surface)',
            overflow: 'hidden',
            marginTop: 'clamp(32px, 4vw, 48px)',
          }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: 1,
              background: 'var(--ys-border)',
            }}
          >
            {models.map((model) => (
              <motion.div
                key={model.title}
                variants={fadeUp}
                style={{
                  minWidth: 0,
                  background: 'var(--ys-surface)',
                  padding: 'clamp(22px, 2.6vw, 30px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                      lineHeight: 1.3,
                      color: 'var(--ys-ink)',
                    }}
                  >
                    {model.title}
                  </h3>
                  {model.badge && (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 8px',
                        borderRadius: 100,
                        background: 'rgba(255, 138, 0, 0.12)',
                        border: '1px solid rgba(255, 138, 0, 0.42)',
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: 'var(--ys-orange-ink)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {model.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: 'var(--ys-ink-muted)',
                    marginTop: 4,
                    marginBottom: 12,
                  }}
                >
                  {model.fit}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--ys-ink-body)',
                  }}
                >
                  {model.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EngagementModelsSection
