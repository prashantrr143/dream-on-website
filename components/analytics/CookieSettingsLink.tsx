"use client"

import { useEffect, useState } from 'react'

/**
 * Reopens the consent preferences dialog.
 *
 * Renders nothing until ConsentBanner has registered the opener, so it
 * never appears in environments where analytics does not load and there
 * is therefore no choice to change.
 */
export function CookieSettingsLink() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // ConsentBanner sets this in its own effect; poll briefly rather than
    // racing the mount order of two sibling components.
    const check = () => {
      if (typeof window.ysOpenConsentPreferences === 'function') {
        setReady(true)
        return true
      }
      return false
    }
    if (check()) return
    const id = window.setInterval(() => {
      if (check()) window.clearInterval(id)
    }, 200)
    const stop = window.setTimeout(() => window.clearInterval(id), 5000)
    return () => {
      window.clearInterval(id)
      window.clearTimeout(stop)
    }
  }, [])

  if (!ready) return null

  return (
    <button
      type="button"
      onClick={() => window.ysOpenConsentPreferences?.()}
      className="ys-footer-cookie-settings"
    >
      Cookie settings
    </button>
  )
}

export default CookieSettingsLink
