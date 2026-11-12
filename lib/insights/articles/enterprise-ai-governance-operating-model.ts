import type { Article } from '../types'

/**
 * Published 2026-11-13. Pillar guide for the AI governance service page:
 * enterprise AI governance as an operating model, from the board to the
 * control plane. Links out to the agent-specific pieces (kill switches,
 * SR 26-2, MCP governance) rather than repeating them.
 *
 * Figures and dates are from the sources listed: EY AI Risk and Governance
 * Survey (15 Sep 2026); ISACA 2026 AI Pulse Poll; IANS (Aug 2026); ISS
 * (3 Mar 2026); EY Center for Board Matters (2026 proxy season); BSI (50th
 * ISO/IEC 42001 certificate, 21 Oct 2026); NIST AI RMF page; Regulation
 * (EU) 2026/1744 as summarized by White & Case and Bristows; Colorado SB
 * 26-189 (McDermott); California CPPA ADMT regulations (Wilson Elser,
 * compliancehub); Executive Order of 11 Dec 2025 (Paul Hastings, Ropes &
 * Gray). Not legal advice.
 */
export const article: Article = {
  slug: 'enterprise-ai-governance-operating-model',
  title: 'Enterprise AI governance: the operating model, controls and evidence that hold up',
  seoTitle: 'Enterprise AI governance: operating model and controls',
  summary:
    'A practical guide to enterprise AI governance: who decides, the inventory, risk tiers, lifecycle gates, vendor AI, controls, assurance and board reporting.',
  category: 'Security & Compliance',
  readTime: '17 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-13',
  reviewedAt: '2026-11-13',
  tags: {
    industries: ['financial-services', 'legal-professional-services', 'software-saas'],
    services: ['ai-governance', 'applied-ai', 'agentic-automation'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Almost every large organization now has an AI policy. Far fewer have AI governance. In EY’s September 2026 survey of senior AI decision-makers at large US public companies, 98% said they had an AI governance policy in place, and 47% admitted bypassing it for urgent deployments. A policy that half the business routes around when it matters is a document, not a control.',
        'The gap shows up everywhere you look. When ISS reviewed the proxy disclosures of 3,048 US companies earlier this year, only 245 (8%) disclosed board-level oversight of AI. IANS found that 60% of organizations keep a register of approved AI tools, but only 23% periodically audit or recertify it. Meanwhile customers, regulators and auditors have moved from asking whether you have a policy to asking you to show how it works.',
        'This guide is about closing that gap from an enterprise point of view. It treats AI governance as an operating model, not an ethics statement: the decisions it has to make, the people who make them, the inventory and risk tiers that drive those decisions, the controls that enforce them, and the evidence that proves it all works. It is written for the people who have to build and run it: chief risk, compliance, information security, data and technology officers, general counsel and internal audit. It is not legal advice.',
      ],
    },
    {
      heading: 'Part one: what governance has to do',
      paragraphs: [],
    },
    {
      heading: '1. Four jobs, not one',
      paragraphs: [
        'Strip away the frameworks and enterprise AI governance does four jobs. Each one fails in a recognizable way when it is missing.',
      ],
      bullets: [
        'Decide: which uses of AI the organization will accept, under what conditions, and who has the authority to say yes. Without it, decisions are made by whoever signs the purchase order.',
        'Constrain: put controls around approved uses so they stay within what was approved, in data, actions, autonomy and cost. Without it, approvals describe intentions that the systems do not enforce.',
        'Know: maintain a current picture of where AI is used, how it is performing and what has gone wrong. Without it, you find out about your AI from a customer complaint or a regulator.',
        'Prove: produce evidence, on demand, that the first three jobs are being done. Without it, every audit, customer questionnaire and exam becomes a project.',
      ],
    },
    {
      paragraphs: [
        'There is a fifth outcome worth naming, because it is how governance earns its budget: speed. Most stalled AI pilots stall at the same point, when someone asks who approved this, what data it touches and how to turn it off. A governance program that answers those questions early is what lets projects reach production. One that answers them late, or only says no, is what drives teams to bypass it.',
      ],
    },
    {
      heading: '2. The rules you are actually held to',
      paragraphs: [
        'The regulatory picture is busy but not as chaotic as it looks. The useful move is to separate the obligations that bind you now from the ones that are coming, and to build one control set that you map to all of them.',
      ],
      bullets: [
        'EU AI Act, as amended by the Digital Omnibus (Regulation (EU) 2026/1744, in force since July 27, 2026): prohibited practices and AI literacy have applied since February 2025, though the literacy duty is now to take measures to support it rather than to ensure a sufficient level; general-purpose model obligations since August 2025; transparency obligations since August 2026, with machine-readable marking for generative systems already on the market from December 2, 2026; high-risk obligations from December 2, 2027, for Annex III uses such as credit scoring and employment, and August 2, 2028, for AI in regulated products.',
        'United States, federal: there is still no general AI statute. An executive order of December 11, 2025, set out a policy of a national framework and created a Justice Department task force to challenge state AI laws, but an executive order cannot by itself preempt state law, so state laws remain enforceable unless courts or Congress say otherwise. Sector regulators continue to apply existing law: for banks, see our article on SR 26-2 and AI agents.',
        'United States, states: Colorado repealed and replaced its 2024 AI Act with SB 26-189, a narrower law on automated decision-making that takes effect on January 1, 2027. California’s rules on automated decision-making technology under the CCPA also become operative on January 1, 2027, with risk assessments for 2026 and 2027 activity to be submitted to the California Privacy Protection Agency by April 1, 2028.',
        'Standards and frameworks: the NIST AI RMF 1.0 remains the current US reference (NIST says it is being revised, with no successor published), with its Generative AI Profile. ISO/IEC 42001 is the certifiable AI management system standard, ISO/IEC 42005 covers AI impact assessments, and ISO/IEC 42006 sets the rules for the bodies that certify against 42001.',
        'Contracts: for many companies the most immediate obligations arrive through customers. Enterprise buyers now ask about AI in security questionnaires, request evidence of an AI management system and write AI terms into contracts.',
      ],
    },
    {
      paragraphs: [
        'Build your controls once, around the substance these regimes share: an inventory, risk-based classification, impact assessment for consequential uses, human oversight, logging, testing, transparency to affected people, vendor oversight and incident handling. Then keep a mapping from each control to each regime you are subject to. When a deadline moves, as several have this year, you update the mapping rather than the program.',
      ],
    },
    {
      heading: 'Part two: the operating model',
      paragraphs: [],
    },
    {
      heading: '3. Who decides',
      paragraphs: [
        'Governance fails most often on accountability, not on frameworks. Somebody has to own the program, somebody has to own each use, and the board has to be able to see both. A workable structure for most enterprises has five parts.',
      ],
      bullets: [
        'The board, or a committee of it, oversees AI as part of strategy and risk. Most companies give this to an existing committee, usually audit or risk. EY found that 17% of S&P 500 boards now have a technology committee, and that 37% of S&P 500 companies cited AI experience for at least one director in 2026, up from 11% in 2022.',
        'One accountable executive owns the program. The title matters less than the authority: a chief AI officer, chief risk officer, chief data officer or CIO can all work, provided the role can stop a deployment and has a budget.',
        'A cross-functional AI governance council approves policy, sets risk appetite and decides the cases the policy does not settle. It needs legal, privacy, information security, risk and compliance, data, technology and the business units that use AI most. Keep it small enough to make decisions.',
        'Use-case owners in the business are accountable for each AI use: its purpose, its performance and its outcomes. System owners in technology are accountable for how it is built and run.',
        'The three lines of defense apply as they do for any other risk: the business and technology teams own and operate controls, risk and compliance set standards and challenge, and internal audit provides independent assurance, independent of both the builders and the reviewers.',
      ],
    },
    {
      heading: '4. A policy stack people can follow',
      paragraphs: [
        'The most common policy mistake is a single long document that tries to be principles, rules and procedures at once. Nobody reads it, so nobody follows it. Split it by audience instead, and keep each part short.',
      ],
      bullets: [
        'An AI policy, three to five pages, approved by the board or executive committee: scope, principles, roles, risk appetite and the requirement to follow the standards below.',
        'An acceptable-use standard for all staff: which AI tools are approved, what data may go into them, what must be checked before use, and what is forbidden. One page is better than ten.',
        'An AI risk standard for the people who approve uses: how to classify a use, which controls each tier requires, and who signs off.',
        'A procurement standard: what to ask vendors and what to put in contracts, including for AI features added to software you already license.',
        'A development and lifecycle standard for teams building AI: testing, documentation, monitoring and change control.',
        'An incident procedure, folded into your existing incident management rather than separate from it.',
      ],
    },
    {
      paragraphs: [
        'Write each standard so a control can be tested against it. “AI outputs must be reviewed before use” cannot be audited. “Tier 1 outputs are approved by a named reviewer before release, and the approval is logged” can.',
      ],
    },
    {
      heading: '5. The inventory is the program',
      paragraphs: [
        'Every framework starts with an inventory for a reason: you cannot classify, control, monitor or report on AI you do not know about. In most enterprises the inventory is also where governance quietly fails, because it is built once for a project and never maintained.',
        'Count four kinds of AI, not one. Systems you build. Systems you buy. AI features embedded in products you already use, which vendors increasingly switch on in upgrades. And general-purpose tools employees use directly, including agents and assistants that connect to company data. The last two are where shadow AI lives.',
        'Find them from several directions at once: procurement and expense records, single sign-on and SaaS management logs, network egress to known AI services, scans of code repositories for AI SDKs and API keys, vendor questionnaires, and simply asking each business unit. Then keep it current with a short recertification cycle, quarterly for the higher tiers, and make an inventory entry a precondition for funding, access and go-live, so the inventory updates itself.',
      ],
      code: {
        lang: 'yaml',
        caption: 'Illustrative inventory record. The format is ours; the point is that one record carries everything governance needs to decide, control, monitor and prove.',
        text: `id: AI-0142
name: Contract clause extraction
type: built            # built | bought | embedded | employee-tool
business_owner: Head of Commercial Legal
system_owner: Legal Engineering Lead
purpose: Extract renewal, liability and termination clauses for review.
not_permitted: Advising counterparties; changing contract terms.
risk_tier: 2
regulatory_flags: [gdpr-personal-data]      # e.g. eu-high-risk, ccpa-admt
data: [client-confidential, personal-data]
models: [{ provider: Anthropic, model: claude-sonnet-5, region: eu-west }]
autonomy: drafts only; a lawyer approves every output
impact_assessment: IA-2026-031 (approved 2026-09-12)
controls: [gateway-logging, dlp-redaction, human-approval, eval-suite-v4]
monitoring: weekly eval run; error sampling 5% of outputs
last_recertified: 2026-10-30
incidents_12m: 0`,
      },
    },
    {
      heading: '6. Risk tiers that drive controls',
      paragraphs: [
        'Tiering is what makes governance proportionate. Without it, every use gets the same heavy review, which either stalls the low-risk work or waves through the high-risk work. With it, you can promise a fast lane for most requests and spend real effort where it matters.',
        'Classify each use, not each model, on a small number of factors: the consequences for people if it is wrong, especially in decisions about credit, employment, housing, insurance, health or legal rights; whether it only informs a person or acts by itself; whether its effects can be reversed; the sensitivity of the data; whether outputs reach customers or the public; scale; and any legal classification that applies, such as EU high-risk, California’s significant decisions or Colorado’s consequential decisions.',
      ],
      bullets: [
        'Tier 1, critical: consequential decisions about people, or autonomous actions with financial or legal effect. Full impact assessment, independent validation, human approval or tight hard limits, a tested way to stop it, executive sign-off, and reporting to the board.',
        'Tier 2, high: significant decision support, customer-facing outputs, or actions that are reversible but material. Impact assessment, pre-release testing against agreed thresholds, human oversight designed for the volume, monitoring and annual review.',
        'Tier 3, moderate: internal use with confidential data and a person checking outputs. A lightweight assessment, approved tools only, logging and periodic sampling.',
        'Tier 4, low: general productivity with no sensitive data and no direct action. Registration in the inventory and the acceptable-use standard. No committee review.',
      ],
    },
    {
      paragraphs: [
        'Some uses belong in no tier. Decide in advance what the organization will not do with AI, including anything prohibited under the EU AI Act if you operate there, and say so in the policy.',
      ],
    },
    {
      heading: '7. Lifecycle gates, with a fast lane',
      paragraphs: [
        'Governance should meet a use case at a few defined points in its life, not follow it around. A typical sequence is intake, assessment, approval, pre-release testing, go-live sign-off, monitoring, change review and retirement. The tier decides how much happens at each gate and who signs.',
        'Two design choices determine whether teams use the process or route around it. First, the fast lane: tier 3 and 4 requests should be decided in days, by a standard form and a single reviewer, so the process is quicker than the workaround. Second, a clear definition of a material change. AI systems change without a code release, so treat a new model or model version, a changed system prompt, new data sources, new tools or permissions for an agent, a new user population or a change of purpose as triggers for re-review in proportion to the tier.',
        'For tier 1 and 2 uses, the impact assessment is the core artifact. It records the purpose, the people affected, the foreseeable harms, the data, the human oversight design, the test results and the residual risk accepted by a named owner. ISO/IEC 42005 gives a structure for it, and the same document can serve EU, California and Colorado requirements with small additions.',
      ],
    },
    {
      heading: 'Part three: controls and evidence',
      paragraphs: [],
    },
    {
      heading: '8. Most of your AI is bought',
      paragraphs: [
        'For most enterprises, the majority of AI in use was not built in-house. It arrived in a SaaS product, a vendor’s new release or an employee’s browser. That makes procurement and third-party risk management the busiest part of AI governance, and the part most often left to chance.',
        'Ask every material vendor the same questions before you buy and at renewal: what AI the product contains, which features are on by default, which models and providers sit underneath, whether your data is used to train or improve models, where data is processed, how outputs are tested, what is logged and whether you can see it, and how you are told when any of this changes. Then put the answers in the contract.',
      ],
      bullets: [
        'No training on your data without written consent, and clarity on retention.',
        'Data location and the list of sub-processors, including model providers.',
        'Advance notice before AI features are added or materially changed, and the right to keep them switched off.',
        'Access to logs and to testing evidence for features you rely on.',
        'An agreed definition of an AI incident and a notification time.',
        'Allocation of liability for erroneous outputs, and IP indemnity for generated content where it matters.',
      ],
    },
    {
      paragraphs: [
        'Treat a vendor’s ISO/IEC 42001 certificate as a useful signal about its management system, not as evidence that the specific feature you are buying is suitable for your use. You still own the use.',
      ],
    },
    {
      heading: '9. Controls that run, not documents',
      paragraphs: [
        'A policy says what should happen. Controls make it happen whether or not anyone remembers the policy. For AI, the most effective controls sit in a shared technical layer that every approved use passes through, rather than being rebuilt in each project.',
      ],
      bullets: [
        'Identity and access: AI systems and agents get their own identities and only the permissions their approved purpose needs.',
        'Data boundaries: classification-aware rules on what data may reach which model, with redaction or blocking for the most sensitive categories.',
        'An AI gateway in front of model providers: approved models only, consistent logging, cost limits, and one place to switch a model or provider off.',
        'Evaluation: a test set for each tier 1 and 2 use, with thresholds agreed before the build, run before release and after every material change.',
        'Human oversight designed for the volume: reviewers with the information, authority and time to reject an output, and sampling where per-item review is impractical.',
        'Logging and audit trails written by the platform, not by the application about itself, and kept for as long as the business process requires.',
        'Monitoring for drift, error rates, complaints and misuse, with alerts that reach the use-case owner.',
        'A way to stop: the ability to disable a use, a model or an agent quickly, and a fallback process for the business while it is off.',
      ],
    },
    {
      paragraphs: [
        'Shadow AI is best handled with the same two moves. Give people a sanctioned, well-configured tool for the common jobs, so the approved path is the easy one, and use egress and SaaS controls to make unapproved tools visible and, where the data warrants it, blocked. Banning without providing an alternative mostly drives use underground.',
      ],
    },
    {
      heading: '10. Generative AI and agents change the risk',
      paragraphs: [
        'Generative systems and agents do not fit controls designed for traditional models. Their outputs vary from run to run, so one successful test proves little and repeated sampling matters. They can be steered by content they read, which makes prompt injection a governance issue, not only a security one. They change when a vendor updates a model, without any change on your side. And agents act: they call tools, move data and take steps across systems, so the question shifts from whether an output is accurate to whether an action was authorized.',
        'In practice that means adding a few things to the program for these systems: version control for prompts and model identifiers, evaluation suites run on a schedule rather than once, explicit limits on agent permissions and actions, approvals bound to specific consequential actions, and stop mechanisms that sit outside the agent. We cover the engineering in detail in our reference design for kill switches, approvals and audit logs, and the connection layer in our MCP governance guide.',
      ],
    },
    {
      heading: '11. Assurance: proving it works',
      paragraphs: [
        'Assurance is where governance becomes credible to outsiders. Build it in layers, so each one can rely on the one below.',
      ],
      bullets: [
        'Self-assessment by first-line owners against the standard for their tier, on a fixed cycle.',
        'Second-line review by risk and compliance of tier 1 and 2 approvals and of the program as a whole.',
        'Independent validation of tier 1 uses by people who did not build them, adapted for non-deterministic systems: repeated sampling, adversarial testing and red teaming where the stakes justify it.',
        'Internal audit coverage of AI in the annual plan, independent of both the builders and the validators.',
        'External assurance where it pays: ISO/IEC 42001 certification, AI controls included in SOC 2 reports, or independent audits for specific systems.',
      ],
    },
    {
      paragraphs: [
        'ISO/IEC 42001 deserves a clear-eyed view. Certification is still uncommon: there is no official global count, BSI awarded its 50th certificate in October 2026, and industry estimates put worldwide certifications in the hundreds. It is most valuable for companies that sell AI-enabled products to enterprises or into the EU, where buyers increasingly ask for it, and for organizations that already run ISO 27001 and can extend the same management system. For others, aligning to it without certifying is a reasonable first step.',
        'Whichever route you take, keep an evidence register: for each control, the artifact that proves it operated, where it lives and when it was last produced. That register is what turns an audit or a customer questionnaire from a scramble into a report.',
      ],
    },
    {
      heading: '12. Metrics and board reporting',
      paragraphs: [
        'Boards should see a short, consistent view each quarter rather than a long narrative once a year. Choose measures that show whether governance is operating, not how many documents exist.',
      ],
      bullets: [
        'Coverage: AI uses in the inventory, by tier, and the share recertified on time.',
        'Speed: median time from intake to decision, by tier. If this grows, bypasses will follow.',
        'Completeness: tier 1 and 2 uses with a current impact assessment, test results and named owner.',
        'Exceptions: approved deviations from policy and any bypasses found, with their status.',
        'Incidents: AI incidents and near misses, customer impact and remediation.',
        'Shadow AI: unapproved tools detected and the trend over time.',
        'Vendors: material vendors with AI reviewed, and contracts updated with AI terms.',
        'People: completion of role-based AI training for staff, approvers and reviewers.',
      ],
    },
    {
      paragraphs: [
        'Add a short narrative on material new uses, the largest risks accepted and any regulatory developments that change the plan. A board that sees this every quarter can challenge it, which is the point.',
      ],
    },
    {
      heading: 'Part four: getting it done',
      paragraphs: [],
    },
    {
      heading: '13. Right-size it',
      paragraphs: [
        'The program for a 2,000-person regional firm should not look like the program for a global bank, and trying to copy one is a common way to build a bureaucracy that teams avoid. A mid-size organization can run effective governance with a part-time council, one accountable executive, a short policy stack, an inventory in an existing tool, and a shared AI gateway. A large or heavily regulated one will need dedicated staff, independent validation, a formal control library mapped to several regimes and integrated tooling. In both cases, the inventory, tiers, gates and evidence work the same way. Only the depth changes.',
      ],
    },
    {
      heading: '14. A twelve-month roadmap',
      paragraphs: [
        'A realistic first year, building from decisions to evidence:',
      ],
      bullets: [
        'Months 1–3, foundations: name the accountable executive and the council; approve the policy and acceptable-use standard; build the first inventory, including vendor and employee tools; open an intake route with a fast lane for low-risk requests.',
        'Months 4–6, tiers and the riskiest uses: adopt the tiering method; tier the inventory; complete impact assessments for tier 1 and 2 uses; review material vendors and start fixing contracts at renewal; launch role-based training.',
        'Months 7–9, controls that run: put approved uses behind a shared gateway with logging and data rules; set up evaluation suites and monitoring for tier 1 and 2; define material change and wire it into change management; test the ability to stop each tier 1 use.',
        'Months 10–12, assurance and reporting: start quarterly board reporting; run the first internal audit of the program; build the evidence register; decide whether ISO/IEC 42001 certification is worth pursuing, and if so, run a readiness assessment.',
      ],
    },
    {
      heading: 'Six ways programs fail',
      paragraphs: [
        'Most failed governance programs fail in one of a few predictable ways. Each has a simple test you can apply to your own.',
      ],
      bullets: [
        'Policy without inventory. Test: can you list every tier 1 use today, with its owner?',
        'A committee that only says no. Test: what is the median time to a decision for a low-risk request?',
        'Governance after the build. Test: do projects reach the first gate before or after they have spent their budget?',
        'Vendor AI out of scope. Test: do you know which AI features are switched on in your top ten SaaS products?',
        'One-time assessments. Test: what happens to an approval when the model behind it changes?',
        'Measuring documents instead of controls. Test: can you show a log entry, a test result and an approval for your most important AI use, from last week?',
      ],
    },
    {
      paragraphs: [
        'Good AI governance is not a brake. Done well, it is the reason an organization can say yes to AI quickly and with confidence, because it already knows what it is running, what could go wrong and how it would know. That is what boards, customers and regulators are now asking to see.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is enterprise AI governance?',
      a: 'The operating model by which an organization decides which uses of AI it accepts, puts controls around them, keeps track of where AI is used and how it performs, and produces evidence that all of this works. It covers AI the organization builds, buys, finds embedded in vendor products and that employees use directly.',
    },
    {
      q: 'Who should own AI governance?',
      a: 'One accountable executive with the authority to stop a deployment, supported by a small cross-functional council covering legal, privacy, security, risk, data, technology and the main business users. Each AI use also needs a named business owner. The board, usually through an existing committee, oversees the program.',
    },
    {
      q: 'What should an AI inventory include?',
      a: 'Every AI use, whether built, bought, embedded in vendor software or used directly by employees, with its owner, purpose and limits, risk tier, regulatory flags, data, models and providers, level of autonomy, impact assessment, controls, monitoring and the date it was last recertified.',
    },
    {
      q: 'Do we need ISO/IEC 42001 certification?',
      a: 'Not necessarily. Certification is most valuable for companies selling AI-enabled products to enterprises or into the EU, and for those already running ISO 27001. Others can align to the standard without certifying. Certification remains uncommon, with worldwide certificates estimated in the hundreds.',
    },
    {
      q: 'When do the EU AI Act high-risk rules apply?',
      a: 'After the Digital Omnibus, from December 2, 2027, for high-risk uses listed in Annex III, such as credit scoring and employment, and from August 2, 2028, for AI in products covered by EU product safety law. Other parts of the Act, including prohibitions, AI literacy, general-purpose model rules and transparency obligations, already apply.',
    },
    {
      q: 'How do we stop employees using unapproved AI tools?',
      a: 'Provide a sanctioned, well-configured tool for the common tasks so the approved route is the easiest one, publish a short acceptable-use standard, and use network and SaaS controls to detect and, where the data warrants it, block unapproved tools. Bans without an alternative tend to push use out of sight.',
    },
  ],
  sources: [
    {
      title: 'EY survey: autonomous AI implementation outpaces oversight, yielding an AI governance gap',
      url: 'https://www.hpcwire.com/aiwire/2026/09/15/ey-survey-autonomous-ai-implementation-outpaces-oversight-yielding-an-ai-governance-gap/',
      publisher: 'EY US (via AIwire)',
    },
    {
      title: 'AI governance isn’t keeping pace with agentic AI, EY survey finds',
      url: 'https://www.cdomagazine.tech/aiml/ai-governance-isnt-keeping-pace-with-agentic-ai-ey-survey-finds',
      publisher: 'CDO Magazine',
    },
    {
      title: 'Mind the governance gap: the state of board oversight and AI policy in US companies',
      url: 'https://www.iss-stoxx.com/posts/mind-the-governance-gap-the-state-of-board-oversight-and-ai-policy-in-u-s-companies',
      publisher: 'ISS',
    },
    {
      title: 'AI governance is advancing while the attack surface expands',
      url: 'https://www.ians.com/blog/ians-research/ai-governance-is-advancing-while-the-attack-surface-expands',
      publisher: 'IANS Research',
    },
    {
      title: 'Seven questions boards should ask after the 2026 proxy season',
      url: 'https://corpgov.law.harvard.edu/2026/08/25/seven-questions-boards-should-ask-after-the-2026-proxy-season/',
      publisher: 'Harvard Law School Forum on Corporate Governance (EY)',
    },
    {
      title: 'EU AI Omnibus enters into force, amending the AI Act',
      url: 'https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act',
      publisher: 'White & Case',
    },
    {
      title: 'The Digital Omnibus on AI: key changes to the EU AI Act',
      url: 'https://inquisitiveminds.bristows.com/post/102nh7i/the-digital-omnibus-on-ai-key-changes-to-the-eu-ai-act',
      publisher: 'Bristows',
    },
    {
      title: 'Colorado AI bill signed after predecessor’s enforcement blocked',
      url: 'https://www.mcdermottlaw.com/?p=383391',
      publisher: 'McDermott Will & Schulte',
    },
    {
      title: 'California’s ADMT regulations: new compliance obligations and emerging enforcement risk',
      url: 'https://www.wilsonelser.com/publications/californias-admt-regulations-new-compliance-obligations-and-emerging-enforcement-risk',
      publisher: 'Wilson Elser',
    },
    {
      title: 'President Trump signs executive order challenging state AI laws',
      url: 'https://www.paulhastings.com/thought-leadership/president-trump-signs-executive-order-challenging-state-ai-laws',
      publisher: 'Paul Hastings',
    },
    {
      title: 'Examining the landscape and limitations of the federal push to override state AI regulation',
      url: 'https://www.ropesgray.com/en/insights/alerts/2026/03/examining-the-landscape-and-limitations-of-the-federal-push-to-override-state-ai-regulation',
      publisher: 'Ropes & Gray',
    },
    {
      title: 'AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      publisher: 'NIST',
    },
    {
      title: 'BSI awards its 50th ISO/IEC 42001 certificate',
      url: 'https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2026/november/bsi-awards-its-50th-iso-iec-42001-certificate/',
      publisher: 'BSI',
    },
    {
      title: 'ISO/IEC 42006 raises the bar for ISO/IEC 42001 certifiers',
      url: 'https://www.brightdefense.com/?p=21233',
      publisher: 'Bright Defense',
    },
  ],
  related: [
    { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
    { label: 'Kill switches, approvals and audit logs', href: '/insights/ai-agent-kill-switches-approvals-audit-logs' },
    { label: 'Using the NIST AI RMF without a large compliance team', href: '/insights/nist-ai-rmf-for-mid-market-teams' },
  ],
}
