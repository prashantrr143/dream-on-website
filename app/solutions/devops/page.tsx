"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { ArrowRight } from 'lucide-react'

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

const heroStats = [
  { value: "90%", label: "Faster Deployments", sub: "Automated CI/CD pipelines" },
  { value: "99.5%", label: "Deployment Success", sub: "Reliable automated releases" },
  { value: "70%", label: "Cost Reduction", sub: "Infrastructure optimization" },
  { value: "5x", label: "Developer Velocity", sub: "Streamlined workflows" }
]

const solutions = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Complete continuous integration and deployment pipelines with automated testing, quality gates, and rollback capabilities.",
    capabilities: ["Automated build & test pipelines", "Multi-environment deployments", "Quality gate enforcement", "Automated rollback strategies"],
    metric: "90% faster deployments",
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"],
    iconPath: "M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9"
  },
  {
    title: "Infrastructure as Code",
    description: "Version-controlled, automated infrastructure provisioning with consistent environments and disaster recovery.",
    capabilities: ["Environment provisioning", "Infrastructure versioning", "Disaster recovery automation", "Configuration management"],
    metric: "10x faster provisioning",
    technologies: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  },
  {
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring, logging, and alerting systems with real-time insights and predictive analytics.",
    capabilities: ["Application performance monitoring", "Infrastructure health tracking", "Log aggregation & analysis", "Predictive alerting"],
    metric: "75% faster resolution",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: "Security & Compliance Automation",
    description: "Automated security scanning, compliance checks, and vulnerability management integrated into development workflows.",
    capabilities: ["Security scanning automation", "Compliance policy enforcement", "Vulnerability assessment", "Secret management"],
    metric: "100% automated scans",
    technologies: ["SonarQube", "HashiCorp Vault", "OWASP ZAP", "Snyk"],
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes-based container orchestration with auto-scaling, service mesh, and advanced deployment strategies.",
    capabilities: ["Container orchestration", "Auto-scaling policies", "Service mesh implementation", "Blue-green deployments"],
    metric: "Zero-downtime deploys",
    technologies: ["Kubernetes", "Docker", "Istio", "Helm"],
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
  },
  {
    title: "Performance Optimization",
    description: "Application and infrastructure performance optimization with automated load testing and capacity planning.",
    capabilities: ["Automated load testing", "Performance benchmarking", "Capacity planning", "Resource optimization"],
    metric: "50% faster response",
    technologies: ["JMeter", "K6", "New Relic", "AppDynamics"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  }
]

const caseStudies = [
  {
    client: "SaaS Platform Provider",
    challenge: "Manual deployments causing frequent outages",
    solution: "Automated CI/CD with blue-green deployments and comprehensive rollback strategies",
    results: ["Zero-downtime deployments achieved", "95% reduction in deployment failures", "10x faster feature delivery"]
  },
  {
    client: "E-commerce Marketplace",
    challenge: "Scaling infrastructure during peak traffic",
    solution: "Kubernetes auto-scaling with real-time monitoring and predictive capacity planning",
    results: ["Automatic traffic scaling", "60% reduction in infrastructure costs", "99.9% uptime during peak seasons"]
  },
  {
    client: "Financial Technology",
    challenge: "Complex compliance and security requirements",
    solution: "Automated security scanning and continuous compliance monitoring across all environments",
    results: ["100% automated security compliance", "SOC2 Type II certification", "80% faster security audits"]
  }
]

/* ── Component ────────────────────────────────────── */

const DevOpsAutomation = () => {
  return (
    <SharedLayout>
      {/* ── Hero — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '-8%',
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.12), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(46, 196, 182, 0.08), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ maxWidth: '720px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '24px'
              }}
            >
              DevOps &amp; Automation
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: 'white',
                marginBottom: '24px'
              }}
            >
              Ship faster without breaking things.
            </h1>
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '560px',
                marginBottom: '40px'
              }}
            >
              Enterprise-grade DevOps practices, automated pipelines, and intelligent monitoring — engineered to reduce deployment time by 90% and eliminate manual errors.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
              <Link href="/contact-us" className="stripe-btn-light group">
                Get DevOps Assessment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link href="/case-studies" className="stripe-btn-ghost">
                View Success Stories
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              marginTop: '80px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              overflow: 'hidden'
            }}
            className="max-md:!grid-cols-2"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '32px',
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#8b84ff', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Solutions — White ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000000' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              What we deliver
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              The complete DevOps ecosystem.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '520px'
              }}
            >
              End-to-end automation that transforms your development lifecycle from commit to production.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '24px'
            }}
            className="max-sm:!grid-cols-1"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '36px',
                  backgroundColor: '#0a0a0f',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(255, 255, 255, 0.08)' }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(99, 91, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={solution.iconPath} />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '12px'
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.7)',
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom: metric + tech */}
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b84ff', letterSpacing: '-0.01em' }}>
                    {solution.metric}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {solution.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: 'white',
                          backgroundColor: '#000000',
                          padding: '4px 10px',
                          borderRadius: '100px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
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
        </motion.div>
      </section>

      {/* ── Case Studies — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.1), transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Proven results
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              DevOps transformations that delivered.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              Real-world outcomes from teams that accelerated their delivery with our DevOps practices.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b84ff',
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
                    color: 'white',
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
                    color: 'rgba(255, 255, 255, 0.45)',
                    marginBottom: '28px'
                  }}
                >
                  {study.solution}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M4 8l3.5 3.5L12 4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.08), transparent 60%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1, textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '20px'
            }}
          >
            Ready to accelerate your delivery?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.55)',
              marginBottom: '40px',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Get a comprehensive DevOps maturity assessment and discover how automated pipelines can transform your software delivery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px', marginBottom: '40px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Get DevOps Assessment
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/contact-us" className="stripe-btn-ghost">
              Book Strategy Session
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center"
            style={{ gap: '24px' }}
          >
            {["Free maturity assessment", "Custom automation roadmap", "ROI calculation included", "No long-term commitment"].map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}

export default DevOpsAutomation
