import SharedLayout from '@/components/shared-layout'
import HeroSection from '@/components/enterprise/HeroSection'
import ITServicesSection from '@/components/enterprise/ITServicesSection'
import FinalCTASection from '@/components/enterprise/FinalCTASection'
import { ProofStrip } from '@/components/proof/ProofStrip'
import { CaseStudyCards } from '@/components/proof/CaseStudyCards'
import { Practices } from '@/components/home/Practices'
import { LatestInsights } from '@/components/home/LatestInsights'
import { Partners } from '@/components/home/Partners'

/**
 * Home (positioning refresh, 2026-10-19): IT services first, applied AI
 * second, global clients, US English. Each section said once.
 *
 * Sections are imported directly, not through next/dynamic: the dynamic
 * version rendered skeletons and swapped them after load (CLS ~0.9).
 * This file is a server component so LatestInsights can read article
 * metadata without shipping article text to the browser.
 */
export default function Home() {
  return (
    <SharedLayout>
      <HeroSection />

      {/* Renders nothing until siteConfig.proof is filled */}
      <ProofStrip />

      <Practices />

      {/* Problems we solve, and the sectors we build for */}
      <ITServicesSection />

      {/* Renders nothing until siteConfig.caseStudies is filled */}
      <CaseStudyCards />

      <LatestInsights />

      {/* Renders nothing until siteConfig.alliances is filled */}
      <Partners />

      <FinalCTASection />
    </SharedLayout>
  )
}
