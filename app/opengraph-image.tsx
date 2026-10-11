import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

/**
 * Default share card (Open Graph / Twitter), generated at build time and
 * attached to every page via socialMeta() in lib/seo.ts.
 *
 * Navy ground, the original YatiSphere lockup, the brand theme set large
 * and the four practices. The lockup is the supplied raster artwork, read
 * from public/ and embedded, so the card matches the site header.
 */

export const runtime = 'nodejs'
export const alt = 'YatiSphere: Enterprise AI, engineered to be trusted.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0A1A33'
const PAPER = '#F7F4EE'
const AMBER = '#F5A524'
const MUTED = '#A6B1C4'
const LINE = '#294474'

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/brand/yatisphere/logo/yatisphere-dark-tagline.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: NAVY,
          padding: '64px 72px',
        }}
      >
        {/* Original lockup at 2.87:1 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={287} height={100} alt="" />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Two explicit lines: next/og lays inline spans out as flex
              items, so a single wrapped sentence breaks unpredictably. */}
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, lineHeight: 1.08, fontWeight: 600, letterSpacing: -2 }}>
            <div style={{ display: 'flex', color: PAPER }}>Enterprise AI, engineered</div>
            <div style={{ display: 'flex', color: PAPER }}>
              to be&nbsp;<span style={{ color: AMBER }}>trusted</span>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 28, lineHeight: 1.4, color: MUTED, maxWidth: 980 }}>
            We advise, build and run platforms on AWS, Microsoft Azure and Google Cloud, and bring governed AI into them.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${LINE}`,
            paddingTop: 24,
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>Consulting · Cloud · Applied AI · Engineering &amp; data</div>
          <div style={{ display: 'flex', color: PAPER }}>yatisphere.com</div>
        </div>
      </div>
    ),
    size
  )
}
