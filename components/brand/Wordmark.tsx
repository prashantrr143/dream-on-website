import Image from 'next/image'

/**
 * Header and footer wordmark (audit G-01).
 *
 * The supplied lockups are raster files that bake in "Technologies
 * Private Limited" and a micro-tagline, which are illegible at header
 * size and read as a legal suffix. This keeps the same construction as
 * the lockup (the icon stands in for the "Y", then "ati" and a blue
 * "Sphere") but sets the letters as live text, so it is sharp at any
 * density. The legal name stays in the footer and on legal pages.
 *
 * Decorative: the wrapping link carries the accessible name.
 */

interface WordmarkProps {
  /** "dark" for navy surfaces, "light" for paper/white ones. */
  tone?: 'dark' | 'light'
  /** Cap height driver, in CSS pixels. */
  size?: number
  priority?: boolean
}

export function Wordmark({ tone = 'dark', size = 28, priority = false }: WordmarkProps) {
  return (
    <span
      className={`ys-wordmark ys-wordmark--${tone}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      <Image
        src="/brand/yatisphere/icon/yatisphere-icon-192.png"
        alt=""
        width={192}
        height={192}
        priority={priority}
        className="ys-wordmark-y"
      />
      <span className="ys-wordmark-ati">ati</span>
      <span className="ys-wordmark-sphere">Sphere</span>
    </span>
  )
}
