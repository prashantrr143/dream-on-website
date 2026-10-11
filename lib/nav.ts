/**
 * Header navigation. The menu tree itself lives in content/nav.ts (revamp
 * IA: What we do · Who we are · Insights · Careers); this module re-exports
 * it for the header components and holds header-only switches.
 */
export { NAV, NAV_TREE, cleanNav } from '@/content/nav'
export type { NavItem, NavPanel, NavGroup, NavLink, NavDirect } from '@/content/nav'

/** Header search shows type-ahead suggestions. false = plain search box. */
export const SEARCH_TYPEAHEAD = true

/** Set once a careers page has content; it then appears in nav and footer. */
export const CAREERS_URL = ''
