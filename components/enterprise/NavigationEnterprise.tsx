"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const navigation = [
  { name: "What We Do", href: "/solutions" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Perspectives", href: "/perspectives" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
]

const NavigationEnterprise = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial scroll position
    setScrolled(window.scrollY > 60)
  }, [])

  // Throttled scroll handler for performance
  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 60
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
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const isScrolled = mounted && scrolled

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50"
      style={{
        backgroundColor: isScrolled
          ? 'hsl(var(--background))'
          : 'hsl(var(--background) / 0.92)',
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled
          ? '0 1px 3px rgba(0, 0, 0, 0.04)'
          : 'none',
        transition: 'background-color 250ms ease-out, box-shadow 250ms ease-out'
      }}
    >
      <div className="enterprise-container-wide">
        <div
          className="flex items-center justify-between"
          style={{
            paddingTop: isScrolled ? 'var(--space-3)' : 'var(--space-5)',
            paddingBottom: isScrolled ? 'var(--space-3)' : 'var(--space-5)',
            transition: 'padding 250ms ease-out'
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isScrolled ? 140 : 150}
              height={isScrolled ? 26 : 28}
              viewBox="0 0 180 28"
              role="img"
              aria-label="Yatisphere"
              style={{
                transition: 'width 250ms ease-out, height 250ms ease-out',
                color: 'hsl(var(--premium-gray-900))'
              }}
            >
              <text
                x="0"
                y="21"
                fontFamily="Inter, Helvetica Neue, Arial, sans-serif"
                fontSize="22"
                fontWeight="500"
                letterSpacing="-0.01em"
                fill="currentColor"
              >
                Yatisphere
              </text>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center"
            style={{ gap: 'var(--space-10)' }}
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  color: 'hsl(var(--premium-gray-600))',
                  transition: 'color 200ms ease',
                  letterSpacing: 'var(--tracking-normal)'
                }}
                className="hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact-us"
              className="enterprise-btn-primary group"
              style={{
                paddingLeft: isScrolled ? 'var(--space-5)' : 'var(--space-6)',
                paddingRight: isScrolled ? 'var(--space-5)' : 'var(--space-6)',
                paddingTop: isScrolled ? 'var(--space-2)' : 'var(--space-3)',
                paddingBottom: isScrolled ? 'var(--space-2)' : 'var(--space-3)',
                transition: 'padding 250ms ease-out'
              }}
            >
              <span style={{ fontSize: 'var(--text-sm)' }}>Start a Conversation</span>
              <ArrowRight
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center"
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'hsl(var(--premium-gray-100))',
              color: 'hsl(var(--premium-gray-600))',
              transition: 'background-color 200ms ease'
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 90, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 bg-background overflow-y-auto z-40"
            style={{
              top: isScrolled ? '3.5rem' : '4.5rem',
              maxHeight: isScrolled ? 'calc(100vh - 3.5rem)' : 'calc(100vh - 4.5rem)',
              borderTop: '1px solid hsl(var(--premium-gray-100))'
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
          >
            <div
              className="enterprise-container"
              style={{
                paddingTop: 'var(--space-6)',
                paddingBottom: 'var(--space-8)'
              }}
            >
              {/* Navigation Links */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-1)'
                }}
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-medium)',
                      color: 'hsl(var(--premium-gray-700))',
                      padding: 'var(--space-4) 0',
                      borderBottom: '1px solid hsl(var(--premium-gray-100))',
                      transition: 'color 200ms ease'
                    }}
                    className="hover:text-gray-900"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ marginTop: 'var(--space-8)' }}
              >
                <a
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className="enterprise-btn-primary group w-full justify-center"
                  style={{
                    paddingTop: 'var(--space-4)',
                    paddingBottom: 'var(--space-4)'
                  }}
                >
                  <span>Start a Conversation</span>
                  <ArrowRight
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
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
