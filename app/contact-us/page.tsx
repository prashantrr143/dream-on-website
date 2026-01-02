"use client"

import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import SharedLayout from '@/components/shared-layout'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// When to reach out scenarios
const reachOutScenarios = [
  "You're planning or modernizing a critical software, cloud, or AI system",
  "You want a second opinion on architecture, delivery, or risk",
  "You're operating in a regulated or security-sensitive environment",
  "You're looking for a long-term technology partner, not a quick build"
]

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

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <SharedLayout>
      {/* Hero - Context Setting */}
      <section
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-medium)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-4)'
            }}
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-6)',
              maxWidth: '600px'
            }}
          >
            Start a Conversation
          </motion.h1>
          <motion.div
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-500))',
              maxWidth: '640px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)'
            }}
          >
            <p>
              We work with teams navigating complex software, cloud, and AI initiatives—often in regulated or high-trust environments.
            </p>
            <p>
              If you're exploring a new initiative, assessing risk, or looking for a delivery partner, we're happy to talk.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content - Two Column */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <div className="enterprise-container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 'var(--space-16)',
              alignItems: 'start'
            }}
          >
            {/* Left Column - When to Reach Out + CTAs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* When to Reach Out */}
              <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-12)' }}>
                <h2
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-6)'
                  }}
                >
                  When It Makes Sense to Reach Out
                </h2>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)'
                  }}
                >
                  {reachOutScenarios.map((scenario, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)',
                        fontSize: 'var(--text-base)',
                        color: 'hsl(var(--premium-gray-600))',
                        lineHeight: 'var(--leading-relaxed)'
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'hsl(var(--premium-gray-300))',
                          marginTop: '10px',
                          flexShrink: 0
                        }}
                      />
                      {scenario}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Primary CTA */}
              <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-8)' }}>
                <h3
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-4)'
                  }}
                >
                  Ready to talk?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  <a
                    href="mailto:hello@yatisphere.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-4) var(--space-6)',
                      backgroundColor: 'hsl(var(--premium-gray-900))',
                      color: 'white',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-medium)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    Start a Conversation
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:architects@yatisphere.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-4) var(--space-6)',
                      backgroundColor: 'transparent',
                      color: 'hsl(var(--premium-gray-700))',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-medium)',
                      borderRadius: '8px',
                      border: '1px solid hsl(var(--premium-gray-200))',
                      textDecoration: 'none',
                      width: 'fit-content',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Talk to an Architect
                  </a>
                </div>
              </motion.div>

              {/* Direct Email */}
              <motion.div variants={fadeUp}>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--premium-gray-500))'
                  }}
                >
                  Or email us directly at{' '}
                  <a
                    href="mailto:hello@yatisphere.com"
                    style={{
                      color: 'hsl(var(--premium-gray-900))',
                      textDecoration: 'underline'
                    }}
                  >
                    hello@yatisphere.com
                  </a>
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Minimal Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div
                style={{
                  backgroundColor: 'hsl(var(--premium-gray-50))',
                  borderRadius: '12px',
                  padding: 'var(--space-8)',
                  border: '1px solid hsl(var(--premium-gray-100))'
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-2)'
                  }}
                >
                  Send a Message
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--premium-gray-500))',
                    marginBottom: 'var(--space-6)'
                  }}
                >
                  We'll get back to you within one business day.
                </p>

                {isSubmitted ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: 'var(--space-8) 0'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'hsl(var(--premium-gray-900))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto var(--space-4)'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'hsl(var(--premium-gray-900))',
                        marginBottom: 'var(--space-2)'
                      }}
                    >
                      Message Sent
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'hsl(var(--premium-gray-500))'
                      }}
                    >
                      Thank you. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            display: 'block',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'hsl(var(--premium-gray-700))',
                            marginBottom: 'var(--space-2)'
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
                          style={{
                            width: '100%',
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-base)',
                            border: '1px solid hsl(var(--premium-gray-200))',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            color: 'hsl(var(--premium-gray-900))',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            display: 'block',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'hsl(var(--premium-gray-700))',
                            marginBottom: 'var(--space-2)'
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
                          style={{
                            width: '100%',
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-base)',
                            border: '1px solid hsl(var(--premium-gray-200))',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            color: 'hsl(var(--premium-gray-900))',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                          }}
                        />
                      </div>

                      {/* Role */}
                      <div>
                        <label
                          htmlFor="role"
                          style={{
                            display: 'block',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'hsl(var(--premium-gray-700))',
                            marginBottom: 'var(--space-2)'
                          }}
                        >
                          Role
                          <span style={{ fontWeight: 'var(--font-normal)', color: 'hsl(var(--premium-gray-400))' }}> (optional)</span>
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          placeholder="e.g., CTO, VP Engineering, Architect"
                          value={formData.role}
                          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-base)',
                            border: '1px solid hsl(var(--premium-gray-200))',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            color: 'hsl(var(--premium-gray-900))',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                          }}
                        />
                      </div>

                      {/* Context */}
                      <div>
                        <label
                          htmlFor="context"
                          style={{
                            display: 'block',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-medium)',
                            color: 'hsl(var(--premium-gray-700))',
                            marginBottom: 'var(--space-2)'
                          }}
                        >
                          Context
                          <span style={{ fontWeight: 'var(--font-normal)', color: 'hsl(var(--premium-gray-400))' }}> (optional but helpful)</span>
                        </label>
                        <textarea
                          id="context"
                          name="context"
                          rows={4}
                          placeholder="What are you working on? What's prompting this conversation?"
                          value={formData.context}
                          onChange={(e) => setFormData(prev => ({ ...prev, context: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: 'var(--space-3) var(--space-4)',
                            fontSize: 'var(--text-base)',
                            border: '1px solid hsl(var(--premium-gray-200))',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            color: 'hsl(var(--premium-gray-900))',
                            outline: 'none',
                            resize: 'vertical',
                            minHeight: '100px',
                            transition: 'border-color 0.2s ease'
                          }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: 'var(--space-4)',
                          backgroundColor: 'hsl(var(--premium-gray-900))',
                          color: 'white',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-medium)',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          opacity: isSubmitting ? 0.7 : 1,
                          transition: 'opacity 0.2s ease',
                          marginTop: 'var(--space-2)'
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Reassurance */}
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'hsl(var(--premium-gray-400))',
                  marginTop: 'var(--space-6)',
                  lineHeight: 'var(--leading-relaxed)'
                }}
              >
                We respect your time and information. Conversations are confidential and exploratory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
