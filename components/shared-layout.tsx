"use client"

import { useState, useEffect } from 'react'
// import dynamic from 'next/dynamic'
import { NavigationEnterprise } from '@/components/enterprise'
import { ArrowUp } from 'lucide-react'
// import ErrorBoundary from '@/components/error-boundary'
// import { LoadingSpinner } from '@/components/loading-states'

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!mounted || !isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gray-900 text-white rounded-md shadow-sm hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

interface SharedLayoutProps {
  children: React.ReactNode
  className?: string
  hideFooter?: boolean
}

export default function SharedLayout({ children, className = "", hideFooter = false }: SharedLayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* Navigation - Always visible */}
      <NavigationEnterprise />

      {/* Main content with proper spacing to account for fixed header */}
      <main className={`relative ${className}`}>
        {children}
      </main>

      {/* Footer */}
      {!hideFooter && <FooterMinimal />}

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}