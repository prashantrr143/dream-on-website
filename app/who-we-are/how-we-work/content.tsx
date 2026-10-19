"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import DeliveryStages from '@/components/enterprise/DeliveryStages'
import EngagementModelsSection from '@/components/enterprise/EngagementModelsSection'
import { PRIMARY_CTA } from '@/lib/cta'
import { WORKING_ACROSS_REGIONS } from '@/lib/regions'


// Core principles. Four, not six: "Collaboration over hand-offs" and
// "Transparency throughout" are covered by the delivery and collaboration
// sections, so repeating them here diluted the list.
const principles = [
  {
    title: "Design before code",
    description: "Decisions that are expensive to reverse are made deliberately, before build begins."
  },
  {
    title: "Governance and security by design",
    description: "Security, compliance and auditability are built in from the first sprint, not added before a review."
  },
  {
    title: "Clear ownership",
    description: "Every deliverable has an owner. Every decision has a trail."
  },
  {
    title: "Working software every two weeks",
    description: "Incremental delivery, never a big reveal at the end."
  }
]

export default function HowWeWorkContent() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="How we work"
        title="One team, from first conversation to running system."
        lede="Our delivery team is fully in-house. The people who scope your solution are the people who build it, launch it and stay to run it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />

      {/* Delivery model — five stages, shared with the homepage */}
      <PageSection
        id="delivery"
        tone="light"
        eyebrow="Delivery model"
        title="Five stages. No handovers."
        lede="Every engagement follows the same path. The depth of each stage changes with the size and risk of the work; the order does not."
      >
        <DeliveryStages />
      </PageSection>

      {/* Principles Section */}
      <PageSection id="principles" tone="white" eyebrow="Principles" title="What stays constant.">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 16 }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="ys-open-item"
              style={{
                minWidth: 0
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: '8px'
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--ink-600)',
                  lineHeight: 1.6
                }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Engagement models — moved here from the homepage. Sits before
          collaboration so the commercial shape is clear first, with the
          regional practicalities directly after it. */}
      <div id="engagement">
        <EngagementModelsSection />
      </div>

      {/* Working across regions. Every line here is something the company
          can actually do today — no certifications are claimed, because
          none are held. */}
      <PageSection
        id="international"
        tone="white"
        eyebrow="Working across regions"
        title="Incorporated in India. Delivering internationally."
        lede="Built for clients across the UK, Europe, the Middle East, the US and India. What that means in practice:"
      >
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {WORKING_ACROSS_REGIONS.map((item) => (
            <div
              key={item.title}
              className="ys-open-item"
              style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}
            >
              <h3
                style={{
                  fontSize: '16.5px',
                  fontWeight: 600,
                  letterSpacing: '-0.018em',
                  lineHeight: 1.3,
                  color: 'var(--ink-900)',
                  marginBottom: '10px',
                  textWrap: 'pretty',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-600)', maxWidth: '62ch' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 'clamp(24px, 3vw, 32px)',
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'var(--ink-600)',
            maxWidth: '70ch',
          }}
        >
          We design controls for GDPR, SOC 2, ISO/IEC 27001, HIPAA, PCI DSS, India&rsquo;s DPDP Act and regional equivalents. The certifications stay yours.
        </p>
      </PageSection>

      {/* Closing CTA */}
      <PageCTA
        title={'What\u2019s the problem you\u2019d fix first?'}
        body="Describe it in a few lines. A founder replies within one working day with an honest view on whether we can help."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}
