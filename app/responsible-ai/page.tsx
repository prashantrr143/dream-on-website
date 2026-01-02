import { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'

export const metadata: Metadata = {
  title: 'Responsible AI | Yatisphere',
  description: 'How Yatisphere approaches AI development with accountability, oversight, and clear data boundaries.',
}

export default function ResponsibleAIPage() {
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
            Responsible AI
          </h1>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'hsl(var(--premium-gray-500))'
            }}
          >
            Our approach to AI development
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
                We design AI systems with clear accountability, human oversight, and explicit data boundaries—especially in regulated and high-risk environments.
              </p>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-500))'
                }}
              >
                AI is a powerful tool, but it requires careful governance. Our approach prioritizes transparency, control, and predictability over novelty or automation for its own sake.
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
                Human Oversight
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We design AI systems that keep humans in the loop:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Critical decisions require human review and approval</li>
                  <li>Clear escalation paths for edge cases and exceptions</li>
                  <li>Monitoring and alerting for unexpected behavior</li>
                  <li>Regular review of AI system performance and outcomes</li>
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
                Explainability
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We favor approaches that can be understood and explained:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Preference for interpretable models where appropriate</li>
                  <li>Clear documentation of model behavior and limitations</li>
                  <li>Audit trails for AI-assisted decisions</li>
                  <li>Ability to explain outcomes to stakeholders and regulators</li>
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
                Data Boundaries
              </h2>
              <div
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  We maintain strict boundaries around data use:
                </p>
                <ul
                  style={{
                    marginLeft: 'var(--space-6)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}
                >
                  <li>Client data is never used to train models without explicit consent</li>
                  <li>Clear separation between training data and production data</li>
                  <li>Data minimization—collect and use only what is necessary</li>
                  <li>Defined retention and deletion policies for AI training data</li>
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
                Risk-Appropriate Design
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                We match AI capabilities to risk levels. High-stakes decisions in regulated environments receive more conservative designs with greater human oversight, while lower-risk applications may benefit from more automation. We avoid black-box deployments in contexts where explainability and auditability are required.
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
                Continuous Evaluation
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
                  <li>Regular monitoring for model drift and performance degradation</li>
                  <li>Periodic review of AI system outcomes for fairness and accuracy</li>
                  <li>Mechanisms to identify and address unintended consequences</li>
                  <li>Commitment to updating practices as standards evolve</li>
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
                Questions
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'hsl(var(--premium-gray-600))'
                }}
              >
                For questions about our approach to responsible AI, please contact us at{' '}
                <a
                  href="mailto:hello@yatisphere.com"
                  style={{
                    color: 'hsl(var(--premium-gray-900))',
                    textDecoration: 'underline'
                  }}
                >
                  hello@yatisphere.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </SharedLayout>
  )
}
