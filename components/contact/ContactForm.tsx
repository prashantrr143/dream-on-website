"use client"

import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { trackContactFormSubmit, trackFormStep } from '@/lib/analytics'
import { siteConfig } from '@/lib/site.config'
import { readRegion } from '@/lib/region'
import { ALL_COUNTRIES, PRIORITY_COUNTRIES, SERVICE_INTERESTS, CONTACT_TIMELINES } from '@/lib/countries'

/**
 * The contact form, shared by /contact-us and the contact overlay.
 *
 * topic 'services' is the two-step "Request for services":
 *   1. name, work email, company, country
 *   2. area of interest, timeline, message
 * Any other topic (Partnership, Careers, Media, Website feedback, Security
 * pack) is a single step. Submits to /api/contact; never claims success
 * unless the server confirms it.
 */

type Field = 'name' | 'email' | 'company' | 'country'

const EMPTY = { name: '', email: '', company: '', role: '', country: '', interest: '', timeline: '', problem: '', website: '' }

const otherCountries = ALL_COUNTRIES.filter((c) => !PRIORITY_COUNTRIES.includes(c))

export function ContactForm({
  topic = 'services',
  initialInterest = '',
  onDone,
}: {
  topic?: 'services' | string
  initialInterest?: string
  onDone?: () => void
}) {
  const isServices = topic === 'services'
  const [form, setForm] = useState({ ...EMPTY, interest: isServices ? initialInterest : topic })
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const pathname = usePathname()
  const uid = useId()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const id = (f: string) => `${uid}-${f}`

  // Default country from the header region choice.
  useEffect(() => {
    const country = readRegion().country
    if (country) setForm((f) => (f.country ? f : { ...f, country }))
  }, [])

  useEffect(() => {
    if (status === 'sent') headingRef.current?.focus()
  }, [status])

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validateStep1 = () => {
    const e: Partial<Record<Field, string>> = {}
    if (!form.name.trim()) e.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a work email address, like name@company.com.'
    if (!form.company.trim()) e.company = 'Enter your company name.'
    if (!form.country) e.country = 'Choose your country.'
    setErrors(e)
    const first = (['name', 'email', 'company', 'country'] as Field[]).find((k) => e[k])
    if (first) document.getElementById(id(first))?.focus()
    return !first
  }

  const next = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep1()) return
    setStep(2)
    trackFormStep(2)
    requestAnimationFrame(() => document.getElementById(id('interest'))?.focus())
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isServices && !validateStep1()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      trackContactFormSubmit(pathname ?? '/contact-us')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="ys-form-done">
        <h3 ref={headingRef} tabIndex={-1}>Thanks — a member of the team will reply within one working day.</h3>
        {siteConfig.bookingUrl && isServices && (
          <p>
            Want to talk sooner?{' '}
            <a href={siteConfig.bookingUrl} className="ys-link" target="_blank" rel="noopener noreferrer">
              Pick a time for a call
            </a>
            .
          </p>
        )}
        {onDone && (
          <button type="button" className="ys-cta-secondary-light" onClick={onDone}>
            Close
          </button>
        )}
      </div>
    )
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p id={id(`${f}-error`)} className="ys-field-error">
        {errors[f]}
      </p>
    ) : null

  const fieldProps = (f: Field) => ({
    id: id(f),
    name: f,
    value: form[f],
    onChange: set(f),
    'aria-required': true as const,
    'aria-invalid': errors[f] ? (true as const) : undefined,
    'aria-describedby': errors[f] ? id(`${f}-error`) : undefined,
    className: 'ys-input',
  })

  const step1 = (
    <>
      <div className="ys-field">
        <label htmlFor={id('name')}>Name <span aria-hidden="true">*</span></label>
        <input type="text" autoComplete="name" {...fieldProps('name')} />
        {err('name')}
      </div>
      <div className="ys-field">
        <label htmlFor={id('email')}>Work email <span aria-hidden="true">*</span></label>
        <input type="email" autoComplete="email" {...fieldProps('email')} />
        {err('email')}
      </div>
      <div className="ys-field">
        <label htmlFor={id('company')}>Company <span aria-hidden="true">*</span></label>
        <input type="text" autoComplete="organization" {...fieldProps('company')} />
        {err('company')}
      </div>
      <div className="ys-field">
        <label htmlFor={id('country')}>Country <span aria-hidden="true">*</span></label>
        <select autoComplete="country-name" {...fieldProps('country')}>
          <option value="">Choose a country</option>
          <optgroup label="Common">
            {PRIORITY_COUNTRIES.map((c) => <option key={`p-${c}`} value={c}>{c}</option>)}
          </optgroup>
          <optgroup label="All countries">
            {otherCountries.map((c) => <option key={c} value={c}>{c}</option>)}
          </optgroup>
        </select>
        {err('country')}
      </div>
    </>
  )

  const message = (
    <div className="ys-field">
      <label htmlFor={id('problem')}>
        {isServices ? 'What are you working on?' : 'Your message'}{' '}
        <span className="ys-optional">(optional but helpful)</span>
      </label>
      <textarea id={id('problem')} name="problem" rows={4} value={form.problem} onChange={set('problem')} className="ys-input" />
    </div>
  )

  const honeypot = (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
      <label htmlFor={id('website')}>Website</label>
      <input type="text" id={id('website')} name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
    </div>
  )

  const footer = (
    <>
      {status === 'failed' && (
        <p role="alert" className="ys-form-error">
          Your message could not be sent. Please email{' '}
          <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a> instead.
        </p>
      )}
      <button type="submit" className="ys-cta-primary-light" disabled={status === 'sending'} style={{ width: '100%' }}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      <p className="ys-form-privacy">
        We use these details only to reply to you. See our <a href="/privacy">privacy notice</a>.
      </p>
    </>
  )

  if (!isServices) {
    return (
      <form onSubmit={submit} noValidate className="ys-form">
        {step1}
        {message}
        {honeypot}
        {footer}
      </form>
    )
  }

  return step === 1 ? (
    <form onSubmit={next} noValidate className="ys-form" aria-label="Request for services, step 1 of 2">
      <p className="ys-form-step">Step 1 of 2 · About you</p>
      {step1}
      <button type="submit" className="ys-cta-primary-light" style={{ width: '100%' }}>
        Continue
      </button>
    </form>
  ) : (
    <form onSubmit={submit} noValidate className="ys-form" aria-label="Request for services, step 2 of 2">
      <p className="ys-form-step">Step 2 of 2 · What you need</p>
      <div className="ys-field">
        <label htmlFor={id('interest')}>Area of interest <span className="ys-optional">(optional)</span></label>
        <select id={id('interest')} name="interest" value={form.interest} onChange={set('interest')} className="ys-input">
          <option value="">Choose one</option>
          {SERVICE_INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>
      <div className="ys-field">
        <label htmlFor={id('timeline')}>Timeline <span className="ys-optional">(optional)</span></label>
        <select id={id('timeline')} name="timeline" value={form.timeline} onChange={set('timeline')} className="ys-input">
          <option value="">Choose one</option>
          {CONTACT_TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      {message}
      {honeypot}
      <button type="button" className="ys-link" onClick={() => setStep(1)} style={{ justifySelf: 'start' }}>
        Back
      </button>
      {footer}
    </form>
  )
}
