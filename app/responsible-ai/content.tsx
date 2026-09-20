"use client"

import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA } from '@/lib/cta'
import { SITE_CONTACT } from '@/lib/site-contact'

/**
 * The four commitments, each stated as what we do rather than what we
 * believe. The list under each is the practice that makes it checkable.
 */
const PRINCIPLES = [
  {
    title: 'Human oversight',
    lede: 'We design AI systems that keep people in the loop.',
    points: [
      'Critical decisions require human review and approval',
      'Clear escalation paths for edge cases and exceptions',
      'Monitoring and alerting for unexpected behaviour',
      'Regular review of AI system performance and outcomes',
    ],
  },
  {
    title: 'Explainability',
    lede: 'We favour approaches that can be understood and explained.',
    points: [
      'Preference for interpretable models where appropriate',
      'Clear documentation of model behaviour and limitations',
      'Audit trails for AI-assisted decisions',
      'Ability to explain outcomes to stakeholders and regulators',
    ],
  },
  {
    title: 'Data boundaries',
    lede: 'We maintain strict boundaries around data use.',
    points: [
      'Client data is never used to train models without explicit consent',
      'Clear separation between training data and production data',
      'Data minimisation: collect and use only what is necessary',
      'Defined retention and deletion policies for AI training data',
    ],
  },
  {
    title: 'Continuous evaluation',
    lede: 'We treat a deployed model as something that needs watching.',
    points: [
      'Regular monitoring for model drift and performance degradation',
      'Periodic review of AI system outcomes for fairness and accuracy',
      'Mechanisms to identify and address unintended consequences',
      'Commitment to updating practices as standards evolve',
    ],
  },
]

function Tick() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ marginTop: '3px', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M4 8l3.5 3.5L12 4"
        stroke="var(--blue-600)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ResponsibleAIContent = () => {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Trust"
        title="Responsible AI"
        lede="We design AI systems with clear accountability, human oversight and explicit data boundaries, especially in regulated and high-risk environments."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />

      {/* Position */}
      <PageSection tone="white" eyebrow="Our approach">
        <p className="lead measure" style={{ color: 'var(--ink-muted)' }}>
          AI is a powerful tool, but it requires careful governance. Our approach
          prioritises transparency, control and predictability over novelty or
          automation for its own sake.
        </p>
      </PageSection>

      {/* The four commitments */}
      <PageSection
        tone="light"
        eyebrow="Commitments"
        title="What we hold ourselves to."
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="ys-card-light"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  marginBottom: '8px',
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--ink-muted)',
                  marginBottom: '18px',
                  maxWidth: '62ch',
                }}
              >
                {principle.lede}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                {principle.points.map((point) => (
                  <li
                    key={point}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                  >
                    <Tick />
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: 'var(--ink-muted)',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Risk-appropriate design */}
      <PageSection
        tone="white"
        eyebrow="Proportionality"
        title="Risk-appropriate design."
      >
        <p className="measure" style={{ color: 'var(--ink-muted)' }}>
          We match AI capabilities to risk levels. High-stakes decisions in
          regulated environments receive more conservative designs with greater
          human oversight, while lower-risk applications may benefit from more
          automation. We avoid black-box deployments in contexts where
          explainability and auditability are required.
        </p>
      </PageSection>

      {/* Questions */}
      <PageSection tone="light" eyebrow="Questions">
        <p className="measure" style={{ color: 'var(--ink-muted)' }}>
          For questions about our approach to responsible AI, write to{' '}
          <a href={`mailto:${SITE_CONTACT.email}`} className="ys-link">
            {SITE_CONTACT.email}
          </a>
          .
        </p>
      </PageSection>

      <PageCTA
        title="Planning an AI system that has to stand up to scrutiny?"
        body="Tell us what it needs to decide, and who has to be able to explain it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default ResponsibleAIContent
