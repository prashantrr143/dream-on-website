"use client"

import { useEffect, useRef } from 'react'

/**
 * Animated dark-water surface rendered to a 2D canvas.
 * Two layers of flowing value-noise painted with additive blending produce
 * drifting caustic highlights; a deep blue-black base keeps text legible.
 */
const WaterBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    // Low-res offscreen render target — upscaled to the canvas, keeps it fast.
    const RES = 180
    const off = document.createElement('canvas')
    off.width = RES
    off.height = RES
    const offCtx = off.getContext('2d')
    if (!offCtx) return
    const img = offCtx.createImageData(RES, RES)

    // Hash-based value noise — cheap, smooth enough for flowing caustics.
    const hash = (x: number, y: number) => {
      const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
      return s - Math.floor(s)
    }
    const smooth = (t: number) => t * t * (3 - 2 * t)
    const noise = (x: number, y: number) => {
      const xi = Math.floor(x)
      const yi = Math.floor(y)
      const xf = x - xi
      const yf = y - yi
      const a = hash(xi, yi)
      const b = hash(xi + 1, yi)
      const c = hash(xi, yi + 1)
      const d = hash(xi + 1, yi + 1)
      const u = smooth(xf)
      const v = smooth(yf)
      return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v
    }

    let width = 0
    let height = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
    }
    resize()
    window.addEventListener('resize', resize)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let t = 0

    const render = () => {
      t += reduceMotion ? 0 : 0.0035
      const data = img.data

      // Two octaves of noise, offset in time — produces the flowing caustic look.
      for (let y = 0; y < RES; y++) {
        for (let x = 0; x < RES; x++) {
          const nx = x / 28
          const ny = y / 28
          const n1 = noise(nx + t * 1.4, ny - t * 0.8)
          const n2 = noise(nx * 2.1 - t * 0.9, ny * 2.1 + t * 1.1)
          // Sharpen into bright caustic ridges
          const caustic = Math.pow(Math.max(0, n1 + n2 - 0.85), 2.2) * 2.6
          const base = 0.35 * n1 + 0.25 * n2

          // Deep blue-black base + cyan caustic highlights
          const r = Math.min(255, (6 + base * 12 + caustic * 60) | 0)
          const g = Math.min(255, (14 + base * 28 + caustic * 140) | 0)
          const b = Math.min(255, (34 + base * 60 + caustic * 200) | 0)

          const i = (y * RES + x) * 4
          data[i] = r
          data[i + 1] = g
          data[i + 2] = b
          data[i + 3] = 255
        }
      }
      offCtx.putImageData(img, 0, 0)
      ctx.drawImage(off, 0, 0, width, height)

      // Subtle vertical shading so the top is a touch darker than the bottom
      const grd = ctx.createLinearGradient(0, 0, 0, height)
      grd.addColorStop(0, 'rgba(0,0,0,0.45)')
      grd.addColorStop(0.5, 'rgba(0,0,0,0.15)')
      grd.addColorStop(1, 'rgba(0,0,0,0.55)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  )
}

export default WaterBackground
