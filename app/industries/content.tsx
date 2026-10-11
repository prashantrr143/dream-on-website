"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { FEATURED_INDUSTRIES, OTHER_INDUSTRIES } from '@/lib/services'

/**
 * Industry index (audit I-01). The three featured sectors lead; Healthcare
 * and Government sit in a smaller "Also experienced in" row. Names and
 * links come from lib/services.ts so the hub, header and footer agree.
 */
const featuredDescriptions: Record<string, string> = {
  '/industries/financial-services':
    'Onboarding and KYC automation, post-trade and settlement systems, compliance workflows — for banks, insurers, wealth and asset managers, and fintechs.',
  '/industries/legal-professional-services':
    'Client onboarding, conflict checks, matter and fee intelligence, practice-management integration.',
  '/industries/software-saas':
    'Multi-tenant platforms, enterprise-customer security reviews, and adding AI features to a product without putting customer data at risk.',
}

export default function IndustriesPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Industries"
        title="Built for sectors where a wrong answer has consequences."
        lede="We build for teams whose systems carry regulatory weight, where the architecture has to satisfy auditors as much as users. The engineering discipline is the same; the constraints differ by sector."
        visual="lanes"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      <PageSection
        tone="white"
        eyebrow="Sectors"
        title="Where we focus."
        lede="Three sectors where we understand the constraints before the first architecture session."
      >
        <motion.ul
          className="ys-industry-rows"
        >
          {FEATURED_INDUSTRIES.map((industry) => (
            <motion.li key={industry.name}>
              <a href={industry.href} className="ys-industry-row">
                <h3 className="ys-industry-row-name">{industry.name}</h3>
                <div style={{ minWidth: 0 }}>
                  <p className="ys-industry-row-desc">{featuredDescriptions[industry.href] ?? industry.descriptor}</p>
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
                    Explore {industry.name.replace(/^\w/, (c) => c.toLowerCase())}
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div style={{ marginTop: 'clamp(28px, 3.5vw, 40px)' }}>
          <h3
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--ink-muted)',
              marginBottom: 12,
            }}
          >
            Also experienced in
          </h3>
          <ul className="flex flex-wrap" style={{ gap: '10px 28px' }}>
            {OTHER_INDUSTRIES.map((industry) => (
              <li key={industry.name} style={{ fontSize: 14 }}>
                <a
                  href={industry.href}
                  className="ys-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  {industry.name}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                </a>
                <span style={{ color: 'var(--ink-muted)' }}> · {industry.descriptor}</span>
              </li>
            ))}
          </ul>
        </div>
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
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
