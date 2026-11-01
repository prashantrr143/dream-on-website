/**
 * GSAP 3.12.5, self-hosted at /vendor/gsap and loaded once in the
 * background (no npm dependency, nothing on the critical path). Callers
 * get null until it has loaded, or if it fails, and then simply skip the
 * animation: every animated element is fully visible without it.
 */

declare global {
  interface Window { gsap?: any }
}

const SRC = '/vendor/gsap/gsap-3.12.5.min.js'
let pending: Promise<any> | null = null

export function loadGsap(): Promise<any> {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.gsap) return Promise.resolve(window.gsap)
  if (!pending) {
    pending = new Promise((resolve) => {
      const s = document.createElement('script')
      s.src = SRC
      s.async = true
      s.onload = () => resolve(window.gsap ?? null)
      s.onerror = () => { pending = null; resolve(null) }
      document.head.appendChild(s)
    })
  }
  return pending
}

/** GSAP if it has already loaded, else null (never waits). */
export function gsapNow(): any {
  return typeof window !== 'undefined' ? window.gsap ?? null : null
}

/** Load in the background once the page is idle. */
export function preloadGsap() {
  if (typeof window === 'undefined' || window.gsap) return
  const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
  if (w.requestIdleCallback) w.requestIdleCallback(() => { void loadGsap() }, { timeout: 2000 })
  else window.setTimeout(() => { void loadGsap() }, 800)
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
