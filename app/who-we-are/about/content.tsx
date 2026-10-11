import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageCTA } from '@/components/enterprise'
import { CompanyDetails } from '@/components/enterprise/CompanyDetails'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { people } from '@/content/people'
import { founderLetter, principles, experience, howWeWork } from '@/content/about'

/**
 * About (/who-we-are/about). Editorial, in the register of a serious
 * professional-services firm: the founder's letter leads, then what we
 * stand for, where the team's experience comes from, how we work, the
 * people, and the accountability pages. Content lives in content/about.ts.
 */

export default function AboutUs() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="WHO WE ARE / ABOUT"
        title="Engineers of trusted systems"
        lede="A senior team of consultants and engineers who have built and run systems for global banks, consultancies and governments."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        visual="network"
      />

      {/* 1. Founder's letter: the vision, in her voice, first. */}
      <section className="ys-about-letter" aria-labelledby="founder-vision">
        <div className="enterprise-container-wide ys-about-letter-grid">
          <figure className="ys-about-letter-portrait">
            <div className="ys-about-portrait-frame">
              <Image
                src={founderLetter.photo}
                alt={`${founderLetter.signatory}, ${founderLetter.role}`}
                fill
                priority
                sizes="(max-width: 900px) 60vw, 320px"
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              />
            </div>
            <figcaption>
              <strong>{founderLetter.signatory}</strong>
              <span>{founderLetter.role}</span>
            </figcaption>
          </figure>

          <div className="ys-about-letter-body">
            <p className="ys-eyebrow" id="founder-vision">
              {founderLetter.kicker}
            </p>
            <blockquote className="ys-about-pullquote">
              <p>{founderLetter.pullQuote}</p>
            </blockquote>
            <div className="ys-about-letter-text">
              {founderLetter.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="ys-about-signoff">
              <span className="ys-about-signoff-rule" aria-hidden="true" />
              <span>
                <strong>{founderLetter.signatory}</strong>
                <span>{founderLetter.role}, YatiSphere</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. What we stand for */}
      <section className="ys-section-white" aria-labelledby="principles-heading">
        <div className="enterprise-container-wide">
          <div className="ys-about-split">
            <div>
              <p className="ys-eyebrow">What we stand for</p>
              <h2 id="principles-heading">Four principles we do not trade away</h2>
            </div>
            <ol className="ys-about-principles">
              {principles.map((p, i) => (
                <li key={p.title}>
                  <span className="ys-about-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. Where the team's experience comes from (confirmed claims only) */}
      <section className="ys-about-experience" aria-labelledby="experience-heading">
        <div className="enterprise-container-wide">
          <p className="ys-eyebrow ys-eyebrow-on-dark">Our experience</p>
          <h2 id="experience-heading">Built by people who have run systems that could not fail</h2>
          <ul>
            {experience.map((e) => (
              <li key={e.area}>
                <span className="ys-about-exp-area">{e.area}</span>
                <p>{e.line}</p>
              </li>
            ))}
          </ul>
          <p className="ys-about-exp-note">
            This is our team&rsquo;s experience before and alongside YatiSphere. We never name the organizations involved or
            their clients.
          </p>
        </div>
      </section>

      {/* 4. How we work with you */}
      <section className="ys-section-light" aria-labelledby="how-heading">
        <div className="enterprise-container-wide">
          <div className="ys-about-split">
            <div>
              <p className="ys-eyebrow">How we work</p>
              <h2 id="how-heading">A small firm, by design</h2>
              <a href="/who-we-are/how-we-work" className="ys-link ys-about-inline-link">
                See how an engagement runs <ArrowRight className="w-3.5 h-3.5 inline" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
            <ul className="ys-about-how">
              {howWeWork.map((h) => (
                <li key={h.title}>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section className="ys-section-white" aria-labelledby="leadership-heading">
        <div className="enterprise-container-wide">
          <div className="ys-about-section-head">
            <div>
              <p className="ys-eyebrow">Leadership</p>
              <h2 id="leadership-heading">The people accountable for your work</h2>
            </div>
            <a href="/who-we-are/leadership" className="ys-link">
              Meet the leadership team <ArrowRight className="w-3.5 h-3.5 inline" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          <ul className="ys-about-people">
            {people.map((p) => (
              <li key={p.name}>
                {p.photo && (
                  <div className="ys-about-people-photo">
                    <Image
                      src={p.photo}
                      alt={`${p.name}, ${p.role}`}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 40vw, 160px"
                      style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                    />
                  </div>
                )}
                <div>
                  <h3>{p.name}</h3>
                  <p className="ys-about-people-role">{p.role}</p>
                  <p>{p.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Accountability */}
      <section className="ys-section-light" aria-labelledby="accountability-heading">
        <div className="enterprise-container-wide">
          <p className="ys-eyebrow">Accountability</p>
          <h2 id="accountability-heading" style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }}>
            What you can hold us to
          </h2>
          <ul className="ys-about-accountability">
            {[
              { label: 'Responsible AI', href: '/who-we-are/responsible-ai', body: 'What we commit to when we build AI, and what we will not build.' },
              { label: 'Trust & security', href: '/who-we-are/trust', body: 'How we protect your systems and data, and who processes data for us.' },
              { label: 'How we work', href: '/who-we-are/how-we-work', body: 'Stages, engagement models and working across regions.' },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="ys-link-row">
                  <span>
                    <span className="ys-link-row-label">{l.label}</span>
                    <span className="ys-link-row-desc">{l.body}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Registration facts, small and at the foot */}
      <CompanyDetails />

      <PageCTA
        title="What would you fix first?"
        body="Tell us what you are working on. A senior member of the team will give you an honest view on whether we are the right fit."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
