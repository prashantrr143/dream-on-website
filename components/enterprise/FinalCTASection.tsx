"use client"

import Link from 'next/link'
import { ArrowRight, Check, ClipboardList, Cpu, FileCheck2, ServerCog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PRIMARY_CTA, contactHref } from '@/lib/cta'
import { SITE_CONTACT } from '@/lib/site-contact'

/**
 * Closing banner (2026-11-01). One clear ask on the left; on the right the
 * visitor picks where they are starting, which opens the contact form with
 * the right interest preset (or the Blueprint page). Navy, with the
 * drifting perspective grid behind it; the grid stands still under
 * reduced motion.
 */

const STARTS: { label: string; line: string; href: string; Icon: LucideIcon }[] = [
  { label: 'An AI pilot that stalled', line: 'Take it through review and into production.', href: contactHref('Applied AI'), Icon: Cpu },
  { label: 'A plan before a build', line: 'Design, plan and risks in 2–4 weeks, fixed fee.', href: '/blueprint', Icon: ClipboardList },
  { label: 'A security review or audit', line: 'Controls and evidence your reviewers accept.', href: contactHref('Engineering & data'), Icon: FileCheck2 },
  { label: 'Cloud, software or data work', line: 'Foundations, platforms and modernization.', href: contactHref('Cloud: multi-cloud'), Icon: ServerCog },
]

const ASSURE = ['Reply within one working day', 'Mutual NDA before details', 'Your code, your accounts']

const FinalCTASection = () => {
  return (
    <section className="ys-final" aria-labelledby="home-final">
      <div className="ys-final-grid" aria-hidden="true" />
      <div className="ys-final-glow" aria-hidden="true" />

      <div className="enterprise-container-wide ys-final2">
        <div className="ys-final2-copy">
          <p className="ys-kicker ys-kicker-on-dark">Start a conversation</p>
          <h2 id="home-final" className="ys-final2-title">Tell us the one problem you would fix first.</h2>
          <p className="ys-final2-sub">
            We reply within one working day, tell you plainly whether we're the right fit, and suggest a first step.
          </p>
          <div className="ys-final2-ctas">
            <Link href={PRIMARY_CTA.href} className="ys-cta-primary group inline-flex items-center gap-2">
              {PRIMARY_CTA.label}
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
            <a href={`mailto:${SITE_CONTACT.email}`} className="ys-final2-mail">{SITE_CONTACT.email}</a>
          </div>
          <ul className="ys-final2-assure">
            {ASSURE.map((a) => (
              <li key={a}><Check className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />{a}</li>
            ))}
          </ul>
        </div>

        <nav className="ys-final2-picker" aria-label="Where are you starting?">
          <p className="ys-final2-picker-title">Where are you starting?</p>
          <ul>
            {STARTS.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="ys-final2-option">
                  <span className="ys-final2-option-icon"><s.Icon className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" /></span>
                  <span className="ys-final2-option-text">
                    <span className="ys-final2-option-label">{s.label}</span>
                    <span className="ys-final2-option-line">{s.line}</span>
                  </span>
                  <ArrowRight className="ys-final2-option-arrow w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default FinalCTASection
