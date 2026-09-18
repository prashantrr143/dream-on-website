"use client"

import { ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
]

const SynapseNavbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: '20px 120px' }}
      >
        {/* Left: logo + links */}
        <div className="flex items-center gap-[30px]">
          <a href="/" className="flex items-center" aria-label="Yati Sphere home">
            <span
              className="flex items-center font-semibold tracking-tight text-white"
              style={{ width: 187, height: 25, fontSize: 20, letterSpacing: '-0.02em' }}
            >
              YATI&nbsp;SPHERE
            </span>
          </a>

          <nav className="hidden md:flex items-center" style={{ gap: 30 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-white transition-opacity hover:opacity-80"
                style={{ fontSize: 14, fontWeight: 500, gap: 14 }}
              >
                <span>{link.name}</span>
                <ChevronDown style={{ width: 14, height: 14 }} strokeWidth={2} />
              </a>
            ))}
          </nav>
        </div>

        {/* Right: pill CTA with layered glow */}
        <a
          href="/contact-us"
          className="relative inline-flex items-center justify-center rounded-full"
          style={{
            border: '0.6px solid rgba(255,255,255,1)',
            padding: '0.6px',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          {/* Top glow streak */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              top: -6,
              width: '60%',
              height: 14,
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))',
              filter: 'blur(8px)',
              opacity: 0.6,
            }}
          />
          <span
            className="relative z-10 inline-flex items-center justify-center rounded-full bg-black text-white"
            style={{ padding: '11px 29px', fontSize: 14, fontWeight: 500 }}
          >
            Contact
          </span>
        </a>
      </div>
    </header>
  )
}

export default SynapseNavbar
