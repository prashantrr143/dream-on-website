"use client"

import { useState } from 'react'

/**
 * "Human + AI in control": a governed agent workflow, step by step.
 * Click or focus a step to see what happens, what's logged and who
 * approves. Horizontal on wide screens, vertical on narrow ones (CSS).
 */

const STEPS = [
  {
    name: 'Document in',
    actor: 'System',
    happens: 'A document or request arrives from email, an upload or an API, and is stored in your environment.',
    logged: 'Source, time, file hash and who or what submitted it.',
    approves: 'No approval needed; nothing has been decided yet.',
  },
  {
    name: 'Classify and extract',
    actor: 'Agent',
    happens: 'An agent identifies the document type and extracts the fields it needs, with a confidence score for each.',
    logged: 'Model and version, prompt template, extracted fields and confidence.',
    approves: 'Low-confidence fields are routed to a person to confirm.',
  },
  {
    name: 'Check and screen',
    actor: 'Agent',
    happens: 'A second agent checks the extracted data against your rules and reference data, and explains every flag it raises.',
    logged: 'Each rule evaluated, its result and the reason given.',
    approves: 'Flags go to a reviewer queue; nothing is rejected automatically.',
  },
  {
    name: 'Human approval',
    actor: 'Person',
    happens: 'A named person reviews the case, the agents’ reasons and any flags, then approves, amends or rejects it.',
    logged: 'Reviewer, decision, any changes made and the time taken.',
    approves: 'The accountable person in your team, under your approval rules.',
  },
  {
    name: 'Write to core system',
    actor: 'System',
    happens: 'Only approved data is written to your system of record, through its normal API and permissions.',
    logged: 'The record written, by which service identity, and the approval it relies on.',
    approves: 'Already approved in the previous step.',
  },
  {
    name: 'Audit log',
    actor: 'System',
    happens: 'The full trail is kept in your environment, under your retention policy, ready to export for an audit.',
    logged: 'Everything above, linked end to end for each case.',
    approves: 'Read access for audit and compliance teams.',
  },
]

export function WorkflowDiagram() {
  const [active, setActive] = useState(3)
  const step = STEPS[active]!

  return (
    <div className="ys-workflow">
      <ol className="ys-workflow-steps" aria-label="Workflow steps">
        {STEPS.map((s, i) => (
          <li key={s.name}>
            <button
              type="button"
              className={`ys-workflow-step${active === i ? ' is-active' : ''}${s.actor === 'Person' ? ' is-human' : ''}`}
              aria-pressed={active === i}
              aria-controls="ys-workflow-detail"
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="ys-workflow-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="ys-workflow-name">{s.name}</span>
              <span className="ys-workflow-actor">{s.actor}</span>
            </button>
          </li>
        ))}
      </ol>
      <div id="ys-workflow-detail" className="ys-workflow-detail" aria-live="polite">
        <h3>{step.name}</h3>
        <dl>
          <div>
            <dt>What happens</dt>
            <dd>{step.happens}</dd>
          </div>
          <div>
            <dt>What&rsquo;s logged</dt>
            <dd>{step.logged}</dd>
          </div>
          <div>
            <dt>Who approves</dt>
            <dd>{step.approves}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
