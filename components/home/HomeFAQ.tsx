/**
 * Home: short answers to the questions buyers (and AI answer engines) ask
 * first about the company. Every answer restates facts published elsewhere
 * on the site; nothing here is new. Rendered collapsed, with FAQPage
 * structured data built from the same array so the two cannot drift.
 */

const FAQ: { q: string; a: string }[] = [
  {
    q: 'What does YatiSphere do?',
    a: 'YatiSphere designs, builds and runs cloud, software, data and AI systems for regulated businesses. The work is done in your own AWS or Microsoft Azure accounts, with the controls your auditors and security reviewers ask for, and the code is yours.',
  },
  {
    q: 'Who do you work with?',
    a: 'Banks, insurers, wealth managers and fintechs; law firms and professional services firms; and B2B software companies that sell to enterprises. Clients are in the United States, the United Kingdom, Europe, the Middle East and India.',
  },
  {
    q: 'How does an engagement start?',
    a: 'With a Solution Blueprint: a fixed-fee assessment that takes two to four weeks and produces a solution design, a delivery plan and a risk register. You are not committed to building with us afterwards.',
  },
  {
    q: 'Which clouds and AI models do you work with?',
    a: 'AWS, Microsoft Azure and Google Cloud, and models from Anthropic (Claude) and OpenAI, among others. We choose per use case and stay model- and cloud-neutral.',
  },
  {
    q: 'Do you use client data to train AI models?',
    a: 'No. We work within the boundaries you set, under an NDA and a data processing agreement where personal data is involved, and do not use client data to train or fine-tune models unless a client asks in writing for their own dedicated model.',
  },
  {
    q: 'Where is YatiSphere based?',
    a: 'YatiSphere Technologies Private Limited is registered in Noida, India. Our working day overlaps UK, European and Gulf business hours; calls in US hours are booked by appointment.',
  },
]

export function HomeFAQ() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  return (
    <section id="faq" className="ys-section-light" aria-labelledby="home-faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="enterprise-container-wide">
        <div className="ys-hfaq">
          <div className="ys-hfaq-intro">
            <p className="ys-kicker">FAQ</p>
            <h2 id="home-faq">Common questions</h2>
          </div>
          <div className="ys-hfaq-list">
            {FAQ.map((f) => (
              <details key={f.q} className="ys-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
