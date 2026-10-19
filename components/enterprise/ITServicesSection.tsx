"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProblemPicker } from '@/components/home/ProblemPicker'




// Built for: three sectors, each with the outcome it buys (audit H-04).
const BUILT_FOR: { href: string; name: string; outcome: string }[] = [
  {
    href: '/what-we-do/industries/financial-services',
    name: 'Financial services',
    outcome: 'Regulator-ready platforms.',
  },
  {
    href: '/what-we-do/industries/legal-professional-services',
    name: 'Legal & professional services',
    outcome: 'Intake and conflicts you can defend.',
  },
  {
    href: '/what-we-do/industries/software-saas',
    name: 'Software & SaaS',
    outcome: 'Pass security reviews. Ship AI safely.',
  },
]

const ITServicesSection = () => {
  return (
    <section id="services" className="ys-section-white">
      <div className="enterprise-container-wide">
        {/* Section intro */}
        <motion.div
          className="ys-cap-intro"
        >
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">Problems we fix</p>
            <h2 className="ys-cap-headline">
              Start with the problem, not the technology.
            </h2>
          </div>
          <div className="ys-cap-intro-aside">
            <p>Pick the one that sounds like your week.</p>
          </div>
        </motion.div>

        <ProblemPicker />

        {/* Built for */}
        <div className="ys-builtfor">
          <h3 className="ys-eyebrow ys-builtfor-title">Built for</h3>
          <ul className="ys-builtfor-grid">
            {BUILT_FOR.map((sector) => (
              <li key={sector.href}>
                <a href={sector.href} className="ys-builtfor-card">
                  <span className="ys-builtfor-name">
                    {sector.name}
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="ys-builtfor-outcome">{sector.outcome}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ITServicesSection
