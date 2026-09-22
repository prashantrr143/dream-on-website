"use client"

import { useEffect } from 'react'
import {
  trackContactLinkClick,
  trackCtaClick,
  trackFileDownload,
  type CtaName,
} from '@/lib/analytics'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

const DOWNLOAD_EXTENSIONS = ['.pdf', '.docx', '.xlsx']

/**
 * The two shared CTAs, matched on their own label text so a link only
 * counts as a CTA click when it really is one — plenty of other links
 * also point at /contact-us.
 */
const CTA_BY_LABEL: Record<string, CtaName> = {
  [PRIMARY_CTA.label.toLowerCase()]: 'tell_us_the_problem',
  [SECONDARY_CTA.label.toLowerCase()]: 'see_how_we_deliver',
}

/**
 * One delegated click listener for contact links and file downloads.
 *
 * A single listener on the document is used rather than handlers on every
 * anchor: links appear in the header, footer, body copy and cards across
 * ~25 pages, and attaching handlers individually would guarantee some get
 * missed as pages change.
 *
 * Only the link type or the file name is recorded. The address itself is
 * never sent, so an email address cannot reach the dataLayer.
 */
export function LinkTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const label = (anchor.textContent ?? '').trim().toLowerCase()
      const cta = CTA_BY_LABEL[label]
      if (cta) {
        trackCtaClick(cta, window.location.pathname)
        return
      }

      if (href.startsWith('mailto:')) {
        trackContactLinkClick('email')
        return
      }
      if (href.startsWith('tel:')) {
        trackContactLinkClick('phone')
        return
      }

      const path = href.split('?')[0]?.split('#')[0]?.toLowerCase() ?? ''
      if (DOWNLOAD_EXTENSIONS.some((ext) => path.endsWith(ext))) {
        // File name only, never the full URL.
        const file = path.split('/').pop() ?? path
        trackFileDownload(file)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

export default LinkTracking
