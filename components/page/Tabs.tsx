"use client"

import { useId, useRef, useState } from 'react'

/**
 * Accessible tabs (WAI-ARIA tablist): arrow keys move between tabs,
 * Home/End jump, the active panel is the only one shown.
 */
export function Tabs({
  tabs,
  onSelect,
}: {
  tabs: { label: string; content: React.ReactNode }[]
  onSelect?: (label: string) => void
}) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const uid = useId()

  const select = (i: number, focus = false) => {
    setActive(i)
    onSelect?.(tabs[i]?.label ?? '')
    if (focus) refs.current[i]?.focus()
  }

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const last = tabs.length - 1
    if (e.key === 'ArrowRight') select(i === last ? 0 : i + 1, true)
    else if (e.key === 'ArrowLeft') select(i === 0 ? last : i - 1, true)
    else if (e.key === 'Home') select(0, true)
    else if (e.key === 'End') select(last, true)
    else return
    e.preventDefault()
  }

  return (
    <div>
      <div role="tablist" className="ys-tabs" aria-orientation="horizontal">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => { refs.current[i] = el }}
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${uid}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={`ys-tab${active === i ? ' is-active' : ''}`}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.label}
          role="tabpanel"
          id={`${uid}-panel-${i}`}
          aria-labelledby={`${uid}-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className="ys-tabpanel"
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}
