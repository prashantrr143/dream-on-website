"use client"

import { useState, useEffect } from 'react'
import { SiteHeader } from '@/components/nav/SiteHeader'
import { ContactOverlay } from '@/components/contact/ContactOverlay'
import { ArrowUp } from 'lucide-react'

// Import enterprise footer
import { FooterMinimal } from '@/components/enterprise'

// Scroll to top component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [mounted])

  const scrollToTop = () => {
    // Honor prefers-reduced-motion: jump instead of animating.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  if (!mounted || !isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="ys-back-to-top"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}

interface SharedLayoutProps {
  children: React.ReactNode
  className?: string
  hideFooter?: boolean
  hideNav?: boolean
}

export default function SharedLayout({ children, className = "", hideFooter = false, hideNav = false }: SharedLayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-background">
      {/* Navigation */}
      {!hideNav && <SiteHeader />}

      {/* Main content with proper spacing to account for fixed header */}
      <main className={`relative ${className}`}>
        {children}
      </main>

      {/* Footer */}
      {!hideFooter && <FooterMinimal />}

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* "How can we help?" overlay, opened by any link to /contact-us */}
      <ContactOverlay />
    </div>
  )
}