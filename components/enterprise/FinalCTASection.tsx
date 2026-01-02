"use client"

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
}

const FinalCTASection = () => {
  return (
    <section
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        backgroundColor: 'hsl(var(--background))'
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
            letterSpacing: 'var(--tracking-tight)',
            color: 'hsl(var(--premium-gray-900))',
            marginBottom: 'var(--space-4)'
          }}
        >
          Start with a Conversation
        </h2>
        <p
          style={{
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'hsl(var(--premium-gray-500))',
            marginBottom: 'var(--space-10)',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          If you're planning a critical software, cloud, or AI initiative and want to approach it with clarity and discipline, we're happy to talk.
        </p>
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
          className="group"
        >
          Start a Conversation
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </Link>
      </motion.div>
    </section>
  )
}

export default FinalCTASection
