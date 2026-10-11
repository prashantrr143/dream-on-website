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
    problem: 'Client onboarding takes weeks and lives in email.',
    body: 'Automated intake, checks and approvals, with a full audit trail.',
    tag: 'Applied AI + Software',
    href: '/what-we-do/industries/financial-services',
    icon: 'products',
    visual: 'software',
  },
  {
    problem: 'Our core system is old and nobody dares touch it.',
    body: 'Step-by-step modernization while the business keeps running.',
    tag: 'Modernization & Advisory',
    href: '/what-we-do/services/modernization',
    icon: 'growth',
    visual: 'modernization',
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
    problem: 'Our AI pilot worked, and then nothing happened.',
    body: 'The pilot taken to production, with governance in place.',
    tag: 'Applied AI',
    href: '/what-we-do/applied-ai',
    icon: 'automation',
    visual: 'ai',
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
    problem: 'An audit or a client security review is coming.',
    body: 'Controls, logging and evidence built into your systems.',
    tag: 'Security & Compliance',
    href: '/what-we-do/services/security-compliance',
    icon: 'security',
    visual: 'security',
  },
]

const PILLARS = [
  {
    label: 'Cloud, engineering & data',
    line: 'Platforms on AWS, Microsoft Azure and Google Cloud, plus the software, data, delivery and security your business runs on.',
    link: { label: 'See what we do', href: '/what-we-do' },
  },
  {
    label: 'Applied AI',
    line: 'Production-grade AI inside the systems you already run, governed from day one. Model-neutral, with a dedicated Claude practice.',
    link: { label: 'See applied AI', href: '/what-we-do/applied-ai' },
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
const ALSO = [
  { name: 'Healthcare', href: '/what-we-do/industries/healthcare' },
  { name: 'Public sector', href: '/what-we-do/industries/public-sector' },
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
            <p className="ys-eyebrow">Problems we solve</p>
            <h2 className="ys-cap-headline">
              Start with the problem, not the technology.
            </h2>
          </div>
          <div className="ys-cap-intro-aside">
            <p>If one of these sounds like your week, we should talk.</p>
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
                      <YsIcon name={p.icon} size={22} variant="current" />
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

        {/* Two pillars behind the work */}
        <motion.div
          className="ys-pillars-strip"
        >
          {PILLARS.map((pillar) => (
            <div key={pillar.label} className="ys-pillars-item">
              <h3 className="ys-pillars-label">{pillar.label}</h3>
              <p className="ys-pillars-line">{pillar.line}</p>
              <a href={pillar.link.href} className="ys-link ys-pillars-link">
                {pillar.link.label}
                <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          ))}
        </motion.div>

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
          <p className="ys-builtfor-also">
            Also experienced in{' '}
            {ALSO.map((sector, i) => (
              <span key={sector.href}>
                {i > 0 && ' and '}
                <a href={sector.href} className="ys-sectors-link">
                  {sector.name.toLowerCase()}
                </a>
              </span>
            ))}
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default ITServicesSection
