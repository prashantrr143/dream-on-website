"use client"

import { motion, type Variants } from 'framer-motion'
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
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
}

const solutions = [
  {
    title: "Enterprise Software & Platforms",
    description:
      "Reliable platforms at scale — designed for long operational lifetimes, not short-term experiments.",
    href: "/solutions",
    size: "large" as const,
    gradient: "linear-gradient(135deg, #635BFF 0%, #0A2540 100%)",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable cloud foundations across multi-cloud, hybrid, and on-premise environments.",
    href: "/solutions/cloud",
    size: "normal" as const,
    gradient: "linear-gradient(135deg, #11C5DB 0%, #0A2540 100%)",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and operational maturity frameworks.",
    href: "/solutions/devops",
    size: "normal" as const,
    gradient: "linear-gradient(135deg, #3ECF8E 0%, #0A2540 100%)",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: "Data & Analytics",
    description:
      "Governed data platforms and analytics pipelines with compliance and auditability built in.",
    href: "/solutions/data",
    size: "normal" as const,
    gradient: "linear-gradient(135deg, #FF7A00 0%, #0A2540 100%)",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  },
  {
    title: "Applied AI & Machine Learning",
    description:
      "Production-grade AI systems with governance, auditability, and compliance woven in from day one.",
    href: "/solutions/ai-ml",
    size: "normal" as const,
    gradient: "linear-gradient(135deg, #A259FF 0%, #0A2540 100%)",
    iconSvg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V11h3a4 4 0 0 1 4 4v1" />
        <path d="M8 9.4A4 4 0 1 1 14 6" />
        <circle cx="12" cy="18" r="4" />
        <path d="M12 14v-3" />
      </svg>
    )
  }
]

const WorkWeDoSection = () => {
  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundColor: '#0a0a0f'
      }}
    >
      <div className="enterprise-container-wide">
        {/* Section Header — centered, gradient headline, glass pill eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            marginBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Eyebrow pill with live dot */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 14px',
              borderRadius: '999px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              marginBottom: '28px',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'relative',
                display: 'inline-flex',
                width: '6px',
                height: '6px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '9999px',
                  backgroundColor: '#8b84ff',
                  opacity: 0.5,
                  animation: 'live-dot-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: '#8b84ff',
                }}
              />
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              What we build
            </span>
          </div>

          {/* Gradient-clipped headline */}
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: '24px',
              maxWidth: '820px',
              background: 'linear-gradient(144.5deg, #ffffff 28%, rgba(255,255,255,0) 115%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Infrastructure for every critical layer.
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '560px',
            }}
          >
            Long-term systems, not short-term experiments. From cloud foundations to AI — built to endure.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="bento-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            return (
              <motion.a
                key={index}
                href={solution.href}
                variants={fadeUp}
                className={`group ${solution.size === 'large' ? 'bento-card-lg' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                {/* Colored gradient header strip with icon */}
                <div
                  style={{
                    background: solution.gradient,
                    padding: '32px 32px 28px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative circle */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      right: '40px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {solution.iconSvg}
                  </div>
                </div>

                {/* Card content */}
                <div
                  style={{
                    padding: '28px 32px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                      color: 'white',
                      marginBottom: '10px'
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.65)',
                      marginBottom: '24px',
                      flex: 1
                    }}
                  >
                    {solution.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#8b84ff',
                    }}
                  >
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkWeDoSection
