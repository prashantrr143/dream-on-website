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
  { value: "300%", label: "ROI Increase", sub: "Average return on AI investment" },
  { value: "80%", label: "Time Savings", sub: "Automated task completion" },
  { value: "45%", label: "Productivity Gain", sub: "Employee efficiency improvement" },
  { value: "95%", label: "Accuracy Rate", sub: "ML model performance" }
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
    metric: "10x faster processing",
    technologies: ["GPT-4", "Azure Document Intelligence", "LangChain", "PyTorch"],
    isGenAI: true,
    iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  },
  {
    title: "Conversational AI & Chatbots",
    description: "Deploy intelligent virtual assistants that understand context, maintain conversations, and provide human-like interactions.",
    useCases: ["Customer service automation", "Internal helpdesk assistant", "Sales qualification bot", "HR onboarding assistant"],
    metric: "85% satisfaction rate",
    technologies: ["OpenAI GPT", "Azure OpenAI", "Rasa", "Dialogflow"],
    isGenAI: true,
    iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  },
  {
    title: "Content Generation & Automation",
    description: "Scale content creation with AI that generates marketing copy, technical documentation, and personalized communications.",
    useCases: ["Marketing content generation", "Technical documentation", "Personalized email campaigns", "Product descriptions at scale"],
    metric: "10x content speed",
    technologies: ["GPT-4", "Claude", "Jasper AI", "Copy.ai"],
    isGenAI: true,
    iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  },
  {
    title: "Computer Vision & Image AI",
    description: "Advanced image analysis, object detection, and visual content generation for enhanced business processes.",
    useCases: ["Quality control automation", "Medical image analysis", "Visual content generation", "Security surveillance"],
    metric: "99.5% defect detection",
    technologies: ["DALL-E", "Midjourney API", "OpenCV", "TensorFlow Vision"],
    isGenAI: true,
    iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Predictive Analytics & Forecasting",
    description: "Leverage machine learning to predict trends, optimize operations, and make data-driven business decisions.",
    useCases: ["Demand forecasting", "Customer churn prediction", "Inventory optimization", "Risk assessment modeling"],
    metric: "92% prediction accuracy",
    technologies: ["Prophet", "XGBoost", "TensorFlow", "Scikit-learn"],
    isGenAI: false,
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "AI-Powered Development",
    description: "Accelerate software development with AI code generation, testing automation, and intelligent code review.",
    useCases: ["Automated code generation", "Bug detection & fixing", "Code review automation", "Documentation generation"],
    metric: "50% faster development",
    technologies: ["GitHub Copilot", "CodeT5", "Amazon CodeWhisperer", "DeepCode"],
    isGenAI: true,
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }
]

const caseStudies = [
  {
    client: "Global Insurance Leader",
    challenge: "Manual claims processing taking weeks",
    solution: "AI-powered document analysis & fraud detection",
    results: ["95% faster claims processing", "60% fraud detection improvement", "$50M annual savings"],
    tag: "Generative AI + ML"
  },
  {
    client: "Fortune 500 Retailer",
    challenge: "Customer service scaling issues",
    solution: "Conversational AI with GPT-4 integration",
    results: ["85% of queries automated", "40% cost reduction", "24/7 multilingual support"],
    tag: "Generative AI"
  },
  {
    client: "Manufacturing Giant",
    challenge: "Quality control inconsistencies",
    solution: "Computer vision with predictive maintenance",
    results: ["99.8% defect detection rate", "30% reduction in downtime", "25% quality improvement"],
    tag: "Computer Vision + ML"
  }
]

/* ── Component ────────────────────────────────────── */

const AIMachineLearning = () => {
  return (
    <SharedLayout>
      {/* ── Hero — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          backgroundColor: '#0A2540'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '-8%',
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.14), transparent 60%)',
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
                color: '#635BFF',
                marginBottom: '24px'
              }}
            >
              AI &amp; Machine Learning
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
              Enterprise AI that drives real outcomes.
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
              Production-grade generative AI, machine learning, and data science — built for regulated environments where accuracy and governance aren&apos;t optional.
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '16px' }}>
              <Link href="/contact-us" className="stripe-btn-light group">
                Get AI Strategy Assessment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
              <Link href="/case-studies" className="stripe-btn-ghost">
                Explore Use Cases
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
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#635BFF', marginBottom: '4px' }}>
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

      {/* ── AI Capabilities — Off-white ── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#F6F9FC' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', textAlign: 'center' }}>
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
              Core capabilities
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
              Three pillars of AI expertise.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#425466',
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Spanning generative AI, machine learning, and data science — each built for production.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
            className="max-md:!grid-cols-1"
          >
            {aiCapabilities.map((cap, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '36px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.06)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(10, 37, 64, 0.08)' }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(99, 91, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={cap.iconPath} />
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
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#425466',
                    marginBottom: '24px'
                  }}
                >
                  {cap.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(10, 37, 64, 0.06)' }}>
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#425466', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Solutions Grid — White ── */}
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
              Production-ready AI solutions.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#425466',
                maxWidth: '520px'
              }}
            >
              Enterprise-scale AI built for accuracy, governance, and measurable business impact.
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
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(10, 37, 64, 0.08)' }}
              >
                {/* Header: icon + gen-AI tag */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(99, 91, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={solution.iconPath} />
                    </svg>
                  </div>
                  {solution.isGenAI && (
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#635BFF',
                        backgroundColor: 'rgba(99, 91, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase'
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
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '14px', color: '#425466', lineHeight: 1.5 }}>{uc}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom: metric + tech */}
                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(10, 37, 64, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#635BFF', letterSpacing: '-0.01em' }}>
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

      {/* ── Case Studies — Dark Navy ── */}
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
              AI transformations that delivered.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              Real-world outcomes from enterprises that trusted us with their AI initiatives.
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
                {/* Tag + client */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#635BFF'
                    }}
                  >
                    {study.client}
                  </p>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      padding: '3px 8px',
                      borderRadius: '100px',
                      letterSpacing: '0.02em'
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

      {/* ── CTA — Dark Navy ── */}
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
            Ready to unlock AI&apos;s potential?
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
            Get a comprehensive AI readiness assessment and discover how generative AI and machine learning can transform your operations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px', marginBottom: '40px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Get AI Assessment
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/contact-us" className="stripe-btn-ghost">
              Book AI Consultation
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center"
            style={{ gap: '24px' }}
          >
            {["Free AI strategy session", "Custom use case analysis", "ROI projection included", "Implementation roadmap"].map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
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

export default AIMachineLearning
