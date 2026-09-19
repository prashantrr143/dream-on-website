"use client"

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

/** Hero at-a-glance tiles — what makes the AI work land, not model names. */
const GLANCE = [
  { label: 'Integrated', sub: 'Built into your existing systems, not beside them' },
  { label: 'Governed', sub: 'Access, audit trail and approvals from day one' },
  { label: 'Evaluated', sub: 'Accuracy tested on your data before go-live' },
  { label: 'Operated', sub: 'Monitored and improved by the team that built it' },
]

const SITUATIONS = [
  {
    quote: 'Our pilot worked. Then nothing happened.',
    body: 'The demo impressed everyone, but it runs on a laptop with sample data. Nobody owns integration, security or what happens when it is wrong.',
  },
  {
    quote: 'A document-heavy process is eating our team’s week.',
    body: 'Onboarding packs, KYC files, claims and contracts, read and re-keyed by hand, with every delay landing on a client.',
  },
  {
    quote: 'Compliance won’t sign off.',
    body: 'Nobody can say what data the model touches, who approved its output or how to turn it off. So the project stalls.',
  },
]

interface Service {
  id: string
  title: string
  body: string
  gets: string[]
  /** Chips appear on the platform card only, where the stack is the point. */
  chips?: string[]
  link?: { label: string; href: string }
}

const SERVICES: Service[] = [
  {
    id: 'architecture',
    title: 'AI Architecture & Readiness',
    body: 'Where AI fits, what data it needs and what it must never touch. A target design and roadmap before any model is chosen.',
    gets: [
      'Ranked use cases with a go / not-yet for each',
      'Data and risk review',
      'Target design and delivery plan',
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic Workflow Automation',
    body: 'Multi-agent systems for document-heavy processes such as onboarding, KYC, claims and contracts, with human approval gates where liability sits.',
    gets: [
      'A working workflow on your own documents',
      'Approval steps with named owners',
      'A logged record of every automated decision',
    ],
  },
  {
    id: 'platforms',
    title: 'Enterprise AI Platforms',
    body: 'A shared AI platform on Azure, so every team builds on the same foundations: model routing, prompt and version control, observability and cost management.',
    gets: [
      'One governed entry point for all AI use',
      'Usage and cost visibility per team',
      'A platform your own engineers can run',
    ],
    chips: ['Azure', 'Azure OpenAI', 'Azure Document Intelligence', 'Microsoft Foundry'],
  },
  {
    id: 'governance',
    title: 'Responsible AI & Governance',
    body: 'Data sovereignty, audit trails, evaluation and policy controls, so the compliance team signs off rather than shuts it down.',
    gets: [
      'Data boundaries enforced in the system, not in a policy PDF',
      'Evaluation results before go-live',
      'An off-switch and an escalation path',
    ],
    link: { label: 'Our responsible AI approach', href: '/responsible-ai' },
  },
]

const SCENARIOS = [
  {
    tag: 'Client onboarding and KYC',
    problem: 'Onboarding takes weeks and lives in email.',
    approach:
      'Agents that collect, classify and check documents, with a person approving before anything reaches core systems.',
    points: [
      'Document capture, classification and extraction',
      'Screening results routed for human adjudication',
      'One view of where every case is stuck',
    ],
    link: { label: 'Financial services', href: '/industries/financial-services' },
  },
  {
    tag: 'Intake and conflict checks',
    problem: 'New matters wait on checks nobody can see.',
    approach:
      'Structured intake with parties captured as data, conflict search with a retained result, and explicit approval routing.',
    points: [
      'Party and related-entity matching',
      'A clearance record that can be reconstructed later',
      'Named accountability at each approval',
    ],
    link: {
      label: 'Legal & professional services',
      href: '/industries/legal-professional-services',
    },
  },
  {
    tag: 'Claims and document workflows',
    problem: 'Manual claims processing takes weeks.',
    approach: 'AI-assisted document analysis with human-in-the-loop review.',
    points: [
      'Automated data extraction from claim documents',
      'Anomaly flagging for fraud review',
      'Audit trail for every automated decision',
    ],
    link: { label: 'Financial services', href: '/industries/financial-services' },
  },
  {
    tag: 'Knowledge search over your own documents',
    problem: 'The answer exists somewhere, and nobody can find it.',
    approach:
      'Assistants that answer only from approved content, within each person’s existing access rights.',
    points: [
      'Retrieval scoped to what the user is permitted to see',
      'Answers that cite their source documents',
      'Logged prompts and outputs for accountability',
    ],
    link: { label: 'Enterprise & technology', href: '/industries/enterprise-technology' },
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Readiness',
    body: 'We agree the problem, check the data and risks, and say plainly whether AI is the right tool.',
  },
  {
    n: '02',
    title: 'Pilot',
    body: 'A working version on your own data, with accuracy measured against a target you set.',
  },
  {
    n: '03',
    title: 'Production',
    body: 'Integration with your systems, security hardening, approvals and monitoring.',
  },
  {
    n: '04',
    title: 'Run',
    body: 'We operate and improve it, or hand over to your team with a run guide.',
  },
]

const GUARDRAILS = [
  {
    title: 'Train on your data',
    body: 'No client data trains models or leaves the boundary you define.',
  },
  {
    title: 'Ship a black box',
    body: 'Where a decision must be explained, we don’t deploy something that can’t explain it.',
  },
  {
    title: 'Remove the human',
    body: 'Where liability sits with a person, a person approves.',
  },
  {
    title: 'Sell AI you don’t need',
    body: 'If a simpler fix solves the problem, we will tell you.',
  },
]

/** Tick used in the "You get" and scenario lists. */
function Tick() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ marginTop: '3px', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M4 8l3.5 3.5L12 4"
        stroke="var(--ys-link-on-light)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const AppliedAIContent = () => {
  return (
    <SharedLayout>
      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Pillar 02 · Applied AI"
        title="AI that ships to production, inside the systems you already run."
        lede="Most AI pilots never leave the sandbox because nobody owned the integration, the governance or the operations. We own all three."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />

      {/* At a glance */}
      <PageSection tone="white" eyebrow="At a glance">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '16px' }}
        >
          {GLANCE.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="ys-card-light"
              style={{ padding: '26px 24px', minWidth: 0 }}
            >
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)',
                  maxWidth: '34ch',
                }}
              >
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 2. Three situations ── */}
      <PageSection
        tone="light"
        eyebrow="Where teams get stuck"
        title="Three situations we get called into."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '20px' }}
        >
          {SITUATIONS.map((s) => (
            <motion.div
              key={s.quote}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.35,
                  color: 'var(--ys-ink)',
                  marginBottom: '12px',
                  textWrap: 'pretty',
                }}
              >
                &ldquo;{s.quote}&rdquo;
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  maxWidth: '62ch',
                }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 3. Four services ── */}
      <PageSection
        tone="white"
        eyebrow="What we do"
        title="Four services, one accountable team."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeUp}
              className="ys-card-light ys-anchor-target"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  color: 'var(--ys-ink)',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '22px',
                  maxWidth: '62ch',
                }}
              >
                {service.body}
              </p>

              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ys-ink-muted)',
                  marginBottom: '10px',
                }}
              >
                You get
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                {service.gets.map((get) => (
                  <li
                    key={get}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                  >
                    <Tick />
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: 'var(--ys-ink-body)',
                      }}
                    >
                      {get}
                    </span>
                  </li>
                ))}
              </ul>

              {service.chips && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '22px',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--ys-border)',
                  }}
                >
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        display: 'inline-block',
                        padding: '4px 9px',
                        borderRadius: '5px',
                        background: 'var(--ys-surface-alt)',
                        border: '1px solid var(--ys-border)',
                        fontSize: '11.5px',
                        fontWeight: 500,
                        color: 'var(--ys-ink-muted)',
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              {service.link && (
                <a
                  href={service.link.href}
                  className="ys-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    marginTop: '22px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {service.link.label}
                  <ArrowRight
                    className="w-3.5 h-3.5 shrink-0"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 4. Where it applies ── */}
      <PageSection
        tone="light"
        eyebrow="Where we apply it"
        title="Typical problems, and what the solution is built to do."
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {SCENARIOS.map((scenario) => (
            <motion.div
              key={scenario.tag}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '14px',
                }}
              >
                {scenario.tag}
              </p>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.35,
                  color: 'var(--ys-ink)',
                  marginBottom: '10px',
                  textWrap: 'pretty',
                }}
              >
                {scenario.problem}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: 'var(--ys-ink-body)',
                  marginBottom: '20px',
                  maxWidth: '62ch',
                }}
              >
                {scenario.approach}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                {scenario.points.map((point) => (
                  <li
                    key={point}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                  >
                    <Tick />
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: 'var(--ys-ink-body)',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '20px',
                }}
              >
                <a
                  href={scenario.link.href}
                  className="ys-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {scenario.link.label}
                  <ArrowRight
                    className="w-3.5 h-3.5 shrink-0"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </PageSection>

      {/* ── 5. How an AI engagement runs ── */}
      <PageSection
        tone="white"
        eyebrow="How it runs"
        title="From first question to running system."
      >
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}
        >
          {STEPS.map((step) => (
            <motion.li
              key={step.n}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: 'var(--ys-link-on-light)',
                  marginBottom: '10px',
                }}
              >
                {step.n}
              </span>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '-0.018em',
                  color: 'var(--ys-ink)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)',
                  maxWidth: '62ch',
                }}
              >
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'clamp(24px, 3vw, 32px)' }}
        >
          <a
            href={SECONDARY_CTA.href}
            className="ys-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '14.5px',
              fontWeight: 600,
            }}
          >
            {SECONDARY_CTA.label}
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </motion.div>
      </PageSection>

      {/* ── 6. Why the platform underneath matters ── */}
      <PageSection tone="light">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="ys-card-light"
          style={{ padding: 'clamp(28px, 4vw, 44px)', minWidth: 0 }}
        >
          <p className="ys-eyebrow">Why the two pillars belong together</p>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: 'var(--ys-ink)',
              marginTop: '14px',
              marginBottom: '16px',
              textWrap: 'balance',
            }}
          >
            AI is only as good as the platform underneath it.
          </h2>
          <p
            style={{
              fontSize: '15.5px',
              lineHeight: 1.7,
              color: 'var(--ys-ink-body)',
              maxWidth: '68ch',
              marginBottom: '20px',
            }}
          >
            Clean data, secure cloud, reliable pipelines and modern applications are
            the prerequisites for AI that works. Because we build those too, our AI
            work doesn&rsquo;t stop at the demo. It lands in production, on
            infrastructure we understand.
          </p>
          <a
            href="/solutions"
            className="ys-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '14.5px',
              fontWeight: 600,
            }}
          >
            See IT services
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </motion.div>
      </PageSection>

      {/* ── 7. Guardrails ── */}
      <PageSection tone="white" eyebrow="Guardrails" title={'What we won\u2019t do with AI.'}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '20px' }}
        >
          {GUARDRAILS.map((rail) => (
            <motion.div
              key={rail.title}
              variants={fadeUp}
              className="ys-card-light"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontSize: '16.5px',
                  fontWeight: 700,
                  letterSpacing: '-0.018em',
                  lineHeight: 1.3,
                  color: 'var(--ys-ink)',
                  marginBottom: '10px',
                  textWrap: 'pretty',
                }}
              >
                {rail.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--ys-ink-body)',
                  maxWidth: '62ch',
                }}
              >
                {rail.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'clamp(24px, 3vw, 32px)' }}
        >
          <a
            href="/responsible-ai"
            className="ys-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '14.5px',
              fontWeight: 600,
            }}
          >
            Read our responsible AI approach
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </motion.div>
      </PageSection>

      {/* ── 8. Closing call to action ── */}
      <PageCTA
        title="Have a pilot that stalled, or a process you think AI could fix?"
        body="Describe it in a few lines. A founder replies within one working day with an honest view on whether AI is the right answer."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}

export default AppliedAIContent
