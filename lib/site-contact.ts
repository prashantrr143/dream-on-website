/**
 * Contact and registration details, in one place.
 *
 * The footer renders each line only when its value is non-empty, so a
 * detail can be published by filling it in here — no markup change, and
 * no empty gap while it is blank.
 *
 * Values come from lib/site.config.ts; fill them in there.
 */
import { siteConfig, formatAddress, isCompleteAddress } from './site.config'

interface SiteContact {
  email: string
  phone: string
  linkedin: string
  cin: string
  /** Formatted one-line address; empty until the office is complete. */
  registeredAddress: string
  offices: { label: string; address: string }[]
}

export const SITE_CONTACT: SiteContact = {
  email: siteConfig.company.email,
  phone: siteConfig.company.phone,
  linkedin: siteConfig.company.linkedinUrl,
  cin: siteConfig.company.cin,
  registeredAddress: isCompleteAddress(siteConfig.company.registeredOffice)
    ? formatAddress(siteConfig.company.registeredOffice)
    : '',
  offices: siteConfig.company.offices
    .filter((o) => isCompleteAddress(o.address))
    .map((o) => ({ label: o.label, address: formatAddress(o.address) })),
}
