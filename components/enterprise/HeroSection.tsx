"use client"

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { HeroAtmosphere } from '@/components/enterprise/HeroAtmosphere'


const PROOF = [
  'One in-house team',
  'Fixed-price first step',
  'Your code in your accounts from day one',
]

const HeroSection = () => {

  // MotionConfig reducedMotion="user" (see MotionProvider) makes Framer skip
  // these transforms for users who ask for reduced motion. The markup stays
  // identical either way, which is what keeps SSR and hydration in agreement.
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--ys-deep-blue)' }}
    >
      {/* Approved hero imagery — background layer only */}
      <Image
        src="/brand/yatisphere/imagery/hero-earth-network.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'right center' }}
      />

      {/* Animated network + atmosphere over the static Earth plate.
          Sits above the image but below the scrims, so it never
          competes with headline contrast. */}
      <HeroAtmosphere />

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
              {...reveal(0)}
              className="ys-eyebrow ys-eyebrow-on-dark"
              style={{ marginBottom: 'clamp(16px, 2.4vw, 22px)' }}
            >
              IT Services <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              Applied AI
            </motion.p>

            <motion.h1
              {...reveal(0.08)}
              style={{ color: 'var(--on-dark)', textWrap: 'balance' }}
            >
              Technology that fixes the problem you actually have.
            </motion.h1>

            <motion.p
              {...reveal(0.18)}
              style={{
                maxWidth: 640,
                marginTop: 'clamp(16px, 2.2vw, 22px)',
                fontSize: 'clamp(15px, 1.35vw, 17.5px)',
                lineHeight: 1.62,
                color: 'var(--on-dark-muted)',
              }}
            >
              Slow onboarding. Systems nobody dares touch. Data you can&rsquo;t get
              answers from. AI pilots that went nowhere. Tell us the business problem
              and our in-house team delivers the working solution, end to end.
            </motion.p>

            <motion.div
              {...reveal(0.28)}
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
              {...reveal(0.36)}
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
