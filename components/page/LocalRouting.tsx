import { Cloud, Route, ScrollText, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Local AI page (2026-11-11): hybrid routing acted out, in the same shape
 * as the home page's AgentStory. Three steps on the left; on the right a
 * drawing of a routing gateway sending three requests to the local model
 * or to a cloud model in the client's own account. Not a product screen:
 * names are invented and labeled as such.
 */

const STEPS: { n: string; title: string; body: string; Icon: LucideIcon }[] = [
  {
    n: '1',
    title: 'Classify',
    body: 'The gateway checks each request against rules your compliance team sets: the matter, the client, or the kind of data attached.',
    Icon: Route,
  },
  {
    n: '2',
    title: 'Route',
    body: 'Privileged and regulated work goes to the model on your own servers. Public or low-risk work can use a frontier model in your own cloud account.',
    Icon: Server,
  },
  {
    n: '3',
    title: 'Log',
    body: 'Every request is recorded with who asked, the data class and the model that answered, on your systems.',
    Icon: ScrollText,
  },
]

const REQUESTS: { ask: string; ctx: string; cls: string; local: boolean }[] = [
  { ask: 'Summarize the witness interview notes', ctx: 'Matter 2291 · Acme internal investigation', cls: 'Privileged', local: true },
  { ask: 'Check this NDA against our playbook', ctx: 'Client contract · Bluewater Logistics', cls: 'Confidential', local: true },
  { ask: 'Summarize the regulator’s public consultation paper', ctx: 'Public document', cls: 'Public', local: false },
]

export function LocalRouting({ title, lede }: { title: string; lede?: string | undefined }) {
  return (
    <div className="ys-agent-grid ys-route">
      <div className="ys-agent-copy">
        <h2>{title}</h2>
        {lede && <p className="ys-agent-lede">{lede}</p>}
        <ol className="ys-agent-steps">
          {STEPS.map((s) => (
            <li key={s.n} className="ys-agent-step">
              <span className="ys-agent-step-icon"><s.Icon className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" /></span>
              <div>
                <p className="ys-agent-step-who">Step {s.n}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <figure
        className="ys-agent-card"
        role="img"
        aria-label="Illustration of a routing gateway: two requests about a privileged matter and a client contract go to the local model on the firm's servers; a request about a public document goes to a cloud model in the firm's own account. Every request is logged."
      >
        <div className="ys-agent-card-head" aria-hidden="true">
          <span className="ys-agent-card-badge"><Route className="w-4 h-4" strokeWidth={2} /> Routing gateway</span>
          <span className="ys-agent-card-matter">Inside your network</span>
        </div>
        <ul className="ys-route-list" aria-hidden="true">
          {REQUESTS.map((r) => (
            <li key={r.ask}>
              <div>
                <p className="ys-agent-card-name">{r.ask}</p>
                <p className="ys-agent-card-why">{r.ctx}</p>
              </div>
              <div className="ys-route-dest">
                <span className={`ys-route-cls ${r.local ? 'is-local' : ''}`}>{r.cls}</span>
                <span className="ys-route-to">
                  {r.local ? <Server className="w-3.5 h-3.5" strokeWidth={2} /> : <Cloud className="w-3.5 h-3.5" strokeWidth={2} />}
                  {r.local ? 'Local model' : 'Cloud model, your account'}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <p className="ys-agent-card-foot" aria-hidden="true">
          <ScrollText className="w-4 h-4" strokeWidth={2} /> Logged: who asked · data class · model used
        </p>
        <figcaption className="ys-agent-card-note">Illustration. Names are invented.</figcaption>
      </figure>
    </div>
  )
}
