/**
 * "Anatomy of MCP" article (2026-11-11): the parts of an MCP deployment on
 * one drawing. Host with model and one client per server; a local server
 * over stdio; remote servers over Streamable HTTP behind a gateway; the
 * authorization server and identity provider; the systems servers reach.
 * Plain SVG with theme colours, no client JS.
 */
export function McpAnatomyDiagram() {
  const ink = 'var(--ink-900)'
  const muted = 'var(--ink-600)'
  const line = 'var(--grey-200)'
  const blue = 'var(--blue-600)'
  const amber = 'var(--amber-500)'
  const navy = 'var(--navy-950)'
  const box = { rx: 10, fill: 'var(--white)', stroke: line, strokeWidth: 1.5 }
  const label = { fontSize: 13, fontWeight: 600, fill: ink }
  const small = { fontSize: 11.5, fill: muted }
  const chip = (x: number, y: number, t: string) => (
    <g key={`${x}-${y}-${t}`}>
      <rect x={x} y={y} width={t.length * 6.6 + 16} height={20} rx={10} fill="var(--grey-50)" stroke={line} />
      <text x={x + 8} y={y + 14} fontSize={11} fill={ink}>{t}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 760 470" role="img" aria-labelledby="mcp-anat-title mcp-anat-desc" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <title id="mcp-anat-title">Anatomy of an MCP deployment</title>
      <desc id="mcp-anat-desc">
        An MCP host contains the model and one MCP client per server. One client talks to a local server over stdio. The others talk over Streamable
        HTTP through a gateway to remote servers, which get tokens from an authorization server trusted by the company identity provider. Each server
        exposes tools, resources and prompts and connects to a business system.
      </desc>
      <defs>
        <marker id="mcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={muted} />
        </marker>
      </defs>

      {/* Host */}
      <rect x={16} y={56} width={210} height={330} rx={14} fill={navy} />
      <text x={32} y={84} fontSize={13} fontWeight={700} fill={amber}>MCP HOST</text>
      <text x={32} y={102} fontSize={11.5} fill="var(--ink-300)">Claude, an IDE or your own agent</text>
      <rect x={32} y={118} width={178} height={52} rx={10} fill="var(--navy-900)" stroke="var(--rule-navy)" />
      <text x={46} y={140} fontSize={13} fontWeight={600} fill="var(--white)">Model</text>
      <text x={46} y={157} fontSize={11} fill="var(--ink-300)">reads tool descriptions</text>
      <rect x={32} y={180} width={178} height={36} rx={10} fill="var(--navy-900)" stroke="var(--rule-navy)" />
      <text x={46} y={203} fontSize={12} fill="var(--white)">User approvals and policy</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={32} y={232 + i * 48} width={178} height={38} rx={10} fill="var(--navy-900)" stroke={amber} strokeOpacity={0.6} />
          <text x={46} y={256 + i * 48} fontSize={12.5} fontWeight={600} fill="var(--white)">MCP client {i + 1}</text>
        </g>
      ))}

      {/* Local server (stdio) */}
      <path d="M210 251 C 260 251, 260 120, 300 120" fill="none" stroke={muted} strokeWidth={1.5} markerEnd="url(#mcp-arrow)" />
      <text x={238} y={108} {...small}>stdio</text>
      <rect x={302} y={78} width={196} height={92} {...box} />
      <text x={316} y={100} {...label}>Local server</text>
      <text x={316} y={117} {...small}>a process on the user’s machine</text>
      {chip(316, 132, 'tools')}
      {chip(368, 132, 'resources')}
      {chip(446, 132, 'prompts')}

      {/* Gateway */}
      <path d="M210 299 L 300 299" fill="none" stroke={muted} strokeWidth={1.5} markerEnd="url(#mcp-arrow)" />
      <path d="M210 347 C 250 347, 260 312, 300 312" fill="none" stroke={muted} strokeWidth={1.5} markerEnd="url(#mcp-arrow)" />
      <text x={226} y={276} {...small}>Streamable</text>
      <text x={226} y={290} {...small}>HTTP</text>
      <rect x={302} y={250} width={110} height={110} rx={10} fill="var(--white)" stroke={blue} strokeWidth={1.8} />
      <text x={316} y={274} {...label}>Gateway</text>
      <text x={316} y={292} {...small}>identity</text>
      <text x={316} y={308} {...small}>allowlists</text>
      <text x={316} y={324} {...small}>Mcp-Method</text>
      <text x={316} y={340} {...small}>audit log</text>

      {/* Remote servers */}
      {[0, 1].map((i) => (
        <g key={i}>
          <path d={`M412 ${290 + i * 40} L 470 ${232 + i * 116}`} fill="none" stroke={muted} strokeWidth={1.5} markerEnd="url(#mcp-arrow)" />
          <rect x={472} y={196 + i * 116} width={150} height={88} {...box} />
          <text x={486} y={218 + i * 116} {...label}>Remote server {i + 1}</text>
          {chip(486, 230 + i * 116, 'tools')}
          {chip(538, 230 + i * 116, 'resources')}
          {chip(486, 256 + i * 116, 'prompts')}
        </g>
      ))}

      {/* Systems */}
      {['Document system', 'CRM', 'Core banking'].map((s, i) => (
        <g key={s}>
          <rect x={644} y={i === 0 ? 102 : i === 1 ? 222 : 338} width={110} height={40} rx={8} fill="var(--grey-50)" stroke={line} />
          <text x={654} y={(i === 0 ? 102 : i === 1 ? 222 : 338) + 25} fontSize={11.5} fill={ink}>{s}</text>
        </g>
      ))}
      <path d="M498 122 L 642 122" fill="none" stroke={line} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#mcp-arrow)" />
      <path d="M622 240 L 642 242" fill="none" stroke={line} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#mcp-arrow)" />
      <path d="M622 356 L 642 358" fill="none" stroke={line} strokeWidth={1.5} strokeDasharray="4 4" markerEnd="url(#mcp-arrow)" />

      {/* Auth */}
      <rect x={472} y={14} width={276} height={56} rx={10} fill="var(--white)" stroke={amber} strokeWidth={1.6} />
      <text x={486} y={36} {...label}>Authorization server + your IdP</text>
      <text x={486} y={54} {...small}>OAuth 2.1, tokens bound to one server</text>
      <path d="M547 196 L 547 72" fill="none" stroke={amber} strokeWidth={1.4} strokeDasharray="3 4" markerEnd="url(#mcp-arrow)" />
      <text x={553} y={150} fontSize={11} fill={muted}>trusts</text>

      <text x={16} y={420} fontSize={11.5} fill={muted}>One client per server connection. Servers are OAuth resource servers: they accept tokens, they do not issue them.</text>
      <text x={16} y={440} fontSize={11.5} fill={muted}>Dashed lines: the server’s own call to a business system, with a token issued for that system, never the user’s MCP token.</text>
    </svg>
  )
}
