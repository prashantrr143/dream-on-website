"use client"

import SharedLayout from '@/components/shared-layout'
import HeroSection from '@/components/enterprise/HeroSection'
import ITServicesSection from '@/components/enterprise/ITServicesSection'
import HowWeDeliverSection from '@/components/enterprise/HowWeDeliverSection'
import HowWeWorkSection from '@/components/enterprise/HowWeWorkSection'
import FinalCTASection from '@/components/enterprise/FinalCTASection'
import { ProofStrip } from '@/components/proof/ProofStrip'
import { CaseStudyCards } from '@/components/proof/CaseStudyCards'
import { RegionsStrip } from '@/components/enterprise/RegionsStrip'
import { WhatWeDoPanel } from '@/components/home/WhatWeDoPanel'
import { EveryCloud } from '@/components/home/EveryCloud'

/**
 * Home. Sections are imported directly, not through next/dynamic: the
 * dynamic version rendered skeleton placeholders and swapped them for the
 * real sections after load, which shifted the whole page (CLS ~0.9).
 * The sections are small, so static imports cost nothing noticeable.
 */
export default function Home() {
  return (
    <SharedLayout>
      {/* The theme: Enterprise AI, engineered to be trusted */}
      <HeroSection />

      {/* Proof under the hero; renders nothing until siteConfig.proof is filled */}
      <ProofStrip />

      {/* What we do: tabbed link panel from the menu tree */}
      <WhatWeDoPanel />

      {/* Every cloud. Every model. One accountable team. */}
      <EveryCloud />

      {/* Problems we solve, with the two pillars behind them */}
      <ITServicesSection />

      {/* Case studies; renders nothing until siteConfig.caseStudies is filled */}
      <CaseStudyCards />

      {/* The delivery lifecycle */}
      <HowWeDeliverSection />

      {/* Delivery commitments */}
      <HowWeWorkSection />

      {/* Hours, data terms and data residency, answered up front */}
      <RegionsStrip />

      {/* Closing CTA */}
      <FinalCTASection />
    </SharedLayout>
  )
}
