"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { ArrowRight } from 'lucide-react'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { IT_SERVICES } from '@/lib/services'



/* ── Data ─────────────────────────────────────────── */

/**
 * Page-local detail for each service in IT_SERVICES, keyed by href so the
 * names and order always come from the shared taxonomy.
 */
const SERVICE_DETAIL: Record<string, { problem: string; iconPath: string }> = {
  '/solutions/software-engineering': {
    problem: 'Every new product idea waits on a platform that can’t take the change.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  '/solutions/cloud': {
    problem: 'Cloud costs keep rising and nobody can say why.',
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  '/solutions/devops': {
    problem: 'Releases are manual, slow and nerve-wracking.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  '/solutions/data': {
    problem: 'We have the data but can’t get a straight answer out of it.',
    iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
  '/solutions/security': {
    problem: 'An audit or a client security review is coming.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  '/solutions/modernization': {
    problem: 'Our core system is old and nobody dares touch it.',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
}

const OUTCOMES = [
  'One senior team from design through to running it',
  'Azure platforms built to your security and audit needs',
  'Documentation and a run guide your own engineers can use',
  'An agreed scope and plan before delivery starts',
]

/* ── Component ────────────────────────────────────── */

export default function SolutionsPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Pillar 01 · Enterprise IT services"
        title="Enterprise IT that keeps regulated businesses running — and ready for AI."
        lede="We modernize, migrate, secure and run the platforms your business depends on. Azure-first, delivered end to end by one senior team."
        visual="network"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      {/* ── Six services ── */}
      <PageSection
        tone="white"
        eyebrow="What we do"
        title="Six services, one accountable team."
        lede="Start from the problem you have. Each service is delivered by the same people who will support what they build."
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 16 }}
        >
          {IT_SERVICES.map((service) => {
            const detail = SERVICE_DETAIL[service.href]
            return (
              <motion.div
                key={service.href}
                className="ys-card-light group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  {detail && (
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '11px',
                        backgroundColor: 'rgba(10, 132, 255, 0.08)',
                        border: '1px solid rgba(10, 132, 255, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={detail.iconPath} />
                      </svg>
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                      lineHeight: 1.3,
                      marginBottom: '8px',
                    }}
                  >
                    {service.name}
                  </h3>
                  {detail && (
                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.55,
                        color: 'var(--ys-ink)',
                        fontWeight: 600,
                        marginBottom: '8px',
                      }}
                    >
                      &ldquo;{detail.problem}&rdquo;
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--ys-ink-body)',
                    }}
                  >
                    {service.descriptor}
                  </p>
                </div>

                {/* Card footer link */}
                <Link
                  href={service.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '14px 22px',
                    borderTop: '1px solid var(--ys-border)',
                    textDecoration: 'none',
                    minWidth: 0,
                  }}
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ys-link-on-light)]"
                >
                  <span
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: 'var(--ys-link-on-light)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Explore {service.name}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                    style={{
                      color: 'var(--ys-link-on-light)',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                    }}
                    className="group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </PageSection>

      {/* ── Azure specialism + the second pillar ── */}
      <PageSection tone="light">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '20px' }}
        >
          <motion.div
            className="ys-card-light"
            style={{ padding: 'clamp(28px, 4vw, 40px)', minWidth: 0 }}
          >
            <p className="ys-eyebrow">Our specialism</p>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.6vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: 'var(--ys-ink)',
                marginTop: '14px',
                marginBottom: '14px',
                textWrap: 'balance',
              }}
            >
              Microsoft Azure, in depth.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                maxWidth: '62ch',
              }}
            >
              Azure is where we design, build and run by default: landing zones,
              identity, data and AI services that fit together. If your estate
              already runs on AWS or Google Cloud, we work there too, and we
              won&rsquo;t push a migration you don&rsquo;t need.
            </p>
          </motion.div>

          <motion.div
            className="ys-card-light"
            style={{ padding: 'clamp(28px, 4vw, 40px)', minWidth: 0, display: 'flex', flexDirection: 'column' }}
          >
            <p className="ys-eyebrow">Pillar 02 · Applied AI</p>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.6vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: 'var(--ys-ink)',
                marginTop: '14px',
                marginBottom: '14px',
                textWrap: 'balance',
              }}
            >
              AI that lands on the platform we built.
            </h2>
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                maxWidth: '62ch',
                marginBottom: '20px',
              }}
            >
              Clean data, secure cloud and reliable pipelines are what AI needs to
              work in production. Our applied AI team builds on the same
              foundations, inside your systems.
            </p>
            <Link
              href="/applied-ai"
              className="ys-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '14.5px',
                marginTop: 'auto',
              }}
            >
              See Applied AI
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </PageSection>

      {/* ── What you get ── */}
      <PageSection
        tone="white"
        eyebrow="On every engagement"
        title="What you can count on."
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(28px, 4vw, 48px)', alignItems: 'start' }}
        >
          <motion.div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                maxWidth: '56ch',
                marginBottom: '20px',
              }}
            >
              We agree the problem and the scope before we start. The people who
              design the system build it, and stay to support it or hand it over
              with a run guide.
            </p>
            <Link href="/how-we-work" className="ys-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
              How we work
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.ul
            style={{ minWidth: 0, listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            {OUTCOMES.map((outcome) => (
              <li
                key={outcome}
                className="ys-card-light"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 18px',
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(10, 132, 255, 0.08)',
                    border: '1px solid rgba(10, 132, 255, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--ys-ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {outcome}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </PageSection>

      {/* ── Closing CTA ── */}
      <PageCTA
        title="Tell us what is slowing you down."
        body="A platform that won’t scale, a migration that keeps slipping, an audit on the calendar. Describe it in a few lines and a founder replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
