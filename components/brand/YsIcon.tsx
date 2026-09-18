"use client"

/**
 * YatiSphere brand icon set — inlined as true SVG.
 *
 * The supplied icon files each declare a gradient with id="g". Inlining
 * several of them on one page would produce duplicate DOM ids and every
 * icon would pick up whichever gradient appeared first. Each icon name
 * therefore gets its own deterministic gradient id, which also keeps the
 * markup identical between server and client render.
 *
 * `variant` controls the stroke paint:
 *   - "gradient" reproduces the approved brand gradient
 *   - "current"  inherits `currentColor`, so the icon can be recoloured
 *                by its container (hover states, dark/light surfaces)
 */
export type YsIconName =
  | 'ai-ml'
  | 'analytics'
  | 'automation'
  | 'cloud'
  | 'consulting'
  | 'global'
  | 'growth'
  | 'innovation'
  | 'partnership'
  | 'people'
  | 'products'
  | 'security'
  | 'support'
  | 'sustainability'

const SHAPES: Record<YsIconName, React.ReactNode> = {
  'ai-ml': (
    <><rect x="13" y="13" width="22" height="22" rx="3"/><path d="M18 5v8M30 5v8M18 35v8M30 35v8M5 18h8M5 30h8M35 18h8M35 30h8"/><rect x="20" y="20" width="8" height="8" rx="1"/></>
  ),
  analytics: (
    <><path d="M10 39V27M24 39V17M38 39V9"/></>
  ),
  automation: (
    <><rect x="9" y="12" width="30" height="24" rx="4"/><path d="M17 20h14M17 28h9"/></>
  ),
  cloud: (
    <><path d="M15 37h22a8 8 0 0 0 0-16 12 12 0 0 0-23 3 7 7 0 0 0 1 13z"/></>
  ),
  consulting: (
    <><circle cx="24" cy="14" r="7"/><path d="M9 41c1-10 6-15 15-15s14 5 15 15"/></>
  ),
  global: (
    <><circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c6 6 6 30 0 36M24 6c-6 6-6 30 0 36"/></>
  ),
  growth: (
    <><path d="M8 38l12-12 8 7 14-17"/><path d="M31 16h11v11"/></>
  ),
  innovation: (
    <><path d="M24 6l4 10 11 1-8 7 3 11-10-6-10 6 3-11-8-7 11-1z"/></>
  ),
  partnership: (
    <><path d="M15 31l-5-5a6 6 0 0 1 8-8l6 6 5-5a6 6 0 0 1 8 8l-5 5"/><path d="M19 24l10 10a6 6 0 0 1-8 8l-6-6"/></>
  ),
  people: (
    <><circle cx="18" cy="17" r="6"/><circle cx="33" cy="20" r="5"/><path d="M7 42c0-8 5-12 11-12s11 4 11 12M27 42c0-6 4-9 9-9s7 3 8 9"/></>
  ),
  products: (
    <><path d="M24 6l17 10v20L24 46 7 36V16zM7 16l17 10 17-10M24 26v20"/></>
  ),
  security: (
    <><path d="M24 5l15 6v11c0 10-6 17-15 21-9-4-15-11-15-21V11z"/><path d="M17 24l5 5 10-11"/></>
  ),
  support: (
    <><path d="M8 28a16 16 0 0 1 32 0v10M8 30v9a4 4 0 0 0 4 4h5M40 30v9a4 4 0 0 1-4 4h-5M17 43h12"/></>
  ),
  sustainability: (
    <><path d="M24 43C10 36 8 22 12 10c12 0 25 5 28 17-2 9-8 13-16 16zM12 10c7 8 12 15 16 27"/></>
  ),
}

interface YsIconProps {
  name: YsIconName
  size?: number
  variant?: 'gradient' | 'current'
  strokeWidth?: number
  className?: string
  /** Supply when the icon carries meaning on its own; omit for decoration. */
  title?: string
}

export function YsIcon({
  name,
  size = 28,
  variant = 'gradient',
  strokeWidth = 2.4,
  className,
  title,
}: YsIconProps) {
  // Deterministic id derived from the icon itself, not from React tree
  // position. `useId()` would be hydration-safe in a normal tree, but these
  // sections are lazy-loaded via next/dynamic, so the client mounts them at a
  // different position than the server rendered them and the generated ids
  // diverge. The gradient is identical for every icon of a given variant, so
  // sharing one id per name is correct — and de-duplicates the <defs>.
  const gradientId = `ys-icon-grad-${name}`
  const stroke = variant === 'gradient' ? `url(#${gradientId})` : 'currentColor'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {variant === 'gradient' && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#0A84FF" />
            <stop offset=".55" stopColor="#00D1FF" />
            <stop offset="1" stopColor="#FF9F00" />
          </linearGradient>
        </defs>
      )}
      <g
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {SHAPES[name]}
      </g>
    </svg>
  )
}

export default YsIcon
