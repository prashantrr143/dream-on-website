"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'
import { CapabilityVisual, type VisualKind } from '@/components/enterprise/CapabilityVisual'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

interface ServiceItem {
  n: string
  /** Three words set over the visual, as in the approved layout. */
  overline: [string, string, string]
  title: string
  body: string
  tags: string[]
  href: string
  icon: YsIconName
  visual: VisualKind
}

const services: ServiceItem[] = [
  {
    n: '01',
    overline: ['Build', 'Integrate', 'Evolve'],
    title: 'Enterprise Software & Platforms',
    body: 'Custom applications, integration platforms and APIs built for complex enterprise environments.',
    tags: ['Java', '.NET', 'Node.js', 'Microservices', 'APIs'],
    href: '/solutions',
    icon: 'products',
    visual: 'software',
  },
  {
    n: '02',
    overline: ['Scale', 'Secure', 'Resilient'],
    title: 'Cloud & Infrastructure',
    body: 'Secure cloud foundations, migrations and platform engineering across modern enterprise environments.',
    tags: ['Azure', 'AWS', 'Hybrid', 'IaC', 'FinOps'],
    href: '/solutions/cloud',
    icon: 'cloud',
    visual: 'cloud',
  },
  {
    n: '03',
    overline: ['Automate', 'Deliver', 'Improve'],
    title: 'DevOps & Automation',
    body: 'Automate delivery, infrastructure and operations without losing engineering control.',
    tags: ['GitHub', 'Azure DevOps', 'Kubernetes', 'Terraform'],
    href: '/solutions/devops',
    icon: 'automation',
    visual: 'devops',
  },
  {
    n: '04',
    overline: ['Insights', 'Intelligence', 'Impact'],
    title: 'Data & Analytics',
    body: 'Governed data platforms and analytics that turn enterprise data into usable intelligence.',
    tags: ['Lakehouse', 'SQL', 'Databricks', 'Power BI', 'Analytics'],
    href: '/solutions/data',
    icon: 'analytics',
    visual: 'data',
  },
  {
    n: '05',
    overline: ['Modernise', 'Transform', 'Enable'],
    title: 'Legacy Modernisation',
    body: 'Modernise critical systems incrementally without disrupting the business.',
    tags: ['TOGAF', 'Strangler Pattern', 'Re-platforming', 'APIs'],
    href: '/solutions/consulting',
    icon: 'growth',
    visual: 'modernisation',
  },
  {
    n: '06',
    overline: ['Protect', 'Govern', 'Assure'],
    title: 'Enterprise Security',
    body: 'Security, identity and governance engineered into the technology foundation.',
    tags: ['Entra ID', 'Zero Trust', 'Access governance', 'Audit readiness'],
    href: '/solutions/security',
    icon: 'security',
    visual: 'security',
  },
]

const ITServicesSection = () => {
  return (
    <section id="services" className="ys-section-white">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="ys-cap-intro"
        >
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">What we build</p>
            <h2 className="ys-cap-headline">
              Technology engineered for{' '}
              <span className="ys-cap-headline-accent">what&rsquo;s next.</span>
            </h2>
            <p className="ys-cap-lede">
              From modern foundations to intelligent systems — built for
              real-world impact.
            </p>
          </div>
          <div className="ys-cap-intro-aside">
            <p>
              We combine deep technical expertise with enterprise context to
              design, build and operate systems that last.
            </p>
            <a href="/solutions" className="ys-link ys-cap-intro-link">
              Explore our capabilities
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Capability grid */}
        <motion.ul
          className="ys-cap-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s) => (
            <motion.li key={s.n} variants={fadeUp} style={{ minWidth: 0 }}>
              <a href={s.href} className="ys-cap-card group">
                {/* Visual panel */}
                <span className="ys-cap-media">
                  <CapabilityVisual kind={s.visual} />
                  <span className="ys-cap-number" aria-hidden="true">{s.n}</span>
                  <span className="ys-cap-overline" aria-hidden="true">
                    {s.overline.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </span>
                </span>

                {/* Content */}
                <span className="ys-cap-body">
                  <span className="ys-cap-head">
                    <span className="ys-cap-icon">
                      <YsIcon name={s.icon} size={22} variant="current" />
                    </span>
                    <h3 className="ys-cap-title">{s.title}</h3>
                    <span className="ys-cap-arrow" aria-hidden="true">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </span>

                  <span className="ys-cap-desc">{s.body}</span>

                  <span className="ys-cap-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="ys-cap-tag">{t}</span>
                    ))}
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="ys-cap-footer"
        >
          <p className="ys-cap-footer-tagline">
            Ideas <span aria-hidden="true">•</span> Intelligence{' '}
            <span aria-hidden="true">•</span> Impact
          </p>
          <span className="ys-cap-footer-rule" aria-hidden="true" />
          <a href="/solutions" className="ys-cap-footer-link">
            Explore our capabilities
            <span className="ys-cap-footer-arrow" aria-hidden="true">
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ITServicesSection
