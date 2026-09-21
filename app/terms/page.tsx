import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { LEGAL_LAST_UPDATED, LEGAL_ENTITY_NAME } from '@/lib/legal'

const TITLE = 'Terms of Service | YatiSphere'
const DESCRIPTION =
  'The terms governing use of the YatiSphere website and initial engagement inquiries.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://yatisphere.com/terms' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://yatisphere.com/terms',
  },
  twitter: { title: TITLE, description: DESCRIPTION },
}

export default function TermsPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lede={`Last updated ${LEGAL_LAST_UPDATED}`}
      />

      <PageSection tone="white">
        <div className="ys-legal">
          <p className="ys-legal-intro">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{' '}
            {LEGAL_ENTITY_NAME} website and any related services. By accessing our
            website or engaging our services, you agree to these Terms.
          </p>

          <section>
            <h2>Services</h2>
            <p>
              YatiSphere provides enterprise software, cloud infrastructure, and AI
              systems consulting services. Specific service terms, deliverables, and
              obligations are defined in separate client agreements. These Terms
              apply to general website use and initial engagement inquiries.
            </p>
          </section>

          <section>
            <h2>Website Use</h2>
            <p>
              You agree to use our website only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Transmit any malicious code or harmful content</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              software, is the property of {LEGAL_ENTITY_NAME} or its licensors and
              is protected by intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express written
              permission.
            </p>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided for general informational
              purposes only. While we strive to keep information accurate and
              current, we make no representations or warranties of any kind about
              the completeness, accuracy, or reliability of the information. Any
              reliance you place on such information is at your own risk.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {LEGAL_ENTITY_NAME} shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the website or services,
              regardless of the cause of action or the basis of the claim.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will
              be effective upon posting to the website. Your continued use of the
              website after changes are posted constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="ys-legal-divided">
            <h2>Contact</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@yatisphere.com">legal@yatisphere.com</a>
            </p>
          </section>
        </div>
      </PageSection>
    </SharedLayout>
  )
}
