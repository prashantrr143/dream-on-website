"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { trackContactFormSubmit } from '@/lib/analytics'



const reachOutScenarios = [
  "You're planning or modernizing a critical software, cloud, or AI system",
  "You want a second opinion on architecture, delivery, or risk",
  "You're operating in a regulated or security-sensitive environment",
  "You're looking for a long-term technology partner, not a quick build"
]

const contactChannels = [
  {
    label: "General inquiries",
    value: "hello@yatisphere.com",
    href: "mailto:hello@yatisphere.com",
    iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    label: "Architecture reviews",
    value: "architects@yatisphere.com",
    href: "mailto:architects@yatisphere.com",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  }
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
  fontFamily: 'inherit'
}

const labelBase: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--ys-ink)',
  marginBottom: '8px'
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    context: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const pathname = usePathname()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Records that an enquiry was submitted. Carries the path only: no
    // name, email or message text ever enters the dataLayer.
    trackContactFormSubmit(pathname ?? '/contact-us')
  }

  /* Focus / blur styling shared by every field */
  const handleFieldFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--ys-link-on-light)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 104, 214, 0.14)'
  }
  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--ys-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <SharedLayout>
      {/* ── Hero — Deep Blue. The form below is the action, so no CTAs here. ── */}
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="We work with teams navigating complex software, cloud, and AI initiatives — often in regulated or high-trust environments."
      />

      {/* ── Main Content — Two Column ── */}
      <PageSection tone="white">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '80px',
            alignItems: 'start'
          }}
          className="max-lg:!grid-cols-1 max-lg:!gap-12"
        >
          {/* ── Left Column — Context ── */}
          <motion.div
            style={{ minWidth: 0 }}
          >
            {/* When to reach out */}
            <motion.div style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--ys-ink)',
                  marginBottom: '24px'
                }}
              >
                When it makes sense to reach out
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {reachOutScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="ys-card-light"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '16px 20px',
                      minWidth: 0
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: '15px', color: 'var(--ys-ink-body)', lineHeight: 1.6 }}>
                      {scenario}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact channels */}
            <motion.div style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--ys-ink)',
                  marginBottom: '24px'
                }}
              >
                Reach us directly
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="ys-card-light"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 24px',
                      minWidth: 0,
                      textDecoration: 'none'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: 'var(--ys-surface-alt)',
                        border: '1px solid var(--ys-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ys-link-on-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={channel.iconPath} />
                      </svg>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ys-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                        {channel.label}
                      </p>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ys-link-on-light)', overflowWrap: 'anywhere' }}>
                        {channel.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Reassurance */}
            <motion.div
              style={{
                padding: '20px 24px',
                background: 'var(--ys-surface-alt)',
                borderRadius: '12px',
                borderLeft: '3px solid var(--ys-link-on-light)'
              }}
            >
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ys-ink-body)' }}>
                We respect your time and information. All conversations are confidential and exploratory — no pressure, no obligation.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Form ── */}
          <motion.div
            style={{ minWidth: 0 }}
          >
            <div
              style={{
                background: 'var(--ys-surface-alt)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid var(--ys-border)'
              }}
            >
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--ys-ink)',
                  marginBottom: '6px'
                }}
              >
                Send a message
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--ys-ink-body)',
                  marginBottom: '32px'
                }}
              >
                We&apos;ll get back to you within one business day.
              </p>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--ys-link-on-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#ffffff' }} aria-hidden="true">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--ys-ink)',
                      marginBottom: '8px'
                    }}
                  >
                    Message sent
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--ys-ink-body)' }}>
                    Thank you. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Name */}
                    <div>
                      <label htmlFor="name" style={labelBase}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        style={inputBase}
                        onFocus={handleFieldFocus}
                        onBlur={handleFieldBlur}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelBase}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        style={inputBase}
                        onFocus={handleFieldFocus}
                        onBlur={handleFieldBlur}
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" style={labelBase}>
                        Role
                        <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)', marginLeft: '4px' }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        placeholder="e.g., CTO, VP Engineering, Architect"
                        value={formData.role}
                        onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                        style={{ ...inputBase, color: formData.role ? 'var(--ys-ink)' : 'var(--ys-ink-muted)' }}
                        onFocus={handleFieldFocus}
                        onBlur={handleFieldBlur}
                      />
                    </div>

                    {/* Context */}
                    <div>
                      <label htmlFor="context" style={labelBase}>
                        Context
                        <span style={{ fontWeight: 400, color: 'var(--ys-ink-muted)', marginLeft: '4px' }}>(optional but helpful)</span>
                      </label>
                      <textarea
                        id="context"
                        name="context"
                        rows={4}
                        placeholder="What are you working on? What's prompting this conversation?"
                        value={formData.context}
                        onChange={(e) => setFormData(prev => ({ ...prev, context: e.target.value }))}
                        style={{
                          ...inputBase,
                          resize: 'vertical' as const,
                          minHeight: '120px',
                          color: formData.context ? 'var(--ys-ink)' : 'var(--ys-ink-muted)'
                        }}
                        onFocus={handleFieldFocus}
                        onBlur={handleFieldBlur}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ys-cta-primary-light inline-flex items-center justify-center"
                      style={{
                        width: '100%',
                        marginTop: '4px',
                        opacity: isSubmitting ? 0.6 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </PageSection>
    </SharedLayout>
  )
}
