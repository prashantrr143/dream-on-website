"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SharedLayout from '@/components/shared-layout'

const skeletonLight = (
  <div className="ys-section-light">
    <div className="enterprise-container-wide">
      <div className="h-8 bg-line animate-pulse rounded max-w-sm mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-40 bg-line animate-pulse rounded-xl" />
        ))}
      </div>
    </div>
  </div>
)

const skeletonWhite = (
  <div className="ys-section-white">
    <div className="enterprise-container-wide">
      <div className="h-8 bg-line animate-pulse rounded max-w-sm mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-40 bg-line animate-pulse rounded-xl" />
        ))}
      </div>
    </div>
  </div>
)

const HeroSection = dynamic(() => import('@/components/enterprise/HeroSection'), {
  loading: () => (
    <div
      className="stripe-hero-gradient"
      style={{ paddingTop: 'clamp(152px, 17vw, 208px)', paddingBottom: 'clamp(56px, 7vw, 84px)' }}
    >
      <div className="enterprise-container-wide">
        <div className="max-w-[760px] space-y-6">
          <div className="h-16 bg-white/10 animate-pulse rounded" />
          <div className="h-8 bg-white/10 animate-pulse rounded max-w-md" />
          <div className="flex gap-4">
            <div className="h-12 w-44 bg-white/10 animate-pulse rounded-lg" />
            <div className="h-12 w-44 bg-white/10 animate-pulse rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
          <div className="h-60 bg-white/10 animate-pulse rounded-2xl" />
          <div className="h-60 bg-white/10 animate-pulse rounded-2xl" />
        </div>
      </div>
    </div>
  ),
})

const ITServicesSection = dynamic(
  () => import('@/components/enterprise/ITServicesSection'),
  { loading: () => skeletonWhite }
)

const HowWeDeliverSection = dynamic(
  () => import('@/components/enterprise/HowWeDeliverSection'),
  { loading: () => skeletonLight }
)

const HowWeWorkSection = dynamic(
  () => import('@/components/enterprise/HowWeWorkSection'),
  { loading: () => skeletonWhite }
)

const FinalCTASection = dynamic(() => import('@/components/enterprise/FinalCTASection'), {
  loading: () => (
    <div className="py-24" style={{ backgroundColor: '#0B1E3D' }}>
      <div className="enterprise-container-wide text-center">
        <div className="h-10 bg-white/10 animate-pulse rounded max-w-lg mx-auto mb-4" />
        <div className="h-6 bg-white/10 animate-pulse rounded max-w-xl mx-auto mb-10" />
        <div className="flex justify-center gap-4">
          <div className="h-12 w-40 bg-white/10 animate-pulse rounded-lg" />
          <div className="h-12 w-40 bg-white/10 animate-pulse rounded-lg" />
        </div>
      </div>
    </div>
  ),
})

const FooterMinimal = dynamic(() => import('@/components/enterprise/FooterMinimal'), {
  loading: () => (
    <div className="py-16" style={{ backgroundColor: 'var(--ys-surface-alt)' }}>
      <div className="enterprise-container-wide">
        <div className="h-16 bg-line animate-pulse rounded" />
      </div>
    </div>
  ),
})

export default function Home() {
  return (
    <SharedLayout hideFooter>
      {/* 1 — The problem we solve, stated plainly */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      {/* 2 — Problems we solve, with the two pillars behind them */}
      <Suspense fallback={null}>
        <ITServicesSection />
      </Suspense>

      {/* 3 — The delivery lifecycle */}
      <Suspense fallback={null}>
        <HowWeDeliverSection />
      </Suspense>

      {/* 4 — Delivery commitments */}
      <Suspense fallback={null}>
        <HowWeWorkSection />
      </Suspense>

      {/* 5 — Final CTA */}
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>

      <Suspense fallback={null}>
        <FooterMinimal />
      </Suspense>
    </SharedLayout>
  )
}
