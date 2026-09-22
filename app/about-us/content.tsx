"use client"

import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { AboutPrinciples } from '@/components/enterprise/AboutPrinciples'
import { AboutAudience } from '@/components/enterprise/AboutAudience'
import { FounderVision } from '@/components/enterprise/FounderVision'
import { LeadershipSection } from '@/components/enterprise/LeadershipSection'

const AboutUs = () => {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="About Yatisphere"
        title="We help enterprises build systems that are secure, scalable, and governable."
        lede="Founded to solve real-world complexity for regulated enterprises, we design technology platforms with architectural rigor and long-term trust in mind."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How We Work', href: '/how-we-work' }}
      />

      {/* What we do — the page was missing a plain statement of the work */}
      <PageSection
        tone="light"
        eyebrow="What we do"
        title="Enterprise IT services, with applied AI on top."
        lede="We build, modernise and run the systems enterprises depend on — software platforms, cloud, data — and bring AI into them with the governance regulated businesses require."
      >
        <div className="ys-about-do">
          <div>
            <h3 className="ys-about-do-title">The core</h3>
            <p>
              Enterprise software and platforms, cloud and infrastructure, DevOps
              and automation, data and analytics, legacy modernisation and
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

      {/* Closing CTA */}
      <PageCTA
        title="Ready to collaborate?"
        body="We'd welcome the opportunity to discuss your technology challenges and explore whether we're the right fit for your organization."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default AboutUs
