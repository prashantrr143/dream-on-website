"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { CapabilityVisual, type VisualKind } from '@/components/enterprise/CapabilityVisual'



interface ProblemCard {
  /** The problem, quoted, used as the card title. */
  problem: string
  /** What we deliver in response. */
  body: string
  /** The service behind it. */
  tag: string
  href: string
  icon: YsIconName
  visual: VisualKind
}

const problems: ProblemCard[] = [
  {
    problem: 'Our core system is old and nobody dares touch it.',
    body: 'Step-by-step modernization while the business keeps running.',
    tag: 'Modernization & Advisory',
    href: '/what-we-do/services/modernization',
    icon: 'growth',
    visual: 'modernization',
  },
  {
    problem: 'Cloud costs keep rising and we don\u2019t know why.',
    body: 'Cost review, clean-up and a managed platform.',
    tag: 'Cloud & Infrastructure',
    href: '/what-we-do/cloud',
    icon: 'cloud',
    visual: 'cloud',
  },
  {
    problem: 'We have the data but can\u2019t get an answer out of it.',
    body: 'One trusted data platform and live dashboards.',
    tag: 'Data & Analytics',
    href: '/what-we-do/services/data-analytics',
    icon: 'analytics',
    visual: 'data',
  },
  {
    problem: 'An audit or a client security review is coming.',
    body: 'Controls, logging and evidence built into your systems.',
    tag: 'Security & Compliance',
    href: '/what-we-do/services/security-compliance',
    icon: 'security',
    visual: 'security',
  },
  {
    problem: 'Client onboarding takes weeks and lives in email.',
    body: 'Automated intake, checks and approvals, with a full audit trail.',
    tag: 'Software + Applied AI',
    href: '/what-we-do/industries/financial-services',
    icon: 'products',
    visual: 'software',
  },
  {
    problem: 'Our AI pilot worked, and then nothing happened.',
    body: 'The pilot taken to production, with governance in place.',
    tag: 'Applied AI',
    href: '/what-we-do/applied-ai',
    icon: 'automation',
    visual: 'ai',
  },
]

// Built for: three sectors, each with the outcome it buys (audit H-04).
const BUILT_FOR: { href: string; name: string; outcome: string }[] = [
  {
    href: '/what-we-do/industries/financial-services',
    name: 'Financial services',
    outcome: 'Onboarding, reporting and core platforms that satisfy a regulator.',
  },
  {
    href: '/what-we-do/industries/legal-professional-services',
    name: 'Legal & professional services',
    outcome: 'Intake, conflicts and practice data you can defend.',
  },
  {
    href: '/what-we-do/industries/software-saas',
    name: 'Software & SaaS',
    outcome: 'Pass your customers\u2019 security reviews and ship AI features safely.',
  },
]

const ITServicesSection = () => {
  return (
    <section id="services" className="ys-section-white">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          className="ys-cap-intro"
        >
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">Problems we fix</p>
            <h2 className="ys-cap-headline">
              Start with the problem, not the technology.
            </h2>
          </div>
          <div className="ys-cap-intro-aside">
            <p>If one of these sounds like your week, we should talk. Most start as a short, scoped Blueprint.</p>
          </div>
        </motion.div>

        {/* Problem grid */}
        <motion.ul
          className="ys-cap-grid"
        >
          {problems.map((p) => (
            <motion.li key={p.problem} style={{ minWidth: 0 }}>
              <a href={p.href} className="ys-cap-card group">
                {/* Visual panel */}
                <span className="ys-cap-media">
                  <CapabilityVisual kind={p.visual} />
                </span>

                {/* Content */}
                <span className="ys-cap-body">
                  <span className="ys-cap-head">
                    <span className="ys-cap-icon">
                      <YsIcon name={p.icon} size={22} />
                    </span>
                    <h3 className="ys-cap-title ys-problem-title">
                      &ldquo;{p.problem}&rdquo;
                    </h3>
                    <span className="ys-cap-arrow" aria-hidden="true">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </span>

                  <span className="ys-cap-desc">{p.body}</span>

                  <span className="ys-cap-tags">
                    <span className="ys-cap-tag">{p.tag}</span>
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Built for */}
        <div className="ys-builtfor">
          <h3 className="ys-eyebrow ys-builtfor-title">Built for</h3>
          <ul className="ys-builtfor-grid">
            {BUILT_FOR.map((sector) => (
              <li key={sector.href}>
                <a href={sector.href} className="ys-builtfor-card">
                  <span className="ys-builtfor-name">
                    {sector.name}
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="ys-builtfor-outcome">{sector.outcome}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ITServicesSection
