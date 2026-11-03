"use client"

import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Cloud, Cpu } from 'lucide-react'
import { SECONDARY_CTA } from '@/lib/cta'
import { HeroField } from '@/components/home/HeroField'

/**
 * Home hero (2026-11-01): centred copy over the full-width 3D field, the
 * headline revealed word by word. The right-hand brand mark was removed.
 * Copy is US English.
 */

/**
 * Platforms we build on. Official logo artwork only, from each owner's
 * brand or press kit, saved in public/brand/platforms/ as a single-colour
 * (white or light) SVG and listed in `logo`. Until a file is supplied the
 * name is shown as text. Check each owner's logo guidelines before use;
 * none of these implies a partnership (see content/site.ts partners).
 */
const BUILD_ON: { label: string; Icon: typeof Cloud; logo?: string; logoWidth?: number }[] = [
  { label: 'AWS', Icon: Cloud },
  { label: 'Microsoft Azure', Icon: Cloud },
  { label: 'Google Cloud', Icon: Cloud },
  { label: 'Claude', Icon: Cpu },
  { label: 'OpenAI', Icon: Cpu },
]

/** Headline, split into words for the staged reveal. */
const TITLE = ['Systems', 'that', 'pass', 'review.', '\n', 'From', 'cloud', 'to', 'AI.']

const HeroSection = () => {
  // The 3D field replaces the static motif once it has drawn a frame.
  const [fieldOn, setFieldOn] = useState(false)
  const onFieldReady = useCallback(() => setFieldOn(true), [])

  // Depth on scroll: the copy drifts up a little faster and fades while the
  // 3D field stays put. Hero only, transform and opacity only, never with
  // reduced motion.
  const copy = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = copy.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const apply = () => {
      raf = 0
      const h = el.parentElement?.parentElement?.offsetHeight || window.innerHeight
      const p = Math.min(1, Math.max(0, window.scrollY / h))
      el.style.transform = p > 0 ? `translate3d(0, ${(-p * h * 0.22).toFixed(1)}px, 0)` : ''
      el.style.opacity = p > 0 ? String(Math.max(0, 1 - p * 1.4)) : ''
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply) }
    window.addEventListener('scroll', onScroll, { passive: true })
    apply()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  return (
    <section
      className={`ys-hero relative w-full overflow-hidden text-white${fieldOn ? ' has-field' : ''}`}
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <HeroField onReady={onFieldReady} />

      <div aria-hidden="true" className="ys-hero-shade" />
      <div aria-hidden="true" className="ys-hero-glow" />

      <div className="relative z-10 enterprise-container-wide">
        <div className="ys-hero-center" ref={copy}>
          <a href={SECONDARY_CTA.href} className="ys-hero-badge ys-hero-rise" style={{ ['--d' as string]: '0ms' }}>
            <span className="ys-hero-badge-tag">Start here</span>
            {/* One text span: the badge's flex gap was splitting the line into
                "Blueprint  · 2–4 weeks  , fixed fee". */}
            <span>
              Fixed-fee Blueprint<span className="ys-hero-badge-long">: your build plan in 2–4 weeks</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>

          <h1 className="ys-hero-title">
            {/* Real spaces between the animated words, so the indexed and
                copied text reads "Systems that pass review." and not
                "Systemsthatpassreview." */}
            {TITLE.map((w, i) => w === '\n' ? <br key="br" /> : (
              <Fragment key={`${w}-${i}`}>
                <span
                  className={`ys-hero-word${w.startsWith('review') ? ' ys-hero-word-accent' : ''}`}
                  style={{ ['--i' as string]: i }}
                >
                  {w}
                </span>
                {TITLE[i + 1] && TITLE[i + 1] !== '\n' ? ' ' : null}
              </Fragment>
            ))}
          </h1>

          <p className="ys-hero-lede ys-hero-rise" style={{ ['--d' as string]: '780ms' }}>
            We design, build and run cloud, software, data and AI systems for banks, law firms and SaaS
            companies. In your own accounts, with the evidence auditors, regulators and security teams ask for.
          </p>

          <div className="ys-hero-ctas ys-hero-rise" style={{ ['--d' as string]: '920ms' }}>
            <a href={SECONDARY_CTA.href} className="ys-cta-primary inline-flex items-center gap-2">
              Scope a Blueprint
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a href="/who-we-are/how-we-work" className="ys-cta-secondary inline-flex items-center">
              How it works
            </a>
          </div>

          <div className="ys-hero-buildon ys-hero-buildon-center ys-hero-rise" style={{ ['--d' as string]: '1060ms' }}>
            <span className="ys-hero-buildon-label">We build on</span>
            {BUILD_ON.map(({ label, Icon, logo, logoWidth }) =>
              logo ? (
                // eslint-disable-next-line @next/next/no-img-element -- small static SVGs, no optimisation needed
                <img key={label} src={logo} alt={label} width={logoWidth ?? 96} height={24} className="ys-hero-buildon-logo" />
              ) : (
                <span key={label}>
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <a href="#home-practices" className="ys-hero-cue" aria-label="Scroll to what we do">
        <span aria-hidden="true" />
      </a>
    </section>
  )
}

export default HeroSection
