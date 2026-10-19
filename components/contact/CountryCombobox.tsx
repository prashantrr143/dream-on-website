"use client"

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'
import { ALL_COUNTRIES, PRIORITY_COUNTRIES } from '@/lib/countries'

/**
 * Searchable country picker for the contact form (owner request,
 * 2026-10-19: the native select "looks very basic").
 *
 * ARIA 1.2 combobox: the input owns a listbox; arrow keys move the
 * active option, Enter picks it, Escape closes and restores the value.
 * Typing filters both groups; the common countries stay on top when the
 * query is empty. The visible text is never submitted — only `value`,
 * which is always a country from ALL_COUNTRIES or ''.
 */

const OTHERS = ALL_COUNTRIES.filter((c) => !PRIORITY_COUNTRIES.includes(c))

const norm = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

export function CountryCombobox({
  id,
  value,
  onChange,
  invalid,
  describedBy,
}: {
  id: string
  value: string
  onChange: (country: string) => void
  invalid?: boolean | undefined
  describedBy?: string | undefined
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState(value)
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listId = `${useId()}-list`

  // Keep the visible text in step with the chosen value (region default,
  // reset, or a pick).
  useEffect(() => {
    if (!open) setQuery(value)
  }, [value, open])

  const groups = useMemo(() => {
    const q = norm(query === value ? '' : query)
    if (!q) return [
      { label: 'Common', items: PRIORITY_COUNTRIES },
      { label: 'All countries', items: OTHERS },
    ]
    const starts = ALL_COUNTRIES.filter((c) => norm(c).startsWith(q))
    const contains = ALL_COUNTRIES.filter((c) => !norm(c).startsWith(q) && norm(c).includes(q))
    return [{ label: '', items: [...starts, ...contains] }]
  }, [query, value])

  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups])

  // Close on outside click; restore the committed value.
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false)
        setQuery(value)
      }
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open, value])

  // Keep the active option in view.
  useEffect(() => {
    if (!open) return
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const openList = () => {
    setOpen(true)
    const i = flat.indexOf(value)
    setActive(i >= 0 ? i : 0)
  }

  const pick = (country: string) => {
    onChange(country)
    setQuery(country)
    setOpen(false)
  }

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) return openList()
      const d = e.key === 'ArrowDown' ? 1 : -1
      setActive((i) => Math.min(Math.max(i + d, 0), Math.max(flat.length - 1, 0)))
    } else if (e.key === 'Enter') {
      if (open && flat[active]) {
        e.preventDefault()
        pick(flat[active]!)
      }
    } else if (e.key === 'Escape') {
      if (open) {
        e.preventDefault()
        setOpen(false)
        setQuery(value)
      }
    } else if (e.key === 'Tab' && open) {
      // Leaving with an exact match commits it; anything else reverts.
      const exact = ALL_COUNTRIES.find((c) => norm(c) === norm(query))
      if (exact) pick(exact)
      else { setOpen(false); setQuery(value) }
    }
  }

  let index = -1

  return (
    <div ref={rootRef} className={`ys-combo${open ? ' is-open' : ''}`}>
      <div className="ys-combo-control">
        <Search className="ys-combo-icon" aria-hidden="true" strokeWidth={2} />
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && flat[active] ? `${listId}-${active}` : undefined}
          aria-required
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          autoComplete="off"
          placeholder="Search for your country"
          className="ys-input ys-combo-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
            setActive(0)
          }}
          onFocus={(e) => e.target.select()}
          onClick={() => (open ? null : openList())}
          onKeyDown={onKey}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="ys-combo-toggle"
          onClick={() => {
            if (open) { setOpen(false); setQuery(value) } else { openList(); inputRef.current?.focus() }
          }}
        >
          <ChevronDown strokeWidth={2} />
        </button>
      </div>

      {open && (
        <ul ref={listRef} id={listId} role="listbox" aria-label="Countries" className="ys-combo-list">
          {flat.length === 0 && <li className="ys-combo-empty" role="presentation">No country matches “{query}”.</li>}
          {groups.map((g) => (
            <li key={g.label || 'results'} role="presentation">
              {g.label && <p className="ys-combo-group" aria-hidden="true">{g.label}</p>}
              <ul role="group" aria-label={g.label || 'Matches'}>
                {g.items.map((c) => {
                  index += 1
                  const i = index
                  const selected = c === value
                  return (
                    <li
                      key={`${g.label}-${c}`}
                      id={`${listId}-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={selected}
                      className={`ys-combo-option${i === active ? ' is-active' : ''}${selected ? ' is-selected' : ''}`}
                      onPointerDown={(e) => e.preventDefault()}
                      onPointerMove={() => setActive(i)}
                      onClick={() => pick(c)}
                    >
                      <span>{c}</span>
                      {selected && <Check className="ys-combo-check" aria-hidden="true" strokeWidth={2.5} />}
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
