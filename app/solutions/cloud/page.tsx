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

const keyMetrics = [
  { value: "60%", label: "Cost Reduction", sub: "Average infrastructure savings" },
  { value: "99.9%", label: "Uptime SLA", sub: "Enterprise-grade reliability" },
  { value: "10x", label: "Faster Scaling", sub: "Auto-scaling capabilities" },
  { value: "30", label: "Day Migration", sub: "Complete infrastructure move" }
]

const solutions = [
  {
    title: "Cloud Migration & Modernization",
    description: "Seamlessly migrate your existing infrastructure to cloud-native solutions with zero downtime and enhanced performance.",
    capabilities: [
      "Legacy system modernization",
      "Hybrid cloud deployment",
      "Application containerization",
      "Database migration & optimization"
    ],
    technologies: ["AWS", "Azure", "Kubernetes", "Docker"],
    metric: "45% cost reduction",
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
    metric: "100% compliance rate",
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
    metric: "10x faster insights",
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
    metric: "90% faster deployments",
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
    metric: "40% cost optimization",
    iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
  }
]

const caseStudies = [
  {
    client: "Fortune 500 Retailer",
    challenge: "Scaling e-commerce during peak seasons",
    solution: "Auto-scaling cloud infrastructure with multi-region failover",
    results: ["99.9% uptime during Black Friday", "10x traffic handling capability", "50% infrastructure cost reduction"]
  },
  {
    client: "Global Financial Services",
    challenge: "Regulatory compliance & security across 12 markets",
    solution: "Zero-trust cloud architecture with automated compliance",
    results: ["100% SOC2 compliance maintained", "Zero security breaches in 3 years", "60% faster audit processes"]
  },
  {
    client: "Healthcare Technology",
    challenge: "HIPAA-compliant data processing at scale",
    solution: "Secure cloud data platform with end-to-end encryption",
    results: ["HIPAA compliance certified", "Real-time patient data insights", "40% faster diagnosis workflows"]
  }
]

const CloudInfrastructure = () => {
  return (
    <SharedLayout>
      {/* Hero — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          backgroundColor: '#0A2540'
        }}
      >
        {/* Background accents */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '600px',
            height: '600px',
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
            bottom: '0',
            left: '10%',
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
                color: '#635BFF',
                marginBottom: '24px'
              }}
            >
              Cloud Infrastructure
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
              Enterprise cloud infrastructure built for scale.
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
              Transform your infrastructure with cloud solutions that deliver unmatched performance, security, and cost efficiency — engineered for organizations where downtime isn&apos;t an option.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
              <Link href="/contact-us" className="stripe-btn-light group">
                Get Architecture Assessment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link href="/case-studies" className="stripe-btn-ghost">
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* Key metrics row */}
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
            {keyMetrics.map((metric) => (
              <div
                key={metric.label}
                style={{
                  padding: '32px',
                  backgroundColor: 'rgba(10, 37, 64, 0.95)',
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
                  {metric.value}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#635BFF',
                    marginBottom: '4px'
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.4)',
                  }}
                >
                  {metric.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions — White bg */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'white' }}>
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
                color: '#635BFF',
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
                color: '#0A2540',
                marginBottom: '20px'
              }}
            >
              Comprehensive cloud solutions.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#425466',
                maxWidth: '520px'
              }}
            >
              End-to-end infrastructure solutions designed for enterprise scale, security, and performance.
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
                  backgroundColor: '#F6F9FC',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(10, 37, 64, 0.08)' }}
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={solution.iconPath} />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0A2540',
                    marginBottom: '12px'
                  }}
                >
                  {solution.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#425466',
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
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#425466', lineHeight: 1.5 }}>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom: metric + tech tags */}
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(10, 37, 64, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#635BFF',
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
                          color: '#0A2540',
                          backgroundColor: 'white',
                          padding: '4px 10px',
                          borderRadius: '100px',
                          border: '1px solid rgba(10, 37, 64, 0.08)',
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

      {/* Case Studies — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '120px',
          backgroundColor: '#0A2540'
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
                color: '#635BFF',
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
              Real-world cloud transformations.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              Success stories from enterprises that trusted us to modernize their infrastructure.
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
                {/* Client name */}
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#635BFF',
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

                {/* Results */}
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

      {/* Process Section — Off-white bg */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F6F9FC' }}>
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
                color: '#635BFF',
                marginBottom: '20px'
              }}
            >
              Our process
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#0A2540',
                marginBottom: '20px'
              }}
            >
              From assessment to production in weeks, not months.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '32px'
            }}
            className="max-md:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {[
              { step: "01", title: "Discover", desc: "Deep-dive assessment of your current infrastructure, workloads, dependencies, and performance baseline." },
              { step: "02", title: "Architect", desc: "Design a cloud-native architecture tailored to your compliance, performance, and cost requirements." },
              { step: "03", title: "Migrate", desc: "Phased migration with zero-downtime cutover, automated testing, and rollback strategies at every step." },
              { step: "04", title: "Optimize", desc: "Continuous monitoring, cost optimization, and performance tuning to maximize your cloud investment." }
            ].map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.06)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: 'rgba(99, 91, 255, 0.1)',
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
                    color: '#0A2540',
                    marginBottom: '12px'
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#425466'
                  }}
                >
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px',
          backgroundColor: '#0A2540'
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
            Ready to transform your infrastructure?
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
            Get a free cloud architecture assessment and discover how we can optimize your infrastructure for performance, security, and cost efficiency.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px', marginBottom: '40px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Get Free Assessment
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/contact-us" className="stripe-btn-ghost">
              Schedule Consultation
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center"
            style={{ gap: '24px' }}
          >
            {["Free 30-min consultation", "Custom architecture blueprint", "ROI analysis included", "No obligation"].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export default CloudInfrastructure
