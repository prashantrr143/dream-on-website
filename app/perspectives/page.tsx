"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

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

const pillars = [
  {
    title: "System Design & Architecture",
    description: "How we approach the design of systems that need to last, scale, and remain maintainable under real-world conditions.",
    accent: "#635BFF",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  },
  {
    title: "Delivery & Governance",
    description: "Observations on what makes enterprise delivery succeed or fail — particularly in regulated and high-trust environments.",
    accent: "hsl(192, 80%, 55%)",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "AI in Production",
    description: "Practical considerations for deploying AI systems that are reliable, governable, and suitable for enterprise use.",
    accent: "hsl(155, 65%, 50%)",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V11h3a4 4 0 0 1 4 4v1" />
        <path d="M8 9.4A4 4 0 1 1 14 6" />
        <circle cx="12" cy="18" r="4" />
        <path d="M12 14v-3" />
      </svg>
    )
  }
]

const pillarColors: Record<string, string> = {
  "System Design & Architecture": "#635BFF",
  "Delivery & Governance": "hsl(192, 80%, 55%)",
  "AI in Production": "hsl(155, 65%, 50%)"
}

const perspectives = [
  {
    pillar: "System Design & Architecture",
    title: "Why most platform modernization efforts fail in year two",
    summary: "The first year of a platform initiative is often the easiest. The problems emerge when the team that built it moves on, requirements shift, and the assumptions baked into the architecture start to surface.",
    readTime: "8 min"
  },
  {
    pillar: "Delivery & Governance",
    title: "The hidden cost of skipping architecture reviews",
    summary: "Organizations often treat architecture reviews as ceremony. We've observed a consistent pattern: the cost of skipping them is rarely visible until remediation becomes the primary workstream.",
    readTime: "6 min"
  },
  {
    pillar: "AI in Production",
    title: "Data boundaries in enterprise AI systems",
    summary: "When deploying AI in regulated environments, the question isn't whether the model works — it's whether you can explain what data it touched, why, and what happens when it's wrong.",
    readTime: "10 min"
  },
  {
    pillar: "System Design & Architecture",
    title: "On the difference between integration and interoperability",
    summary: "Two systems that exchange data are integrated. Two systems that can evolve independently while maintaining their contracts are interoperable. The distinction matters more than most organizations realize.",
    readTime: "5 min"
  },
  {
    pillar: "Delivery & Governance",
    title: "What we mean by 'production-ready'",
    summary: "A system that works in demo is not production-ready. A system that works under load is closer. A system that can be operated, monitored, and recovered by someone who didn't build it — that's production-ready.",
    readTime: "7 min"
  },
  {
    pillar: "AI in Production",
    title: "The governance layer most AI deployments are missing",
    summary: "Model accuracy is table stakes. What enterprises actually need is a governance layer that answers: who approved this, what can it access, and how do we turn it off?",
    readTime: "9 min"
  },
  {
    pillar: "System Design & Architecture",
    title: "Technical debt is a symptom, not a cause",
    summary: "Teams often treat technical debt as the problem to solve. In our experience, it's usually a symptom of misaligned incentives, unclear ownership, or architectural decisions made without sufficient context.",
    readTime: "6 min"
  },
  {
    pillar: "Delivery & Governance",
    title: "Why documentation doesn't transfer knowledge",
    summary: "Documentation is necessary but not sufficient. Knowledge transfer happens through structured handover, not through wiki pages that no one reads after the first week.",
    readTime: "5 min"
  }
]

export default function PerspectivesPage() {
  return (
    <SharedLayout>
      {/* Hero — Dark navy header matching homepage */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          backgroundColor: '#0A2540',
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 70% 50%, hsla(243, 100%, 68%, 0.1), transparent)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
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
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#635BFF',
              marginBottom: '20px'
            }}
          >
            Thinking
          </motion.p>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'white',
              marginBottom: '24px',
              maxWidth: '600px'
            }}
          >
            Perspectives
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '560px'
            }}
          >
            Notes on system design, delivery, and applied AI from our work with enterprise teams.
          </motion.p>
        </motion.div>
      </section>

      {/* How We Think — Editorial statement */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '64px',
          backgroundColor: 'white'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div
            className="grid lg:grid-cols-12 items-start"
            style={{ gap: '48px' }}
          >
            <div className="lg:col-span-4">
              <h2
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#635BFF',
                  marginBottom: '12px'
                }}
              >
                How We Think
              </h2>
              <div
                style={{
                  width: '32px',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: '#635BFF',
                  opacity: 0.4
                }}
              />
            </div>
            <div
              className="lg:col-span-8"
              style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: '#425466',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '640px'
              }}
            >
              <p>
                These are observations from our work — patterns we&apos;ve seen across engagements, lessons from systems that succeeded and ones that didn&apos;t, and frameworks we use when advising clients on difficult decisions.
              </p>
              <p>
                We share them because good thinking should be visible, and because enterprise buyers deserve more than marketing copy when evaluating a partner.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Pillars — Three focus areas as cards */}
      <section
        style={{
          paddingTop: '64px',
          paddingBottom: '80px',
          backgroundColor: '#F6F9FC'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#635BFF',
              marginBottom: '40px'
            }}
          >
            Areas of Focus
          </motion.p>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '20px' }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '28px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(10, 37, 64, 0.08)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: `${pillar.accent}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.accent,
                    marginBottom: '20px'
                  }}
                >
                  {pillar.iconSvg}
                </div>
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#0A2540',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#425466',
                    lineHeight: 1.65
                  }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Perspectives List — Articles */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '100px',
          backgroundColor: 'white'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            style={{ marginBottom: '48px' }}
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#635BFF',
                marginBottom: '16px'
              }}
            >
              Recent Perspectives
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#0A2540'
              }}
            >
              From our work with enterprise teams.
            </h2>
          </motion.div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {perspectives.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                className="group"
                style={{
                  padding: '28px 0',
                  borderBottom: index < perspectives.length - 1 ? '1px solid rgba(10, 37, 64, 0.08)' : 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '32px'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    {/* Pillar badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '10px'
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: pillarColors[article.pillar] || '#635BFF',
                          opacity: 0.7
                        }}
                      />
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: pillarColors[article.pillar] || '#635BFF',
                        }}
                      >
                        {article.pillar}
                      </span>
                    </div>
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#0A2540',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                        transition: 'color 0.15s ease'
                      }}
                    >
                      {article.title}
                    </h3>
                    {/* Summary */}
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#425466',
                        lineHeight: 1.65,
                        maxWidth: '680px'
                      }}
                    >
                      {article.summary}
                    </p>
                  </div>
                  {/* Read time + arrow */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '8px',
                      marginTop: '28px',
                      flexShrink: 0
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: '#425466',
                        opacity: 0.6,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {article.readTime}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      style={{ color: '#635BFF', opacity: 0 }}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer CTA — Dark navy, matching FinalCTASection */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          backgroundColor: '#0A2540',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, hsla(243, 100%, 68%, 0.08), transparent 60%)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: 1.65,
              maxWidth: '560px',
              marginBottom: '28px'
            }}
          >
            These perspectives reflect our current thinking and are updated as we learn. If something here resonates — or if you disagree — we&apos;d be interested to hear from you.
          </p>
          <Link
            href="/contact-us"
            className="group"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#635BFF',
              textDecoration: 'none'
            }}
          >
            Start a conversation
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
