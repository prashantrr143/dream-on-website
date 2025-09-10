"use client"

import { motion, useReducedMotion, useInView, easeOut, easeInOut } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { cn } from '@/lib/utils'

// Optimized animation variants that use only transform and opacity
export const optimizedVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  },

  // Slide animations (using transform only)
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  },

  slideDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  },

  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  },

  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  },

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  // Stagger items
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  }
}

// Optimized scroll-triggered animation component
interface ScrollAnimationProps {
  children: React.ReactNode
  variant?: keyof typeof optimizedVariants
  className?: string
  triggerOnce?: boolean
  delay?: number
}

export function ScrollAnimation({
  children,
  variant = 'fadeIn',
  className,
  triggerOnce = true,
  delay = 0
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: triggerOnce,
    margin: "-100px 0px"
  })
  const shouldReduceMotion = useReducedMotion()

  // Memoize animation variants to prevent recreation
  const animationVariant = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      }
    }
    return optimizedVariants[variant]
  }, [variant, shouldReduceMotion])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animationVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Optimized stagger animation for lists
interface StaggerAnimationProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerAnimation({
  children,
  className,
  staggerDelay = 0.1
}: StaggerAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px 0px"
  })
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.3 }
        }
      }
    }
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1
        }
      }
    }
  }, [staggerDelay, shouldReduceMotion])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

// Optimized hover animation component
interface HoverAnimationProps {
  children: React.ReactNode
  className?: string
  scale?: number
  y?: number
  duration?: number
}

export function HoverAnimation({
  children,
  className,
  scale = 1.02,
  y = -4,
  duration = 0.2
}: HoverAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  const hoverVariants = useMemo(() => {
    if (shouldReduceMotion) {
      return {}
    }
    return {
      scale,
      y,
      transition: { 
        duration, 
        ease: easeOut
      }
    }
  }, [scale, y, duration, shouldReduceMotion])

  return (
    <motion.div
      className={cn("cursor-pointer", className)}
      whileHover={hoverVariants}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// Optimized text animation component
interface AnimatedTextProps {
  text: string
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'typewriter'
  delay?: number
  stagger?: number
}

export function AnimatedText({
  text,
  className,
  animation = 'fadeIn',
  delay = 0,
  stagger = 0.05
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'slideUp' ? 20 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: easeOut 
      }
    }
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Performance-optimized floating animation
export function FloatingAnimation({
  children,
  className,
  duration = 6,
  y = 10
}: {
  children: React.ReactNode
  className?: string
  duration?: number
  y?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: easeInOut
      }}
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  )
}

// Optimized gradient text animation
export function GradientTextAnimation({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <span className={cn("gradient-text", className)}>{children}</span>
  }

  return (
    <motion.span
      className={cn("gradient-text", className)}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: easeInOut
      }}
      style={{
        backgroundSize: "300% 300%",
        willChange: 'background-position'
      }}
    >
      {children}
    </motion.span>
  )
}