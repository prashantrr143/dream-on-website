"use client"

import { HeroVisual, type HeroMotif } from '@/components/brand/HeroVisual'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA } from '@/lib/cta'

/**
 * Shared page primitives so inner pages use the same system as the
 * homepage: a Deep Blue hero over a code-native visual, light content
 * sections, and a Deep Blue closing CTA.
 *
 * These wrap the existing `ys-*` classes rather than introducing new
 * design tokens.
 */

interface PageHeroProps {
  eyebrow?: string | undefined
  title: string
  lede?: string | undefined
  /** Hero motif; the composition is seeded from the title, so each page differs. */
  visual?: HeroMotif | undefined
  /** Ancestors, shown as a breadcrumb trail above the kicker. */
  breadcrumbs?: { name: string; path: string }[] | undefined
  primaryCta?: { label: string; href: string } | undefined
  secondaryCta?: { label: string; href: string } | undefined
  children?: React.ReactNode | undefined
}

export function PageHero({
  eyebrow,
  title,
  lede,
  visual,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  // MotionConfig reducedMotion="user" (see MotionProvider) skips these
  // transforms for users who ask for reduced motion, without changing the
  // rendered markup — which is what keeps SSR and hydration in agreement.

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <HeroVisual motif={visual} seed={title} />
      {/* Scrims keep headline contrast well above AA over the imagery */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--navy-950-rgb) / 0.97) 0%, rgb(var(--navy-950-rgb) / 0.93) 44%, rgb(var(--navy-950-rgb) / 0.70) 70%, rgb(var(--navy-950-rgb) / 0.46) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgb(var(--navy-950-rgb) / 0.85) 0%, rgb(var(--navy-950-rgb) / 0.12) 30%, rgb(var(--navy-950-rgb) / 0.60) 80%, rgb(var(--navy-950-rgb) / 0.95) 100%)',
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
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="ys-breadcrumbs">
                <ol>
                  <li><a href="/">Home</a></li>
                  {breadcrumbs.map((b) => (
                    <li key={b.path}><a href={b.path}>{b.name}</a></li>
                  ))}
                </ol>
              </nav>
            )}
            {eyebrow && (
              <motion.p
                className="ys-eyebrow ys-eyebrow-on-dark"
                style={{ marginBottom: 'clamp(14px, 2.2vw, 20px)' }}
              >
                {eyebrow}
              </motion.p>
            )}

            <motion.h1
              style={{ color: 'var(--white)', textWrap: 'balance' }}
            >
              {title}
            </motion.h1>

            {lede && (
              <motion.p
                className="lead measure"
                style={{
                  marginTop: 'clamp(14px, 2vw, 20px)',
                  color: 'var(--ink-300)',
                }}
              >
                {lede}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
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
            <motion.div style={{ marginTop: 'clamp(34px, 4.5vw, 54px)' }}>
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

interface PageSectionProps {
  id?: string | undefined
  tone?: 'light' | 'white' | undefined
  eyebrow?: string | undefined
  title?: string | undefined
  lede?: string | undefined
  children: React.ReactNode
}

export function PageSection({
  id,
  tone = 'white',
  eyebrow: _eyebrow,
  title,
  lede,
  children,
}: PageSectionProps) {
  return (
    <section id={id} className={tone === 'light' ? 'ys-section-light' : 'ys-section-white'}>
      <div className="enterprise-container-wide">
        {(title || lede) && (
          <motion.div
            style={{ marginBottom: 'clamp(24px, 3vw, 34px)' }}
          >
            {/* Section eyebrows are no longer shown (2026-10-19: a small-caps
                label over every heading read as templated). The prop is kept
                so existing content compiles; heroes and navy bands keep theirs. */}
            {title && (
              <h2 style={{ marginTop: 0, marginBottom: 16, textWrap: 'balance' }}>
                {title}
              </h2>
            )}
            {lede && (
              <p
                className="lead measure"
                style={{
                  marginTop: 18,
                  color: 'var(--ink-600)',
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
  body?: string | undefined
  primaryCta?: { label: string; href: string } | undefined
  secondaryCta?: { label: string; href: string } | undefined
}

export function PageCTA({
  title,
  body,
  primaryCta = { label: PRIMARY_CTA.label, href: PRIMARY_CTA.href },
  secondaryCta,
}: PageCTAProps) {
  return (
    <section
      style={{
        paddingTop: 'clamp(54px, 6vw, 76px)',
        paddingBottom: 'clamp(60px, 6.6vw, 84px)',
        backgroundColor: 'var(--navy-950)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="enterprise-container-wide relative"
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.7rem, 3.4vw, 2.6rem)',
            fontWeight: 600,
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
