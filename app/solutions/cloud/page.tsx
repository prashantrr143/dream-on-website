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

const keyMetrics = [
  { value: "IaC", label: "Infrastructure as code", sub: "Terraform-managed environments" },
  { value: "HA", label: "Resilient design", sub: "Multi-AZ and failover architecture" },
  { value: "Auto", label: "Elastic scaling", sub: "Capacity that follows demand" },
  { value: "FinOps", label: "Cost visibility", sub: "Tagging, budgets and rightsizing" }
]

const solutions = [
  {
    title: "Cloud Migration & Modernization",
    description: "Seamlessly migrate your existing infrastructure to cloud-native solutions, planned to minimize downtime and risk.",
    capabilities: [
      "Legacy system modernization",
      "Hybrid cloud deployment",
      "Application containerization",
      "Database migration & optimization"
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "Docker"],
    metric: "Phased, low-risk migration",
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security architecture with automated compliance monitoring and real-time threat detection.",
    capabilities: [
      "Zero-trust architecture",
      "SOC2 & ISO27001 automation",
      "Identity & access management",
      "Continuous security monitoring"
    ],
    technologies: ["AWS Security Hub", "Azure Sentinel", "Terraform", "Vault"],
    metric: "Continuous compliance monitoring",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "Data Platform & Analytics",
    description: "Scalable data infrastructure with real-time analytics, ML pipelines, and business intelligence capabilities.",
    capabilities: [
      "Real-time data streaming",
      "ML/AI model deployment",
      "Business intelligence dashboards",
      "Data lake architecture"
    ],
    technologies: ["Snowflake", "Apache Kafka", "Databricks", "Power BI"],
    metric: "Streaming and batch analytics",
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    title: "DevOps & Automation",
    description: "Complete CI/CD pipelines with infrastructure as code, automated testing, and continuous monitoring.",
    capabilities: [
      "CI/CD pipeline automation",
      "Infrastructure as code",
      "Automated testing & deployment",
      "Performance monitoring"
    ],
    technologies: ["Jenkins", "GitLab", "Terraform", "Prometheus"],
    metric: "Automated deployment pipelines",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "Microservices Architecture",
    description: "Transform monolithic applications into scalable microservices with API gateways and service mesh.",
    capabilities: [
      "Monolith decomposition",
      "API gateway implementation",
      "Service mesh deployment",
      "Container orchestration"
    ],
    technologies: ["Kubernetes", "Istio", "Kong", "Consul"],
    metric: "Independent scaling",
    iconPath: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
  },
  {
    title: "Multi-Cloud & Hybrid Solutions",
    description: "Optimize across multiple cloud providers with unified management, cost optimization, and disaster recovery.",
    capabilities: [
      "Multi-cloud strategy",
      "Hybrid cloud integration",
      "Disaster recovery planning",
      "Cost optimization"
    ],
    technologies: ["AWS", "Azure", "GCP", "CloudFormation"],
    metric: "Unified multi-cloud management",
    iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
  }
]

const caseStudies = [
  {
    client: "Retail & e-commerce",
    challenge: "Handling seasonal traffic peaks",
    solution: "Auto-scaling cloud infrastructure with multi-region failover",
    results: ["Horizontal scaling tied to demand", "Multi-region failover design", "Load testing ahead of peak events"]
  },
  {
    client: "Financial services",
    challenge: "Security and regulatory controls across markets",
    solution: "Zero-trust cloud architecture with automated policy checks",
    results: ["Control mapping to SOC 2 and ISO 27001", "Policy-as-code guardrails", "Evidence collection for audits"]
  },
  {
    client: "Healthcare technology",
    challenge: "Handling sensitive data at scale",
    solution: "Secure cloud data platform with end-to-end encryption",
    results: ["Encryption in transit and at rest", "Access control and audit logging", "Architecture aligned to HIPAA safeguards"]
  }
]

const processPhases = [
  { step: "01", title: "Discover", desc: "Deep-dive assessment of your current infrastructure, workloads, dependencies, and performance baseline." },
  { step: "02", title: "Architect", desc: "Design a cloud-native architecture tailored to your compliance, performance, and cost requirements." },
  { step: "03", title: "Migrate", desc: "Phased migration with zero-downtime cutover, automated testing, and rollback strategies at every step." },
  { step: "04", title: "Optimize", desc: "Continuous monitoring, cost optimization, and performance tuning to maximize your cloud investment." }
]

const CloudInfrastructure = () => {
  return (
    <SharedLayout>
      {/* Hero — Deep Blue */}
      <PageHero
        eyebrow="Cloud Infrastructure"
        title="Enterprise cloud infrastructure built for scale."
        lede="Cloud architecture, migration, and platform engineering — designed and built for organizations where reliability, security, and cost control all matter."
        primaryCta={{ label: 'Get Architecture Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* Key metrics */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {keyMetrics.map((metric) => (
            <motion.div
              key={metric.label}
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
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '6px'
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: 'var(--ys-ink-muted)',
                }}
              >
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Solutions */}
      <PageSection
        tone="light"
        eyebrow="What we deliver"
        title="Comprehensive cloud solutions."
        lede="End-to-end infrastructure solutions designed for enterprise scale, security, and performance."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light group"
              style={{
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
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

              {/* Bottom: metric + tech tags */}
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

      {/* Case Studies */}
      <PageSection
        tone="white"
        eyebrow="Where we apply it"
        title="Common cloud engagement scenarios."
        lede="Typical infrastructure problems we take on, and how each is architected."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
              }}
            >
              {/* Client name */}
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

              {/* Challenge */}
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

              {/* Results */}
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

      {/* Process Section */}
      <PageSection
        tone="light"
        eyebrow="Our process"
        title="From assessment to production in weeks, not months."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {processPhases.map((phase) => (
            <motion.div
              key={phase.step}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '32px',
                position: 'relative',
                minWidth: 0
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: 'var(--ys-border)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '20px'
                }}
              >
                {phase.step}
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px'
                }}
              >
                {phase.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)'
                }}
              >
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* What the assessment includes */}
      <PageSection tone="white" eyebrow="What the assessment includes">
        <div className="flex flex-wrap" style={{ gap: '16px 24px' }}>
          {["Free 30-min consultation", "Custom architecture blueprint", "Cost modelling included", "No obligation"].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                minWidth: 0
              }}
            >
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
        title="Ready to transform your infrastructure?"
        body="Get a free cloud architecture assessment and see how your infrastructure could be designed for performance, security, and cost efficiency."
        primaryCta={{ label: 'Get Free Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'Schedule Consultation', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}

export default CloudInfrastructure
