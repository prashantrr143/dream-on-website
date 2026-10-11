"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wordmark } from '@/components/brand/Wordmark'
import { IT_SERVICES, AI_SERVICES, FEATURED_INDUSTRIES } from '@/lib/services'
import { hasArticles } from '@/lib/perspectives'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import { PRIMARY_CTA } from '@/lib/cta'

interface DropdownItem {
  name: string
  /** Optional supporting line, shown muted under the item name. */
  meta?: string
  href: string
  /** The section overview link, set apart from the leaf pages below it. */
  overview?: boolean
}

interface NavItem {
  name: string
  href: string
  items?: DropdownItem[]
}

/**
 * Information architecture.
 *
 * Built from lib/services.ts, so the header, footer and hub pages name
 * every service the same way (audit S-02). Section headings link to
 * their hub pages, not homepage anchors. Industries lists the three
 * featured sectors; Healthcare and Government stay reachable from the
 * /industries hub (audit I-01).
 *
 * Every href resolves to a route that exists; nothing links to a 404.
 */
const navigationItems: NavItem[] = [
  {
    name: "Services",
    href: "/solutions",
    items: [
      { name: "All services", meta: "The six practices, on one page", href: "/solutions", overview: true },
      ...IT_SERVICES.map((s) => ({ name: s.name, meta: s.descriptor, href: s.href })),
    ],
  },
  {
    name: "Applied AI",
    href: "/applied-ai",
    items: [
      { name: "Applied AI overview", meta: "Azure-first, model-agnostic", href: "/applied-ai", overview: true },
      ...AI_SERVICES.map((s) => ({ name: s.name, meta: s.descriptor, href: s.href })),
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    items: [
      { name: "All industries", meta: "Including healthcare and government", href: "/industries", overview: true },
      ...FEATURED_INDUSTRIES.map((i) => ({ name: i.name, meta: i.descriptor, href: i.href })),
    ],
  },
  { name: "How we work", href: "/how-we-work" },
  {
    name: "About",
    href: "/about-us",
    items: [
      { name: "About us", href: "/about-us" },
      ...(hasArticles ? [{ name: "Perspectives", href: "/perspectives" }] : []),
      { name: "Trust center", href: "/trust" },
      { name: "Contact", href: "/contact-us" },
    ],
  },
]

const NavigationEnterprise = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    setScrolled(window.scrollY > 0)
  }, [])

  const handleScroll = useCallback(() => {
    const next = window.scrollY > 0
    setScrolled(prev => (prev !== next ? next : prev))
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  // Leaving desktop width closes the mobile drawer.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Click outside closes any open dropdown.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Escape closes dropdown and mobile drawer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Body scroll lock while the mobile drawer is open.
  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen, mounted])

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  const openNow = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(name)
  }
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  const isScrolled = mounted && scrolled
  // Single-line wordmark, so the bar only needs to tighten slightly.
  const headerHeight = isScrolled ? 64 : 76

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full z-50"
      style={{
        // A translucent bar let the hero show through behind an open
        // menu, which read as visual noise under the panel. While a
        // menu is open the bar is fully opaque.
        backgroundColor: openMenu
          ? 'var(--navy-900)'
          : isScrolled
            ? 'rgba(10,26,51,0.92)'
            : 'transparent',
        backdropFilter: isScrolled && !openMenu ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: isScrolled && !openMenu ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${
          isScrolled || openMenu ? 'rgba(255,255,255,0.10)' : 'transparent'
        }`,
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <div className="enterprise-container-wide">
        <div
          className="flex items-center justify-between gap-6"
          style={{ height: headerHeight, transition: 'height 250ms ease' }}
        >
          <a
            href="/"
            className="ys-nav-logo flex-shrink-0"
            aria-label="YatiSphere home"
          >
            <Wordmark tone="dark" size={isScrolled ? 24 : 27} priority />
          </a>

          {/* Desktop navigation */}
          <ul className="ys-nav-list hidden lg:flex items-center">
            {navigationItems.map((item) => {
              const isOpen = openMenu === item.name
              return (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.items && openNow(item.name)}
                  onMouseLeave={() => item.items && closeSoon()}
                >
                  <a
                    href={item.href}
                    className={`ys-nav-link${isOpen ? ' is-open' : ''}`}
                    aria-expanded={item.items ? isOpen : undefined}
                    aria-haspopup={item.items ? 'true' : undefined}
                    onClick={(e) => {
                      if (item.items) {
                        e.preventDefault()
                        setOpenMenu(isOpen ? null : item.name)
                      }
                    }}
                    onKeyDown={(e) => {
                      if (item.items && (e.key === 'ArrowDown')) {
                        e.preventDefault()
                        setOpenMenu(item.name)
                      }
                    }}
                  >
                    {item.name}
                    {item.items && (
                      <ChevronDown
                        className="ys-nav-chevron"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </a>

                  {/* Compact floating panel, anchored to this item */}
                  <AnimatePresence>
                    {item.items && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.17, ease: 'easeOut' }}
                        className="ys-dropdown"
                        role="group"
                        aria-label={item.name}
                      >
                        <p className="ys-dropdown-title">{item.name}</p>
                        <ul>
                          {item.items.map((sub) => (
                            <li key={sub.name + sub.href}>
                              <a
                                href={sub.href}
                                className={`ys-dropdown-link${
                                  sub.overview ? ' is-overview' : ''
                                }`}
                                onClick={() => setOpenMenu(null)}
                              >
                                <span className="ys-dropdown-row">
                                  <span className="ys-dropdown-name">{sub.name}</span>
                                  <ArrowRight
                                    className="ys-dropdown-arrow"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                  />
                                </span>
                                {sub.meta && (
                                  <span className="ys-dropdown-meta">{sub.meta}</span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <a href={PRIMARY_CTA.href} className="ys-nav-cta hidden lg:inline-flex items-center gap-2">
            {PRIMARY_CTA.label}
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
          </a>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(v => !v)}
            className="ys-nav-burger lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — slide-down accordion, never the desktop dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="ys-mobile-drawer lg:hidden"
            style={{ top: headerHeight, maxHeight: `calc(100dvh - ${headerHeight}px)` }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="enterprise-container" style={{ paddingTop: 20, paddingBottom: 28 }}>
              {navigationItems.map((item) => (
                <div key={item.name} className="ys-mobile-group">
                  <a
                    href={item.href}
                    className="ys-mobile-heading"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.items && (
                    <ul className="ys-mobile-sublist">
                      {item.items.map((sub) => (
                        <li key={sub.name + sub.href}>
                          <a
                            href={sub.href}
                            className="ys-mobile-sublink"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <a
                href={PRIMARY_CTA.href}
                className="ys-cta-primary"
                style={{ display: 'flex', justifyContent: 'center', marginTop: 22 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {PRIMARY_CTA.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavigationEnterprise
