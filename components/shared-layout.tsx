"use client"

import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import { ArrowUp } from 'lucide-react'

// Dynamic import for Footer to optimize loading
const DynamicFooter = dynamic(() => import('@/components/footer'), {
  loading: () => (
    <div className="w-full py-16 bg-muted/10 border-t">
      <div className="section-container">
        {/* Achievement bar skeleton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center p-6 bg-muted/20 rounded-xl">
              <div className="h-8 w-8 bg-muted animate-pulse rounded mx-auto mb-4" />
              <div className="h-8 bg-muted animate-pulse rounded mb-2" />
              <div className="h-4 bg-muted animate-pulse rounded" />
            </div>
          ))}
        </div>
        {/* Footer content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 bg-muted animate-pulse rounded w-32" />
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-muted animate-pulse rounded w-24" />
              <div className="space-y-2">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="h-4 bg-muted animate-pulse rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

// Scroll to top component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 sm:bottom-8 sm:right-8"
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
      
      {/* Main content with proper spacing */}
      <main className={`relative ${className}`}>
        {children}
      </main>
      
      {/* Footer with lazy loading */}
      <Suspense fallback={
        <div className="w-full py-16 bg-muted/10 border-t">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-8 bg-muted animate-pulse rounded w-32" />
                <div className="h-4 bg-muted animate-pulse rounded" />
                <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
              </div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 bg-muted animate-pulse rounded w-24" />
                  <div className="space-y-2">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-4 bg-muted animate-pulse rounded" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }>
        <DynamicFooter />
      </Suspense>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}