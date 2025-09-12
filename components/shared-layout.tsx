"use client"

import { useState, useEffect } from 'react'
// import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import { ArrowUp } from 'lucide-react'
// import ErrorBoundary from '@/components/error-boundary'
// import { LoadingSpinner } from '@/components/loading-states'

// Import footer 
import Footer from '@/components/footer'

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
      className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

interface SharedLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function SharedLayout({ children, className = "" }: SharedLayoutProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* Navigation - Always visible */}
      <Navigation />
      
      {/* Main content with proper spacing to account for fixed header */}
      <main className={`relative ${className}`}>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}