"use client"

import { motion, useIsPresent } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { NavLink, NavPanel } from '@/lib/nav'

/**
 * One mega-menu panel, simplified (2026-11-01, SEO and marketing review:
 * "too much noise, looks AI generated"). Plain columns of links: each group
 * with children is a column under a small heading; groups that are single
 * links share one column. One quiet footer link where the panel has one.
 * No icons, descriptions, featured cards, tick lists or GSAP.
 */

export function focusables(root: HTMLElement | null): HTMLElement[] {
  if (!root) return []
  return Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
}

export function MegaPanel({
  panel,
  regionId,
  introRef,
  onNavigate,
  stagger = false,
}: {
  panel: NavPanel
  regionId: string
  introRef: React.RefObject<HTMLDivElement | null>
  onNavigate: (group: string | null, label: string, href: string) => void
  /** Columns fade in on first open only, never on switch. */
  stagger?: boolean
}) {
  const present = useIsPresent()
  const anim = stagger
    ? { initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const } }
    : { initial: false as const }

  const columns = panel.groups.filter((g) => g.children && g.children.length > 0)
  const singles: NavLink[] = panel.groups.filter((g) => !g.children && g.href).map((g) => ({ label: g.label, href: g.href! }))

  return (
    <div className="ys-hdr-container ys-mega2" inert={!present} aria-hidden={present ? undefined : true} id={`${regionId}-c`}>
      <motion.div
        className={`ys-mega2-cols${columns.length === 0 ? ' is-list' : ''}`}
        ref={(el: HTMLDivElement | null) => { if (el && present) introRef.current = el }}
        {...anim}
      >
        {columns.map((g) => (
          <div key={g.label} className="ys-mega2-col">
            <p className="ys-mega2-heading">{g.label}</p>
            <ul>
              {g.children!.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => onNavigate(g.label, l.label, l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {singles.length > 0 && (
          <div className="ys-mega2-col">
            <ul>
              {singles.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => onNavigate(null, l.label, l.href)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {panel.footer && (
        <div className="ys-mega2-foot">
          <a href={panel.footer.href} onClick={() => onNavigate(null, panel.footer!.label, panel.footer!.href)}>
            {panel.footer.label}
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  )
}
