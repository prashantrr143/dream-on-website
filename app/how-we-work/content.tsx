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
              className="ys-card-light"
              style={{
                padding: '22px 20px',
                minWidth: 0
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: '8px'
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--ys-ink-body)',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '20px' }}>
          {WORKING_ACROSS_REGIONS.map((item) => (
            <div
              key={item.title}
              className="ys-card-light"
              style={{ padding: '26px', display: 'flex', flexDirection: 'column', minWidth: 0 }}
            >
              <h3
                style={{
                  fontSize: '16.5px',
                  fontWeight: 700,
                  letterSpacing: '-0.018em',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                  textWrap: 'pretty',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: '62ch' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 'clamp(24px, 3vw, 32px)',
            fontSize: '14.5px',
            lineHeight: 1.65,
            color: 'var(--ink-muted)',
            maxWidth: '70ch',
          }}
        >
          We design controls against the frameworks your auditors hold you to
          &mdash; GDPR and UK GDPR, SOC 2, ISO/IEC 27001, HIPAA, PCI DSS,
          India&rsquo;s DPDP Act, the UAE and Saudi PDPLs, US state privacy laws
          and regional equivalents &mdash; and produce the
          evidence your organization needs. The certifications themselves are
          assessed against your organization, and remain yours to hold.
        </p>
      </PageSection>

      {/* How we collaborate */}
      <PageSection id="collaboration" tone="light" eyebrow="Collaboration" title="How we collaborate">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' }}
        >
          {/* Working with your teams */}
          <motion.div style={{ minWidth: 0 }}>
            <h3
              style={{
                fontSize: 'clamp(18px, 2vw, 21px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px'
              }}
            >
              Working with your teams
            </h3>
            <div
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <p>
                We work with your teams, not over them. Our engagements are designed to integrate with your existing engineering, security, and operations functions.
              </p>
              <p>
                Clear communication and documentation are non-negotiable. You will always know what we are doing, why we are doing it, and what decisions need your input.
              </p>
            </div>
          </motion.div>

          {/* Enterprise Constraints */}
          <motion.div style={{ minWidth: 0 }}>
            <h3
              style={{
                fontSize: 'clamp(18px, 2vw, 21px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px'
              }}
            >
              Respecting enterprise constraints
            </h3>
            <div
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <p>
                We work within your governance frameworks, not around them. Your data ownership is respected throughout. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.
              </p>
              <p>
                Security is not an afterthought. We design systems with clear data boundaries, least-privilege access, and audit-friendly architectures.
              </p>
            </div>
          </motion.div>
        </motion.div>
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
