"use client"

import { useEffect, useRef } from 'react'

/**
 * Animated atmosphere over the static Earth hero plate.
 *
 * The globe is baked into the PNG and is never transformed — scaling or
 * rotating it would distort the approved artwork. Motion is instead put
 * where it can actually be seen:
 *
 *  - a starfield that rotates slowly about the planet's centre, so the
 *    frame reads as orbital rather than static;
 *  - a breathing rim-light on the limb, brightest along the terminator;
 *  - occasional shooting stars crossing the empty upper-left space.
 *
 * Everything is anchored to the globe's measured centre in the source
 * image (~69% across, ~46% down) and masked away from the left third,
 * where the headline sits, so it never competes with text.
 *
 * One canvas rather than ~60 DOM nodes: a single composited layer. It
 * idles when scrolled out of view and does not run at all under
 * prefers-reduced-motion.
 */

const GLOBE = { x: 0.69, y: 0.46 }
const CYAN = '0, 209, 255'

interface Star {
  /** polar position around the globe centre */
  ang: number
  dist: number
  r: number
  base: number
  phase: number
  twinkle: number
  /** slight colour variation: 0 = white, 1 = cyan-tinted */
  tint: number
}

interface Shooter {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  len: number
}

export function HeroAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // The canvas element is always rendered so server and client markup
  // match; whether it *animates* is decided here, after mount, where the
  // media query is readable. Deciding during render would mean the server
  // (which cannot read it) emits different markup than the client.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let R = 0
    let visible = true
    let stars: Star[] = []
    let shooters: Shooter[] = []
    let last = performance.now()
    let spin = 0
    let nextShooter = 2000

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      R = Math.max(w, h) * 0.42

      // Stars live in polar space so the whole field can be rotated by
      // advancing one angle, which keeps the spin perfectly rigid.
      const count = w < 700 ? 70 : w < 1200 ? 130 : 190
      const maxDist = Math.hypot(w, h)
      stars = Array.from({ length: count }, () => {
        // Bias outward: keep the field off the planet's face.
        const dist = R * rand(1.02, 1.0 + (maxDist / R) * 0.62)
        return {
          ang: rand(0, Math.PI * 2),
          dist,
          r: rand(0.5, 1.7),
          base: rand(0.22, 0.75),
          phase: rand(0, Math.PI * 2),
          twinkle: rand(0.0008, 0.0026),
          tint: Math.random() < 0.28 ? 1 : 0,
        }
      })
      shooters = []
    }

    const draw = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now
      ctx.clearRect(0, 0, w, h)

      const cx = w * GLOBE.x
      const cy = h * GLOBE.y

      // Rigid rotation of the whole field — one full turn ≈ 4 minutes.
      spin += dt * 0.0000262

      // ---- Starfield -------------------------------------------------
      for (const s of stars) {
        const a = s.ang + spin
        const x = cx + Math.cos(a) * s.dist
        const y = cy + Math.sin(a) * s.dist
        if (x < -10 || x > w + 10 || y < -10 || y > h + 10) continue

        // Fade out over the headline column so text stays clean.
        const guard = Math.min(1, Math.max(0, (x / w - 0.30) / 0.22))
        if (guard <= 0) continue

        const tw = s.base + Math.sin(now * s.twinkle + s.phase) * 0.3
        const alpha = Math.max(0, tw) * guard
        if (alpha <= 0.02) continue

        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.tint
          ? `rgba(${CYAN},${alpha.toFixed(3)})`
          : `rgba(255,255,255,${alpha.toFixed(3)})`
        ctx.fill()

        // Brighter stars get a soft bloom.
        if (s.r > 1.3 && alpha > 0.45) {
          ctx.beginPath()
          ctx.arc(x, y, s.r * 3.4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${CYAN},${(alpha * 0.11).toFixed(3)})`
          ctx.fill()
        }
      }

      // ---- Atmospheric rim ------------------------------------------
      // Two out-of-phase breaths so the glow never pulses mechanically.
      const b1 = 0.5 + Math.sin(now * 0.00042) * 0.5
      const b2 = 0.5 + Math.sin(now * 0.00027 + 1.1) * 0.5
      const breath = b1 * 0.6 + b2 * 0.4

      const halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.5)
      halo.addColorStop(0, `rgba(${CYAN},${(0.10 + breath * 0.13).toFixed(3)})`)
      halo.addColorStop(0.45, `rgba(${CYAN},${(0.035 + breath * 0.05).toFixed(3)})`)
      halo.addColorStop(1, `rgba(${CYAN},0)`)
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Crisp terminator arc, sweeping slowly.
      const sweep = Math.sin(now * 0.00019) * 0.5
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.005, -2.5 + sweep, -0.15 + sweep)
      ctx.strokeStyle = `rgba(${CYAN},${(0.20 + breath * 0.32).toFixed(3)})`
      ctx.lineWidth = 2.2
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.02, -2.3 + sweep, -0.45 + sweep)
      ctx.strokeStyle = `rgba(255,255,255,${(0.05 + breath * 0.10).toFixed(3)})`
      ctx.lineWidth = 1
      ctx.stroke()

      // ---- Shooting stars -------------------------------------------
      nextShooter -= dt
      if (nextShooter <= 0 && shooters.length < 2) {
        nextShooter = rand(4200, 9000)
        const sx = rand(w * 0.32, w * 0.72)
        const sy = rand(-20, h * 0.34)
        const sp = rand(0.34, 0.6)
        shooters.push({
          x: sx,
          y: sy,
          vx: sp * rand(0.75, 1.15),
          vy: sp * rand(0.30, 0.58),
          life: 1,
          len: rand(70, 150),
        })
      }
      shooters = shooters.filter((sh) => {
        sh.x += sh.vx * dt
        sh.y += sh.vy * dt
        sh.life -= dt * 0.00075
        if (sh.life <= 0) return false
        const fade = Math.sin(sh.life * Math.PI)
        const tx = sh.x - sh.vx * sh.len
        const ty = sh.y - sh.vy * sh.len
        const g = ctx.createLinearGradient(tx, ty, sh.x, sh.y)
        g.addColorStop(0, `rgba(${CYAN},0)`)
        g.addColorStop(1, `rgba(255,255,255,${(0.62 * fade).toFixed(3)})`)
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(sh.x, sh.y)
        ctx.strokeStyle = g
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.stroke()
        return sh.x < w + 200 && sh.y < h + 200
      })
    }

    const loop = (now: number) => {
      if (visible) draw(now)
      else last = now
      raf = requestAnimationFrame(loop)
    }

    build()
    raf = requestAnimationFrame(loop)

    const io = new IntersectionObserver(
      ([entry]) => { visible = entry?.isIntersecting ?? true },
      { threshold: 0 }
    )
    io.observe(canvas)

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(build, 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default HeroAtmosphere
