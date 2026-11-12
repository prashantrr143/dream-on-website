import type { Article } from '../types'

/**
 * Published 2026-11-13. Companion to "Kill switches, approvals and audit
 * logs": the same controls, written for bank risk, compliance and model risk
 * teams who have to answer supervisors.
 *
 * Sources: SR 26-2 and OCC Bulletin 2026-13 / NR 2026-29 (17 Apr 2026);
 * Reuters reporting of 13 Oct 2026 via BERI and ComplexDiscovery; OCC
 * Bulletin 2026-54 (4 Nov 2026) as summarized by King & Spalding (9 Nov) and
 * Ballard Spahr via Legal 500 (we could not retrieve the bulletin text
 * directly, so quotations from it are as those firms reported them); the
 * OCC Spring 2026 Semiannual Risk Perspective; Vice Chair Bowman's April 27, 2026
 * remarks as reported by Law360; Treasury / CRI FS AI RMF (19 Feb 2026);
 * FSB Sound Practices final report (15 Oct 2026); the interagency proposed
 * third-party risk management guidance (OCC Bulletin 2026-46, 11 Sep 2026;
 * comments due 16 Nov 2026 per the Federal Register notice). Not legal advice.
 */
export const article: Article = {
  slug: 'sr-26-2-ai-agents-bank-supervisors',
  title: 'Your regulator is asking how you’d shut down your AI agents. SR 26-2 won’t help you answer.',
  seoTitle: 'SR 26-2 and AI agents: what bank examiners now ask',
  summary:
    'SR 26-2 left agentic AI out of scope, yet examiners now ask banks how they limit, audit and stop AI agents. What they want to see, and how to answer.',
  category: 'Financial services',
  readTime: '14 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-13',
  reviewedAt: '2026-11-13',
  tags: {
    industries: ['financial-services'],
    services: ['ai-governance', 'agentic-automation', 'applied-ai'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'In April 2026 the Federal Reserve, the OCC and the FDIC rewrote their model risk guidance for the first time in fifteen years, and left AI agents out of it on purpose. Six months later, on October 13, Reuters reported that the same three agencies were asking banks of every size, in writing and in conversation, how they limit, audit and shut down those agents.',
        'So most banks now face a familiar exam question without the familiar document to answer it from. Model risk teams know how to defend a credit model under SR 11-7 and its successor. Fewer know what “good” looks like for an agent that reads a customer email, looks up an account and drafts a payment, because no interagency guidance says.',
        'There is more to work with than the gap suggests. On November 4 the OCC gave its examiners a framework for reviewing bank AI, agentic systems included. Treasury, the FSB and NIST have all published material that fits the same shape. This article sets out what changed, what supervisors are asking, what still applies to your agents, and how to build answers that will stand up in an exam, scaled to the size of your bank. It is written for chief risk officers, heads of model risk and compliance, CIOs and internal audit. It is not legal advice.',
      ],
    },
    {
      heading: 'What SR 26-2 changed, and what it left out',
      paragraphs: [
        'On April 17, 2026, the agencies issued revised model risk guidance: SR 26-2 from the Federal Reserve, Bulletin 2026-13 from the OCC and FIL-15-2026 from the FDIC. It replaces SR 11-7 from 2011 and the 2021 interagency statement on BSA/AML models, and the OCC withdrew its model risk handbook booklet and older bulletins with it.',
        'Three changes matter most. The guidance is now explicitly principles-based: in the OCC’s words it “does not set forth enforceable standards or prescriptive requirements, and non-compliance will not result in supervisory criticism.” The definition of a model is narrower and leaves out, among other things, simple spreadsheet arithmetic and deterministic rule-based software. And the Federal Reserve says the letter is “expected to be most relevant to banking organizations with over $30 billion in total assets,” and the OCC adds that it may also matter to smaller institutions with significant model risk.',
        'Then there is the sentence that matters for this article. The OCC’s release states that “generative AI and agentic AI models are novel and rapidly evolving. As such, they are not within the scope of this guidance.” The agencies said they would issue a request for information on model risk management and banks’ use of AI “in the near future.”',
        'Ten days later, Federal Reserve Vice Chair for Supervision Michelle Bowman explained the thinking at a Financial Stability Oversight Council roundtable: the revised guidance applies to traditional models and basic AI, not to generative or agentic AI, and “going forward, we expect other risk-management and governance practices to support adoption of generative and agentic AI.”',
        'Notice what that leaves uncovered. The agent itself is out of scope as generative or agentic AI. Most of the tools it calls, such as a payments API or a case management system, are deterministic software and outside the narrower model definition too. Only the occasional statistical model the agent consults, like a fraud score, still sits squarely in model risk management. The thing an examiner actually worries about, an autonomous system taking actions across several of those components, belongs to no single guidance document.',
      ],
    },
    {
      heading: 'What supervisors are asking',
      paragraphs: [
        'According to the Reuters report, citing people familiar with the matter, supervisors are putting these questions to large, mid-size and smaller banks:',
      ],
      bullets: [
        'Do you use Chinese-developed technology?',
        'Do you use AI agents in cyber defense, to identify, prioritize or respond to threats?',
        'What limits apply to your systems, and how are their actions monitored and approved?',
        'Can you track and audit the decisions your AI agents make?',
        'What safeguards stop an agent from exceeding its authority?',
        'Do humans stay involved in key decisions?',
        'How would you shut down autonomous systems?',
      ],
    },
    {
      paragraphs: [
        'The agencies declined to comment, and the people Reuters spoke to described the effort as information gathering rather than new expectations. That is a reason to take it seriously, not to relax. Answers given now become the baseline that later guidance, and later exams, are measured against. Reuters had already reported in June that AI had become a standing topic in routine OCC and Federal Reserve exams, with examiners asking about technical limits, human review and whether kill switches exist.',
      ],
    },
    {
      heading: 'The OCC’s new examiner framework',
      paragraphs: [
        'On November 4, 2026, the OCC issued Bulletin 2026-54, which introduces a supervisory framework for bank use of what the agency, following the administration’s terminology, calls “super intelligence”: AI, explicitly including agentic AI, in credit decisioning, payments, fraud detection, customer service, operations, risk management and market activities.',
        'Be precise about its status. It is a tool for examiners, not a rule for banks. The bulletin says it “does not establish supervisory expectations for banks,” it creates no separate AI risk category or required AI risk appetite, and the OCC does not intend banks to use it to assess their own programs. It is also, in the OCC’s words, a living document that will be updated.',
        'Read it anyway. As King & Spalding put it, examiners will use it to scope reviews and request documents, so it tells you what the conversation will cover. Based on the law firm summaries we have reviewed, the points that matter most for agents are these:',
      ],
      bullets: [
        'Six pillars structure the review: Purpose (what the system is authorized to do), Risk, Control, Oversight, Resilience and Assurance.',
        'Scrutiny follows consequences, not sophistication. A simple rules-based agent that can initiate transactions may pose more risk than an advanced model that only drafts internal documents.',
        'An illustrative four-tier scale runs from Tier 1, Critical, such as autonomous payment agents and real-time credit decisioning, to Tier 4, Low, such as internal productivity tools without customer data.',
        'A system operating outside its approved purpose can be treated as a control failure, even if its output looks reasonable.',
        'Agents’ identities and permissions should be managed with the same care as privileged human users.',
        'Human oversight is either in the loop (approving before action) or on the loop (monitoring with the practical ability to intervene). Either way the reviewer needs expertise, authority and time; a nominal approval that amounts to clicking a button may not count.',
        'Resilience covers misbehavior, not just outages: transaction limits, narrow permissions, circuit breakers, a kill switch, tested fallback processes, and a way to find and fix customers affected by AI errors.',
        'Documentation should let a third party reconstruct a material AI decision, and internal audit should be independent of both the builders and the validators.',
        'Vendor and fintech agents are in scope: how far a provider’s agents can reach into bank systems and data, whether the bank can see and stop them, and whether contracts allocate responsibility for errors.',
      ],
    },
    {
      paragraphs: [
        'The framework is the OCC’s. We have not found an equivalent examiner framework from the Federal Reserve or the FDIC as of November 12, but their examiners are asking the same seven questions, and a state member or FDIC-supervised bank that can answer the OCC’s framework will be well placed with its own supervisor.',
      ],
    },
    {
      heading: 'What still applies to your agents',
      paragraphs: [
        'Being outside SR 26-2 does not make an agent unregulated. It means the obligations arrive through the rules that already govern what the agent does. Using AI does not change a bank’s underlying legal obligations. Run each agent through these before you think about AI-specific frameworks.',
      ],
      bullets: [
        'The activity’s own rules: BSA/AML and sanctions screening for an alert-triage agent; fair lending and adverse action notices for anything near credit; UDAAP for a chatbot that quotes fees or account status.',
        'Information security: your obligations to protect customer information apply to the data an agent reads, the systems it reaches and the logs it leaves.',
        'Third-party risk management: most agents run on a vendor’s model, and many arrive as features inside products you already license. The 2023 interagency guidance still applies, and the agencies proposed a shorter, principles-based replacement on September 11, 2026, with comments due on November 16.',
        'Operational resilience and incident response: an agent failure is an operational event and belongs in the same runbooks, testing and reporting.',
      ],
    },
    {
      paragraphs: [
        'Three published frameworks then fill in the AI-specific detail, and they agree with each other more than they differ:',
      ],
      bullets: [
        'The Financial Services AI Risk Management Framework, released by Treasury with the Cyber Risk Institute and the Financial Services Sector Coordinating Council on February 19, 2026. It turns the NIST AI RMF into 230 control objectives, scoped by adoption stage: 21 at the initial stage, 126 at minimal, 193 at evolving and all 230 at embedded. It is the closest thing US banks have to an AI control catalog written for them.',
        'The FSB’s Sound Practices for Responsible Adoption of AI, finalized on October 15, 2026: twelve non-binding practices that tell institutions to limit what agents can do, set triggers for human approval, require human approval before transactions above a set value, and test mechanisms that stop agents safely.',
        'The NIST AI RMF, which both of the above build on, and which most auditors already recognize.',
      ],
    },
    {
      heading: 'Model risk, or something else? Decide where each system lives',
      paragraphs: [
        'The first decision is organizational, and examiners will ask about it. For each generative or agentic system, decide whether it stays inside your model risk management program or is governed by a parallel set of controls, and write down why.',
        'A workable rule is to split the agent along its seams. Statistical models the agent consults, such as a fraud score or a credit model, stay in model risk management and keep their validation. The agent as a whole, meaning its model, instructions, tools and permissions, is governed as an AI system under your AI governance policy, with an accountable business owner, operational risk oversight and controls designed for non-deterministic behavior: repeated sampling in testing, adversarial and red-team testing, and monitoring for drift in production. The tools it calls are governed as the software they are, through change management and access control.',
        'Whatever split you choose, apply it consistently and record it in the inventory. An examiner is less likely to object to your boundary than to discover that nobody drew one.',
      ],
    },
    {
      heading: 'Building the answer pack',
      paragraphs: [
        'The practical goal is to answer each of the seven questions with evidence rather than a description. Here is what each answer should rest on.',
      ],
      bullets: [
        'Chinese-developed technology: a provenance register for every model and AI component, including vendor-embedded features, recording the developer, where weights came from for open-weight models, any fine-tuning lineage, and where inference runs.',
        'Agents in cyber defense: inventory entries for security agents, with their permissions, what they may do on their own (for example, isolate a host) and who is watching them.',
        'Limits, monitoring and approval: a tier for each agent and each action, written permitted-use boundaries, transaction and volume limits, and the approval design for consequential actions.',
        'Tracking and auditing decisions: an append-only audit trail that records each action, the rule that allowed it and any approval, plus evidence that someone outside the build team can reconstruct a decision from it.',
        'Safeguards against exceeding authority: a separate identity per agent, least-privilege access, a policy enforcement point that denies by default, and alerts when an agent attempts something outside its purpose.',
        'Humans in key decisions: the oversight design for each tier, the reviewers’ qualifications and authority, their workload, and override logs that show reviews are real rather than nominal.',
        'Shutting down: kill switches at several scopes, the fallback process the business uses while an agent is off, a customer remediation process, and dated records of stop drills with the time each switch took to work.',
      ],
    },
    {
      paragraphs: [
        'The easiest way to keep all of that current is to make it one record per agent in your AI inventory, so the answer pack is a report rather than a project. The example below is illustrative; the format is ours.',
      ],
      code: {
        lang: 'yaml',
        caption: 'Illustrative inventory record for one agent. Each field answers part of a supervisory question.',
        text: `agent: payments-exception-assistant
owner: Head of Payment Operations          # accountable business owner
purpose: >
  Investigate failed outbound wires and prepare repair instructions.
  May not release, cancel or create payments.
risk_tier: 2                               # OCC illustrative scale: High
governed_under: ai-governance-policy   # the fraud score it calls stays in MRM
models:
  - provider: Anthropic                    # provenance register
    model: claude-sonnet-5
    hosting: bank's own cloud tenant, us-east
    open_weight_origin: n/a
tools:
  - core.lookup_wire            # read
  - case.add_note               # reversible write
  - payments.prepare_repair     # tier 2: second-person approval required
identity: svc-agent-pexa   # own identity; on-behalf-of tokens, 5-min TTL
limits: { repairs_per_hour: 40, max_amount_usd: 250000 }
oversight: human-in-the-loop for repairs; on-the-loop for investigation
kill_switches: [stop_run, pause_agent, disable_tool, read_only, revoke_identity]
fallback: manual repair queue (runbook PO-114)
last_stop_drill: 2026-10-28   time_to_halt_seconds: 9
last_reconstruction_test: 2026-10-30   result: pass
vendor_contract: AI change notice 30d; audit rights; incident notice 24h`,
      },
    },
    {
      heading: 'Tiering: borrow the OCC’s scale',
      paragraphs: [
        'You do not have to invent a risk scale. The OCC’s illustrative tiers rest on the factors examiners will use anyway: consequences, reversibility, customer and financial impact, autonomy and data sensitivity. Adopting them makes your inventory easy for an examiner to read. A reasonable mapping of controls to tiers looks like this:',
      ],
      bullets: [
        'Tier 1, Critical (acts directly, limited reversibility, significant consequences): no autonomous execution without hard limits; per-action approval or dual authorization above thresholds; a kill switch tested at least quarterly; independent validation and red-team testing before launch and after material changes; board-level reporting.',
        'Tier 2, High (acts with human monitoring, or significantly shapes decisions): approval for consequential actions, sampled post-action review, monitoring for drift, annual independent review.',
        'Tier 3, Moderate (decision support with mandatory human review): documented review standard, reviewer training, periodic quality sampling.',
        'Tier 4, Low (internal productivity, no customer data, no direct action): inventory entry, acceptable-use policy, vendor terms checked.',
      ],
    },
    {
      paragraphs: [
        'The tier belongs to the use, not the technology. The same model can run a Tier 4 drafting assistant and a Tier 1 payment agent, and the controls should differ accordingly.',
      ],
    },
    {
      heading: 'Vendors: the agents you did not build',
      paragraphs: [
        'For most community and mid-size banks, the first agents in production will not be their own. They will arrive as features in core banking, fraud, customer service and loan origination products, sometimes switched on in an upgrade. Both the OCC framework and the FSB’s practices put these squarely in scope.',
        'Start by finding them: ask every material vendor, in writing, which AI features are in the product, which are on by default, what those features can do inside your environment, and which model and provider they use. Then fix the contract at the next renewal, or sooner for anything acting on customer accounts.',
      ],
      bullets: [
        'Advance notice before the vendor adds or materially changes AI features, with the right to keep them off.',
        'Limits on what the vendor’s agents may access and do in your systems, and logs you can see.',
        'An agreed definition of an AI incident, with notification times.',
        'Audit and testing rights over AI behavior, not only over security controls.',
        'Allocation of liability for AI errors and resulting customer harm.',
        'The ability to suspend the AI features without terminating the whole service.',
      ],
    },
    {
      paragraphs: [
        'If you have views on how the new third-party guidance should treat AI, the comment period on the September proposal closes on November 16, 2026.',
      ],
    },
    {
      heading: 'Sized to your bank',
      paragraphs: [
        'Proportionality runs through all of this. SR 26-2, the OCC framework, the third-party proposal and the FSB practices each say expectations should scale with size, complexity and risk profile, and the Federal Reserve has proposed a separate guide for community banks under $30 billion on third-party risk. In practice:',
      ],
      bullets: [
        'A community bank, say $1–10 billion in assets, with mostly vendor AI: a complete inventory including vendor features, tiers, vendor answers on provenance and controls, contract fixes, a documented fallback for each Tier 1 or 2 feature, and evidence you can switch features off. Use the FS AI RMF’s initial-stage objectives as the checklist.',
        'A regional bank, $10–100 billion, building a few agents of its own: everything above, plus your own identity and policy enforcement around in-house agents, an audit trail you control, stop drills, and independent review of Tier 1 and 2 agents.',
        'A large bank over $100 billion: a full program with independent validation adapted for non-deterministic systems, internal audit coverage independent of build and validation teams, red teaming, board reporting on material use cases and incidents, and AI risk appetite statements if you choose to set them.',
      ],
    },
    {
      heading: 'When the request for information arrives',
      paragraphs: [
        'The agencies promised a request for information on model risk management and AI in April. As of November 9 it had not appeared in the Federal Register. When it does, it will be the main chance to shape what US guidance on agentic AI says, and the institutions with working programs will make the most persuasive comments.',
        'Points worth preparing now: a workable definition of an agent; proportionality for banks that only consume vendor AI; how validation should work for non-deterministic models and third-party foundation models; what a reasonable shutdown expectation looks like in practice; and how far a bank can rely on a vendor’s testing. The OCC has also invited feedback on its framework as a living document.',
      ],
    },
    {
      heading: 'A 90-day plan',
      paragraphs: [
        'If your next exam is in the first half of 2027, this is enough time to have evidence rather than intentions:',
      ],
      bullets: [
        'Days 1–30: build the inventory, including vendor-embedded features; assign tiers; send the vendor questionnaire; decide and document the model risk versus AI governance boundary.',
        'Days 31–60: give each in-house agent its own identity and route its actions through one enforcement point; write permitted-use boundaries; design approvals for Tier 1 and 2 actions; start the audit trail.',
        'Days 61–90: run the first stop drill and reconstruction test; write fallback and customer remediation procedures; brief the board with a one-page summary of material use cases, tiers and test results; file the evidence where examiners can be shown it.',
      ],
    },
    {
      paragraphs: [
        'For the engineering detail behind the stop, approval and audit controls described here, see our reference design for kill switches, approvals and audit logs. It is written for the teams who will build what this article asks risk and compliance to evidence.',
      ],
    },
  ],
  faq: [
    {
      q: 'Does SR 26-2 apply to generative AI and AI agents?',
      a: 'No. The revised model risk guidance issued on April 17, 2026, states that generative AI and agentic AI models are novel and rapidly evolving and are not within its scope. Statistical models an agent consults can still fall under model risk management.',
    },
    {
      q: 'What are bank supervisors asking about AI agents?',
      a: 'Reuters reported in October 2026 that the Federal Reserve, OCC and FDIC were asking whether banks use Chinese-developed technology and AI agents in cyber defense, what limits apply, how actions are approved and monitored, whether agent decisions can be tracked and audited, what stops an agent exceeding its authority, whether humans stay involved in key decisions, and how the bank would shut autonomous systems down.',
    },
    {
      q: 'What is OCC Bulletin 2026-54?',
      a: 'An examiner framework issued on November 4, 2026, for reviewing bank use of AI, including agentic AI. It does not establish supervisory expectations for banks, but examiners will use it to scope reviews. It is organized around six pillars: Purpose, Risk, Control, Oversight, Resilience and Assurance.',
    },
    {
      q: 'Is there a US framework banks can use for AI controls now?',
      a: 'Yes. The Financial Services AI Risk Management Framework, released by Treasury with the Cyber Risk Institute in February 2026, sets out 230 control objectives aligned with the NIST AI RMF and scoped by adoption stage. The FSB’s October 2026 sound practices add specific expectations for agents.',
    },
    {
      q: 'Has the interagency request for information on AI been issued?',
      a: 'Not as of November 9, 2026. The agencies said in April 2026 that they plan to issue one on model risk management and banks’ use of AI, including generative and agentic AI.',
    },
    {
      q: 'Do community banks need an AI agent program?',
      a: 'A proportionate one. Most community banks will meet AI agents first as vendor features, so the priorities are a complete inventory, vendor answers on provenance and controls, contract terms that allow AI features to be switched off, and a tested fallback for anything acting on customer accounts.',
    },
  ],
  sources: [
    {
      title: 'SR 26-2: Revised Guidance on Model Risk Management',
      url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      publisher: 'Board of Governors of the Federal Reserve System',
    },
    {
      title: 'OCC issues updated model risk management guidance (NR 2026-29, Bulletin 2026-13)',
      url: 'https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html',
      publisher: 'Office of the Comptroller of the Currency',
    },
    {
      title: 'Fed, OCC and FDIC ask banks how they would shut down AI agents',
      url: 'https://www.beri.net/article/fed-occ-fdic-bank-ai-agent-supervisory-questions-shutdown-audit-trail-chinese-models-sr-26-2-gap',
      publisher: 'BERI (reporting Reuters, 13 Oct 2026)',
    },
    {
      title: 'US bank regulators ask whether lenders can stop their AI agents',
      url: 'https://complexdiscovery.com/us-bank-regulators-ask-whether-lenders-can-stop-their-ai-agents/',
      publisher: 'ComplexDiscovery',
    },
    {
      title: 'U.S. bank regulators scrutinize AI use in routine bank exams',
      url: 'https://finance.yahoo.com/economy/policy/articles/u-bank-regulators-scrutinize-ai-130728511.html',
      publisher: 'Quartz via Yahoo Finance (citing Reuters)',
    },
    {
      title: 'The OCC issues examiner framework for bank use of AI: what OCC Bulletin 2026-54 means',
      url: 'https://www.kslaw.com/insights/articles/the-occ-issues-examiner-framework-for-bank-use-of-ai',
      publisher: 'King & Spalding',
    },
    {
      title: 'OCC issues supervisory framework for banks’ use of “super intelligence”',
      url: 'https://www.legal500.com/intelligence/united-states/finance-and-banking/occ-issues-supervisory-framework-for-banks-use-of-super-intelligence-a-risk-based-approach-to-generative-and-agentic-ai',
      publisher: 'Legal 500 (Ballard Spahr)',
    },
    {
      title: 'Semiannual Risk Perspective, Spring 2026',
      url: 'https://www.occ.treas.gov/publications-and-resources/publications/semiannual-risk-perspective/files/pub-semiannual-risk-perspective-spring-2026.pdf',
      publisher: 'Office of the Comptroller of the Currency',
    },
    {
      title: 'Remarks by Vice Chair for Supervision Michelle W. Bowman (delivered April 27, 2026)',
      url: 'https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm',
      publisher: 'Board of Governors of the Federal Reserve System',
    },
    {
      title: 'US Treasury releases new AI risk management resources for financial institutions',
      url: 'https://finsights.cooley.com/us-treasury-releases-new-ai-risk-management-resources-for-financial-institutions/',
      publisher: 'Cooley',
    },
    {
      title: 'Navigating the Cyber Risk Institute’s Financial Services AI Risk Management Framework',
      url: 'https://schneiderdowns.com/our-thoughts-on/navigating-the-cyber-risk-institutes-financial-services-ai-risk-management-framework-what-financial-institutions-should-know/',
      publisher: 'Schneider Downs',
    },
    {
      title: 'FSB finalises sound practices for the responsible adoption of artificial intelligence',
      url: 'https://fsb.org/2026/10/fsb-finalises-sound-practices-for-the-responsible-adoption-of-artificial-intelligence-ai',
      publisher: 'Financial Stability Board',
    },
    {
      title: 'Third-Party Risk Management: Proposed Guidance and Request for Comment (Bulletin 2026-46)',
      url: 'https://occ.gov/news-issuances/bulletins/2026/bulletin-2026-46.html',
      publisher: 'Office of the Comptroller of the Currency',
    },
    {
      title: 'Proposed Third-Party Risk Management Guidance (Federal Register notice)',
      url: 'https://www.occ.treas.gov/news-issuances/federal-register/2026/91fr58536.pdf',
      publisher: 'OCC, Federal Reserve, FDIC, NCUA',
    },
  ],
  related: [
    { label: 'Kill switches, approvals and audit logs', href: '/insights/ai-agent-kill-switches-approvals-audit-logs' },
    { label: 'KYC automation without black boxes', href: '/insights/kyc-automation-without-black-boxes' },
    { label: 'AI for financial services', href: '/what-we-do/industries/financial-services' },
  ],
}
