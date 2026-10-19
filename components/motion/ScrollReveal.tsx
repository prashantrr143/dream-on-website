"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll reveal, site-wide (owner request, 2026-10-19: modern motion).
 *
 * Section headings and cards slide up as they enter the viewport, cards
 * staggered by their position in the row. Rules that keep it safe:
 * - The page renders fully visible without JavaScript; this only hides
 *   elements that are below the fold when it runs, so nothing flashes and
 *   nothing shifts layout (the `translate` and `scale` properties only;
 *   never opacity, so content is readable at every moment).
 * - `translate`, not `transform`, so it composes with the cards' own hover
 *   lift instead of fighting it.
 * - Off entirely under prefers-reduced-motion.
 */

const TARGETS = [
  // Section heads
  'main section h2',
  // Cards and tiles
  '.ys-practice',
  '.ys-insight-card',
  '.ys-partner-card',
  '.ys-pp',
  '.ys-hww-principles > li',
  '.ys-hww-models > li',
  '.ys-hww-regions > li',
  '.ys-rai-commit > li',
  '.ys-rai-lines > li',
  '.ys-rai-controls > li',
  '.ys-rai-frameworks > li',
  '.ys-rai-two > div',
  '.ys-ind-build > li',
  '.ys-ind-hub > li',
  '.ys-ind-standards > li',
  '.ys-ind-steps > li',
  '.ys-ind-regions',
  'a.ys-open-item',
  'div.ys-open-item',
  '.ys-sj',
].join(',')

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      // Never inside the header, footer or an open menu.
      (el) => !el.closest('header, footer, nav, [role="dialog"]') && !el.dataset['ysR'],
    )
    const vh = window.innerHeight

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    for (const el of els) {
      el.dataset['ysR'] = '1'
      // Already on screen: leave it exactly as rendered.
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add('is-in', 'is-instant')
        continue
      }
      // Stagger siblings in the same row: 0, 70, 140 ... capped.
      // A card wrapped in an <li> takes the li's position in the list.
      const item = el.parentElement?.tagName === 'LI' && el.parentElement.children.length === 1 ? el.parentElement : el
      const parent = item.parentElement
      const index = parent ? Array.prototype.indexOf.call(parent.children, item) : 0
      el.style.setProperty('--ys-r-delay', `${Math.min(index, 5) * 70}ms`)
      io.observe(el)
    }
    document.documentElement.classList.add('ys-r-on')

    return () => io.disconnect()
  }, [pathname])

  return null
}
