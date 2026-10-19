"use client"

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { CapabilityVisual, type VisualKind } from '@/components/enterprise/CapabilityVisual'

/**
 * Home: "Problems we fix" as an interactive picker (owner request,
 * 2026-10-19). Replaces the six-card grid: a list of problems on the
 * left, one large illustration on the right that changes with the
 * selection. About half the height of the grid, and each illustration
 * gets room to read.
 *
 * - ARIA tabs: arrow keys, Home and End move between problems.
 * - Auto-advances every ROTATE_MS while on screen, so a visitor who only
 *   scrolls still sees several. Stops for good on the first hover,
 *   focus or click, and never runs under prefers-reduced-motion.
 * - Below 1024px the illustration renders inside the active item
 *   instead of beside the list.
 */

export interface Problem {
  problem: string
  answer: string
  area: string
  /** Link label: written out, so acronyms and names keep their case. */
  cta: string
  href: string
  visual: VisualKind
}

export const PROBLEMS: Problem[] = [
  {
    problem: 'Our core system is old and nobody dares touch it.',
    answer: 'Modernized in steps, with no big-bang cutover.',
    area: 'Application modernization',
    cta: 'Explore modernization',
    href: '/what-we-do/services/modernization',
    visual: 'modernization',
  },
  {
    problem: 'Cloud costs keep rising and we don’t know why.',
    answer: 'Find the waste, cut it, keep it down.',
    area: 'Cloud and FinOps',
    cta: 'Explore FinOps',
    href: '/what-we-do/cloud/finops',
    visual: 'cloud',
  },
  {
    problem: 'We have the data but can’t get an answer out of it.',
    answer: 'One trusted platform, live dashboards.',
    area: 'Data and analytics',
    cta: 'Explore data and analytics',
    href: '/what-we-do/services/data-analytics',
    visual: 'data',
  },
  {
    problem: 'An audit or a client security review is coming.',
    answer: 'Evidence built into your systems.',
    area: 'Security and compliance',
    cta: 'Explore security and compliance',
    href: '/what-we-do/services/security-compliance',
    visual: 'security',
  },
  {
    problem: 'Client onboarding takes weeks and lives in email.',
    answer: 'Automated intake with a full audit trail.',
    area: 'Software and applied AI',
    cta: 'Explore client onboarding',
    href: '/what-we-do/industries/financial-services',
    visual: 'software',
  },
  {
    problem: 'Our AI pilot worked, and then nothing happened.',
    answer: 'Taken to production, governed.',
    area: 'Applied AI',
    cta: 'Explore applied AI',
    href: '/what-we-do/applied-ai',
    visual: 'ai',
  },
]

const ROTATE_MS = 5500

function Stage({ p, id }: { p: Problem; id: string }) {
  return (
    <div className="ys-pp-stage" key={p.visual} id={id}>
      <div className="ys-pp-art">
        <CapabilityVisual kind={p.visual} />
      </div>
      <div className="ys-pp-caption">
        <p className="ys-pp-area">{p.area}</p>
        <p className="ys-pp-answer">{p.answer}</p>
        <a href={p.href} className="ys-pp-link">
          {p.cta}
          <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

export function ProblemPicker() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(false)
  const [visible, setVisible] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Auto-advance only for visitors who have not asked for less motion.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAuto(!mq.matches)
  }, [])

  // ...and only while the section is on screen.
  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setVisible(!!entry?.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!auto || !visible) return
    const t = window.setTimeout(() => setActive((i) => (i + 1) % PROBLEMS.length), ROTATE_MS)
    return () => window.clearTimeout(t)
  }, [auto, visible, active])

  const stop = useCallback(() => setAuto(false), [])

  const select = (i: number, focus = false) => {
    setAuto(false)
    setActive(i)
    if (focus) tabRefs.current[i]?.focus()
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = PROBLEMS.length - 1
    const next =
      e.key === 'ArrowDown' || e.key === 'ArrowRight' ? (i === last ? 0 : i + 1)
      : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (next === null) return
    e.preventDefault()
    select(next, true)
  }

  const current = PROBLEMS[active] ?? PROBLEMS[0]!

  return (
    <div
      ref={rootRef}
      className={`ys-pp${auto && visible ? ' is-rotating' : ''}`}
      onPointerEnter={stop}
      onFocusCapture={stop}
    >
      <div className="ys-pp-list" role="tablist" aria-label="Problems we fix" aria-orientation="vertical">
        {PROBLEMS.map((p, i) => {
          const on = i === active
          return (
            <div key={p.visual} className={`ys-pp-item${on ? ' is-active' : ''}`}>
              <button
                ref={(el) => { tabRefs.current[i] = el }}
                type="button"
                role="tab"
                id={`pp-tab-${i}`}
                aria-selected={on}
                aria-controls="pp-panel"
                tabIndex={on ? 0 : -1}
                className="ys-pp-tab"
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="ys-pp-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="ys-pp-q">&ldquo;{p.problem}&rdquo;</span>
                {/* Fills over ROTATE_MS while auto-advancing. */}
                <span className="ys-pp-progress" aria-hidden="true" key={on ? `on-${active}` : 'off'} />
              </button>
              {/* Small screens: the illustration opens under the active item. */}
              {on && (
                <div className="ys-pp-inline">
                  <Stage p={p} id={`pp-inline-${i}`} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="ys-pp-panel" role="tabpanel" id="pp-panel" aria-labelledby={`pp-tab-${active}`}>
        <Stage p={current} id="pp-stage" />
      </div>
    </div>
  )
}
