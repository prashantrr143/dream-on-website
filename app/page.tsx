"use client"

import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
import SharedLayout from '@/components/shared-layout'
import { performanceMetrics, performanceWarnings } from '@/lib/performance'
import ErrorBoundary from '@/components/error-boundary'
import { CardLoadingSkeleton } from '@/components/loading-states'

// Import professional components
import ProfessionalHero from '@/components/hero-professional'
import { SectionSeparator } from '@/components/section-layout-fix'

const DynamicServices = dynamic(() => import('@/components/services-professional'), {
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

// Commented out unused components to fix build errors
// const DynamicCaseStudies = dynamic(() => import('@/components/case-studies'), {
//   loading: () => (
//     <div className="w-full py-16 lg:py-24">
//       <div className="section-container">
//         <div className="text-center mb-16">
//           <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
//           <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="h-80 bg-muted/20 animate-pulse rounded-xl" />
//           ))}
//         </div>
//       </div>
//     </div>
//   ),
// })

// const DynamicCTA = dynamic(() => import('@/components/cta-professional'), {
//   loading: () => (
//     <div className="w-full py-16 lg:py-24 bg-muted/20">
//       <div className="section-container">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="h-12 bg-muted animate-pulse rounded-lg mb-6 mx-auto max-w-lg" />
//           <div className="h-6 bg-muted animate-pulse rounded-lg mb-8 mx-auto max-w-2xl" />
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
//             <div className="h-12 w-full sm:w-40 bg-muted animate-pulse rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   ),
// })

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
    
    return () => {}
  }, [])

  return (
    <SharedLayout>
      {/* Theme Switcher */}
      {/* <ThemeSwitcher /> */}

      {/* Professional Hero Section */}
      <section className="relative w-full">
        <ProfessionalHero />
      </section>

      {/* Section Separator */}
      <SectionSeparator />

      {/* Services Section with lazy loading and error boundary */}
      <ErrorBoundary fallback={
        <div className="w-full py-16 lg:py-24">
          <div className="section-container text-center">
            <p className="text-muted-foreground">Services section failed to load</p>
          </div>
        </div>
      }>
        <Suspense fallback={
          <div className="w-full py-16 lg:py-24">
            <div className="section-container">
              <div className="text-center mb-16">
                <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
                <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
              </div>
              <CardLoadingSkeleton count={6} />
            </div>
          </div>
        }>
          <section className="relative w-full">
            <DynamicServices />
          </section>
        </Suspense>
      </ErrorBoundary>

      {/* Section Separator */}
      <SectionSeparator />

      {/* Case Studies Section with lazy loading and error boundary */}
      {/* <ErrorBoundary fallback={
        <div className="w-full py-16 lg:py-24">
          <div className="section-container text-center">
            <p className="text-muted-foreground">Case studies section failed to load</p>
          </div>
        </div>
      }>
        <Suspense fallback={
          <div className="w-full py-16 lg:py-24">
            <div className="section-container">
              <div className="text-center mb-16">
                <div className="h-12 bg-muted/20 animate-pulse rounded-lg mb-6 mx-auto max-w-md" />
                <div className="h-6 bg-muted/20 animate-pulse rounded-lg mx-auto max-w-2xl" />
              </div>
              <CardLoadingSkeleton count={4} />
            </div>
          </div>
        }>
          <section className="relative w-full">
            <DynamicCaseStudies />
          </section>
        </Suspense>
      </ErrorBoundary> */}

      {/* Section Separator */}
      <SectionSeparator />

      {/* CTA Section with lazy loading and error boundary */}
      {/* <ErrorBoundary fallback={
        <div className="w-full py-16 lg:py-24 bg-muted/20">
          <div className="section-container text-center">
            <p className="text-muted-foreground">CTA section failed to load</p>
          </div>
        </div>
      }>
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
      </ErrorBoundary> */}
    </SharedLayout>
  )
}