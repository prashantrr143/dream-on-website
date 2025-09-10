"use client"

import { motion, useMotionValue } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Cloud, Bot, Shield, Zap, Target, Users, Globe, Rocket, Award, CheckCircle, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { FixedSection, ResponsiveContainer, ContentWrapper, ResponsiveGrid, ScrollIndicator } from '@/components/section-layout-fix'

// Lazy load AnimatedText component
const AnimatedText = dynamic(() => import('@/components/animated-text'), {
  ssr: false,
  loading: () => <span className="opacity-0">Loading...</span>
})

const HeroFixed = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const [, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Memoize static data
  const services = useMemo(() => [
    { icon: Cloud, title: "Cloud Infrastructure", metric: "500+", label: "Migrations", bgColor: "bg-blue-500/10", textColor: "text-blue-600" },
    { icon: Bot, title: "AI & Automation", metric: "300%", label: "Efficiency", bgColor: "bg-purple-500/10", textColor: "text-purple-600" },
    { icon: Shield, title: "Security", metric: "99.9%", label: "Protection", bgColor: "bg-green-500/10", textColor: "text-green-600" },
    { icon: Zap, title: "DevOps", metric: "90%", label: "Faster", bgColor: "bg-orange-500/10", textColor: "text-orange-600" }
  ], [])

  const achievements = useMemo(() => [
    { icon: Users, value: "500+", label: "Enterprise Clients", subtitle: "Fortune 500" },
    { icon: Award, value: "99.9%", label: "Success Rate", subtitle: "Projects" },
    { icon: Globe, value: "40+", label: "Countries", subtitle: "Global reach" },
    { icon: Target, value: "24/7", label: "Support", subtitle: "Always on" }
  ], [])

  const trustBadges = useMemo(() => [
    { text: "SOC 2 Type II", icon: Shield },
    { text: "ISO 27001", icon: CheckCircle },
    { text: "99.9% SLA", icon: Zap },
    { text: "24/7 Support", icon: Target }
  ], [])

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = document.querySelector('#hero-section')?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const newX = e.clientX - centerX
      const newY = e.clientY - centerY
      
      setMousePosition({ x: newX, y: newY })
      mouseX.set(newX)
      mouseY.set(newY)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const throttledHandler = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => handleMouseMove(e), 16) // ~60fps
    }
    
    window.addEventListener('mousemove', throttledHandler, { passive: true })
    return () => {
      window.removeEventListener('mousemove', throttledHandler)
      clearTimeout(timeoutId)
    }
  }, [handleMouseMove])

  // Memoize animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8 }
    }
  }), [])

  return (
    <FixedSection 
      id="hero-section"
      variant="hero"
      spacing="none"
      fullHeight={true}
      className="relative"
    >
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] grid-pattern" />
        
        {/* Clean accent gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <ResponsiveContainer size="lg" className="h-full flex items-center">
        <div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Content - Responsive columns */}
          <motion.div
            className="lg:col-span-7 xl:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ContentWrapper spacing="normal" className="max-w-none">
              {/* Professional Badge */}
              <motion.div variants={itemVariants}>
                <Badge 
                  variant="secondary" 
                  className="inline-flex items-center gap-2 bg-blue-50/10 border border-blue-500/20 text-blue-400 font-medium rounded-full transition-all duration-300 hover:bg-blue-50/20 hover:border-blue-400/30 px-4 py-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Enterprise Technology Solutions</span>
                </Badge>
              </motion.div>

              {/* Professional Typography Hero Title */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-balance">
                  <div className="space-y-2">
                    {/* First Line */}
                    <AnimatedText
                      text="Transform Your"
                      animation="splitWords"
                      className="block text-foreground font-heading"
                      delay={0.3}
                      stagger={0.15}
                    />
                    
                    {/* Second Line with Gradient */}
                    <div className="relative">
                      <AnimatedText
                        text="Enterprise"
                        animation="splitChars"
                        className="gradient-text font-heading inline-block mr-4"
                        delay={0.8}
                        stagger={0.08}
                      />
                      <AnimatedText
                        text="Future"
                        animation="splitChars"
                        className="text-foreground font-heading inline-block"
                        delay={1.3}
                        stagger={0.08}
                      />
                      
                      {/* Clean underline accent */}
                      <motion.div
                        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full w-3/5"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </h1>
              </motion.div>

              {/* Professional Description */}
              <motion.div variants={itemVariants}>
                <div className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                  <AnimatedText
                    text="Accelerate digital transformation with enterprise-grade cloud infrastructure, AI-powered automation, and strategic consulting designed for scale, security, and measurable ROI."
                    animation="splitWords"
                    className="block"
                    delay={2.5}
                    stagger={0.06}
                  />
                </div>
              </motion.div>

              {/* Professional CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    size="lg"
                    className="enterprise-button text-white font-medium group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-lg"
                  >
                    <span className="relative flex items-center justify-center gap-3">
                      <Rocket className="w-5 h-5" />
                      <span className="whitespace-nowrap">Start Your Transformation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-foreground/20 hover:border-blue-400/60 hover:bg-blue-400/5 text-foreground hover:text-blue-400 font-medium group transition-all duration-300 w-full sm:w-auto px-8 py-4 text-lg"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Play className="w-5 h-5" />
                      <span className="whitespace-nowrap">Schedule Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Professional Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center gap-6"
                variants={itemVariants}
              >
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 3.5 }}
                    >
                      <IconComponent className="w-4 h-4 text-blue-400" />
                      <span className="whitespace-nowrap">
                        {badge.text}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Key Metrics */}
              <motion.div variants={itemVariants}>
                <ResponsiveGrid cols={4} gap="lg" className="pt-4">
                  {achievements.map((stat, index) => {
                    return (
                      <motion.div 
                        key={index} 
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 4 }}
                      >
                        <div className="space-y-1">
                          <div className="text-2xl lg:text-3xl font-bold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </ResponsiveGrid>
              </motion.div>
            </ContentWrapper>
          </motion.div>

          {/* Clean Visual Section */}
          <motion.div
            className="lg:col-span-5 xl:col-span-4 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Simple Service Grid */}
            <ResponsiveGrid cols={2} gap="md">
              {services.slice(0, 4).map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 1,
                      duration: 0.6,
                    }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="border border-border/20 hover:border-blue-400/30 bg-card/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-card/80 p-4 lg:p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={cn("rounded-lg flex items-center justify-center w-10 h-10", service.bgColor)}>
                            <IconComponent className={cn("w-5 h-5", service.textColor)} />
                          </div>
                          <div className={cn("font-bold text-right text-sm", service.textColor)}>
                            {service.metric}
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </ResponsiveGrid>

            {/* Clean accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </motion.div>
        </div>
      </ResponsiveContainer>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </FixedSection>
  )
}

export default HeroFixed