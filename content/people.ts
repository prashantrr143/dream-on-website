import type { Person } from './types'

/**
 * Leadership and team. The only people the site may name (revamp rule 5).
 * Taken from the current About page; photos are the existing files until
 * professional 3:4 headshots are supplied (audit AB-05).
 */
export const people: Person[] = [
  {
    name: 'Ruchika Raturi',
    role: 'Founder & Chief Executive Officer',
    practice: 'leadership',
    photo: '/ruchika.jpeg',
    bio: '14+ years in enterprise transformation across financial services and telecommunications.',
    linkedinUrl: '',
  },
  {
    name: 'Jyoti Mishra',
    role: 'Chief Human Resources Officer',
    practice: 'leadership',
    photo: '/jyoti.jpeg',
    bio: 'Builds high-performance organizations through strategic talent development and cultural change that supports sustainable growth.',
    linkedinUrl: '',
  },
]
