import { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'

export const metadata: Metadata = {
  title: 'Terms of Service | Yatisphere',
  description: 'Terms and conditions for using Yatisphere services and website.',
}

export default function TermsPage() {
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
            Terms of Service
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
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                These Terms of Service ("Terms") govern your use of the Yatisphere Technologies website and any related services. By accessing our website or engaging our services, you agree to these Terms.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Services
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                Yatisphere provides enterprise software, cloud infrastructure, and AI systems consulting services. Specific service terms, deliverables, and obligations are defined in separate client agreements. These Terms apply to general website use and initial engagement inquiries.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Website Use
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Transmit any malicious code or harmful content</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Intellectual Property
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                All content on this website, including text, graphics, logos, and software, is the property of Yatisphere Technologies or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Disclaimer
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                The information on this website is provided for general informational purposes only. While we strive to keep information accurate and current, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information. Any reliance you place on such information is at your own risk.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Limitation of Liability
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                To the fullest extent permitted by law, Yatisphere Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services, regardless of the cause of action or the basis of the claim.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Changes to Terms
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Governing Law
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
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
                  fontSize: 'var(--text-xl)',
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
                For questions about these Terms, please contact us at{' '}
                <a
                  href="mailto:legal@yatisphere.com"
                  style={{
                    color: 'hsl(var(--premium-gray-900))',
                    textDecoration: 'underline'
                  }}
                >
                  legal@yatisphere.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </SharedLayout>
  )
}
