"use client"

import { useId, useState } from 'react'
import { Check, ChevronDown, ChevronRight, Globe } from 'lucide-react'
import { REGIONS, type Region } from '@/lib/region'
import { trackRegionSelect } from '@/lib/analytics'

/**
 * The "Regions" accordion: used inside the desktop dropdown and pinned at
 * the bottom of the mobile menu. TCS's second row ("Local language
 * sites") is omitted until translated sites exist.
 */
export function RegionList({
  region,
  onSelect,
  defaultOpen = false,
}: {
  region: Region
  onSelect: (slug: string) => void
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="ys-region-acc">
      <button
        type="button"
        className="ys-region-row"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>Regions</span>
        <ChevronRight className="ys-region-row-chev" strokeWidth={1.75} aria-hidden="true" />
      </button>
      {open && (
        <ul id={`${id}-list`} className="ys-region-list">
          {REGIONS.map((r) => (
            <li key={r.slug}>
              <button
                type="button"
                className="ys-region-option"
                aria-pressed={r.slug === region.slug}
                onClick={() => {
                  trackRegionSelect(r.slug)
                  onSelect(r.slug)
                }}
              >
                <span>{r.label}</span>
                {r.slug === region.slug && <Check className="w-4 h-4" strokeWidth={2} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Desktop trigger plus the small right-aligned dropdown under it. */
export function RegionSelector({
  region,
  open,
  onToggle,
  onSelect,
  triggerRef,
}: {
  region: Region
  open: boolean
  onToggle: () => void
  onSelect: (slug: string) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}) {
  const id = useId()
  return (
    <div className="ys-region">
      <button
        ref={triggerRef}
        type="button"
        className={`ys-region-trigger${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls={open ? `${id}-panel` : undefined}
        onClick={onToggle}
      >
        <Globe className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">Region: </span>
        <strong>{region.short} (EN)</strong>
        <ChevronDown className="ys-hdr-chev" strokeWidth={2} aria-hidden="true" />
      </button>
      {open && (
        <div id={`${id}-panel`} className="ys-region-panel" role="region" aria-label="Choose your region">
          <RegionList region={region} onSelect={onSelect} />
          {region.hasPage && (
            <a href={`/regions/${region.slug}`} className="ys-region-page-link">
              Working with us from {region.slug === 'uk' ? 'the UK' : 'the ' + region.label}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
