"use client"

import { motion } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



/* ── Data ─────────────────────────────────────────── */

const SITUATIONS = [
  {
    quote: 'We have the data but can’t get a straight answer out of it.',
    body: 'Every team pulls its own extract. The same question returns three different numbers in three different meetings.',
  },
  {
    quote: 'Month-end reporting is a spreadsheet marathon.',
    body: 'Analysts spend days reconciling instead of analyzing, and nobody trusts a figure they didn’t build themselves.',
  },
  {
    quote: 'We can’t say where this number came from.',
    body: 'An auditor or a client asks for lineage, and the only answer is a person who has since left.',
  },
]

const SERVICES = [
  {
    title: 'Lakehouse platform',
    body: 'One platform on Microsoft Fabric or Databricks, with storage and compute designed around how your data is actually queried. If you already run Snowflake, we build on it.',
    gets: [
      'A lakehouse on Microsoft Fabric or Databricks',
      'Data models and owners defined up front',
      'Compute sized and costed to real use',
    ],
  },
  {
    title: 'Data pipelines',
    body: 'Batch and streaming pipelines with validation, retry and lineage built in, so the teams downstream can trust what lands.',
    gets: [
      'Pipelines in Data Factory or Fabric',
      'Quality checks on every load',
      'Loads that can be re-run safely, with alerting',
    ],
  },
  {
    title: 'Governed reporting',
    body: 'Power BI on shared metric definitions, so the same question returns the same number for everyone who asks it.',
    gets: [
      'A governed semantic model',
      'Executive and team dashboards',
      'Row-level security by role',
    ],
  },
  {
    title: 'Governance and lineage',
    body: 'Cataloging, lineage and access control with Microsoft Purview, applied as the platform is built rather than retrofitted for an audit.',
    gets: [
      'A data catalog with named owners',
      'Lineage from source system to report',
      'Privacy controls for GDPR and sector rules',
    ],
  },
]

const SCENARIOS = [
  {
    tag: 'Financial services',
    problem: 'Risk reporting is assembled by hand.',
    approach: 'Automated pipelines into a governed model, with a review step for the figures that matter most.',
    points: [
      'Reconciled data from source systems',
      'Lineage for every reported figure',
      'Review and sign-off before publication',
    ],
  },
  {
    tag: 'Legal & professional services',
    problem: 'Practice data lives in too many systems.',
    approach: 'One governed reporting layer across finance and practice systems.',
    points: [
      'Shared definitions for key metrics',
      'Access scoped by role',
      'Reports teams can refresh themselves',
    ],
  },
  {
    tag: 'Software & SaaS',
    problem: 'Customers want analytics inside the product.',
    approach: 'Tenant-isolated data models feeding embedded Power BI reports.',
    points: [
      'Data isolated per tenant',
      'Embedded, governed reporting',
      'Compute cost tracked per workload',
    ],
  },
]

const CORE_STACK = [
  'Microsoft Fabric',
  'Azure Databricks',
  'Microsoft Purview',
  'Power BI',
  'Azure Data Factory',
  'Azure Data Lake Storage',
  'Azure SQL',
  'dbt',
]

const ALSO_STACK = ['Snowflake', 'AWS', 'Google Cloud', 'Apache Kafka', 'Apache Airflow', 'Tableau']

/* ── Helpers ──────────────────────────────────────── */

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '3px', flexShrink: 0 }} aria-hidden="true">
      <path d="M4 8l3.5 3.5L12 4" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TickList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <Tick />
          <span style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--ys-ink-body)' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((chip) => (
        <li
          key={chip}
          style={{
            padding: '5px 11px',
            borderRadius: '6px',
            background: 'var(--ys-surface-alt)',
            border: '1px solid var(--ys-border)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--ys-ink-body)',
          }}
        >
          {chip}
        </li>
      ))}
    </ul>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--ys-ink-muted)',
  marginBottom: '10px',
}

/* ── Component ────────────────────────────────────── */

const DataEngineeringAnalytics = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Data & Analytics"
        title="One version of the numbers, on a platform you can govern."
        lede="Microsoft Fabric, Databricks and Purview on Azure, built so the figures hold up when a decision, a regulator or a client depends on them."
        visual="lanes"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      {/* ── 2. Situations ── */}
      <PageSection tone="white" eyebrow="Where teams get stuck" title="Three situations we get called into.">
        <motion.div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {SITUATIONS.map((s) => (
            <motion.div key={s.quote} className="ys-card-light" style={{ padding: '28px', minWidth: 0 }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35, color: 'var(--ys-ink)', marginBottom: '12px', textWrap: 'pretty' }}>
                &ldquo;{s.quote}&rdquo;
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', maxWidth: '62ch' }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 3. Services ── */}
      <PageSection
        tone="light"
        eyebrow="What we do"
        title="From source system to the board pack."
        lede="Ingestion, modeling, reporting and governance on Microsoft Azure, with governance applied as the platform is built."
      >
        <motion.div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '20px' }}>
          {SERVICES.map((service) => (
            <motion.div key={service.title} className="ys-card-light" style={{ padding: '32px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--ys-ink)', marginBottom: '12px' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', marginBottom: '22px', maxWidth: '62ch' }}>
                {service.body}
              </p>
              <p style={labelStyle}>You get</p>
              <TickList items={service.gets} />
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 4. Scenarios ── */}
      <PageSection tone="white" eyebrow="Where we apply it" title="Typical problems, and how the platform is put together.">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '20px' }}>
          {SCENARIOS.map((scenario) => (
            <motion.div key={scenario.tag} className="ys-card-light" style={{ padding: '30px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ys-link-on-light)', marginBottom: '14px' }}>
                {scenario.tag}
              </p>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35, color: 'var(--ys-ink)', marginBottom: '10px', textWrap: 'pretty' }}>
                {scenario.problem}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--ys-ink-body)', marginBottom: '20px', maxWidth: '62ch' }}>
                {scenario.approach}
              </p>
              <TickList items={scenario.points} />
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 5. Stack ── */}
      <PageSection
        tone="light"
        eyebrow="Technology"
        title="Azure-first, by design."
        lede="Microsoft Azure is our specialism, with Fabric, Databricks and Purview at the core. If your data already lives on Snowflake, AWS or Google Cloud, we work there too."
      >
        <motion.div className="ys-card-light" style={{ padding: 'clamp(24px, 3.5vw, 36px)', minWidth: 0 }}>
          <p style={labelStyle}>Core stack</p>
          <Chips items={CORE_STACK} />
          <details style={{ marginTop: '22px', paddingTop: '18px', borderTop: '1px solid var(--ys-border)' }}>
            <summary
              className="ys-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ys-link-on-light)]"
              style={{ cursor: 'pointer', fontSize: '14px' }}
            >
              We also work with
            </summary>
            <div style={{ marginTop: '14px' }}>
              <Chips items={ALSO_STACK} />
            </div>
          </details>
        </motion.div>
      </PageSection>

      {/* ── 6. Closing call to action ── */}
      <PageCTA
        title="Which number does your leadership team argue about?"
        body="Tell us where reporting breaks down. We will tell you what a governed platform would change, and what it would take to get there."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default DataEngineeringAnalytics
