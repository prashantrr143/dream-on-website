import type { Leader } from './types'

/**
 * Leadership and advisors: the only people the site may name.
 *
 * Summaries are the existing published text; no bio, quote or achievement
 * has been added. A leader gets a detail page only once `bio` is filled in
 * (by them, or approved by them). Photos are the current files until
 * professional portraits are supplied: see qa/leadership/report.html.
 */
export const people: Leader[] = [
  {
    slug: 'ruchika-raturi',
    name: 'Ruchika Raturi',
    role: 'Founder & Chief Executive Officer',
    group: 'leadership',
    order: 1,
    summary: '14+ years in enterprise transformation across financial services and telecommunications.',
    bio: [],
    photo: {
      src: '/ruchika.jpeg',
      alt: 'Ruchika Raturi, Founder & Chief Executive Officer',
      width: 390,
      height: 508,
      style: 'framed',
    },
  },
  {
    slug: 'jyoti-mishra',
    name: 'Jyoti Mishra',
    role: 'Chief Human Resources Officer',
    group: 'leadership',
    order: 2,
    summary:
      'Builds high-performance organizations through strategic talent development and cultural change that supports sustainable growth.',
    bio: [],
    photo: {
      src: '/jyoti.jpeg',
      alt: 'Jyoti Mishra, Chief Human Resources Officer',
      width: 591,
      height: 1280,
      style: 'framed',
    },
  },
]

/** People in a group, in display order. */
export const peopleIn = (group: Leader['group']) => people.filter((p) => p.group === group).sort((a, b) => a.order - b.order)

/** True when a leader has a detail page. */
export const hasBio = (p: Leader) => (p.bio ?? []).some((para) => para.trim().length > 0)
