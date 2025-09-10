"use client"

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  animation?: 'typewriter' | 'slideUp' | 'fadeIn' | 'shimmer' | 'splitWords' | 'splitChars' | 'wave'
  delay?: number
  duration?: number
  stagger?: number
  children?: React.ReactNode
}

const AnimatedText = ({ 
  text, 
  className, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.1,
  children 
}: AnimatedTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  // Typewriter effect
  useEffect(() => {
    if (animation === 'typewriter' && isInView) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(prev => prev + 1)
        }
      }, 100)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [currentIndex, text, animation, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'slideUp' ? 50 : 0,
      scale: animation === 'fadeIn' ? 0.8 : 1,
      rotateX: animation === 'wave' ? -90 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration
      }
    }
  }

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: delay + (i * stagger),
        duration: 0.6
      }
    })
  }

  const renderText = () => {
    if (animation === 'typewriter') {
      return (
        <motion.span 
          className={cn("animate-typewriter", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay }}
        >
          {displayText}
        </motion.span>
      )
    }

    if (animation === 'shimmer') {
      return (
        <motion.span 
          className={cn("animate-text-shimmer", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration }}
        >
          {text}
        </motion.span>
      )
    }

    if (animation === 'splitWords') {
      const words = text.split(' ')
      return (
        <motion.span
          className={className}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      )
    }

    if (animation === 'splitChars') {
      const chars = text.split('')
      return (
        <motion.span
          className={className}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={charVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      )
    }

    if (animation === 'wave') {
      const chars = text.split('')
      return (
        <motion.span
          className={className}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                delay: delay + (i * 0.1),
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      )
    }

    return (
      <motion.span
        className={className}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <div ref={ref} className="overflow-hidden">
      {children ? children : renderText()}
    </div>
  )
}

export default AnimatedText