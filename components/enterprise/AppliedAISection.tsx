"use client"

import { motion, type Variants } from 'framer-motion'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
}

interface AiCapability {
  title: string
  body: string
  href: string
  icon: YsIconName
}

const capabilities: AiCapability[] = [
  {
    title: "AI Architecture & Readiness",
    body: "Where AI fits, what data it needs, what it must never touch. A target architecture and roadmap before any model is chosen.",
    href: "/solutions/ai-ml",
    icon: "consulting",
  },
  {
    title: "Agentic Workflow Automation",
    body: "Multi-agent systems for document-heavy processes — onboarding, KYC, claims, contracts — with human approval gates where liability sits.",
    href: "/solutions/ai-ml",
    icon: "automation",
  },
  {
    title: "Enterprise AI Platforms",
    body: "Shared AI platforms on Azure / Microsoft Foundry: model routing, prompt and version control, observability and cost management.",
    href: "/solutions/ai-ml",
    icon: "ai-ml",
  },
  {
    title: "Responsible AI & Governance",
    body: "Data sovereignty, audit trails, evaluation and policy controls — so the compliance team signs off rather than shuts it down.",
    href: "/responsible-ai",
    icon: "security",
  },
]

const AppliedAISection = () => {
  return (
    <section id="ai" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: '52rem' }}
        >
          {/* Pillar 02 is tinted with the AA-safe link blue — cyan would fail
              contrast at this size on a light surface. */}
          <p className="ys-eyebrow" style={{ color: 'var(--ys-link-on-light)' }}>
            Pillar 02 · Applied AI
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginTop: 14,
              marginBottom: 18,
              textWrap: 'balance',
            }}
          >
            AI that ships to production — inside the systems you already run.
          </h2>
          <div className="ys-rule" style={{ marginBottom: 18 }} />
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ys-ink-body)' }}>
            Most AI pilots never leave the sandbox because nobody owned the
            integration, the governance or the operations. We own all three.
          </p>
        </motion.div>

        {/* Capability cards — 1 col at 375px, 2 on tablet, 4 on desktop. */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: 16,
            marginTop: 'clamp(32px, 4vw, 48px)',
          }}
        >
          {capabilities.map((capability) => (
            <motion.a
              key={capability.title}
              href={capability.href}
              variants={fadeUp}
              className="ys-card-light group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ys-link-on-light)]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                padding: '24px 22px',
                textDecoration: 'none',
              }}
            >
              <span className="ys-icon-tile" style={{ marginBottom: 16 }}>
                <YsIcon name={capability.icon} size={26} />
              </span>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {capability.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)',
                  flex: 1,
                }}
              >
                {capability.body}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Bridge block — why the two pillars belong together. */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            background: 'var(--ys-surface)',
            border: '1px solid var(--ys-border)',
            borderRadius: 14,
            padding: 'clamp(28px, 4vw, 40px)',
            marginTop: 'clamp(36px, 4.5vw, 52px)',
            gap: 'clamp(20px, 3vw, 40px)',
            alignItems: 'center',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">Why the two pillars belong together</p>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.2vw, 25px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                marginTop: 12,
                textWrap: 'balance',
              }}
            >
              AI is only as good as the platform underneath it.
            </h3>
          </div>
          <p
            style={{
              minWidth: 0,
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--ys-ink-body)',
            }}
          >
            Clean data, secure cloud, reliable pipelines and modern applications are
            the prerequisites for AI that works. Because we build those too, our AI
            work doesn&rsquo;t stop at the demo — it lands in production, on
            infrastructure we understand.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AppliedAISection
