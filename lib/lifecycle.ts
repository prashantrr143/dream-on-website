/**
 * The delivery lifecycle, shared by the homepage and /how-we-work.
 *
 * Both pages must show the same stage names in the same order, so the
 * data lives here rather than being duplicated per page. The homepage
 * renders `name` and `line`; /how-we-work also renders `gets`.
 */

export interface Stage {
  n: string
  name: string
  /** One sentence, shown on both pages. */
  line: string
  /** Two concrete deliverables, shown on /how-we-work only. */
  gets: [string, string]
}

export const LIFECYCLE: Stage[] = [
  {
    n: '01',
    name: 'Discover',
    line: 'We agree the problem, the constraints and how success will be measured.',
    gets: ['A written problem statement', 'Agreed success measures'],
  },
  {
    n: '02',
    name: 'Design',
    line: 'We design the solution and price it before any build begins.',
    gets: ['A solution blueprint', 'A fixed, costed delivery plan'],
  },
  {
    n: '03',
    name: 'Build',
    line: 'Incremental development, integrated with your systems as we go.',
    gets: ['Working software every two weeks', 'A running record of decisions'],
  },
  {
    n: '04',
    name: 'Launch',
    line: 'Performance, security and operational readiness, then go-live.',
    gets: ['A hardened production release', 'A run guide and handover session'],
  },
  {
    n: '05',
    name: 'Run',
    line: 'We support, monitor and improve what we delivered, or hand over to your team.',
    gets: [
      'Monitoring and support from the team that built it',
      'A plan for ongoing improvement',
    ],
  },
]
