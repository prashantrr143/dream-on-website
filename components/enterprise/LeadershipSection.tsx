"use client"

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

interface Leader {
  name: string
  role: string
  bio: string
  image: string
  /** Focal key, mapped to object-position in CSS (see .ys-leader-portrait). */
  focal: 'high' | 'higher'
  /** Areas of focus, shown as quiet supporting metadata. */
  focus: string[]
}

const team: Leader[] = [
  {
    name: 'Ruchika Raturi',
    role: 'Founder & Chief Executive Officer',
    bio: '14+ years leading enterprise transformation across financial services and telecommunications. Drives strategic growth through operational excellence and client-centric innovation.',
    image: '/ruchika.jpeg',
    focal: 'high',
    focus: ['Enterprise transformation', 'Financial services', 'Strategic growth'],
  },
  {
    name: 'Jyoti Mishra',
    role: 'Chief Human Resources Officer',
    bio: 'Builds high-performance organisations through strategic talent development and cultural change that supports sustainable growth.',
    image: '/jyoti.jpeg',
    focal: 'higher',
    focus: ['Talent strategy', 'Cultural transformation', 'Organisational design'],
  },
]

export function LeadershipSection() {
  return (
    <section className="ys-section-light">
      <div className="enterprise-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(28px, 3.4vw, 40px)', maxWidth: '44rem' }}
        >
          <p className="ys-eyebrow">Leadership</p>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginTop: 14,
              marginBottom: 16,
              textWrap: 'balance',
            }}
          >
            The people behind our work.
          </h2>
          <div className="ys-rule" />
          <p style={{ marginTop: 18, fontSize: 15.5, lineHeight: 1.65, color: 'var(--ys-ink-body)' }}>
            A small team by design. Every engagement is led by someone who has
            carried responsibility for systems like the ones we are asked to build.
          </p>
        </motion.div>

        <motion.ul
          className="ys-leaders"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {team.map((p) => (
            <motion.li key={p.name} variants={fadeUp} className="ys-leader">
              <div className="ys-leader-portrait" data-focal={p.focal}>
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.role}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 300px"
                  className="object-cover"
                />
              </div>

              <div className="ys-leader-body">
                <h3 className="ys-leader-name">{p.name}</h3>
                <p className="ys-leader-role">{p.role}</p>
                <p className="ys-leader-bio">{p.bio}</p>

                <ul className="ys-leader-focus" aria-label={`${p.name} areas of focus`}>
                  {p.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default LeadershipSection
