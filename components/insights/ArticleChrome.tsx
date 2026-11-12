'use client'

import { useEffect, useState } from 'react'
import { Check, Link2, Linkedin } from 'lucide-react'

/**
 * Article reading aids (2026-11-12): a thin progress bar under the site
 * header, and share actions (copy link, LinkedIn). Client-only because
 * both need the browser; the article itself stays server-rendered.
 */

export function ReadingProgress({ targetId }: { targetId: string }) {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const done = Math.min(Math.max(-r.top, 0), Math.max(total, 1))
      setPct(total > 0 ? (done / total) * 100 : r.top < 0 ? 100 : 0)
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
  }, [targetId])
  return (
    <div className="ys-art-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${pct / 100})` }} />
    </div>
  )
}

export function ShareActions({ url, title, tone = 'light' }: { url: string; title: string; tone?: 'light' | 'dark' }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link', url)
    }
  }
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  return (
    <div className={`ys-art-share ${tone === 'dark' ? 'is-dark' : ''}`} role="group" aria-label={`Share “${title}”`}>
      <button type="button" onClick={copy} aria-live="polite">
        {copied ? <Check className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" /> : <Link2 className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />}
        {copied ? 'Link copied' : 'Copy link'}
      </button>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
        Share on LinkedIn
      </a>
    </div>
  )
}
