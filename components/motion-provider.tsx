"use client"

import { MotionConfig } from 'framer-motion'

/**
 * Applies the user's motion preference to every Framer Motion
 * component in the tree.
 *
 * `reducedMotion="user"` makes Framer honour prefers-reduced-motion
 * automatically: transform and opacity animations are skipped and
 * elements render at their final `animate`/`whileInView` state
 * instead of being stranded at the initial `opacity: 0`.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
