import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { LEGAL_LAST_UPDATED, LEGAL_ENTITY_NAME } from '@/lib/legal'


export const metadata: Metadata = metaFor('/privacy')

const SECTIONS = [
  { id: 'collection', label: 'Information we collect' },
  { id: 'use', label: 'How we use it' },
  { id: 'legal-basis', label: 'Legal basis for processing' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'sharing', label: 'Disclosing personal information' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'security', label: 'Security' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'rights', label: 'Your rights' },
  { id: 'dpdp', label: 'Rights under India’s DPDP Act' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
]

const AT_A_GLANCE = [
  {
    label: 'We collect very little',
    body: 'Contact details you send us, and standard technical logs.',
    href: '#collection',
  },
  {
    label: 'Your data is not training data',
    body: 'No client data trains models, ever.',
    href: '#use',
  },
  {
    label: 'We do not sell your data',
    body: 'No sale, no rental, no marketing lists.',
    href: '#sharing',
  },
  {
    label: 'You can have it deleted',
    body: 'Write to us and we will act within 30 days.',
    href: '#rights',
  },
]

export default function PrivacyPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede={`Last updated ${LEGAL_LAST_UPDATED}`}
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
              This policy explains how {LEGAL_ENTITY_NAME} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses and protects
              personal information when you use our website or engage our services.
              We are incorporated in India and work with clients in the United
              Kingdom, Europe, the United States, the Middle East and India.
              We collect only what we need to operate the website and work with
              clients. We do not sell personal data, and we do not use client data
              to train AI models.
            </p>

            <section>
              <p>
                For the purposes of applicable data protection law, including
                India&apos;s Digital Personal Data Protection Act, 2023 (the
                &ldquo;DPDP Act&rdquo;) and, where it applies to the people we deal
                with, the EU and UK General Data Protection Regulation
                (&ldquo;GDPR&rdquo;), {LEGAL_ENTITY_NAME} is the data controller for
                the information described in this policy.
              </p>
              <p>
                Where we process personal data on behalf of a client as part of a
                delivery engagement, the client is the controller and we act as a
                processor on their documented instructions, under the terms of the
                engagement.
              </p>
            </section>

            <section id="collection">
              <h2>1. Information we collect</h2>
              <p>We may collect, store and use the following:</p>
              <ul>
                <li>
                  <strong>Information you give us.</strong> Your name, email
                  address, company, and anything you choose to include when you
                  contact us or respond to us.
                </li>
                <li>
                  <strong>Technical information.</strong> Information about your
                  device and visit, including IP address, approximate location
                  derived from it, browser type and version, operating system, pages
                  viewed and referring URL.
                </li>
                <li>
                  <strong>Correspondence.</strong> A record of our communications
                  with you and your stated preferences.
                </li>
              </ul>
              <p>
                We do not knowingly collect special category data, and we do not ask
                for it. Please do not send us sensitive personal information through
                the website.
              </p>
              <p>
                Before you disclose to us the personal information of another person,
                you must have a lawful basis for doing so.
              </p>
            </section>

            <section id="use">
              <h2>2. How we use it</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>respond to your enquiry and correspond with you about it</li>
                <li>provide, deliver and support the services you have engaged us for</li>
                <li>issue statements and invoices, and collect payment</li>
                <li>operate, secure and improve our website</li>
                <li>send communications you have specifically asked to receive</li>
                <li>deal with complaints and enquiries</li>
                <li>prevent fraud and misuse, and keep our systems secure</li>
                <li>comply with our legal and regulatory obligations</li>
              </ul>
              <p>
                <strong>We do not use client data to train machine-learning
                models.</strong> Client data stays within the boundary agreed in the
                engagement. Our wider approach to AI governance is set out in our{' '}
                <a href="/responsible-ai">Responsible AI</a> statement.
              </p>
              <p>
                We do not carry out behavioural advertising, and we do not make
                decisions producing legal or similarly significant effects about you
                by automated means alone.
              </p>
            </section>

            <section id="legal-basis">
              <h2>3. Legal basis for processing</h2>
              <p>Where the GDPR applies, we rely on:</p>
              <ul>
                <li>
                  <strong>Legitimate interests</strong> &mdash; responding to
                  business enquiries, operating and securing our website, and
                  managing our client relationships.
                </li>
                <li>
                  <strong>Performance of a contract</strong> &mdash; delivering
                  services and administering the engagement.
                </li>
                <li>
                  <strong>Consent</strong> &mdash; where you have asked to receive
                  particular communications. You may withdraw consent at any time.
                </li>
                <li>
                  <strong>Legal obligation</strong> &mdash; where we must retain or
                  disclose information by law.
                </li>
              </ul>
              <p>
                Where the DPDP Act applies, we process personal data on the basis of
                your consent or for the legitimate uses permitted under that Act.
              </p>
            </section>

            <section id="retention">
              <h2>4. How long we keep it</h2>
              <p>
                We keep personal information only for as long as it is needed for the
                purposes described in this policy, or for as long as the law requires.
              </p>
              <ul>
                <li>
                  <strong>Enquiries that do not lead to an engagement</strong>{' '}
                  &mdash; up to 24 months from our last contact, so we can pick up a
                  conversation you return to.
                </li>
                <li>
                  <strong>Client records</strong> &mdash; for the duration of the
                  engagement and for as long afterwards as we need them to establish,
                  exercise or defend legal claims.
                </li>
                <li>
                  <strong>Invoicing and tax records</strong> &mdash; for the period
                  required by applicable tax and company law.
                </li>
                <li>
                  <strong>Website logs</strong> &mdash; retained by our hosting
                  provider for a short period for security and diagnostics.
                </li>
              </ul>
              <p>
                When information is no longer required, we delete it or otherwise
                dispose of it securely.
              </p>
            </section>

            <section id="sharing">
              <h2>5. Disclosing personal information</h2>
              <p>
                <strong>We do not sell, rent or trade your personal information, and
                we do not supply it to third parties for their direct marketing.</strong>
              </p>
              <p>We may disclose personal information to:</p>
              <ul>
                <li>
                  our personnel, professional advisers, insurers and service
                  providers, to the extent reasonably necessary for the purposes in
                  this policy
                </li>
                <li>
                  service providers who process data on our behalf under contract,
                  including our hosting provider
                </li>
                <li>a purchaser or prospective purchaser of our business or assets</li>
                <li>
                  any authority where we are required to disclose by law, or in
                  connection with legal proceedings, or to establish, exercise or
                  defend legal rights
                </li>
              </ul>
              {/*
                TODO — CONFIRM BEFORE PUBLISHING.
                Vercel is named because the site is deployed there. If you add
                analytics, a CRM, a mail platform or a form backend, each must be
                named here as a processor. Verify this list is complete.
              */}
              <p>
                Our website is hosted by <strong>Vercel Inc.</strong>, which
                processes request data (including IP address) in order to serve the
                site. Website analytics is provided by <strong>Google LLC</strong>{' '}
                (Google Analytics 4), and runs only if you have accepted analytics
                cookies &mdash; see <a href="#cookies">Cookies</a> for what is set
                and for how long. Where we engage other processors, we require them
                by contract to protect personal information and to process it only
                on our instructions.
              </p>
            </section>

            <section id="transfers">
              <h2>6. International transfers</h2>
              <p>
                We are incorporated in India and work with clients internationally.
                Information we collect may be stored and processed in, and
                transferred between, the countries in which we and our service
                providers operate, so that we can use it as described in this policy.
              </p>
              <p>
                Where personal data protected by the GDPR is transferred to a country
                without an adequacy decision, we put an appropriate safeguard in place
                before the transfer, such as the European Commission&apos;s standard
                contractual clauses. You may ask us for a copy of the safeguard we
                rely on.
              </p>
            </section>

            <section id="security">
              <h2>7. Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect
                personal information against loss, misuse, unauthorised access,
                alteration and disclosure. These include encryption of data in transit,
                access controls on a need-to-know basis, and logging.
              </p>
              <p>
                No method of transmission over the internet or method of electronic
                storage is completely secure. While we work to protect your
                information, we cannot guarantee absolute security, and you send
                information to us at your own risk.
              </p>
              <p>
                If a personal data breach occurs that is likely to result in a risk to
                your rights, we will notify you and the relevant supervisory authority
                as required by applicable law.
              </p>
            </section>

            <section id="cookies">
              <h2>8. Cookies</h2>
              <p>
                A cookie is a small file placed on your device by a website. Cookies
                may be <em>session</em> cookies, which expire when you close your
                browser, or <em>persistent</em> cookies, which remain until they expire
                or you delete them.
              </p>
              <p>
                <strong>No analytics cookie is set until you accept it.</strong> When
                you first visit, analytics storage is denied by default and nothing
                but the cookie recording your choice is written. We use no advertising
                cookies and no cross-site tracking.
              </p>

              <div className="ys-cookie-table-wrap">
                <table className="ys-cookie-table">
                  <caption className="sr-only">
                    Cookies used on this website
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Cookie</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Provider</th>
                      <th scope="col">Expiry</th>
                      <th scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>ys_consent</code></td>
                      <td>Records your cookie choice so you are not asked again.</td>
                      <td>YatiSphere</td>
                      <td>6 months</td>
                      <td>Necessary</td>
                    </tr>
                    <tr>
                      <td><code>_ga</code></td>
                      <td>Distinguishes one visitor from another, so visits can be counted.</td>
                      <td>Google</td>
                      <td>Up to 14 months</td>
                      <td>Analytics</td>
                    </tr>
                    <tr>
                      <td><code>_ga_*</code></td>
                      <td>Maintains session state for the analytics property.</td>
                      <td>Google</td>
                      <td>Up to 14 months</td>
                      <td>Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Analytics is provided by Google Analytics 4. IP addresses are used
                transiently to derive an approximate location and are not stored by
                Google Analytics 4. We do not enable advertising features, and we do
                not share analytics data with Google for advertising purposes. Our
                data retention period is set to 14 months, after which event-level
                data is deleted.
              </p>
              <p>
                <strong>To withdraw consent</strong>, use the
                &ldquo;Cookie settings&rdquo; link in the footer of any page and
                choose Reject. Existing analytics cookies are cleared when you do.
                You can also delete cookies through your browser settings at any
                time. Blocking strictly necessary cookies may affect how the site
                works.
              </p>
            </section>

            <section id="rights">
              <h2>9. Your rights</h2>
              <p>
                Depending on where you are, you may have the following rights over your
                personal information:
              </p>
              <ul>
                <li>
                  <strong>Access</strong> &mdash; to be told whether we process your
                  personal information and to receive a copy of it.
                </li>
                <li>
                  <strong>Correction</strong> &mdash; to have inaccurate or incomplete
                  information corrected.
                </li>
                <li>
                  <strong>Erasure</strong> &mdash; to have information deleted where it
                  is no longer needed, where you withdraw consent, or where it was
                  processed unlawfully.
                </li>
                <li>
                  <strong>Restriction</strong> &mdash; to limit how we process your
                  information while a question about it is resolved.
                </li>
                <li>
                  <strong>Portability</strong> &mdash; to receive information you gave
                  us in a structured, commonly used, machine-readable format.
                </li>
                <li>
                  <strong>Objection</strong> &mdash; to object to processing based on
                  our legitimate interests, and at any time to direct marketing.
                </li>
                <li>
                  <strong>Withdraw consent</strong> &mdash; at any time, as easily as
                  you gave it, without affecting processing already carried out.
                </li>
              </ul>
              <p>
                We may decline a request where the law permits, for example where we
                must keep the information to comply with a legal obligation or to
                establish or defend a legal claim. We will explain our reasons.
              </p>
              <p>
                To exercise any of these rights, email{' '}
                <a href="mailto:privacy@yatisphere.com">privacy@yatisphere.com</a>. We
                may ask for information to verify your identity before we act. We
                respond within 30 days, and will tell you if we need longer.
                Exercising your rights is free; if a request is manifestly unfounded or
                excessive we may charge a reasonable fee or decline it, and will
                explain why.
              </p>
            </section>

            <section id="dpdp">
              <h2>10. Rights under India&apos;s DPDP Act</h2>
              <p>
                If you are in India, the Digital Personal Data Protection Act, 2023
                gives you the right to:
              </p>
              <ul>
                <li>know what personal data we hold about you and how we use it</li>
                <li>
                  have inaccurate or incomplete data corrected, and have data erased
                  when it is no longer needed for the purpose it was collected for
                </li>
                <li>withdraw your consent at any time, as easily as you gave it</li>
                <li>
                  nominate another person to exercise your rights if you are unable to
                </li>
                <li>raise a grievance with us and receive a response</li>
              </ul>
              {/*
                TODO — CONFIRM BEFORE PUBLISHING.
                The DPDP Act requires a named Data Protection Officer or designated
                grievance contact. Confirm who that is and name them here.
              */}
              <p>
                To exercise these rights or raise a grievance, write to{' '}
                <a href="mailto:privacy@yatisphere.com">privacy@yatisphere.com</a>. We
                aim to respond within 7 working days. If you are not satisfied with our
                response, you may complain to the Data Protection Board of India.
              </p>
              <p>
                If you are in the EEA or the UK, you may also complain to your local
                supervisory authority.
              </p>
            </section>

            <section id="changes">
              <h2>11. Changes to this policy</h2>
              <p>
                We keep this policy under review. Changes take effect when posted to
                this page, and the date at the top records when it was last updated.
                If we make a material change, we will give prominent notice on the
                website or contact you directly where we hold your details.
              </p>
            </section>

            <section id="contact" className="ys-legal-divided">
              <h2>12. Contact us</h2>
              <p>
                For any question about this policy, or about information we hold about
                you, email{' '}
                <a href="mailto:privacy@yatisphere.com">privacy@yatisphere.com</a>.
              </p>
              {/*
                TODO — CONFIRM BEFORE PUBLISHING.
                A postal address for the registered office is expected on a privacy
                policy. Add it to SITE_CONTACT.registeredAddress and render it here.
              */}
              <p>
                {LEGAL_ENTITY_NAME}
                <br />
                Registered in India
              </p>
            </section>
          </div>
        </div>
      </PageSection>
    </SharedLayout>
  )
}
