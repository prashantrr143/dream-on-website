"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, Award, Users, TrendingUp, Zap, Shield, Bot, 
  Building, Globe, Target, Clock, ChevronLeft, ChevronRight
} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const FuturisticCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Global Financial Platform",
      company: "Fortune 100 Financial Institution",
      industry: "Financial Services",
      duration: "18 months",
      challenge: "Legacy systems processing 500M+ daily transactions with security vulnerabilities",
      solution: "Quantum-encrypted AI platform with real-time fraud detection and automated compliance",
      results: {
        primary: { value: "500M+", label: "Daily Transactions", icon: TrendingUp },
        secondary: { value: "99.99%", label: "Uptime Achieved", icon: Shield },
        tertiary: { value: "$2.3B", label: "Annual Savings", icon: Target },
        quaternary: { value: "15ms", label: "Response Time", icon: Zap }
      },
      technologies: ["Quantum Computing", "Neural Networks", "Blockchain", "Edge AI"],
      metrics: [
        { label: "Fraud Prevention", value: "99.97%", trend: "+12%" },
        { label: "Processing Speed", value: "10x", trend: "Faster" },
        { label: "Cost Reduction", value: "65%", trend: "Annual" },
        { label: "User Experience", value: "4.9/5", trend: "Rating" }
      ],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      accentColor: "cyan-400",
      image: "🏦"
    },
    {
      id: 2,
      title: "Autonomous Manufacturing Intelligence",
      company: "Leading Automotive Manufacturer",
      industry: "Manufacturing",
      duration: "24 months",
      challenge: "Quality control bottlenecks causing $50M+ annual losses and production delays",
      solution: "Computer vision AI with predictive maintenance and autonomous quality assurance",
      results: {
        primary: { value: "95%", label: "Defect Reduction", icon: Award },
        secondary: { value: "40%", label: "Faster Production", icon: Clock },
        tertiary: { value: "$150M", label: "Annual Value", icon: Building },
        quaternary: { value: "24/7", label: "Autonomous Operation", icon: Bot }
      },
      technologies: ["Computer Vision", "Predictive Analytics", "IoT Sensors", "Digital Twins"],
      metrics: [
        { label: "Quality Score", value: "99.8%", trend: "+15%" },
        { label: "Efficiency Gain", value: "40%", trend: "Overall" },
        { label: "Downtime Reduction", value: "85%", trend: "Prevented" },
        { label: "ROI Achievement", value: "320%", trend: "Year 1" }
      ],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      accentColor: "green-400",
      image: "🏭"
    },
    {
      id: 3,
      title: "Quantum-Scale Cloud Infrastructure",
      company: "Global Technology Conglomerate",
      industry: "Technology",
      duration: "12 months",
      challenge: "Multi-cloud complexity serving 2B+ global users with 99.99% uptime requirement",
      solution: "Quantum-optimized infrastructure with AI-driven auto-scaling and edge distribution",
      results: {
        primary: { value: "2B+", label: "Global Users", icon: Globe },
        secondary: { value: "99.999%", label: "Uptime SLA", icon: Zap },
        tertiary: { value: "80%", label: "Cost Optimization", icon: TrendingUp },
        quaternary: { value: "5ms", label: "Global Latency", icon: Target }
      },
      technologies: ["Quantum Optimization", "Edge Computing", "Kubernetes", "Service Mesh"],
      metrics: [
        { label: "Availability", value: "99.999%", trend: "SLA Met" },
        { label: "Performance", value: "5x", trend: "Faster" },
        { label: "Scalability", value: "1000x", trend: "Auto-scale" },
        { label: "Efficiency", value: "80%", trend: "Cost Save" }
      ],
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      bgColor: "from-purple-500/10 to-violet-500/10",
      accentColor: "purple-400",
      image: "☁️"
    },
    {
      id: 4,
      title: "Neural Healthcare Intelligence",
      company: "International Healthcare Network",
      industry: "Healthcare",
      duration: "36 months",
      challenge: "Patient diagnosis accuracy and treatment optimization across 500+ facilities globally",
      solution: "AI-powered diagnostic platform with federated learning and privacy-preserving analytics",
      results: {
        primary: { value: "97%", label: "Diagnostic Accuracy", icon: Award },
        secondary: { value: "50M+", label: "Patients Served", icon: Users },
        tertiary: { value: "60%", label: "Faster Diagnosis", icon: Clock },
        quaternary: { value: "$800M", label: "Cost Savings", icon: TrendingUp }
      },
      technologies: ["Federated Learning", "Medical AI", "Privacy Computing", "Real-time Analytics"],
      metrics: [
        { label: "Accuracy Rate", value: "97%", trend: "+23%" },
        { label: "Time to Diagnosis", value: "60%", trend: "Faster" },
        { label: "Patient Outcomes", value: "85%", trend: "Improved" },
        { label: "System Efficiency", value: "4.8x", trend: "Better" }
      ],
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      bgColor: "from-rose-500/10 to-pink-500/10",
      accentColor: "rose-400",
      image: "🏥"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setActiveCase((prev) => (prev + 1) % caseStudies.length)
      }, 8000)
      return () => clearInterval(interval)
    }
    return () => {} // Return empty cleanup function when not auto-playing
  }, [isAutoPlay, caseStudies.length])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlay(false)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlay(false)
  }

  const currentCase = caseStudies[activeCase] || caseStudies[0]!
  
  // Early return if no case studies
  if (!currentCase) {
    return <div>No case studies available</div>
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-blue-950/30 py-20 overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, 
                       rgba(147, 51, 234, 0.15) 0%, 
                       rgba(59, 130, 246, 0.1) 25%, 
                       rgba(34, 197, 94, 0.05) 50%, 
                       transparent 70%)`
        }}
        animate={{
          backgroundPosition: `${mousePosition.x / 20}px ${mousePosition.y / 20}px`
        }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        >
          <div 
            className={`w-2 h-2 bg-gradient-to-r ${caseStudies[i % caseStudies.length]?.gradient || 'from-blue-500 to-purple-500'} rounded-full`}
          />
        </motion.div>
      ))}

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30 text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-500 backdrop-blur-sm px-6 py-2 mb-6">
            <Award className="w-5 h-5 mr-2 animate-pulse" />
            Success Stories
            <motion.div
              className="ml-3 w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Badge>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Transforming
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Industries
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Case Study Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            {/* Case Details */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="flex items-center space-x-4">
                <motion.div 
                  className={`text-8xl`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {currentCase.image}
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentCase.title}
                  </h3>
                  <p className={`text-${currentCase.accentColor} text-lg font-medium mb-1`}>
                    {currentCase.company}
                  </p>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <span>{currentCase.industry}</span>
                    <span>•</span>
                    <span>{currentCase.duration}</span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-3">Challenge</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-3">Solution</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {currentCase.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${currentCase.bgColor} border border-${currentCase.accentColor}/30 rounded-full text-sm text-${currentCase.accentColor} backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`bg-gradient-to-r ${currentCase.gradient} hover:shadow-2xl text-white font-bold py-3 px-8 rounded-xl transition-all duration-300`}
                >
                  View Full Case Study
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Results Dashboard */}
            <div className="relative">
              <motion.div
                className={`bg-gradient-to-br ${currentCase.bgColor} backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${currentCase.gradient} opacity-0`}
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <h4 className="text-2xl font-bold text-white mb-8 text-center">
                  Impact Results
                </h4>

                {/* Primary Results */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {Object.values(currentCase.results).map((result, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${currentCase.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                        <result.icon className="w-8 h-8 text-white" />
                      </div>
                      <motion.div 
                        className={`text-3xl font-bold text-${currentCase.accentColor} mb-2`}
                        animate={{ 
                          textShadow: [`0 0 5px rgba(59, 130, 246, 0.5)`, `0 0 20px rgba(59, 130, 246, 0.8)`, `0 0 5px rgba(59, 130, 246, 0.5)`]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {result.value}
                      </motion.div>
                      <div className="text-slate-300 text-sm font-medium">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Detailed Metrics */}
                <div className="space-y-4">
                  {currentCase.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-900/30 rounded-xl backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                    >
                      <span className="text-slate-300 font-medium">{metric.label}</span>
                      <div className="flex items-center space-x-3">
                        <span className={`text-2xl font-bold text-${currentCase.accentColor}`}>
                          {metric.value}
                        </span>
                        <span className="text-green-400 text-sm font-medium">
                          {metric.trend}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevCase}
            className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Progress Indicators */}
          <div className="flex space-x-3">
            {caseStudies.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  idx === activeCase 
                    ? `bg-${currentCase.accentColor} border-${currentCase.accentColor}` 
                    : 'border-slate-600 hover:border-slate-400'
                }`}
                onClick={() => setActiveCase(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.div
                  className={`w-full h-full rounded-full bg-${currentCase.accentColor}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: idx === activeCase ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextCase}
            className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Auto-play Toggle */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
            <motion.div
              className="ml-2 w-2 h-2 bg-green-400 rounded-full"
              animate={{ 
                scale: isAutoPlay ? [1, 1.5, 1] : 1,
                opacity: isAutoPlay ? [1, 0.5, 1] : 0.5
              }}
              transition={{ duration: 1, repeat: isAutoPlay ? Infinity : 0 }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FuturisticCaseStudies