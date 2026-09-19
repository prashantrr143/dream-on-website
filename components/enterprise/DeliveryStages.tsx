"use client"

import { motion } from 'framer-motion'
import { LIFECYCLE } from '@/lib/lifecycle'



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
    >
      {LIFECYCLE.map((stage) => (
        <motion.li key={stage.n} className="ys-lifecycle-item">
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
