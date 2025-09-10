"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
    children: ReactNode
    className?: string
    id?: string
    variant?: 'hero' | 'content' | 'accent' | 'cta'
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    fullHeight?: boolean
    minHeight?: boolean
}

/**
 * Fixed Section Component that prevents overlap and cutting issues
 */
export const FixedSection = ({
    children,
    className,
    id,
    variant = 'content',
    spacing = 'lg',
    fullHeight = false,
    minHeight = false
}: SectionProps) => {

    const variantStyles = {
        hero: 'bg-gradient-to-br from-background via-background/95 to-background',
        content: 'bg-background',
        accent: 'bg-gradient-to-b from-background to-muted/20',
        cta: 'bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10'
    }

    const spacingStyles = {
        none: 'py-0',
        sm: 'py-8 lg:py-12',
        md: 'py-12 lg:py-16',
        lg: 'py-16 lg:py-24',
        xl: 'py-20 lg:py-32'
    }

    const heightStyles = {
        hero: fullHeight
            ? 'min-h-screen flex items-center'
            : 'min-h-[80vh] lg:min-h-[90vh] flex items-center',
        content: minHeight
            ? 'min-h-[50vh]'
            : '',
        accent: minHeight
            ? 'min-h-[40vh]'
            : '',
        cta: minHeight
            ? 'min-h-[30vh]'
            : ''
    }

    return (
        <section
            id={id}
            className={cn(
                'relative w-full overflow-hidden',
                variantStyles[variant],
                spacingStyles[spacing],
                heightStyles[variant],
                // Ensure proper section separation
                'scroll-mt-20', // Account for fixed header
                className
            )}
            style={{
                // Prevent content cutting with proper constraints
                maxHeight: variant === 'hero' ? 'none' : 'none',
                // Ensure smooth transitions between sections
                scrollSnapAlign: 'start',
                // Add subtle section borders for better separation
                borderBottom: variant !== 'cta' ? '1px solid hsl(var(--border) / 0.1)' : 'none'
            }}
        >
            {children}
        </section>
    )
}

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * Responsive Container with proper spacing
 */
export const ResponsiveContainer = ({
    children,
    className,
    size = 'lg',
    padding = 'lg'
}: ContainerProps) => {

    const sizeStyles = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1400px]',
        full: 'max-w-none'
    }

    const paddingStyles = {
        none: 'px-0',
        sm: 'px-4',
        md: 'px-4 sm:px-6',
        lg: 'px-4 sm:px-6 lg:px-8'
    }

    return (
        <div className={cn(
            'mx-auto relative z-10 w-full',
            sizeStyles[size],
            paddingStyles[padding],
            className
        )}>
            {children}
        </div>
    )
}

interface ContentWrapperProps {
    children: ReactNode
    className?: string
    maxHeight?: boolean
    spacing?: 'tight' | 'normal' | 'loose'
}

/**
 * Content Wrapper that prevents overflow and ensures proper spacing
 */
export const ContentWrapper = ({
    children,
    className,
    maxHeight = false,
    spacing = 'normal'
}: ContentWrapperProps) => {

    const spacingStyles = {
        tight: 'space-y-4',
        normal: 'space-y-6 lg:space-y-8',
        loose: 'space-y-8 lg:space-y-12'
    }

    return (
        <div className={cn(
            'w-full',
            spacingStyles[spacing],
            // Prevent content overflow
            maxHeight && 'max-h-[80vh] overflow-y-auto',
            // Ensure proper text flow
            'break-words',
            className
        )}>
            {children}
        </div>
    )
}

interface GridProps {
    children: ReactNode
    className?: string
    cols?: 1 | 2 | 3 | 4 | 6
    gap?: 'sm' | 'md' | 'lg' | 'xl'
    responsive?: boolean
    equalHeight?: boolean
}

/**
 * Responsive Grid with proper spacing and height management
 */
export const ResponsiveGrid = ({
    children,
    className,
    cols = 3,
    gap = 'lg',
    responsive = true,
    equalHeight = false
}: GridProps) => {

    const gapStyles = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-6 lg:gap-8',
        xl: 'gap-8 lg:gap-12'
    }

    const colStyles = responsive ? {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
    } : {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        6: 'grid-cols-6'
    }

    return (
        <div className={cn(
            'grid w-full',
            colStyles[cols],
            gapStyles[gap],
            // Ensure equal heights if requested
            equalHeight && 'auto-rows-fr',
            // Prevent grid overflow
            'overflow-hidden',
            className
        )}>
            {children}
        </div>
    )
}

interface CardProps {
    children: ReactNode
    className?: string
    variant?: 'default' | 'glass' | 'gradient' | 'outline'
    padding?: 'sm' | 'md' | 'lg' | 'xl'
    hover?: boolean
    height?: 'auto' | 'full' | 'fixed'
}

/**
 * Card Component with proper height management and hover effects
 */
export const FixedCard = ({
    children,
    className,
    variant = 'default',
    padding = 'lg',
    hover = true,
    height = 'auto'
}: CardProps) => {

    const variantStyles = {
        default: 'bg-card border border-border/20',
        glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
        gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20',
        outline: 'border-2 border-muted-foreground/20 bg-background/50'
    }

    const paddingStyles = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-6 lg:p-8',
        xl: 'p-8 lg:p-12'
    }

    const heightStyles = {
        auto: 'h-auto',
        full: 'h-full',
        fixed: 'h-64 lg:h-80'
    }

    const hoverStyles = hover
        ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 transform-gpu'
        : ''

    return (
        <div className={cn(
            'rounded-2xl relative overflow-hidden',
            variantStyles[variant],
            paddingStyles[padding],
            heightStyles[height],
            hoverStyles,
            // Ensure proper content flow
            'flex flex-col',
            className
        )}>
            {children}
        </div>
    )
}

/**
 * Scroll Indicator for better UX
 */
export const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full mt-2 animate-pulse" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Scroll</span>
            </div>
        </div>
    )
}

/**
 * Section Separator for visual clarity
 */
export const SectionSeparator = ({ className }: { className?: string }) => {
  return (
    <div className={cn(
      'w-full h-px bg-gradient-to-r from-transparent via-border to-transparent',
      className
    )} />
  )
}