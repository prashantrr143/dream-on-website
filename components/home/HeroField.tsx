'use client'

import { useEffect, useRef } from 'react'

/**
 * Home hero background: a 3D field of pillars that rolls in waves and rises
 * under the pointer. Centred under the hero copy (2026-11-01). Brand tokens: navy-900 -> blue-600 -> amber-500.
 *
 * three.js r149 (MIT) is self-hosted at /vendor/three and loaded only after
 * the page is idle, so it never blocks first paint or LCP. If WebGL or the
 * script is unavailable, nothing renders and the hero keeps its static
 * background. Reduced motion renders one still frame. The loop pauses when
 * the hero is off screen or the tab is hidden.
 */

declare global {
  interface Window { THREE?: any }
}

const SRC = '/vendor/three/three-r149.min.js'
let loader: Promise<any> | null = null

function loadThree(): Promise<any> {
  if (window.THREE) return Promise.resolve(window.THREE)
  if (!loader) {
    loader = new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = SRC
      s.async = true
      s.onload = () => (window.THREE ? resolve(window.THREE) : reject(new Error('three missing')))
      s.onerror = () => { loader = null; reject(new Error('three failed')) }
      document.head.appendChild(s)
    })
  }
  return loader
}

const easeOut = (x: number) => 1 - Math.pow(1 - x, 3)
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

function run(THREE: any, canvas: HTMLCanvasElement, hero: HTMLElement, reduce: boolean, small: boolean, onReady?: () => void) {
  let renderer: any
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !small, alpha: true, powerPreference: 'high-performance' })
  } catch {
    return () => {}
  }
  if (!renderer.getContext()) return () => {}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2))
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x0a1628, 18, 58)
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200)

  scene.add(new THREE.HemisphereLight(0x3a5ba8, 0x06101e, 0.9))
  const key = new THREE.DirectionalLight(0xffd34d, 1.5); key.position.set(14, 22, 8); scene.add(key)
  const rim = new THREE.DirectionalLight(0x2e64e6, 1.1); rim.position.set(-18, 6, -20); scene.add(rim)
  const glow = new THREE.PointLight(0xf8b800, 3.2, 26, 2); scene.add(glow)

  const COLS = small ? 26 : 46
  const ROWS = small ? 22 : 36
  const N = COLS * ROWS
  const geo = new THREE.BoxGeometry(0.84, 1, 0.84); geo.translate(0, 0.5, 0)
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.38, emissive: 0x0b1f45, emissiveIntensity: 0.6 })
  const mesh = new THREE.InstancedMesh(geo, mat, N)
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  // A slight turn, so no row of gaps lines up with the camera and reads as a seam.
  mesh.rotation.y = small ? 0.12 : 0.2
  scene.add(mesh)

  const pos = new Float32Array(N * 2)
  for (let r = 0, i = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++, i++) {
    pos[i * 2] = c - (COLS - 1) / 2
    pos[i * 2 + 1] = -r + 6
  }
  const dummy = new THREE.Object3D()
  const col = new THREE.Color()
  const cLow = new THREE.Color(0x0b203d), cMid = new THREE.Color(0x1f4fbf), cHigh = new THREE.Color(0xf8b800)
  for (let i = 0; i < N; i++) mesh.setColorAt(i, cLow)

  const ptr = new THREE.Vector3(0, 0, 2)
  const ptrT = ptr.clone()
  const minX = -99
  let ripple = 0
  let lastMove = -1e9
  const ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const hit = new THREE.Vector3()

  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect()
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    if (ray.ray.intersectPlane(plane, hit)) {
      lastMove = performance.now()
      // World hit -> the grid's own (turned) frame.
      const th = mesh.rotation.y, cs = Math.cos(th), sn = Math.sin(th)
      ptrT.set(hit.x * cs - hit.z * sn, 0, hit.x * sn + hit.z * cs); ptrT.x = Math.max(ptrT.x, minX)
      ripple = Math.min(1, ripple + 0.08)
    }
  }
  if (!reduce) hero.addEventListener('pointermove', onMove)

  const size = () => {
    const w = hero.clientWidth, h = hero.clientHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  size()
  window.addEventListener('resize', size)

  let t = 0
  let started = performance.now()
  let scroll = 0
  const onScroll = () => { scroll = Math.min(1, Math.max(0, window.scrollY / Math.max(1, hero.offsetHeight))) }
  window.addEventListener('scroll', onScroll, { passive: true })

  function frame(dt: number) {
    t += dt
    const intro = reduce ? 1 : Math.min(1, (performance.now() - started) / 2800)
    const amp = reduce ? 1 : easeOut(Math.min(1, (performance.now() - started - 200) / 2200))
    const camY = 30 + (7.5 - 30) * easeInOut(intro)
    const camZ = 12 + (17 - 12) * easeInOut(intro)

    if (!reduce && performance.now() - lastMove > 2500) ptrT.set(Math.sin(t * 0.3) * 15, 0, -3 + Math.cos(t * 0.23) * 5)
    ptr.lerp(ptrT, 0.06)
    ripple *= 0.985

    for (let i = 0; i < N; i++) {
      const x = pos[i * 2] ?? 0, z = pos[i * 2 + 1] ?? 0
      const dx = x - ptr.x, dz = z - ptr.z
      const d = Math.sqrt(dx * dx + dz * dz)
      let h = 0.35
        + 1.3 * (0.5 + 0.5 * Math.sin(x * 0.32 + t * 0.9)) * (0.5 + 0.5 * Math.cos(z * 0.27 - t * 0.7))
        + 0.7 * Math.max(0, Math.sin((x + z) * 0.16 + t * 0.5)) * (0.4 + 0.6 * Math.sin(z * 0.11 + 1.2))
      h += 3.6 * Math.exp(-d * 0.3) * (0.7 + 0.3 * ripple)
      h += 0.9 * ripple * Math.sin(d * 1.1 - t * 6) * Math.exp(-d * 0.22)
      h = Math.max(0.08, h * Math.max(0.02, amp))
      dummy.position.set(x, 0, z)
      dummy.scale.set(1, h, 1)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      const k = Math.min(1, h / 2.5)
      if (k < 0.5) col.copy(cLow).lerp(cMid, k * 2)
      else col.copy(cMid).lerp(cHigh, (k - 0.5) * 2)
      mesh.setColorAt(i, col)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.instanceColor.needsUpdate = true
    { const th = mesh.rotation.y, cs = Math.cos(th), sn = Math.sin(th)
      glow.position.set(ptr.x * cs + ptr.z * sn, 3 + 2 * ripple, -ptr.x * sn + ptr.z * cs + 1) }
    const sway = reduce ? 0 : Math.sin(t * 0.15) * 1.2
    camera.position.set(sway, camY + scroll * 6, camZ - scroll * 6)
    camera.lookAt(0, 5.2, -8 + scroll * 2)
    renderer.render(scene, camera)
  }

  let raf = 0
  let visible = true
  let last = performance.now()
  const loop = (now: number) => {
    const dt = Math.min(now - last, 50) / 1000
    last = now
    if (visible && document.visibilityState === 'visible') frame(dt)
    raf = requestAnimationFrame(loop)
  }
  const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting }, { threshold: 0 })
  io.observe(hero)

  if (reduce) frame(0)
  else { started = performance.now(); raf = requestAnimationFrame(loop) }
  canvas.classList.add('is-on')
  onReady?.()

  return () => {
    cancelAnimationFrame(raf)
    io.disconnect()
    hero.removeEventListener('pointermove', onMove)
    window.removeEventListener('resize', size)
    window.removeEventListener('scroll', onScroll)
    geo.dispose(); mat.dispose(); renderer.dispose()
  }
}

export function HeroField({ onReady }: { onReady?: () => void }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const hero = canvas?.parentElement
    if (!canvas || !hero) return
    let disposed = false
    let cleanup = () => {}
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 767px)').matches

    const start = () => {
      loadThree()
        .then((THREE) => { if (!disposed) cleanup = run(THREE, canvas, hero, reduce, small, onReady) })
        .catch(() => {})
    }
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void }
    const idle = w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 1200 }) : window.setTimeout(start, 300)

    return () => {
      disposed = true
      if (w.cancelIdleCallback) w.cancelIdleCallback(idle)
      else window.clearTimeout(idle)
      cleanup()
    }
    // onReady is a stable callback from the hero; run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <canvas ref={ref} className="ys-hero-field" aria-hidden="true" />
}
