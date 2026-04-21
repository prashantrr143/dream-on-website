"use client"

import { motion } from 'motion/react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4'

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden text-white"
        style={{ backgroundColor: '#000000', fontFamily: "'General Sans', sans-serif" }}
      >
        {/* Background video */}
        <video
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />

        {/* 50% black overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Content */}
        <div
          className="relative z-10 flex min-h-screen flex-col items-center px-6"
          style={{
            paddingTop: 'clamp(200px, 28vw, 280px)',
            paddingBottom: 102,
          }}
        >
          <div className="flex flex-col items-center" style={{ gap: 40 }}>
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
              style={{
                maxWidth: 613,
                fontSize: 'clamp(36px, 5.2vw, 56px)',
                lineHeight: 1.28,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                background:
                  'linear-gradient(144.5deg, #ffffff 28%, rgba(0,0,0,0) 115%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              We engineer the systems your enterprise depends on.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
              style={{
                maxWidth: 680,
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.7)',
                marginTop: -16, // absorb into the 40px gap → effective 24px
              }}
            >
              Most enterprise AI and cloud initiatives fail because of architectural
              gaps, not technology limitations. We close that gap with systems-level
              design, modernization, and production-grade delivery.
            </motion.p>

            {/* CTA — white pill with layered glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="/contact-us"
                className="relative inline-flex items-center justify-center rounded-full"
                style={{
                  border: '0.6px solid rgba(255,255,255,1)',
                  padding: '0.6px',
                }}
              >
                {/* Top glow streak */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    top: -8,
                    width: '60%',
                    height: 18,
                    background:
                      'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0))',
                    filter: 'blur(10px)',
                    opacity: 0.75,
                  }}
                />
                <span
                  className="relative z-10 inline-flex items-center justify-center rounded-full bg-white text-black transition-colors"
                  style={{ padding: '11px 29px', fontSize: 14, fontWeight: 500 }}
                >
                  Start a Conversation
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
