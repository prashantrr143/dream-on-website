"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'



/**
 * Delivery commitments.
 *
 * Each is a promise we can be held to in a contract, not a value
 * statement — that is the point of the section heading.
 */
const deliveryPrinciples = [
  {
    title: "A clear first step",
    description: "A short Blueprint agrees the problem, the design and the plan before any build begins."
  },
  {
    title: "One in-house team",
    description: "No subcontracting, no rotating strangers. The people who scope it build it."
  },
  {
    title: "Your code in your accounts",
    description: "Repositories and infrastructure are yours from day one, not handed over at the end."
  },
  {
    title: "Your data stays yours",
    description: "We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model."
  }
]

const HowWeWorkSection = () => {
  return (
    <section
      id="how"
      className="ys-section-white"
      style={{ position: 'relative', overflow: 'hidden' }}
    >

      <div className="enterprise-container-wide relative" style={{ zIndex: 1 }}>
        <div
          className="grid lg:grid-cols-2 items-start"
          style={{ gap: '80px' }}
        >
          {/* Left Column - Header */}
          <motion.div
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--ink-600)',
                marginBottom: '16px'
              }}
            >
              What you can rely on
            </p>
            <h2
              style={{ color: 'var(--ink-900)', marginBottom: '24px' }}
            >
              Dependable, in writing.
            </h2>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.65,
                color: 'var(--ink-600)',
                maxWidth: '480px',
                marginBottom: '32px'
              }}
            >
              These are commitments, not aspirations. Each one goes into the
              engagement letter, so you can hold us to it.
            </p>
            <Link
              href="/who-we-are/how-we-work"
              className="ys-cta-secondary-light group"
            >
              See how we deliver
              <ArrowRight
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </motion.div>

          {/* Right Column - Principles */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0'
            }}
          >
            {deliveryPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                style={{
                  padding: '24px 0',
                  borderBottom: index < deliveryPrinciples.length - 1
                    ? '1px solid var(--grey-200)'
                    : 'none',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start'
                }}
              >
                {/* Accent dot */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blue-600)',
                    marginTop: '8px',
                    flexShrink: 0,
                    opacity: 0.8
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--ink-900)',
                      marginBottom: '6px'
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: 'var(--ink-600)'
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
