"use client"

import { useEffect, useState } from 'react'
import SharedLayout from '@/components/shared-layout'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/site.config'
import { SITE_CONTACT } from '@/lib/site-contact'
import { normalizeInterest, SERVICE_INTERESTS } from '@/lib/countries'

/**
 * /contact-us: the contact page. Every "Talk to us" link routes here (the
 * slide-in overlay was removed, 2026-11-01). ?interest= presets the form
 * (e.g. ?interest=Claude, ?interest=security).
 */

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
            <h1 id="contact-title">Get in touch</h1>
            <p className="ys-contact-lede">
              Tell us what you are working on. We reply within one working day and tell you plainly whether we are the right team.
            </p>

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
              <li>
                <span>Hours</span>
                <p>Calls in US hours by appointment.</p>
              </li>
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
        </div>
      </section>

    </SharedLayout>
  )
}
