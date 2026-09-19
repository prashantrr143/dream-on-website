"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SECONDARY_CTA } from '@/lib/cta'
import { LIFECYCLE } from '@/lib/lifecycle'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}


const HowWeDeliverSection = () => {
  return (
    <section id="how-we-deliver" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: '46rem' }}
        >
          <p className="ys-eyebrow">How we deliver</p>
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
            Five stages. No handovers.
          </h2>
          <div className="ys-rule" />
        </motion.div>

        {/* Lifecycle */}
        <motion.ol
          className="ys-stage-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {LIFECYCLE.map((stage) => (
            <motion.li key={stage.n} variants={fadeUp} className="ys-stage-item">
              <span className="ys-stage-n" aria-hidden="true">
                {stage.n}
              </span>
              <h3 className="ys-stage-title">{stage.name}</h3>
              <p className="ys-stage-line">{stage.line}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="ys-stage-footer"
        >
          <a href={SECONDARY_CTA.href} className="ys-link ys-stage-link">
            {SECONDARY_CTA.label}
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeDeliverSection
