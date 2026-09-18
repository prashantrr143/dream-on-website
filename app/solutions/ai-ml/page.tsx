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

const heroStats = [
  { value: "LLM", label: "Generative AI", sub: "RAG, fine-tuning and agent workflows" },
  { value: "MLOps", label: "Model lifecycle", sub: "Training, deployment and monitoring" },
  { value: "RAG", label: "Grounded retrieval", sub: "Answers tied to your own data" },
  { value: "Eval", label: "Accuracy testing", sub: "Benchmarking before you go live" }
]

const aiCapabilities = [
  {
    title: "Generative AI",
    description: "Large language models, custom fine-tuning, multimodal AI, and retrieval-augmented generation for production systems.",
    capabilities: [
      "Large Language Model (LLM) integration",
      "Custom GPT model fine-tuning",
      "Multimodal AI (text + image + voice)",
      "Retrieval-Augmented Generation (RAG)"
    ],
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: "Machine Learning",
    description: "Deep learning model development, AutoML pipelines, real-time inference, and MLOps for governed, production-grade systems.",
    capabilities: [
      "Deep learning model development",
      "AutoML pipeline creation",
      "Real-time ML inference",
      "MLOps & model governance"
    ],
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  {
    title: "Data Science",
    description: "Advanced analytics platforms, statistical modeling, A/B testing frameworks, and business intelligence integration.",
    capabilities: [
      "Advanced analytics platforms",
      "Statistical modeling",
      "A/B testing frameworks",
      "Business intelligence integration"
    ],
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  }
]

const solutions = [
  {
    title: "Intelligent Document Processing",
    description: "Transform unstructured documents into actionable insights with AI-powered extraction, classification, and analysis.",
    useCases: ["Contract analysis & extraction", "Invoice processing automation", "Legal document review", "Regulatory compliance checking"],
    metric: "Automated extraction & classification",
    technologies: ["GPT-4", "Azure Document Intelligence", "LangChain", "PyTorch"],
    isGenAI: true,
    iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  },
  {
    title: "Conversational AI & Chatbots",
    description: "Deploy intelligent virtual assistants that understand context, maintain conversations, and provide human-like interactions.",
    useCases: ["Customer service automation", "Internal helpdesk assistant", "Sales qualification bot", "HR onboarding assistant"],
    metric: "Context-aware virtual assistants",
    technologies: ["OpenAI GPT", "Azure OpenAI", "Rasa", "Dialogflow"],
    isGenAI: true,
    iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  },
  {
    title: "Content Generation & Automation",
    description: "Scale content creation with AI that generates marketing copy, technical documentation, and personalized communications.",
    useCases: ["Marketing content generation", "Technical documentation", "Personalized email campaigns", "Product descriptions at scale"],
    metric: "Scalable content generation",
    technologies: ["GPT-4", "Claude", "Jasper AI", "Copy.ai"],
    isGenAI: true,
    iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  },
  {
    title: "Computer Vision & Image AI",
    description: "Advanced image analysis, object detection, and visual content generation for enhanced business processes.",
    useCases: ["Quality control automation", "Medical image analysis", "Visual content generation", "Security surveillance"],
    metric: "Object detection & visual analysis",
    technologies: ["DALL-E", "Midjourney API", "OpenCV", "TensorFlow Vision"],
    isGenAI: true,
    iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Leverage machine learning to predict trends, optimize operations, and make data-driven business decisions.",
    useCases: ["Demand forecasting", "Customer churn prediction", "Inventory optimization", "Risk assessment modeling"],
    metric: "Forecasting & predictive modelling",
    technologies: ["Prophet", "XGBoost", "TensorFlow", "Scikit-learn"],
    isGenAI: false,
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "AI-Powered Development",
    description: "Accelerate software development with AI code generation, testing automation, and intelligent code review.",
    useCases: ["Automated code generation", "Bug detection & fixing", "Code review automation", "Documentation generation"],
    metric: "AI-assisted engineering workflows",
    technologies: ["GitHub Copilot", "CodeT5", "Amazon CodeWhisperer", "DeepCode"],
    isGenAI: true,
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }
]

const caseStudies = [
  {
    client: "Claims & document workflows",
    challenge: "Manual claims processing taking weeks",
    solution: "AI-powered document analysis with human-in-the-loop review",
    results: ["Automated data extraction from claim documents", "Anomaly flagging for fraud review", "Audit trail for every automated decision"],
    tag: "Generative AI + ML"
  },
  {
    client: "Customer service operations",
    challenge: "Support volumes outgrowing the team",
    solution: "Conversational AI grounded in your own knowledge base",
    results: ["Assistants that answer from approved content", "Escalation paths to human agents", "Multilingual coverage across channels"],
    tag: "Generative AI"
  },
  {
    client: "Quality & inspection processes",
    challenge: "Inconsistent manual quality control",
    solution: "Computer vision models with condition monitoring",
    results: ["Automated visual defect detection", "Predictive maintenance signals", "Model performance monitored in production"],
    tag: "Computer Vision + ML"
  }
]

/* ── Component ────────────────────────────────────── */

const AIMachineLearning = () => {
  return (
    <SharedLayout>
      {/* ── Hero — Deep Blue ── */}
      <PageHero
        eyebrow="AI & Machine Learning"
        title="Enterprise AI, built for production."
        lede="Production-grade generative AI, machine learning, and data science — built for regulated environments where accuracy and governance aren't optional."
        primaryCta={{ label: 'Get AI Strategy Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'How we work', href: '/how-we-work' }}
      />

      {/* ── At a glance ── */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
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
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ys-link-on-light)', marginBottom: '6px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--ys-ink-muted)' }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── AI Capabilities ── */}
      <PageSection
        tone="light"
        eyebrow="Core capabilities"
        title="Three pillars of AI expertise."
        lede="Spanning generative AI, machine learning, and data science — each built for production."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {aiCapabilities.map((cap, index) => (
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
                  marginBottom: '24px'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={cap.iconPath} />
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
                {cap.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '24px'
                }}
              >
                {cap.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--ys-border)' }}>
                {cap.capabilities.map((item) => (
                  <div
                    key={item}
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
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── Solutions Grid ── */}
      <PageSection
        tone="white"
        eyebrow="What we deliver"
        title="Production-ready AI solutions."
        lede="Enterprise-scale AI built for accuracy, governance, and maintainability."
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
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                minWidth: 0
              }}
            >
              {/* Header: icon + gen-AI tag */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '24px' }}>
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
                    flexShrink: 0
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={solution.iconPath} />
                  </svg>
                </div>
                {solution.isGenAI && (
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--ys-link-on-light)',
                      background: 'var(--ys-surface-alt)',
                      border: '1px solid var(--ys-border)',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Gen AI
                  </span>
                )}
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

              {/* Use cases */}
              <div style={{ marginBottom: '24px', flex: 1 }}>
                {solution.useCases.map((uc) => (
                  <div
                    key={uc}
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
                    <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)', lineHeight: 1.5 }}>{uc}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: metric + tech */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid var(--ys-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ys-link-on-light)', letterSpacing: '-0.01em' }}>
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
                        background: 'var(--ys-surface-alt)',
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

      {/* ── Case Studies ── */}
      <PageSection
        tone="light"
        eyebrow="Where we apply it"
        title="Common AI application scenarios."
        lede="Typical problems our AI engagements address, and what each solution is built to do."
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
              {/* Tag + client */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--ys-ink-muted)'
                  }}
                >
                  {study.client}
                </p>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--ys-ink-muted)',
                    background: 'var(--ys-surface-alt)',
                    border: '1px solid var(--ys-border)',
                    padding: '3px 8px',
                    borderRadius: '100px',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {study.tag}
                </span>
              </div>

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

      {/* ── What an assessment covers ── */}
      <PageSection tone="white" eyebrow="What an assessment covers">
        <div
          className="flex flex-wrap"
          style={{ gap: '16px 24px' }}
        >
          {["Free AI strategy session", "Custom use case analysis", "Feasibility review", "Implementation roadmap"].map((item) => (
            <div
              key={item}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
                <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: '14px', color: 'var(--ys-ink-body)' }}>{item}</span>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ── CTA — Deep Blue ── */}
      <PageCTA
        title="Ready to unlock AI's potential?"
        body="Get a comprehensive AI readiness assessment and discover how generative AI and machine learning can transform your operations."
        primaryCta={{ label: 'Get AI Assessment', href: '/contact-us' }}
        secondaryCta={{ label: 'Book AI Consultation', href: '/contact-us' }}
      />
    </SharedLayout>
  )
}

export default AIMachineLearning
