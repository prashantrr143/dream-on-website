import Image from 'next/image'
import { siteConfig } from '@/lib/site.config'

/**
 * Verifiable proof under a hero (audit H-02): up to three metrics and any
 * earned badges, from siteConfig.proof. Renders nothing while both are
 * empty, so no placeholder figure can reach the page.
 */
export function ProofStrip({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const metrics = siteConfig.proof.metrics.slice(0, 3)
  const badges = siteConfig.proof.badges
  if (metrics.length === 0 && badges.length === 0) return null

  const onDark = tone === 'dark'
  return (
    <section
      aria-label="Track record"
      className={onDark ? 'ys-section-deep' : 'ys-section-white'}
      style={{ paddingBlock: 'clamp(28px, 4vw, 44px)' }}
    >
      <div className="enterprise-container-wide flex flex-wrap items-center justify-between" style={{ gap: 28 }}>
        {metrics.length > 0 && (
          <dl className="flex flex-wrap" style={{ gap: 'clamp(24px, 5vw, 64px)' }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ minWidth: 0, maxWidth: 260 }}>
                <dt className="sr-only">{m.label}</dt>
                <dd
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(26px, 3vw, 34px)',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    color: onDark ? 'var(--white)' : 'var(--ink-900)',
                  }}
                >
                  {m.value}
                </dd>
                <dd
                  aria-hidden="true"
                  style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5, color: onDark ? 'var(--ink-300)' : 'var(--ink-600)' }}
                >
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
        {badges.length > 0 && (
          <ul className="flex flex-wrap items-center" style={{ gap: 24, listStyle: 'none', margin: 0, padding: 0 }}>
            {badges.map((b) => (
              <li key={b.name}>
                <a href={b.href} target="_blank" rel="noopener noreferrer">
                  <Image src={b.imageSrc} alt={b.name} width={120} height={48} style={{ height: 48, width: 'auto' }} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
