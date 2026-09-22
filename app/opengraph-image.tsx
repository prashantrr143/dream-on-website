import { ImageResponse } from 'next/og'

/**
 * Default Open Graph card, generated at build time.
 *
 * Navy ground, the brand tagline set large, and the wordmark. The mark
 * itself is not drawn here: next/og rasterises a subset of CSS and cannot
 * render the gradient artwork faithfully, so a flat typographic card is
 * used rather than a degraded logo.
 */

export const runtime = 'nodejs'
export const alt =
  'YatiSphere — technology that fixes the problem you actually have.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0A1A33'
const PAPER = '#F7F4EE'
const AMBER = '#F5A524'
const LINE = '#294474'

export default async function OpengraphImage() {
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
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: AMBER,
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: PAPER,
              letterSpacing: -0.5,
            }}
          >
            YatiSphere
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 68,
            lineHeight: 1.12,
            fontWeight: 600,
            color: PAPER,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          Technology that fixes the problem you actually have.
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 24,
            color: '#8FA6CC',
          }}
        >
          <div style={{ display: 'flex' }}>IT services · Applied AI</div>
          <div style={{ display: 'flex' }}>yatisphere.com</div>
        </div>
      </div>
    ),
    size
  )
}
