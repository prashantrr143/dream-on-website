"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon, type YsIconName } from '@/components/brand/YsIcon'



interface Audience {
  title: string
  /** Who this actually is, in their own terms. */
  who: string
  body: string
  /** The pressure that brings them to us. */
  signal: string
  icon: YsIconName
  href: string
}

/**
 * Who we work with, stated as recognisable situations rather than
 * adjectives. A reader should be able to point at one and say "that is us".
 */
const audiences: Audience[] = [
  {
    title: 'Regulated enterprises',
    who: 'Banks, insurers, healthcare and government',
    body: 'Systems that must satisfy an auditor as convincingly as a user, with residency and retention decided in the architecture.',
    signal: 'A regulator, auditor or customer security review sets your deadline.',
    icon: 'security',
    href: '/industries',
  },
  {
    title: 'Engineering-led organisations',
    who: 'CTOs and platform teams',
    body: 'Technical leadership running production systems with long operational lifetimes, who want an architect rather than a body shop.',
    signal: 'Your team can build it — the question is whether the structure holds.',
    icon: 'products',
    href: '/solutions',
  },
  {
    title: 'Enterprises modernising',
    who: 'Legacy estates under pressure',
    body: 'Organisations moving from fragile systems to maintainable platforms without pausing the business to do it.',
    signal: 'The platform outgrew the decisions it was founded on.',
    icon: 'growth',
    href: '/solutions/consulting',
  },
  {
    title: 'Teams putting AI into production',
    who: 'Beyond the pilot',
    body: 'Groups with a working proof of concept that now needs integration, governance and someone accountable for operating it.',
    signal: 'The demo worked. Nobody owns what happens next.',
    icon: 'ai-ml',
    href: '/applied-ai',
  },
]

export function AboutAudience() {
  return (
    <section className="ys-section-light">
      <div className="enterprise-container-wide">
        <motion.div
          className="ys-aud-intro"
        >
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">Who we work with</p>
            <h2 className="ys-aud-head">
              Four situations we recognise immediately.
            </h2>
          </div>
          <p className="ys-aud-lede">
            We are a fit when the architecture carries consequence — regulatory,
            operational or financial. If the work is a quick build with no
            constraint behind it, we will say so.
          </p>
        </motion.div>

        <motion.ul
          className="ys-aud-grid"
        >
          {audiences.map((a) => (
            <motion.li key={a.title} style={{ minWidth: 0 }}>
              <a href={a.href} className="ys-aud-card group">
                <span className="ys-aud-icon">
                  <YsIcon name={a.icon} size={22} variant="current" />
                </span>

                <span className="ys-aud-main">
                  <span className="ys-aud-who">{a.who}</span>
                  <h3 className="ys-aud-title">{a.title}</h3>
                  <span className="ys-aud-body">{a.body}</span>

                  <span className="ys-aud-signal">
                    <span className="ys-aud-signal-label">Typical trigger</span>
                    {a.signal}
                  </span>
                </span>

                <span className="ys-aud-arrow" aria-hidden="true">
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default AboutAudience
