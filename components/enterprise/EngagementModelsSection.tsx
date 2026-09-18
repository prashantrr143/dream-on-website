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
}

const models: EngagementModel[] = [
  {
    title: "Project delivery",
    fit: "Fixed scope · milestone-based",
    body: "A defined outcome — a platform, a migration, an AI use case — delivered end-to-end with our architects accountable.",
  },
  {
    title: "Dedicated teams",
    fit: "Monthly · scale up or down",
    body: "Engineers and architects embedded with your team, under your priorities, with our delivery discipline.",
  },
  {
    title: "Managed services",
    fit: "SLA-backed · ongoing",
    body: "We run and evolve what we (or others) built — cloud, platforms, data pipelines, AI workloads.",
  },
  {
    title: "Architecture & advisory",
    fit: "2–4 weeks · fixed price",
    body: "Architecture reviews, AI readiness assessments and modernisation roadmaps — the entry point for most new clients.",
  },
]

const EngagementModelsSection = () => {
  return (
    <section id="models" className="ys-section-white">
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
