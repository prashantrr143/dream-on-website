"use client"

import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { LIFECYCLE, type Stage } from '@/lib/lifecycle'

/**
 * How we work: the five stages as a rail with a decision gate between
 * each, and one panel for the selected stage (owner request, 2026-10-19:
 * "modernize this page, make it beautiful and meaningful").
 *
 * The panel pairs what the client gets with the decision they make at the
 * end of the stage, which is the page's actual promise.
 *
 * - ARIA tabs: arrow keys, Home and End. No auto-advance: this is read,
 *   not glanced at.
 * - Desktop: horizontal rail, panel below. Below 960px the rail turns
 *   into a compact vertical list with the same panel after it (a panel
 *   inside the tablist would break the tabs pattern).
 */

function Panel({ s, i, onNext }: { s: Stage; i: number; onNext: (() => void) | null }) {
  const next = LIFECYCLE[i + 1]
  return (
    <div className="ys-sj-panel" key={s.n}>
      <div className="ys-sj-gets">
        <p className="ys-sj-kicker">
          Stage {s.n} <span aria-hidden="true">·</span> {s.when}
        </p>
        <h3 className="ys-sj-name">{s.name}</h3>
        <p className="ys-sj-line">{s.line}</p>
        <p className="ys-sj-label">You get</p>
        <ul>
          {s.gets.map((g) => (
            <li key={g}>
              <span className="ys-sj-check" aria-hidden="true"><Check strokeWidth={3} /></span>
              {g}
            </li>
          ))}
        </ul>
        {next && onNext && (
          <button type="button" className="ys-sj-next" onClick={onNext}>
            Next: {next.name}
            <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="ys-sj-gate">
        <p className="ys-sj-gate-kicker">Your decision</p>
        <p className="ys-sj-gate-q">{s.decision}</p>
        <ul className="ys-sj-options" aria-label="Your options">
          {s.options.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function StageJourney() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const last = LIFECYCLE.length - 1

  const select = (i: number, focus = false) => {
    setActive(i)
    if (focus) tabs.current[i]?.focus()
  }

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const to =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? Math.min(i + 1, last)
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? Math.max(i - 1, 0)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (to === null) return
    e.preventDefault()
    select(to, true)
  }

  const stage = LIFECYCLE[active] ?? LIFECYCLE[0]!
  const goNext = active < last ? () => select(active + 1, true) : null

  return (
    <div className="ys-sj" style={{ ['--sj-progress' as string]: active / last }}>
      {/* The first two stages are the Solution Blueprint. */}
      <a href="/blueprint" className="ys-sj-bracket">
        <span>Solution Blueprint · 2–4 weeks</span>
      </a>

      <div className="ys-sj-rail" role="tablist" aria-label="Delivery stages">
        <span className="ys-sj-track" aria-hidden="true"><span /></span>
        {LIFECYCLE.map((s, i) => {
          const on = i === active
          const state = i < active ? 'is-past' : on ? 'is-active' : ''
          return (
            <div key={s.n} className={`ys-sj-item ${state}`}>
              <button
                ref={(el) => { tabs.current[i] = el }}
                type="button"
                role="tab"
                id={`sj-tab-${i}`}
                aria-selected={on}
                aria-controls="sj-panel"
                tabIndex={on ? 0 : -1}
                className="ys-sj-tab"
                onClick={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="ys-sj-node" aria-hidden="true">
                  {i < active ? <Check strokeWidth={3} /> : s.n}
                </span>
                <span className="ys-sj-tab-text">
                  <span className="ys-sj-tab-name">{s.name}</span>
                  <span className={`ys-sj-tab-when${s.when === 'Solution Blueprint' ? ' is-bracketed' : ''}`}>{s.when}</span>
                </span>
              </button>
              {i < last && <span className="ys-sj-gate-mark" aria-hidden="true" title="Decision point" />}
            </div>
          )
        })}
      </div>

      <div className="ys-sj-stage" role="tabpanel" id="sj-panel" aria-labelledby={`sj-tab-${active}`}>
        <Panel s={stage} i={active} onNext={goNext} />
      </div>

      <p className="ys-sj-legend">
        <span className="ys-sj-gate-mark" aria-hidden="true" /> A decision point. At each one you can continue with
        us, change course, or take the work in-house: the blueprint, the code and the run guide are yours.
      </p>
    </div>
  )
}
