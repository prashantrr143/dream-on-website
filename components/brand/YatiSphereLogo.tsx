"use client"

import Image from 'next/image'

/**
 * Single source of truth for YatiSphere logo usage.
 *
 * Artwork note: the supplied `.svg` lockups contain no vector paths — each
 * embeds a base64 PNG at the same resolution as these files. The artwork
 * here is extracted from those SVGs byte-for-byte, so nothing is lost, and
 * serving it as PNG lets next/image emit AVIF/WebP at the right size
 * instead of shipping a ~536KB base64 payload on every page.
 *
 * The TM glyph baked into the supplied lockups has been erased from the
 * three wordmark files (alpha cleared over those glyphs only; no
 * letterform altered), per the brand requirement that it not appear.
 *
 * If true path-based vectors are exported from the original source later,
 * only this component needs to change.
 */

export const LOGO_ASSETS = {
  /** Light surfaces (white footer) — dark lettering. */
  primary: {
    src: '/brand/yatisphere/logo/yatisphere-light-tagline.png',
    width: 1983,
    height: 691,
  },
  /** Dark surfaces (navy header) — light lettering. */
  dark: {
    src: '/brand/yatisphere/logo/yatisphere-dark-tagline.png',
    width: 1983,
    height: 691,
  },
  white: {
    src: '/brand/yatisphere/logo/yatisphere-white-tagline.png',
    width: 1983,
    height: 691,
  },
  hero: {
    src: '/brand/yatisphere/logo/yatisphere-dark-tagline.png',
    width: 1983,
    height: 691,
  },
  /** Icon-only mark. */
  icon: {
    src: '/brand/yatisphere/icon/yatisphere-icon-512.png',
    width: 512,
    height: 512,
  },
} as const

export type LogoVariant = keyof typeof LOGO_ASSETS

interface YatiSphereLogoProps {
  variant?: LogoVariant
  /** Rendered width in CSS pixels; height follows the aspect ratio. */
  width?: number
  className?: string
  priority?: boolean
  /** Pass "" for decorative use where an adjacent link already names the brand. */
  alt?: string
  sizes?: string
}

export function YatiSphereLogo({
  variant = 'primary',
  width = 190,
  className,
  priority = false,
  alt = 'YatiSphere Technologies logo',
  sizes,
}: YatiSphereLogoProps) {
  const asset = LOGO_ASSETS[variant]
  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes={sizes ?? `${width}px`}
      className={className}
      style={{ width, height: 'auto' }}
    />
  )
}

export default YatiSphereLogo
