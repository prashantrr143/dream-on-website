import { NextResponse } from 'next/server'
import { ALL_COUNTRIES, CONTACT_INTERESTS, CONTACT_TIMELINES } from '@/lib/countries'

/**
 * Contact form handler.
 *
 * The form previously faked success with a timeout and sent nothing.
 * This route delivers each inquiry by email through Resend's REST API
 * (plain fetch, no SDK). It is switched on by three environment variables:
 *
 *   RESEND_API_KEY      API key
 *   CONTACT_TO_EMAIL    inbox that receives inquiries
 *   CONTACT_FROM_EMAIL  sender on a domain verified in Resend
 *
 * Until they are set the route answers 503, and the form tells the
 * visitor to email instead — it never claims a message was sent when
 * it was not.
 */

const MAX = { name: 120, email: 200, company: 160, role: 120, problem: 5000 }

// Best-effort per-instance rate limit. Serverless instances do not share
// memory, so this slows a single noisy client rather than guaranteeing a
// global cap; the honeypot does most of the anti-spam work.
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > LIMIT
}

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field. Answer as if
  // it worked so bots get no signal.
  if (str(body['website'], 200)) return NextResponse.json({ ok: true })

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 })

  const data = {
    name: str(body['name'], MAX.name),
    email: str(body['email'], MAX.email),
    company: str(body['company'], MAX.company),
    role: str(body['role'], MAX.role),
    country: str(body['country'], 80),
    interest: str(body['interest'], 40),
    timeline: str(body['timeline'], 40),
    problem: str(body['problem'], MAX.problem),
  }

  const errors: string[] = []
  if (!data.name) errors.push('name')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('email')
  if (!data.company) errors.push('company')
  if (!ALL_COUNTRIES.includes(data.country)) errors.push('country')
  if (data.interest && !(CONTACT_INTERESTS as readonly string[]).includes(data.interest)) errors.push('interest')
  if (data.timeline && !(CONTACT_TIMELINES as readonly string[]).includes(data.timeline)) errors.push('timeline')
  if (errors.length) return NextResponse.json({ error: 'invalid', fields: errors }, { status: 400 })

  const apiKey = process.env['RESEND_API_KEY']
  const to = process.env['CONTACT_TO_EMAIL']
  const from = process.env['CONTACT_FROM_EMAIL']
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Role', data.role],
    ['Country', data.country],
    ['Interest', data.interest],
    ['Timeline', data.timeline],
  ]
  const text =
    rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nProblem:\n${data.problem || '(not given)'}`
  const html =
    `<table>${rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><th align="left">${k}</th><td>${escapeHtml(v)}</td></tr>`)
      .join('')}</table>` +
    `<p><strong>Problem</strong></p><p style="white-space:pre-wrap">${escapeHtml(data.problem || '(not given)')}</p>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Website inquiry: ${data.company} (${data.country})`,
      text,
      html,
    }),
  })

  if (!res.ok) {
    console.error('Contact form delivery failed', res.status, await res.text().catch(() => ''))
    return NextResponse.json({ error: 'delivery_failed' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
