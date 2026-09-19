"use client"

import { motion } from 'framer-motion'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { ArrowRight } from 'lucide-react'



// Solution areas — retained exactly as specified in the brand brief.
const solutions = [
  {
    title: "Enterprise Software & Platforms",
    description: "Custom applications for complex business needs.",
    href: "/solutions",
    icon: "products" as YsIconName
  },
  {
    title: "Cloud & Infrastructure",
    description: "Build, migrate and optimize for scale.",
    href: "/solutions/cloud",
    icon: "cloud" as YsIconName
  },
  {
    title: "DevOps & Automation",
    description: "Faster delivery, higher reliability.",
    href: "/solutions/devops",
    icon: "automation" as YsIconName
  },
  {
    title: "Data & Analytics",
    description: "Turn governed data into decisions.",
    href: "/solutions/data",
    icon: "analytics" as YsIconName
  },
  {
    title: "Applied AI & Machine Learning",
    description: "Intelligent systems for real-world impact.",
    href: "/applied-ai",
    icon: "ai-ml" as YsIconName
  }
]

const WorkWeDoSection = () => {
  return (
    <section className="ys-section-light">
      <div className="enterprise-container-wide">
        <div className="ys-solutions-layout">
          {/* Intro column */}
          <motion.div
          >
            <p className="ys-eyebrow">What We Build</p>
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
              End-to-end solutions for a smarter enterprise
            </h2>
            <div className="ys-rule" style={{ marginBottom: 18 }} />
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ys-ink-body)' }}>
              Five disciplines, delivered as one architecture — so systems hold
              together in production, not just on a diagram.
            </p>
            <a
              href="/solutions"
              className="ys-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 15 }}
            >
              Explore our solutions
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Solution cards */}
          <motion.div
            className="ys-solutions-grid"
          >
            {solutions.map((solution) => (
              <motion.a
                key={solution.title}
                href={solution.href}
                className="ys-card-light group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '24px 22px',
                  textDecoration: 'none',
                }}
              >
                <span className="ys-icon-tile" style={{ marginBottom: 16 }}>
                  <YsIcon name={solution.icon} size={26} />
                </span>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--ys-ink-muted)',
                    flex: 1,
                    marginBottom: 16,
                  }}
                >
                  {solution.description}
                </p>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: '1px solid var(--ys-border)',
                    color: 'var(--ys-link-on-light)',
                  }}
                >
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkWeDoSection
