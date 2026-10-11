"use client"

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { HeroVisual } from '@/components/brand/HeroVisual'


const PROOF = [
  'One in-house team',
  'Fixed-price first step',
  'Your code in your accounts from day one',
]

const HeroSection = () => {

  // MotionConfig reducedMotion="user" (see MotionProvider) makes Framer skip
  // these transforms for users who ask for reduced motion. The markup stays
  // identical either way, which is what keeps SSR and hydration in agreement.

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--ys-deep-blue)' }}
    >
      {/* Code-native background (audit G-04). */}
      <HeroVisual motif="network" seed="home" />

      {/* Legibility scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.92) 42%, rgba(11,30,61,0.66) 68%, rgba(11,30,61,0.42) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,30,61,0.82) 0%, rgba(11,30,61,0.10) 26%, rgba(11,30,61,0.55) 78%, rgba(11,30,61,0.94) 100%)',
        }}
      />

      <div className="relative z-10 enterprise-container-wide">
        <div
          style={{
            paddingTop: 'clamp(134px, 13.5vw, 176px)',
            paddingBottom: 'clamp(46px, 5vw, 66px)',
          }}
        >
          <div className="max-w-[760px]">
            <motion.p
              className="ys-eyebrow ys-eyebrow-on-dark"
              style={{ marginBottom: 'clamp(16px, 2.4vw, 22px)' }}
            >
              Azure engineering &amp; applied AI{' '}
              <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              UK <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              Europe <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              Middle East <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              US
            </motion.p>

            <motion.h1
              style={{ color: 'var(--on-dark)', textWrap: 'balance' }}
            >
              Modernize the systems you run on. Put AI into production &mdash;{' '}
              <span className="ys-accent-word">safely</span>.
            </motion.h1>

            <motion.p
              style={{
                maxWidth: 640,
                marginTop: 'clamp(16px, 2.2vw, 22px)',
                fontSize: 'clamp(15px, 1.35vw, 17.5px)',
                lineHeight: 1.62,
                color: 'var(--on-dark-muted)',
              }}
            >
              A senior, in-house team that designs, builds and runs core platforms
              and governed AI for regulated businesses. Fixed price to start. Your
              code in your cloud from day one.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center"
              style={{ gap: 14, marginTop: 'clamp(26px, 3.4vw, 34px)' }}
            >
              <a href={PRIMARY_CTA.href} className="ys-cta-primary inline-flex items-center gap-2">
                {PRIMARY_CTA.label}
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href={SECONDARY_CTA.href} className="ys-cta-secondary inline-flex items-center">
                {SECONDARY_CTA.label}
              </a>
            </motion.div>

            {/* Proof line — wraps on narrow viewports */}
            <motion.p
              className="flex flex-wrap items-center"
              style={{
                gap: '0 10px',
                marginTop: 'clamp(22px, 2.8vw, 30px)',
                fontSize: 'clamp(12.5px, 1vw, 13.5px)',
                lineHeight: 1.7,
                color: 'var(--on-dark-muted)',
              }}
            >
              {PROOF.map((item, i) => (
                <span key={item} className="inline-flex items-center" style={{ gap: 10 }}>
                  {i > 0 && (
                    <span aria-hidden="true" style={{ color: 'var(--on-dark-label)' }}>
                      ·
                    </span>
                  )}
                  {item}
                </span>
              ))}
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
