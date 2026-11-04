"use client"

import { useEffect, useState } from 'react'
import SharedLayout from '@/components/shared-layout'
import { PageSection } from '@/components/enterprise'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/site.config'
import { SITE_CONTACT } from '@/lib/site-contact'
import { normalizeInterest, SERVICE_INTERESTS } from '@/lib/countries'

/**
 * /contact-us: the contact page. Every "Talk to us" link routes here (the
 * slide-in overlay was removed, 2026-11-01). ?interest= presets the form
 * (e.g. ?interest=Claude, ?interest=security).
 */

const NEXT_STEPS = [
  { name: 'We reply within one working day', body: 'We read what you send and reply with how we would approach it and a suggested first step.' },
  { name: 'A first call, if it helps', body: 'The first call is free and carries no obligation. If you need to share details first, we sign a mutual NDA before you do.' },
  { name: 'A scoped first step', body: 'If a Solution Blueprint is the right start, we scope it with you at no cost: the questions it answers, the fixed fee and the 2–4 week timeline.' },
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
      {/* One screen: what to expect on the left, the form on the right
          (modelled on a two-column contact layout, 2026-11-01). The form
          posts to /api/contact, which emails the team. */}
      <section className="ys-contact" aria-labelledby="contact-title">
        <div className="enterprise-container-wide ys-contact-grid">
          <div className="ys-contact-copy">
            <p className="ys-kicker ys-kicker-on-dark">Contact</p>
            <h1 id="contact-title">Contact YatiSphere</h1>
            <p className="ys-contact-lede">
              Tell us what you are working on. We reply within one working day with our view on how we can help and a suggested first step.
            </p>
          </div>

          <div id="book" className="ys-contact-card">
            {siteConfig.bookingUrl && (
              <div style={{ marginBottom: 28 }}>
                <h2 className="ys-contact-card-title">Pick a time to talk</h2>
                <iframe
                  src={siteConfig.bookingUrl}
                  title="Book a call with YatiSphere"
                  loading="lazy"
                  style={{ width: '100%', minHeight: 640, border: '1px solid var(--grey-200)', borderRadius: 8 }}
                />
              </div>
            )}
            <h2 className="ys-contact-card-title">{preset.topic === 'services' ? 'Send us a message' : preset.topic}</h2>
            <p className="ys-contact-card-sub">
              Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
            </p>
            <ContactForm key={`${preset.topic}:${preset.interest}`} topic={preset.topic} initialInterest={preset.interest} />
          </div>
          <div className="ys-contact-details">
            <ul className="ys-contact-list">
              <li>
                <span>Email</span>
                <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
              </li>
              {SITE_CONTACT.linkedin && (
                <li>
                  <span>LinkedIn</span>
                  <a href={SITE_CONTACT.linkedin} target="_blank" rel="noopener noreferrer">YatiSphere on LinkedIn</a>
                </li>
              )}
              {SITE_CONTACT.phone && (
                <li>
                  <span>Phone</span>
                  <a href={`tel:${SITE_CONTACT.phone.replace(/\s+/g, '')}`}>{SITE_CONTACT.phone}</a>
                </li>
              )}
              {SITE_CONTACT.registeredAddress && (
                <li>
                  <span>Registered office</span>
                  <p>
                    {siteConfig.company.legalName}
                    <br />
                    {SITE_CONTACT.registeredAddress}
                    {siteConfig.company.cin && <><br />CIN {siteConfig.company.cin}</>}
                  </p>
                </li>
              )}
            </ul>

            <p className="ys-contact-note">All conversations are confidential. Share as much or as little as you can at this stage.</p>
          </div>

        </div>
      </section>

      {/* What happens next: only commitments made elsewhere on the site
          (reply time, NDA, free first call, Blueprint scoped at no cost). */}
      <PageSection tone="light" title="What happens after you write">
        <dl className="ys-wwu-list">
          {NEXT_STEPS.map((n) => (
            <div key={n.name}>
              <dt>{n.name}</dt>
              <dd>{n.body}</dd>
            </div>
          ))}
        </dl>
      </PageSection>
    </SharedLayout>
  )
}
