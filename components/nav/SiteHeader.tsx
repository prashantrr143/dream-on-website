"use client"

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { Wordmark } from '@/components/brand/Wordmark'
import { NAV, type NavPanel } from '@/lib/nav'
import { useRegion, REGION_SELECTOR_ENABLED } from '@/lib/region'
import { trackMobileNavOpen, trackNavClick, trackNavOpen, trackSearchOpen } from '@/lib/analytics'
import { MegaPanel, focusables } from './MegaPanel'
import { SearchOverlay } from './SearchOverlay'
import { RegionSelector } from './RegionSelector'
import { MobileNav } from './MobileNav'

/**
 * Site header: TCS-style mega-menu, search takeover and region selector
 * on desktop (>=1200px); a full-height accordion menu below that.
 *
 * Desktop panels open on hover (with a short intent delay) and close
 * shortly after the pointer leaves the header and panel. Clicking a
 * trigger pins its panel open; clicking a pinned trigger closes it.
 * Keyboard: Enter/Space toggles and moves focus into the panel; Esc
 * closes and returns focus; tabbing out of the header closes.
 *
 * Only one of mega-panel / search / region / mobile menu is open at once.
 */

const HOVER_OPEN_MS = 100
const HOVER_CLOSE_MS = 220

type Opened = 'hover' | 'click' | 'key'

export function SiteHeader() {
  const [openId, setOpenId] = useState<string | null>(null)
  // Increments each time the menu opens from closed, so a quick reopen
  // (while the exit animation runs) still starts with no group active and
  // the featured card showing.
  const [openSession, setOpenSession] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [regionOpen, setRegionOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [region, setRegion] = useRegion()

  const headerRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const regionTriggerRef = useRef<HTMLButtonElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const searchOpenerRef = useRef<HTMLButtonElement | null>(null)
  const openedBy = useRef<Opened | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const reduce = useReducedMotion()
  const uid = useId()
  const regionId = `${uid}-mega`
  const mobileId = `${uid}-mobile`

  const openPanel = NAV.find((n): n is NavPanel => n.kind === 'panel' && n.id === openId) ?? null

  const clearHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = null
  }
  useEffect(() => clearHover, [])

  const showPanel = useCallback((id: string, how: Opened) => {
    setSearchOpen(false)
    setRegionOpen(false)
    setOpenId((cur) => {
      if (cur !== id) trackNavOpen(id)
      if (cur === null) setOpenSession((n) => n + 1)
      return id
    })
    openedBy.current = how
  }, [])

  const closePanel = useCallback((returnFocus = false) => {
    clearHover()
    setOpenId((id) => {
      if (returnFocus && id) triggerRefs.current[id]?.focus()
      return null
    })
    openedBy.current = null
  }, [])

  /* ---- Hover (mouse only; touch and pen use click) ---- */
  const onTriggerEnter = (e: React.PointerEvent, id: string) => {
    if (e.pointerType !== 'mouse') return
    clearHover()
    // Already open (any panel): switch instantly; otherwise wait briefly
    // so a pointer just passing over the bar does not flash a panel.
    if (openId) {
      if (openId !== id && openedBy.current === 'hover') showPanel(id, 'hover')
      return
    }
    hoverTimer.current = setTimeout(() => showPanel(id, 'hover'), HOVER_OPEN_MS)
  }
  const onTriggerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    if (!openId) clearHover()
  }
  // Pointing at a non-panel item (logo, "How we work", CTA) closes a hover panel.
  const onPlainEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || openedBy.current !== 'hover') return
    clearHover()
    hoverTimer.current = setTimeout(() => closePanel(), HOVER_OPEN_MS)
  }
  const onHeaderEnter = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && openedBy.current === 'hover') clearHover()
  }
  const onHeaderLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    clearHover()
    if (openedBy.current === 'hover') hoverTimer.current = setTimeout(() => closePanel(), HOVER_CLOSE_MS)
  }

  /* ---- Click / keyboard ---- */
  const onTriggerClick = (e: React.MouseEvent, id: string) => {
    clearHover()
    const viaKeyboard = e.detail === 0
    if (openId === id) {
      // A hover-opened panel is pinned by the click rather than closed.
      if (openedBy.current === 'hover' && !viaKeyboard) {
        openedBy.current = 'click'
        return
      }
      return closePanel()
    }
    showPanel(id, viaKeyboard ? 'key' : 'click')
    if (viaKeyboard) requestAnimationFrame(() => requestAnimationFrame(() => focusables(introRef.current)[0]?.focus()))
  }

  const openSearch = (opener: HTMLButtonElement) => {
    searchOpenerRef.current = opener
    closePanel()
    setRegionOpen(false)
    setMobileOpen(false)
    setSearchOpen(true)
    trackSearchOpen()
  }
  const closeSearch = useCallback(() => {
    setSearchOpen(false)
    searchOpenerRef.current?.focus()
  }, [])

  const toggleRegion = () => {
    closePanel()
    setSearchOpen(false)
    setRegionOpen((v) => !v)
  }

  const toggleMobile = () => {
    setSearchOpen(false)
    setMobileOpen((v) => {
      if (!v) trackMobileNavOpen()
      return !v
    })
  }
  const closeMobile = useCallback((returnFocus = true) => {
    setMobileOpen(false)
    if (returnFocus) burgerRef.current?.focus()
  }, [])

  /* ---- Global listeners: Esc, outside click, focus trap ---- */
  useEffect(() => {
    if (!openId && !regionOpen && !mobileOpen && !searchOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (searchOpen) closeSearch()
        else if (openId) closePanel(true)
        else if (regionOpen) {
          setRegionOpen(false)
          regionTriggerRef.current?.focus()
        } else if (mobileOpen) closeMobile()
        return
      }
      // Keep Tab inside the header while the mobile menu or search is open.
      if (e.key === 'Tab' && (mobileOpen || searchOpen) && headerRef.current) {
        const items = focusables(headerRef.current).filter((el) => el.offsetParent !== null && el.tabIndex !== -1)
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
    const onDown = (e: MouseEvent) => {
      if (headerRef.current?.contains(e.target as Node)) return
      if (openId) closePanel()
      if (regionOpen) setRegionOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [openId, regionOpen, mobileOpen, searchOpen, closePanel, closeSearch, closeMobile])

  // Scroll lock for the search takeover and the mobile menu only; the
  // desktop mega-menu never locks scroll.
  useEffect(() => {
    const lock = searchOpen || mobileOpen
    document.documentElement.style.overflow = lock ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [searchOpen, mobileOpen])

  // Crossing the desktop breakpoint closes whatever belongs to the other layout.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px)')
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
      else {
        setOpenId(null)
        setRegionOpen(false)
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const onNavigate = (group: string | null, label: string, href: string) => {
    if (openId) trackNavClick(openId, group, label, href)
    closePanel()
  }

  const onSelectRegion = (slug: string) => {
    setRegion(slug)
    setRegionOpen(false)
    regionTriggerRef.current?.focus()
  }

  return (
    <header
      ref={headerRef}
      className={`ys-hdr${openId || regionOpen || searchOpen ? ' is-open' : ''}${mobileOpen ? ' is-mobile-open' : ''}`}
      onPointerEnter={onHeaderEnter}
      onPointerLeave={onHeaderLeave}
      // Tabbing out of the header closes a desktop panel or the region menu.
      onBlur={(e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return
        if (openId) closePanel()
        if (regionOpen) setRegionOpen(false)
      }}
    >
      <div className="ys-hdr-container ys-hdr-bar">
        {/* Mobile: search at the far left */}
        <button
          type="button"
          className="ys-hdr-icon ys-hdr-search-m"
          aria-label="Search"
          onClick={(e) => openSearch(e.currentTarget)}
        >
          <Search className="w-[22px] h-[22px]" strokeWidth={1.75} aria-hidden="true" />
        </button>

        <a href="/" className="ys-nav-logo ys-hdr-logo" aria-label="YatiSphere home" onPointerEnter={onPlainEnter}>
          <Wordmark tone="dark" height={56} priority />
        </a>

        <nav aria-label="Main" className="ys-hdr-nav">
          <ul>
            {NAV.map((item) =>
              item.kind === 'link' ? (
                <li key={item.id}>
                  <a href={item.href} className="ys-hdr-trigger" onPointerEnter={onPlainEnter}>
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id} onPointerEnter={(e) => onTriggerEnter(e, item.id)} onPointerLeave={onTriggerLeave}>
                  <button
                    type="button"
                    ref={(el) => { triggerRefs.current[item.id] = el }}
                    className={`ys-hdr-trigger${openId === item.id ? ' is-open' : ''}`}
                    aria-expanded={openId === item.id}
                    aria-controls={openId === item.id ? regionId : undefined}
                    onClick={(e) => onTriggerClick(e, item.id)}
                  >
                    {item.label}
                    <ChevronDown className="ys-hdr-chev" strokeWidth={2} aria-hidden="true" />
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="ys-hdr-right" onPointerEnter={onPlainEnter}>
          <button
            type="button"
            className="ys-hdr-icon"
            aria-label="Search"
            onClick={(e) => openSearch(e.currentTarget)}
          >
            <Search className="w-[22px] h-[22px]" strokeWidth={1.75} aria-hidden="true" />
          </button>
          {REGION_SELECTOR_ENABLED && (
          <RegionSelector
            region={region}
            open={regionOpen}
            onToggle={toggleRegion}
            onSelect={onSelectRegion}
            triggerRef={regionTriggerRef}
          />
          )}
          {/* Opens the "How can we help?" overlay (components/contact). */}
          <a href="/contact-us" className="ys-hdr-contact">
            Talk to us
          </a>
        </div>

        <button
          ref={burgerRef}
          type="button"
          onClick={toggleMobile}
          className={`ys-hdr-burger${mobileOpen ? ' is-open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? mobileId : undefined}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Page scrim under an open mega-panel: separates the menu from the
          page. Click closes and returns focus to the trigger; pointing at
          it closes a hover-opened panel. No scroll lock. */}
      <AnimatePresence>
        {openPanel && (
          <motion.div
            key="scrim"
            className="ys-nav-scrim"
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onMouseDown={(e) => {
              e.preventDefault()
              closePanel(true)
            }}
            onPointerEnter={onPlainEnter}
          />
        )}
      </AnimatePresence>

      {/* Desktop mega-panel. Keyed on open/closed only, so switching
          triggers swaps the content without replaying the animation. */}
      <AnimatePresence>
        {openPanel && (
          <motion.div
            key="mega"
            id={regionId}
            role="region"
            aria-label={openPanel.label}
            className="ys-mega"
            initial={reduce ? false : { opacity: 0, y: -10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -6, scale: 0.99, transition: { duration: 0.16 } }}
            transition={{ duration: reduce ? 0 : 0.32, ease: [0.23, 1, 0.32, 1] }}
          >
            <MegaPanel key={openSession} panel={openPanel} regionId={regionId} introRef={introRef} onNavigate={onNavigate} />
          </motion.div>
        )}
      </AnimatePresence>

      {searchOpen && <SearchOverlay onClose={closeSearch} />}

      {mobileOpen && (
        <MobileNav
          id={mobileId}
          region={region}
          onSelectRegion={(slug) => setRegion(slug)}
          onNavigate={() => closeMobile(false)}
        />
      )}
    </header>
  )
}

export default SiteHeader
