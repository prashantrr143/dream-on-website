"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { YsIcon } from '@/components/brand/YsIcon'

/**
 * Founder's vision.
 *
 * DRAFT COPY — written from the positioning already published across the
 * site (architecture-before-implementation, governance by design, the
 * founder's enterprise background, DPIIT recognition). It is not a
 * transcribed quote. Replace `VISION` and `ATTRIBUTION` with the
 * founder's own words before this is treated as a statement from them.
 *
 * Deliberately makes no claim that cannot already be supported
 * elsewhere on the site: no client names, no metrics, no outcomes.
 */

const VISION: string[] = [
  'Most enterprise programmes do not fail on technology. They fail because the architecture was decided late, by people who were not accountable for running the result.',
  'I started YatiSphere to work the other way round. Decide the structure first, with the people who will live with it. Build governance into the platform rather than bolting it on before an audit. Then stay through production, where the real problems surface.',
  'Applied AI has not changed that — it has raised the stakes. A model is only as trustworthy as the data platform and the controls underneath it. That is the part we know how to build.',
]

const ATTRIBUTION = {
  name: 'Ruchika Raturi',
  detail: 'Founder & Chief Executive Officer',
}


export function FounderVision() {
  return (
    <section className="ys-vision ys-vision-dark">
      <div className="enterprise-container-wide">
        <motion.div
          className="ys-vision-grid"
        >
          {/* Statement */}
          <div style={{ minWidth: 0 }}>
            <p className="ys-eyebrow">Founder&rsquo;s vision</p>
            <h2 className="ys-vision-head">
              Why <span className="ys-vision-accent">YatiSphere</span> exists.
            </h2>

            <blockquote className="ys-vision-quote">
              {VISION.map((p, i) => (
                <p key={i} className={i === 0 ? 'ys-vision-lead' : undefined}>
                  {p}
                </p>
              ))}
            </blockquote>

            <figcaption className="ys-vision-attr">
              <span className="ys-vision-attr-rule" aria-hidden="true" />
              <span>
                <strong>{ATTRIBUTION.name}</strong>
                <span>{ATTRIBUTION.detail}</span>
              </span>
            </figcaption>
          </div>

          {/* The company's one verifiable credential */}
          <aside className="ys-vision-aside" aria-label="Company recognition">
            <p className="ys-eyebrow" style={{ marginBottom: 18 }}>
              Recognition
            </p>

            <div className="ys-vision-cred">
              <span className="ys-vision-cred-mark" aria-hidden="true">
                <YsIcon name="security" size={22} variant="current" />
              </span>
              <div style={{ minWidth: 0 }}>
                <p className="ys-vision-cred-eyebrow">Government of India</p>
                <p className="ys-vision-cred-title">DPIIT-Recognised Startup</p>
                <p className="ys-vision-cred-sub">
                  Ministry of Commerce &amp; Industry
                </p>
                <p className="ys-vision-cred-id">
                  Certificate <strong>DIPP260262</strong>
                </p>
              </div>
            </div>

            <dl className="ys-vision-facts">
              <div>
                <dt>Incorporated</dt>
                <dd>December 2025</dd>
              </div>
              <div>
                <dt>Registered entity</dt>
                <dd>YatiSphere Technologies Private Limited</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>Enterprise Software</dd>
              </div>
            </dl>

            <a href="/how-we-work" className="ys-link ys-vision-link">
              How we work
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </aside>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderVision
