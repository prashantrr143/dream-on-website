"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SECONDARY_CTA } from '@/lib/cta'
import { LIFECYCLE } from '@/lib/lifecycle'




const HowWeDeliverSection = () => {
  return (
    <section id="how-we-deliver" className="ys-section-light">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          style={{ maxWidth: '46rem' }}
        >
          <p className="ys-eyebrow">How we deliver</p>
          <h2
            style={{ marginTop: 14, marginBottom: 18, textWrap: 'balance' }}
          >
            Five stages. No handovers.
          </h2>
          <div className="ys-rule" />
        </motion.div>

        {/* Lifecycle */}
        <motion.ol
          className="ys-stage-grid"
        >
          {LIFECYCLE.map((stage) => (
            <motion.li key={stage.n} className="ys-stage-item">
              <span className="ys-stage-n" aria-hidden="true">
                {stage.n}
              </span>
              <h3 className="ys-stage-title">{stage.name}</h3>
              <p className="ys-stage-line">{stage.line}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
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
