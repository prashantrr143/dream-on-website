"use client"

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { RegionsStrip } from '@/components/enterprise/RegionsStrip'
import { trackContactFormSubmit } from '@/lib/analytics'
import { siteConfig } from '@/lib/site.config'
import { SITE_CONTACT } from '@/lib/site-contact'
import {
  ALL_COUNTRIES,
  PRIORITY_COUNTRIES,
  CONTACT_INTERESTS,
  CONTACT_TIMELINES,
} from '@/lib/countries'

const reachOutScenarios = [
  "You're planning or modernizing a critical software, cloud or AI system",
  'You want a second opinion on architecture, delivery or risk',
  "You're operating in a regulated or security-sensitive environment",
  "You're looking for a long-term technology partner, not a quick build",
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

/* ── Shared input styles — light surface ── */
const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '15px',
  border: '1px solid var(--ys-border)',
  borderRadius: '10px',
  background: 'var(--ys-surface)',
  color: 'var(--ys-ink)',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit',
}

const labelBase: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--ys-ink)',
  marginBottom: '8px',
}

const errorText: React.CSSProperties = {
  marginTop: 6,
  fontSize: 13,
  color: '#B42318',
}

type Field = 'name' | 'email' | 'company' | 'country'

const EMPTY = {
  name: '',
  email: '',
  company: '',
  role: '',
  country: '',
  interest: '',
  timeline: '',
  problem: '',
  website: '', // honeypot
}

function validate(f: typeof EMPTY): Partial<Record<Field, string>> {
  const e: Partial<Record<Field, string>> = {}
  if (!f.name.trim()) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a work email address, like name@company.com.'
  if (!f.company.trim()) e.company = 'Enter your company name.'
  if (!f.country) e.country = 'Choose your country.'
  return e
}

function BookingEmbed() {
  if (!siteConfig.bookingUrl) return null
  return (
    <iframe
      src={siteConfig.bookingUrl}
      title="Book a 30-minute call with YatiSphere"
      loading="lazy"
      style={{ width: '100%', minHeight: 640, border: '1px solid var(--ys-border)', borderRadius: 14, background: 'var(--ys-surface)' }}
    />
  )
}

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const pathname = usePathname()
  const summaryRef = useRef<HTMLDivElement>(null)
  const sentRef = useRef<HTMLHeadingElement>(null)

  // The Trust center links here with ?interest=security to request the
  // NDA and security pack; preset the form for that.
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest')
    if (interest === 'security') {
      setForm((f) => ({
        ...f,
        interest: 'IT services',
        problem: f.problem || 'We would like your NDA and security pack.',
      }))
    }
  }, [])

  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus()
  }, [status])

  const set = (key: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) {
      // Move focus to the first invalid field so keyboard and screen
      // reader users land on the problem.
      const first = (['name', 'email', 'company', 'country'] as Field[]).find((k) => found[k])
      if (first) document.getElementById(first)?.focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      // Records that an inquiry was submitted. Carries the path only: no
      // name, email or message text ever enters the dataLayer.
      trackContactFormSubmit(pathname ?? '/contact-us')
    } catch {
      setStatus('failed')
      summaryRef.current?.focus()
    }
  }

  const fieldFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--ys-link-on-light)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 104, 214, 0.14)'
  }
  const fieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--ys-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const inputProps = (key: Field) => ({
    id: key,
    name: key,
    value: form[key],
    onChange: set(key),
    onFocus: fieldFocus,
    onBlur: fieldBlur,
    'aria-required': true as const,
    'aria-invalid': errors[key] ? (true as const) : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
    style: { ...inputBase, ...(errors[key] ? { borderColor: '#B42318' } : {}) },
  })

  const otherCountries = ALL_COUNTRIES.filter((c) => !PRIORITY_COUNTRIES.includes(c))

  return (
    <SharedLayout>
      <PageHero
        eyebrow="Contact"
        title="Tell us the problem."
        lede="A founder replies within one working day — with an honest view on whether we're the right team."
        visual="network"
      />

      <PageSection tone="white">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '80px',
            alignItems: 'start',
          }}
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

          {/* ── Right column — booking and form. #book is the target of every primary CTA. ── */}
          <div id="book" style={{ minWidth: 0, scrollMarginTop: 96 }}>
            {siteConfig.bookingUrl && status !== 'sent' && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ys-ink)', marginBottom: 6 }}>
                  Book a 30-minute call
                </h2>
                <p style={{ fontSize: 15, color: 'var(--ys-ink-body)', marginBottom: 20 }}>
                  Pick a time that suits you; the calendar shows it in your time zone.
                </p>
                <BookingEmbed />
              </div>
            )}

            <div style={{ background: 'var(--ys-surface-alt)', borderRadius: '20px', padding: 'clamp(24px, 4vw, 40px)', border: '1px solid var(--ys-border)' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }} role="status">
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--ys-link-on-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#ffffff' }} aria-hidden="true">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 ref={sentRef} tabIndex={-1} style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ys-ink)', marginBottom: '8px', outline: 'none' }}>
                    Thanks — a founder will reply within one working day.
                  </h2>
                  {siteConfig.bookingUrl && (
                    <div style={{ marginTop: 28, textAlign: 'left' }}>
                      <p style={{ fontSize: 15, color: 'var(--ys-ink-body)', marginBottom: 16 }}>
                        Want to talk sooner? Pick a time:
                      </p>
                      <BookingEmbed />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ys-ink)', marginBottom: '6px' }}>
                    {siteConfig.bookingUrl ? 'Or send us a message' : 'Send us a message'}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--ys-ink-body)', marginBottom: '28px' }}>
                    Fields marked <span aria-hidden="true">*</span>
                    <span className="sr-only">with an asterisk</span> are required.
                  </p>

                  <div ref={summaryRef} tabIndex={-1} aria-live="polite" style={{ outline: 'none' }}>
                    {status === 'failed' && (
                      <p
                        role="alert"
                        style={{ marginBottom: 20, padding: '14px 16px', borderRadius: 10, background: '#FEF3F2', color: '#B42318', fontSize: 14, lineHeight: 1.6 }}
                      >
                        Your message could not be sent. Please email{' '}
                        <a href="mailto:hello@yatisphere.com" style={{ color: '#B42318', fontWeight: 600, textDecoration: 'underline' }}>
                          hello@yatisphere.com
                        </a>{' '}
                        instead, and we&apos;ll reply within one working day.
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div>
                        <label htmlFor="name" style={labelBase}>Name <span aria-hidden="true">*</span></label>
                        <input type="text" autoComplete="name" {...inputProps('name')} />
                        {errors.name && <p id="name-error" style={errorText}>{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" style={labelBase}>Work email <span aria-hidden="true">*</span></label>
                        <input type="email" autoComplete="email" {...inputProps('email')} />
                        {errors.email && <p id="email-error" style={errorText}>{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" style={labelBase}>Company <span aria-hidden="true">*</span></label>
                        <input type="text" autoComplete="organization" {...inputProps('company')} />
                        {errors.company && <p id="company-error" style={errorText}>{errors.company}</p>}
                      </div>

                      <div>
                        <label htmlFor="country" style={labelBase}>Country <span aria-hidden="true">*</span></label>
                        {/* Native select: keyboard type-ahead finds a country by its first letters. */}
                        <select autoComplete="country-name" {...inputProps('country')}>
                          <option value="">Choose a country</option>
                          <optgroup label="Common">
                            {PRIORITY_COUNTRIES.map((c) => <option key={`p-${c}`} value={c}>{c}</option>)}
                          </optgroup>
                          <optgroup label="All countries">
                            {otherCountries.map((c) => <option key={c} value={c}>{c}</option>)}
                          </optgroup>
                        </select>
                        {errors.country && <p id="country-error" style={errorText}>{errors.country}</p>}
                      </div>

                      <div>
                        <label htmlFor="role" style={labelBase}>
                          Role <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)' }}>(optional)</span>
                        </label>
                        <input type="text" id="role" name="role" autoComplete="organization-title" value={form.role} onChange={set('role')} onFocus={fieldFocus} onBlur={fieldBlur} style={inputBase} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
                        <div>
                          <label htmlFor="interest" style={labelBase}>
                            Interested in <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)' }}>(optional)</span>
                          </label>
                          <select id="interest" name="interest" value={form.interest} onChange={set('interest')} onFocus={fieldFocus} onBlur={fieldBlur} style={inputBase}>
                            <option value="">Choose one</option>
                            {CONTACT_INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" style={labelBase}>
                            Timeline <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)' }}>(optional)</span>
                          </label>
                          <select id="timeline" name="timeline" value={form.timeline} onChange={set('timeline')} onFocus={fieldFocus} onBlur={fieldBlur} style={inputBase}>
                            <option value="">Choose one</option>
                            {CONTACT_TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="problem" style={labelBase}>
                          The problem <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)' }}>(optional but helpful)</span>
                        </label>
                        <textarea
                          id="problem"
                          name="problem"
                          rows={4}
                          placeholder="What's going wrong, and what's prompting this conversation now?"
                          value={form.problem}
                          onChange={set('problem')}
                          onFocus={fieldFocus}
                          onBlur={fieldBlur}
                          style={{ ...inputBase, resize: 'vertical', minHeight: '120px' }}
                        />
                      </div>

                      {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                        <label htmlFor="website">Website</label>
                        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="ys-cta-primary-light inline-flex items-center justify-center"
                        style={{ width: '100%', marginTop: '4px', opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                      >
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                      </button>

                      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ys-ink-muted)' }}>
                        We use these details only to reply to you. See our{' '}
                        <a href="/privacy" className="ys-link" style={{ fontSize: 13 }}>privacy policy</a>.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Hours, contracts, currency and data residency (audit H-06) */}
      <RegionsStrip title="Working with us from the UK, Europe, the Middle East, the US or India." />
    </SharedLayout>
  )
}
