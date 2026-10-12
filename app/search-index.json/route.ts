import { buildSearchIndex } from '@/lib/search-index'

/** Prerendered at build time; the header type-ahead fetches it once. */
export const dynamic = 'force-static'

export function GET() {
  return Response.json(buildSearchIndex())
}
