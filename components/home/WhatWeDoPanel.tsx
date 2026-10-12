import { ArrowRight } from 'lucide-react'
import { Tabs } from '@/components/page/Tabs'
import { NAV_TREE, type NavPanel } from '@/content/nav'

/**
 * Home "What we do": tabs for Industries | Consulting | Cloud | Applied AI |
 * Engineering & data, each a link list. Built from the header menu tree so
 * the two never disagree.
 */
const panel = NAV_TREE.find((n): n is NavPanel => n.kind === 'panel' && n.id === 'what-we-do')!
const TABS = ['Industries', 'Consulting', 'Cloud', 'Applied AI', 'Engineering & data']
const groups = panel.groups.filter((g) => TABS.includes(g.label) && g.children && g.children.length > 0)

export function WhatWeDoPanel() {
  return (
    <section className="ys-section-white" aria-labelledby="home-what-we-do">
      <div className="enterprise-container-wide">
        <p className="ys-eyebrow">What we do</p>
        <h2 id="home-what-we-do" style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }}>
          Advice, cloud, AI and engineering from one accountable team
        </h2>
        <Tabs
          tabs={groups.map((g) => ({
            label: g.label,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '0 28px', listStyle: 'none', margin: 0, padding: 0 }}>
                {g.children!.map((l) => (
                  <li key={l.href} style={{ borderBottom: '1px solid var(--line)' }}>
                    <a href={l.href} className="ys-link-row">
                      <span className="ys-link-row-label">{l.label}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ),
          }))}
        />
      </div>
    </section>
  )
}
