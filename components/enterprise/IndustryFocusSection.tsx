"use client"

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } }
}

const industries = [
  {
    name: "Financial services",
    description: "Onboarding and KYC automation, post-trade and settlement systems, compliance workflows — for banks, NBFCs, insurers and fintechs.",
    href: "/industries/financial-services",
  },
  {
    name: "Legal & professional services",
    description: "Client onboarding, conflict checks, matter and fee intelligence, practice-management integration.",
    href: "/industries/legal-professional-services",
  },
  {
    name: "Healthcare",
    description: "Patient platforms and clinical data systems where consent, retention and access rules are built into the architecture.",
    href: "/industries/healthcare",
  },
  {
    name: "Government & public sector",
    description: "Citizen-facing systems with data residency, accessibility and audit trails on infrastructure departments can operate.",
    href: "/industries/government-public-sector",
  },
  {
    name: "Enterprise & technology",
    description: "Product companies and enterprises modernising platforms, moving to cloud, or adding AI to an existing product.",
    href: "/industries/enterprise-technology",
  },
]

const IndustryFocusSection = () => {
  return (
    <section id="industries" className="ys-section-light">
      <div className="enterprise-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}
        >
          <p className="ys-eyebrow">Industries</p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginTop: 14,
              marginBottom: 18,
              textWrap: 'balance',
            }}
          >
            Deepest where reliability and compliance matter most.
          </h2>
          <div className="ys-rule" />
        </motion.div>

        <motion.ul
          className="ys-industry-rows"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((industry) => (
            <motion.li key={industry.name} variants={fadeUp}>
              <a href={industry.href} className="ys-industry-row">
                <h3 className="ys-industry-row-name">{industry.name}</h3>
                <p className="ys-industry-row-desc">{industry.description}</p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default IndustryFocusSection
