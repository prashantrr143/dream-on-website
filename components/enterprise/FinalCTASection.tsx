"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'



const FinalCTASection = () => {
  return (
    <section
      style={{
        paddingTop: 'clamp(58px, 6.4vw, 80px)',
        paddingBottom: 'clamp(64px, 7vw, 92px)',
        // Deep Blue that eases toward the light footer at the bottom
        // edge, so the dark CTA does not cut hard against it.
        backgroundColor: 'var(--navy-900)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <motion.div
        className="enterprise-container-wide relative"
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'white',
            marginBottom: '16px'
          }}
        >
          Tell us the problem. We&rsquo;ll tell you what the first step costs.
        </motion.h2>
        <motion.p
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
          Describe what is going wrong in your own words. We reply within one working day, and the first step comes back scoped and priced.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: '16px', marginBottom: '32px' }}
        >
          <Link
            href={PRIMARY_CTA.href}
            className="ys-cta-primary group inline-flex items-center gap-2"
          >
            {PRIMARY_CTA.label}
            <ArrowRight
              className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
          <Link
            href={SECONDARY_CTA.href}
            className="ys-cta-secondary"
          >
            {SECONDARY_CTA.label}
          </Link>
        </motion.div>

        {/* Supporting links */}
        <motion.div
          className="flex items-center justify-center"
          style={{ gap: '32px' }}
        >
          <Link
            href="/about-us"
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
            Who you&rsquo;ll work with
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
