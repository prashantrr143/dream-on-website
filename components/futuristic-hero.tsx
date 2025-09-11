"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, Sparkles, Zap, Cpu, Network, Shield, Bot, 
  Users, Globe, Award, Rocket, Play, ChevronDown 
} from 'lucide-react'
import { useEffect, useState, useRef, useCallback } from 'react'

const FuturisticHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // 3D Transform effects
  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5])

  // Enhanced metrics with real-time animation
  const [liveMetrics, setLiveMetrics] = useState({
    clients: 500,
    successRate: 99.9,
    countries: 40,
    uptime: 99.99
  })

  const futuristicServices = [
    { 
      id: 1,
      icon: Bot, 
      title: "AI-Powered Automation", 
      metric: "300%", 
      label: "Efficiency Boost",
      color: "from-purple-500 to-pink-500",
      position: { x: 20, y: 20, z: 50 }
    },
    { 
      id: 2,
      icon: Shield, 
      title: "Quantum Security", 
      metric: "99.99%", 
      label: "Threat Protection",
      color: "from-cyan-500 to-blue-500",
      position: { x: -20, y: -20, z: 30 }
    },
    { 
      id: 3,
      icon: Network, 
      title: "Neural Networks", 
      metric: "1000+", 
      label: "Connections/sec",
      color: "from-green-500 to-emerald-500",
      position: { x: 30, y: -10, z: 40 }
    },
    { 
      id: 4,
      icon: Cpu, 
      title: "Edge Computing", 
      metric: "10ms", 
      label: "Response Time",
      color: "from-orange-500 to-red-500",
      position: { x: -10, y: 30, z: 20 }
    }
  ]


  // Advanced mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const x = e.clientX - centerX
      const y = e.clientY - centerY
      
      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])


  // Live metrics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        clients: prev.clients + Math.floor(Math.random() * 3),
        successRate: Math.min(99.99, prev.successRate + (Math.random() - 0.5) * 0.01),
        countries: prev.countries,
        uptime: Math.max(99.90, prev.uptime + (Math.random() - 0.5) * 0.01)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"
      style={{ perspective: '1000px' }}
    >
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5 dot-pattern" />

      {/* Interactive Background Mesh */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, 
                       rgba(59, 130, 246, 0.15) 0%, 
                       rgba(147, 51, 234, 0.1) 25%, 
                       rgba(34, 197, 94, 0.05) 50%, 
                       transparent 70%)`
        }}
        animate={{
          backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          initial={{ 
            x: Math.random() * 1000, 
            y: Math.random() * 600,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: Math.random() * 1000,
            y: Math.random() * 600,
            rotate: 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: `linear-gradient(45deg, 
              hsl(${i * 30}, 70%, 60%), 
              hsl(${(i * 30) + 60}, 70%, 70%))`,
            width: `${20 + i * 2}px`,
            height: `${20 + i * 2}px`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '4px' : '0',
            zIndex: 2
          }}
        />
      ))}

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Enhanced Left Content */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-8"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Futuristic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Next-Gen Enterprise Solutions
                <motion.div
                  className="ml-2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Badge>
            </motion.div>

            {/* Holographic Title */}
            <motion.h1 
              className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Transform
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-4"
                animate={{ 
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                style={{ backgroundSize: '200% 100%' }}
              >
                The Future
              </motion.span>
            </motion.h1>

            {/* AI-Enhanced Description */}
            <motion.p 
              className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Harness the power of{' '}
              <motion.span 
                className="text-blue-400 font-semibold"
                animate={{ textShadow: ['0 0 5px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(59, 130, 246, 0.8)', '0 0 5px rgba(59, 130, 246, 0.5)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Artificial Intelligence
              </motion.span>
              ,{' '}
              <motion.span 
                className="text-purple-400 font-semibold"
                animate={{ textShadow: ['0 0 5px rgba(147, 51, 234, 0.5)', '0 0 20px rgba(147, 51, 234, 0.8)', '0 0 5px rgba(147, 51, 234, 0.5)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Quantum Computing
              </motion.span>
              , and{' '}
              <motion.span 
                className="text-green-400 font-semibold"
                animate={{ textShadow: ['0 0 5px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 5px rgba(34, 197, 94, 0.5)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Edge Computing
              </motion.span>
              {' '}to revolutionize your enterprise infrastructure with unprecedented scale and intelligence.
            </motion.p>

            {/* Futuristic CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-2xl relative overflow-hidden group transition-all duration-500"
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket className="w-5 h-5" />
                    Launch Transformation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:bg-blue-400/10 font-bold py-4 px-8 rounded-xl backdrop-blur-sm transition-all duration-500 group"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Experience Demo
                  <motion.div
                    className="ml-3 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Live Metrics Dashboard */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: Users, value: liveMetrics.clients, label: "Active Clients", suffix: "+" },
                { icon: Award, value: liveMetrics.successRate, label: "Success Rate", suffix: "%" },
                { icon: Globe, value: liveMetrics.countries, label: "Countries", suffix: "+" },
                { icon: Zap, value: liveMetrics.uptime, label: "Uptime", suffix: "%" }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 group-hover:border-blue-400/50 transition-all duration-300">
                    <metric.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      animate={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                    >
                      {metric.value}{metric.suffix}
                    </motion.div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Interactive Services Showcase */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-4 relative h-96"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {futuristicServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="absolute w-48 h-32 cursor-pointer"
                style={{
                  x: service.position.x,
                  y: service.position.y,
                  z: service.position.z,
                  transformStyle: 'preserve-3d'
                }}
                initial={{ 
                  opacity: 0,
                  rotateX: 180,
                  z: -100
                }}
                animate={{ 
                  opacity: 1,
                  rotateX: 0,
                  z: service.position.z
                }}
                transition={{ 
                  delay: 1.2 + index * 0.2,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  z: service.position.z + 50,
                  rotateY: 10,
                  scale: 1.1
                }}
              >
                <div 
                  className={`h-full rounded-xl backdrop-blur-md border border-white/20 p-4 bg-gradient-to-br ${service.color} relative overflow-hidden group`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{ skewX: -15 }}
                  />
                  
                  <div className="relative z-10">
                    <service.icon className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-white font-bold text-sm mb-1">{service.title}</h3>
                    <div className="text-white/80 text-xs mb-2">{service.label}</div>
                    <div className="text-2xl font-bold text-white">{service.metric}</div>
                  </div>

                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  )
}

export default FuturisticHero