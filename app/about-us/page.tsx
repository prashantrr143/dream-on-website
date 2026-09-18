"use client"

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { ArrowRight } from 'lucide-react'

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
    color: "#8b84ff",
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
    color: "#3ECF8E",
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
    color: "#FF7A00",
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
  { year: "2024", event: "Company founded with a focus on enterprise AI and cloud systems", color: "#8b84ff" },
  { year: "2024", event: "Assembled leadership team with combined decades of enterprise experience", color: "#11C5DB" },
  { year: "2024", event: "Established technology partnerships with leading cloud providers", color: "#3ECF8E" },
  { year: "2025", event: "Expanding client portfolio across regulated industries", color: "#FF7A00" }
]

const AboutUs = () => {
  return (
    <SharedLayout>
      {/* Hero Section — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          backgroundColor: '#000000',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 50% at 30% 50%, hsla(243, 100%, 68%, 0.12), transparent)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#8b84ff',
              marginBottom: '24px'
            }}
          >
            About Yatisphere
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: 'white',
              marginBottom: '24px',
              maxWidth: '800px'
            }}
          >
            We help enterprises build systems that are secure, scalable, and governable.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '40px',
              maxWidth: '600px'
            }}
          >
            Founded to solve real-world complexity for regulated enterprises, we design technology platforms with architectural rigor and long-term trust in mind.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start" style={{ gap: '16px' }}>
            <Link href="/contact-us" className="stripe-btn-light group">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/how-we-work" className="stripe-btn-ghost">
              How We Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story + Milestones — White bg */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000000' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '80px'
            }}
            className="lg:grid-cols-2"
          >
            {/* Our Story */}
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#8b84ff',
                  marginBottom: '20px'
                }}
              >
                Our Story
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'white',
                  marginBottom: '24px'
                }}
              >
                Built on a simple observation.
              </h2>

              <div
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.7)',
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
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#8b84ff',
                  marginBottom: '20px'
                }}
              >
                Milestones
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'white',
                  marginBottom: '32px'
                }}
              >
                Our journey so far.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      padding: '20px 0',
                      borderBottom: index < milestones.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                    }}
                  >
                    {/* Timeline dot + year */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '80px', flexShrink: 0 }}>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: milestone.color,
                          flexShrink: 0
                        }}
                      />
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: 'white',
                          fontVariantNumeric: 'tabular-nums'
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.7)'
                      }}
                    >
                      {milestone.event}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach — Off-white bg */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#0a0a0f' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Our approach
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              Principles that guide every engagement.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '520px'
              }}
            >
              These aren&apos;t just values on a wall. They shape our architecture, our processes, and our delivery.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '32px',
                  backgroundColor: '#000000',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="group"
                whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)' }}
              >
                {/* Top accent bar */}
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
                    borderRadius: '10px',
                    backgroundColor: `${principle.color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: principle.color,
                    marginBottom: '20px'
                  }}
                >
                  {principle.iconSvg}
                </div>

                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '12px'
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Partner With — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, hsla(243, 100%, 68%, 0.1), transparent 65%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '64px', maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Who we partner with
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              Organizations where technology decisions have real consequences.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.55)',
                maxWidth: '520px'
              }}
            >
              We work with regulated enterprises, engineering-led teams, and leaders who understand that sustainable transformation requires disciplined execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {whoWeServe.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: '32px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(99, 91, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b84ff',
                    marginBottom: '20px'
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'white',
                    marginBottom: '12px'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section — Off-white bg */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#0a0a0f' }}>
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Section header — centered */}
          <motion.div variants={fadeUp} style={{ marginBottom: '80px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#8b84ff',
                marginBottom: '20px'
              }}
            >
              Leadership
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '20px'
              }}
            >
              The people behind our work.
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '560px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Our leadership team brings decades of experience across enterprise technology, financial services, and organizational transformation.
            </p>
          </motion.div>

          {/* Leadership cards */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            className="max-md:!grid-cols-1"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  backgroundColor: '#000000',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                }}
                whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(255, 255, 255, 0.1)' }}
              >
                {/* Photo — properly framed with circular crop */}
                <div
                  style={{
                    padding: '40px 40px 0',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '4px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.12), 0 0 0 1px rgba(99, 91, 255, 0.1)',
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center 15%',
                      }}
                    />
                  </div>
                </div>

                {/* Content — centered layout */}
                <div style={{ padding: '28px 36px 36px', textAlign: 'center' }}>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'white',
                      marginBottom: '4px'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#8b84ff',
                      marginBottom: '8px',
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
                      backgroundColor: 'rgba(99, 91, 255, 0.08)',
                      padding: '5px 14px',
                      borderRadius: '100px',
                      marginBottom: '20px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#8b84ff',
                      }}
                    >
                      {member.experience}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#8b84ff',
                        opacity: 0.8
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
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      margin: '0 auto 20px',
                      borderRadius: '1px'
                    }}
                    aria-hidden="true"
                  />

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '24px',
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
                          color: 'rgba(255,255,255,0.7)',
                          backgroundColor: '#0a0a0f',
                          padding: '5px 12px',
                          borderRadius: '100px',
                          letterSpacing: '0.01em',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
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
        </motion.div>
      </section>

      {/* CTA Section — Dark Navy */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '100px',
          paddingBottom: '120px',
          backgroundColor: '#000000'
        }}
      >
        {/* Background accents */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, hsla(243, 100%, 68%, 0.08), transparent 60%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="enterprise-container-wide relative"
          style={{ zIndex: 1, textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '20px'
            }}
          >
            Ready to collaborate?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.55)',
              marginBottom: '40px',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            We&apos;d welcome the opportunity to discuss your technology challenges and explore whether we&apos;re the right fit for your organization.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px' }}
          >
            <Link href="/contact-us" className="stripe-btn-light group">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link href="/solutions" className="stripe-btn-ghost">
              Explore Solutions
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SharedLayout>
  )
}

export default AboutUs
