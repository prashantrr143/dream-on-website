"use client"

import { motion } from 'framer-motion'



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
    fit: "2\u20134 weeks \u00b7 discovery",
    body: "A short discovery engagement for one named problem: solution design, delivery plan and risks. The usual first step.",
    badge: "Start here",
  },
  {
    title: "Project delivery",
    fit: "Defined outcome \u00b7 milestones",
    body: "A defined outcome, delivered end to end against agreed milestones.",
  },
  {
    title: "Dedicated teams",
    fit: "Embedded \u00b7 scales with you",
    body: "Engineers and delivery leads embedded with your team, under your priorities, with our delivery discipline.",
  },
  {
    title: "Managed services",
    fit: "Ongoing \u00b7 run and improve",
    body: "We run and evolve what we (or others) built: cloud, platforms, data pipelines and AI workloads.",
  },
]

const EngagementModelsSection = () => {
  return (
    <section id="models" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          style={{ maxWidth: '46rem' }}
        >
          <p className="ys-eyebrow">Engagement models</p>
          <h2
            style={{ marginTop: 14, marginBottom: 18, textWrap: 'balance' }}
          >
            Work with us the way your organization buys.
          </h2>
        </motion.div>

        {/* One bordered slab; the 1px grid gap becomes the hairline dividers. */}
        <motion.div
          style={{
            border: '1px solid var(--grey-200)',
            borderRadius: 8,
            background: 'var(--white)',
            overflow: 'hidden',
            marginTop: 'clamp(32px, 4vw, 48px)',
          }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: 1,
              background: 'var(--grey-200)',
            }}
          >
            {models.map((model) => (
              <motion.div
                key={model.title}
                style={{
                  minWidth: 0,
                  background: 'var(--white)',
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
                      fontWeight: 600,
                      letterSpacing: '-0.015em',
                      lineHeight: 1.3,
                      color: 'var(--ink-900)',
                    }}
                  >
                    {model.title}
                  </h3>
                  {model.badge && (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--grey-50)',
                        border: '1px solid var(--grey-200)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--blue-600)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {model.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: 'var(--ink-600)',
                    marginTop: 4,
                    marginBottom: 12,
                  }}
                >
                  {model.fit}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: 'var(--ink-600)',
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
