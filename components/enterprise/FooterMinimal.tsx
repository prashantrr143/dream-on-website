"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon } from '@/components/brand/YsIcon'
import { LOGO_ASSETS } from '@/components/brand/YatiSphereLogo'

/**
 * Footer navigation mirrors the header IA (Solutions / AI / Company /
 * Legal). "Resources" was dropped because every link in it already
 * appeared in another column, and the duplicated "Responsible AI" entry
 * is now listed once.
 */
const footerColumns = [
  {
    title: "IT Services",
    links: [
      { name: "All IT Services", href: "/solutions" },
      { name: "Cloud & Infrastructure", href: "/solutions/cloud" },
      { name: "DevOps & Automation", href: "/solutions/devops" },
      { name: "Data & Analytics", href: "/solutions/data" },
      { name: "Enterprise Security", href: "/solutions/security" },
      { name: "Modernisation & Advisory", href: "/solutions/consulting" },
    ]
  },
  {
    title: "Applied AI",
    links: [
      { name: "AI Architecture", href: "/solutions/ai-ml" },
      { name: "Agentic Automation", href: "/solutions/ai-ml" },
      { name: "AI Platforms", href: "/solutions/ai-ml" },
      { name: "Responsible AI", href: "/responsible-ai" },
    ]
  },
  {
    title: "Industries",
    links: [
      { name: "Financial Services", href: "/industries/financial-services" },
      { name: "Legal & Professional", href: "/industries/legal-professional-services" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Government", href: "/industries/government-public-sector" },
      { name: "Enterprise & Technology", href: "/industries/enterprise-technology" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Perspectives", href: "/perspectives" },
      { name: "Contact", href: "/contact-us" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Cookie Policy", href: "/policy" },
    ]
  }
]

const FooterMinimal = () => {
  return (
    <footer className="ys-footer">
      {/* Brand-gradient hairline marks the seam with the dark CTA above */}
      <div aria-hidden="true" className="ys-footer-seam" />

      <div className="enterprise-container-wide ys-footer-inner">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="ys-footer-grid"
        >
          {/* Brand column — icon mark plus typeset name, so every
              element stays crisp instead of relying on a small
              raster tagline inside the full lockup. */}
          <div className="ys-footer-brand">
            {/* Approved YatiSphere logo, used as supplied. The light-
                background lockup is the correct variant for this surface;
                the tagline is part of the artwork, so it is not repeated
                as text below. */}
            <a href="/" className="ys-footer-lockup" aria-label="YatiSphere Technologies — home">
              <Image
                src={LOGO_ASSETS.primary.src}
                alt="YatiSphere Technologies Private Limited"
                width={LOGO_ASSETS.primary.width}
                height={LOGO_ASSETS.primary.height}
                loading="lazy"
                sizes="(max-width: 640px) 260px, 300px"
                className="ys-footer-logo"
              />
            </a>

            <p className="ys-footer-blurb">
              Enterprise software, cloud, and AI systems — engineered for trust,
              scale, and long-term maintainability.
            </p>

            <a href="mailto:hello@yatisphere.com" className="ys-footer-email">
              hello@yatisphere.com
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
            </a>

            {/* Verifiable government credential — certificate DIPP260262,
                issued by DPIIT, Ministry of Commerce & Industry. */}
            <div className="ys-footer-cred">
              <span className="ys-footer-cred-mark" aria-hidden="true">
                <YsIcon name="security" size={26} variant="current" />
              </span>
              <div className="ys-footer-cred-body">
                <p className="ys-footer-cred-eyebrow">Government of India</p>
                <p className="ys-footer-cred-title">DPIIT-Recognised Startup</p>
                <p className="ys-footer-cred-sub">
                  Ministry of Commerce &amp; Industry
                </p>
                <p className="ys-footer-cred-id">
                  Certificate <strong>DIPP260262</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="ys-footer-heading">{column.title}</h3>
              <ul className="ys-footer-links">
                {column.links.map((link) => (
                  <li key={link.name + link.href}>
                    <a href={link.href} className="ys-footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="ys-footer-bottom"
        >
          <p>
            &copy; {new Date().getFullYear()} YatiSphere Technologies Private Limited.
            All rights reserved.
          </p>
          <div className="ys-footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/security">Security</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterMinimal
