"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'

interface DropdownItem {
  name: string
  description: string
  href: string
}

interface DropdownCategory {
  category: string
  items: DropdownItem[]
}

interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownCategories?: DropdownCategory[]
}

const navigationItems: NavItem[] = [
  {
    name: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    dropdownCategories: [
      {
        category: "By Industry",
        items: [
          { name: "Financial Services", description: "Regulated AI & cloud systems", href: "/solutions/consulting" },
          { name: "Healthcare", description: "HIPAA-compliant infrastructure", href: "/solutions/security" },
          { name: "Government", description: "FedRAMP & sovereign cloud", href: "/solutions/cloud" },
        ]
      },
      {
        category: "By Challenge",
        items: [
          { name: "Legacy Modernization", description: "Migrate from fragile to scalable", href: "/solutions" },
          { name: "Cloud Migration", description: "Multi-cloud foundations", href: "/solutions/cloud" },
          { name: "AI & Data Systems", description: "Production-grade ML pipelines", href: "/solutions/ai-ml" },
        ]
      }
    ]
  },
  {
    name: "Services",
    href: "/how-we-work",
    hasDropdown: true,
    dropdownCategories: [
      {
        category: "What We Deliver",
        items: [
          { name: "Enterprise Software", description: "Reliable platforms at scale", href: "/solutions" },
          { name: "Cloud & Infrastructure", description: "Secure, scalable foundations", href: "/solutions/cloud" },
          { name: "DevOps & Automation", description: "CI/CD and operational maturity", href: "/solutions/devops" },
          { name: "Data & Analytics", description: "Governed data platforms", href: "/solutions/data" },
        ]
      }
    ]
  },
  { name: "About", href: "/about-us" },
  { name: "Perspectives", href: "/perspectives" },
  { name: "Contact", href: "/contact-us" },
]

const mobileNavItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/how-we-work" },
  { name: "About", href: "/about-us" },
  { name: "Perspectives", href: "/perspectives" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact-us" },
]

const NavigationEnterprise = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    setScrolled(window.scrollY > 20)
  }, [])

  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 20
    setScrolled(prev => {
      if (prev !== shouldBeScrolled) return shouldBeScrolled
      return prev
    })
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(name)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const isScrolled = mounted && scrolled

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full z-50"
      style={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
        transition: 'background-color 300ms ease, box-shadow 300ms ease'
      }}
    >
      <div className="enterprise-container-wide">
        <div
          className="flex items-center justify-between"
          style={{ height: isScrolled ? '60px' : '72px', transition: 'height 300ms ease' }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <span
              style={{
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: isScrolled ? 'hsl(210, 76%, 15%)' : 'white',
                transition: 'color 300ms ease'
              }}
            >
              Yatisphere
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center" style={{ gap: '32px' }}>
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                <a
                  href={item.href}
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: isScrolled
                      ? (activeDropdown === item.name ? 'hsl(210, 76%, 15%)' : 'hsl(220, 9%, 46%)')
                      : (activeDropdown === item.name ? 'white' : 'rgba(255,255,255,0.75)'),
                    transition: 'color 200ms ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault()
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className="w-3.5 h-3.5"
                      style={{
                        transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease'
                      }}
                      strokeWidth={2}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Desktop CTA — hidden since Contact is already in main nav */}
          <div className="hidden lg:block" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: isScrolled ? 'hsl(var(--premium-gray-100))' : 'rgba(255,255,255,0.1)',
              color: isScrolled ? 'hsl(var(--premium-gray-600))' : 'white',
              transition: 'background-color 200ms ease, color 200ms ease'
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            className="hidden lg:block mega-menu-panel"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
            }}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="enterprise-container-wide" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
              {navigationItems
                .find(item => item.name === activeDropdown)
                ?.dropdownCategories?.map((category, catIdx) => (
                  <div key={catIdx} style={{ marginBottom: catIdx < (navigationItems.find(item => item.name === activeDropdown)?.dropdownCategories?.length ?? 0) - 1 ? '28px' : '0' }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(220, 9%, 46%)', marginBottom: '16px' }}>
                      {category.category}
                    </p>
                    <div className="grid grid-cols-3" style={{ gap: '8px' }}>
                      {category.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          style={{ padding: '12px 16px', borderRadius: '10px', transition: 'background-color 150ms ease', display: 'block' }}
                          className="hover:bg-gray-50"
                        >
                          <p style={{ fontSize: '14px', fontWeight: 600, color: 'hsl(210, 76%, 15%)', marginBottom: '2px' }}>{item.name}</p>
                          <p style={{ fontSize: '13px', color: 'hsl(220, 9%, 46%)' }}>{item.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 bg-white overflow-y-auto z-40"
            style={{ top: isScrolled ? '60px' : '72px', maxHeight: `calc(100vh - ${isScrolled ? '60px' : '72px'})`, borderTop: '1px solid hsl(var(--premium-gray-100))' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
          >
            <div className="enterprise-container" style={{ paddingTop: '24px', paddingBottom: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {mobileNavItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                    style={{ fontSize: '16px', fontWeight: 500, color: 'hsl(210, 76%, 15%)', padding: '14px 0', borderBottom: '1px solid hsl(var(--premium-gray-100))' }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ marginTop: '24px' }}
              >
                <a
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="stripe-btn-primary group w-full justify-center"
                  style={{ padding: '14px 24px' }}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavigationEnterprise
