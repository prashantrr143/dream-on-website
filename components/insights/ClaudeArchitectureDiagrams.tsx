/**
 * "Secure Claude in the enterprise" article (2026-11-17): four technical
 * drawings in the style of a solution design document. A layered logical
 * view with a numbered interface table, a route matrix, an AWS network view
 * and a UML sequence diagram. Plain SVG with theme colors, no client JS.
 * Restrained palette: greys for structure, deep blue for the controls you own,
 * navy for routes where Anthropic processes data, light blue where the cloud does. CIDRs, ports and names are examples.
 */
import type { ReactElement } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Bot,
  Coins,
  Database,
  FlaskConical,
  Globe,
  KeyRound,
  Lock,
  Router,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Waypoints,
  Workflow,
} from 'lucide-react'

const ink = 'var(--ink-900)'
const muted = 'var(--ink-600)'
const faint = 'var(--ink-400)'
const rule = 'var(--ink-300)'
const line = 'var(--grey-200)'
const soft = 'var(--grey-50)'
const white = 'var(--white)'
const blue = 'var(--blue-700)'
const procA = 'var(--navy-900)'
const procC = 'var(--blue-300)'
const navy = 'var(--navy-800)'
const mono = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
const svgStyle = { width: '100%', height: 'auto', display: 'block' } as const

type Ln = string | { t: string; mono?: boolean; strong?: boolean }

/** Vendor marks, copied unmodified from published icon sets; see public/brand/diagrams/README.md. */
const logo = (n: string) => `/brand/diagrams/${n}.svg`
function Logo({ n, x, y, s = 16 }: { n: string; x: number; y: number; s?: number }) {
  return <image href={logo(n)} x={x} y={y} width={s} height={s} preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
}

/** Figure header: drawing number and title on the left, scope and revision on the right. */
function Header({ fig, title, meta }: { fig: string; title: string; meta: string }) {
  return (
    <g>
      <text x={12} y={20} fontSize={11} fontWeight={700} fill={ink} letterSpacing={0.6}>
        <tspan fill={navy}>{fig}</tspan>
        <tspan dx={8}>{title.toUpperCase()}</tspan>
      </text>
      <text x={748} y={20} textAnchor="end" fontSize={10.5} fill={muted} fontFamily={mono}>{meta}</text>
      <line x1={12} x2={748} y1={28} y2={28} stroke={ink} strokeWidth={1} />
    </g>
  )
}

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-a`} viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0.5L10 5L0 9.5z" fill={muted} />
      </marker>
      <marker id={`${id}-o`} viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0.5L10 5L0 9.5" fill="none" stroke={muted} strokeWidth={1.4} />
      </marker>
    </defs>
  )
}

/** A component box: optional icon, title, then short lines. */
function Box({
  x, y, w, h, title, lines = [], icon: Icon, stroke = rule, sw = 1, bar, mark, marks = [],
}: {
  x: number; y: number; w: number; h: number; title: string; lines?: Ln[]
  icon?: LucideIcon; stroke?: string; sw?: number; bar?: string; mark?: string; marks?: string[] | undefined
}) {
  const tx = Icon || mark ? x + 28 : x + 10
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill={white} stroke={stroke} strokeWidth={sw} />
      {bar && <rect x={x} y={y} width={w} height={3} fill={bar} />}
      {mark ? <Logo n={mark} x={x + 8} y={y + 8} /> : Icon && <Icon x={x + 9} y={y + 9} width={14} height={14} color={stroke === rule ? muted : stroke} strokeWidth={2} aria-hidden="true" />}
      {marks.map((m, i) => (
        <Logo key={m} n={m} x={x + w - 24 - (marks.length - 1 - i) * 20} y={y + 8} />
      ))}
      <text x={tx} y={y + 20} fontSize={11.5} fontWeight={600} fill={ink}>{title}</text>
      {lines.map((l, i) => {
        const o = typeof l === 'string' ? { t: l } : l
        return (
          <text key={i} x={x + 10} y={y + 36 + i * 14} fontSize={o.mono ? 10 : 10.5} fill={o.strong ? ink : muted} fontFamily={o.mono ? mono : undefined}>
            {o.t}
          </text>
        )
      })}
    </g>
  )
}

/** Interface number on a connector. */
function Badge({ n, cx, cy }: { n: number; cx: number; cy: number }) {
  return (
    <g aria-hidden="true">
      <circle cx={cx} cy={cy} r={8} fill={navy} stroke={white} strokeWidth={1.5} />
      <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize={9.5} fontWeight={700} fill={white} fontFamily={mono}>{n}</text>
    </g>
  )
}

/** Text on a white knock-out so it stays legible over lines. */
function Label({ x, y, t, anchor = 'middle', size = 10.5, color = ink, m }: { x: number; y: number; t: string; anchor?: 'start' | 'middle' | 'end'; size?: number; color?: string; m?: boolean }) {
  const w = t.length * size * (m ? 0.61 : 0.56) + 8
  const rx = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w + 4 : x - 4
  return (
    <g>
      <rect x={rx} y={y - size} width={w} height={size + 5} fill={white} />
      <text x={x} y={y} textAnchor={anchor} fontSize={size} fill={color} fontFamily={m ? mono : undefined}>{t}</text>
    </g>
  )
}

function Processor({ x, y, who, cloud }: { x: number; y: number; who: string; cloud?: boolean }) {
  return (
    <g>
      <rect x={x} y={y - 8} width={8} height={8} fill={cloud ? procC : procA} />
      <text x={x + 13} y={y} fontSize={10.5} fontWeight={600} fill={ink}>{who}</text>
    </g>
  )
}

/* ------------------------------------------------------------------ */
/* Fig 1. Logical architecture, as swimlanes                           */
/* ------------------------------------------------------------------ */

export function ClaudeReferenceArchitecture() {
  const A = 'url(#f1-a)'
  const lane = (y: number, h: number, name: string, a?: string, b?: string, fill?: string, op = 0.045) => (
    <g>
      <rect x={8} y={y} width={744} height={h} fill={fill ?? 'none'} fillOpacity={op} />
      <line x1={8} x2={752} y1={y + h} y2={y + h} stroke={line} />
      <text x={36} y={y + 18} fontSize={11} fontWeight={700} fill={ink}>{name}</text>
      {a && <text x={36} y={y + 33} fontSize={10} fill={muted} fontFamily={mono}>{a}</text>}
      {b && <text x={36} y={y + 47} fontSize={10} fill={muted}>{b}</text>}
    </g>
  )
  const prov = (x: number, t1: string, t2: string | null, who: string, cloud: boolean, m: string) => (
    <g>
      <rect x={x} y={482} width={112} height={66} rx={3} fill={white} stroke={rule} />
      <rect x={x} y={482} width={112} height={3} fill={cloud ? procC : procA} />
      <text x={x + 9} y={501} fontSize={11.5} fontWeight={600} fill={ink}>{t1}</text>
      {t2 && <text x={x + 9} y={515} fontSize={11.5} fontWeight={600} fill={ink}>{t2}</text>}
      <Processor x={x + 9} y={539} who={who} cloud={cloud} />
      <Logo n={m} x={x + 112 - 28} y={524} s={20} />
    </g>
  )
  const shared = (x: number, icon: LucideIcon | null, t: string, l: string, marks?: string[]) =>
    icon ? (
      <Box x={x} y={572} w={112} h={50} title={t} lines={[l]} icon={icon} />
    ) : (
      <Box x={x} y={572} w={112} h={50} title={t} lines={[l]} marks={marks} />
    )
  const iface: [number, string, string][] = [
    [1, 'Events → agent runtime', 'Queue message; workload identity'],
    [2, 'Employees → app service', 'HTTPS; SSO (OIDC) with MFA'],
    [3, 'Developers → AI gateway', 'Claude Code; per-user identity'],
    [4, 'App, agent → AI gateway', 'HTTPS; OIDC JWT, no API key'],
    [5, 'Agent → MCP gateway', 'OAuth 2.1; RFC 8707 audience'],
    [6, 'MCP gateway → MCP servers', 'Token bound to one server'],
    [7, 'AI gateway → cloud routes', 'Private endpoint; cloud IAM'],
    [8, 'AI gateway → Claude API', 'Egress proxy; TLS 443; WIF token'],
    [9, 'Every component → SIEM', 'Logs carrying one trace ID'],
  ]
  return (
    <svg viewBox="0 0 760 806" role="img" aria-labelledby="f1-title f1-desc" style={svgStyle}>
      <title id="f1-title">Logical architecture for Claude in a regulated enterprise</title>
      <desc id="f1-desc">
        A layered view. Clients (event sources, employees and developers) call into a VPC. In the app subnet, which has no internet route, an
        agent runtime and an app service run. In the gateway subnet, an MCP gateway handles tool calls and an AI gateway runs nine checks on
        every model call: authenticate, authorize, classify, redact PII, screen input, meter quota, route, check output and log with a trace ID.
        The data subnet holds MCP servers in front of systems of record. The egress subnet holds a private endpoint to the cloud routes and an
        egress proxy to the Claude API. Below sit the five model routes with their data processor, and the shared services: identity provider,
        secrets vault, SIEM, evaluation and cost control. A table lists the nine interfaces with protocol and authentication.
      </desc>
      <Markers id="f1" />
      <Header fig="FIG 1" title="Logical architecture" meta="any Claude route · rev 1.0 · Nov 2026" />

      {/* Lanes */}
      {lane(40, 68, 'Clients', undefined, 'Corporate network')}
      {lane(108, 80, 'App subnet', '10.20.10.0/24', 'No internet route', soft, 1)}
      {lane(188, 130, 'Gateway subnet', '10.20.20.0/24', 'Your controls', soft, 1)}
      {lane(318, 64, 'Data subnet', '10.20.30.0/24', undefined, soft, 1)}
      {lane(382, 64, 'Egress subnet', '10.20.40.0/24', undefined, soft, 1)}
      {lane(446, 114, 'Model routes', undefined, 'External')}
      {lane(560, 76, 'Shared services', undefined, 'Platform team')}
      <line x1={8} x2={752} y1={40} y2={40} stroke={line} />
      <line x1={130} x2={130} y1={40} y2={636} stroke={line} />

      {/* VPC bracket */}
      <path d="M17 112V442" stroke={navy} strokeWidth={1.5} />
      <path d="M17 112H23M17 442H23" stroke={navy} strokeWidth={1.5} />
      <text transform="rotate(-90 28 277)" x={28} y={277} textAnchor="middle" fontSize={9.5} fontWeight={700} fill={navy} letterSpacing={0.6}>
        YOUR VPC · 10.20.0.0/16
      </text>

      {/* Connectors */}
      <g fill="none" stroke={muted} strokeWidth={1.25}>
        <path d="M240 96V123" markerEnd={A} />
        <path d="M470 96V123" markerEnd={A} />
        <path d="M200 172V203" markerEnd={A} />
        <path d="M352 172V203" markerEnd={A} />
        <path d="M480 172V203" markerEnd={A} />
        <path d="M649 96V203" markerEnd={A} />
        <path d="M200 306V329" markerEnd={A} />
        <path d="M490 306V393" markerEnd={A} />
        <path d="M676 306V393" markerEnd={A} />
        <path d="M490 434V466M204 466H564" />
        {[204, 324, 444, 564].map((x) => (
          <path key={x} d={`M${x} 466V481`} markerEnd={A} />
        ))}
        <path d="M676 434V481" markerEnd={A} />
      </g>

      {/* Clients */}
      <Box x={150} y={54} w={180} h={42} title="Events, schedules" lines={['Queue, cron, webhooks']} icon={Workflow} />
      <Box x={360} y={54} w={170} h={42} title="Employees" lines={['Browser, Teams, Slack']} icon={Users} marks={['teams', 'slack']} />
      <Box x={560} y={54} w={178} h={42} title="Developers" lines={['Claude Code CLI, IDE']} mark="claude-code" />

      {/* App subnet */}
      <Box x={150} y={124} w={220} h={48} title="Agent runtime" lines={['One identity per agent']} icon={Bot} />
      <Box x={400} y={124} w={160} h={48} title="App service" lines={['Copilot, RAG']} icon={AppWindow} />

      {/* Gateway subnet */}
      <Box
        x={150} y={204} w={170} h={102} title="MCP gateway" mark="mcp" stroke={blue} sw={1.5}
        lines={['OAuth 2.1 resource server', 'Tool allow-list per agent', 'Approval hook for writes', { t: 'Kill switch', strong: true }]}
      />
      <rect x={336} y={204} width={402} height={102} rx={3} fill={white} stroke={blue} strokeWidth={1.5} />
      <ShieldCheck x={345} y={213} width={14} height={14} color={blue} strokeWidth={2} aria-hidden="true" />
      <text x={364} y={224} fontSize={11.5} fontWeight={600} fill={ink}>AI gateway</text>
      <text x={728} y={224} textAnchor="end" fontSize={10} fill={muted}>API management or LLM gateway</text>
      <line x1={346} x2={728} y1={232} y2={232} stroke={line} />
      {[
        ['authenticate', 'authorize', 'classify'],
        ['redact PII', 'screen input', 'meter quota'],
        ['route', 'check output', 'log + trace ID'],
      ].map((col, c) =>
        col.map((t, r) => (
          <text key={t} x={348 + c * 130} y={252 + r * 18} fontSize={10.5} fill={ink}>
            <tspan fontFamily={mono} fill={blue} fontWeight={700}>{c * 3 + r + 1}</tspan>
            <tspan dx={6}>{t}</tspan>
          </text>
        )),
      )}

      {/* Data and egress subnets */}
      <Box x={150} y={330} w={170} h={42} title="MCP servers" lines={['DMS, search, core systems']} mark="mcp" />
      <Box x={400} y={394} w={180} h={40} title="Private endpoint" lines={['PrivateLink · PSC · Azure PE']} icon={Lock} />
      <Box x={600} y={394} w={138} h={40} title="Egress proxy" lines={['Host allow-list']} icon={Router} />

      {/* Model routes */}
      <text x={210} y={461} fontSize={10} fill={muted}>private network path</text>
      <text x={684} y={461} fontSize={10} fill={muted}>public TLS</text>
      {prov(148, 'Claude', 'Platform on AWS', 'Anthropic', false, 'claude')}
      {prov(268, 'Amazon', 'Bedrock', 'AWS', true, 'aws-bedrock')}
      {prov(388, 'Google Cloud', null, 'Google', true, 'google-cloud')}
      {prov(508, 'Microsoft', 'Foundry', 'Anthropic', false, 'azure-ai-foundry')}
      {prov(628, 'Claude API', null, 'Anthropic', false, 'claude')}

      {/* Shared services */}
      {shared(148, null, 'Identity', 'Entra ID, Okta', ['microsoft', 'okta'])}
      {shared(268, KeyRound, 'Secrets vault', 'Gateway, admin keys')}
      {shared(388, ScrollText, 'SIEM', 'All logs, trace ID')}
      {shared(508, FlaskConical, 'Evaluation', 'Tests per change')}
      {shared(628, Coins, 'Cost control', 'Quotas, budgets')}

      {/* Interface badges */}
      <Badge n={1} cx={240} cy={110} />
      <Badge n={2} cx={470} cy={110} />
      <Badge n={3} cx={649} cy={150} />
      <Badge n={4} cx={352} cy={188} />
      <Badge n={4} cx={480} cy={188} />
      <Badge n={5} cx={200} cy={188} />
      <Badge n={6} cx={200} cy={318} />
      <Badge n={7} cx={490} cy={350} />
      <Badge n={8} cx={676} cy={350} />
      <Badge n={9} cx={500} cy={572} />

      {/* Interface table */}
      <text x={12} y={662} fontSize={10.5} fontWeight={700} fill={ink} letterSpacing={0.6}>INTERFACES</text>
      <line x1={12} x2={748} y1={670} y2={670} stroke={rule} />
      {iface.map(([n, a, b], i) => {
        const col = i < 5 ? 0 : 1
        const row = i < 5 ? i : i - 5
        const x = 12 + col * 376
        const y = 688 + row * 22
        return (
          <g key={n}>
            <Badge n={n} cx={x + 9} cy={y - 4} />
            <text x={x + 24} y={y} fontSize={10.5} fontWeight={600} fill={ink}>{a}</text>
            <text x={x + 186} y={y} fontSize={10.5} fill={muted}>{b}</text>
          </g>
        )
      })}
      <line x1={12} x2={748} y1={790} y2={790} stroke={line} />
      <text x={12} y={802} fontSize={9.5} fill={faint}>CIDRs are examples. Bar on each route: dark navy, Anthropic processes the data; light blue, the cloud provider does.</text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Fig 2. Route matrix                                                 */
/* ------------------------------------------------------------------ */

export function ClaudeRouteDecision() {
  const cols = [
    { h: 'Route', w: 146 },
    { h: 'Processor', w: 84 },
    { h: 'Workload auth', w: 114 },
    { h: 'Private path', w: 146 },
    { h: 'Audit trail', w: 128 },
    { h: 'HIPAA via Anthropic', w: 118 },
  ]
  const xs = cols.reduce<number[]>((acc, _c, i) => [...acc, i === 0 ? 12 : acc[i - 1]! + cols[i - 1]!.w], [])
  type Cell = Ln[]
  const rows: { proc: 'a' | 'c'; mark: string; cells: Cell[] }[] = [
    { proc: 'a', mark: 'claude', cells: [[{ t: 'Claude API', strong: true }, 'direct'], ['Anthropic'], ['Workload identity', 'federation (OIDC)'], ['Egress proxy,', 'public TLS 443'], ['Console usage, cost', 'and activity APIs'], ['Yes: BAA and', 'HIPAA-enabled org']] },
    { proc: 'a', mark: 'claude', cells: [[{ t: 'Claude Platform', strong: true }, { t: 'on AWS', strong: true }], ['Anthropic'], ['AWS IAM,', 'SigV4 signing'], ['AWS PrivateLink', { t: 'aws-external-anthropic', mono: true }], ['CloudTrail', 'data events (opt-in)'], ['No']] },
    { proc: 'c', mark: 'aws-bedrock', cells: [[{ t: 'Amazon Bedrock', strong: true }], ['AWS'], ['AWS IAM,', 'SigV4 signing'], ['AWS PrivateLink', { t: 'bedrock-mantle/runtime', mono: true }], ['CloudTrail'], ['Not covered;', 'AWS terms apply']] },
    { proc: 'c', mark: 'google-cloud', cells: [[{ t: 'Google Cloud', strong: true }, 'Google-managed'], ['Google'], ['Google Cloud IAM', 'service account'], ['Private Service', 'Connect + VPC-SC'], ['Cloud Audit Logs'], ['Not covered;', 'Google terms apply']] },
    { proc: 'a', mark: 'azure-ai-foundry', cells: [[{ t: 'Microsoft Foundry', strong: true }], ['Anthropic'], ['Microsoft', 'Entra ID'], ['Foundry resource', 'in an Azure VNet'], ['Azure Monitor'], ['Yes: HIPAA', 'configuration']] },
  ]
  const top = 48
  const hh = 30
  const rh = 46
  const end = top + hh + rows.length * rh
  return (
    <svg viewBox="0 0 760 392" role="img" aria-labelledby="f2-title f2-desc" style={svgStyle}>
      <title id="f2-title">Claude route matrix, November 2026</title>
      <desc id="f2-desc">
        A table of the five Claude routes. Claude API: Anthropic processes, workload identity federation, egress proxy over public TLS, Console
        usage and activity APIs, HIPAA with a BAA and a HIPAA-enabled organization. Claude Platform on AWS: Anthropic processes, AWS IAM with
        SigV4, PrivateLink endpoint aws-external-anthropic, CloudTrail data events, no HIPAA. Amazon Bedrock: AWS processes, AWS IAM with SigV4,
        PrivateLink endpoint bedrock-mantle or bedrock-runtime, CloudTrail, AWS terms apply. Google Cloud, Google-managed: Google processes, Google Cloud IAM service
        account, Private Service Connect with VPC Service Controls, Cloud Audit Logs, Google terms apply. Microsoft Foundry: Anthropic processes,
        Entra ID, Foundry resource in an Azure VNet, Azure Monitor, HIPAA with the HIPAA configuration.
      </desc>
      <Header fig="FIG 2" title="Route matrix" meta="checked Nov 17, 2026" />
      <rect x={12} y={top} width={736} height={hh} fill={soft} />
      {cols.map((c, i) => (
        <text key={c.h} x={xs[i]! + 10} y={top + 19} fontSize={10.5} fontWeight={700} fill={ink} letterSpacing={0.3}>{c.h}</text>
      ))}
      <line x1={12} x2={748} y1={top} y2={top} stroke={ink} />
      <line x1={12} x2={748} y1={top + hh} y2={top + hh} stroke={ink} />
      {rows.map((r, ri) => {
        const y = top + hh + ri * rh
        return (
          <g key={ri}>
            {ri % 2 === 1 && <rect x={12} y={y} width={736} height={rh} fill={soft} />}
            <line x1={12} x2={748} y1={y + rh} y2={y + rh} stroke={ri === rows.length - 1 ? ink : line} />
            {r.cells.map((cell, ci) =>
              cell.map((l, li) => {
                const o = typeof l === 'string' ? { t: l } : l
                const isProc = ci === 1
                const x = xs[ci]! + 10 + (isProc ? 13 : ci === 0 ? 26 : 0)
                return (
                  <text key={`${ci}-${li}`} x={x} y={y + (cell.length === 1 ? 27 : 20 + li * 14)} fontSize={o.mono ? 10 : 10.5} fontFamily={o.mono ? mono : undefined} fontWeight={o.strong || isProc ? 600 : 400} fill={o.strong || isProc ? ink : muted}>
                    {o.t}
                  </text>
                )
              }),
            )}
            <rect x={xs[1]! + 10} y={y + 19} width={8} height={8} fill={r.proc === 'a' ? procA : procC} />
            <Logo n={r.mark} x={xs[0]! + 10} y={y + 14} s={18} />
          </g>
        )
      })}
      {xs.slice(1).map((x) => (
        <line key={x} x1={x} x2={x} y1={top} y2={end} stroke={line} />
      ))}
      <rect x={12} y={end + 14} width={8} height={8} fill={procA} />
      <text x={26} y={end + 22} fontSize={10.5} fill={ink}>Anthropic processes prompts and outputs</text>
      <rect x={270} y={end + 14} width={8} height={8} fill={procC} />
      <text x={284} y={end + 22} fontSize={10.5} fill={ink}>The cloud provider processes them</text>
      <text x={12} y={end + 44} fontSize={10} fill={muted}>
        Residency: Claude Platform on AWS offers per-request US-only inference at 1.1x; Foundry offers Global and US Data Zone deployments.
      </text>
      <text x={12} y={end + 60} fontSize={10} fill={muted}>
        Anthropic-managed Claude on Google Cloud is a separate option with Anthropic as processor. Confirm region and features before you build.
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Fig 3. Network view, AWS example                                    */
/* ------------------------------------------------------------------ */

const MARK: Record<string, string> = { 'Google Cloud': 'google-cloud', Azure: 'azure-ai-foundry', 'Direct Claude API': 'claude' }

export function ClaudeNetworkBoundary() {
  const A = 'url(#f3-a)'
  const subnet = (y: number, name: string, cidr: string, rt: string, sg: string) => (
    <g>
      <rect x={150} y={y} width={404} height={78} rx={0} fill={white} fillOpacity={0.7} stroke={rule} />
      <Logo n="aws-group-private-subnet" x={150} y={y} s={20} />
      <text x={176} y={y + 14} fontSize={11} fontWeight={700} fill={ink}>{name}</text>
      <text x={160} y={y + 33} fontSize={10} fill={muted} fontFamily={mono}>{cidr}</text>
      <text x={160} y={y + 48} fontSize={10} fill={muted} fontFamily={mono}>{rt}</text>
      <text x={160} y={y + 63} fontSize={10} fill={muted} fontFamily={mono}>{sg}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 574" role="img" aria-labelledby="f3-title f3-desc" style={svgStyle}>
      <title id="f3-title">Network view for Claude traffic, AWS example</title>
      <desc id="f3-desc">
        The corporate network connects to the VPC over Direct Connect or VPN. The VPC has four subnets. The app subnet runs apps and agents with
        a local-only route table and may only send HTTPS to the gateway security group. The gateway subnet runs the AI and MCP gateways behind an
        internal load balancer. The egress subnet runs an egress proxy that allows api.anthropic.com, routing out through a NAT gateway and an
        internet gateway to the Claude API. The endpoint subnet holds interface endpoints with private DNS for bedrock-mantle, bedrock-runtime and
        aws-external-anthropic, so traffic to Amazon Bedrock and Claude Platform on AWS stays on the AWS network. On Google Cloud the same pattern
        uses a Private Service Connect endpoint inside a VPC Service Controls perimeter; on Azure, a Foundry resource in a VNet.
      </desc>
      <Markers id="f3" />
      <Header fig="FIG 3" title="Network view" meta="AWS example · rev 1.0" />

      {/* Corporate network */}
      <Box x={300} y={40} w={140} h={40} title="Corporate network" lines={['Users, developers']} mark="aws-group-corporate-dc" />
      <Logo n="aws-direct-connect" x={378} y={85} s={14} />
      <text x={396} y={96} fontSize={10} fill={muted}>Direct Connect or VPN</text>

      {/* VPC */}
      <rect x={140} y={104} width={424} height={372} rx={0} fill={soft} stroke={navy} strokeWidth={1.3} />
      <Logo n="aws-group-vpc" x={140} y={104} s={22} />
      <text x={168} y={119} fontSize={10.5} fontWeight={700} fill={navy} letterSpacing={0.4}>VPC 10.20.0.0/16 · APPROVED REGION</text>

      {subnet(128, 'App subnet', '10.20.10.0/24', 'rt: local only', 'sg: out 443 → gw')}
      {subnet(214, 'Gateway subnet', '10.20.20.0/24', 'rt: local only', 'sg: in 443 ← app')}
      {subnet(300, 'Egress subnet', '10.20.40.0/24', 'rt: 0/0 → nat-gw', 'sg: in 3128 ← gw')}
      {subnet(386, 'Endpoint subnet', '10.20.50.0/24', 'rt: local only', 'sg: in 443 ← gw')}

      {/* Connectors */}
      <g fill="none" stroke={muted} strokeWidth={1.25}>
        <path d="M370 80V141" markerEnd={A} />
        <path d="M370 192V227" markerEnd={A} />
        <path d="M400 278V313" markerEnd={A} />
        <path d="M312 278V399" markerEnd={A} />
        <path d="M440 339H489" markerEnd={A} />
        <path d="M520 339H549" markerEnd={A} />
        <path d="M580 339H593" markerEnd={A} />
        <path d="M440 425H593" markerEnd={A} />
        <path d="M576 425V481H593" markerEnd={A} />
      </g>

      <Box x={300} y={142} w={140} h={50} title="Apps and agents" lines={['ECS or EKS tasks']} mark="aws-ecs" />
      <Box x={300} y={228} w={140} h={50} title="AI + MCP gateways" lines={['Internal ALB, 2 AZs']} icon={ShieldCheck} stroke={blue} sw={1.5} />
      <Box x={330} y={314} w={110} h={50} title="Egress proxy" lines={[{ t: 'api.anthropic.com', mono: true }]} />
      <rect x={462} y={308} width={84} height={62} fill={white} stroke={rule} />
      <Logo n="aws-group-public-subnet" x={462} y={308} s={14} />
      <text x={480} y={319} fontSize={9} fill={muted}>Public subnet</text>
      <Logo n="aws-nat-gateway" x={492} y={325} s={26} />
      <text x={505} y={364} textAnchor="middle" fontSize={9.5} fill={ink}>NAT gateway</text>
      <Box x={300} y={400} w={140} h={50} title="Interface endpoints" lines={['private DNS on']} mark="aws-vpc-endpoints" />

      {/* IGW on the VPC edge */}
      <circle cx={564} cy={339} r={15} fill={white} />
      <Logo n="aws-internet-gateway" x={551} y={326} s={26} />
      <text x={564} y={366} textAnchor="middle" fontSize={9} fill={ink}>IGW</text>
      <Label x={312} y={372} t="443" m size={9.5} color={muted} />
      <Label x={400} y={298} t="3128" m size={9.5} color={muted} />

      {/* Right column */}
      <rect x={584} y={104} width={164} height={178} rx={3} fill={soft} stroke={line} />
      <text x={594} y={122} fontSize={10.5} fontWeight={700} fill={ink}>Same pattern elsewhere</text>
      {[
        ['Google Cloud', 'Private Service Connect', 'endpoint inside a VPC', 'Service Controls perimeter.'],
        ['Azure', 'Foundry resource placed', 'in an Azure VNet.'],
        ['Direct Claude API', 'Only via the egress proxy.'],
      ].reduce<{ y: number; els: ReactElement[] }>(
        (acc, [h, ...ls], i) => {
          acc.els.push(
            <g key={i}>
              {MARK[h ?? ''] && <Logo n={MARK[h ?? '']!} x={594} y={acc.y - 11} s={13} />}
              <text x={MARK[h ?? ''] ? 612 : 594} y={acc.y} fontSize={10.5} fontWeight={600} fill={ink}>{h}</text>
              {ls.map((l, j) => (
                <text key={j} x={594} y={acc.y + 14 + j * 13} fontSize={10.5} fill={muted}>{l}</text>
              ))}
            </g>,
          )
          acc.y += 14 + ls.length * 13 + 10
          return acc
        },
        { y: 142, els: [] },
      ).els}

      <rect x={584} y={294} width={164} height={76} rx={4} fill="none" stroke={faint} strokeDasharray="7 4" />
      <Globe x={592} y={300} width={12} height={12} color={muted} strokeWidth={2} aria-hidden="true" />
      <text x={608} y={310} fontSize={9.5} fontWeight={700} fill={muted} letterSpacing={0.4}>PUBLIC INTERNET</text>
      <Box x={594} y={316} w={148} h={46} title="Claude API" lines={[{ t: 'api.anthropic.com', mono: true }]} bar={procA} mark="claude" />

      <rect x={584} y={380} width={164} height={128} rx={4} fill="none" stroke={faint} strokeDasharray="7 4" />
      <Logo n="aws-group-cloud" x={584} y={380} s={18} />
      <text x={608} y={396} fontSize={9.5} fontWeight={700} fill={muted} letterSpacing={0.4}>AWS NETWORK</text>
      <Box x={594} y={402} w={148} h={46} title="Amazon Bedrock" lines={[{ t: 'bedrock-mantle/runtime', mono: true }]} bar={procC} mark="aws-bedrock" />
      <Box x={594} y={458} w={148} h={46} title="Claude Platform" lines={[{ t: 'aws-external-anthropic', mono: true }]} bar={procA} mark="claude" />

      {/* Legend */}
      <line x1={12} x2={748} y1={524} y2={524} stroke={line} />
      <rect x={12} y={536} width={22} height={12} fill={soft} stroke={navy} strokeWidth={1.3} />
      <text x={40} y={546} fontSize={10} fill={ink}>Your VPC</text>
      <rect x={110} y={536} width={22} height={12} fill="none" stroke={faint} strokeDasharray="4 3" />
      <text x={138} y={546} fontSize={10} fill={ink}>Provider network</text>
      <path d="M250 542H280" stroke={muted} strokeWidth={1.25} markerEnd={A} />
      <text x={288} y={546} fontSize={10} fill={ink}>Allowed flow (HTTPS unless marked)</text>
      <text x={748} y={546} textAnchor="end" fontSize={9.5} fill={faint}>Icons: AWS Architecture Icons</text>
      <text x={12} y={566} fontSize={9.5} fill={faint}>
        CIDRs, ports and security group names are examples. Only the egress subnet has a default route; one AZ shown, deploy in two or more.
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Fig 4. Sequence: agent tool call with approval                      */
/* ------------------------------------------------------------------ */

export function ClaudeAgentApproval() {
  const A = 'url(#f4-a)'
  const O = 'url(#f4-o)'
  const X = [66, 170, 274, 378, 482, 586, 690]
  const heads: { n: string; s: string; icon: LucideIcon; c?: string; m?: string }[] = [
    { n: 'User', s: 'actor', icon: Users },
    { n: 'Agent runtime', s: 'service', icon: Bot },
    { n: 'AI gateway', s: 'your control', icon: ShieldCheck, c: blue },
    { n: 'Claude', s: 'model', icon: Sparkles, m: 'claude' },
    { n: 'MCP gateway', s: 'your control', icon: Waypoints, c: blue, m: 'mcp' },
    { n: 'Approver', s: 'named person', icon: UserCheck },
    { n: 'Core system', s: 'system of record', icon: Database },
  ]
  const end = 516
  const msg = (n: number, a: number, b: number, y: number, t: string, ret?: boolean) => {
    const x1 = X[a]! + (b > a ? 4 : -4)
    const x2 = X[b]! + (b > a ? -5 : 5)
    return (
      <g key={n}>
        <path d={`M${x1} ${y}H${x2}`} fill="none" stroke={muted} strokeWidth={1.2} strokeDasharray={ret ? '5 4' : undefined} markerEnd={ret ? O : A} />
        <Label x={(X[a]! + X[b]!) / 2} y={y - 5} t={`${n}  ${t}`} />
      </g>
    )
  }
  const self = (i: number, y: number, t: string) => (
    <g>
      <path d={`M${X[i]! + 4} ${y}H${X[i]! + 24}V${y + 16}H${X[i]! + 6}`} fill="none" stroke={muted} strokeWidth={1.2} markerEnd={A} />
      <Label x={X[i]! + 30} y={y + 12} t={t} anchor="start" color={muted} />
    </g>
  )
  const act = (i: number, y1: number, y2: number) => (
    <rect x={X[i]! - 4} y={y1} width={8} height={y2 - y1} fill={white} stroke={rule} />
  )
  return (
    <svg viewBox="0 0 760 584" role="img" aria-labelledby="f4-title f4-desc" style={svgStyle}>
      <title id="f4-title">Sequence of an agent tool call with human approval</title>
      <desc id="f4-desc">
        A UML sequence diagram. 1: the user sends a task to the agent runtime. 2: the agent calls the AI gateway with its OIDC token. The gateway
        authenticates, classifies, redacts, screens and meters the call. 3: it forwards the checked prompt to Claude. 4: Claude returns a tool_use
        block. 5: the gateway returns the reply with a trace ID. 6: the agent calls the tool through the MCP gateway with an OAuth 2.1 token,
        and the gateway checks the agent identity, allow-list and step caps. If the tool writes data, 7: the MCP gateway asks a named approver,
        8: the approver approves, 9: the write executes. If the tool is read-only, 10: it reads with a token scoped to that server. 11: the tool
        result, or a denial with the reason, returns to the agent. Every message carries one trace ID to the SIEM; the kill switch revokes the
        agent identity or disables the tool, which makes calls 2 and 6 fail.
      </desc>
      <Markers id="f4" />
      <Header fig="FIG 4" title="Sequence: agent tool call" meta="write path with approval" />

      {/* Lifelines */}
      {X.map((x, i) => {
        const h = heads[i]!
        const Icon = h.icon
        return (
          <g key={h.n}>
            <line x1={x} x2={x} y1={82} y2={end} stroke={faint} strokeDasharray="4 4" />
            <rect x={x - 49} y={40} width={98} height={42} rx={3} fill={white} stroke={h.c ?? rule} strokeWidth={h.c ? 1.5 : 1} />
            {h.m ? <Logo n={h.m} x={x - 43} y={46} s={14} /> : <Icon x={x - 42} y={47} width={12} height={12} color={h.c ?? muted} strokeWidth={2} aria-hidden="true" />}
            <text x={x - 26} y={57} fontSize={11} fontWeight={600} fill={ink}>{h.n}</text>
            <text x={x} y={74} textAnchor="middle" fontSize={9.5} fill={muted} fontStyle="italic">«{h.s}»</text>
          </g>
        )
      })}

      {/* Activation bars */}
      {act(1, 100, 508)}
      {act(2, 126, 260)}
      {act(3, 196, 228)}
      {act(4, 280, 500)}
      {act(5, 358, 392)}
      {act(6, 414, 474)}

      {msg(1, 0, 1, 104, 'task request')}
      {msg(2, 1, 2, 130, 'messages + JWT')}
      {self(2, 146, 'authn, classify, redact, screen, quota')}
      {msg(3, 2, 3, 200, 'checked prompt')}
      {msg(4, 3, 2, 226, 'tool_use', true)}
      {msg(5, 2, 1, 256, 'reply, trace ID', true)}
      {msg(6, 1, 4, 284, 'tools/call · OAuth 2.1 token')}
      {self(4, 298, 'agent ID, allow-list, step caps')}

      {/* alt frame */}
      <rect x={446} y={332} width={300} height={150} fill="none" stroke={ink} strokeWidth={1} />
      <path d="M446 332H486V344L478 352H446Z" fill={soft} stroke={ink} strokeWidth={1} />
      <text x={456} y={346} fontSize={10.5} fontWeight={700} fill={ink}>alt</text>
      <text x={494} y={347} fontSize={10.5} fill={ink} fontFamily={mono}>[tool writes data]</text>
      {msg(7, 4, 5, 370, 'approval request')}
      {msg(8, 5, 4, 392, 'approved', true)}
      {msg(9, 4, 6, 420, 'execute write')}
      <line x1={446} x2={746} y1={436} y2={436} stroke={ink} strokeDasharray="5 4" />
      <text x={454} y={450} fontSize={10.5} fill={ink} fontFamily={mono}>[read-only tool]</text>
      {msg(10, 4, 6, 470, 'read, scoped token')}

      {msg(11, 4, 1, 500, 'tool_result, or denial + reason', true)}

      {/* Notes */}
      <rect x={12} y={530} width={736} height={44} rx={3} fill={soft} stroke={line} />
      <rect x={12} y={530} width={4} height={44} fill={navy} />
      <text x={24} y={548} fontSize={10.5} fill={ink}>
        <tspan fontWeight={700}>Kill switch: </tspan>revoke the agent’s identity or disable the tool at the MCP gateway. Calls 2 and 6 then fail.
      </text>
      <text x={24} y={564} fontSize={10.5} fill={muted}>Every message carries one trace ID to the SIEM, including the approver’s decision.</text>
    </svg>
  )
}
