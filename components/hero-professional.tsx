"use client"

import { motion } from 'framer-motion'
import { 
  ArrowRight, Shield, Award, Globe, 
  TrendingUp, Users, CheckCircle
} from 'lucide-react'
import { useState, useEffect } from 'react'

const ProfessionalHero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentStat, setCurrentStat] = useState(0)
  
  const fullText = "Enterprise Technology Solutions"
  const stats = [
    { value: "500+", label: "Fortune 500 Clients", icon: Users },
    { value: "99.9%", label: "Success Rate", icon: TrendingUp },
    { value: "40+", label: "Countries Served", icon: Globe },
    { value: "24/7", label: "Enterprise Support", icon: Shield }
  ]

  // Professional typewriter effect
  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
        setTimeout(typeWriter, 100)
      }
    }
    setTimeout(typeWriter, 1000)
  }, [])

  // Rotate stats every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden pt-20">
      {/* Premium Enterprise Background */}
      <div className="absolute inset-0">
        {/* Consistent gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
        
        {/* Consistent grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>
        
        {/* Consistent geometric accents */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="adaptive-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 2xl:gap-20 items-center min-h-screen py-20">
          
          {/* Left Content - Controlled Width */}
          <div className="lg:col-span-7 2xl:col-span-6 text-center lg:text-left max-w-4xl 2xl:max-w-5xl">
            
            {/* Premium Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mb-12"
            >
              <div className="inline-flex items-center glass-card px-8 py-3">
                <Shield className="w-5 h-5 mr-3 text-blue-600" />
                <span className="text-sm font-semibold text-muted-foreground tracking-wide">TRUSTED BY FORTUNE 500 COMPANIES</span>
                <CheckCircle className="w-5 h-5 ml-3 text-green-600" />
              </div>
            </motion.div>

            {/* Premium Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10"
            >
              <h1 className="heading-hero ultra-wide-text ultra-4k-text">
                <span className="block mb-3 2xl:mb-4">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 animate-text-shimmer">
                  Digital Infrastructure
                </span>
              </h1>
            </motion.div>

            {/* Premium Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mb-10"
            >
              <p className="text-xl font-medium text-muted-foreground tracking-tight">
                {typedText}
                <span className="animate-pulse text-blue-600 font-bold">|</span>
              </p>
            </motion.div>

            {/* Premium Description */}
            <motion.p 
              className="text-lead mb-16 max-w-4xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              Accelerate your digital transformation with enterprise-grade cloud infrastructure, 
              AI-powered automation, and strategic consulting. Delivering measurable ROI and 
              operational excellence for global enterprises.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <button className="enterprise-button px-10 py-4 text-white text-lg font-semibold">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-3 inline" />
              </button>
              
              <button className="enterprise-card px-10 py-4 text-slate-700 font-semibold text-lg border-2 border-slate-200 hover:border-blue-300 transition-all duration-400">
                View Case Studies
              </button>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-10 text-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {[
                { icon: Shield, text: "SOC 2 Type II Certified" },
                { icon: Award, text: "ISO 27001 Compliant" },
                { icon: CheckCircle, text: "99.9% SLA Guarantee" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 glass-card px-4 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + (index * 0.1) }}
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Balanced Width */}
          <div className="lg:col-span-5 2xl:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-md 2xl:max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="enterprise-card p-10"
            >
              {/* Current Stat Display */}
              <div className="text-center mb-8">
                <motion.div
                  key={currentStat}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    {(() => {
                      const IconComponent = stats[currentStat]?.icon
                      return IconComponent ? <IconComponent className="w-6 h-6 text-blue-600" /> : null
                    })()}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {stats[currentStat]?.value || '---'}
                  </div>
                  <div className="text-lg font-medium text-muted-foreground">
                    {stats[currentStat]?.label || 'Loading...'}
                  </div>
                </motion.div>
              </div>

              {/* Stat Indicators */}
              <div className="flex justify-center gap-2 mb-8">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStat 
                        ? 'bg-blue-600' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Premium Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "$2.3B", label: "Cost Savings" },
                  { value: "15ms", label: "Avg Response" },
                  { value: "300%", label: "ROI Increase" },
                  { value: "1PB+", label: "Data Processed" }
                ].map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 glass-card hover-lift"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + (index * 0.1) }}
                  >
                    <div className="text-xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground font-semibold tracking-wide uppercase">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Logos Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-muted-foreground mb-4 font-medium">Trusted by industry leaders</p>
              <div className="flex justify-center items-center gap-6 opacity-60">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-16 h-12 bg-muted rounded-lg flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-muted-foreground">LOGO</span>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProfessionalHero