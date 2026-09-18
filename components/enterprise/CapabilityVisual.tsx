"use client"

/**
 * Capability visuals for the "What We Build" cards.
 *
 * These are drawn in CSS/SVG rather than sourced as photography, for
 * three reasons:
 *  - the DevOps pipeline and the legacy→modern transition are diagrams;
 *    drawing them renders crisply at any density and stays legible at
 *    card size, where a photograph of a diagram would not.
 *  - no baked-in text, no fake UI, no third-party logos, and nothing
 *    that can drift out of date when copy or branding changes.
 *  - each panel is unmistakably about its own capability, which is the
 *    requirement a generic "technology" photo fails.
 *
 * Every panel is on-palette: Deep Blue ground, Primary Blue and Cyan
 * accents, with Orange used once as a single controlled highlight.
 */

type VisualKind =
  | 'software'
  | 'cloud'
  | 'devops'
  | 'data'
  | 'modernisation'
  | 'security'

const BLUE = '#0A84FF'
const CYAN = '#00D1FF'
const ORANGE = '#FF8A00'

/** Shared ground: deep blue with a soft directional glow. */
function Ground({ children }: { children: React.ReactNode }) {
  return (
    <span className="ys-cap-visual" aria-hidden="true">
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        className="ys-cap-svg"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="capGround" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0B1E3D" />
            <stop offset="1" stopColor="#071429" />
          </linearGradient>
          <radialGradient id="capGlow" cx="0.75" cy="0.2" r="0.8">
            <stop offset="0" stopColor={BLUE} stopOpacity="0.30" />
            <stop offset="1" stopColor={BLUE} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="220" fill="url(#capGround)" />
        <rect width="400" height="220" fill="url(#capGlow)" />
        {children}
      </svg>
    </span>
  )
}

/** 01 — layered application architecture: services over a platform. */
function Software() {
  return (
    <Ground>
      <g opacity="0.95">
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(0 ${row * 34})`}>
            {[0, 1, 2, 3].map((col) => (
              <rect
                key={col}
                x={118 + col * 44}
                y={64}
                width={34}
                height={22}
                rx="4"
                fill="none"
                stroke={row === 1 && col === 1 ? CYAN : BLUE}
                strokeOpacity={row === 1 && col === 1 ? 0.95 : 0.5}
                strokeWidth="1.4"
              />
            ))}
          </g>
        ))}
        {/* connectors between tiers */}
        {[0, 1, 2, 3].map((col) => (
          <path
            key={col}
            d={`M${135 + col * 44} 86 V98 M${135 + col * 44} 120 V132`}
            stroke={BLUE}
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
        ))}
        {/* platform base */}
        <rect x="110" y="168" width="196" height="12" rx="3" fill={BLUE} fillOpacity="0.22" />
        <rect x="110" y="168" width="64" height="12" rx="3" fill={CYAN} fillOpacity="0.5" />
      </g>
    </Ground>
  )
}

/** 02 — distributed regions on resilient infrastructure. */
function Cloud() {
  const nodes = [
    [96, 150],
    [160, 108],
    [232, 132],
    [296, 94],
    [200, 176],
  ] as const
  return (
    <Ground>
      <g>
        {/* region links */}
        <path
          d="M96 150 L160 108 L232 132 L296 94 M160 108 L200 176 L232 132"
          fill="none"
          stroke={BLUE}
          strokeOpacity="0.45"
          strokeWidth="1.3"
        />
        {/* availability bands */}
        {[0, 1, 2].map((i) => (
          <ellipse
            key={i}
            cx="200"
            cy="140"
            rx={70 + i * 46}
            ry={26 + i * 16}
            fill="none"
            stroke={CYAN}
            strokeOpacity={0.2 - i * 0.05}
            strokeWidth="1"
          />
        ))}
        {nodes.map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="9" fill={BLUE} fillOpacity="0.16" />
            <circle
              cx={cx}
              cy={cy}
              r="4"
              fill={i === 3 ? CYAN : BLUE}
              fillOpacity={i === 3 ? 1 : 0.85}
            />
          </g>
        ))}
      </g>
    </Ground>
  )
}

/** 03 — CODE → BUILD → TEST → DEPLOY → MONITOR pipeline. */
function DevOps() {
  const stops = [72, 136, 200, 264, 328]
  return (
    <Ground>
      <g>
        <path
          d={`M${stops[0]} 110 H${stops[stops.length - 1]}`}
          stroke={BLUE}
          strokeOpacity="0.35"
          strokeWidth="1.6"
        />
        {stops.map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="110" r="17" fill="#0B1E3D" stroke={BLUE} strokeOpacity="0.65" strokeWidth="1.4" />
            {/* glyph per stage, drawn small and abstract */}
            {i === 0 && (
              <path d="M-5 -4 L-9 0 L-5 4 M5 -4 L9 0 L5 4" transform={`translate(${x} 110)`} fill="none" stroke={CYAN} strokeWidth="1.6" strokeLinecap="round" />
            )}
            {i === 1 && (
              <rect x={x - 5} y="105" width="10" height="10" rx="2" fill="none" stroke={CYAN} strokeWidth="1.6" />
            )}
            {i === 2 && (
              <path d="M-5 0 L-1 4 L5 -4" transform={`translate(${x} 110)`} fill="none" stroke={CYAN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            )}
            {i === 3 && (
              <path d="M0 -6 L6 -2 V4 L0 8 L-6 4 V-2 Z" transform={`translate(${x} 110)`} fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinejoin="round" />
            )}
            {i === 4 && (
              <path d="M-5 4 V-1 M0 4 V-5 M5 4 V1" transform={`translate(${x} 110)`} fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" />
            )}
            {/* flow arrow between stages */}
            {i < stops.length - 1 && (
              <path
                d={`M${x + 22} 110 l6 0 m-3 -3 l3 3 l-3 3`}
                fill="none"
                stroke={BLUE}
                strokeOpacity="0.7"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </g>
        ))}
      </g>
    </Ground>
  )
}

/** 04 — governed data: series, distribution and a trend. */
function Data() {
  const bars: number[] = [26, 44, 34, 58, 48, 72, 64, 88, 78, 104]
  const last = bars[bars.length - 1] ?? 0
  return (
    <Ground>
      <g>
        <path d="M76 168 H330" stroke={BLUE} strokeOpacity="0.3" strokeWidth="1.2" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={84 + i * 25}
            y={168 - h}
            width="13"
            height={h}
            rx="2.5"
            fill={i === bars.length - 1 ? CYAN : BLUE}
            fillOpacity={i === bars.length - 1 ? 0.95 : 0.34 + i * 0.045}
          />
        ))}
        <path
          d={`M90 ${168 - 30} ${bars.map((h, i) => `L${90 + i * 25} ${168 - h - 12}`).join(' ')}`}
          fill="none"
          stroke={CYAN}
          strokeOpacity="0.85"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={90 + (bars.length - 1) * 25} cy={168 - last - 12} r="3.5" fill={CYAN} />
      </g>
    </Ground>
  )
}

/** 05 — monolith decomposed into modular services. */
function Modernisation() {
  return (
    <Ground>
      <g>
        {/* legacy monolith, muted */}
        <rect x="70" y="72" width="66" height="96" rx="4" fill={BLUE} fillOpacity="0.10" stroke={BLUE} strokeOpacity="0.4" strokeWidth="1.3" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M78 ${92 + i * 20} H128`} stroke={BLUE} strokeOpacity="0.28" strokeWidth="1.1" />
        ))}
        {/* transition */}
        <path d="M150 120 H188 m-7 -6 l7 6 l-7 6" fill="none" stroke={ORANGE} strokeOpacity="0.9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        {/* modular target state */}
        {[
          [206, 76], [262, 76], [318, 76],
          [206, 128], [262, 128], [318, 128],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x ?? 0}
            y={y ?? 0}
            width={44}
            height={36}
            rx="4"
            fill={CYAN}
            fillOpacity={i % 2 === 0 ? 0.16 : 0.09}
            stroke={CYAN}
            strokeOpacity={0.7}
            strokeWidth="1.3"
          />
        ))}
      </g>
    </Ground>
  )
}

/** 06 — identity and policy boundary around protected workloads. */
function Security() {
  return (
    <Ground>
      <g>
        {/* policy boundary */}
        <path
          d="M200 58 L286 92 V134 C286 166 246 184 200 194 C154 184 114 166 114 134 V92 Z"
          fill={BLUE}
          fillOpacity="0.08"
          stroke={BLUE}
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* protected workloads inside the boundary */}
        {[
          [172, 108], [200, 108], [228, 108],
          [186, 140], [214, 140],
        ].map(([x, y], i) => (
          <rect key={i} x={(x ?? 0) - 10} y={(y ?? 0) - 8} width="20" height="16" rx="3" fill={CYAN} fillOpacity={i === 1 ? 0.55 : 0.2} stroke={CYAN} strokeOpacity="0.6" strokeWidth="1.1" />
        ))}
        {/* verified identity check */}
        <path d="M188 168 l8 8 l16 -18" fill="none" stroke={CYAN} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* denied edge signal — the single orange accent */}
        <circle cx="286" cy="92" r="4" fill={ORANGE} />
      </g>
    </Ground>
  )
}

const VISUALS: Record<VisualKind, () => React.ReactElement> = {
  software: Software,
  cloud: Cloud,
  devops: DevOps,
  data: Data,
  modernisation: Modernisation,
  security: Security,
}

export function CapabilityVisual({ kind }: { kind: VisualKind }) {
  const V = VISUALS[kind]
  return <V />
}

export type { VisualKind }
export default CapabilityVisual
