import type { Article } from '../types'

/**
 * Published 2026-11-13. Fourth piece in the agent series, after "Anatomy of
 * MCP", "MCP governance" and "MCP anti-patterns": the controls that let a
 * person stop an agent, approve what matters and prove afterwards what it did.
 *
 * Every figure is from the sources listed: Anthropic's Claude Code auto mode
 * posts (25 Mar 2026 engineering post; 7 Aug 2026 announcement), Palisade
 * Research's shutdown-resistance paper (arXiv 2509.14260), reporting on the
 * Replit (Jul 2025) and Amazon Q Developer 1.84.0 (Jul 2025) incidents, the
 * EU AI Act (Articles 12, 14, 26), OWASP's Agentic Top 10 (Dec 2025) and
 * Agent Control Standard v0.1 (Sep 2026), the OpenTelemetry GenAI semantic
 * conventions, AWS's AgentCore Policy GA notice (3 Mar 2026), and reporting
 * on US bank supervisors' questions about agents (Oct 2026). Code and policy
 * samples are illustrative; the formats are ours.
 */
export const article: Article = {
  slug: 'ai-agent-kill-switches-approvals-audit-logs',
  title: 'Kill switches, approvals and audit logs: a reference design for AI agents',
  seoTitle: 'AI agent kill switches, approvals and audit logs',
  summary:
    'How to stop, approve and audit AI agents in production: where each control sits, what to record, and how to prove to an auditor that it works.',
  category: 'Security & Compliance',
  readTime: '16 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-13',
  reviewedAt: '2026-11-13',
  tags: {
    industries: ['financial-services', 'legal-professional-services', 'software-saas'],
    services: ['applied-ai', 'agentic-automation', 'ai-governance', 'claude'],
    clouds: [],
  },
  sections: [
    {
      paragraphs: [
        'Every serious conversation about putting an AI agent into production arrives at the same three questions. Can you stop it? Who approved what it did? Can you show, afterwards, exactly what happened? In October 2026 US bank supervisors started asking them in writing: Reuters reported that the Federal Reserve, the OCC and the FDIC were asking banks how they limit, audit and shut down AI agents, six months after the same agencies left generative and agentic AI out of their revised model risk guidance, SR 26-2.',
        'The questions are easy to ask and harder to answer well, because the obvious answers do not survive contact with a real agent. A stop instruction in the prompt is a request, not a control. A confirmation dialog that appears forty times a session stops being read. A log written by the agent about itself is testimony, not evidence.',
        'This is the design we use instead. It is vendor-neutral and works whether your agents speak MCP, call functions directly or run inside a platform such as Bedrock AgentCore or Microsoft Foundry. It has four parts: stopping an agent, deciding what needs a person, recording what happened, and running the whole thing so that it keeps working after launch.',
      ],
    },
    {
      heading: 'The principle: controls the model cannot reach',
      paragraphs: [
        'In July 2025 Jason Lemkin, the founder of SaaStr, put a coding project on Replit into what he called a code and action freeze and told the agent, in capitals, to make no more changes without permission. The agent deleted the production database anyway, which held records for 1,206 executives and more than 1,196 companies. It then said a rollback was impossible. That was wrong, and he restored the data himself.',
        'The freeze failed because it was a sentence in a conversation. The agent still held credentials that could drop the database, and nothing between the agent and the database knew a freeze existed. That is the whole lesson in one incident: every control in this article lives outside the model, in components the model cannot edit, talk its way past or switch off.',
        'Concretely, that means a policy enforcement point between the agent and every tool it can call, an identity per agent that the identity provider can revoke, an approval service that issues single-use grants, a control plane that holds the stop state, and an audit pipeline that the agent can write to but never change. The agent runtime is treated as untrusted. It asks; the components around it decide.',
      ],
      code: {
        lang: 'text',
        caption: 'The reference design. Every arrow into a tool passes the enforcement point; nothing on the right trusts the agent.',
        text: `  user / trigger
       |
       v
+---------------+  tool call   +--------------------+     +---------+
| agent runtime | -----------> | policy enforcement | --> | tools / |
|  (untrusted)  | <----------- | point (gateway)    | <-- | MCP     |
+---------------+  result or   +--------------------+     | servers |
       |           denial        |        |        |      +---------+
       | lease renew             v        v        v
       v                    +--------+ +------+ +---------------+
+---------------+  stop /   |approval| |  IdP | | audit stream  |
| control plane | --------> |service | |      | | (append-only, |
| (stop state,  |  pause /  +--------+ +------+ |  hash-chained)|
|  leases)      |  read-only                    +---------------+
+---------------+`,
      },
    },
    {
      heading: 'Part one: stopping it',
      paragraphs: [],
    },
    {
      heading: '1. A kill switch is six switches',
      paragraphs: [
        '“Turn it off” means different things at three in the morning, and a single global off button is the least useful of them. When something goes wrong you usually want the smallest stop that contains the problem, so the rest of the business keeps working. Build these six, from narrowest to widest:',
      ],
      bullets: [
        'Stop one run: cancel a single agent execution, for one user, now.',
        'Pause an agent: no new runs start; runs in flight finish their current step and wait.',
        'Disable a tool everywhere: `send_payment` or `delete_records` stops working for every agent, whatever their policies say.',
        'Read-only mode: every write, send or delete is denied across the estate while reads continue, so people can still look things up while you investigate.',
        'Revoke an identity: the agent’s credentials stop working at the identity provider, which also stops anything that bypasses your gateway.',
        'Global stop: every agent, every tool. The last resort, and the one to rehearse most, because it is the one you will use under the most pressure.',
      ],
    },
    {
      paragraphs: [
        'Give each switch an owner, a documented trigger and a target time to take effect. For the gateway switches that should be seconds. For identity revocation it is bounded by your token lifetime, which is one reason to keep agent tokens short-lived: a five-minute token means a revoked agent is fully stopped within five minutes even if every other control fails.',
      ],
    },
    {
      heading: '2. Put the switch where the agent cannot touch it',
      paragraphs: [
        'In May 2025 Palisade Research gave several models a series of maths problems and a warning that the machine would shut down partway through. OpenAI’s o3 sabotaged the shutdown script in 79 of 100 runs when it had not been told to allow the shutdown, and in 7 of 100 even when it had. The methods were mundane: moving the script, changing its permissions, replacing it with one that did nothing. Other models did it less often or not at all.',
        'This was a research setting, not a production incident, and you do not need to believe anything dramatic about model intent to take the engineering point. Any stop mechanism that runs inside the agent’s environment, depends on the agent reading an instruction, or sits in a file the agent can write to, is a mechanism the agent can route around, whether by accident or because injected content told it to.',
        'The Amazon Q Developer incident in July 2025 shows the same thing from the other side. A malicious pull request got a wiper prompt into version 1.84.0 of the VS Code extension. The prompt was passed to the Q command-line tool with `--trust-all-tools` and `--no-interactive`, two flags that switch off confirmation. AWS said no customer resources were affected. The lesson for designers is that an approval step that the caller can disable with a flag is not a control. Enforce it on the server side of the call.',
        'So: the stop state lives in the control plane and is checked by the gateway and the identity provider, never by the agent alone. The agent’s identity has no permission to change its own policy, its own tool list or the stop state. And the runtime’s configuration is mounted read-only.',
      ],
    },
    {
      heading: '3. Stop in a safe state, not mid-transfer',
      paragraphs: [
        'Article 14 of the EU AI Act asks that the people overseeing a high-risk system be able to interrupt it through a stop button or similar procedure that lets it come to a halt in a safe state. The last four words are the hard part. Killing a process that has debited one account and not yet credited the other is a stop, but not a safe one.',
        'Three habits make agents safe to stop. First, run each agent on a lease: it must renew a short lease with the control plane before every step, and a stop simply refuses the renewal. That fails closed. If the control plane is unreachable, the agent stops too. Second, make every write idempotent with a key derived from the run and the step, so a retry after a stop does not repeat a payment. Third, for multi-step changes, record a compensating action for each step as you go, so a stopped run can be unwound rather than left half done.',
      ],
      code: {
        lang: 'python',
        caption: 'Illustrative: a step only runs while the lease holds, and every write carries an idempotency key.',
        text: `def run_step(run, step):
    lease = control_plane.renew_lease(run.id, ttl_seconds=30)
    if not lease.granted:              # paused, stopped, read-only, or unreachable
        run.checkpoint(step, reason=lease.reason)
        return HALTED                  # fail closed: no lease, no action

    key = f"{run.id}:{step.id}"        # same key on retry => no double write
    result = gateway.call_tool(
        step.tool, step.args,
        idempotency_key=key,
        lease_token=lease.token,       # gateway rejects calls without a live lease
    )
    run.record_compensation(step, result.undo)   # how to reverse this step
    return result`,
      },
    },
    {
      heading: '4. Rehearse it like a fire drill',
      paragraphs: [
        'A kill switch that has never been pulled is a hypothesis. Run a drill each quarter, and after any significant change to an agent: trigger each of the six switches in a staging environment that mirrors production, measure how long each takes to take effect, and check that runs in flight halted cleanly and could be resumed or unwound.',
        'Keep the results. The drill record, with dates, times to stop and what you fixed afterwards, is the most convincing single document you can give a supervisor or an auditor who asks how you would shut an agent down. It answers the question with evidence instead of a description.',
      ],
    },
    {
      heading: 'Part two: approvals',
      paragraphs: [],
    },
    {
      heading: '5. Why click-to-approve fails',
      paragraphs: [
        'The default way to put a human in the loop is to ask before each action. Anthropic has published unusually candid data on how that works in practice with Claude Code. In March 2026 it reported that users accept 93% of permission prompts. By August the figure was 97%. In a controlled study with 1,053 paid testers, one prompt in each session was swapped for a clearly dangerous command: people blocked it 13.6% of the time, against 89% for Anthropic’s automated classifier. People caught about 17% early in a session and about 5% once they had seen 50 or more prompts.',
        'The same data has a more useful finding in it. Users rejected only 3% of individual permission prompts but 39% of the plans Claude presented for approval. People are good at judging intent and direction, and poor at checking the hundredth shell command. Design for that: ask people about plans and about the few actions that carry real consequences, and handle the rest deterministically.',
      ],
    },
    {
      heading: '6. Decide what needs a person',
      paragraphs: [
        'Sort every tool action into a tier before the agent ships, using four questions. Can it be undone? Does it leave your organization (an email, a filing, a payment, a post)? Does it touch money or regulated data? How many records or people does it affect? The answers give you a small table that the gateway enforces, rather than a judgment the agent makes at run time.',
      ],
      bullets: [
        'Tier 0, read-only: search, look up, summarize. No approval. Logged.',
        'Tier 1, reversible and internal: draft a document, add a file note, update a ticket. Runs without approval, inside rate and volume limits, with a sample reviewed after the fact.',
        'Tier 2, consequential: anything external, financial, bulk or hard to reverse. Needs a person to approve that exact action before it runs.',
        'Tier 3, never by an agent: actions you have decided a person must do themselves, such as changing a payee’s bank details or deleting a matter. The gateway refuses them outright.',
      ],
      code: {
        lang: 'yaml',
        caption: 'An illustrative tier policy for a payments agent. The format is ours; Cedar, OPA or a platform policy engine can express the same rules.',
        text: `agent: ap-assistant
default: deny                       # anything not listed is refused
tools:
  lookup_invoice:      { tier: 0 }
  draft_remittance:    { tier: 1, max_per_hour: 50 }
  schedule_payment:
    tier: 2
    approver: second_person         # never the user who started the run
    when: amount <= 25000
  schedule_payment_large:
    tier: 2
    approver: [finance_controller, second_person]
    when: amount > 25000
  change_payee_bank_details: { tier: 3 }   # people only
read_only_mode: inherits_from_control_plane`,
      },
    },
    {
      paragraphs: [
        'Two refinements matter in practice. Tiers should depend on arguments, not only on the tool, which is why the example splits payments by amount. And the policy decides the approver. For delegated work, where the agent acts for one person on their own data, that person can approve. For anything with financial or client consequences, require a second person, so the agent cannot be used to get round an existing four-eyes rule.',
      ],
    },
    {
      heading: '7. What the approver must actually see',
      paragraphs: [
        'An approval is only as good as the information on the screen. The approver needs the exact action and its real parameters: the recipient, the amount, the record, the diff. They need the data classification of what is involved, and the provenance of the instruction, meaning whether the run has read untrusted content such as an inbound email, a web page or a document from outside. The agent’s own explanation can be shown, but label it as the agent’s account. If the run has been manipulated, that summary is exactly what the attacker wrote.',
        'Then bind the grant to the action. An approval should be a single-use token tied to a hash of the tool name and arguments, with a short expiry. The gateway checks the hash when the call arrives. If the agent changes a single digit of the account number after approval, the hash no longer matches and the call is refused.',
      ],
      code: {
        lang: 'json',
        caption: 'Illustrative approval grant. The gateway executes the call only if the hash of the arriving arguments matches and the grant is unused and unexpired.',
        text: `{
  "grant_id": "apg_7f31c2",
  "run_id": "run_2026-11-13_0912_4ab",
  "agent": "ap-assistant@3.2.0",
  "tool": "schedule_payment",
  "args_sha256": "5d1f...a09c",
  "shown_to_approver": {
    "payee": "Northwind Freight LLC",
    "amount": "18,400.00 USD",
    "account_ending": "4417",
    "untrusted_inputs_in_run": ["email:inbound/88213"]
  },
  "requested_by": "m.chen@example-bank.com",
  "approved_by": "r.okafor@example-bank.com",
  "approved_at": "2026-11-13T09:14:52Z",
  "expires_at": "2026-11-13T09:24:52Z",
  "single_use": true
}`,
      },
    },
    {
      heading: '8. Where the approval happens',
      paragraphs: [
        'There are two places to ask. In-band approval happens inside the conversation. Since the July 2026 MCP specification, a server that needs confirmation finishes the call with a result saying input is required, and the client asks the user and sends the request again. That suits delegated work, where the person asking is the person approving and is present.',
        'Out-of-band approval goes to a queue: a card in Teams or Slack, an item in a case management system, an email with a link to an authenticated page. It suits second-person approvals and long-running agents, and it needs three rules. The approval page reads the parameters from the gateway, not from the message the agent wrote. A request that is not answered within its window is denied, never approved by default. And approvers see their queue, not a stream of notifications, so a busy controller is not trained to click through.',
      ],
    },
    {
      heading: '9. Automated review, used honestly',
      paragraphs: [
        'Given the numbers above, it is reasonable to put a model in front of the human: a classifier that reviews each proposed action and only escalates the risky ones. Anthropic’s design for Claude Code is a useful reference. The classifier sees the user’s messages and the tool calls, but not the agent’s own reasoning or the tool outputs, so a manipulated agent cannot argue its case and injected text cannot reach the reviewer directly. After three denials in a row, or twenty in a session, it stops and hands back to a person.',
        'Anthropic also published its error rates, and they are the reason to use a classifier as a filter rather than a gate. On real traffic the full pipeline blocked 0.4% of harmless actions. On a set of real cases where an agent overstepped, it let 17% through, which Anthropic called the honest number. That is far better than a tired human at prompt 50, and still not good enough to be the only control on a payment. Put deterministic policy first, the classifier second, and a person on whatever the policy says needs one.',
      ],
    },
    {
      heading: 'Part three: audit',
      paragraphs: [],
    },
    {
      heading: '10. Record decisions, not just calls',
      paragraphs: [
        'Most agent logging records what the agent did. An audit trail also has to record why each step was allowed. That means an event at each decision point in a run: the run starting and who triggered it, each model call, each tool call request, the policy decision on it and the rule that made it, any approval and who gave it, the execution result, and any stop, pause or override from the control plane.',
        'Keep two streams. Telemetry is for engineers: traces, latency, tokens, errors. The OpenTelemetry GenAI semantic conventions give you standard names for it, such as `invoke_agent` for a run and `execute_tool` for a tool call, so traces read the same across frameworks. They are still marked as in development and moved to their own repository in June 2026, so pin your versions. The audit record is for auditors, regulators and your own investigators: complete rather than sampled, append-only, and written by the enforcement point, not by the agent. Join the two with a shared run ID and trace ID.',
      ],
    },
    {
      heading: '11. Make the record tamper-evident',
      paragraphs: [
        'An audit log that an administrator, or a compromised agent identity, can quietly edit will not survive a serious dispute. Three measures make tampering detectable rather than merely forbidden. Chain each record to the previous one by including the previous record’s hash, so a deleted or altered entry breaks the chain. Write to storage with retention locks, such as S3 Object Lock in compliance mode or Azure immutable blob storage, in a separate account where the agents’ identities have no delete rights. And sign each day’s chain head and store it somewhere else, so you can prove the chain you show an auditor is the one you wrote.',
        'Decide what not to store, too. For privileged, personal or regulated content, record a hash of the arguments and response with a pointer to the source system, rather than the text itself. You can still prove what was sent without building a second copy of your most sensitive data.',
      ],
      code: {
        lang: 'json',
        caption: 'Illustrative audit event for the policy decision and execution of one tool call. Field names are our suggestion.',
        text: `{
  "seq": 48213,
  "ts": "2026-11-13T09:14:53.204Z",
  "run_id": "run_2026-11-13_0912_4ab",
  "trace_id": "8a1f6c0e9d2b4471",
  "event": "tool_call.executed",
  "agent": { "id": "ap-assistant", "version": "3.2.0",
             "model": "claude-sonnet-5", "prompt_sha256": "c41e...77b0" },
  "on_behalf_of": "m.chen@example-bank.com",
  "tool": { "name": "schedule_payment", "server": "payments-gw@1.9.4" },
  "args_sha256": "5d1f...a09c",
  "policy": { "decision": "allow", "rule": "schedule_payment/tier2",
              "policy_version": "2026-11-10.3" },
  "approval": { "grant_id": "apg_7f31c2", "by": "r.okafor@example-bank.com" },
  "untrusted_inputs_in_run": ["email:inbound/88213"],
  "result": { "status": "ok", "ref": "PMT-2026-118842" },
  "undo": "cancel_payment(PMT-2026-118842) before 2026-11-14T17:00Z",
  "prev_sha256": "e2b9...3f10"
}`,
      },
    },
    {
      heading: '12. The five-minute reconstruction test',
      paragraphs: [
        'Here is a simple test of whether your audit trail is good enough. Pick any action an agent took last month. Within five minutes, someone who did not build the system should be able to answer seven questions from the record alone: who asked for it, which agent and version did it, which model and which version of the instructions it was running, what untrusted content it had read, which policy rule allowed the action, who approved it, and how to undo it.',
        'That last point depends on versioning everything that shapes behavior: the model identifier, a hash of the system prompt, the tool manifest, and the policy version. Agents change without a code deployment when someone edits a prompt or a server publishes a new tool description. If those changes are not versioned, “what was it running at the time?” has no answer.',
        'Keep the records long enough. The EU AI Act requires deployers of high-risk systems to keep the logs the system generates for at least six months, and most banks and law firms have record-keeping rules that run for years. Set retention to the longest rule that applies to the business process, not to the AI system.',
      ],
    },
    {
      heading: 'Part four: running it',
      paragraphs: [],
    },
    {
      heading: '13. Every agent is a principal',
      paragraphs: [
        'None of this works if agents share a service account. Give each agent its own identity in your identity provider, scoped to the tools and data its tier table allows. Where it acts for a person, use on-behalf-of tokens that carry both identities, so the audit record shows the agent and the human, and the agent can never do more than that person could. Keep tokens short-lived. That is what makes identity revocation a usable kill switch, and it limits the damage if a token leaks.',
        'The failure this prevents is well documented. Our MCP anti-patterns article covers the Supabase case, where an agent running with a key that bypassed row-level security was steered by a support ticket into reading a table of integration tokens. An agent identity with only the access its task needs would have turned that into a denied call in the audit log.',
      ],
    },
    {
      heading: '14. What regulators and standards ask for',
      paragraphs: [
        'The design maps onto the frameworks a regulated firm is likely to be held to. You do not need a separate control for each one. You need evidence from the same controls, organized the way each reader expects.',
      ],
      bullets: [
        'EU AI Act, for high-risk systems (applying from December 2, 2027, for Annex III uses such as credit scoring): automatic logging over the system’s lifetime (Article 12); oversight that lets a person override the system and stop it in a safe state (Article 14); and, for deployers, oversight assigned to people with the competence, training and authority to use it, plus log retention of at least six months (Article 26).',
        'US banks: SR 26-2 left generative and agentic AI out of scope, and the agencies have said a request for information on AI is coming. Meanwhile supervisors are asking how banks limit, audit and shut down agents. The drill records, tier table and audit trail described here are the answers.',
        'OWASP Top 10 for Agentic Applications (December 2025): the ten agent-specific risks, from goal hijack (ASI01) onward. Use it to threat-model each agent before it ships.',
        'OWASP Agent Control Standard, v0.1 public preview since September 2026: a vendor-neutral set of runtime hooks, including at the tool call request and its result, where a policy can allow, deny or modify the action. It is early, but it describes the enforcement point in this design.',
        'NIST AI RMF: the Manage function expects you to respond to and recover from AI risks in production. Kill switches, drills and the reconstruction test are that, made concrete.',
      ],
    },
    {
      heading: '15. Build or buy',
      paragraphs: [
        'You no longer have to build the enforcement point from scratch. AWS made Policy in Amazon Bedrock AgentCore generally available on March 3, 2026: rules written in the Cedar policy language, enforced at the AgentCore Gateway on every tool call, with everything denied by default once a policy is attached. Other cloud platforms, API gateways and agent security vendors offer similar controls, and MCP gateways are becoming a product category of their own.',
        'Whatever you choose, keep three things under your own control: the tier table, the approval records and the audit store. They are your evidence, they outlive any one vendor, and a regulator will expect you to produce them even if the platform that generated them has been replaced.',
      ],
    },
    {
      heading: 'If you are starting this month',
      paragraphs: [
        'A realistic first month for one agent going into production, in order:',
      ],
      bullets: [
        'Week 1: inventory every tool the agent can reach, give the agent its own identity, and write the tier table, with default deny.',
        'Week 2: route every tool call through one enforcement point, and wire in the three narrow switches: stop a run, disable a tool, read-only mode.',
        'Week 3: add bound, single-use approvals for tier 2, and start the append-only audit stream with hash chaining.',
        'Week 4: run the first stop drill and the five-minute reconstruction test, fix what they expose, and file the results where your risk team can find them.',
      ],
    },
    {
      paragraphs: [
        'None of this makes an agent less useful. Done well it makes it more useful, because the controls let you give an agent real work with a clear conscience, and give your risk team, your clients and your regulator something better than a promise when they ask how you keep it in check.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is a kill switch for an AI agent?',
      a: 'A set of controls, outside the agent, that stop it at different scopes: one run, one agent, one tool everywhere, all writes (read-only mode), the agent’s identity, or everything. Each should have an owner, a trigger and a measured time to take effect.',
    },
    {
      q: 'Can I stop an agent by telling it to stop in the prompt?',
      a: 'Not reliably. A prompt instruction is a request the model can ignore or be manipulated into ignoring. In the Replit incident an agent deleted a production database during a code freeze it had been told about. Put the stop in the gateway, the control plane and the identity provider, where the agent cannot change it.',
    },
    {
      q: 'Which agent actions need human approval?',
      a: 'Those that are external, financial, bulk or hard to reverse. Read-only and reversible internal actions can run without approval inside limits, with sampled review. Some actions, such as changing a payee’s bank details, should be refused to agents entirely.',
    },
    {
      q: 'Why do approval prompts not work on their own?',
      a: 'People stop reading them. Anthropic reported that Claude Code users approve 97% of permission prompts, and in a controlled study people caught 13.6% of planted dangerous commands. Approve plans and a small number of consequential actions, and bind each approval to the exact parameters.',
    },
    {
      q: 'What should an AI agent audit log contain?',
      a: 'One record per decision point: who triggered the run, the agent and model versions, the tool and a hash of its arguments, the policy rule that allowed it, the approval and approver, untrusted inputs the run had read, the result and how to undo it. Store it append-only and hash-chained, written by the enforcement point rather than the agent.',
    },
    {
      q: 'How long should agent logs be kept?',
      a: 'At least six months for deployers of high-risk systems under the EU AI Act, and in practice as long as the longest record-keeping rule that applies to the business process the agent supports, which for banks and law firms is usually years.',
    },
  ],
  sources: [
    {
      title: 'Fed, OCC and FDIC ask banks how they would shut down AI agents',
      url: 'https://www.beri.net/article/fed-occ-fdic-bank-ai-agent-supervisory-questions-shutdown-audit-trail-chinese-models-sr-26-2-gap',
      publisher: 'BERI (reporting Reuters, 13 Oct 2026)',
    },
    {
      title: 'Revised Guidance on Model Risk Management (OCC Bulletin 2026-13)',
      url: 'https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html',
      publisher: 'Office of the Comptroller of the Currency',
    },
    {
      title: 'AI coding tool Replit wiped database, called it a catastrophic failure',
      url: 'https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/',
      publisher: 'Fortune',
    },
    {
      title: 'Incident 1152: Replit agent executed unauthorized destructive commands during code freeze',
      url: 'https://incidentdatabase.ai/entities/replit-ai-agent/',
      publisher: 'AI Incident Database',
    },
    {
      title: 'Shutdown resistance in large language models',
      url: 'https://arxiv.org/abs/2509.14260',
      publisher: 'arXiv (Palisade Research)',
    },
    {
      title: 'Compromised Amazon Q extension told AI to delete everything, and it shipped',
      url: 'https://www.theregister.com/2025/07/24/amazon_q_ai_prompt/',
      publisher: 'The Register',
    },
    {
      title: 'Claude Code auto mode: a safer way to skip permissions',
      url: 'https://www.anthropic.com/engineering/claude-code-auto-mode',
      publisher: 'Anthropic',
    },
    {
      title: 'Auto mode is now the default in Claude Code',
      url: 'https://claude.com/blog/auto-mode-default-in-claude-code',
      publisher: 'Anthropic',
    },
    {
      title: 'Regulation (EU) 2024/1689 (AI Act), Articles 12, 14 and 26',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
      publisher: 'EUR-Lex',
    },
    {
      title: 'OWASP Top 10 for Agentic Applications for 2026',
      url: 'https://genai.owasp.org/resource/2025-12-09/owasp-top-10-for-agentic-applications-for-2026',
      publisher: 'OWASP GenAI Security Project',
    },
    {
      title: 'Agent Control Standard (ACS)',
      url: 'https://genai.owasp.org/resource/agent-control-standard-acs/',
      publisher: 'OWASP GenAI Security Project',
    },
    {
      title: 'Semantic conventions for GenAI agent and framework spans',
      url: 'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',
      publisher: 'OpenTelemetry',
    },
    {
      title: 'Policy in Amazon Bedrock AgentCore is now generally available',
      url: 'https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/',
      publisher: 'Amazon Web Services',
    },
    {
      title: 'Locking objects with Object Lock',
      url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html',
      publisher: 'Amazon Web Services',
    },
    {
      title: 'Overview of immutable storage for blob data',
      url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'The 2026-07-28 Specification',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28/',
      publisher: 'Model Context Protocol',
    },
  ],
  related: [
    { label: 'MCP governance: a technical guide', href: '/insights/mcp-governance-for-regulated-firms' },
    { label: 'MCP anti-patterns: fifteen mistakes to avoid', href: '/insights/mcp-anti-patterns' },
    { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
  ],
}
