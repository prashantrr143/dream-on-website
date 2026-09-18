"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const FinalCTASection = () => {
  return (
    <section
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        backgroundColor: '#0a0a0f',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background gradient accents */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse, hsla(243, 100%, 68%, 0.1), transparent 60%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, hsla(192, 80%, 55%, 0.06), transparent 70%)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <motion.div
        className="enterprise-container-wide relative"
        style={{ zIndex: 1, textAlign: 'center' }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'white',
            marginBottom: '16px'
          }}
        >
          Ready to build systems that last?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.55)',
            marginBottom: '40px',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Whether you&apos;re planning a critical software, cloud, or AI initiative, we&apos;re ready to help you approach it with clarity and discipline.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: '16px', marginBottom: '32px' }}
        >
          <Link
            href="/contact-us"
            className="stripe-btn-light group"
          >
            Start a Conversation
            <ArrowRight
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            href="/contact-us"
            className="stripe-btn-ghost"
          >
            Talk to an Architect
          </Link>
        </motion.div>

        {/* Supporting links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
          style={{ gap: '32px' }}
        >
          <Link
            href="/how-we-work"
            className="group"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              transition: 'color 200ms ease'
            }}
          >
            View our process
            <ArrowRight
              className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            href="/solutions"
            className="group"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              transition: 'color 200ms ease'
            }}
          >
            Explore solutions
            <ArrowRight
              className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FinalCTASection
