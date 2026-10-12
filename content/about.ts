/**
 * About page content (/who-we-are/about).
 *
 * FOUNDER'S LETTER — DRAFT FOR APPROVAL. The letter below is written in
 * the founder's voice from facts she has already published (14+ years in
 * enterprise transformation across financial services and
 * telecommunications) and the company's stated positions. It is not a
 * transcript. Ruchika Raturi must read and approve (or rewrite) it before
 * the page is deployed, because it is published as her words.
 *
 * Team-experience lines are the ones the owner confirmed on 2026-10-11 as
 * accurate and cleared to publish. Never add a client name, metric or
 * claim here that hasn't been confirmed.
 */

export const founderLetter = {
  kicker: "Founder's vision",
  pullQuote:
    'Regulated businesses do not need more technology. They need systems they can trust, explain and run.',
  paragraphs: [
    'For most of my career I have worked inside enterprise transformation programs in financial services and telecommunications. The pattern repeated itself. The technology rarely failed on its own. Programs failed when the architecture was decided late, by people who would not be there to run the result, and when control was bolted on just before an audit.',
    'I founded YatiSphere to work the other way round. Decide the structure first, with the people who will live with it. Build governance into the platform from the first sprint. Keep one accountable team from the first conversation to production, and stay to run what we build.',
    'AI raises the stakes. A model is only as trustworthy as the cloud, the data and the controls beneath it, and only as useful as the systems it is allowed to act in. Our work is to make AI something a regulated business can put into production and defend: evaluated before it goes live, approved by a person where it matters, and logged at every step.',
    'We are building the firm we would have wanted to hire: senior, accountable, independent of any vendor, and honest about what is worth building.',
  ],
  signatory: 'Ruchika Raturi',
  role: 'Founder & Chief Executive Officer',
  photo: '/ruchika.jpeg',
}

export const principles = [
  {
    title: 'Architecture before implementation',
    body: 'The decisions that are expensive to reverse are made deliberately, early, and with the people who will operate the result.',
  },
  {
    title: 'One accountable team',
    body: 'The people who advise you are the people who build and run what we deliver. No handovers, no rotating strangers.',
  },
  {
    title: 'Governed AI, or no AI',
    body: 'Evaluation before go-live, a person approving what matters, and an audit trail your regulator can follow.',
  },
  {
    title: 'Independent advice',
    body: 'We recommend the cloud and the model that fit your estate, not the ones we resell. Your code, your cloud, your region.',
  },
]

/** Confirmed team experience. Presented as the team's background, never as company clients. */
export const experience = [
  {
    area: 'Capital markets',
    line: 'Engineers who have run post-trade settlement platforms at a global investment bank.',
  },
  {
    area: 'Advisory',
    line: 'Architects who have led modernization programs at global investment banks and Big Four consultancies.',
  },
  {
    area: 'Public sector',
    line: 'A team that has built national-scale e-government platforms for the Government of India.',
  },
  {
    area: 'Leadership',
    line: '14+ years in enterprise transformation across financial services and telecommunications.',
  },
]

export const howWeWork = [
  {
    title: 'Senior and in-house',
    body: 'Every engagement is led and delivered by senior people employed by YatiSphere.',
  },
  {
    title: 'Built in your accounts',
    body: 'Repositories, infrastructure and data stay in your cloud and your chosen region from day one.',
  },
  {
    title: 'Built for five regions',
    body: 'Delivered from India for clients across the UK, Europe, the Middle East, the US and India, with working hours that overlap yours.',
  },
]
