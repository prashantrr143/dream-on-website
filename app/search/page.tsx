import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { metaFor } from '@/lib/seo'
import { buildSearchIndex } from '@/lib/search-index'
import { SEARCH_TYPES, searchEntries } from '@/lib/search-core'
import { PRIMARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/search')

/**
 * Search results. Same index and ranking as the header type-ahead.
 * Works without JavaScript: the form is a plain GET to this page.
 */
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const raw = (await searchParams)['q']
  const q = (typeof raw === 'string' ? raw : '').trim().slice(0, 120)
  const results = q ? searchEntries(buildSearchIndex(), q) : []

  return (
    <SharedLayout>
      <PageHero eyebrow="Search" title={q ? `Results for “${q}”` : 'Search the site'} visual="network" />

      <PageSection tone="white">
        <form action="/search" method="get" role="search" style={{ display: 'flex', gap: 12, maxWidth: 640, marginBottom: 36 }}>
          <label htmlFor="search-page-q" className="sr-only">
            Search the site
          </label>
          <input
            id="search-page-q"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="What are you looking for?"
            style={{
              flex: 1,
              minWidth: 0,
              padding: '14px 16px',
              fontSize: 16,
              border: '1px solid var(--ys-border)',
              borderRadius: 10,
              background: 'var(--ys-surface)',
              color: 'var(--ys-ink)',
            }}
          />
          <button type="submit" className="ys-cta-primary-light">
            Search
          </button>
        </form>

        {q && (
          <p role="status" style={{ marginBottom: 28, color: 'var(--ink-muted)' }}>
            {results.length === 0
              ? 'Nothing matched. Try a broader word, such as “cloud”, “data” or “AI”.'
              : `${results.length} result${results.length === 1 ? '' : 's'}`}
          </p>
        )}

        {SEARCH_TYPES.map((type) => {
          const group = results.filter((r) => r.type === type)
          if (group.length === 0) return null
          return (
            <section key={type} aria-labelledby={`results-${type}`} style={{ marginBottom: 36 }}>
              <h2 id={`results-${type}`} className="ys-eyebrow" style={{ marginBottom: 14 }}>
                {type}
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, maxWidth: '70ch' }}>
                {group.map((r) => (
                  <li key={r.href} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                    <a href={r.href} className="ys-link" style={{ fontSize: 18, fontWeight: 600 }}>
                      {r.title}
                    </a>
                    <p style={{ marginTop: 6, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{r.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {q && results.length === 0 && (
          <p>
            Or <a href={PRIMARY_CTA.href} className="ys-link">talk to our experts</a> and ask us directly.
          </p>
        )}
      </PageSection>
    </SharedLayout>
  )
}
