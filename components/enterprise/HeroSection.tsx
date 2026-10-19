"use client"

import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { PRIMARY_CTA } from '@/lib/cta'
import { HeroVisual } from '@/components/brand/HeroVisual'

/**
 * Home hero. Positioning (owner decision, 2026-10-19): a global IT
 * services firm first, applied AI second. Copy is US English.
 */

const PROOF = [
  'One senior in-house team',
  'A scoped first step before any build',
  'Your code in your accounts from day one',
]

/** Illustrative only: what an engagement looks like, not a client's data. */
const BOARD: { label: string; meta: string; state: 'done' | 'active' | 'next' }[] = [
  { label: 'Blueprint agreed', meta: 'Design, plan and risks signed off', state: 'done' },
  { label: 'Landing zone live', meta: 'Your cloud account, your region', state: 'done' },
  { label: 'Core API modernization', meta: 'Sprint 4 of 6 · working software every two weeks', state: 'active' },
  { label: 'Onboarding agent', meta: 'Evaluation passed · human approval in place', state: 'active' },
  { label: 'Run and improve', meta: 'Monitored by the team that built it', state: 'next' },
]

function EngagementBoard() {
  return (
    <div className="ys-hero-board" aria-hidden="true">
      <div className="ys-hero-board-head">
        <span className="ys-hero-board-dots"><i /><i /><i /></span>
        <span>Engagement board</span>
      </div>
      <ul>
        {BOARD.map((row) => (
          <li key={row.label} className={`is-${row.state}`}>
            <span className="ys-hero-board-mark">
              {row.state === 'done' ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : null}
            </span>
            <span className="ys-hero-board-text">
              <span className="ys-hero-board-label">{row.label}</span>
              <span className="ys-hero-board-meta">{row.meta}</span>
            </span>
            <span className="ys-hero-board-state">
              {row.state === 'done' ? 'Done' : row.state === 'active' ? 'In progress' : 'Next'}
            </span>
          </li>
        ))}
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
              Enterprise IT, built properly. AI where it pays.
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
              Cloud, software, data and security for growing companies and regulated
              enterprises, delivered end to end by one senior in-house team. When AI is
              the right answer, we build it into the systems you already run.
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
