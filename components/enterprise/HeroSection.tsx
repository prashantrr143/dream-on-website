"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden stripe-hero-gradient"
      style={{
        minHeight: '90vh',
        paddingTop: '10rem',
        paddingBottom: '6rem',
        backgroundColor: '#0A2540',
      }}
    >
      {/* Animated gradient mesh overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsla(243, 100%, 68%, 0.15), transparent)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="enterprise-container-wide relative" style={{ zIndex: 1 }}>
        <div
          className="grid lg:grid-cols-2 items-center"
          style={{ gap: 'var(--space-16)' }}
        >
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'white',
                marginBottom: 'var(--space-6)',
                maxWidth: '600px'
              }}
            >
              We engineer the systems your enterprise depends on.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: 'var(--space-10)',
                maxWidth: '480px'
              }}
            >
              Most enterprise AI and cloud initiatives fail because of architectural gaps, not technology limitations. We close that gap.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start"
              style={{ gap: 'var(--space-4)' }}
            >
              <a
                href="/contact-us"
                className="stripe-btn-light group"
              >
                Start a Conversation
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </a>
              <a
                href="/contact-us"
                className="stripe-btn-ghost"
              >
                Talk to an Architect
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Consulting proof-point cards */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            style={{ minHeight: '480px' }}
          >
            {/* Colorful gradient orbs */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, hsla(243, 100%, 68%, 0.35), transparent 65%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                top: '30%',
                right: '30%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, hsla(192, 80%, 55%, 0.3), transparent 65%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, hsla(155, 65%, 50%, 0.2), transparent 65%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />

            {/* Proof-point card 1 — Architecture-First */}
            <div
              style={{
                position: 'absolute',
                top: '8%',
                right: '5%',
                width: '300px',
                background: 'rgba(255, 255, 255, 0.07)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#635BFF' }} />
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.01em' }}>Architecture-First</span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)' }}>
                Every engagement starts with a systems blueprint — before a single line of code.
              </p>
            </div>

            {/* Proof-point card 2 — Industry focus */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                right: '25%',
                width: '240px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '20px',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: '12px' }}>
                Deep Industry Focus
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Financial Services', 'Healthcare', 'Government'].map((ind) => (
                  <div key={ind} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'hsl(192, 80%, 55%)', opacity: 0.7 }} />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof-point card 3 — Experience stat */}
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '8%',
                width: '180px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '18px 20px',
              }}
            >
              <div style={{ fontSize: '32px', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>14+</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '6px', lineHeight: 1.4 }}>Years combined leadership experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
