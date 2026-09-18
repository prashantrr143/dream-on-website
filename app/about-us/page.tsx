"use client"

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'

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

const team = [
  {
    name: "Ruchika Raturi",
    role: "Chief Executive Officer",
    bio: "14+ years leading enterprise transformation across financial services and telecommunications. Drives strategic growth through operational excellence and client-centric innovation.",
    image: "/ruchika.jpeg",
    highlights: ["Enterprise Transformation", "Financial Services", "Strategic Growth"],
    experience: "14+"
  },
  {
    name: "Jyoti Mishra",
    role: "Chief Human Resources Officer",
    bio: "8+ years building high-performance organizations through strategic talent development and cultural transformation that enables sustainable growth.",
    image: "/jyoti.jpeg",
    highlights: ["Talent Strategy", "Cultural Transformation", "Organizational Design"],
    experience: "8+"
  }
]

const principles = [
  {
    title: "Architecture First",
    description: "We design before we build. Every system starts with a clear architectural foundation that supports long-term evolution.",
    color: "#00D1FF",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  },
  {
    title: "Governance by Design",
    description: "Security, compliance, and auditability are built in from day one — not retrofitted after deployment.",
    color: "#11C5DB",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Systems Thinking",
    description: "We consider the full operational context. Technology succeeds when it integrates with people, processes, and existing systems.",
    color: "#00D1FF",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    )
  },
  {
    title: "Production Focus",
    description: "We build for production, not for demos. Our work is designed to operate reliably under real-world conditions.",
    color: "#FF8A00",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  }
]

const whoWeServe = [
  {
    title: "Regulated Industries",
    description: "Financial services, healthcare, and government organizations requiring audit-ready, compliant systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    )
  },
  {
    title: "Engineering-Led Teams",
    description: "Technical organizations building production systems that must operate reliably at scale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: "Security-First Organizations",
    description: "Enterprises where data protection and zero-trust architecture are non-negotiable requirements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    title: "Long-Term Builders",
    description: "Leaders focused on sustainable platforms, not short-term fixes or proof-of-concept projects.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  }
]

const milestones = [
  { year: "2024", event: "Company founded with a focus on enterprise AI and cloud systems", color: "#00D1FF" },
  { year: "2024", event: "Assembled leadership team with combined decades of enterprise experience", color: "#11C5DB" },
  { year: "2024", event: "Established technology partnerships with leading cloud providers", color: "#00D1FF" },
  { year: "2025", event: "Expanding client portfolio across regulated industries", color: "#FF8A00" }
]

const AboutUs = () => {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="About Yatisphere"
        title="We help enterprises build systems that are secure, scalable, and governable."
        lede="Founded to solve real-world complexity for regulated enterprises, we design technology platforms with architectural rigor and long-term trust in mind."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'How We Work', href: '/how-we-work' }}
      />

      {/* Our Story + Milestones */}
      <PageSection tone="white" eyebrow="Our Story" title="Built on a simple observation.">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}
        >
          {/* Our Story */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <div
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--ys-ink-body)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <p>
                Yatisphere was founded on a straightforward observation: most enterprise AI and cloud initiatives fail not because of technology limitations, but because of architectural gaps — systems designed for demos rather than production, without adequate consideration for governance, security, and operational reality.
              </p>
              <p>
                We started with a focus on what enterprises actually need: platforms that can be trusted, audited, and operated at scale. Our team brings decades of combined experience from financial services, telecommunications, and technology consulting.
              </p>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div variants={fadeUp} style={{ minWidth: 0 }}>
            <p className="ys-eyebrow" style={{ marginBottom: '12px' }}>Milestones</p>
            <h3
              style={{
                fontSize: 'clamp(19px, 2.2vw, 24px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                marginBottom: '24px'
              }}
            >
              Our journey so far.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '16px 0',
                    minWidth: 0,
                    borderBottom: index < milestones.length - 1 ? '1px solid var(--ys-border)' : 'none'
                  }}
                >
                  {/* Timeline dot + year */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '78px', flexShrink: 0 }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: milestone.color,
                        flexShrink: 0
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--ys-ink)',
                        fontVariantNumeric: 'tabular-nums'
                      }}
                    >
                      {milestone.year}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: 'var(--ys-ink-body)',
                      minWidth: 0
                    }}
                  >
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </PageSection>

      {/* Our Approach */}
      <PageSection
        tone="light"
        eyebrow="Our approach"
        title="Principles that guide every engagement."
        lede="These aren't just values on a wall. They shape our architecture, our processes, and our delivery."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 16 }}
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '24px 22px',
                position: 'relative',
                overflow: 'hidden',
                minWidth: 0
              }}
            >
              {/* Top accent bar — graphical accent only */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: principle.color,
                }}
                aria-hidden="true"
              />

              {/* Icon */}
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
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '16px'
                }}
                aria-hidden="true"
              >
                {principle.iconSvg}
              </div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: '8px'
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)'
                }}
              >
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Who We Partner With */}
      <PageSection
        tone="white"
        eyebrow="Who we partner with"
        title="Organizations where technology decisions have real consequences."
        lede="We work with regulated enterprises, engineering-led teams, and leaders who understand that sustainable transformation requires disciplined execution."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 16 }}
        >
          {whoWeServe.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '24px 22px',
                minWidth: 0
              }}
            >
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
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '16px'
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  marginBottom: '8px'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)'
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Leadership */}
      <PageSection
        tone="light"
        eyebrow="Leadership"
        title="The people behind our work."
        lede="Our leadership team brings decades of experience across enterprise technology, financial services, and organizational transformation."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: 'clamp(20px, 3vw, 32px)',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                minWidth: 0
              }}
            >
              {/* Photo — circular crop */}
              <div
                style={{
                  padding: 'clamp(28px, 4vw, 40px) 24px 0',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '4px solid var(--ys-border)',
                    boxShadow: '0 8px 28px rgba(11, 30, 61, 0.10)',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="150px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                    }}
                  />
                </div>
              </div>

              {/* Content — centered layout */}
              <div style={{ padding: '24px clamp(20px, 3vw, 32px) 32px', textAlign: 'center', minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '4px'
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--ys-link-on-light)',
                    marginBottom: '10px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {member.role}
                </p>

                {/* Experience pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(10, 132, 255, 0.08)',
                    border: '1px solid rgba(10, 132, 255, 0.16)',
                    padding: '5px 14px',
                    borderRadius: '100px',
                    marginBottom: '18px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--ys-link-on-light)',
                    }}
                  >
                    {member.experience}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      color: 'var(--ys-ink-muted)'
                    }}
                  >
                    years experience
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'var(--ys-border)',
                    margin: '0 auto 18px',
                    borderRadius: '1px'
                  }}
                  aria-hidden="true"
                />

                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.7,
                    color: 'var(--ys-ink-body)',
                    marginBottom: '20px',
                  }}
                >
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  {member.highlights.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--ys-ink-body)',
                        backgroundColor: 'var(--ys-surface-alt)',
                        padding: '5px 12px',
                        borderRadius: '100px',
                        letterSpacing: '0.01em',
                        border: '1px solid var(--ys-border)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* Closing CTA */}
      <PageCTA
        title="Ready to collaborate?"
        body="We'd welcome the opportunity to discuss your technology challenges and explore whether we're the right fit for your organization."
        primaryCta={{ label: 'Start a Conversation', href: '/contact-us' }}
        secondaryCta={{ label: 'Explore Solutions', href: '/solutions' }}
      />
    </SharedLayout>
  )
}

export default AboutUs
