"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { normalizeInterest, SERVICE_INTERESTS } from '@/lib/countries'

/**
 * "How can we help?" contact overlay (revamp brief section 5).
 *
 * Opens from any link to /contact-us (header "Contact us", every "Talk to
 * our experts"), carrying ?interest= as a preset. Without JavaScript, or
 * with a modified click, those links go to the /contact-us page instead.
 * Modal dialog: focus trapped, Esc closes, focus returns to the opener.
 */

/**
 * One path only (2026-11-01): the overlay opens straight on the services
 * form. Partnership, careers, media and feedback topics were removed for a
 * young firm; a link that presets another known topic (e.g. the Trust
 * center's "Security pack") still opens that topic's form.
 */
const TITLES: Record<string, string> = { services: 'Talk to us', 'Security pack': 'Request NDA and security pack' }

export function ContactOverlay() {
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState<string | null>(null)
  const [interest, setInterest] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setTopic(null)
    openerRef.current?.focus()
  }, [])

  // Intercept plain left-clicks on links to /contact-us anywhere on the page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname !== '/contact-us') return
      if (window.location.pathname === '/contact-us') return
      e.preventDefault()
      openerRef.current = a
      const preset = normalizeInterest(url.searchParams.get('interest'))
      setInterest(preset)
      // A service preset goes straight to the form; anything else to the menu
      // (or straight to that topic's form when the preset is a topic).
      if (preset === 'Security pack') setTopic(preset)
      else setTopic('services')
      setOpen(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Focus management, Esc, focus trap, scroll lock.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    requestAnimationFrame(() => panel?.querySelector<HTMLElement>('h2')?.focus())
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        close()
      } else if (e.key === 'Tab' && panel) {
        const items = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]')).filter(
          (el) => el.offsetParent !== null && el.tabIndex !== -1
        )
        const first = items[0]
        const last = items[items.length - 1]
        if (!first || !last) return
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey, true)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey, true)
      document.documentElement.style.overflow = ''
    }
  }, [open, close])

  if (!open) return null
  const formTopic = topic ?? 'services'

  return (
    <div className="ys-overlay" role="presentation">
      <div className="ys-overlay-backdrop" aria-hidden="true" onMouseDown={close} />
      <div ref={panelRef} className="ys-overlay-panel" role="dialog" aria-modal="true" aria-labelledby="ys-overlay-title">
        <div className="ys-overlay-head">
          <h2 id="ys-overlay-title" tabIndex={-1}>
            {TITLES[formTopic] ?? 'Talk to us'}
          </h2>
          <button type="button" className="ys-overlay-icon" aria-label="Close" onClick={close}>
            <X className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <ContactForm key={formTopic} topic={formTopic} initialInterest={SERVICE_INTERESTS.includes(interest as (typeof SERVICE_INTERESTS)[number]) ? interest : ''} onDone={close} />
      </div>
    </div>
  )
}
