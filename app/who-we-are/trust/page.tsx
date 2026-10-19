import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { metaFor } from '@/lib/seo'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { PRIMARY_CTA } from '@/lib/cta'
import { LEGAL_LAST_UPDATED, LEGAL_ENTITY_NAME } from '@/lib/legal'
import { SITE_CONTACT } from '@/lib/site-contact'
import { siteConfig } from '@/lib/site.config'

export const metadata: Metadata = metaFor('/who-we-are/trust')

/**
 * Trust center (audit T-01).
 *
 * Every statement here describes how the company actually works today.
 * No certification, audit, SOC, round-the-clock monitoring or response
 * time is claimed, because none is held or offered. Lists that come
 * from siteConfig.trust render an honest fallback while they are empty.
 */

const SECURITY_PACK_CTA = {
  label: 'Request NDA + security pack',
  href: '/contact-us?interest=security#book',
}

const SECTIONS = [
  { id: 'practices', label: 'Security practices' },
  { id: 'certifications', label: 'Certification roadmap' },
  { id: 'subprocessors', label: 'Subprocessors' },
  { id: 'documents', label: 'Documents' },
  { id: 'incidents', label: 'Incident and security contact' },
  { id: 'company', label: 'Company details' },
]

/** Concrete practices only; each one is something a reviewer can ask us to show. */
const PRACTICES = [
  {
    label: 'We work in your accounts.',
    body: 'We build in your cloud accounts and your chosen region. Your data stays there, under your control, and is never copied into shared environments of ours.',
  },
  {
    label: 'Least-privilege access.',
    body: 'Our engineers are given the access a task needs and no more.',
  },
  {
    label: 'Your data does not train our models.',
    body: 'We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model. You keep ownership of your data throughout.',
  },
  {
    label: 'Threats are considered at design time.',
    body: 'We work through how a system could be misused during architecture and design, before build begins.',
  },
  {
    label: 'Code is reviewed before it merges.',
    body: 'Changes go through code review as part of normal delivery, not as a separate step before launch.',
  },
  {
    label: 'Encryption in what we build.',
    body: 'Systems we build encrypt data in transit and at rest.',
  },
  {
    label: 'An audit trail by default.',
    body: 'Systems we build log access and changes, and we document design decisions so what was built can be traced back to what was agreed.',
  },
]

interface SubprocessorRow {
  name: string
  purpose: string
  location: ReactNode
}

/**
 * Website providers, as already disclosed in the privacy policy. Their
 * processing locations are not stated there, so the table points to the
 * policy's international transfers section rather than guessing.
 */
const WEBSITE_SUBPROCESSORS: SubprocessorRow[] = [
  {
    name: 'Vercel Inc.',
    purpose:
      'Website hosting. Processes request data, including IP address, in order to serve the site.',
    location: <a href="/privacy#transfers">See international transfers</a>,
  },
  {
    name: 'Google LLC (Google Analytics 4)',
    purpose:
      'Website analytics. Runs only after you accept analytics cookies.',
    location: <a href="/privacy#transfers">See international transfers</a>,
  },
  {
    name: 'Resend, Inc.',
    purpose: 'Email delivery. Delivers messages sent through our contact form to our inbox.',
    location: <a href="/privacy#transfers">See international transfers</a>,
  },
]

const SUBPROCESSORS: SubprocessorRow[] = [
  ...WEBSITE_SUBPROCESSORS,
  ...siteConfig.trust.subprocessors,
]

const { certificationsRoadmap, documents } = siteConfig.trust

/** The answers a reviewer looks for first, each linking to its section. */
const AT_A_GLANCE = [
  { label: 'Your cloud, your region', body: 'We build in your accounts. Client data never moves into ours.', href: '#practices' },
  { label: 'No certification yet', body: 'UK Cyber Essentials in progress; ISO/IEC 27001 planned.', href: '#certifications' },
  {
    label: `${SUBPROCESSORS.length} subprocessors`,
    body: siteConfig.trust.subprocessors.length === 0 ? 'All for this website only: hosting, analytics, email.' : 'Website providers plus those listed for client work.',
    href: '#subprocessors',
  },
  { label: 'DPA and security pack', body: 'Available on request, under NDA.', href: '#documents' },
]

const COMPANY_DETAILS = [
  { label: 'Legal name', value: LEGAL_ENTITY_NAME },
  { label: 'Corporate Identification Number (CIN)', value: siteConfig.company.cin },
  { label: 'Registered office', value: SITE_CONTACT.registeredAddress },
].filter((item) => item.value)

export default function TrustPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Trust"
        title="Trust center"
        lede="How we handle security and data, who processes data for us, and how to get the documents your review needs."
        visual="circuit"
        secondaryCta={SECURITY_PACK_CTA}
      />

      <PageSection tone="white">
        <ul className="ys-legal-glance">
          {AT_A_GLANCE.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <span className="ys-legal-glance-label">{item.label}</span>
                <span className="ys-legal-glance-body">{item.body}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="ys-legal-layout">
          <nav className="ys-legal-toc" aria-label="Contents">
            <p className="ys-legal-toc-title">Contents</p>
            <ol>
              {SECTIONS.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span aria-hidden="true">{i + 1}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="ys-legal">
            <p className="ys-legal-intro">
              We are a small engineering firm, and this page says plainly what we
              do to protect the systems and data you trust us with, and what we
              do not yet have. Last updated {LEGAL_LAST_UPDATED}.
            </p>

            <section id="practices">
              <h2>1. Security practices</h2>
              <ul>
                {PRACTICES.map((practice) => (
                  <li key={practice.label}>
                    <strong>{practice.label}</strong> {practice.body}
                  </li>
                ))}
              </ul>
            </section>

            <section id="certifications">
              <h2>2. Certification roadmap</h2>
              <p>
                YatiSphere does not hold security certifications yet. We design
                client systems against SOC 2, ISO/IEC 27001 and similar
                frameworks; the certifications are assessed against your
                organization.
              </p>
              {certificationsRoadmap.length > 0 && (
                <>
                  <p>For our own organization, the plan is:</p>
                  <ul>
                    {certificationsRoadmap.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>We will update this page as each one is achieved.</p>
                </>
              )}
            </section>

            <section id="subprocessors">
              <h2>3. Subprocessors</h2>
              <p>
                These providers process personal data for our website. Client
                engagements run in your own cloud accounts, so the providers there
                are yours to choose.
              </p>
              <div className="ys-cookie-table-wrap" tabIndex={0} role="region" aria-label="Subprocessors (scrollable table)">
                <table className="ys-cookie-table">
                  <caption className="sr-only">
                    Subprocessors, their purpose and location
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Subprocessor</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUBPROCESSORS.map((row, i) => (
                      <tr key={row.name}>
                        {/* Row headers read as body text, not as the
                            mono column-header style the table class sets. */}
                        <th
                          scope="row"
                          style={{
                            fontFamily: 'inherit',
                            fontSize: 14,
                            fontWeight: 600,
                            letterSpacing: 'normal',
                            textTransform: 'none',
                            color: 'var(--ink-900)',
                            background: 'transparent',
                            whiteSpace: 'normal',
                            borderBottom: i === SUBPROCESSORS.length - 1 ? 0 : undefined,
                          }}
                        >
                          {row.name}
                        </th>
                        <td>{row.purpose}</td>
                        <td>{row.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Our <a href="/privacy">privacy policy</a> describes what these
                providers process and the cookies analytics sets.
              </p>
            </section>

            <section id="documents">
              <h2>4. Documents</h2>
              {documents.length > 0 ? (
                <ul>
                  {documents.map((doc) => (
                    <li key={doc.href}>
                      <a href={doc.href}>{doc.title}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  Documents such as our data processing agreement (DPA) are
                  provided on request. Use{' '}
                  <a href={SECURITY_PACK_CTA.href}>
                    request NDA and security pack
                  </a>{' '}
                  and tell us what your review needs.
                </p>
              )}
            </section>

            <section id="incidents">
              <h2>5. Incident and security contact</h2>
              <p>
                To report a security concern or a suspected incident, or to ask a
                security question, email{' '}
                <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>.
                Tell us what you saw, where and when, and how to reach you.
              </p>
              <p>
                If a personal data breach is likely to result in a risk to your
                rights, we will notify you and the relevant supervisory authority as
                required by applicable law.
              </p>
            </section>

            {COMPANY_DETAILS.length > 0 && (
              <section id="company" className="ys-legal-divided">
                <h2>6. Company details</h2>
                <ul>
                  {COMPANY_DETAILS.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </PageSection>

      <PageCTA
        title="Running a security review?"
        body="Ask for our NDA and security pack, or book a call to talk it through."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={SECURITY_PACK_CTA}
      />
    </SharedLayout>
  )
}
