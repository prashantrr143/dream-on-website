"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { CapabilityVisual, type VisualKind } from '@/components/enterprise/CapabilityVisual'
import { FEATURED_INDUSTRIES, OTHER_INDUSTRIES } from '@/lib/services'



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
    href: '/applied-ai',
    icon: 'products',
    visual: 'software',
  },
  {
    problem: 'Our core system is old and nobody dares touch it.',
    body: 'Step-by-step modernization while the business keeps running.',
    tag: 'Modernization & Advisory',
    href: '/solutions/modernization',
    icon: 'growth',
    visual: 'modernization',
  },
  {
    problem: 'We have the data but can\u2019t get an answer out of it.',
    body: 'One trusted data platform and live dashboards.',
    tag: 'Data & Analytics',
    href: '/solutions/data',
    icon: 'analytics',
    visual: 'data',
  },
  {
    problem: 'Our AI pilot worked, and then nothing happened.',
    body: 'The pilot taken to production, with governance in place.',
    tag: 'Applied AI',
    href: '/applied-ai',
    icon: 'automation',
    visual: 'devops',
  },
  {
    problem: 'Cloud costs keep rising and we don\u2019t know why.',
    body: 'Cost review, clean-up and a managed platform.',
    tag: 'Cloud & Infrastructure',
    href: '/solutions/cloud',
    icon: 'cloud',
    visual: 'cloud',
  },
  {
    problem: 'An audit or a client security review is coming.',
    body: 'Controls, logging and evidence built into your systems.',
    tag: 'Security & Compliance',
    href: '/solutions/security',
    icon: 'security',
    visual: 'security',
  },
]

const PILLARS = [
  {
    label: 'Enterprise IT services',
    line: 'Microsoft Azure specialists across software, cloud, data, DevOps, modernization and security: the systems your business runs on.',
    link: { label: 'See all services', href: '/solutions' },
  },
  {
    label: 'Applied AI',
    line: 'Production-grade AI inside the systems you already run, governed from day one. Azure-first, model-agnostic.',
    link: { label: 'See applied AI', href: '/applied-ai' },
  },
]

// Featured sectors lead; the rest are named as "also" (audit I-01, G-11).
const SECTORS = FEATURED_INDUSTRIES
const ALSO = OTHER_INDUSTRIES

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

        {/* Sectors */}
        <motion.p
          className="ys-sectors-line"
        >
          Built for{' '}
          {SECTORS.map((sector, i) => (
            <span key={sector.href}>
              {i > 0 && (i === SECTORS.length - 1 ? ' and ' : ', ')}
              <a href={sector.href} className="ys-sectors-link">
                {sector.name.toLowerCase().replace('software & saas', 'software and SaaS companies')}
              </a>
            </span>
          ))}
          . Also experienced in{' '}
          {ALSO.map((sector, i) => (
            <span key={sector.href}>
              {i > 0 && ' and '}
              <a href={sector.href} className="ys-sectors-link">
                {sector.name.toLowerCase().replace(' & public sector', '')}
              </a>
            </span>
          ))}
          .
        </motion.p>
      </div>
    </section>
  )
}

export default ITServicesSection
