import SharedLayout from '@/components/shared-layout'
import HeroSection from '@/components/enterprise/HeroSection'
import ITServicesSection from '@/components/enterprise/ITServicesSection'
import FinalCTASection from '@/components/enterprise/FinalCTASection'
import { ProofStrip } from '@/components/proof/ProofStrip'
import { CaseStudyCards } from '@/components/proof/CaseStudyCards'
import { Practices } from '@/components/home/Practices'
import { AgentStory } from '@/components/home/AgentStory'

/**
 * Home (2026-11-08): AI agents and workflows first, with the cloud, data and
 * controls under them second. Law firms lead. Delivery partners moved to
 * the About page. US English. Each section said once.
 *
 * Sections are imported directly, not through next/dynamic: the dynamic
 * version rendered skeletons and swapped them after load (CLS ~0.9).
 * This file is a server component.
 */
export default function Home() {
  return (
    <SharedLayout>
      <HeroSection />

      {/* The tagline acted out on one conflict check */}
      <AgentStory />

      {/* Renders nothing until siteConfig.proof is filled */}
      <ProofStrip />

      <Practices />

      {/* The sectors we build for */}
      <ITServicesSection />

      {/* Renders nothing until siteConfig.caseStudies is filled */}
      <CaseStudyCards />

      <FinalCTASection />
    </SharedLayout>
  )
}
