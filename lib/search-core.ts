/**
 * Site search: entry shape and ranking. Pure functions, safe to ship to
 * the browser (the header type-ahead) and to use on the server (/search).
 */

export type SearchType = 'Pages' | 'Services' | 'Industries' | 'Insights'

export const SEARCH_TYPES: SearchType[] = ['Pages', 'Services', 'Industries', 'Insights']

export interface SearchEntry {
  title: string
  href: string
  description: string
  type: SearchType
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')

/**
 * Every query word must appear in the title or description. Title hits
 * outrank description hits, and a title word that starts with the query
 * word outranks one that merely contains it.
 */
export function searchEntries(index: SearchEntry[], query: string, limit = 50): SearchEntry[] {
  const words = norm(query).split(/[^a-z0-9.]+/).filter(Boolean)
  if (words.length === 0) return []

  const scored: { entry: SearchEntry; score: number }[] = []
  for (const entry of index) {
    const title = norm(entry.title)
    const desc = norm(entry.description)
    let score = 0
    let all = true
    for (const w of words) {
      if (new RegExp(`(^|[^a-z0-9])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(title)) score += 4
      else if (title.includes(w)) score += 3
      else if (desc.includes(w)) score += 1
      else {
        all = false
        break
      }
    }
    if (all) scored.push({ entry, score })
  }
  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length)
    .slice(0, limit)
    .map((s) => s.entry)
}
