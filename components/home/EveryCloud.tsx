import { ArrowRight } from 'lucide-react'

/**
 * "Every cloud. Every model. One accountable team." Text only: no vendor
 * logos unless a programme is a confirmed membership (content/site.ts).
 */
const CARDS = [
  { title: 'AWS', body: 'Governed landing zones, migration, data and AI workloads, and cost control on AWS.', href: '/what-we-do/cloud/aws' },
  { title: 'Microsoft Azure', body: 'Azure platforms built to your policies, from foundations to data and AI workloads.', href: '/what-we-do/cloud/microsoft-azure' },
  { title: 'Google Cloud', body: 'Secure foundations, data platforms and AI workloads on Google Cloud.', href: '/what-we-do/cloud/google-cloud' },
  { title: 'Claude practice', body: 'Adopt Claude, build agents with it and connect it to your systems, inside the cloud boundary you choose.', href: '/what-we-do/applied-ai/claude' },
]

export function EveryCloud() {
  return (
    <section className="ys-section-light" aria-labelledby="home-every-cloud">
      <div className="enterprise-container-wide">
        <p className="ys-eyebrow">Cloud and model neutral</p>
        <h2 id="home-every-cloud" style={{ maxWidth: '22ch', marginBottom: 12 }}>
          Every cloud. Every model. One accountable team.
        </h2>
        <p style={{ maxWidth: '62ch', fontSize: 16, lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          We recommend the cloud and model that fit your estate, not the one we resell, and build inside your own accounts.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {CARDS.map((c) => (
            <li key={c.title} style={{ minWidth: 0 }}>
              <a href={c.href} className="ys-card-light ys-card-link" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 26 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{c.body}</p>
                <span className="ys-card-more" aria-hidden="true">
                  Read more <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
