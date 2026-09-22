import Script from 'next/script'
import { GTM_ID, shouldLoadGtm } from '@/lib/analytics'

/**
 * Consent Mode v2 defaults.
 *
 * This must execute before the GTM container, or a tag can fire once
 * before consent is known. It is emitted as a plain inline <script> in
 * <head> rather than through next/script, because that is the only way
 * to guarantee it runs first: next/script's `beforeInteractive` is not
 * honoured inside client components, and `afterInteractive` would race
 * the container.
 *
 * Everything except security_storage defaults to denied. `wait_for_update`
 * gives the banner 500ms to restore a stored choice before GTM decides
 * what it may do, so a returning visitor who accepted is not briefly
 * treated as denied.
 */
const CONSENT_DEFAULTS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  functionality_storage:'denied',
  personalization_storage:'denied',
  security_storage:'granted',
  wait_for_update: 500
});
`.trim()

const gtmSnippet = (id: string) =>
  `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');
`.trim()

/**
 * Consent defaults plus the GTM container, for <head>.
 *
 * Server component: on Vercel, NEXT_PUBLIC_VERCEL_ENV is inlined at build
 * time, so this whole subtree is simply absent from preview and
 * development builds rather than being hidden at runtime.
 */
export function GoogleTagManager() {
  if (!shouldLoadGtm()) return null

  return (
    <>
      {/* Runs first: plain script, not next/script. */}
      <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULTS }} />
      <Script id="gtm-container" strategy="afterInteractive">
        {gtmSnippet(GTM_ID)}
      </Script>
    </>
  )
}

/**
 * The <noscript> fallback iframe, for the top of <body>.
 *
 * With JavaScript disabled the consent banner cannot run, so Consent Mode
 * never moves off its denied default and this cannot set an analytics
 * cookie on its own.
 */
export function GoogleTagManagerNoScript() {
  if (!shouldLoadGtm()) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

export default GoogleTagManager
