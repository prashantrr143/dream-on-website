import {
  ArrowRight, Ban, Check, ClipboardCheck, Database, Eye, Gauge, Mail, ShieldAlert, UserCheck, X,
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA } from '@/lib/cta'
import { SITE_CONTACT } from '@/lib/site-contact'
import { LEGAL_LAST_UPDATED } from '@/lib/legal'

/**
 * Responsible AI (redesign, 2026-10-19: "tighten the UX and content, make
 * it modern"). Same commitments as the previous 12-section policy, said
 * once each and grouped by what a buyer checks: the promises, the red
 * lines, the controls at each stage and the evidence they leave, data and
 * models, framework alignment, and who is accountable for what.
 */

const COMMITMENTS = [
  {
    icon: Database,
    title: 'Your data does not train models',
    body: 'Neither our models nor a provider’s. The one exception is a dedicated model built for you, at your written request.',
    href: '#data',
  },
  {
    icon: UserCheck,
    title: 'A person approves what matters',
    body: 'Where liability sits with someone, they make the call, and can overturn the system.',
    href: '#controls',
  },
  {
    icon: Gauge,
    title: 'Measured before it ships',
    body: 'Tested against a target you set, on data like yours, before anyone outside the project sees it.',
    href: '#controls',
  },
  {
    icon: Eye,
    title: 'Watched after launch',
    body: 'Accuracy and failure patterns tracked over time, with thresholds that trigger review.',
    href: '#controls',
  },
]

const RED_LINES = [
  { title: 'Social scoring', body: 'Ranking people for general trustworthiness from unrelated behavior.' },
  { title: 'Mass biometric surveillance', body: 'Untargeted face scraping, or tracking people in public spaces.' },
  { title: 'Emotion and trait inference at work', body: 'Inferring emotion, beliefs or orientation in hiring, education or the workplace.' },
  { title: 'Unreviewable life decisions', body: 'Credit, jobs, housing, benefits, insurance or essential services with no person able to overturn the outcome.' },
  { title: 'Deception and manipulation', body: 'Hiding that people are dealing with a machine, or steering them against their interests.' },
  { title: 'Unexplainable where it must explain', body: 'A design that cannot explain a decision that has to be explained.' },
]

const CONTROLS = [
  {
    stage: 'Before design',
    title: 'Assess the risk',
    points: [
      'What it decides, who is affected, and what a wrong output costs',
      'Whether a mistake can be caught and reversed',
      'Obligations of its tier under the EU AI Act, sector rules or your model risk framework',
    ],
    evidence: 'Written risk assessment',
  },
  {
    stage: 'Design',
    title: 'Design the oversight',
    points: [
      'Approval sits with the person accountable for the decision',
      'Reviewers see the evidence behind each recommendation',
      'Rejecting an output is as easy as accepting it',
      'A documented off switch and escalation path',
    ],
    evidence: 'Oversight design and decision log',
  },
  {
    stage: 'Before go-live',
    title: 'Evaluate on your data',
    points: [
      'Accuracy and failure modes measured against your target',
      'The hard cases tested on purpose',
      'Performance compared across the groups the system will meet',
    ],
    evidence: 'Evaluation report; it is part of the go-live decision',
  },
  {
    stage: 'In production',
    title: 'Monitor and respond',
    points: [
      'Accuracy, volume and failures visible over time',
      'Thresholds that trigger review before a complaint does',
      'Harm treated as an incident: contained, reported to you, fixed',
    ],
    evidence: 'Monitoring, logs of every automated and overridden decision',
  },
]

const DATA_RULES = [
  'Never added to shared training sets or used to tune shared models',
  'Stays inside the agreed boundary, in your cloud and region where we build there',
  'Personal data processed as your processor, under a DPA',
  'Training, evaluation and production data kept separate, each with retention and deletion rules',
]

const MODEL_RULES = [
  'We tell you which models are used, and where they run',
  'Provider settings stop your prompts and outputs being retained for training, confirmed in writing',
  'Models run in your tenancy or an approved region where possible',
  'The model version is recorded, so a provider change can be traced and re-evaluated',
]

const ALIGNMENT = [
  { name: 'EU AI Act', how: 'Risk tiering, transparency, oversight and logging to the system’s tier.' },
  { name: 'ISO/IEC 42001', how: 'Management-system controls you can operate and evidence.' },
  { name: 'NIST AI RMF', how: 'Delivery mapped to govern, map, measure and manage.' },
  { name: 'UK AI principles', how: 'Safety, transparency, fairness, accountability, contestability.' },
  { name: 'UAE AI guidance', how: 'UAE AI ethics principles and Dubai AI guidelines in scoping and documentation.' },
]

const WE_DO = [
  'Leadership owns this policy; it is not left to the engineer on a project',
  'If a use comes close to a red line, we raise it before work starts',
  'We say plainly when a system misses its target',
  'We tell you about material changes in the provider terms we depend on',
  'We support you if a regulator or affected person must be notified',
]

const YOU_DO = [
  'Keep the human review steps in place, even when volumes rise',
  'Tell us before using the system for a materially different purpose',
  'Maintain the monitoring we hand over, and act on it',
  'Tell people AI is in use where the law or fairness requires it',
]

export default function ResponsibleAIContent() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Responsible AI"
        title="AI you can explain, control and switch off."
        lede="What we commit to, what we refuse to build, and the evidence you get at each stage, so you can hold us to it."
        visual="layers"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: 'What we will not build', href: '#red-lines' }}
      />

      {/* Four commitments */}
      <PageSection tone="white" title="Four commitments we make on every AI engagement">
        <ul className="ys-rai-commit">
          {COMMITMENTS.map((c) => (
            <li key={c.title}>
              <a href={c.href}>
                <span className="ys-hww-icon is-light" aria-hidden="true"><c.icon strokeWidth={1.75} /></span>
                <span className="ys-rai-commit-title">{c.title}</span>
                <span className="ys-rai-commit-body">{c.body}</span>
                <span className="ys-card-more" aria-hidden="true">
                  How <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ys-rai-scope">
          Applies to every engagement where we design, build or run systems that use machine learning, large language
          models or other AI. Where your Statement of Work sets stricter terms, the stricter terms apply.
        </p>
      </PageSection>

      {/* Red lines: the page's one navy feature band */}
      <section id="red-lines" className="ys-hww-band" aria-labelledby="rai-red-lines">
        <div className="enterprise-container-wide">
          <div className="ys-rai-band-head">
            <div>
              <p className="ys-eyebrow ys-eyebrow-on-dark">Red lines</p>
              <h2 id="rai-red-lines">What we will not build.</h2>
            </div>
            <p>Some uses of AI cannot be made safe by better engineering. We decline them, and say so early.</p>
          </div>
          <ul className="ys-rai-lines">
            {RED_LINES.map((r) => (
              <li key={r.title}>
                <span className="ys-rai-x" aria-hidden="true"><X strokeWidth={2.5} /></span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </li>
            ))}
          </ul>
          <p className="ys-rai-band-note">
            <Ban className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            Not an exhaustive list. If a proposal sits close to one of these, we raise it before work begins.
          </p>
        </div>
      </section>

      {/* Controls at each stage */}
      <PageSection
        id="controls"
        tone="light"
        eyebrow="In practice"
        title="The controls at each stage, and the evidence they leave."
        lede="Oversight, logging and evaluation scale with the risk. High-stakes decisions in regulated settings get more conservative designs; lower-risk uses can automate more."
      >
        <ol className="ys-rai-controls">
          {CONTROLS.map((c, i) => (
            <li key={c.title}>
              <div className="ys-rai-controls-head">
                <span className="ys-rai-step" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="ys-rai-stage">{c.stage}</span>
              </div>
              <h3>{c.title}</h3>
              <ul>
                {c.points.map((p) => (
                  <li key={p}><Check strokeWidth={2.5} aria-hidden="true" />{p}</li>
                ))}
              </ul>
              <p className="ys-rai-evidence">
                <ClipboardCheck strokeWidth={2} aria-hidden="true" />
                <span><span className="ys-rai-evidence-label">You get</span>{c.evidence}</span>
              </p>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* Data and models */}
      <PageSection id="data" tone="white" eyebrow="Data and models" title="How we handle your data and third-party models">
        <div className="ys-rai-two">
          <div className="ys-rai-panel">
            <p className="ys-rai-panel-kicker">Your data</p>
            <p className="ys-rai-panel-lead">
              We do not use client data to train or fine-tune models, unless you ask us to in writing for your own
              dedicated model.
            </p>
            <ul>{DATA_RULES.map((r) => <li key={r}><Check strokeWidth={2.5} aria-hidden="true" />{r}</li>)}</ul>
            <a href="/privacy" className="ys-link">How we handle personal data</a>
          </div>
          <div className="ys-rai-panel">
            <p className="ys-rai-panel-kicker">Third-party models</p>
            <p className="ys-rai-panel-lead">
              Most production AI builds on models run by others. We make that dependency visible and controlled.
            </p>
            <ul>{MODEL_RULES.map((r) => <li key={r}><Check strokeWidth={2.5} aria-hidden="true" />{r}</li>)}</ul>
          </div>
        </div>
      </PageSection>

      {/* Framework alignment */}
      <PageSection
        id="frameworks"
        tone="light"
        eyebrow="Framework alignment"
        title="Designed to the frameworks your regulators use."
      >
        <div className="ys-table-wrap" role="region" aria-label="Framework alignment" tabIndex={0}>
          <table className="ys-table">
            <thead>
              <tr>
                <th scope="col">Framework</th>
                <th scope="col">How our delivery lines up with it</th>
              </tr>
            </thead>
            <tbody>
              {ALIGNMENT.map((f) => (
                <tr key={f.name}>
                  <th scope="row">{f.name}</th>
                  <td>{f.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ys-rai-disclaimer">
          <ShieldAlert className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          These are frameworks we design to. YatiSphere holds no AI certification, and none of these frameworks has assessed us.
        </p>
      </PageSection>

      {/* Shared accountability */}
      <PageSection
        id="accountability"
        tone="white"
        eyebrow="Accountability"
        title="Who is accountable for what"
      >
        <div className="ys-rai-two">
          <div className="ys-rai-list">
            <h3>What we commit to</h3>
            <ul>{WE_DO.map((r) => <li key={r}><Check strokeWidth={2.5} aria-hidden="true" />{r}</li>)}</ul>
          </div>
          <div className="ys-rai-list">
            <h3>What we ask of you</h3>
            <ul>{YOU_DO.map((r) => <li key={r}><Check strokeWidth={2.5} aria-hidden="true" />{r}</li>)}</ul>
          </div>
        </div>

        <div id="contact" className="ys-rai-concern">
          <span className="ys-hww-icon is-light" aria-hidden="true"><Mail strokeWidth={1.75} /></span>
          <div>
            <h3>Raise a concern</h3>
            <p>
              Anyone can: a client, a person affected by a system we built, or a member of the public. Write to{' '}
              <a href={`mailto:${SITE_CONTACT.email}`} className="ys-link">{SITE_CONTACT.email}</a>. We respond within five
              working days.
            </p>
          </div>
          <p className="ys-rai-updated">Policy reviewed as regulation and practice change. Last updated {LEGAL_LAST_UPDATED}.</p>
        </div>
      </PageSection>

      <PageCTA
        title="Planning an AI system that has to stand up to scrutiny?"
        body="Tell us what it needs to decide, and who has to be able to explain it."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}
