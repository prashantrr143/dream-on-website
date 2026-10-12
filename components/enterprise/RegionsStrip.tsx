import { WORKING_ACROSS_REGIONS } from '@/lib/regions'

/**
 * "Working across regions" tiles (audit H-06). Same four statements on
 * Home, Contact and How we work, from lib/regions.ts.
 */
export function RegionsStrip({
  eyebrow = 'Working across regions',
  title = 'Built for clients across the UK, Europe, the Middle East, the US and India.',
  children,
}: {
  eyebrow?: string
  title?: string
  children?: React.ReactNode
}) {
  return (
    <section className="ys-section-light" aria-labelledby="regions-heading">
      <div className="enterprise-container-wide">
        <p className="ys-eyebrow">{eyebrow}</p>
        <h2 id="regions-heading" style={{ maxWidth: '24ch', textWrap: 'balance', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          {title}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {WORKING_ACROSS_REGIONS.map((item) => (
            <li key={item.title} className="ys-open-item" style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: 16.5, fontWeight: 600, letterSpacing: '-0.018em', lineHeight: 1.3, color: 'var(--ink-900)', marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)' }}>{item.body}</p>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  )
}
