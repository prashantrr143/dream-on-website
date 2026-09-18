"use client"

import { motion, type Variants } from 'framer-motion'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

interface Principle {
  n: string
  title: string
  body: string
  /** The concrete consequence — what the principle costs or prevents. */
  consequence: string
  icon: YsIconName
}

/**
 * Operating principles, numbered and stated as commitments rather than
 * features. Each carries the trade-off it implies, which is what makes a
 * principle credible: a belief with no cost is marketing.
 */
const principles: Principle[] = [
  {
    n: '01',
    title: 'Architecture before implementation',
    body: 'Every system starts with a structural decision. We make it deliberately, with the people who will operate the result.',
    consequence: 'Slower to first commit. Far cheaper to change in year three.',
    icon: 'consulting',
  },
  {
    n: '02',
    title: 'Governance by design',
    body: 'Security, compliance and auditability are wired into the platform from the first sprint, not retrofitted before a review.',
    consequence: 'Evidence exists when the auditor asks, not after a scramble.',
    icon: 'security',
  },
  {
    n: '03',
    title: 'Systems thinking',
    body: 'Technology lands inside people, processes and systems that already exist. We design for that context rather than around it.',
    consequence: 'Fewer surprises at integration, where most programmes stall.',
    icon: 'global',
  },
  {
    n: '04',
    title: 'Built for production',
    body: 'We build for the conditions software actually runs in — load, failure, handover and change — not for a demo environment.',
    consequence: 'Nothing is called done until it survives being operated.',
    icon: 'growth',
  },
]

export function AboutPrinciples() {
  return (
    <section className="ys-section-white">
      <div className="enterprise-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(28px, 3.4vw, 40px)', maxWidth: '44rem' }}
        >
          <p className="ys-eyebrow">Our approach</p>
          <h2 className="ys-principle-head">
            Four commitments we do not trade away.
          </h2>
          <div className="ys-rule" />
          <p className="ys-principle-lede">
            These shape what we agree to build, how we sequence it, and what we
            refuse to rush. They also explain why some engagements start slower
            than clients expect.
          </p>
        </motion.div>

        <motion.ol
          className="ys-principles"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {principles.map((p) => (
            <motion.li key={p.n} variants={fadeUp} className="ys-principle">
              <div className="ys-principle-top">
                <span className="ys-principle-n" aria-hidden="true">{p.n}</span>
                <span className="ys-principle-icon">
                  <YsIcon name={p.icon} size={20} variant="current" />
                </span>
              </div>
              <h3 className="ys-principle-title">{p.title}</h3>
              <p className="ys-principle-body">{p.body}</p>
              <p className="ys-principle-consequence">
                <span aria-hidden="true" />
                {p.consequence}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default AboutPrinciples
