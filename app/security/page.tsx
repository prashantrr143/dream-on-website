import { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'

export const metadata: Metadata = {
  title: 'Security & Risk Posture | Yatisphere',
  description: 'How Yatisphere approaches security, data protection, and risk management.',
}

export default function SecurityPage() {
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
            Trust
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
            Security & Risk Posture
          </h1>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'hsl(var(--premium-gray-500))'
            }}
          >
            Last updated January 1, 2025
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
                  color: 'hsl(var(--premium-gray-600))',
                  marginBottom: 'var(--space-6)'
                }}
              >
                Yatisphere designs systems with security, privacy, and auditability as first-class concerns. Our delivery practices align with widely accepted enterprise security principles and regulatory expectations.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-500))'
                }}
              >
                Security is not an afterthought—it is foundational to how we architect, build, and operate systems for our clients.
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
                Security by Design
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We embed security considerations from the earliest stages of system design:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Threat modeling during architecture and design phases</li>
                  <li>Secure coding practices and code review processes</li>
                  <li>Defense in depth with multiple layers of protection</li>
                  <li>Principle of least privilege for all access controls</li>
                </ul>
              </div>
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
                Data Protection
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
                  <li>Client data isolation—your data is never commingled with other clients</li>
                  <li>Encryption in transit and at rest using industry-standard protocols</li>
                  <li>Client data ownership—you retain full ownership of your data at all times</li>
                  <li>Clear data handling procedures and retention policies</li>
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
                Auditability
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We design systems that can demonstrate compliance and withstand scrutiny:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Comprehensive logging and monitoring capabilities</li>
                  <li>Clear audit trails for all system access and changes</li>
                  <li>Documentation that supports regulatory review</li>
                  <li>Traceability from requirements to implementation</li>
                </ul>
              </div>
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
                Regulatory Alignment
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                We work with clients in regulated industries and design systems that support compliance with frameworks including SOC 2, HIPAA, GDPR, and industry-specific requirements. Our approach is to build for compliance from the start, not retrofit it later.
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
                Operational Security
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
                  <li>Secure development environments and practices</li>
                  <li>Background checks for personnel with access to sensitive systems</li>
                  <li>Regular security awareness training</li>
                  <li>Incident response procedures and communication protocols</li>
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
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'hsl(var(--premium-gray-900))',
                  marginBottom: 'var(--space-4)'
                }}
              >
                Security Inquiries
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                For security-related questions or to report a concern, please contact us at{' '}
                <a
                  href="mailto:security@yatisphere.com"
                  style={{
                    color: 'hsl(var(--premium-gray-900))',
                    textDecoration: 'underline'
                  }}
                >
                  security@yatisphere.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </SharedLayout>
  )
}
