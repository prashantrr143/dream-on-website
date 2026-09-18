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
        paddingTop: 'clamp(58px, 6.4vw, 80px)',
        paddingBottom: 'clamp(64px, 7vw, 92px)',
        // Deep Blue that eases toward the light footer at the bottom
        // edge, so the dark CTA does not cut hard against it.
        backgroundImage:
          'linear-gradient(to bottom, #071429 0%, #0B1E3D 46%, #143257 100%)',
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
          background: 'radial-gradient(ellipse, rgba(10, 132, 255, 0.1), transparent 60%)',
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
          background: 'radial-gradient(circle, rgba(0, 209, 255, 0.06), transparent 70%)',
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
          Planning a platform build, a cloud move, or your first AI use case in production?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '40px',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Tell us what you&apos;re building. We&apos;ll reply within one working day, and if a short architecture or readiness review is the right first step, we&apos;ll say so.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: '16px', marginBottom: '32px' }}
        >
          <Link
            href="/contact-us"
            className="ys-cta-primary group inline-flex items-center gap-2"
          >
            Start a conversation
            <ArrowRight
              className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            href="/contact-us"
            className="ys-cta-secondary"
          >
            Book an architecture review
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
              color: 'rgba(255, 255, 255, 0.78)',
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
              color: 'rgba(255, 255, 255, 0.78)',
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
