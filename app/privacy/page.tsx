import { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Yatisphere',
  description: 'How Yatisphere collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <SharedLayout>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-16)',
          backgroundColor: 'hsl(var(--premium-gray-50))'
        }}
      >
        <div className="enterprise-container-wide">
          <p
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-medium)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              color: 'hsl(var(--premium-gray-400))',
              marginBottom: 'var(--space-4)'
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'var(--font-semibold)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'hsl(var(--premium-gray-900))',
              marginBottom: 'var(--space-4)'
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'hsl(var(--premium-gray-500))'
            }}
          >
            Effective January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <article
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-24)'
        }}
      >
        <div className="enterprise-container-wide">
          <div
            style={{
              maxWidth: '720px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)'
            }}
          >
            {/* Introduction */}
            <section>
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                We collect only the information necessary to operate our website and engage with clients. We do not sell personal data or use client data to train AI models.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-500))'
                }}
              >
                This Privacy Policy describes how Yatisphere Technologies ("Company," "we," "our," or "us") collects, uses, and protects your personal information when you use our website and services.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Information We Collect
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We collect minimal personal information, limited to:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Contact information you provide when reaching out to us (name, email, company)</li>
                  <li>Technical information automatically collected when you visit our website (IP address, browser type, pages visited)</li>
                  <li>Communication history and preferences</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                How We Use Your Information
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We use the information we collect to:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Improve our website and service offerings</li>
                  <li>Send relevant communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                What We Do Not Do
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
                  <li>We do not use client data to train AI models</li>
                  <li>We do not engage in behavioral advertising or tracking beyond essential analytics</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Data Protection
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We respect regional data protection laws including GDPR, CCPA, and other applicable regulations.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Your Rights
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Depending on your location, you may have the right to:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section
              style={{
                paddingTop: 'var(--space-8)',
                borderTop: '1px solid hsl(var(--premium-gray-200))'
              }}
            >
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Contact
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                For privacy-related inquiries, please contact us at{' '}
                <a
                  href="mailto:privacy@yatisphere.com"
                  style={{
                    color: 'hsl(var(--premium-gray-900))',
                    textDecoration: 'underline'
                  }}
                >
                  privacy@yatisphere.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </SharedLayout>
  )
}
