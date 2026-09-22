"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import { pushConsentUpdate, shouldLoadGtm } from '@/lib/analytics'

/** Pages that explain the cookies, where a banner over the text is noise. */
const SUPPRESSED_PATHS = ['/privacy', '/cookies']

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    /** Opens the preferences dialog; used by the footer link. */
    ysOpenConsentPreferences?: () => void
  }
}

function setConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  // gtag is defined by the consent-defaults script, which only renders in
  // production. Guard so the banner still works in development.
  window.gtag?.('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  })
  if (granted) pushConsentUpdate()
}

export function ConsentBanner() {
  const pathname = usePathname()
  const suppressed = SUPPRESSED_PATHS.some((p) => pathname?.startsWith(p))

  useEffect(() => {
    // No analytics in this environment means nothing to consent to.
    if (!shouldLoadGtm(window.location.hostname)) return

    void CookieConsent.run({
      // Strictly necessary: records the choice itself. 6 months.
      cookie: {
        name: 'ys_consent',
        expiresAfterDays: 183,
        sameSite: 'Lax',
      },
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom left',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        // Off by default. No pre-ticked box.
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [{ name: /^_ga/ }],
          },
        },
      },
      onFirstConsent: ({ cookie }) => {
        setConsent(cookie.categories.includes('analytics'))
      },
      onChange: ({ cookie }) => {
        setConsent(cookie.categories.includes('analytics'))
      },
      // A returning visitor's stored choice must be reapplied within the
      // wait_for_update window set in the consent defaults.
      onConsent: ({ cookie }) => {
        setConsent(cookie.categories.includes('analytics'))
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Cookies',
              description:
                'We use one analytics cookie to see which pages help visitors. No advertising, no tracking across other sites. Details in our <a href="/privacy#cookies">Privacy Policy</a>.',
              acceptAllBtn: 'Accept analytics',
              acceptNecessaryBtn: 'Reject',
              showPreferencesBtn: 'Manage',
            },
            preferencesModal: {
              title: 'Cookie settings',
              acceptAllBtn: 'Accept analytics',
              acceptNecessaryBtn: 'Reject',
              savePreferencesBtn: 'Save choices',
              closeIconLabel: 'Close',
              sections: [
                {
                  title: 'Necessary',
                  description:
                    'Required for the site to work, including remembering this choice. Always on.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytics',
                  description:
                    'Google Analytics, to count visits and see which pages are useful. Set only if you accept.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    })

    // Footer "Cookie settings" opens the preferences dialog.
    window.ysOpenConsentPreferences = () => CookieConsent.showPreferences()

    return () => {
      delete window.ysOpenConsentPreferences
    }
  }, [])

  // Hide the banner on the pages that document the cookies, without
  // tearing down the instance: the footer link still opens preferences.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-cc-suppress', suppressed)
  }, [suppressed])

  return null
}

export default ConsentBanner
