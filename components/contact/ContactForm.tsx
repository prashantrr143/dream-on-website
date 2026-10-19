"use client"

import { useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { trackContactFormSubmit, trackFormStep } from '@/lib/analytics'
import { siteConfig } from '@/lib/site.config'
import { readRegion } from '@/lib/region'
import { SERVICE_INTERESTS, CONTACT_TIMELINES } from '@/lib/countries'
import { CountryCombobox } from './CountryCombobox'

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

type Field = 'name' | 'email' | 'company' | 'country' | 'problem'

/** A short brief is what makes the first reply useful. */
const MIN_PROBLEM = 20

const EMPTY = { name: '', email: '', company: '', role: '', country: '', interest: '', timeline: '', problem: '', website: '' }

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
  const [errors, setErrors] = useState<Partial<Record<Field, string | undefined>>>({})
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

  const validateProblem = () => {
    if (form.problem.trim().length >= MIN_PROBLEM) return true
    setErrors((prev) => ({
      ...prev,
      problem: form.problem.trim()
        ? `Add a little more detail (at least ${MIN_PROBLEM} characters).`
        : 'Tell us briefly what you are working on.',
    }))
    document.getElementById(id('problem'))?.focus()
    return false
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isServices && !validateStep1()) return
    if (!validateProblem()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, page: pathname ?? '' }),
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
        <CountryCombobox
          id={id('country')}
          value={form.country}
          invalid={!!errors.country}
          describedBy={errors.country ? id('country-error') : undefined}
          onChange={(country) => {
            setForm((prev) => ({ ...prev, country }))
            setErrors((prev) => ({ ...prev, country: undefined }))
          }}
        />
        {err('country')}
      </div>
    </>
  )

  const message = (
    <div className="ys-field">
      <label htmlFor={id('problem')}>
        {isServices ? 'What are you working on?' : 'Your message'} <span aria-hidden="true">*</span>
      </label>
      <textarea
        id={id('problem')}
        name="problem"
        rows={4}
        value={form.problem}
        onChange={set('problem')}
        className="ys-input"
        aria-required
        aria-invalid={errors.problem ? true : undefined}
        aria-describedby={errors.problem ? id('problem-error') : id('problem-hint')}
        placeholder={isServices ? 'For example: our Azure bill doubled this year and we want to know why.' : ''}
      />
      {errors.problem ? err('problem') : (
        <p id={id('problem-hint')} className="ys-field-hint">A few sentences is plenty. Everything you share stays confidential.</p>
      )}
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
      <Steps current={1} />
      {step1}
      <button type="submit" className="ys-cta-primary-light" style={{ width: '100%' }}>
        Continue
      </button>
    </form>
  ) : (
    <form onSubmit={submit} noValidate className="ys-form" aria-label="Request for services, step 2 of 2">
      <Steps current={2} />
      <Chips
        name="interest"
        legend="Area of interest"
        options={SERVICE_INTERESTS}
        value={form.interest}
        onChange={(interest) => setForm((prev) => ({ ...prev, interest }))}
        firstId={id('interest')}
      />
      <Chips
        name="timeline"
        legend="Timeline"
        options={CONTACT_TIMELINES}
        value={form.timeline}
        onChange={(timeline) => setForm((prev) => ({ ...prev, timeline }))}
      />
      {message}
      {honeypot}
      <button type="button" className="ys-form-back" onClick={() => setStep(1)}>
        ← Back to your details
      </button>
      {footer}
    </form>
  )
}

/** Two-segment progress bar; the label stays readable for screen readers. */
function Steps({ current }: { current: 1 | 2 }) {
  return (
    <div className="ys-steps">
      <p className="ys-form-step">
        Step {current} of 2 · {current === 1 ? 'About you' : 'What you need'}
      </p>
      <div className="ys-steps-bar" aria-hidden="true">
        <span className="is-done" />
        <span className={current === 2 ? 'is-done' : ''} />
      </div>
    </div>
  )
}

/**
 * Single-choice pills built on native radios, so keyboard, focus and
 * screen-reader behavior come from the browser. Clicking the chosen
 * pill again clears it: both groups are optional.
 */
function Chips({
  name,
  legend,
  options,
  value,
  onChange,
  firstId,
}: {
  name: string
  legend: string
  options: readonly string[]
  value: string
  onChange: (v: string) => void
  firstId?: string
}) {
  return (
    <fieldset className="ys-chips">
      <legend>
        {legend} <span className="ys-optional">(optional)</span>
      </legend>
      <div className="ys-chips-row">
        {options.map((o, i) => (
          <label key={o} className={`ys-chip${value === o ? ' is-on' : ''}`}>
            <input
              type="radio"
              name={name}
              value={o}
              id={i === 0 ? firstId : undefined}
              checked={value === o}
              onChange={() => onChange(o)}
              onClick={() => value === o && onChange('')}
            />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
