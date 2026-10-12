"use client"

import { useEffect, useState } from 'react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { RegionsStrip } from '@/components/enterprise/RegionsStrip'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/site.config'
import { SITE_CONTACT } from '@/lib/site-contact'
import { normalizeInterest, SERVICE_INTERESTS } from '@/lib/countries'

/**
 * /contact-us: the no-JavaScript fallback for the contact overlay, and the
 * page people land on from search. Same form as the overlay; ?interest=
 * presets it (e.g. ?interest=Claude, ?interest=security).
 */

const reachOutScenarios = [
  "You're planning or modernizing a critical software, cloud or AI system",
  'You want a second opinion on architecture, delivery or risk',
  "You're operating in a regulated or security-sensitive environment",
  "You're looking for one accountable team, not a quick build",
]

const contactChannels = [
  {
    label: 'General inquiries',
    value: 'hello@yatisphere.com',
    href: 'mailto:hello@yatisphere.com',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    label: 'Architecture reviews',
    value: 'architects@yatisphere.com',
    href: 'mailto:architects@yatisphere.com',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
]

export default function ContactPage() {
  const [preset, setPreset] = useState<{ topic: string; interest: string }>({ topic: 'services', interest: '' })

  useEffect(() => {
    const interest = normalizeInterest(new URLSearchParams(window.location.search).get('interest'))
    if (!interest) return
    if ((SERVICE_INTERESTS as readonly string[]).includes(interest)) setPreset({ topic: 'services', interest })
    else setPreset({ topic: interest, interest: '' })
  }, [])

  return (
    <SharedLayout>
      <PageHero
        eyebrow="CONTACT"
        title="Tell us the problem."
        lede="A senior member of the team replies within one working day — with an honest view on whether we're the right team."
        visual="network"
      />

      <PageSection tone="white">
        <div
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', alignItems: 'start' }}
          className="max-lg:!grid-cols-1 max-lg:!gap-12"
        >
          {/* ── Left column — context ── */}
          <div style={{ minWidth: 0 }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ys-ink)', marginBottom: '24px' }}>
                When it makes sense to reach out
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', margin: 0, padding: 0 }}>
                {reachOutScenarios.map((scenario) => (
                  <li
                    key={scenario}
                    className="ys-card-light"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 20px', minWidth: 0 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '15px', color: 'var(--ys-ink-body)', lineHeight: 1.6 }}>{scenario}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ys-ink)', marginBottom: '24px' }}>
                Reach us directly
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="ys-card-light"
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', minWidth: 0, textDecoration: 'none' }}
                  >
                    <span
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: 'var(--ys-surface-alt)',
                        border: '1px solid var(--ys-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={channel.iconPath} />
                      </svg>
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ys-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                        {channel.label}
                      </span>
                      <span style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--ys-link-on-light)', overflowWrap: 'anywhere' }}>
                        {channel.value}
                      </span>
                    </span>
                  </a>
                ))}
                {SITE_CONTACT.phone && (
                  <a href={`tel:${SITE_CONTACT.phone.replace(/\s+/g, '')}`} className="ys-card-light" style={{ padding: '20px 24px', fontWeight: 600, color: 'var(--ys-link-on-light)' }}>
                    {SITE_CONTACT.phone}
                  </a>
                )}
              </div>

              {/* Registered entity (audit CT-04, G-06) */}
              {(SITE_CONTACT.registeredAddress || siteConfig.company.cin) && (
                <address style={{ fontStyle: 'normal', marginTop: 20, fontSize: 14, lineHeight: 1.65, color: 'var(--ys-ink-body)' }}>
                  <strong style={{ color: 'var(--ys-ink)' }}>{siteConfig.company.legalName}</strong>
                  {SITE_CONTACT.registeredAddress && (
                    <>
                      <br />
                      Registered office: {SITE_CONTACT.registeredAddress}
                    </>
                  )}
                  {siteConfig.company.cin && (
                    <>
                      <br />
                      CIN {siteConfig.company.cin}
                    </>
                  )}
                </address>
              )}
            </div>

            <div style={{ padding: '20px 24px', background: 'var(--ys-surface-alt)', borderRadius: '12px', borderLeft: '3px solid var(--ys-link-on-light)' }}>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ys-ink-body)' }}>
                All conversations are confidential. Tell us as much or as little as
                you&apos;re able to share at this stage.
              </p>
            </div>
          </div>

          {/* ── Right column — booking and form. #book is kept for old links. ── */}
          <div id="book" style={{ minWidth: 0, scrollMarginTop: 96 }}>
            {siteConfig.bookingUrl && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ys-ink)', marginBottom: 12 }}>Pick a time to talk</h2>
                <iframe
                  src={siteConfig.bookingUrl}
                  title="Book a call with YatiSphere"
                  loading="lazy"
                  style={{ width: '100%', minHeight: 640, border: '1px solid var(--ys-border)', borderRadius: 14 }}
                />
              </div>
            )}
            <div style={{ background: 'var(--ys-surface-alt)', borderRadius: 20, padding: 'clamp(24px, 4vw, 40px)', border: '1px solid var(--ys-border)' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ys-ink)', marginBottom: 6 }}>
                {preset.topic === 'services' ? 'Request for services' : preset.topic}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ys-ink-body)', marginBottom: 24 }}>
                Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
              </p>
              <ContactForm key={`${preset.topic}:${preset.interest}`} topic={preset.topic} initialInterest={preset.interest} />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Hours, data terms and data residency */}
      <RegionsStrip title="Working with us from the UK, Europe, the Middle East, the US or India." />
    </SharedLayout>
  )
}
