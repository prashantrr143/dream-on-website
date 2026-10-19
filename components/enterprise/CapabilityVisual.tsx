"use client"

/**
 * Small "artifact" illustrations for the home page problem cards
 * (audit H-03): a workflow screen, an architecture snippet, a dashboard
 * crop and so on, rather than abstract boxes.
 *
 * Drawn as SVG so they stay crisp and on-palette. They are illustrations
 * of the kind of thing we build, so they carry no figures, client names
 * or results that could be read as a claim.
 */

export type VisualKind = 'software' | 'cloud' | 'ai' | 'data' | 'modernization' | 'security'

const INK = '#E8EEF8'
const MUTED = '#8FA6CC'
const LINE = 'rgba(143,166,204,0.35)'
const PANEL = '#10244A'
const BLUE = '#5B8CFF'
const AMBER = '#F8B800' // logo yellow
const GREEN = '#4CC38A'

function Ground({ children }: { children: React.ReactNode }) {
  return (
    <span className="ys-cap-visual" aria-hidden="true">
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" className="ys-cap-svg" focusable="false">
        <rect width="400" height="220" style={{ fill: 'var(--navy-950)' }} />
        {children}
      </svg>
    </span>
  )
}

/** A rounded "window" with a title bar. */
function Window({ x, y, w, h, title }: { x: number; y: number; w: number; h: number; title: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={PANEL} stroke={LINE} />
      <line x1={x} y1={y + 26} x2={x + w} y2={y + 26} stroke={LINE} />
      <circle cx={x + 12} cy={y + 13} r={3} fill={MUTED} opacity={0.5} />
      <circle cx={x + 22} cy={y + 13} r={3} fill={MUTED} opacity={0.5} />
      <text x={x + 34} y={y + 17} fontSize={10.5} fill={MUTED}>
        {title}
      </text>
    </g>
  )
}

const Tick = ({ x, y }: { x: number; y: number }) => (
  <g>
    <circle cx={x} cy={y} r={7} fill="rgba(76,195,138,0.18)" />
    <path d={`M${x - 3.5} ${y}l2.5 2.5 4.5-5`} stroke={GREEN} strokeWidth={1.6} fill="none" strokeLinecap="round" />
  </g>
)

const Pending = ({ x, y }: { x: number; y: number }) => (
  <g>
    <circle cx={x} cy={y} r={7} fill="rgba(248,184,0,0.18)" />
    <circle cx={x} cy={y} r={2.5} fill={AMBER} />
  </g>
)

/** Onboarding: an approval workflow screen. */
function Software() {
  const rows: [string, 'done' | 'wait' | 'todo'][] = [
    ['Documents received', 'done'],
    ['ID and sanctions checks', 'done'],
    ['Risk review', 'wait'],
    ['Account opened', 'todo'],
  ]
  return (
    <Ground>
      <Window x={60} y={22} w={280} h={176} title="Client onboarding" />
      {rows.map(([label, state], i) => {
        const y = 70 + i * 30
        return (
          <g key={label}>
            {state === 'done' && <Tick x={84} y={y} />}
            {state === 'wait' && <Pending x={84} y={y} />}
            {state === 'todo' && <circle cx={84} cy={y} r={6} fill="none" stroke={LINE} />}
            <text x={100} y={y + 4} fontSize={12} fill={state === 'todo' ? MUTED : INK}>
              {label}
            </text>
            {state === 'wait' && (
              <g>
                <rect x={262} y={y - 11} width={64} height={22} rx={5} fill={AMBER} />
                <text x={294} y={y + 4} fontSize={11} fontWeight={600} style={{ fill: 'var(--navy-950)' }} textAnchor="middle">
                  Approve
                </text>
              </g>
            )}
          </g>
        )
      })}
    </Ground>
  )
}

/** Legacy core: a strangler-pattern architecture snippet. */
function Modernization() {
  const box = (x: number, y: number, w: number, label: string, tone: 'old' | 'new' | 'facade') => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={34}
        rx={6}
        fill={tone === 'facade' ? 'rgba(248,184,0,0.14)' : PANEL}
        stroke={tone === 'facade' ? AMBER : tone === 'new' ? BLUE : LINE}
        strokeDasharray={tone === 'old' ? '4 3' : undefined}
      />
      <text x={x + w / 2} y={y + 21} fontSize={11.5} fill={tone === 'old' ? MUTED : INK} textAnchor="middle">
        {label}
      </text>
    </g>
  )
  return (
    <Ground>
      {box(140, 22, 120, 'Channels', 'new')}
      {box(120, 88, 160, 'API facade', 'facade')}
      {box(40, 160, 130, 'Legacy core', 'old')}
      {box(230, 160, 130, 'New services', 'new')}
      <path d="M200 56v32M170 122l-40 38M230 122l40 38" stroke={LINE} strokeWidth={1.4} fill="none" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0L8 4L0 8z" fill={MUTED} />
        </marker>
      </defs>
      <text x={105} y={150} fontSize={10} fill={MUTED} textAnchor="middle">
        shrinking
      </text>
      <text x={295} y={150} fontSize={10} fill={MUTED} textAnchor="middle">
        growing
      </text>
    </Ground>
  )
}

/** Data: a dashboard crop with one governed definition. */
function Data() {
  const bars = [62, 88, 74, 104, 96, 118]
  return (
    <Ground>
      <Window x={40} y={20} w={320} h={180} title="Exposure by region" />
      <line x1={64} y1={176} x2={336} y2={176} stroke={LINE} />
      {bars.map((h, i) => (
        <rect key={i} x={74 + i * 42} y={176 - h} width={24} height={h} rx={3} fill={i === 5 ? BLUE : 'rgba(91,140,255,0.45)'} />
      ))}
      <rect x={236} y={34} width={112} height={18} rx={9} fill="rgba(76,195,138,0.16)" />
      <text x={292} y={46.5} fontSize={9.5} fill={GREEN} textAnchor="middle">
        Governed definition
      </text>
    </Ground>
  )
}

/** AI pilot: the release gate from pilot to production. */
function Ai() {
  const steps = ['Pilot', 'Evaluated', 'Approved', 'Live']
  return (
    <Ground>
      {steps.map((s, i) => {
        const x = 44 + i * 92
        const live = i === 3
        return (
          <g key={s}>
            <rect x={x} y={44} width={76} height={34} rx={17} fill={live ? 'rgba(248,184,0,0.16)' : PANEL} stroke={live ? AMBER : BLUE} />
            <text x={x + 38} y={65} fontSize={11.5} fill={INK} textAnchor="middle">
              {s}
            </text>
            {i < 3 && <path d={`M${x + 78} 61h12`} stroke={MUTED} strokeWidth={1.4} />}
          </g>
        )
      })}
      <Window x={60} y={102} w={280} h={96} title="Release checklist" />
      <Tick x={84} y={146} />
      <text x={100} y={150} fontSize={12} fill={INK}>
        Evaluation suite passed
      </text>
      <Tick x={84} y={174} />
      <text x={100} y={178} fontSize={12} fill={INK}>
        Human approval recorded
      </text>
    </Ground>
  )
}

/** Cloud costs: a spend review with findings. */
function Cloud() {
  const findings = ['Idle disks and IPs', 'Oversized VMs', 'Untagged resources']
  return (
    <Ground>
      <Window x={40} y={20} w={320} h={180} title="Cloud cost review" />
      <polyline
        points="64,72 104,64 144,70 184,60 224,66 264,58 304,62 336,56"
        fill="none"
        stroke={BLUE}
        strokeWidth={2}
      />
      <text x={64} y={92} fontSize={10} fill={MUTED}>
        Monthly spend
      </text>
      {findings.map((f, i) => (
        <g key={f}>
          <Pending x={74} y={118 + i * 26} />
          <text x={90} y={122 + i * 26} fontSize={12} fill={INK}>
            {f}
          </text>
        </g>
      ))}
    </Ground>
  )
}

/** Audit: an evidence pack, control by control. */
function Security() {
  const rows = ['Access reviews', 'Change approvals', 'Encryption at rest', 'Incident runbooks']
  return (
    <Ground>
      <Window x={60} y={20} w={280} h={180} title="Audit evidence pack" />
      {rows.map((r, i) => {
        const y = 66 + i * 32
        return (
          <g key={r}>
            <Tick x={84} y={y} />
            <text x={100} y={y + 4} fontSize={12} fill={INK}>
              {r}
            </text>
            <text x={322} y={y + 4} fontSize={10} fill={MUTED} textAnchor="end">
              exported
            </text>
            {i < rows.length - 1 && <line x1={76} y1={y + 16} x2={324} y2={y + 16} stroke={LINE} />}
          </g>
        )
      })}
    </Ground>
  )
}

const VISUALS: Record<VisualKind, () => React.ReactElement> = {
  software: Software,
  modernization: Modernization,
  data: Data,
  ai: Ai,
  cloud: Cloud,
  security: Security,
}

export function CapabilityVisual({ kind }: { kind: VisualKind }) {
  const V = VISUALS[kind]
  return <V />
}

export default CapabilityVisual
