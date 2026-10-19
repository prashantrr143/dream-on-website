"use client"

import { useEffect, useState } from 'react'

/**
 * "On this page" for Insights articles. Sticky beside the text on wide
 * screens; a collapsed list above it on small ones. Highlights the
 * section being read.
 */
export function ArticleToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e)
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      // A section counts as "being read" once its heading passes the top fifth.
      { rootMargin: '-96px 0px -70% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [items])

  if (items.length < 2) return null

  const list = (
    <ol>
      {items.map((i, n) => (
        <li key={i.id}>
          <a href={`#${i.id}`} aria-current={active === i.id ? 'location' : undefined} onClick={() => setActive(i.id)}>
            <span aria-hidden="true">{String(n + 1).padStart(2, '0')}</span>
            {i.label}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <nav className="ys-art-toc" aria-label="On this page">
      <details className="ys-art-toc-mobile">
        <summary>On this page</summary>
        {list}
      </details>
      <div className="ys-art-toc-desktop">
        <p className="ys-art-toc-title">On this page</p>
        {list}
      </div>
    </nav>
  )
}
