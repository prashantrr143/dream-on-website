"use client"

import { motion, type Variants } from 'framer-motion'

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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const stats = [
  { value: "15+", label: "Years of enterprise delivery" },
  { value: "3", label: "Industries of deep regulated focus" },
  { value: "50+", label: "Enterprise engagements" },
  { value: "100%", label: "Audit compliance rate" }
]

const StatsSection = () => {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#0A2540',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at 100% 50%, hsla(243, 100%, 68%, 0.08), transparent 70%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="enterprise-container-wide relative" style={{ zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'rgba(255, 255, 255, 0.4)',
            marginBottom: '48px'
          }}
        >
          What we bring to every engagement
        </motion.p>
        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ textAlign: 'center', padding: '24px' }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '8px'
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  lineHeight: 1.5
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
