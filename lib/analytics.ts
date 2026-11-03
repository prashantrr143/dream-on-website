/**
 * Analytics configuration and the dataLayer event helpers.
 *
 * Nothing here loads a script by itself. The decision to load GTM at all
 * is made in one place — `shouldLoadGtm` — so there is a single answer to
 * "does this environment track visitors?".
 */

/** The production hostname. Analytics loads nowhere else. */
export const PRODUCTION_HOST = 'yatisphere.com'

/**
 * Microsoft Clarity project id (heatmaps and session recordings). Set in
 * .env.production. Clarity loads only in the same environments as GTM,
 * and only after the visitor accepts analytics cookies (ConsentBanner).
 */
export const CLARITY_ID = process.env['NEXT_PUBLIC_CLARITY_ID'] ?? ''

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] }

/**
 * Inject the Clarity tag once, then tell it consent was granted. Inputs
 * are masked by Clarity's default masking; the contact form is also
 * marked data-clarity-mask so nothing typed there is ever recorded.
 */
export function loadClarity(): void {
  if (typeof window === 'undefined' || !CLARITY_ID) return
  const w = window as unknown as { clarity?: ClarityFn }
  if (!w.clarity) {
    const fn: ClarityFn = (...args: unknown[]) => { (fn.q = fn.q || []).push(args) }
    w.clarity = fn
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`
    document.head.appendChild(s)
  }
  w.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
}

/**
 * Mirror a conversion event into Clarity so recordings can be filtered
 * to the sessions that converted. No-op until Clarity has loaded, i.e.
 * until the visitor has accepted analytics cookies.
 */
function clarityEvent(name: string): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { clarity?: ClarityFn }
  w.clarity?.('event', name)
}

/** Withdraw Clarity consent if the visitor changes their mind. */
export function revokeClarity(): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { clarity?: ClarityFn }
  w.clarity?.('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
}

/** GTM container id, set only in .env.production. */
export const GTM_ID = process.env['NEXT_PUBLIC_GTM_ID'] ?? ''

/**
 * Whether GTM may load in this environment.
 *
 * Requires BOTH a container id and an explicit production signal, so the
 * default in any unrecognized environment is "do not track".
 *
 * On Vercel the signal is NEXT_PUBLIC_VERCEL_ENV. It is NOT set by
 * default: enable "Automatically expose System Environment Variables" in
 * the project settings, or add it manually scoped to Production only.
 * Preview builds report "preview" and are excluded. Note that Vercel
 * preview builds do read .env.production, because they are
 * production-mode builds, so the container id alone is never the gate.
 *
 * Off Vercel, the variable is absent and the hostname decides. The server
 * render has no hostname, so `shouldLoadGtm()` with no argument returns
 * false there and GTM is injected on the client instead.
 */
export function shouldLoadGtm(hostname?: string): boolean {
  if (!GTM_ID) return false

  const vercelEnv = process.env['NEXT_PUBLIC_VERCEL_ENV']
  if (vercelEnv) return vercelEnv === 'production'

  if (process.env.NODE_ENV !== 'production') return false
  if (!hostname) return false
  return hostname === PRODUCTION_HOST || hostname === `www.${PRODUCTION_HOST}`
}

/* ------------------------------------------------------------------ *
 * dataLayer events
 *
 * GTM maps these to GA4. No event may carry a name, email address,
 * phone number or message body: the payloads below are closed sets of
 * literals and a pathname, so personal data cannot leak through them.
 * ------------------------------------------------------------------ */

type DataLayerEvent = Record<string, unknown>

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[]
  }
}

function push(event: DataLayerEvent): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(event)
}

/** A contact inquiry was submitted successfully. Carries no form values. */
export function trackContactFormSubmit(pathname: string): void {
  push({ event: 'contact_form_submit', form: 'contact', page: pathname })
  clarityEvent('contact_form_submit')
}

export type CtaName = 'talk_to_experts' | 'get_blueprint'

export function trackCtaClick(cta: CtaName, pathname: string): void {
  push({ event: 'cta_click', cta, page: pathname })
  clarityEvent(`cta_${cta}`)
}

export function trackContactLinkClick(type: 'email' | 'phone'): void {
  push({ event: 'contact_link_click', type })
  clarityEvent(`contact_link_${type}`)
}

export function trackFileDownload(file: string): void {
  push({ event: 'file_download', file })
}

/** Consent was granted or changed. Lets GTM re-evaluate triggers. */
export function pushConsentUpdate(): void {
  push({ event: 'consent_update' })
}

/* Navigation (header mega-menu). Labels and hrefs are site copy, never
 * visitor input, so they are safe to send. */

export function trackNavOpen(menu: string): void {
  push({ event: 'nav_open', menu })
}

export function trackNavGroup(menu: string, group: string): void {
  push({ event: 'nav_group', menu, group })
}

export function trackNavClick(menu: string, group: string | null, label: string, href: string): void {
  push({ event: 'nav_click', menu, group: group ?? '', label, href })
}

export function trackSearchOpen(): void {
  push({ event: 'search_open' })
}

/** Length only: the query text itself is visitor input and is never sent. */
export function trackSearchSubmit(queryLength: number): void {
  push({ event: 'search_submit', query_length: queryLength })
}

export function trackRegionSelect(region: string): void {
  push({ event: 'region_select', region })
}

export function trackMobileNavOpen(): void {
  push({ event: 'mobile_nav_open' })
}

export function trackContactOption(option: string): void {
  push({ event: 'contact_option', option })
}

export function trackFormStep(step: number): void {
  push({ event: 'form_step', step })
}
