"use client"

import { motion, type Variants } from 'framer-motion'
import { LIFECYCLE } from '@/lib/lifecycle'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
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
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

/**
 * The five delivery stages, with the deliverables for each.
 *
 * Shares LIFECYCLE with the homepage so stage names and order cannot
 * drift apart; this page additionally renders the "You get" list.
 */
const DeliveryStages = () => {
  return (
    <motion.ol
      className="ys-lifecycle-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {LIFECYCLE.map((stage) => (
        <motion.li key={stage.n} variants={fadeUp} className="ys-lifecycle-item">
          <span className="ys-lifecycle-n" aria-hidden="true">
            {stage.n}
          </span>
          <h3 className="ys-lifecycle-title">{stage.name}</h3>
          <p className="ys-lifecycle-line">{stage.line}</p>

          <p className="ys-lifecycle-gets-label">You get:</p>
          <ul className="ys-lifecycle-gets">
            {stage.gets.map((get) => (
              <li key={get}>{get}</li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default DeliveryStages
