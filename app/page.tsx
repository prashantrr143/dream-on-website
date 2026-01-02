"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SharedLayout from '@/components/shared-layout'

// Import enterprise components with dynamic loading for performance
const HeroSection = dynamic(() => import('@/components/enterprise/HeroSection'), {
  loading: () => (
    <div className="min-h-[80vh] flex items-center bg-background pt-24 pb-20">
      <div className="enterprise-container-wide">
        <div className="max-w-3xl space-y-6">
          <div className="h-16 bg-gray-100 animate-pulse rounded" />
          <div className="h-8 bg-gray-100 animate-pulse rounded max-w-2xl" />
          <div className="h-12 w-48 bg-gray-100 animate-pulse rounded" />
        </div>
      </div>
    </div>
  ),
})

const WorkWeDoSection = dynamic(() => import('@/components/enterprise/WorkWeDoSection'), {
  loading: () => (
    <div className="py-20 bg-gray-50">
      <div className="enterprise-container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="h-32 bg-gray-100 animate-pulse rounded" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-100 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

const AudienceSection = dynamic(() => import('@/components/enterprise/AudienceSection'), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="enterprise-container-wide">
        <div className="h-8 bg-gray-100 animate-pulse rounded max-w-md mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const HowWeWorkSection = dynamic(() => import('@/components/enterprise/HowWeWorkSection'), {
  loading: () => (
    <div className="py-20 bg-gray-900">
      <div className="enterprise-container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="h-32 bg-gray-800 animate-pulse rounded" />
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-800 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

const CapabilitiesSection = dynamic(() => import('@/components/enterprise/CapabilitiesSection'), {
  loading: () => (
    <div className="py-20 bg-gray-50">
      <div className="enterprise-container-wide">
        <div className="h-8 bg-gray-200 animate-pulse rounded max-w-md mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  ),
})

const FinalCTASection = dynamic(() => import('@/components/enterprise/FinalCTASection'), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="enterprise-container-wide text-center">
        <div className="h-10 bg-gray-100 animate-pulse rounded max-w-md mx-auto mb-4" />
        <div className="h-6 bg-gray-100 animate-pulse rounded max-w-lg mx-auto mb-10" />
        <div className="h-12 w-48 bg-gray-100 animate-pulse rounded mx-auto" />
      </div>
    </div>
  ),
})

const FooterMinimal = dynamic(() => import('@/components/enterprise/FooterMinimal'), {
  loading: () => (
    <div className="py-16 border-t border-gray-200">
      <div className="enterprise-container-wide">
        <div className="h-16 bg-gray-100 animate-pulse rounded" />
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <SharedLayout hideFooter>
      {/* Hero Section - Systems-first headline */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      {/* The Kind of Work We Do - Long-term systems narrative */}
      <Suspense fallback={null}>
        <WorkWeDoSection />
      </Suspense>

      {/* Who We Work With - Enterprise audience, less AI-centric */}
      <Suspense fallback={null}>
        <AudienceSection />
      </Suspense>

      {/* How We Work - Structured delivery for enterprise */}
      <Suspense fallback={null}>
        <HowWeWorkSection />
      </Suspense>

      {/* Capabilities - Enterprise Software, Cloud, then AI (last) */}
      <Suspense fallback={null}>
        <CapabilitiesSection />
      </Suspense>

      {/* Final CTA - Start with a Conversation */}
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>

      {/* Footer - Minimal, serious */}
      <Suspense fallback={null}>
        <FooterMinimal />
      </Suspense>
    </SharedLayout>
  )
}
