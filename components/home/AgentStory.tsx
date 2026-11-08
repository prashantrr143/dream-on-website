import { ArrowRight, Bot, ClipboardCheck, ScrollText, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Home: the tagline acted out (2026-11-08). "Hand off the work. Keep the
 * judgment." shown on one illustrative conflict check: what the agent does,
 * what the person decides, what gets recorded. The card on the right is a
 * drawing of the approval step, not a live product screen. Names reuse the
 * invented Acme / Bluewater example from the legal industry page.
 */

const STEPS: { n: string; title: string; body: string; who: string; Icon: LucideIcon }[] = [
  {
    n: '1',
    title: 'The agent does the work',
    body: 'Reads the intake email, pulls out every party, and searches your records for name variants, former names and corporate families.',
    who: 'Agent',
    Icon: Bot,
  },
  {
    n: '2',
    title: 'Your people decide',
    body: 'Possible conflicts go to the responsible partner with the evidence attached. Approve, reject or ask for more. Nothing clears without a person.',
    who: 'Partner',
    Icon: UserCheck,
  },
  {
    n: '3',
    title: 'Every step is logged',
    body: 'Who decided what, when and on which evidence, kept in your own systems for your general counsel, client or auditor.',
    who: 'Record',
    Icon: ScrollText,
  },
]

const FLAGS = [
  { name: 'Acme Freight LLC', why: 'Subsidiary of the client. Adverse in an earlier matter.' },
  { name: 'Bluewater Logistics', why: 'Former name matches a current client.' },
]

export function AgentStory() {
  return (
    <section className="ys-section-white ys-agent" aria-labelledby="home-agent">
      <div className="enterprise-container-wide ys-agent-grid">
        <div className="ys-agent-copy">
          <p className="ys-kicker">How handing off works</p>
          <h2 id="home-agent">One conflict check, handed off</h2>
          <p className="ys-agent-lede">
            An illustrative new matter at a law firm. The agent does the legwork, a partner makes the call, and the record writes itself.
          </p>

          <ol className="ys-agent-steps">
            {STEPS.map((s) => (
              <li key={s.n} className="ys-agent-step">
                <span className="ys-agent-step-icon"><s.Icon className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" /></span>
                <div>
                  <p className="ys-agent-step-who">{s.n} · {s.who}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="/what-we-do/industries/legal-professional-services" className="ys-agent-link">
            See the full walkthrough for law firms
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <figure
          className="ys-agent-card"
          role="img"
          aria-label="Illustration of a conflict check agent: 16 parties checked, 14 clear, two possible conflicts waiting for a partner to approve or review, every decision logged."
        >
          <div className="ys-agent-card-head" aria-hidden="true">
            <span className="ys-agent-card-badge"><ClipboardCheck className="w-4 h-4" strokeWidth={2} /> Conflict check agent</span>
            <span className="ys-agent-card-matter">New matter · Acme Holdings acquisition</span>
          </div>

          <div className="ys-agent-card-stats" aria-hidden="true">
            <span><b>16</b> parties checked</span>
            <span><b>14</b> clear</span>
            <span className="is-warn"><b>2</b> need your decision</span>
          </div>

          <ul className="ys-agent-card-list" aria-hidden="true">
            {FLAGS.map((f) => (
              <li key={f.name}>
                <div>
                  <p className="ys-agent-card-name">{f.name}</p>
                  <p className="ys-agent-card-why">{f.why}</p>
                </div>
                <span className="ys-agent-card-actions">
                  <span className="is-primary">Approve</span>
                  <span>Review</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="ys-agent-card-foot" aria-hidden="true">
            <ScrollText className="w-4 h-4" strokeWidth={2} /> Every decision logged with its evidence · Partner approval required
          </p>
          <figcaption className="ys-agent-card-note">Illustration. Names are invented.</figcaption>
        </figure>
      </div>
    </section>
  )
}
