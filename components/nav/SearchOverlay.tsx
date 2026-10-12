"use client"

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { SEARCH_TYPES, searchEntries, type SearchEntry } from '@/lib/search-core'
import { trackSearchSubmit } from '@/lib/analytics'
import { SEARCH_TYPEAHEAD } from '@/lib/nav'

/**
 * Search bar that takes over the header (TCS-style), with a dark
 * backdrop over the page. Enter goes to /search?q=.
 *
 * The type-ahead is an enhancement over TCS (which has none): up to six
 * results grouped by type, from the build-time /search-index.json.
 * Switch it off with SEARCH_TYPEAHEAD in lib/nav.ts.
 */

let indexCache: Promise<SearchEntry[]> | null = null
const loadIndex = () =>
  (indexCache ??= fetch('/search-index.json')
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => []))

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<SearchEntry[] | null>(null)
  const [active, setActive] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const uid = useId()
  const listId = `${uid}-results`

  useEffect(() => {
    inputRef.current?.focus()
    if (SEARCH_TYPEAHEAD) loadIndex().then(setIndex)
  }, [])

  // Grouped in a fixed type order; `flat` is the keyboard order.
  const { groups, flat } = useMemo(() => {
    const hits = index && query.trim().length >= 2 ? searchEntries(index, query, 6) : []
    const groups = SEARCH_TYPES.map((type) => ({ type, items: hits.filter((h) => h.type === type) })).filter(
      (g) => g.items.length
    )
    return { groups, flat: groups.flatMap((g) => g.items) }
  }, [index, query])

  useEffect(() => setActive(-1), [query])

  const optionId = (i: number) => `${uid}-opt-${i}`
  const expanded = flat.length > 0

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const pick = flat[active]
    const q = query.trim()
    if (pick) {
      window.location.href = pick.href
      return
    }
    if (!q) return
    trackSearchSubmit(q.length)
    window.location.href = `/search?q=${encodeURIComponent(q)}`
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!expanded) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => (a + 1) % flat.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => (a <= 0 ? flat.length - 1 : a - 1))
    }
  }

  let n = -1
  return (
    <div className="ys-search" role="search">
      <div className="ys-search-backdrop" aria-hidden="true" onMouseDown={onClose} />
      <div className="ys-search-bar">
        <form className="ys-hdr-container ys-search-row" onSubmit={submit}>
          <Search className="ys-search-icon" strokeWidth={2} aria-hidden="true" />
          <label htmlFor={`${uid}-q`} className="sr-only">
            Search the site
          </label>
          <input
            ref={inputRef}
            id={`${uid}-q`}
            type="text"
            name="q"
            className="ys-search-input"
            placeholder="What are you looking for?"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            {...(SEARCH_TYPEAHEAD
              ? {
                  role: 'combobox',
                  'aria-autocomplete': 'list' as const,
                  'aria-expanded': expanded,
                  'aria-controls': listId,
                  'aria-activedescendant': active >= 0 ? optionId(active) : undefined,
                }
              : {})}
          />
          <button type="button" className="ys-search-close" aria-label="Close search" onClick={onClose}>
            <X className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </form>

        {SEARCH_TYPEAHEAD && (
          <div className="ys-hdr-container">
            <div id={listId} role="listbox" aria-label="Suggestions" className="ys-search-results" hidden={!expanded}>
              {groups.map((g) => (
                <div key={g.type} role="group" aria-labelledby={`${uid}-${g.type}`}>
                  <div id={`${uid}-${g.type}`} role="presentation" className="ys-search-group">
                    {g.type}
                  </div>
                  {g.items.map((item) => {
                    n += 1
                    const i = n
                    return (
                      <a
                        key={item.href}
                        id={optionId(i)}
                        href={item.href}
                        role="option"
                        aria-selected={active === i}
                        tabIndex={-1}
                        className={`ys-search-option${active === i ? ' is-active' : ''}`}
                        onMouseEnter={() => setActive(i)}
                      >
                        <span className="ys-search-option-title">{item.title}</span>
                        <span className="ys-search-option-desc">{item.description}</span>
                      </a>
                    )
                  })}
                </div>
              ))}
            </div>
            {/* Live count for screen readers */}
            <p className="sr-only" aria-live="polite">
              {query.trim().length >= 2 && index
                ? `${flat.length} suggestion${flat.length === 1 ? '' : 's'}`
                : ''}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
