"use client"

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * Shared page primitives so inner pages use the same system as the
 * homepage: a Deep Blue hero over the approved imagery, light content
 * sections, and a Deep Blue closing CTA.
 *
 * These wrap the existing `ys-*` classes rather than introducing new
 * design tokens.
 */

interface PageHeroProps {
  eyebrow?: string
  title: string
  lede?: string
  /** Background image. Defaults to the brand Earth/network hero plate. */
  image?: { src: string; alt?: string }
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion()
  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--ys-deep-blue)' }}
    >
      <Image
        src={image?.src ?? '/brand/yatisphere/imagery/hero-earth-network.png'}
        alt={image?.alt ?? ''}
        aria-hidden={image?.alt ? undefined : true}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'right center' }}
      />
      {/* Scrims keep headline contrast well above AA over the imagery */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.93) 44%, rgba(11,30,61,0.70) 70%, rgba(11,30,61,0.46) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,30,61,0.85) 0%, rgba(11,30,61,0.12) 30%, rgba(11,30,61,0.60) 80%, rgba(11,30,61,0.95) 100%)',
        }}
      />

      <div className="relative z-10 enterprise-container-wide">
        <div
          style={{
            paddingTop: 'clamp(132px, 13vw, 170px)',
            paddingBottom: 'clamp(44px, 5vw, 64px)',
          }}
        >
          <div className="max-w-[780px]">
            {eyebrow && (
              <motion.p
                {...reveal(0)}
                className="uppercase"
                style={{
                  fontSize: 'clamp(10px, 1.05vw, 12px)',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.86)',
                  marginBottom: 'clamp(14px, 2.2vw, 20px)',
                }}
              >
                {eyebrow}
              </motion.p>
            )}

            <motion.h1
              {...reveal(0.07)}
              style={{
                fontSize: 'clamp(30px, 4.1vw, 50px)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.028em',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              {title}
            </motion.h1>

            {lede && (
              <motion.p
                {...reveal(0.16)}
                style={{
                  maxWidth: 640,
                  marginTop: 'clamp(14px, 2vw, 20px)',
                  fontSize: 'clamp(15px, 1.3vw, 17.5px)',
                  lineHeight: 1.62,
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                {lede}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                {...reveal(0.26)}
                className="flex flex-wrap items-center"
                style={{ gap: 14, marginTop: 'clamp(24px, 3.2vw, 32px)' }}
              >
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="ys-cta-primary inline-flex items-center gap-2"
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="ys-cta-secondary inline-flex items-center"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </motion.div>
            )}
          </div>

          {children && (
            <motion.div {...reveal(0.36)} style={{ marginTop: 'clamp(34px, 4.5vw, 54px)' }}>
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

interface PageSectionProps {
  id?: string
  tone?: 'light' | 'white'
  eyebrow?: string
  title?: string
  lede?: string
  children: React.ReactNode
}

export function PageSection({
  id,
  tone = 'white',
  eyebrow,
  title,
  lede,
  children,
}: PageSectionProps) {
  return (
    <section id={id} className={tone === 'light' ? 'ys-section-light' : 'ys-section-white'}>
      <div className="enterprise-container-wide">
        {(eyebrow || title || lede) && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ marginBottom: 'clamp(24px, 3vw, 34px)' }}
          >
            {eyebrow && <p className="ys-eyebrow">{eyebrow}</p>}
            {title && (
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                  marginTop: 14,
                  marginBottom: 16,
                  textWrap: 'balance',
                }}
              >
                {title}
              </h2>
            )}
            <div className="ys-rule" />
            {lede && (
              <p
                style={{
                  marginTop: 18,
                  maxWidth: '46rem',
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                }}
              >
                {lede}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

interface PageCTAProps {
  title: string
  body?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function PageCTA({
  title,
  body,
  primaryCta = { label: 'Start a conversation', href: '/contact-us' },
  secondaryCta,
}: PageCTAProps) {
  return (
    <section
      style={{
        paddingTop: 'clamp(54px, 6vw, 76px)',
        paddingBottom: 'clamp(60px, 6.6vw, 84px)',
        backgroundImage:
          'linear-gradient(to bottom, #071429 0%, #0B1E3D 46%, #143257 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 560,
          background: 'radial-gradient(ellipse, rgba(10,132,255,0.10), transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        className="enterprise-container-wide relative"
        style={{ zIndex: 1, textAlign: 'center' }}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.7rem, 3.4vw, 2.6rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: 14,
            textWrap: 'balance',
          }}
        >
          {title}
        </h2>
        {body && (
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 32,
              maxWidth: 580,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: 14 }}>
          {primaryCta && (
            <a href={primaryCta.href} className="ys-cta-primary inline-flex items-center gap-2">
              {primaryCta.label}
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="ys-cta-secondary inline-flex items-center">
              {secondaryCta.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
