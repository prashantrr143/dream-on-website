/**
 * The delivery lifecycle shown on /who-we-are/how-we-work.
 *
 * The page promises "a clear decision at each one", so every stage
 * carries the decision the client makes at its end, and the options they
 * have. "Take it in-house" is a real option at every gate: the hero says
 * so, and the work product (blueprint, code, run guide) is theirs.
 */

export interface Stage {
  n: string
  name: string
  /** One sentence. */
  line: string
  /** Rough timing, only where the site already commits to one. */
  when: string
  /** Two concrete deliverables. */
  gets: [string, string]
  /** The question the client answers at the end of the stage. */
  decision: string
  /** The options they have. */
  options: string[]
}

export const LIFECYCLE: Stage[] = [
  {
    n: '01',
    name: 'Discover',
    line: 'We agree the problem, the constraints and how success will be measured.',
    when: 'Solution Blueprint',
    gets: ['A written problem statement', 'Agreed success measures'],
    decision: 'Is this the right problem, and is it worth solving now?',
    options: ['Continue to design', 'Stop, with the findings in hand'],
  },
  {
    n: '02',
    name: 'Design',
    line: 'We design the solution and agree the plan before any build begins.',
    when: 'Solution Blueprint',
    gets: ['A solution blueprint', 'A delivery plan with milestones'],
    decision: 'Do you approve the design, the plan and the risks?',
    options: ['Build with us', 'Build in-house from the blueprint', 'Stop here'],
  },
  {
    n: '03',
    name: 'Build',
    line: 'Incremental development, integrated with your systems as we go.',
    when: 'Two-week increments',
    gets: ['Working software every two weeks', 'A running record of decisions'],
    decision: 'Every two weeks: is this still the right thing to build?',
    options: ['Keep going', 'Change priorities', 'Pause'],
  },
  {
    n: '04',
    name: 'Launch',
    line: 'Performance, security and operational readiness, then go-live.',
    when: 'Before go-live',
    gets: ['A hardened production release', 'A run guide and handover session'],
    decision: 'Is it ready for real users?',
    options: ['Go live', 'Fix the findings first'],
  },
  {
    n: '05',
    name: 'Run',
    line: 'We support, monitor and improve what we delivered, or hand over to your team.',
    when: 'Ongoing',
    gets: ['Monitoring and support', 'A prioritized improvement plan'],
    decision: 'Who runs it from here?',
    options: ['We run and improve it', 'Your team takes it over'],
  },
]
