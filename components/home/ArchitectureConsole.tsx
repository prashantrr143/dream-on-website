'use client'

import { useEffect, useRef } from 'react'
import { Activity, Cloud, Database, FileText, Globe, Lock, MapPin, Plug, Server, ShieldCheck, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Home hero panel: a reference architecture for governed AI. Illustrative,
 * not a client system, and labelled as such. Lines draw in once (CSS);
 * small packets then flow along the connections while the panel is on
 * screen. Static under reduced motion. Replaces the engagement board.
 */

const PATHS = [
  'M230 54 V110',
  'M230 156 V190 H60 V224',
  'M230 156 V224',
  'M230 156 V190 H400 V224',
  'M60 268 V356 H150',
  'M230 268 V332',
  'M400 268 V356 H310',
]
const DUR = [1.1, 1.8, 1.3, 1.8, 1.6, 1.0, 1.6]

type Node = { x: number; y: number; w: number; h: number; label: string; Icon: LucideIcon; kind: 'box' | 'api' | 'ai' }
const NODES: Node[] = [
  { x: 160, y: 10, w: 140, h: 44, label: 'Channels', Icon: Globe, kind: 'box' },
  { x: 110, y: 110, w: 240, h: 46, label: 'API layer', Icon: Plug, kind: 'api' },
  { x: 10, y: 224, w: 100, h: 44, label: 'Core', Icon: Server, kind: 'box' },
  { x: 180, y: 224, w: 100, h: 44, label: 'Cloud', Icon: Cloud, kind: 'box' },
  { x: 350, y: 224, w: 100, h: 44, label: 'Data', Icon: Database, kind: 'box' },
  { x: 150, y: 332, w: 160, h: 48, label: 'Governed AI', Icon: ShieldCheck, kind: 'ai' },
]

const ROWS: { Icon: LucideIcon; label: string; state: string; tone: 'ok' | 'amber' }[] = [
  { Icon: Activity, label: 'Evaluation suite', state: 'Passing', tone: 'ok' },
  { Icon: UserCheck, label: 'Human approval', state: 'On high-risk actions', tone: 'amber' },
  { Icon: FileText, label: 'Audit log', state: 'Every decision', tone: 'ok' },
]

export function ArchitectureConsole() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>('.ys-arch-line'))
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>('.ys-arch-packet'))
    const lens = paths.map((p) => p.getTotalLength())
    let raf = 0
    let visible = false
    const t0 = performance.now() + 1600
    const loop = (now: number) => {
      if (visible && document.visibilityState === 'visible') {
        const s = (now - t0) / 1000
        dots.forEach((c, i) => {
          const dur = DUR[i] ?? 1.5
          const cycle = dur + 0.6 + (i % 3) * 0.4
          const local = s - i * 0.25
          const p = local < 0 ? -1 : (local % cycle) / dur
          const path = paths[i]
          if (p < 0 || p > 1 || !path) { c.setAttribute('opacity', '0'); return }
          const pt = path.getPointAtLength(p * (lens[i] ?? 0))
          c.setAttribute('cx', String(pt.x))
          c.setAttribute('cy', String(pt.y))
          c.setAttribute('opacity', p < 0.05 || p > 0.95 ? '0.35' : '1')
        })
      }
      raf = requestAnimationFrame(loop)
    }
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting }, { threshold: 0.1 })
    io.observe(svg)
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [])

  return (
    <div className="ys-arch-wrap">
      <div className="ys-arch">
        <div className="ys-arch-bar" aria-hidden="true">
          <span className="ys-arch-dots"><i /><i /><i /></span>
          <span className="ys-arch-file">reference-architecture · regulated-ai</span>
          <span className="ys-arch-live"><span className="ys-arch-pulse" />LIVE</span>
        </div>

        <svg
          ref={svgRef}
          className="ys-arch-svg"
          viewBox="0 0 460 420"
          role="img"
          aria-label="Reference architecture: channels flow through an API layer to core systems, cloud and data, which feed governed AI inside a governance boundary"
        >
          {PATHS.map((d) => (
            <path key={d} className="ys-arch-line" d={d} pathLength={1} />
          ))}
          <rect className="ys-arch-gov" x="90" y="296" width="280" height="112" rx="10" />
          <text className="ys-arch-small" x="230" y="318">GOVERNANCE BOUNDARY</text>
          {NODES.map(({ x, y, w, h, label, Icon, kind }, i) => {
            const cx = x + w / 2
            const lw = label.length * 7.1
            return (
              <g key={label} className={`ys-arch-node is-${kind}`} style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
                <rect x={x} y={y} width={w} height={h} rx="8" />
                <Icon x={cx + 10 - lw / 2 - 24} y={y + h / 2 - 8} width={16} height={16} strokeWidth={2} aria-hidden="true" />
                <text x={cx + 10} y={y + h / 2 + 4.5}>{label}</text>
              </g>
            )
          })}
          {PATHS.map((d) => (
            <circle key={`p-${d}`} className="ys-arch-packet" r="3.6" cx="-50" cy="-50" opacity="0" />
          ))}
        </svg>

        <ul className="ys-arch-rows">
          {ROWS.map(({ Icon, label, state, tone }) => (
            <li key={label}>
              <Icon className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
              <span className={`ys-arch-state is-${tone}`}>
                {tone === 'ok' && <span className="ys-arch-pulse" aria-hidden="true" />}
                {state}
              </span>
            </li>
          ))}
        </ul>
        <p className="ys-arch-note">Illustration of the controls we build in. Not client data.</p>
      </div>

      <div className="ys-arch-float is-a">
        <span className="ys-arch-float-icon"><MapPin className="w-4 h-4" strokeWidth={2} aria-hidden="true" /></span>
        <span><b>Data stays in your region</b><small>Your cloud, your chosen region</small></span>
      </div>
      <div className="ys-arch-float is-b">
        <span className="ys-arch-float-icon"><Lock className="w-4 h-4" strokeWidth={2} aria-hidden="true" /></span>
        <span><b>No model training on your data</b><small>Your code, your accounts</small></span>
      </div>
    </div>
  )
}
