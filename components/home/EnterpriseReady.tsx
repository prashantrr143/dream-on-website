import { Activity, FileText, GitBranch, MapPin, ShieldCheck, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Home: what security, risk and procurement teams ask for, stated as how
 * we build. Each line restates a published principle (content/about.ts,
 * the Blueprint FAQ); nothing here claims a certification or a client.
 */
const ITEMS: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: MapPin, title: 'Your cloud, your region', body: 'Repositories, infrastructure and data live in your accounts and the region you choose.' },
  { Icon: FileText, title: 'Audit trail on every decision', body: 'Every AI output, approval and override is logged where your auditors can follow it.' },
  { Icon: UserCheck, title: 'A person approves what matters', body: 'High-risk actions wait for a named approver. You set the thresholds.' },
  { Icon: Activity, title: 'Evaluated before go-live', body: 'Tests for accuracy and safety run before release and after every change.' },
  { Icon: ShieldCheck, title: 'Ready for security reviews', body: 'Evidence comes from your delivery pipeline, not from slides written the week before.' },
  { Icon: GitBranch, title: 'No vendor lock-in', body: 'We recommend the cloud and model that fit. We resell nothing, and the code is yours.' },
]

export function EnterpriseReady() {
  return (
    <section className="ys-section-white" aria-labelledby="home-ready">
      <div className="enterprise-container-wide">
        <div className="ys-ready-intro">
          <p className="ys-kicker">Built in from day one</p>
          <h2 id="home-ready">Enterprise-ready by default</h2>
          <p>What your security, risk and procurement teams will ask for, built in from the first sprint.</p>
        </div>
        <ul className="ys-ready-grid">
          {ITEMS.map(({ Icon, title, body }) => (
            <li key={title} className="ys-ready-tile">
              <span className="ys-ready-icon"><Icon className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
