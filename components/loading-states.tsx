"use client"

import { motion } from 'framer-motion'
import { Loader2, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

// Generic loading spinner
export function LoadingSpinner({ 
  size = 'md', 
  className 
}: { 
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return (
    <Loader2 
      className={cn(
        'animate-spin text-blue-500',
        sizeClasses[size],
        className
      )} 
    />
  )
}

// Page loading skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="h-16 bg-muted/20 animate-pulse border-b border-border/20" />
      
      {/* Hero skeleton */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="h-4 bg-muted/20 animate-pulse rounded w-32" />
            <div className="space-y-3">
              <div className="h-12 bg-muted/20 animate-pulse rounded" />
              <div className="h-12 bg-muted/20 animate-pulse rounded w-4/5" />
            </div>
            <div className="h-6 bg-muted/20 animate-pulse rounded w-3/4" />
            <div className="flex gap-4">
              <div className="h-12 bg-muted/20 animate-pulse rounded w-32" />
              <div className="h-12 bg-muted/20 animate-pulse rounded w-32" />
            </div>
          </div>
          <div className="h-96 bg-muted/20 animate-pulse rounded-xl" />
        </div>
      </div>
    </div>
  )
}

// Card loading skeleton
export function CardLoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4 p-6 border border-border/20 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-muted/20 animate-pulse rounded-xl" />
            <div className="h-4 bg-muted/20 animate-pulse rounded w-16" />
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-muted/20 animate-pulse rounded" />
            <div className="h-4 bg-muted/20 animate-pulse rounded w-4/5" />
            <div className="h-4 bg-muted/20 animate-pulse rounded w-3/5" />
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="h-4 bg-muted/20 animate-pulse rounded w-20" />
            <div className="w-8 h-8 bg-muted/20 animate-pulse rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

// Button loading state
export function LoadingButton({ 
  children, 
  isLoading, 
  className,
  ...props 
}: {
  children: React.ReactNode
  isLoading: boolean
  className?: string
  [key: string]: any
}) {
  return (
    <button 
      className={cn(
        'relative flex items-center justify-center gap-2 transition-all duration-200',
        isLoading && 'cursor-not-allowed opacity-70',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <LoadingSpinner size="sm" className="absolute left-1/2 -translate-x-1/2" />
      )}
      <span className={cn(isLoading && 'opacity-0')}>
        {children}
      </span>
    </button>
  )
}

// Animated loading dots
export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )
}

// Progress bar
export function ProgressBar({ 
  progress, 
  className,
  showPercentage = false 
}: { 
  progress: number
  className?: string
  showPercentage?: boolean 
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {showPercentage && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Loading...</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
      <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

// Pulse loading animation
export function PulseLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <motion.div
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="w-3 h-3 bg-violet-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="w-3 h-3 bg-cyan-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Shimmer loading effect
export function ShimmerLoader({ 
  width = "100%", 
  height = "1rem",
  className 
}: { 
  width?: string
  height?: string
  className?: string 
}) {
  return (
    <div 
      className={cn("relative overflow-hidden bg-muted/20 rounded", className)}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Full page loading overlay
export function LoadingOverlay({ 
  isVisible, 
  message = "Loading...",
  className 
}: { 
  isVisible: boolean
  message?: string
  className?: string 
}) {
  if (!isVisible) return null

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-blue-500 mx-auto" />
        </motion.div>
        <p className="text-muted-foreground font-medium">{message}</p>
        <LoadingDots />
      </div>
    </motion.div>
  )
}