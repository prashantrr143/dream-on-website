'use client'

import { useState } from 'react'
import { ArrowRight, Code, Landmark, Scale } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { UseCase, UseCaseSector } from '@/content/pages/types'

/**
 * High-value use cases (2026-11-11, Local AI page). Unlike the other
 * blocks, each card shows its full text: the point is the detail (what
 * runs, why it must stay local, who decides), and one sentence would
 * reduce every card to a headline. Sector chips filter the grid.
 */

const SECTORS: Record<UseCaseSector, { label: string; Icon: LucideIcon }> = {
  law: { label: 'Law firms', Icon: Scale },
  banking: { label: 'Banks and lenders', Icon: Landmark },
  saas: { label: 'SaaS and engineering', Icon: Code },
}

export function UseCases({ items }: { items: UseCase[] }) {
  const [filter, setFilter] = useState<UseCaseSector | 'all'>('all')
  const present = (Object.keys(SECTORS) as UseCaseSector[]).filter((s) => items.some((i) => i.sector === s))
  const shown = filter === 'all' ? items : items.filter((i) => i.sector === filter)

  return (
    <>
      <div className="ys-uc-filter" role="group" aria-label="Filter use cases by sector">
        {(['all', ...present] as const).map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={filter === s}
            className={filter === s ? 'is-on' : ''}
            onClick={() => setFilter(s)}
          >
            {s === 'all' ? 'All' : SECTORS[s].label}
          </button>
        ))}
      </div>
      <ul className="ys-uc-grid">
        {shown.map((u) => {
          const { label, Icon } = SECTORS[u.sector]
          return (
            <li key={u.title} className="ys-uc">
              <p className="ys-uc-tag">
                <Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" /> {label}
              </p>
              <h3>{u.title}</h3>
              <p className="ys-uc-problem">&ldquo;{u.problem}&rdquo;</p>
              <dl className="ys-uc-dl">
                <div>
                  <dt>What runs locally</dt>
                  <dd>{u.local}</dd>
                </div>
                <div>
                  <dt>Why it stays local</dt>
                  <dd>{u.why}</dd>
                </div>
                <div>
                  <dt>Who decides</dt>
                  <dd>{u.decides}</dd>
                </div>
              </dl>
              <p className="ys-uc-value">{u.value}</p>
              {u.href && (
                <a href={u.href} className="ys-uc-link">
                  {u.linkLabel ?? 'Read more'}
                  <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}
