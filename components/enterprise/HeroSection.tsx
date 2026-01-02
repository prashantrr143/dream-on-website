"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
}

const accentReveal: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 1, ease: "easeOut" as const, delay: 0.5 }
  }
}

const HeroSection = () => {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{
        minHeight: '80vh',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-24)'
      }}
    >
      {/* Architectural Accent - Single vertical line */}
      <motion.div
        className="hidden lg:block absolute"
        variants={accentReveal}
        initial="hidden"
        animate="visible"
        style={{
          right: '18%',
          top: '15%',
          width: '1px',
          height: '70%',
          backgroundColor: 'hsl(var(--premium-gray-900))',
          opacity: 0.08,
          transformOrigin: 'top center'
        }}
        aria-hidden="true"
      />

      <div className="enterprise-container-wide">
        <div
          className="grid lg:grid-cols-12 items-center"
          style={{ gap: 'var(--space-16)' }}
        >
          {/* Text Block - Takes 7 columns on desktop */}
          <motion.div
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '42rem' }}
          >
            {/* Headline - Systems-first, calm, declarative */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2.25rem, 4vw, var(--text-5xl))',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 'var(--leading-tight)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-6)'
              }}
            >
              We design and deliver enterprise systems built for trust and longevity.
            </motion.h1>

            {/* Subtext - Systems-first narrative */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-500))',
                marginBottom: 'var(--space-10)',
                maxWidth: 'var(--prose-width)'
              }}
            >
              We partner with enterprises to build and operate critical software, cloud, and AI systems—designed for regulatory scrutiny, operational stability, and long-term maintainability.
            </motion.p>

            {/* CTAs - Primary button + text link */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start"
              style={{ gap: 'var(--space-6)' }}
            >
              {/* Primary CTA */}
              <a
                href="/contact-us"
                className="enterprise-btn-primary group"
              >
                Start a Conversation
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>

              {/* Secondary CTA - Text link only */}
              <a
                href="/how-we-work"
                className="enterprise-link group"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  paddingTop: 'var(--space-3)',
                  paddingBottom: 'var(--space-3)'
                }}
              >
                How we work
                <ArrowRight
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Empty space for accent to breathe */}
          <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile: Horizontal accent below content */}
      <motion.div
        className="lg:hidden"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.6 }}
        style={{
          marginTop: 'var(--space-16)',
          marginLeft: 'var(--space-6)',
          marginRight: 'var(--space-6)',
          height: '1px',
          backgroundColor: 'hsl(var(--premium-gray-900))',
          opacity: 0.08,
          transformOrigin: 'left center'
        }}
        aria-hidden="true"
      />
    </section>
  )
}

export default HeroSection
