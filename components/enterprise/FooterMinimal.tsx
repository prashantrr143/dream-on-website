"use client"

import { motion } from 'framer-motion'

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { name: "Cloud & Infrastructure", href: "/solutions/cloud" },
      { name: "DevOps & Automation", href: "/solutions/devops" },
      { name: "Data & Analytics", href: "/solutions/data" },
      { name: "AI & Machine Learning", href: "/solutions/ai-ml" },
      { name: "Enterprise Security", href: "/solutions/security" },
      { name: "Digital Transformation", href: "/solutions/consulting" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Perspectives", href: "/perspectives" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact-us" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Perspectives Blog", href: "/perspectives" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Solutions Overview", href: "/solutions" },
      { name: "Responsible AI", href: "/responsible-ai" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Security", href: "/security" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Responsible AI", href: "/responsible-ai" },
      { name: "Cookie Policy", href: "/policy" },
    ]
  }
]

const FooterMinimal = () => {
  return (
    <footer
      style={{
        backgroundColor: 'hsl(210, 76%, 12%)',
        color: 'white'
      }}
    >
      <div
        className="enterprise-container-wide"
        style={{
          paddingTop: '80px',
          paddingBottom: '48px'
        }}
      >
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-grid-comprehensive"
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '24rem' }}>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'white',
                marginBottom: '16px'
              }}
            >
              Yatisphere
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.45)',
                marginBottom: '24px'
              }}
            >
              Enterprise software, cloud, and AI systems — engineered for trust, scale, and long-term maintainability.
            </p>
            <a
              href="mailto:hello@yatisphere.com"
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                transition: 'color 200ms ease',
                textDecoration: 'none'
              }}
            >
              hello@yatisphere.com
            </a>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255, 255, 255, 0.35)',
                  marginBottom: '16px'
                }}
              >
                {column.title}
              </h4>
              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {column.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      transition: 'color 200ms ease',
                      textDecoration: 'none'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '64px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
            style={{ gap: '16px' }}
          >
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              &copy; {new Date().getFullYear()} Yatisphere Technologies. All rights reserved.
            </p>
            <div
              className="flex items-center"
              style={{ gap: '24px' }}
            >
              <a
                href="/privacy"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.3)',
                  transition: 'color 200ms ease',
                  textDecoration: 'none'
                }}
              >
                Privacy
              </a>
              <a
                href="/terms"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.3)',
                  transition: 'color 200ms ease',
                  textDecoration: 'none'
                }}
              >
                Terms
              </a>
              <a
                href="/security"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.3)',
                  transition: 'color 200ms ease',
                  textDecoration: 'none'
                }}
              >
                Security
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterMinimal
