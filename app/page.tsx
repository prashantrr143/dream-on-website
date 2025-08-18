"use client"

import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import SharedLayout from '@/components/shared-layout'
import ThemeSwitcher from '@/components/theme-switcher'
import { performanceMetrics, performanceWarnings } from '@/lib/performance'

// Import original components
import Hero from '@/components/hero'

const DynamicServices = dynamic(() => import('@/components/services'), {
  loading: () => (
    <div className="w-full py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
          <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-muted/20 animate-pulse rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicCaseStudies = dynamic(() => import('@/components/case-studies'), {
  loading: () => (
    <div className="w-full py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
          <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-80 bg-muted/20 animate-pulse rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicCTA = dynamic(() => import('@/components/cta'), {
  loading: () => (
    <div className="w-full py-16 lg:py-24 bg-muted/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 bg-muted animate-pulse rounded-lg mb-6 mx-auto max-w-lg" />
          <div className="h-6 bg-muted animate-pulse rounded-lg mb-8 mx-auto max-w-2xl" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
            <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  ),
})

export default function Home() {
  // Initialize performance monitoring
  useEffect(() => {
    performanceMetrics.trackWebVitals()
    performanceMetrics.trackBundleSize()
    performanceWarnings.warnLargeBundle()
    performanceWarnings.warnSlowRender()
    
    // Track memory usage periodically in development
    if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        performanceMetrics.trackMemoryUsage()
      }, 30000) // Every 30 seconds
      
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <SharedLayout>
      {/* Theme Switcher */}
      <ThemeSwitcher />
      
      {/* Hero Section */}
      <section className="relative w-full">
        <Hero />
      </section>
      
      {/* Services Section with lazy loading */}
      <Suspense fallback={
        <div className="w-full py-16 lg:py-24">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
              <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-muted/20 animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      }>
        <section className="relative w-full">
          <DynamicServices />
        </section>
      </Suspense>
      
      {/* Case Studies Section with lazy loading */}
      <Suspense fallback={
        <div className="w-full py-16 lg:py-24">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
              <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-80 bg-muted/20 animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      }>
        <section className="relative w-full">
          <DynamicCaseStudies />
        </section>
      </Suspense>
      
      {/* CTA Section with lazy loading */}
      <Suspense fallback={
        <div className="w-full py-16 lg:py-24 bg-muted/20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-12 bg-muted animate-pulse rounded-lg mb-6 mx-auto max-w-lg" />
              <div className="h-6 bg-muted animate-pulse rounded-lg mb-8 mx-auto max-w-2xl" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
                <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      }>
        <section className="relative w-full">
          <DynamicCTA />
        </section>
      </Suspense>
    </SharedLayout>
  )
}