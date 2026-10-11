"use client"

import { useCallback, useEffect, useState } from 'react'

/**
 * Visitor's region preference (header region selector).
 *
 * Stored per browser only; there is no geo-IP and no redirect. Choosing
 * a region changes the header label and pre-selects the country on the
 * contact form where the region maps to a single country.
 */

export interface Region {
  slug: string
  label: string
  /** Shown in the trigger, e.g. "UK (EN)". */
  short: string
  /** Contact-form country to pre-select, when the region is one country. */
  country?: string
  /** True when /regions/{slug} exists (lib/region-pages.ts). */
  hasPage?: boolean
}

export const REGIONS: Region[] = [
  { slug: 'global', label: 'Global', short: 'Global' },
  { slug: 'india', label: 'India', short: 'India', country: 'India' },
]

/**
 * The header and mobile region control. Off while India is the only
 * region (owner decision, 2026-10-11); turn back on when more regions
 * are added to REGIONS.
 */
export const REGION_SELECTOR_ENABLED = false

const KEY = 'ys-region'
const EVENT = 'ys-region-change'
const DEFAULT = REGIONS[0] as Region

export function readRegion(): Region {
  try {
    const slug = window.localStorage.getItem(KEY)
    return REGIONS.find((r) => r.slug === slug) ?? DEFAULT
  } catch {
    return DEFAULT
  }
}

/** Current region, kept in sync across every component that uses it. */
export function useRegion(): [Region, (slug: string) => void] {
  const [region, setState] = useState<Region>(DEFAULT)

  useEffect(() => {
    setState(readRegion())
    const sync = () => setState(readRegion())
    window.addEventListener(EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const setRegion = useCallback((slug: string) => {
    const next = REGIONS.find((r) => r.slug === slug) ?? DEFAULT
    try {
      window.localStorage.setItem(KEY, next.slug)
    } catch {
      // Private mode or blocked storage: the choice lasts for this page only.
    }
    setState(next)
    window.dispatchEvent(new Event(EVENT))
  }, [])

  return [region, setRegion]
}
