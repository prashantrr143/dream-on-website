import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

/**
 * Per-page share card (2026-11-04). socialMeta() in lib/seo.ts points each
 * page's og:image here with its own title (t) and section label (k), so a
 * shared link shows what the page is about instead of one generic card.
 * Same palette and lockup as app/opengraph-image.tsx, which stays the
 * home page card.
 */

export const runtime = 'nodejs'

const NAVY = '#0A1628'
const PAPER = '#F7F4EE'
const AMBER = '#F8B800'
const MUTED = '#A6B1C4'
const LINE = '#294474'

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s)

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams
  const title = clip(q.get('t') ?? 'Cloud and AI that make it into production', 96)
  const kicker = clip(q.get('k') ?? 'YatiSphere', 48)
  const size = title.length > 64 ? 56 : title.length > 40 ? 64 : 72

  const logo = await readFile(join(process.cwd(), 'public/brand/yatisphere/logo/yatisphere-dark-tagline.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: NAVY, padding: '60px 72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain img */}
          <img src={logoSrc} width={230} height={80} alt="" />
          <div style={{ display: 'flex', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: AMBER, fontWeight: 600 }}>{kicker}</div>
        </div>
        <div style={{ display: 'flex', fontSize: size, lineHeight: 1.12, fontWeight: 600, letterSpacing: -1.5, color: PAPER, maxWidth: 1040 }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${LINE}`, paddingTop: 22, fontSize: 24, color: MUTED }}>
          <div style={{ display: 'flex' }}>Cloud · Software · Data · Applied AI</div>
          <div style={{ display: 'flex', color: PAPER }}>yatisphere.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400' } },
  )
}
