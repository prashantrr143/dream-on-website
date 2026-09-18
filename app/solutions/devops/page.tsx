"use client"

import { motion, type Variants } from 'framer-motion'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

/* ── Data ─────────────────────────────────────────── */

const keyCapabilities = [
  { value: "CI/CD", label: "Automated pipelines", sub: "Build, test and release automation" },
  { value: "IaC", label: "Infrastructure as code", sub: "Versioned, repeatable environments" },
  { value: "K8s", label: "Container platforms", sub: "Orchestration and auto-scaling" },
  { value: "Obs", label: "Observability", sub: "Metrics, logs, traces and alerting" }
]

const solutions = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Build, test and release pipelines with quality gates at each promotion and a defined rollback path.",
    capabilities: [
      "Automated build and test pipelines",
      "Multi-environment promotion",
      "Quality gate enforcement",
      "Automated rollback strategies"
    ],
    metric: "Commit to production, automated",
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"],
    iconPath: "M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"
  },
  {
    title: "Infrastructure as Code",
    description: "Environments defined in version control, so provisioning is reviewable, repeatable and recoverable.",
    capabilities: [
      "Environment provisioning",
      "Infrastructure versioning",
      "Configuration management",
      "Disaster recovery automation"
    ],
    metric: "Repeatable environment provisioning",
    technologies: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Monitoring & Observability",
    description: "Metrics, logs and traces unified behind actionable alerts, with load testing and capacity planning to size ahead of demand.",
    capabilities: [
      "Application performance monitoring",
      "Infrastructure health tracking",
      "Log aggregation and analysis",
      "Load testing and capacity planning"
    ],
    metric: "End-to-end observability",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "K6"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes platforms with scaling policies, service-to-service networking and progressive delivery patterns.",
    capabilities: [
      "Container orchestration",
      "Auto-scaling policies",
      "Service mesh implementation",
      "Blue-green and canary releases"
    ],
    metric: "Progressive delivery by default",
    technologies: ["Kubernetes", "Docker", "Istio", "Helm"],
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    title: "Pipeline Security",
    description: "Scanning, policy checks and secrets handling run inside the pipeline rather than as a separate review step.",
    capabilities: [
      "SAST, DAST and dependency scanning",
      "Policy-as-code enforcement",
      "Secrets management and rotation",
      "Audit-ready pipeline evidence"
    ],
    metric: "Security checks in the pipeline",
    technologies: ["SonarQube", "HashiCorp Vault", "OWASP ZAP", "Snyk"],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
]

const engagementScenarios = [
  {
    client: "SaaS platforms",
    challenge: "Manual deployments causing frequent outages",
    solution: "Automated CI/CD with blue-green deployments and defined rollback paths",
    results: [
      "Blue-green and canary release patterns",
      "Automated rollback on failed health checks",
      "Quality gates before every promotion"
    ]
  },
  {
    client: "E-commerce & marketplaces",
    challenge: "Scaling infrastructure during peak traffic",
    solution: "Kubernetes auto-scaling with monitoring and capacity planning",
    results: [
      "Horizontal pod and node auto-scaling",
      "Cost visibility through resource tagging",
      "Load testing ahead of peak periods"
    ]
  },
  {
    client: "Financial technology",
    challenge: "Complex compliance and security requirements",
    solution: "Automated security scanning and continuous policy checks across environments",
    results: [
      "SAST, DAST and dependency scanning in CI",
      "Secrets management and rotation",
      "Audit-ready pipeline evidence"
    ]
  }
]

/* ── Component ────────────────────────────────────── */

const DevOpsAutomation = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="DevOps & Automation"
        title="Ship faster without breaking things."
        lede="Automated pipelines, infrastructure as code and observability — engineered to take manual steps and guesswork out of your release process."
        primaryCta={{ label: 'Get DevOps Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {keyCapabilities.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
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
        title="The delivery pipeline, end to end."
        lede="Automation that carries a change from commit to production, with the controls and visibility to run it safely."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={fadeUp}
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
        title="Common DevOps engagement scenarios."
        lede="Typical delivery problems we take on, and the practices we put in place for each."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {engagementScenarios.map((study) => (
            <motion.div
              key={study.client}
              variants={fadeUp}
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
            "Free maturity assessment",
            "Custom automation roadmap",
            "Tooling recommendations",
            "No long-term commitment"
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
        title="Ready to accelerate your delivery?"
        body="Get a DevOps maturity assessment and see how automated pipelines would change the way your software reaches production."
        primaryCta={{ label: 'Get DevOps Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'Book Strategy Session', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}

export default DevOpsAutomation
