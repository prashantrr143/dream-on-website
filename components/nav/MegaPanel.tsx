"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { HeroVisual } from '@/components/brand/HeroVisual'
import type { NavGroup, NavPanel } from '@/lib/nav'
import { trackNavGroup } from '@/lib/analytics'

/**
 * One mega-panel: A (intro), B (groups or links), C (active group's
 * links). Group rows use hover intent plus a "safe triangle", so moving
 * diagonally from B toward C does not switch groups on the way.
 */

const HOVER_INTENT_MS = 120
const MAX_DEFERS = 4

type Point = { x: number; y: number }

/** True if p lies inside triangle abc. */
function inTriangle(p: Point, a: Point, b: Point, c: Point) {
  const s = (p1: Point, p2: Point, p3: Point) => (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y)
  const d1 = s(p, a, b)
  const d2 = s(p, b, c)
  const d3 = s(p, c, a)
  const neg = d1 < 0 || d2 < 0 || d3 < 0
  const pos = d1 > 0 || d2 > 0 || d3 > 0
  return !(neg && pos)
}

export function focusables(root: HTMLElement | null): HTMLElement[] {
  if (!root) return []
  return Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
}

export function MegaPanel({
  panel,
  regionId,
  introRef,
  onNavigate,
}: {
  panel: NavPanel
  regionId: string
  introRef: React.RefObject<HTMLDivElement | null>
  onNavigate: (group: string | null, label: string, href: string) => void
}) {
  const [active, setActive] = useState<number | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const cRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const points = useRef<Point[]>([])
  const cId = `${regionId}-c`

  // Opening another panel resets the group selection.
  useEffect(() => setActive(null), [panel.id])
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  const activate = useCallback(
    (i: number) => {
      setActive((prev) => {
        if (prev !== i) trackNavGroup(panel.id, panel.groups[i]?.label ?? '')
        return i
      })
    },
    [panel]
  )

  /** Moving diagonally toward region C should not switch groups. */
  const headingToC = () => {
    const c = cRef.current?.getBoundingClientRect()
    const [prev, cur] = points.current.slice(-2)
    if (!c || !prev || !cur || active === null) return false
    return inTriangle(cur, prev, { x: c.left, y: c.top }, { x: c.left, y: c.bottom }) && cur.x > prev.x
  }

  const scheduleHover = (i: number, defers = 0) => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (defers < MAX_DEFERS && headingToC()) scheduleHover(i, defers + 1)
      else activate(i)
    }, HOVER_INTENT_MS)
  }

  const rowButtons = () => Array.from(listRef.current?.querySelectorAll<HTMLElement>('.ys-mega-row') ?? [])
  const cLinks = () => Array.from(cRef.current?.querySelectorAll<HTMLElement>('a') ?? [])

  const onRowKey = (e: React.KeyboardEvent, i: number, group: NavGroup) => {
    const rows = rowButtons()
    const idx = rows.indexOf(e.currentTarget as HTMLElement)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = rows[(idx + (e.key === 'ArrowDown' ? 1 : -1) + rows.length) % rows.length]
      next?.focus()
    } else if (e.key === 'ArrowRight' && group.children) {
      e.preventDefault()
      activate(i)
      requestAnimationFrame(() => cLinks()[0]?.focus())
    }
  }

  const onCKey = (e: React.KeyboardEvent) => {
    const links = cLinks()
    const idx = links.indexOf(document.activeElement as HTMLElement)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      links[(idx + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus()
    } else if (e.key === 'ArrowLeft' && active !== null) {
      e.preventDefault()
      rowButtons()[active]?.focus()
    }
  }

  const activeGroup = active !== null ? panel.groups[active] : null
  const hasGroups = panel.groups.some((g) => g.children)
  const featured = panel.featured

  return (
    <div className="ys-hdr-container ys-mega-inner">
      {/* A — intro */}
      <div className="ys-mega-a" ref={introRef}>
        <p className="ys-mega-heading">{panel.intro.heading}</p>
        <p className="ys-mega-body">{panel.intro.body}</p>
        <a
          href={panel.intro.link.href}
          className="ys-mega-arrow"
          onClick={() => onNavigate(null, panel.intro.link.label, panel.intro.link.href)}
        >
          {panel.intro.link.label}
          <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>

      {/* B — groups, or a plain link list */}
      <ul
        className="ys-mega-b"
        ref={listRef}
        onMouseMove={(e) => {
          points.current.push({ x: e.clientX, y: e.clientY })
          if (points.current.length > 4) points.current.shift()
        }}
        onMouseLeave={() => { if (timer.current) clearTimeout(timer.current) }}
      >
        {panel.groups.map((group, i) => (
          <li key={group.label}>
            {group.children ? (
              <button
                type="button"
                className={`ys-mega-row${active === i ? ' is-active' : ''}`}
                aria-expanded={active === i}
                aria-controls={cId}
                onMouseEnter={() => scheduleHover(i)}
                onFocus={() => activate(i)}
                onClick={() => activate(i)}
                onKeyDown={(e) => onRowKey(e, i, group)}
              >
                <span>{group.label}</span>
                <span className="sr-only">. Press Enter to open submenu items</span>
                <ChevronRight className="ys-mega-row-chev" strokeWidth={1.75} aria-hidden="true" />
              </button>
            ) : (
              <a
                href={group.href}
                className="ys-mega-row"
                onKeyDown={(e) => onRowKey(e, i, group)}
                onMouseEnter={() => { if (timer.current) clearTimeout(timer.current) }}
                onClick={() => onNavigate(null, group.label, group.href ?? '')}
              >
                <span>{group.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* C — the active group's links. Empty until a group is chosen. */}
      {(hasGroups || featured) && (
        <div
          id={cId}
          className="ys-mega-c"
          ref={cRef}
          onMouseEnter={() => { if (timer.current) clearTimeout(timer.current) }}
          onKeyDown={onCKey}
          aria-label={activeGroup ? activeGroup.label : undefined}
          role={activeGroup ? 'region' : undefined}
        >
          {/* Default content: the featured card, until a group is chosen. */}
          {!activeGroup && featured && (
            <a
              href={featured.href}
              className="ys-mega-featured"
              onClick={() => onNavigate(null, featured.title, featured.href)}
            >
              <span className="ys-mega-featured-media" aria-hidden={featured.image ? undefined : true}>
                {featured.image ? (
                  <Image src={featured.image} alt={featured.imageAlt ?? ''} fill sizes="520px" style={{ objectFit: 'cover' }} />
                ) : (
                  <HeroVisual motif="circuit" seed={featured.title} />
                )}
              </span>
              <span className="ys-mega-featured-kicker">{featured.kicker}</span>
              <span className="ys-mega-featured-title">{featured.title}</span>
              <span className="ys-mega-featured-summary">{featured.summary}</span>
              <span className="ys-mega-featured-more">
                Read more <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </span>
            </a>
          )}
          {activeGroup?.children && (
            <ul className="ys-mega-cols">
              {activeGroup.children.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="ys-mega-link"
                    onClick={() => onNavigate(activeGroup.label, link.label, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

