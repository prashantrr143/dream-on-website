"use client"

import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import SharedLayout from '@/components/shared-layout'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

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

/* ── Shared input styles ── */
const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '15px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '10px',
  backgroundColor: '#000000',
  color: 'white',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <SharedLayout>
      {/* ── Hero — Dark Navy ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          backgroundColor: '#000000'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99, 91, 255, 0.12), transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '24px'
              }}
            >
              Contact
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: 'white',
                marginBottom: '24px'
              }}
            >
              Start a conversation.
            </h1>
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              We work with teams navigating complex software, cloud, and AI initiatives — often in regulated or high-trust environments.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Main Content — Two Column ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '120px', backgroundColor: '#000000' }}>
        <div className="enterprise-container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start'
            }}
            className="max-lg:!grid-cols-1 max-lg:!gap-12"
          >
            {/* ── Left Column — Context ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* When to reach out */}
              <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '24px'
                  }}
                >
                  When it makes sense to reach out
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {reachOutScenarios.map((scenario, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        padding: '16px 20px',
                        backgroundColor: '#0a0a0f',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.04)'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <path d="M13.333 4L6 11.333 2.667 8" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                        {scenario}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact channels */}
              <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
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
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '20px 24px',
                        backgroundColor: '#0a0a0f',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        textDecoration: 'none',
                        transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.06)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(99, 91, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b84ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={channel.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          {channel.label}
                        </p>
                        <p style={{ fontSize: '15px', fontWeight: 600, color: 'white' }}>
                          {channel.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Reassurance */}
              <motion.div
                variants={fadeUp}
                style={{
                  padding: '20px 24px',
                  backgroundColor: 'rgba(99, 91, 255, 0.04)',
                  borderRadius: '12px',
                  borderLeft: '3px solid #8b84ff'
                }}
              >
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
                  We respect your time and information. All conversations are confidential and exploratory — no pressure, no obligation.
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right Column — Form ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div
                style={{
                  backgroundColor: '#0a0a0f',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '6px'
                  }}
                >
                  Send a message
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.7)',
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
                        backgroundColor: '#8b84ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '8px'
                      }}
                    >
                      Message sent
                    </h3>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
                      Thank you. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'white',
                            marginBottom: '8px'
                          }}
                        >
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
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#8b84ff'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'white',
                            marginBottom: '8px'
                          }}
                        >
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
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#8b84ff'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>

                      {/* Role */}
                      <div>
                        <label
                          htmlFor="role"
                          style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'white',
                            marginBottom: '8px'
                          }}
                        >
                          Role
                          <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.7)', marginLeft: '4px' }}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          placeholder="e.g., CTO, VP Engineering, Architect"
                          value={formData.role}
                          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                          style={{ ...inputBase, color: formData.role ? 'white' : 'rgba(255,255,255,0.4)' }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#8b84ff'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>

                      {/* Context */}
                      <div>
                        <label
                          htmlFor="context"
                          style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'white',
                            marginBottom: '8px'
                          }}
                        >
                          Context
                          <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.7)', marginLeft: '4px' }}>(optional but helpful)</span>
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
                            color: formData.context ? '#000000' : '#94a3b8'
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#8b84ff'
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 91, 255, 0.1)'
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="stripe-btn-primary"
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
        </div>
      </section>
    </SharedLayout>
  )
}
