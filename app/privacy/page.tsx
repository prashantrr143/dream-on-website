import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { LEGAL_LAST_UPDATED, LEGAL_ENTITY_NAME } from '@/lib/legal'

const TITLE = 'Privacy Policy | YatiSphere'
const DESCRIPTION =
  'How YatiSphere collects, uses and protects your personal information, including your rights under India’s DPDP Act.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://yatisphere.com/privacy' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://yatisphere.com/privacy',
  },
  twitter: { title: TITLE, description: DESCRIPTION },
}

export default function PrivacyPage() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede={`Last updated ${LEGAL_LAST_UPDATED}`}
      />

      <PageSection tone="white">
        <div className="ys-legal">
          <p className="ys-legal-intro">
            We collect only the information necessary to operate our website and
            engage with clients. We do not sell personal data or use client data
            to train AI models.
          </p>

          <section>
            <p>
              This Privacy Policy describes how {LEGAL_ENTITY_NAME} (&ldquo;Company,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and
              protects your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect minimal personal information, limited to:</p>
            <ul>
              <li>Contact information you provide when reaching out to us (name, email, company)</li>
              <li>Technical information automatically collected when you visit our website (IP address, browser type, pages visited)</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Improve our website and service offerings</li>
              <li>Send relevant communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>What We Do Not Do</h2>
            <ul>
              <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
              <li>We do not use client data to train AI models</li>
              <li>We do not engage in behavioral advertising or tracking beyond essential analytics</li>
            </ul>
          </section>

          <section>
            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. We handle personal data in
              line with India&apos;s Digital Personal Data Protection Act, 2023
              (DPDP Act) and, where it applies to the people we deal with, the EU
              General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="ys-legal-divided">
            <h2>Your rights under India&apos;s DPDP Act</h2>
            <p>
              If you are in India, the Digital Personal Data Protection Act, 2023
              gives you the right to:
            </p>
            <ul>
              <li>know what personal data we hold about you and how we use it</li>
              <li>have inaccurate or incomplete data corrected, and have data erased when it is no longer needed for the purpose it was collected for</li>
              <li>withdraw your consent at any time, as easily as you gave it</li>
              <li>nominate another person to exercise your rights if you are unable to</li>
              <li>raise a grievance with us and receive a response</li>
            </ul>
            <p>
              We collect personal data only for the purposes described in this
              policy and keep it only as long as those purposes require.
            </p>
            <p>
              To exercise any of these rights or raise a grievance, write to{' '}
              <a href="mailto:privacy@yatisphere.com">privacy@yatisphere.com</a>. We
              aim to respond within 7 working days. If you are not satisfied with our
              response, you may complain to the Data Protection Board of India.
            </p>
          </section>

          <section className="ys-legal-divided">
            <h2>Contact</h2>
            <p>
              For privacy-related inquiries, please contact us at{' '}
              <a href="mailto:privacy@yatisphere.com">privacy@yatisphere.com</a>
            </p>
          </section>
        </div>
      </PageSection>
    </SharedLayout>
  )
}
