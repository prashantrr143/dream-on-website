/**
 * Email bodies for the contact form (owner request, 2026-10-19: the plain
 * notification "looks basic").
 *
 * Email clients ignore most CSS, so these are table layouts with inline
 * styles and system fonts. Every value that came from a visitor goes
 * through `esc` before it reaches HTML.
 *
 * Two messages:
 *  - notifyHtml/notifyText: to the sales inbox, with every field and a
 *    one-click reply.
 *  - ackHtml/ackText: to the visitor. It repeats nothing they typed except
 *    a sanitized first name, so the form cannot be used to send someone
 *    else arbitrary text.
 */

export interface Inquiry {
  name: string
  email: string
  company: string
  role: string
  country: string
  interest: string
  timeline: string
  problem: string
  page: string
}

const SITE = 'https://yatisphere.com'
const NAVY = '#0A1628'
const INK = '#0A1A33'
const MUTED = '#4A5A78'
const RULE = '#E3E8F0'
const BLUE = '#1F4FBF'
const YELLOW = '#F8B800'
// The site's typeface first; mail apps without it fall back to the system font.
const FONT = "'IBM Plex Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

/** First name for a greeting: letters, spaces, hyphens and apostrophes only. */
export function firstName(name: string): string {
  const first = name.trim().split(/\s+/)[0] ?? ''
  const clean = first.replace(/[^\p{L}'-]/gu, '').slice(0, 30)
  return clean || 'there'
}

function stamp(d: Date) {
  const fmt = (tz: string) =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone: tz, day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false,
    }).format(d)
  return `${fmt('Asia/Kolkata')} IST · ${fmt('UTC')} UTC`
}

function shell(preheader: string, body: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#F4F7FB;">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FB;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border:1px solid ${RULE};border-radius:8px;overflow:hidden;font-family:${FONT};">
<tr><td style="background:${NAVY};padding:20px 28px;border-bottom:3px solid ${YELLOW};">
<a href="${SITE}" style="text-decoration:none;font-size:18px;font-weight:700;color:#FFFFFF;letter-spacing:-0.01em;">Yati<span style="color:${YELLOW};">Sphere</span></a>
</td></tr>
${body}
<tr><td style="padding:18px 28px;border-top:1px solid ${RULE};font-size:12px;line-height:1.6;color:${MUTED};">
YatiSphere Technologies Private Limited · Sector 100, Noida, Uttar Pradesh 201301, India<br>
<a href="${SITE}" style="color:${MUTED};">yatisphere.com</a> · <a href="https://www.linkedin.com/company/yatisphere/" style="color:${MUTED};">LinkedIn</a>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`
}

const row = (label: string, value: string) =>
  value
    ? `<tr><td style="padding:9px 0;border-bottom:1px solid ${RULE};width:120px;vertical-align:top;font-size:13px;color:${MUTED};">${label}</td>
<td style="padding:9px 0;border-bottom:1px solid ${RULE};vertical-align:top;font-size:15px;color:${INK};">${value}</td></tr>`
    : ''

const pill = (text: string) =>
  `<span style="display:inline-block;margin:0 6px 6px 0;padding:4px 10px;border-radius:999px;background:#F4F7FB;border:1px solid ${RULE};color:${BLUE};font-size:12px;font-weight:600;">${esc(text)}</span>`

export function notifySubject(q: Inquiry) {
  const parts = [q.company, q.interest || 'General inquiry', q.country].filter(Boolean)
  return `New inquiry: ${parts.join(' · ')}`
}

export function notifyHtml(q: Inquiry, now = new Date()) {
  const replySubject = encodeURIComponent(`Re: your inquiry to YatiSphere`)
  const replyHref = `mailto:${encodeURIComponent(q.email)}?subject=${replySubject}`
  const pills = [q.interest, q.timeline && `Timeline: ${q.timeline}`].filter(Boolean).map((t) => pill(t as string)).join('')
  const page = q.page ? `<a href="${SITE}${esc(q.page)}" style="color:${BLUE};">${esc(q.page)}</a>` : ''

  const body = `
<tr><td style="padding:28px 28px 8px;">
<p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${MUTED};">New website inquiry</p>
<h1 style="margin:0;font-size:22px;line-height:1.3;color:${INK};">${esc(q.name)} <span style="font-weight:400;color:${MUTED};">at</span> ${esc(q.company)}</h1>
<p style="margin:6px 0 0;font-size:14px;color:${MUTED};">${esc(q.country)}${q.role ? ` · ${esc(q.role)}` : ''}</p>
${pills ? `<p style="margin:14px 0 0;">${pills}</p>` : ''}
</td></tr>
<tr><td style="padding:14px 28px 4px;">
<p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${INK};">What they're working on</p>
<div style="padding:14px 16px;background:#F4F7FB;border-left:3px solid ${BLUE};border-radius:4px;font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">${esc(q.problem || '(not given)')}</div>
</td></tr>
<tr><td style="padding:18px 28px 6px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${row('Name', esc(q.name))}
${row('Email', `<a href="mailto:${esc(q.email)}" style="color:${BLUE};">${esc(q.email)}</a>`)}
${row('Company', esc(q.company))}
${row('Role', esc(q.role))}
${row('Country', esc(q.country))}
${row('Interest', esc(q.interest))}
${row('Timeline', esc(q.timeline))}
${row('Sent from', page)}
${row('Received', stamp(now))}
</table>
</td></tr>
<tr><td style="padding:20px 28px 28px;">
<a href="${replyHref}" style="display:inline-block;padding:12px 22px;border-radius:999px;background:${BLUE};color:#FFFFFF;font-size:15px;font-weight:600;text-decoration:none;">Reply to ${esc(firstName(q.name))}</a>
<p style="margin:12px 0 0;font-size:13px;color:${MUTED};">Pressing Reply in your mail app also goes straight to them. We promise a reply within one working day.</p>
</td></tr>`
  return shell(`${q.name} at ${q.company}: ${q.problem.slice(0, 90)}`, body)
}

export function notifyText(q: Inquiry, now = new Date()) {
  const lines: [string, string][] = [
    ['Name', q.name], ['Email', q.email], ['Company', q.company], ['Role', q.role],
    ['Country', q.country], ['Interest', q.interest], ['Timeline', q.timeline],
    ['Sent from', q.page ? SITE + q.page : ''], ['Received', stamp(now)],
  ]
  return `New website inquiry\n\n${lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nWhat they're working on:\n${q.problem || '(not given)'}\n`
}

export const ACK_SUBJECT = 'We have your message: YatiSphere'

export function ackHtml(name: string) {
  const hi = esc(firstName(name))
  const body = `
<tr><td style="padding:30px 28px 10px;">
<h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:${INK};">Thanks, ${hi}. We have your message.</h1>
<p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:${INK};">A senior member of the team will read it and reply within one working day, with an honest view on whether we're the right people for it.</p>
<p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:${INK};">If something is urgent, or you'd like to add detail, reply to this email. It goes straight to our team.</p>
</td></tr>
<tr><td style="padding:0 28px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FB;border-radius:8px;">
<tr><td style="padding:16px 18px;">
<p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${MUTED};">While you wait</p>
<p style="margin:0;font-size:14px;line-height:1.6;color:${INK};">See how a first engagement works: <a href="${SITE}/blueprint" style="color:${BLUE};font-weight:600;">the Solution Blueprint</a>, or read <a href="${SITE}/insights" style="color:${BLUE};font-weight:600;">our latest insights</a>.</p>
</td></tr>
</table>
</td></tr>`
  return shell('A senior member of the team will reply within one working day.', body)
}

export function ackText(name: string) {
  return `Thanks, ${firstName(name)}. We have your message.

A senior member of the team will read it and reply within one working day, with an honest view on whether we're the right people for it.

If something is urgent, or you'd like to add detail, reply to this email. It goes straight to our team.

How a first engagement works: ${SITE}/blueprint

YatiSphere Technologies Private Limited
${SITE}
`
}
