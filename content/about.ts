/**
 * About page content (/who-we-are/about).
 *
 * "Why we started YatiSphere" (2026-11-01): written in the company's voice,
 * not as a signed letter, so it needs no personal sign-off. It uses only
 * facts already published (the founder's 14+ years in financial services
 * and telecommunications) and the company's stated positions.
 *
 * Team-experience lines are the ones the owner confirmed on 2026-10-11 as
 * accurate and cleared to publish. Never add a client name, metric or
 * claim here that hasn't been confirmed.
 */

export const founderLetter = {
  kicker: 'Why we started YatiSphere',
  pullQuote:
    'Regulated businesses do not need more technology. They need systems they can explain, control and run.',
  paragraphs: [
    'Most enterprise programs our team has worked on in financial services and telecommunications did not fail on technology. They failed when the architecture was decided late, by people who would not be there to run the result, and when controls were added just before an audit.',
    'YatiSphere was founded to work the other way round: agree the structure first with the people who will run it, build controls into the platform from the first sprint, and stay to run what we build.',
    'AI raises the stakes. A model is only as reliable as the cloud, data and controls under it. Our job is to get AI into production in a way a regulated business can defend: tested before it goes live, approved by a person where it matters, and logged.',
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
    title: 'One team, accountable end to end',
    body: 'The team that designs the system builds it and stays to run it, so less is lost at handover.',
  },
  {
    title: 'AI with controls, or no AI',
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
    title: 'Fixed-fee first step',
    body: 'Every engagement starts with a Solution Blueprint: a design, plan and risk register, priced before we start.',
  },
  {
    title: 'Built in your accounts',
    body: 'Repositories, infrastructure and data stay in your cloud and your chosen region from day one.',
  },
  {
    title: 'Where we work',
    body: 'Delivered from India for clients in the US, the UK, Europe and the Middle East. Calls in US hours by appointment.',
  },
]
