"use client"

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const team = [
  {
    name: "Ruchika Raturi",
    role: "Chief Executive Officer",
    bio: "14+ years leading enterprise transformation across financial services and telecommunications. Drives strategic growth through operational excellence and client-centric innovation.",
    image: "/ruchika.jpeg"
  },
  {
    name: "Jyoti Mishra",
    role: "Chief Human Resources Officer",
    bio: "8+ years building high-performance organizations through strategic talent development and cultural transformation that enables sustainable growth.",
    image: "/jyoti.jpeg"
  }
]

const principles = [
  {
    title: "Architecture First",
    description: "We design before we build. Every system starts with a clear architectural foundation that supports long-term evolution."
  },
  {
    title: "Governance by Design",
    description: "Security, compliance, and auditability are built in from day one—not retrofitted after deployment."
  },
  {
    title: "Systems Thinking",
    description: "We consider the full operational context. Technology succeeds when it integrates with people, processes, and existing systems."
  },
  {
    title: "Production Focus",
    description: "We build for production, not for demos. Our work is designed to operate reliably under real-world conditions."
  }
]

const whoWeServe = [
  {
    title: "Regulated Industries",
    description: "Financial services, healthcare, and government organizations requiring audit-ready, compliant systems."
  },
  {
    title: "Engineering-Led Teams",
    description: "Technical organizations building production systems that must operate reliably at scale."
  },
  {
    title: "Security-First Organizations",
    description: "Enterprises where data protection and zero-trust architecture are non-negotiable requirements."
  },
  {
    title: "Long-Term Builders",
    description: "Leaders focused on sustainable platforms, not short-term fixes or proof-of-concept projects."
  }
]

const milestones = [
  { year: "2024", event: "Company founded with a focus on enterprise AI and cloud systems" },
  { year: "2024", event: "Assembled leadership team with combined decades of enterprise experience" },
  { year: "2024", event: "Established technology partnerships with leading cloud providers" },
  { year: "2025", event: "Expanding client portfolio across regulated industries" }
]

const AboutUs = () => {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-20)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
            About Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-6)',
              maxWidth: '900px'
            }}
          >
            We help enterprises build software, cloud, and AI systems that are secure, scalable, and governable.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-500))',
              marginBottom: 'var(--space-10)',
              maxWidth: '720px'
            }}
          >
            Founded to solve real-world complexity for regulated enterprises, we design technology platforms with architectural rigor and long-term trust in mind.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/contact-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                backgroundColor: 'hsl(var(--premium-gray-900))',
                color: 'white',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease'
              }}
            >
              Start a Conversation
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section
        style={{
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 'var(--space-16)'
            }}
          >
            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-semibold)',
                  letterSpacing: 'var(--tracking-tight)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Our Story
              </h2>

              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)'
                }}
              >
                <p>
                  Yatisphere was founded on a straightforward observation: most enterprise AI and cloud initiatives fail not because of technology limitations, but because of architectural gaps—systems designed for demos rather than production, without adequate consideration for governance, security, and operational reality.
                </p>
                <p>
                  We started with a focus on what enterprises actually need: platforms that can be trusted, audited, and operated at scale. Our team brings decades of combined experience from financial services, telecommunications, and technology consulting.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-semibold)',
                  letterSpacing: 'var(--tracking-tight)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Milestones
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-5)'
                }}
              >
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-4)',
                      alignItems: 'baseline'
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'hsl(var(--premium-gray-400))',
                        fontFamily: 'monospace',
                        minWidth: '3rem'
                      }}
                    >
                      {milestone.year}
                    </span>
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        lineHeight: 'var(--leading-relaxed)',
                        color: 'hsl(var(--premium-gray-600))'
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

      {/* Who We Partner With Section */}
      <section
        style={{
          backgroundColor: 'hsl(var(--premium-gray-50))',
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-12)' }}>
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-4)'
              }}
            >
              Who We Partner With
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-600))',
                maxWidth: '720px'
              }}
            >
              We work with organizations where technology decisions have real consequences—regulated enterprises, engineering-led teams, and leaders who understand that sustainable transformation requires disciplined execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)'
            }}
          >
            {whoWeServe.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-8)',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid hsl(var(--premium-gray-200))'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'hsl(var(--premium-gray-500))'
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section
        style={{
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: 'var(--space-12)' }}>
            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-4)'
              }}
            >
              Our Approach
            </h2>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-600))',
                maxWidth: '720px'
              }}
            >
              These principles guide every engagement.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)'
            }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  padding: 'var(--space-6)',
                  borderLeft: '3px solid hsl(var(--premium-gray-200))',
                  backgroundColor: 'hsl(var(--premium-gray-50))'
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-semibold)',
                    color: 'hsl(var(--premium-gray-900))',
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 'var(--leading-relaxed)',
                    color: 'hsl(var(--premium-gray-500))'
                  }}
                >
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section
        style={{
          backgroundColor: 'hsl(var(--premium-gray-50))',
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-12)'
            }}
          >
            Leadership
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-10)'
            }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid hsl(var(--premium-gray-200))'
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    backgroundColor: 'hsl(var(--premium-gray-100))'
                  }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-semibold)',
                        color: 'hsl(var(--premium-gray-400))'
                      }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-semibold)',
                      color: 'hsl(var(--premium-gray-900))',
                      marginBottom: 'var(--space-1)'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-medium)',
                      color: 'hsl(var(--premium-gray-500))',
                      marginBottom: 'var(--space-3)'
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      lineHeight: 'var(--leading-relaxed)',
                      color: 'hsl(var(--premium-gray-600))'
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-32)',
          backgroundColor: 'hsl(var(--premium-gray-900))'
        }}
      >
        <motion.div
          className="enterprise-container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'white',
              marginBottom: 'var(--space-4)'
            }}
          >
            Ready to collaborate?
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-10)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            We'd welcome the opportunity to discuss your technology challenges and explore whether we're the right fit for your organization.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-4) var(--space-8)',
              backgroundColor: 'white',
              color: 'hsl(var(--premium-gray-900))',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-medium)',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Start a Conversation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '4px' }}>
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </section>
    </SharedLayout>
  )
}

export default AboutUs
