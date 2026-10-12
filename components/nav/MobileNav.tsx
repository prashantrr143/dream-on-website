"use client"

import { useId, useState } from 'react'
import { ChevronDown, Globe, Minus, Plus } from 'lucide-react'
import { NAV, type NavPanel } from '@/lib/nav'
import { RegionList } from './RegionSelector'
import { REGION_SELECTOR_ENABLED, type Region } from '@/lib/region'

/**
 * Mobile and tablet menu (<1200px), TCS-style:
 * - Level 1 rows expand inline, one at a time; the open section turns
 *   the active-row color and every other level-1 label recedes.
 * - Level 2 starts with the section's overview link, then groups (+/-)
 *   and direct links. Level 3 expands inline under its group.
 * - Region and the primary CTA are pinned at the bottom.
 */
export function MobileNav({
  id,
  region,
  onSelectRegion,
  onNavigate,
}: {
  id: string
  region: Region
  onSelectRegion: (slug: string) => void
  onNavigate: () => void
}) {
  const [l1, setL1] = useState<string | null>(null)
  const [l2, setL2] = useState<string | null>(null)
  const [regionOpen, setRegionOpen] = useState(false)
  const uid = useId()

  const toggleL1 = (key: string) => {
    setL1((cur) => (cur === key ? null : key))
    setL2(null)
  }

  return (
    <div id={id} className={`ys-mnav${l1 ? ' has-open' : ''}`}>
      <ul className="ys-mnav-list">
        {NAV.map((item) => {
          if (item.kind === 'link') {
            return (
              <li key={item.id} className="ys-mnav-section">
                <a href={item.href} className="ys-mnav-l1" onClick={onNavigate}>
                  {item.label}
                </a>
              </li>
            )
          }
          const open = l1 === item.id
          const panel = item as NavPanel
          return (
            <li key={item.id} className={`ys-mnav-section${open ? ' is-open' : ''}`}>
              <button
                type="button"
                className="ys-mnav-l1"
                aria-expanded={open}
                aria-controls={`${uid}-${item.id}`}
                onClick={() => toggleL1(item.id)}
              >
                <span>{item.label}</span>
                <ChevronDown className="ys-mnav-chev" strokeWidth={1.75} aria-hidden="true" />
              </button>
              {open && (
                <ul id={`${uid}-${item.id}`} className="ys-mnav-l2">
                  {/* First row is always the section overview. */}
                  <li>
                    <a href={panel.overviewHref} className="ys-mnav-l2row" onClick={onNavigate}>
                      {panel.intro.heading}
                    </a>
                  </li>
                  {panel.groups.map((g) => {
                    const key = `${item.id}:${g.label}`
                    if (!g.children) {
                      return (
                        <li key={key}>
                          <a href={g.href} className="ys-mnav-l2row" onClick={onNavigate}>
                            {g.label}
                          </a>
                        </li>
                      )
                    }
                    const gOpen = l2 === key
                    return (
                      <li key={key}>
                        <button
                          type="button"
                          className="ys-mnav-l2row"
                          aria-expanded={gOpen}
                          aria-controls={`${uid}-${slugKey(key)}`}
                          onClick={() => setL2(gOpen ? null : key)}
                        >
                          <span>{g.label}</span>
                          {gOpen ? (
                            <Minus className="ys-mnav-pm" strokeWidth={1.75} aria-hidden="true" />
                          ) : (
                            <Plus className="ys-mnav-pm" strokeWidth={1.75} aria-hidden="true" />
                          )}
                        </button>
                        {gOpen && (
                          <ul id={`${uid}-${slugKey(key)}`} className="ys-mnav-l3">
                            {g.children.map((c) => (
                              <li key={c.href}>
                                <a href={c.href} className="ys-mnav-l3row" onClick={onNavigate}>
                                  {c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>

      {/* Pinned to the bottom of the panel */}
      <div className="ys-mnav-bottom">
        {REGION_SELECTOR_ENABLED && (
        <div className="ys-mnav-section">
          <button
            type="button"
            className="ys-mnav-l1"
            aria-expanded={regionOpen}
            aria-controls={`${uid}-region`}
            onClick={() => setRegionOpen((v) => !v)}
          >
            <span className="inline-flex items-center gap-3">
              <Globe className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              <span>
                <span className="sr-only">Region: </span>
                <strong>{region.short} (EN)</strong>
              </span>
            </span>
            <ChevronDown className="ys-mnav-chev" strokeWidth={1.75} aria-hidden="true" />
          </button>
          {regionOpen && (
            <div id={`${uid}-region`} className="ys-mnav-region">
              <RegionList region={region} onSelect={onSelectRegion} defaultOpen />
              {region.hasPage && (
                <a href={`/regions/${region.slug}`} className="ys-region-page-link" onClick={onNavigate}>
                  Working with us from {region.slug === 'uk' ? 'the UK' : 'the ' + region.label}
                </a>
              )}
            </div>
          )}
        </div>
        )}
        <div className="ys-mnav-section">
          <a href="/contact-us" className="ys-mnav-l1" onClick={onNavigate}>
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const slugKey = (s: string) => s.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
