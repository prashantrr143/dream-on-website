"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

/**
 * Industry index. Descriptions match the homepage industry section so the
 * two never drift apart.
 */
const industries = [
  {
    name: 'Financial services',
    description:
      'Onboarding and KYC automation, post-trade and settlement systems, compliance workflows — for banks, NBFCs, insurers and fintechs.',
    href: '/industries/financial-services',
  },
  {
    name: 'Legal & professional services',
    description:
      'Client onboarding, conflict checks, matter and fee intelligence, practice-management integration.',
    href: '/industries/legal-professional-services',
  },
  {
    name: 'Healthcare',
    description:
      'Patient platforms and clinical data systems where consent, retention and access rules are built into the architecture.',
    href: '/industries/healthcare',
  },
  {
    name: 'Government & public sector',
    description:
      'Citizen-facing systems with data residency, accessibility and audit trails on infrastructure departments can operate.',
    href: '/industries/government-public-sector',
  },
  {
    name: 'Enterprise & technology',
    description:
      'Product companies and enterprises modernising platforms, moving to cloud, or adding AI to an existing product.',
    href: '/industries/enterprise-technology',
  },
]

export default function IndustriesPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Industries"
        title="Deepest where reliability and compliance matter most."
        lede="We work where systems carry regulatory weight — and where the architecture has to satisfy auditors as much as users. The engineering is the same discipline; the constraints differ by sector."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      <PageSection
        tone="white"
        eyebrow="Sectors"
        title="Where we focus."
        lede="Five sectors where we understand the constraints before the first architecture session."
      >
        <motion.ul
          className="ys-industry-rows"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((industry) => (
            <motion.li key={industry.name} variants={fadeUp}>
              <a href={industry.href} className="ys-industry-row">
                <h3 className="ys-industry-row-name">{industry.name}</h3>
                <div style={{ minWidth: 0 }}>
                  <p className="ys-industry-row-desc">{industry.description}</p>
                  <span
                    className="ys-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 10,
                      fontSize: 14,
                    }}
                  >
                    Explore {industry.name.toLowerCase()}
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </PageSection>

      <PageSection
        tone="light"
        eyebrow="What stays constant"
        title="The constraints change. The discipline does not."
        lede="Whatever the sector, the same engineering principles apply — because the cost of getting architecture wrong is the same everywhere."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Architecture before implementation',
              body: 'Decisions that are expensive to reverse get made deliberately, before code.',
            },
            {
              title: 'Governance by design',
              body: 'Security, compliance and auditability are wired in from the first sprint, not retrofitted before a review.',
            },
            {
              title: 'Evidence for the people who ask',
              body: 'Controls mapped to the frameworks you are held to, with the audit trail already in place.',
            },
          ].map((item) => (
            <div key={item.title} className="ys-card-light" style={{ padding: '22px 20px', minWidth: 0 }}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title="Working in a regulated sector?"
        body="Tell us what you're building and the constraints you're under. We'll say plainly whether we're the right fit."
        primaryCta={{ label: 'Start a conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore IT services', href: '/solutions' }}
      />
    </SharedLayout>
  )
}
