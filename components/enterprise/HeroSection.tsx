"use client"

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    num: '01',
    kicker: 'Core',
    title: 'Enterprise IT Services',
    body: 'End-to-end engineering for the systems your business runs on — designed by architects, delivered by teams that stay accountable through production.',
    items: [
      'Enterprise software & platforms',
      'Cloud & infrastructure',
      'DevOps & automation',
      'Data & analytics',
      'Legacy modernisation',
      'Enterprise security',
    ],
    link: { label: 'See IT services', href: '#services' },
    primary: true,
  },
  {
    num: '02',
    kicker: 'Differentiator',
    title: 'Applied AI',
    body: 'Production-grade AI on top of your existing systems — agentic workflows, document intelligence and AI platforms, governed from day one.',
    items: [
      'AI architecture & readiness',
      'Agentic workflow automation',
      'Enterprise AI platforms on Azure',
      'Responsible AI & governance',
    ],
    link: { label: 'See applied AI', href: '#ai' },
    primary: false,
  },
]

const HeroSection = () => {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ backgroundColor: 'var(--ys-deep-blue)' }}
    >
      {/* Approved hero imagery — background layer only */}
      <Image
        src="/brand/yatisphere/imagery/hero-earth-network.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'right center' }}
      />

      {/* Legibility scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,30,61,0.97) 0%, rgba(11,30,61,0.92) 42%, rgba(11,30,61,0.66) 68%, rgba(11,30,61,0.42) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,30,61,0.82) 0%, rgba(11,30,61,0.10) 26%, rgba(11,30,61,0.55) 78%, rgba(11,30,61,0.94) 100%)',
        }}
      />

      <div className="relative z-10 enterprise-container-wide">
        <div
          style={{
            paddingTop: 'clamp(134px, 13.5vw, 176px)',
            paddingBottom: 'clamp(46px, 5vw, 66px)',
          }}
        >
          <div className="max-w-[760px]">
            <motion.p
              {...reveal(0)}
              className="uppercase"
              style={{
                fontSize: 'clamp(10px, 1.05vw, 12px)',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.86)',
                marginBottom: 'clamp(16px, 2.4vw, 22px)',
              }}
            >
              Enterprise IT services <span aria-hidden="true" style={{ opacity: 0.55 }}>·</span>{' '}
              Applied AI
            </motion.p>

            <motion.h1
              {...reveal(0.08)}
              style={{
                fontSize: 'clamp(30px, 4.3vw, 54px)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.028em',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              The engineering partner for enterprises that need systems to last.
            </motion.h1>

            <motion.p
              {...reveal(0.18)}
              style={{
                maxWidth: 640,
                marginTop: 'clamp(16px, 2.2vw, 22px)',
                fontSize: 'clamp(15px, 1.35vw, 17.5px)',
                lineHeight: 1.62,
                color: 'rgba(255,255,255,0.88)',
              }}
            >
              Yati Sphere builds, modernises and runs enterprise software, cloud and
              data platforms — and brings applied AI into them with the governance
              regulated businesses require.
            </motion.p>

            <motion.div
              {...reveal(0.28)}
              className="flex flex-wrap items-center"
              style={{ gap: 14, marginTop: 'clamp(26px, 3.4vw, 34px)' }}
            >
              <a href="/contact-us" className="ys-cta-primary inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href="#services" className="ys-cta-secondary inline-flex items-center">
                Explore services
              </a>
            </motion.div>
          </div>

          {/* Two-pillar panel */}
          <motion.div
            {...reveal(0.4)}
            className="ys-pillars"
            style={{ marginTop: 'clamp(32px, 4vw, 52px)' }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`ys-pillar${p.primary ? ' is-primary' : ''}`}
              >
                <p className="ys-pillar-meta">
                  <span className="ys-pillar-num">{p.num}</span>
                  <span className="ys-pillar-kicker">{p.kicker}</span>
                </p>
                <h2 className="ys-pillar-title">{p.title}</h2>
                <p className="ys-pillar-body">{p.body}</p>
                <ul className={`ys-pillar-list${p.primary ? ' is-two-col' : ''}`}>
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={p.link.href} className="ys-pillar-link">
                  {p.link.label}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
