"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'



/* ── Data ─────────────────────────────────────────── */

const keyCapabilities = [
  { value: "ELT", label: "Pipeline engineering", sub: "Batch and streaming ingestion" },
  { value: "Tested", label: "Data quality", sub: "Validation and reconciliation checks" },
  { value: "BI", label: "Governed reporting", sub: "Shared metric definitions" },
  { value: "FinOps", label: "Cost visibility", sub: "Warehouse and compute rightsizing" }
]

const solutions = [
  {
    title: "Data Pipeline Engineering",
    description: "Batch and streaming pipelines with validation, retry and lineage built in, so downstream consumers can trust what lands.",
    capabilities: [
      "Batch and streaming ingestion",
      "Multi-source integration",
      "Data quality validation",
      "Retry, alerting and lineage"
    ],
    metric: "Pipelines built to be re-run safely",
    technologies: ["Apache Kafka", "Apache Spark", "Airflow", "dbt"],
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    title: "Lakehouse & Warehouse Architecture",
    description: "Storage and compute layers designed around how the data is actually queried, with modelling and ownership defined up front.",
    capabilities: [
      "Data lake implementation",
      "Warehouse modernisation",
      "Lakehouse architecture",
      "Dimensional and semantic modelling"
    ],
    metric: "One modelled layer for analytics",
    technologies: ["Snowflake", "Databricks", "Azure Synapse", "BigQuery"],
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Business Intelligence & Reporting",
    description: "Dashboards and self-service analytics built on governed metric definitions, so the same question returns the same number.",
    capabilities: [
      "Executive dashboards",
      "Self-service analytics",
      "Governed metric definitions",
      "Automated report distribution"
    ],
    metric: "Governed, shared metrics",
    technologies: ["Tableau", "Power BI", "Looker", "Qlik"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Stream Processing",
    description: "Event-driven processing for cases where a daily batch is too late — monitoring, alerting and continuously updated views.",
    capabilities: [
      "Event stream processing",
      "Continuous aggregation",
      "Live dashboard updates",
      "Threshold and anomaly alerting"
    ],
    metric: "Event-driven, not batch-bound",
    technologies: ["Apache Kafka", "Apache Flink", "Redis", "ClickHouse"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Data Governance & Security",
    description: "Cataloguing, lineage and access control applied as part of the platform rather than retrofitted for an audit.",
    capabilities: [
      "Data lineage tracking",
      "Cataloguing and ownership",
      "Role-based access control",
      "Privacy controls for GDPR and sector rules"
    ],
    metric: "Governance built into the platform",
    technologies: ["Apache Atlas", "Collibra", "Alation", "DataHub"],
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }
]

const engagementScenarios = [
  {
    client: "Retail & distribution",
    challenge: "Data siloed across stores and systems, with delayed reporting",
    solution: "Centralised lakehouse with streaming ingestion and a governed BI layer",
    results: [
      "Unified view across sales channels",
      "Near real-time inventory reporting",
      "Self-service analytics for business teams"
    ]
  },
  {
    client: "Healthcare providers",
    challenge: "Patient data scattered across multiple systems",
    solution: "Governed data warehouse with a modelled reporting layer",
    results: [
      "Consolidated patient record model",
      "Role-based access and audit logging",
      "Architecture aligned to HIPAA safeguards"
    ]
  },
  {
    client: "Financial services",
    challenge: "Manual risk analysis taking weeks to complete",
    solution: "Automated scoring pipeline with monitoring and review workflow",
    results: [
      "Automated scoring on new applications",
      "Model monitoring and drift detection",
      "Explainable outputs for review teams"
    ]
  }
]

/* ── Component ────────────────────────────────────── */

const DataEngineeringAnalytics = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Data Engineering & Analytics"
        title="Data your teams can actually rely on."
        lede="Pipelines, lakehouse architecture, governed reporting and stream processing — built so the numbers hold up when a decision depends on them."
        primaryCta={{ label: 'Get Data Strategy Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {keyCapabilities.map((item) => (
            <motion.div
              key={item.label}
              className="ys-card-light"
              style={{ padding: '28px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--ys-ink)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '10px'
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '6px'
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--ys-ink-muted)' }}>
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Solutions */}
      <PageSection
        tone="light"
        eyebrow="What we deliver"
        title="The data platform, end to end."
        lede="From ingestion through to the reporting layer, with governance applied as the platform is built rather than after."
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              className="ys-card-light"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--ys-surface-alt)',
                  border: '1px solid var(--ys-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  flexShrink: 0
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={solution.iconPath} />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px'
                }}
              >
                {solution.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '24px'
                }}
              >
                {solution.description}
              </p>

              {/* Capabilities */}
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {solution.capabilities.map((cap) => (
                  <div
                    key={cap}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: summary + tech tags */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--ys-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--ys-link-on-light)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {solution.metric}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {solution.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--ys-ink-body)',
                        background: 'var(--ys-surface)',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid var(--ys-border)',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Engagement scenarios */}
      <PageSection
        tone="white"
        eyebrow="Where we apply it"
        title="Common data engagement scenarios."
        lede="Typical data problems we take on, and how each platform is put together."
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {engagementScenarios.map((study) => (
            <motion.div
              key={study.client}
              className="ys-card-light"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
              }}
            >
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--ys-ink-muted)',
                  marginBottom: '16px'
                }}
              >
                {study.client}
              </p>

              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}
              >
                {study.challenge}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '28px'
                }}
              >
                {study.solution}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--ys-border)' }}>
                {study.results.map((result) => (
                  <div
                    key={result}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M4 8l3.5 3.5L12 4" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* What the assessment includes */}
      <PageSection tone="light" eyebrow="What the assessment includes">
        <div className="flex flex-wrap" style={{ gap: '16px 24px' }}>
          {[
            "Free data strategy consultation",
            "Custom analytics roadmap",
            "Business case support",
            "Proof-of-concept available"
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
                <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)' }}>{item}</span>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA — Deep Blue */}
      <PageCTA
        title="Ready to put your data to work?"
        body="Get a data maturity assessment and see how a modern platform would change what your teams can ask of their data."
        primaryCta={{ label: 'Get Data Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'Book Analytics Demo', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}

export default DataEngineeringAnalytics
