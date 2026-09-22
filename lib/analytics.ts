/**
 * Analytics configuration and the dataLayer event helpers.
 *
 * Nothing here loads a script by itself. The decision to load GTM at all
 * is made in one place — `shouldLoadGtm` — so there is a single answer to
 * "does this environment track visitors?".
 */

/** The production hostname. Analytics loads nowhere else. */
export const PRODUCTION_HOST = 'yatisphere.com'

/** GTM container id, set only in .env.production. */
export const GTM_ID = process.env['NEXT_PUBLIC_GTM_ID'] ?? ''

/**
 * Whether GTM may load in this environment.
 *
 * Requires BOTH a container id and an explicit production signal, so the
 * default in any unrecognised environment is "do not track".
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

/** A contact enquiry was submitted successfully. Carries no form values. */
export function trackContactFormSubmit(pathname: string): void {
  push({ event: 'contact_form_submit', form: 'contact', page: pathname })
}

export type CtaName = 'tell_us_the_problem' | 'see_how_we_deliver'

export function trackCtaClick(cta: CtaName, pathname: string): void {
  push({ event: 'cta_click', cta, page: pathname })
}

export function trackContactLinkClick(type: 'email' | 'phone'): void {
  push({ event: 'contact_link_click', type })
}

export function trackFileDownload(file: string): void {
  push({ event: 'file_download', file })
}

/** Consent was granted or changed. Lets GTM re-evaluate triggers. */
export function pushConsentUpdate(): void {
  push({ event: 'consent_update' })
}
