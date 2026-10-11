"use client"

import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { AboutPrinciples } from '@/components/enterprise/AboutPrinciples'
import { AboutAudience } from '@/components/enterprise/AboutAudience'
import { FounderVision } from '@/components/enterprise/FounderVision'
import { CompanyDetails } from '@/components/enterprise/CompanyDetails'
import { LeadershipSection } from '@/components/enterprise/LeadershipSection'

const AboutUs = () => {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="About YatiSphere"
        title="A senior team for the systems regulated businesses can\u2019t afford to get wrong."
        lede="We design, build and run core platforms and governed AI, Azure-first, for regulated businesses. The people who scope your work are the people who build it and stay to run it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      {/* What we do — the page was missing a plain statement of the work */}
      <PageSection
        tone="light"
        eyebrow="What we do"
        title="Enterprise IT services, with applied AI on top."
        lede="We build, modernize and run the systems enterprises depend on — software platforms, cloud, data — and bring AI into them with the governance regulated businesses require."
      >
        <div className="ys-about-do">
          <div>
            <h3 className="ys-about-do-title">The core</h3>
            <p>
              Enterprise software and platforms, cloud and infrastructure, DevOps
              and automation, data and analytics, legacy modernization and
              enterprise security. One partner across the lifecycle rather than a
              handover at each stage.
            </p>
            <a href="/solutions" className="ys-link ys-about-do-link">
              Explore IT services
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          <div>
            <h3 className="ys-about-do-title">The differentiator</h3>
            <p>
              Applied AI that reaches production: AI architecture and readiness,
              agentic workflow automation, enterprise AI platforms, and the
              responsible-AI controls that let a compliance team sign off rather
              than shut it down.
            </p>
            <a href="/applied-ai" className="ys-link ys-about-do-link">
              Explore applied AI
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </PageSection>

      {/* Operating principles */}
      <AboutPrinciples />

      {/* Who we work with */}
      <AboutAudience />

      {/* Founder’s vision */}
      <FounderVision />

      {/* Leadership */}
      <LeadershipSection />

      {/* Registration facts, kept small and at the foot (audit AB-02) */}
      <CompanyDetails />

      {/* Closing CTA */}
      <PageCTA
        title="What\u2019s the problem you\u2019d fix first?"
        body="Tell us in a 30-minute call. A founder will give you an honest view on whether we\u2019re the right team."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default AboutUs
