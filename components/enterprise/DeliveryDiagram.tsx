"use client"

import { motion, type Variants } from 'framer-motion'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 12 },
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

// Delivery phases - minimal, architectural
const phases = [
  {
    number: "01",
    title: "Discovery & Context",
    description: "Understanding business, regulatory, and technical landscape.",
    anchors: [
      "Objectives & constraints",
      "Success criteria"
    ]
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "Defining system architecture with security and data boundaries.",
    anchors: [
      "Platform design",
      "Integration mapping"
    ]
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "Incremental development with continuous validation.",
    anchors: [
      "Iterative delivery",
      "System integration"
    ]
  },
  {
    number: "04",
    title: "Harden & Launch",
    description: "Performance, security, and operational readiness.",
    anchors: [
      "Production hardening",
      "Knowledge transfer"
    ]
  }
]

// Foundation band items
const foundationBand = [
  "Security & Governance",
  "Collaboration with Client Teams",
  "Documentation & Knowledge Transfer"
]

export default function DeliveryDiagram() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      style={{
        width: '100%'
      }}
    >
      {/* Phase Cards - Horizontal Flow */}
      <motion.div
        variants={fadeIn}
        style={{
          display: 'grid',
          gap: 'var(--space-4)'
        }}
        className="delivery-diagram-grid"
      >
        {phases.map((phase, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              border: '1px solid hsl(var(--premium-gray-200))',
              borderRadius: '8px',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '200px'
            }}
          >
            {/* Large Phase Number */}
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 300,
                color: 'hsl(var(--premium-gray-200))',
                lineHeight: 1,
                marginBottom: 'var(--space-4)',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {phase.number}
            </span>

            {/* Phase Title */}
            <h4
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-semibold)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-2)',
                lineHeight: 'var(--leading-tight)'
              }}
            >
              {phase.title}
            </h4>

            {/* One-line Description */}
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'hsl(var(--premium-gray-500))',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-4)',
                flex: 1
              }}
            >
              {phase.description}
            </p>

            {/* Anchor Points - Max 2 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                borderTop: '1px solid hsl(var(--premium-gray-100))',
                paddingTop: 'var(--space-3)'
              }}
            >
              {phase.anchors.map((anchor, anchorIndex) => (
                <span
                  key={anchorIndex}
                  style={{
                    fontSize: '12px',
                    color: 'hsl(var(--premium-gray-400))',
                    lineHeight: 1.4
                  }}
                >
                  {anchor}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Foundation Band - Full Width */}
      <motion.div
        variants={fadeIn}
        className="delivery-diagram-foundation"
        style={{
          marginTop: 'var(--space-4)',
          backgroundColor: 'hsl(var(--premium-gray-900))',
          borderRadius: '8px',
          padding: 'var(--space-5) var(--space-6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}
      >
        {foundationBand.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)'
            }}
          >
            {/* Simple dot indicator */}
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'hsl(var(--premium-gray-500))'
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-sm)',
                color: 'hsl(var(--premium-gray-300))',
                fontWeight: 'var(--font-medium)'
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Footnote */}
      <motion.p
        variants={fadeIn}
        style={{
          fontSize: '12px',
          color: 'hsl(var(--premium-gray-400))',
          marginTop: 'var(--space-6)',
          textAlign: 'center'
        }}
      >
        Adapted to organizational context, regulatory requirements, and system complexity.
      </motion.p>
    </motion.div>
  )
}
