"use client"

import { motion } from 'framer-motion'

const navigation = [
  { name: "What We Do", href: "/solutions" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Perspectives", href: "/perspectives" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
]

const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Security", href: "/security" },
  { name: "Terms", href: "/terms" },
  { name: "Responsible AI", href: "/responsible-ai" },
]

const FooterMinimal = () => {
  return (
    <footer
      style={{
        backgroundColor: 'hsl(var(--premium-gray-50))',
        borderTop: '1px solid hsl(var(--premium-gray-100))'
      }}
    >
      <div
        className="enterprise-container-wide"
        style={{
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-12)'
        }}
      >
        {/* Main Footer Content - 3 Column Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'var(--space-12)' }}
        >
          {/* Column 1 - Brand Anchor */}
          <div style={{ maxWidth: '20rem' }}>
            <h3
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-semibold)',
                letterSpacing: 'var(--tracking-tight)',
                color: 'hsl(var(--premium-gray-900))',
                marginBottom: 'var(--space-4)'
              }}
            >
              Yatisphere
            </h3>
            <p
              style={{
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'hsl(var(--premium-gray-500))'
              }}
            >
              Enterprise software, cloud, and AI systems — engineered for trust and scale.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4
              style={{
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-medium)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wide)',
                color: 'hsl(var(--premium-gray-400))',
                marginBottom: 'var(--space-4)'
              }}
            >
              Navigate
            </h4>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'hsl(var(--premium-gray-600))',
                    transition: 'color 200ms ease'
                  }}
                  className="hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact & Meta */}
          <div>
            <h4
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
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
              <a
                href="mailto:hello@yatisphere.com"
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'hsl(var(--premium-gray-600))',
                  transition: 'color 200ms ease'
                }}
                className="hover:text-gray-900"
              >
                hello@yatisphere.com
              </a>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'hsl(var(--premium-gray-500))'
                }}
              >
                Serving global, regulated enterprises
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Divider + Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            marginTop: 'var(--space-16)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid hsl(var(--premium-gray-200))'
          }}
        >
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center"
            style={{ gap: 'var(--space-4)' }}
          >
            {/* Copyright */}
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'hsl(var(--premium-gray-400))'
              }}
            >
              © {new Date().getFullYear()} Yatisphere Technologies
            </p>

            {/* Legal Links */}
            <div
              className="flex items-center"
              style={{ gap: 'var(--space-6)' }}
            >
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'hsl(var(--premium-gray-400))',
                    transition: 'color 200ms ease'
                  }}
                  className="hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterMinimal
