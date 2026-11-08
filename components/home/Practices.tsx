"use client"

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowRight, BrainCircuit, Check, Cloud, Database, Lock, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Home: what we do, drawn as a reference architecture (2026-11-01; AI
 * workflows on top, cloud at the base since 2026-11-08).
 *
 * One business, four layers, with security and compliance running through
 * all of them. Every capability we sell is visible on its layer, so nothing
 * hides behind a menu. One layer is highlighted at a time: it cycles on its
 * own until the visitor hovers, focuses or clicks a layer, then stays put.
 * Only the section reveals on scroll; nothing inside is ever clipped or
 * left hidden waiting for an animation.
 */

interface Layer {
  id: string
  tag: string
  name: string
  Icon: LucideIcon
  outcome: string
  body: string
  caps: string[]
  /** What a reviewer can be shown at the end: deliverables, not claims. */
  evidence: string[]
  /** Frameworks the layer is designed against. Alignment, never certification. */
  standards: string[]
  href: string
  linkLabel: string
}

const LAYERS: Layer[] = [
  {
    id: 'workflows',
    tag: 'L4',
    name: 'AI workflows',
    Icon: BrainCircuit,
    outcome: 'Work done by agents, approved by people.',
    body: 'Agents and assistants inside intake, onboarding, KYC and claims, built on your data and your systems.',
    caps: ['Agentic automation', 'Knowledge assistants', 'Claude practice', 'AI-assisted engineering'],
    evidence: ['Workflow spec with approval points', 'Evaluation results on your own cases', 'Runbook and a named owner'],
    standards: ['NIST AI RMF'],
    href: '/what-we-do/applied-ai',
    linkLabel: 'Take AI from pilot to production',
  },
  {
    id: 'governance',
    tag: 'L3',
    name: 'AI governance',
    Icon: ShieldCheck,
    outcome: 'Every AI decision tested, approved and logged.',
    body: 'Evaluation before go-live, a named approver where it matters and an audit trail your reviewers can follow.',
    caps: ['Evaluation', 'Human approval', 'Audit trail', 'Model gateway'],
    evidence: ['Thresholds agreed before build', 'Approval and override log', 'Model and prompt register'],
    standards: ['NIST AI RMF', 'ISO/IEC 42001', 'EU AI Act'],
    href: '/what-we-do/applied-ai/ai-governance',
    linkLabel: 'Explore AI governance',
  },
  {
    id: 'software',
    tag: 'L2',
    name: 'Software and data',
    Icon: Database,
    outcome: 'Systems of record that AI can safely act in.',
    body: 'Core platforms, integration and data pipelines, and legacy modernization in reversible steps.',
    caps: ['Core platforms', 'APIs and integration', 'Data platforms', 'Modernization'],
    evidence: ['Architecture decision records', 'API contracts and integration tests', 'Data lineage and access rules'],
    standards: ['SOC 2'],
    href: '/what-we-do/engineering-data',
    linkLabel: 'Explore software and data',
  },
  {
    id: 'cloud',
    tag: 'L1',
    name: 'Cloud foundations',
    Icon: Cloud,
    outcome: 'Controlled ground, in your own accounts.',
    body: 'Landing zones, migration, cost control, operations and recovery on AWS, Microsoft Azure and Google Cloud.',
    caps: ['Landing zones', 'Migration', 'FinOps', 'Operations and DR'],
    evidence: ['Landing zone defined as code', 'Budgets and tagging policy', 'A recovery plan you have tested'],
    standards: ['SOC 2', 'ISO/IEC 27001'],
    href: '/what-we-do/cloud',
    linkLabel: 'Explore cloud foundations',
  },
]

const SPINE: Layer = {
  id: 'security',
  tag: 'All layers',
  name: 'Security and compliance',
  Icon: Lock,
  outcome: 'Evidence your auditors can sample.',
  body: 'Identity, encryption and controls designed against SOC 2, ISO/IEC 27001 and the rules you answer to, with evidence from your pipeline.',
  caps: ['SOC 2 evidence', 'Identity and access', 'Encryption', 'Audit logging'],
  evidence: ['Controls mapped to your frameworks', 'Exportable audit evidence', 'Access reviews and logs'],
  standards: ['SOC 2', 'ISO/IEC 27001', 'HIPAA', 'DORA'],
  href: '/what-we-do/services/security-compliance',
  linkLabel: 'Explore security and compliance',
}

const ALL = [...LAYERS, SPINE]
const CYCLE_MS = 4200
const FRAMEWORKS = ['SOC 2', 'ISO/IEC 27001', 'NIST AI RMF', 'ISO/IEC 42001', 'EU AI Act']

export function Practices() {
  const [active, setActive] = useState(0)
  const [pinned, setPinned] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const items = useRef<(HTMLLIElement | null)[]>([])
  const [pulseY, setPulseY] = useState<number | null>(null)

  // Cycle through the layers until the visitor takes over; never with reduced motion.
  useEffect(() => {
    if (pinned) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = root.current
    let visible = false
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting }, { threshold: 0.3 })
    if (el) io.observe(el)
    const t = window.setInterval(() => { if (visible && !document.hidden) setActive((i) => (i + 1) % ALL.length) }, CYCLE_MS)
    return () => { window.clearInterval(t); io.disconnect() }
  }, [pinned])

  // The signal on the rail sits beside the layer in focus (the spine lights the whole rail).
  useLayoutEffect(() => {
    const place = () => {
      const li = items.current[active]
      const ul = list.current
      setPulseY(li && ul ? li.offsetTop + li.offsetHeight / 2 : null)
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  const pick = (i: number) => { setActive(i); setPinned(true) }
  const cur = ALL[active] ?? LAYERS[0]!

  return (
    <section className="ys-section-light ys-grid-bg" aria-labelledby="home-practices">
      <div className="enterprise-container-wide">
        <div className="ys-arch2" ref={root}>
          {/* Left: the argument, then the layer in focus */}
          <div className="ys-arch2-copy">
            <p className="ys-kicker">What we do</p>
            <h2 id="home-practices">What we build, from AI workflows down to the ground they run on</h2>
            <p className="ys-arch2-lede">
              An agent is only as trustworthy as what sits under it. We build every layer, so the AI your people approve runs on data, controls and cloud made for it.
            </p>

            <div className="ys-arch2-detail" id="ys-arch2-panel" role="region" aria-live="polite" aria-label={cur.name}>
              {!pinned && <span key={`p-${active}`} className="ys-arch2-progress" style={{ animationDuration: `${CYCLE_MS}ms` }} aria-hidden="true" />}
              <div key={cur.id} className="ys-arch2-detail-in">
                <p className="ys-arch2-detail-tag">
                  <cur.Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  {cur.tag} · {cur.name}
                </p>
                <p className="ys-arch2-detail-outcome">{cur.outcome}</p>
                <p className="ys-arch2-detail-body">{cur.body}</p>
                <p className="ys-arch2-detail-sub">What your reviewers get</p>
                <ul className="ys-arch2-evidence">
                  {cur.evidence.map((e) => (
                    <li key={e}><Check className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />{e}</li>
                  ))}
                </ul>
                <p className="ys-arch2-standards">
                  <span>Designed against</span>
                  {cur.standards.map((x) => <b key={x}>{x}</b>)}
                </p>
                <a href={cur.href} className="ys-arch2-detail-link">
                  {cur.linkLabel}
                  <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: the stack */}
          <div className="ys-arch2-visual">
            <div className="ys-arch2-frame">
              <p className="ys-arch2-frame-title">
                <span>Your platform, layer by layer</span>
                <span className="ys-arch2-frame-clouds">AWS · Azure · Google Cloud</span>
              </p>
              <div className="ys-arch2-grid">
                <ul
                  className={`ys-arch2-layers${active === ALL.length - 1 ? ' is-all' : ''}`}
                  ref={list}
                  style={pulseY !== null ? { ['--pulse-y' as string]: `${pulseY}px` } : undefined}
                >
                  <li className="ys-arch2-rail" aria-hidden="true"><i /></li>
                  {LAYERS.map((l, i) => (
                    <li key={l.id} ref={(el) => { items.current[i] = el }}>
                      <button
                        type="button"
                        className={`ys-arch2-layer${active === i ? ' is-on' : ''}`}
                        aria-pressed={active === i}
                        aria-controls="ys-arch2-panel"
                        onClick={() => pick(i)}
                        onMouseEnter={() => pick(i)}
                        onFocus={() => pick(i)}
                      >
                        <span className="ys-arch2-layer-head">
                          <span className="ys-arch2-layer-icon"><l.Icon className="w-[18px] h-[18px]" strokeWidth={1.9} aria-hidden="true" /></span>
                          <span className="ys-arch2-layer-name">{l.name}</span>
                          <span className="ys-arch2-layer-tag">{l.tag}</span>
                        </span>
                        <span className="ys-arch2-caps">
                          {l.caps.map((c) => <span key={c}>{c}</span>)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`ys-arch2-spine${active === ALL.length - 1 ? ' is-on' : ''}`}
                  aria-pressed={active === ALL.length - 1}
                  aria-controls="ys-arch2-panel"
                  onClick={() => pick(ALL.length - 1)}
                  onMouseEnter={() => pick(ALL.length - 1)}
                  onFocus={() => pick(ALL.length - 1)}
                >
                  <span className="ys-arch2-layer-icon"><Lock className="w-[18px] h-[18px]" strokeWidth={1.9} aria-hidden="true" /></span>
                  <span className="ys-arch2-spine-name">Security and compliance</span>
                  <span className="ys-arch2-spine-caps">
                    {SPINE.caps.map((c) => <span key={c}>{c}</span>)}
                  </span>
                </button>
              </div>
              <div className="ys-arch2-base" aria-label="Where it runs">
                <span>Runs in your own infrastructure</span>
                <span>Your region</span>
                <span>Your code and data</span>
              </div>
              <p className="ys-arch2-frameworks">
                <span>Controls designed against</span>
                {FRAMEWORKS.map((f) => <b key={f}>{f}</b>)}
              </p>
            </div>
          </div>
        </div>

        <a href="/blueprint" className="ys-stack-entry">
          <span className="ys-stack-entry-tag">Start here</span>
          <span className="ys-stack-entry-text">
            <b>Not sure where to start?</b> A Solution Blueprint gives you the design, plan and risks in 2–4 weeks, for a fixed fee.
          </span>
          <span className="ys-stack-cta">
            Scope a Blueprint
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}
