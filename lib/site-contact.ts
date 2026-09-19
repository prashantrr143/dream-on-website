/**
 * Contact and registration details, in one place.
 *
 * The footer renders each line only when its value is non-empty, so a
 * detail can be published by filling it in here — no markup change, and
 * no empty gap while it is blank.
 */
interface SiteContact {
  email: string
  phone: string
  linkedin: string
  cin: string
  registeredAddress: string
}

export const SITE_CONTACT: SiteContact = {
  /** mailto link in the footer brand block. */
  email: 'hello@yatisphere.com',
  /** tel link. Empty until a published number exists. */
  phone: '',
  /** Full profile URL. Empty until the company page is live. */
  linkedin: '',
  /** Corporate Identification Number, appended to the copyright line. */
  cin: '',
  /** Registered office, rendered under the copyright line. */
  registeredAddress: '',
}
