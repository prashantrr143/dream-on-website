"use client"

import { motion, type Variants } from 'framer-motion'

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

// Founder track record, stated as domains rather than named employers.
const credentials = [
  {
    label: "Banking",
    text: "Post-trade settlement systems at a global investment bank",
  },
  {
    label: "Consulting",
    text: "Enterprise platforms at Big-4 and global digital consultancies",
  },
  {
    label: "Government",
    text: "Five years on national-scale citizen systems",
  },
  {
    label: "Applied AI",
    text: "Leading an AI Centre of Excellence delivering agentic platforms on Azure",
  },
]

// Anonymised delivery patterns — deliberately no client or employer names.
const patterns = [
  {
    tag: "IT services · Modernisation",
    title: "Legacy monolith to modular platform",
    line: "TOGAF-led re-architecture delivered incrementally while the business kept running.",
  },
  {
    tag: "IT services · Data",
    title: "Document pre-processing pipeline for KYC",
    line: "Unstructured onboarding documents classified, extracted and validated at scale, every decision logged.",
  },
  {
    tag: "Applied AI · Legal",
    title: "Multi-agent client onboarding on Azure",
    line: "Agents orchestrating KYC, conflict checks and engagement setup, with human approval before anything touches core systems.",
  },
]

const WhyYatiSphereSection = () => {
  return (
    <section id="why" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: '46rem' }}
        >
          <p className="ys-eyebrow">Why Yati Sphere</p>
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
            Architect-led. Delivery-accountable.
          </h2>
          <div className="ys-rule" />
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            gap: 'clamp(32px, 4vw, 56px)',
            marginTop: 'clamp(32px, 4vw, 48px)',
            alignItems: 'start',
          }}
        >
          {/* LEFT — founder story, credentials, recognition */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ minWidth: 0 }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ys-ink-body)' }}>
              Founded and led by an enterprise architect with 15+ years across global
              banking, Big-4 consulting and Government of India systems — now building
              production AI platforms. Every engagement gets an architect who has been
              on the client&rsquo;s side of the table.
            </p>

            {/* Credential rows, separated by hairlines */}
            <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0 }}>
              {credentials.map((credential, index) => (
                <li
                  key={credential.label}
                  style={{
                    paddingTop: index === 0 ? 0 : 14,
                    paddingBottom: 14,
                    borderBottom: '1px solid var(--ys-border)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ys-link-on-light)',
                      marginBottom: 5,
                    }}
                  >
                    {credential.label}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ys-ink-body)' }}>
                    {credential.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — anonymised delivery patterns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}
          >
            {patterns.map((pattern) => (
              <motion.div
                key={pattern.title}
                variants={fadeUp}
                className="ys-card-light"
                style={{ padding: 20, minWidth: 0 }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ys-link-on-light)',
                  }}
                >
                  {pattern.tag}
                </p>
                <h3
                  style={{
                    fontSize: 15.5,
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    color: 'var(--ys-ink)',
                    marginTop: 8,
                  }}
                >
                  {pattern.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: 'var(--ys-ink-body)',
                    marginTop: 6,
                  }}
                >
                  {pattern.line}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyYatiSphereSection
