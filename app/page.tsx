"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SharedLayout from '@/components/shared-layout'

// Import enterprise components with dynamic loading for performance
const HeroSection = dynamic(() => import('@/components/enterprise/HeroSection'), {
  loading: () => (
    <div className="min-h-[90vh] flex items-center stripe-hero-gradient pt-40 pb-24">
      <div className="enterprise-container-wide">
        <div className="max-w-xl space-y-6">
          <div className="h-16 bg-white/10 animate-pulse rounded" />
          <div className="h-8 bg-white/10 animate-pulse rounded max-w-md" />
          <div className="flex gap-4">
            <div className="h-12 w-36 bg-white/10 animate-pulse rounded-full" />
            <div className="h-12 w-36 bg-white/10 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </div>
  ),
})

const TrustBarSection = dynamic(() => import('@/components/enterprise/TrustBarSection'), {
  loading: () => (
    <div className="py-12" style={{ backgroundColor: 'hsl(213, 33%, 97%)' }}>
      <div className="enterprise-container-wide">
        <div className="h-4 bg-gray-200 animate-pulse rounded max-w-xs mx-auto mb-8" />
        <div className="flex justify-center gap-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-5 w-28 bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const WorkWeDoSection = dynamic(() => import('@/components/enterprise/WorkWeDoSection'), {
  loading: () => (
    <div className="stripe-section" style={{ backgroundColor: 'hsl(213, 33%, 97%)' }}>
      <div className="enterprise-container-wide">
        <div className="h-8 bg-gray-200 animate-pulse rounded max-w-md mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const StatsSection = dynamic(() => import('@/components/enterprise/StatsSection'), {
  loading: () => (
    <div className="py-20" style={{ backgroundColor: 'hsl(210, 76%, 15%)' }}>
      <div className="enterprise-container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="h-12 bg-white/10 animate-pulse rounded mb-2 mx-auto max-w-[100px]" />
              <div className="h-4 bg-white/10 animate-pulse rounded max-w-[160px] mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const AudienceSection = dynamic(() => import('@/components/enterprise/AudienceSection'), {
  loading: () => (
    <div className="stripe-section bg-white">
      <div className="enterprise-container-wide">
        <div className="h-8 bg-gray-100 animate-pulse rounded max-w-md mb-20" />
        <div className="space-y-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-16">
              <div className="h-32 bg-gray-100 animate-pulse rounded" />
              <div className="h-72 bg-gray-100 animate-pulse rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const HowWeWorkSection = dynamic(() => import('@/components/enterprise/HowWeWorkSection'), {
  loading: () => (
    <div className="py-24" style={{ backgroundColor: 'hsl(210, 76%, 15%)' }}>
      <div className="enterprise-container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="h-32 bg-white/10 animate-pulse rounded" />
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-white/10 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})


const TestimonialsSection = dynamic(() => import('@/components/enterprise/TestimonialsSection'), {
  loading: () => (
    <div className="stripe-section bg-white">
      <div className="enterprise-container-wide">
        <div className="h-8 bg-gray-100 animate-pulse rounded max-w-md mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-50 animate-pulse rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const FinalCTASection = dynamic(() => import('@/components/enterprise/FinalCTASection'), {
  loading: () => (
    <div className="py-24" style={{ backgroundColor: 'hsl(210, 76%, 15%)' }}>
      <div className="enterprise-container-wide text-center">
        <div className="h-10 bg-white/10 animate-pulse rounded max-w-md mx-auto mb-4" />
        <div className="h-6 bg-white/10 animate-pulse rounded max-w-lg mx-auto mb-10" />
        <div className="flex justify-center gap-4">
          <div className="h-12 w-32 bg-white/10 animate-pulse rounded-full" />
          <div className="h-12 w-32 bg-white/10 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  ),
})

const FooterMinimal = dynamic(() => import('@/components/enterprise/FooterMinimal'), {
  loading: () => (
    <div className="py-16" style={{ backgroundColor: 'hsl(210, 76%, 12%)' }}>
      <div className="enterprise-container-wide">
        <div className="h-16 bg-white/5 animate-pulse rounded" />
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <SharedLayout hideFooter>
      {/* Hero Section - Dark navy with gradient visuals */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      {/* Trust Bar - Client logos */}
      <Suspense fallback={null}>
        <TrustBarSection />
      </Suspense>

      {/* What We Build - Bento grid with colored cards */}
      <Suspense fallback={null}>
        <WorkWeDoSection />
      </Suspense>

      {/* Stats - Dark navy metrics strip */}
      <Suspense fallback={null}>
        <StatsSection />
      </Suspense>

      {/* Who We Work With - Alternating content blocks */}
      <Suspense fallback={null}>
        <AudienceSection />
      </Suspense>

      {/* How We Work - Dark navy with delivery principles */}
      <Suspense fallback={null}>
        <HowWeWorkSection />
      </Suspense>

      {/* Operating Principles */}
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      {/* Final CTA - Dark navy with dual buttons */}
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>

      {/* Footer - Dark navy comprehensive */}
      <Suspense fallback={null}>
        <FooterMinimal />
      </Suspense>
    </SharedLayout>
  )
}
