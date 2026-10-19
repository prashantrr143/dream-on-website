"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { PRIMARY_CTA } from '@/lib/cta'
import { HeroVisual } from '@/components/brand/HeroVisual'

/**
 * Home hero. Positioning (owner decision, 2026-10-19): a global IT
 * services firm first, applied AI second. Copy is US English.
 */

const PROOF = [
  'Senior engineers',
  'Scoped first step',
  'Your code, your accounts',
]

/**
 * Illustrative only: what an engagement looks like, not a client's data.
 *
 * The board plays the engagement forward: each step completes, the next
 * starts, the progress bar fills, then it rests and starts again. Runs
 * only while on screen and the tab is visible; static under reduced
 * motion. The first render matches the server (step 2) so hydration is
 * clean.
 */
const BOARD: { label: string; active: string; done: string }[] = [
  { label: 'Blueprint agreed', active: 'Discovery in progress', done: 'Plan and risks signed off' },
  { label: 'Landing zone live', active: 'Building in your account', done: 'Your account, your region' },
  { label: 'Core API modernization', active: 'Sprint 4 of 6', done: 'Released, legacy path retired' },
  { label: 'Onboarding agent', active: 'Evaluation running', done: 'Evaluation passed' },
  { label: 'Run and improve', active: 'Monitoring live', done: 'Monitored and improved' },
]
const START = 2
const STEP_MS = 2600

function EngagementBoard() {
  const [step, setStep] = useState(START)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    let visible = false
    let timer: number | undefined
    const tick = () => {
      // After the last step completes, rest a beat, then begin again.
      setStep((s) => (s >= BOARD.length ? 1 : s + 1))
      timer = window.setTimeout(tick, STEP_MS)
    }
    const run = () => {
      window.clearTimeout(timer)
      if (visible && document.visibilityState === 'visible') timer = window.setTimeout(tick, STEP_MS)
    }
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; run() }, { threshold: 0.3 })
    io.observe(el)
    document.addEventListener('visibilitychange', run)
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', run); window.clearTimeout(timer) }
  }, [])

  const done = Math.min(step, BOARD.length)
  return (
    <div className="ys-hero-board" aria-hidden="true" ref={ref}>
      <div className="ys-hero-board-head">
        <span className="ys-hero-board-dots"><i /><i /><i /></span>
        <span>Engagement board</span>
        <span className="ys-hero-board-count">{done} of {BOARD.length} done</span>
      </div>
      <div className="ys-hero-board-progress"><span style={{ width: `${(done / BOARD.length) * 100}%` }} /></div>
      <ul>
        {BOARD.map((row, i) => {
          const state = i < step ? 'done' : i === step ? 'active' : 'next'
          return (
            <li key={row.label} className={`is-${state}`}>
              <span className="ys-hero-board-mark">
                {state === 'done' ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : null}
              </span>
              <span className="ys-hero-board-text">
                <span className="ys-hero-board-label">{row.label}</span>
                <span className="ys-hero-board-meta">{state === 'done' ? row.done : state === 'active' ? row.active : 'Planned'}</span>
              </span>
              <span className="ys-hero-board-state">
                {state === 'done' ? 'Done' : state === 'active' ? 'In progress' : 'Next'}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--navy-950)' }}
    >
      <HeroVisual motif="network" seed="home" />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--navy-950-rgb) / 0.97) 0%, rgb(var(--navy-950-rgb) / 0.9) 50%, rgb(var(--navy-950-rgb) / 0.8) 100%)',
        }}
      />

      <div className="relative z-10 enterprise-container-wide">
        <div
          className="ys-hero-grid"
          style={{
            paddingTop: 'clamp(124px, 12vw, 164px)',
            paddingBottom: 'clamp(52px, 6vw, 84px)',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <motion.p
              className="ys-eyebrow ys-eyebrow-on-dark"
              style={{ marginBottom: 'clamp(16px, 2.4vw, 22px)' }}
            >
              IT services <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span> Applied AI
            </motion.p>

            <motion.h1 style={{ color: 'var(--white)', textWrap: 'balance' }}>
              Enterprise IT, built properly. AI where it <span className="ys-accent-word">pays</span>.
            </motion.h1>

            <motion.p
              style={{
                maxWidth: 620,
                marginTop: 'clamp(16px, 2.2vw, 22px)',
                fontSize: 'clamp(15.5px, 1.35vw, 18px)',
                lineHeight: 1.62,
                color: 'var(--ink-300)',
              }}
            >
              Cloud, software, data and security, built and run by senior
              engineers. AI only where it pays off.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center"
              style={{ gap: 14, marginTop: 'clamp(26px, 3.4vw, 34px)' }}
            >
              <a href={PRIMARY_CTA.href} className="ys-cta-primary inline-flex items-center gap-2">
                {PRIMARY_CTA.label}
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href="/what-we-do" className="ys-cta-secondary inline-flex items-center">
                See what we do
              </a>
            </motion.div>

            <ul className="ys-hero-proof">
              {PROOF.map((item) => (
                <li key={item}>
                  <Check className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <EngagementBoard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
