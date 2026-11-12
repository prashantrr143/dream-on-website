"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { BookOpen, Check, MessageCircleQuestion } from 'lucide-react'

/**
 * "On this page" for Insights articles (v2, 2026-11-12).
 *
 * Reads the article's structure instead of listing headings flat:
 * - "Part one: tool design" headings become group labels, not entries.
 * - Headings that carry their own number ("4. Returning…") keep that
 *   number once, instead of a second running count beside it.
 * - Articles without numbered headings get a running 01, 02, 03.
 * - Back matter (common questions, sources) is never numbered: it sits
 *   under a small "Reference" divider with an icon, the same in every article.
 *
 * And tracks the reader: the current section is highlighted, sections
 * already passed are ticked, a counter and bar show progress, and the
 * list keeps the current entry in view. Sticky beside the text on wide
 * screens; a collapsed list above it on small ones.
 */

type Raw = { id: string; label: string; back?: 'faq' | 'sources' }
type Entry =
  | { kind: 'group'; id: string; eyebrow: string; label: string }
  | { kind: 'divider'; id: string; label: string }
  | { kind: 'item'; id: string; num: string | null; label: string; index: number; back?: 'faq' | 'sources' }

const PART = /^part\s+([a-z0-9-]+)\s*[:.–-]\s*(.+)$/i
const NUMBERED = /^(\d{1,2})[.)]\s+(.+)$/

function structure(items: Raw[]): { entries: Entry[]; total: number } {
  const hasOwnNumbers = items.some((i) => NUMBERED.test(i.label))
  let index = 0
  let running = 0
  const entries: Entry[] = []
  for (const i of items) {
    if (i.back) {
      if (!entries.some((e) => e.kind === 'divider')) entries.push({ kind: 'divider', id: 'toc-reference', label: 'Reference' })
      entries.push({ kind: 'item', id: i.id, num: null, label: i.label, index, back: i.back })
      index += 1
      continue
    }
    const part = i.label.match(PART)
    if (part) {
      const label = part[2]!.charAt(0).toUpperCase() + part[2]!.slice(1)
      entries.push({ kind: 'group', id: i.id, eyebrow: `Part ${part[1]}`, label })
      continue
    }
    const numbered = i.label.match(NUMBERED)
    const entry: Entry = numbered
      ? { kind: 'item', id: i.id, num: numbered[1]!.padStart(2, '0'), label: numbered[2]!, index }
      : { kind: 'item', id: i.id, num: hasOwnNumbers ? null : String(++running).padStart(2, '0'), label: i.label, index }
    index += 1
    entries.push(entry)
  }
  return { entries, total: index }
}

export function ArticleToc({ items }: { items: Raw[] }) {
  const { entries, total } = useMemo(() => structure(items), [items])
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const listRef = useRef<HTMLDivElement>(null)

  // The current section is the last heading that has scrolled past the
  // reading line just under the sticky header.
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e)
    if (els.length === 0) return
    let raf = 0
    const update = () => {
      raf = 0
      const line = 140
      let current = els[0]!.id
      for (const el of els) {
        if (el.getBoundingClientRect().top - line <= 0) current = el.id
        else break
      }
      // At the very bottom, the last entry is the one being read.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = els[els.length - 1]!.id
      setActiveId(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [items])

  // Keep the current entry visible inside the scrollable list, without
  // moving the page itself.
  useEffect(() => {
    const box = listRef.current
    const el = box?.querySelector<HTMLElement>(`[data-toc-id="${CSS.escape(activeId)}"]`)
    if (!box || !el) return
    const top = el.offsetTop - box.offsetTop
    if (top < box.scrollTop + 24 || top + el.offsetHeight > box.scrollTop + box.clientHeight - 24) {
      box.scrollTo({ top: Math.max(top - box.clientHeight / 3, 0), behavior: 'smooth' })
    }
  }, [activeId])

  if (items.length < 2) return null

  // A group label counts as "active" for the item that follows it.
  const activeEntry = entries.find((e) => e.id === activeId)
  const activeIndex =
    activeEntry?.kind === 'item'
      ? activeEntry.index
      : (entries.slice(entries.findIndex((e) => e.id === activeId)).find((e) => e.kind === 'item') as Extract<Entry, { kind: 'item' }> | undefined)?.index ?? 0
  const pct = total > 1 ? Math.round((activeIndex / (total - 1)) * 100) : 100
  const current = entries.find((e) => e.kind === 'item' && e.index === activeIndex) as Extract<Entry, { kind: 'item' }> | undefined

  const list = (
    <ol className="ys-toc-list">
      {entries.map((e) =>
        e.kind === 'divider' ? (
          <li key={e.id} className="ys-toc-divider" aria-hidden="true">
            <span>{e.label}</span>
          </li>
        ) : e.kind === 'group' ? (
          <li key={e.id} className="ys-toc-group" data-toc-id={e.id}>
            <a href={`#${e.id}`} onClick={() => setActiveId(e.id)}>
              <span className="ys-toc-eyebrow">{e.eyebrow}</span>
              <span className="ys-toc-group-label">{e.label}</span>
            </a>
          </li>
        ) : (
          <li
            key={e.id}
            data-toc-id={e.id}
            className={`ys-toc-item${e.index === activeIndex ? ' is-active' : ''}${e.index < activeIndex ? ' is-read' : ''}`}
          >
            <a href={`#${e.id}`} aria-current={e.index === activeIndex ? 'location' : undefined} onClick={() => setActiveId(e.id)}>
              <span className="ys-toc-num" aria-hidden="true">
                {e.index < activeIndex ? (
                  <Check className="w-3.5 h-3.5" strokeWidth={2.75} />
                ) : e.back === 'faq' ? (
                  <MessageCircleQuestion className="w-3.5 h-3.5" strokeWidth={2.25} />
                ) : e.back === 'sources' ? (
                  <BookOpen className="w-3.5 h-3.5" strokeWidth={2.25} />
                ) : (
                  (e.num ?? '•')
                )}
              </span>
              <span className="ys-toc-label">{e.label}</span>
            </a>
          </li>
        ),
      )}
    </ol>
  )

  const progress = (
    <div className="ys-toc-progress" aria-hidden="true">
      <span style={{ width: `${pct}%` }} />
    </div>
  )

  return (
    <nav className="ys-art-toc ys-toc" aria-label="On this page">
      <details className="ys-toc-mobile">
        <summary>
          <span className="ys-toc-title">On this page</span>
          {current && <span className="ys-toc-now">{current.label}</span>}
        </summary>
        {progress}
        {list}
      </details>
      <div className="ys-toc-desktop">
        <div className="ys-toc-head">
          <p className="ys-toc-title">On this page</p>
          <p className="ys-toc-count">
            <span>{activeIndex + 1}</span> / {total}
          </p>
        </div>
        {progress}
        <div className="ys-toc-scroll" ref={listRef}>
          {list}
        </div>
      </div>
    </nav>
  )
}
