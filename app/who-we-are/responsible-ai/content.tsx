"use client"

import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA } from '@/lib/cta'
import { SITE_CONTACT } from '@/lib/site-contact'

const SECTIONS = [
  { id: 'scope', label: 'Scope' },
  { id: 'principles', label: 'Principles' },
  { id: 'will-not-build', label: 'What we will not build' },
  { id: 'risk', label: 'Risk-appropriate design' },
  { id: 'oversight', label: 'Human oversight in practice' },
  { id: 'data', label: 'Data and training' },
  { id: 'models', label: 'Third-party models' },
  { id: 'evaluation', label: 'Evaluation before go-live' },
  { id: 'monitoring', label: 'Monitoring and incidents' },
  { id: 'accountability', label: 'Accountability' },
  { id: 'client-obligations', label: 'What we ask of clients' },
  { id: 'contact', label: 'Questions and concerns' },
]

const AT_A_GLANCE = [
  {
    label: 'Your data does not train our models',
    body: 'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
    href: '#data',
  },
  {
    label: 'A person approves what matters',
    body: 'Where liability sits with someone, they decide, not the model.',
    href: '#oversight',
  },
  {
    label: 'Measured before it ships',
    body: 'Accuracy is tested against a target you set, on your data.',
    href: '#evaluation',
  },
  {
    label: 'Some things we refuse',
    body: 'We decline work where AI cannot be used responsibly.',
    href: '#will-not-build',
  },
]

/**
 * Framework alignment (audit R-02). Alignment, not certification: the
 * company holds no AI certification and is not assessed under these.
 */
const ALIGNMENT = [
  {
    framework: 'EU AI Act',
    how: 'Risk tiering of each system, transparency to the people affected, human oversight and logging designed to the obligations of the system\u2019s tier.',
  },
  {
    framework: 'ISO/IEC 42001',
    how: 'AI management system controls we design to, so your organization can operate and evidence them.',
  },
  {
    framework: 'NIST AI RMF',
    how: 'Delivery mapped to the four functions: govern, map, measure and manage.',
  },
  {
    framework: 'UK AI regulation principles',
    how: 'Safety, transparency, fairness, accountability and contestability built into design, evaluation and oversight.',
  },
  {
    framework: 'UAE AI guidance',
    how: 'UAE AI ethics principles and the Dubai AI guidelines reflected in scoping, oversight and documentation.',
  },
]

const ResponsibleAIContent = () => {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Trust"
        title="Responsible AI"
        lede="How we design, build and operate AI systems: what we commit to, what we refuse, and how we can be held to it."
        visual="layers"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />

      <PageSection tone="white">
        <ul className="ys-legal-glance">
          {AT_A_GLANCE.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <span className="ys-legal-glance-label">{item.label}</span>
                <span className="ys-legal-glance-body">{item.body}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="ys-legal-layout">
          <nav className="ys-legal-toc" aria-label="Contents">
            <p className="ys-legal-toc-title">Contents</p>
            <ol>
              {SECTIONS.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span aria-hidden="true">{i + 1}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="ys-legal">
            <p className="ys-legal-intro">
              AI is a powerful tool, but it requires careful governance. Our
              approach prioritizes transparency, control and predictability over
              novelty or automation for its own sake. This policy describes how we
              work, and what you can hold us to.
            </p>

            <section id="scope">
              <h2>1. Scope</h2>
              <p>
                This policy applies to every engagement in which we design, build or
                operate systems that use machine learning, large language models or
                other AI techniques, whether as the primary deliverable or as a
                component of a wider system.
              </p>
              <p>
                Where an engagement has its own governance requirements, those are
                recorded in the Statement of Work. Where they are stricter than this
                policy, the stricter terms apply.
              </p>
            </section>

            <section id="principles">
              <h2>2. Principles</h2>
              <p>
                Four commitments shape how we build. Each is set out in detail,
                with the practices that make it checkable rather than aspirational,
                in the section noted:
              </p>
              <ul>
                <li>
                  <strong>Human oversight.</strong> Where a decision matters, a
                  named person can see it, understand it and overturn it (
                  <a href="#oversight">section 5</a>).
                </li>
                <li>
                  <strong>Explainability.</strong> We favor approaches that can be
                  explained, and avoid black-box designs where an explanation is
                  required (<a href="#risk">section 4</a>).
                </li>
                <li>
                  <strong>Data boundaries.</strong> We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model. Client data stays within
                  the agreed boundary (<a href="#data">section 6</a>).
                </li>
                <li>
                  <strong>Continuous evaluation.</strong> Systems are measured
                  before go-live and monitored after it (
                  <a href="#evaluation">section 8</a> and{' '}
                  <a href="#monitoring">section 9</a>).
                </li>
              </ul>
            </section>

            <section id="will-not-build">
              <h2>3. What we will not build</h2>
              <p>
                Some applications of AI cannot be made safe by better engineering. We
                decline work in these categories, and we will say so early rather
                than late:
              </p>
              <ul>
                <li>
                  systems that assign people a social score, or rank them for general
                  trustworthiness, from unrelated behavioral data
                </li>
                <li>
                  untargeted scraping of facial images, or biometric surveillance of
                  people in public spaces
                </li>
                <li>
                  inference of emotion, or of sensitive characteristics such as
                  beliefs or orientation, in hiring, education or the workplace
                </li>
                <li>
                  systems that decide on credit, employment, housing, benefits,
                  insurance or access to essential services without a person able to
                  review and overturn the outcome
                </li>
                <li>
                  systems designed to deceive people about whether they are dealing
                  with a machine, or to manipulate behavior against their interests
                </li>
                <li>
                  deployments where a decision must be explained but the proposed
                  design cannot explain it
                </li>
              </ul>
              <p>
                This list is not exhaustive. Where a proposed use sits close to one of
                these categories, we raise it before work begins rather than after.
              </p>
            </section>

            <section id="risk">
              <h2>4. Risk-appropriate design</h2>
              <p>
                We match AI capabilities to risk levels. High-stakes decisions in
                regulated environments receive more conservative designs with greater
                human oversight, while lower-risk applications may benefit from more
                automation. We avoid black-box deployments in contexts where
                explainability and auditability are required.
              </p>
              <p>
                Before design begins, we assess where a proposed system sits on that
                scale: what decision it influences, who is affected, what the
                consequence of a wrong output is, and whether that consequence can be
                caught and reversed. That assessment drives the level of oversight,
                logging and evaluation we build in, and it is written down rather
                than assumed.
              </p>
              <p>
                Where an engagement falls within a regulatory regime for AI &mdash;
                including the EU AI Act, sectoral supervisory guidance, or a
                client&rsquo;s own model risk framework &mdash; we design against the
                obligations that apply to the system&rsquo;s risk tier and produce the
                documentation those obligations call for.
              </p>

              <h3
                id="framework-alignment"
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.3,
                  color: 'var(--ink-900)',
                  marginTop: '28px',
                  marginBottom: '10px',
                }}
              >
                How our delivery aligns with AI frameworks
              </h3>
              <p>
                The table below shows how our delivery practice lines up with the
                main AI frameworks. This is alignment, not certification: YatiSphere
                holds no AI certification, and none of these frameworks has assessed
                us.
              </p>
              <div className="ys-cookie-table-wrap" tabIndex={0} role="region" aria-label="Framework alignment (scrollable table)">
                <table className="ys-cookie-table">
                  <caption className="sr-only">
                    AI frameworks and how our delivery aligns with them (alignment, not certification)
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Framework</th>
                      <th scope="col">How our delivery aligns</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ALIGNMENT.map((row, i) => (
                      <tr key={row.framework}>
                        <th
                          scope="row"
                          style={{
                            fontFamily: 'inherit',
                            fontSize: '14px',
                            fontWeight: 600,
                            letterSpacing: 'normal',
                            textTransform: 'none',
                            color: 'var(--ink-900)',
                            background: 'transparent',
                            whiteSpace: 'normal',
                            ...(i === ALIGNMENT.length - 1 ? { borderBottom: 0 } : {}),
                          }}
                        >
                          {row.framework}
                        </th>
                        <td>{row.how}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="oversight">
              <h2>5. Human oversight in practice</h2>
              <p>
                Human oversight means a named person can see what the system decided,
                understand why, and change the outcome. In practice, that means:
              </p>
              <ul>
                <li>
                  approval steps sit where liability sits: the person accountable for
                  a decision is the person who approves it
                </li>
                <li>
                  reviewers see the basis for a recommendation, not only the
                  recommendation, and can act on the underlying material
                </li>
                <li>
                  the interface makes it as easy to reject or amend an output as to
                  accept it, so that review does not become rubber-stamping
                </li>
                <li>
                  every automated and every overridden decision is logged, with who
                  acted and when
                </li>
                <li>
                  there is a documented way to turn the system off, and an escalation
                  path when it behaves unexpectedly
                </li>
              </ul>
            </section>

            <section id="data">
              <h2>6. Data and training</h2>
              <p>
                <strong>We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.</strong> Client data is not added to shared
                training sets, not used to fine-tune shared models, and not
                retained for that purpose.
              </p>
              <p>
                Client data stays within the boundary agreed in the engagement.
                Where a system is built in your cloud accounts, it stays in the
                region you choose. Where personal data is processed, we do so as your
                processor under a data processing agreement, as described in our{' '}
                <a href="/privacy">Privacy Policy</a>.
              </p>
              <p>
                We keep training data, evaluation sets and production data separate,
                collect only what the purpose requires, and apply defined retention
                and deletion rules to each.
              </p>
            </section>

            <section id="models">
              <h2>7. Third-party models</h2>
              <p>
                Most production AI work builds on models operated by third parties
                rather than models trained from scratch. Where we do so:
              </p>
              <ul>
                <li>
                  we tell you which models an engagement uses, and where they run
                </li>
                <li>
                  we configure provider settings so that your prompts and outputs are
                  not retained for provider training, and we confirm that in writing
                </li>
                <li>
                  we prefer deployments where the model runs within your cloud tenancy
                  or a region you have approved
                </li>
                <li>
                  we record the model version a system depends on, so that a change in
                  provider behavior can be traced and re-evaluated
                </li>
              </ul>
              <p>
                Model providers publish their own terms, and those terms change. We
                monitor the ones we depend on and raise material changes with you.
              </p>
            </section>

            <section id="evaluation">
              <h2>8. Evaluation before go-live</h2>
              <p>
                No AI system we build goes to production on the strength of a
                demonstration. Before go-live we measure it against a target you set,
                on data representative of your own.
              </p>
              <ul>
                <li>
                  accuracy and failure modes are measured and reported, not asserted
                </li>
                <li>
                  we test the cases that matter most, including the ones the system is
                  expected to find hard
                </li>
                <li>
                  where outcomes affect people, we look for systematically different
                  performance across the groups the system will encounter
                </li>
                <li>
                  the evaluation result is written down, and forms part of the
                  decision to deploy
                </li>
              </ul>
              <p>
                If a system does not meet the target, we say so. We would rather
                report that plainly than ship something that will fail in front of
                your users.
              </p>
            </section>

            <section id="monitoring">
              <h2>9. Monitoring and incidents</h2>
              <p>
                A model that performed well at launch will not necessarily perform
                well six months later. Inputs shift, providers update models, and the
                world the system was measured against changes.
              </p>
              <ul>
                <li>
                  we instrument production systems so that accuracy, volume and
                  failure patterns are visible over time
                </li>
                <li>
                  we set thresholds that trigger review rather than waiting for a
                  complaint
                </li>
                <li>
                  where we operate a system, we review its outcomes on a schedule
                  agreed with you
                </li>
              </ul>
              <p>
                Where an AI system causes or contributes to harm, we treat it as an
                incident: contain it, tell you without undue delay, establish what
                happened, and agree the fix. Where a regulator or affected person must
                be notified, we support you in doing so.
              </p>
            </section>

            <section id="accountability">
              <h2>10. Accountability</h2>
              <p>
                Responsibility for this policy sits with the company&rsquo;s
                leadership, and applies to everyone who works on an engagement. It is
                not delegated to the individual engineer on a project.
              </p>
              <p>
                We review this policy as standards, regulation and our own practice
                develop, and we update it rather than letting it drift out of date.
              </p>
              <p>
                Anyone &mdash; a client, a person affected by a system we built, or a
                member of the public &mdash; may raise a concern with us, and we will
                respond.
              </p>
            </section>

            <section id="client-obligations">
              <h2>11. What we ask of clients</h2>
              <p>
                Responsible deployment is a shared obligation. Where we build a system
                and hand it over, we ask that you:
              </p>
              <ul>
                <li>
                  keep the human review steps in place rather than removing them for
                  throughput
                </li>
                <li>
                  tell us if you intend to use the system for a materially different
                  purpose than the one it was evaluated for
                </li>
                <li>
                  maintain the monitoring we hand over, and act on what it reports
                </li>
                <li>
                  tell affected people that AI is in use, where the law or fairness
                  requires it
                </li>
              </ul>
              <p>
                We will say clearly when a proposed change to a system we built takes
                it outside what we evaluated.
              </p>
            </section>

            <section id="contact" className="ys-legal-divided">
              <h2>12. Questions and concerns</h2>
              <p>
                For questions about this policy, or to raise a concern about a system
                we have built, write to{' '}
                <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>. We
                aim to respond within five working days.
              </p>
            </section>
          </div>
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

export default ResponsibleAIContent
