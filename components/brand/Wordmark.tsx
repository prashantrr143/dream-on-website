import Image from 'next/image'
import { LOGO_ASSETS } from '@/components/brand/YatiSphereLogo'

/**
 * The original YatiSphere lockup (Y mark, "YatiSphere", "Technologies
 * Private Limited" and the "Ideas • Intelligence • Impact" tagline),
 * restored at the owner's request on 2026-10-11 in place of the
 * live-text wordmark. Artwork: public/brand/yatisphere/logo/.
 *
 * Decorative here: the wrapping link carries the accessible name.
 */

interface WordmarkProps {
  /** "dark" for navy surfaces, "light" for paper/white ones. */
  tone?: 'dark' | 'light'
  /** Rendered height in CSS pixels; width follows the artwork's 2.87:1 ratio. */
  height?: number
  priority?: boolean
}

export function Wordmark({ tone = 'dark', height = 52, priority = false }: WordmarkProps) {
  const asset = tone === 'dark' ? LOGO_ASSETS.dark : LOGO_ASSETS.primary
  const width = Math.round((height * asset.width) / asset.height)
  return (
    <Image
      src={asset.src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className="ys-logo-lockup"
      style={{ height, width: 'auto' }}
    />
  )
}
