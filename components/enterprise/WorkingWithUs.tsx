import { ArrowRight } from 'lucide-react'

/**
 * "Working with us": the practical answers procurement and legal ask
 * before a first engagement (2026-10-19). An editorial list, not cards.
 *
 * Owner to confirm before launch: the free first call, working on the
 * client's paper, and the billing models. Everything else is already
 * stated elsewhere on the site (Trust, Contact, Responsible AI).
 */

const ROWS: { label: string; body: string; link?: { label: string; href: string } }[] = [
  {
    label: 'First conversation',
    body: 'A senior engineer replies within one working day. The first call is free and carries no obligation; we will tell you plainly if we are not the right fit.',
  },
  {
    label: 'Paperwork',
    body: 'A mutual NDA before any detailed discussion, then a master services agreement with a statement of work for each engagement. We can work on your paper.',
  },
  {
    label: 'Data protection',
    body: 'A data processing agreement as standard, with standard contractual clauses where personal data crosses a border.',
  },
  {
    label: 'Security review',
    body: 'Our security pack is available under NDA, and we complete your vendor questionnaire.',
    link: { label: 'Trust and security', href: '/who-we-are/trust' },
  },
  {
    label: 'Commercials',
    body: 'The Solution Blueprint is a fixed fee. Delivery is priced as fixed milestones or time and materials, and dedicated teams are billed monthly.',
  },
  {
    label: 'Ownership',
    body: 'Code, infrastructure and documents live in your accounts and belong to you from day one.',
  },
]

export function WorkingWithUs({ tone = 'white', title = 'Working with us' }: { tone?: 'white' | 'light'; title?: string }) {
  return (
    <section id="working-with-us" className={tone === 'light' ? 'ys-section-light' : 'ys-section-white'} aria-labelledby="wwu-title">
      <div className="enterprise-container-wide ys-wwu">
        <div className="ys-wwu-intro">
          <h2 id="wwu-title">{title}</h2>
          <p>What your procurement, legal and security teams will want to know before we start.</p>
        </div>
        <dl className="ys-wwu-list">
          {ROWS.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>
                {r.body}
                {r.link && (
                  <a href={r.link.href} className="ys-wwu-link">
                    {r.link.label}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
