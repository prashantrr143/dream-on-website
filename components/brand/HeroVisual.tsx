/**
 * Code-native hero visual (audit G-04, GV-01).
 *
 * Replaces the single stock "glowing earth" plate that sat behind every
 * hero. Each page gets its own composition: a motif suited to the page,
 * laid out from a seed (the page title by default), so no two heroes
 * match yet they read as one system. Static SVG — no image request, no
 * animation, sharp at any width.
 *
 * Weighted to the right so the headline column stays clear; the hero's
 * scrims still sit on top for contrast.
 */

export type HeroMotif = 'network' | 'circuit' | 'lanes' | 'layers'

interface HeroVisualProps {
  motif?: HeroMotif | undefined
  /** Any string; the same seed always draws the same picture. */
  seed: string
}

const W = 1600
const H = 800
const LINE = 'rgba(143,166,204,0.30)'
const NODE = 'rgba(91,140,255,0.70)'
const AMBER = '#F5A524'

/** Small deterministic PRNG (mulberry32), seeded from a string hash. */
function rng(seed: string) {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  let a = h >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r1 = (n: number) => Math.round(n * 10) / 10

function Network({ seed }: { seed: string }) {
  // A fresh generator per render keeps this pure: React may render a
  // component more than once (Strict Mode), and every render must draw
  // the same picture as the server did.
  const rand = rng(`network:${seed}`)
  const cols = 9
  const rows = 6
  const x0 = 640
  const dx = (W - x0 - 40) / (cols - 1)
  const dy = (H - 120) / (rows - 1)
  const pts: { x: number; y: number; on: boolean }[][] = []
  for (let c = 0; c < cols; c++) {
    pts.push([])
    for (let r = 0; r < rows; r++) {
      // Thin out toward the headline side.
      const on = rand() < 0.35 + (c / cols) * 0.55
      pts[c]!.push({
        x: r1(x0 + c * dx + (rand() - 0.5) * dx * 0.5),
        y: r1(60 + r * dy + (rand() - 0.5) * dy * 0.5),
        on,
      })
    }
  }
  const lines: string[] = []
  const nodes: { x: number; y: number; accent: boolean }[] = []
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const p = pts[c]![r]!
      if (!p.on) continue
      nodes.push({ x: p.x, y: p.y, accent: rand() < 0.06 })
      const right = pts[c + 1]?.[r]
      const down = pts[c]![r + 1]
      const diag = pts[c + 1]?.[r + 1]
      if (right?.on && rand() < 0.7) lines.push(`M${p.x} ${p.y}L${right.x} ${right.y}`)
      if (down?.on && rand() < 0.5) lines.push(`M${p.x} ${p.y}L${down.x} ${down.y}`)
      if (diag?.on && rand() < 0.25) lines.push(`M${p.x} ${p.y}L${diag.x} ${diag.y}`)
    }
  }
  return (
    <>
      <path d={lines.join('')} stroke={LINE} strokeWidth={1} fill="none" />
      {nodes.map((n, i) =>
        n.accent ? (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={14} fill="none" stroke={AMBER} strokeOpacity={0.45} />
            <circle cx={n.x} cy={n.y} r={4.5} fill={AMBER} />
          </g>
        ) : (
          <circle key={i} cx={n.x} cy={n.y} r={3} fill={NODE} />
        )
      )}
    </>
  )
}

function Circuit({ seed }: { seed: string }) {
  // A fresh generator per render keeps this pure: React may render a
  // component more than once (Strict Mode), and every render must draw
  // the same picture as the server did.
  const rand = rng(`circuit:${seed}`)
  const traces: string[] = []
  const pads: { x: number; y: number; accent: boolean }[] = []
  const count = 14
  for (let i = 0; i < count; i++) {
    let x = 560 + rand() * 300
    let y = r1(50 + (i / count) * (H - 100) + rand() * 30)
    let d = `M${r1(x)} ${y}`
    // Orthogonal route: right, jog vertically, right again.
    for (let s = 0; s < 3; s++) {
      x = Math.min(W - 30, x + 120 + rand() * 220)
      d += `H${r1(x)}`
      if (s < 2) {
        y = r1(Math.max(40, Math.min(H - 40, y + (rand() - 0.5) * 160)))
        d += `V${y}`
      }
    }
    traces.push(d)
    pads.push({ x: r1(x), y, accent: rand() < 0.12 })
  }
  return (
    <>
      <path d={traces.join('')} stroke={LINE} strokeWidth={1.2} fill="none" />
      {pads.map((p, i) => (
        <rect
          key={i}
          x={p.x - 6}
          y={p.y - 6}
          width={12}
          height={12}
          rx={2}
          fill={p.accent ? AMBER : 'none'}
          stroke={p.accent ? AMBER : NODE}
        />
      ))}
    </>
  )
}

function Lanes({ seed }: { seed: string }) {
  // A fresh generator per render keeps this pure: React may render a
  // component more than once (Strict Mode), and every render must draw
  // the same picture as the server did.
  const rand = rng(`lanes:${seed}`)
  const lanes = 5
  const items: React.ReactNode[] = []
  for (let l = 0; l < lanes; l++) {
    const y = 110 + l * ((H - 220) / (lanes - 1))
    items.push(
      <line key={`l${l}`} x1={620} y1={y} x2={W - 20} y2={y} stroke={LINE} strokeDasharray="2 6" />
    )
    let x = 640 + rand() * 120
    let s = 0
    while (x < W - 120) {
      const w = 70 + rand() * 60
      const accent = rand() < 0.08
      items.push(
        <rect
          key={`b${l}-${s}`}
          x={r1(x)}
          y={y - 16}
          width={r1(w)}
          height={32}
          rx={6}
          fill={accent ? 'rgba(245,165,36,0.18)' : 'rgba(16,36,74,0.9)'}
          stroke={accent ? AMBER : NODE}
          strokeOpacity={accent ? 0.9 : 0.55}
        />
      )
      x += w + 40 + rand() * 70
      s++
    }
  }
  return <>{items}</>
}

function Layers({ seed }: { seed: string }) {
  // A fresh generator per render keeps this pure: React may render a
  // component more than once (Strict Mode), and every render must draw
  // the same picture as the server did.
  const rand = rng(`layers:${seed}`)
  const items: React.ReactNode[] = []
  const stacks = 3
  for (let s = 0; s < stacks; s++) {
    const cx = 820 + s * 260 + rand() * 40
    const baseY = 560 - s * 40
    const levels = 3 + Math.floor(rand() * 3)
    for (let l = 0; l < levels; l++) {
      const y = baseY - l * 70
      const w = 210
      const h = 52
      // Rhombus "plate" in a flat isometric projection.
      const d = `M${r1(cx)} ${r1(y - h / 2)}L${r1(cx + w / 2)} ${r1(y)}L${r1(cx)} ${r1(y + h / 2)}L${r1(cx - w / 2)} ${r1(y)}Z`
      const accent = l === levels - 1 && rand() < 0.4
      items.push(
        <path
          key={`${s}-${l}`}
          d={d}
          fill={accent ? 'rgba(245,165,36,0.16)' : 'rgba(16,36,74,0.85)'}
          stroke={accent ? AMBER : NODE}
          strokeOpacity={accent ? 0.9 : 0.5}
        />
      )
    }
  }
  return <>{items}</>
}

export function HeroVisual({ motif = 'network', seed }: HeroVisualProps) {
  const Motif = { network: Network, circuit: Circuit, lanes: Lanes, layers: Layers }[motif]
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Faint blueprint grid ties every motif together. */}
      <defs>
        <pattern id="ys-hero-grid" width={40} height={40} patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(143,166,204,0.07)" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#ys-hero-grid)" />
      <Motif seed={seed} />
    </svg>
  )
}
