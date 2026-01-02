"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Content pillars
const pillars = [
  {
    title: "System Design & Architecture",
    description: "How we approach the design of systems that need to last, scale, and remain maintainable under real-world conditions."
  },
  {
    title: "Delivery & Governance",
    description: "Observations on what makes enterprise delivery succeed or fail—particularly in regulated and high-trust environments."
  },
  {
    title: "AI in Production",
    description: "Practical considerations for deploying AI systems that are reliable, governable, and suitable for enterprise use."
  }
]

// Perspective articles
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
    summary: "When deploying AI in regulated environments, the question isn't whether the model works—it's whether you can explain what data it touched, why, and what happens when it's wrong.",
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
    summary: "A system that works in demo is not production-ready. A system that works under load is closer. A system that can be operated, monitored, and recovered by someone who didn't build it—that's production-ready.",
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
      {/* Hero */}
      <section
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-medium)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-4)'
            }}
          >
            Thinking
          </motion.p>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-6)',
              maxWidth: '600px'
            }}
          >
            Perspectives
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-500))',
              maxWidth: '640px'
            }}
          >
            Notes on system design, delivery, and applied AI from our work with enterprise teams.
          </motion.p>
        </motion.div>
      </section>

      {/* How We Think */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-16)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-4)'
            }}
          >
            How We Think
          </h2>
          <div
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-600))',
              maxWidth: '720px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)'
            }}
          >
            <p>
              These are observations from our work—patterns we've seen across engagements, lessons from systems that succeeded and ones that didn't, and frameworks we use when advising clients on difficult decisions.
            </p>
            <p>
              We share them because good thinking should be visible, and because enterprise buyers deserve more than marketing copy when evaluating a partner.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Content Pillars */}
      <section
        style={{
          paddingTop: 'var(--space-12)',
          paddingBottom: 'var(--space-20)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-400))',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              marginBottom: 'var(--space-8)'
            }}
          >
            Areas of Focus
          </motion.h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)'
            }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-6)',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid hsl(var(--premium-gray-100))'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--premium-gray-500))',
                    lineHeight: 'var(--leading-relaxed)'
                  }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Perspectives List */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-12)'
            }}
          >
            Recent Perspectives
          </motion.h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)'
            }}
          >
            {perspectives.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-6) 0',
                  borderBottom: index < perspectives.length - 1 ? '1px solid hsl(var(--premium-gray-100))' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 'var(--space-8)'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--font-medium)',
                        color: 'hsl(var(--premium-gray-400))',
                        textTransform: 'uppercase',
                        letterSpacing: 'var(--tracking-wide)',
                        marginBottom: 'var(--space-2)'
                      }}
                    >
                      {article.pillar}
                    </p>
                    <h3
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'hsl(var(--premium-gray-900))',
                        marginBottom: 'var(--space-2)',
                        lineHeight: 'var(--leading-tight)'
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'hsl(var(--premium-gray-500))',
                        lineHeight: 'var(--leading-relaxed)',
                        maxWidth: '720px'
                      }}
                    >
                      {article.summary}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'hsl(var(--premium-gray-400))',
                      whiteSpace: 'nowrap',
                      marginTop: 'var(--space-6)'
                    }}
                  >
                    {article.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer Note */}
      <section
        style={{
          paddingTop: 'var(--space-12)',
          paddingBottom: 'var(--space-20)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'hsl(var(--premium-gray-500))',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '640px'
            }}
          >
            These perspectives reflect our current thinking and are updated as we learn. If something here resonates—or if you disagree—we'd be interested to hear from you.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginTop: 'var(--space-6)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-medium)',
              color: 'hsl(var(--premium-gray-900))',
              textDecoration: 'none'
            }}
          >
            Start a conversation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </section>
    </SharedLayout>
  )
}
