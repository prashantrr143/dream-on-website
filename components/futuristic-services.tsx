"use client"

import { motion, useMotionValue } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, Sparkles, Bot, Shield, Cloud, Network,
  Database, Rocket, TrendingUp
} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const FuturisticServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const services = [
    {
      id: 1,
      icon: Bot,
      title: "AI-Powered Intelligence",
      subtitle: "Generative AI & Machine Learning",
      description: "Revolutionary AI solutions that transform business operations with neural networks, deep learning, and cognitive automation.",
      features: ["GPT-4 Integration", "Custom AI Models", "Natural Language Processing", "Computer Vision"],
      metrics: { value: "300%", label: "Efficiency Increase", trend: "+45% this quarter" },
      color: "from-purple-500 via-pink-500 to-red-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      accentColor: "purple-400",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
    },
    {
      id: 2,
      icon: Shield,
      title: "Quantum Security",
      subtitle: "Zero-Trust Architecture",
      description: "Next-generation cybersecurity with quantum encryption, AI threat detection, and blockchain-powered identity management.",
      features: ["Quantum Encryption", "AI Threat Detection", "Zero-Trust Network", "Blockchain Identity"],
      metrics: { value: "99.99%", label: "Threat Prevention", trend: "100% uptime" },
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      accentColor: "cyan-400",
      technologies: ["Kubernetes", "Istio", "HashiCorp", "CrowdStrike"]
    },
    {
      id: 3,
      icon: Cloud,
      title: "Hyperscale Cloud",
      subtitle: "Multi-Cloud Infrastructure",
      description: "Intelligent cloud orchestration with auto-scaling, predictive analytics, and edge computing integration.",
      features: ["Auto-Scaling", "Edge Computing", "Multi-Cloud", "Serverless Architecture"],
      metrics: { value: "500+", label: "Migrations Completed", trend: "50% cost reduction" },
      color: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      accentColor: "green-400",
      technologies: ["AWS", "Azure", "GCP", "Terraform"]
    },
    {
      id: 4,
      icon: Network,
      title: "Neural Networks",
      subtitle: "Distributed Computing",
      description: "Advanced neural network architectures for real-time data processing and intelligent decision making.",
      features: ["Real-time Processing", "Distributed Computing", "Edge Intelligence", "Quantum Circuits"],
      metrics: { value: "10ms", label: "Response Time", trend: "99.9% accuracy" },
      color: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      accentColor: "orange-400",
      technologies: ["Apache Spark", "Kafka", "Redis", "GraphQL"]
    },
    {
      id: 5,
      icon: Database,
      title: "Data Intelligence",
      subtitle: "Real-time Analytics",
      description: "Intelligent data lakes with real-time streaming, predictive analytics, and automated insights generation.",
      features: ["Real-time Streaming", "Predictive Models", "Data Lakes", "Automated Insights"],
      metrics: { value: "1PB+", label: "Data Processed", trend: "10x faster queries" },
      color: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      accentColor: "violet-400",
      technologies: ["Snowflake", "Databricks", "Apache Airflow", "dbt"]
    },
    {
      id: 6,
      icon: Rocket,
      title: "DevOps 3.0",
      subtitle: "Autonomous Deployment",
      description: "Self-healing infrastructure with AI-powered CI/CD, predictive monitoring, and autonomous incident response.",
      features: ["AI-Powered CI/CD", "Self-Healing Systems", "Predictive Monitoring", "Autonomous Response"],
      metrics: { value: "90%", label: "Faster Deployment", trend: "Zero downtime" },
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      accentColor: "blue-400",
      technologies: ["GitHub Actions", "ArgoCD", "Prometheus", "Grafana"]
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        setMousePosition({ x, y })
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30 py-20 overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, 
                       rgba(59, 130, 246, 0.1) 0%, 
                       rgba(147, 51, 234, 0.05) 25%, 
                       rgba(34, 197, 94, 0.03) 50%, 
                       transparent 70%)`
        }}
      />

      {/* Floating Geometric Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            scale: [1, Math.random() + 0.5, 1]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
        >
          <div 
            className={`w-full h-full bg-gradient-to-br ${services[i % services.length]?.color} ${
              i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'
            }`} 
          />
        </motion.div>
      ))}

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="inline-block mb-6"
          >
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 backdrop-blur-sm px-6 py-2">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Next-Generation Services
              <motion.div
                className="ml-3 w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Engineered for
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Tomorrow
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the convergence of artificial intelligence, quantum computing, and hyperscale infrastructure 
            in our revolutionary service ecosystem.
          </motion.p>
        </motion.div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className={`relative h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-${service.accentColor}/50 group-hover:shadow-2xl`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  initial={{ scale: 0.8, rotate: -180 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%', skewX: -15 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Status Indicator */}
                <motion.div
                  className={`absolute top-4 right-4 w-3 h-3 bg-${service.accentColor} rounded-full`}
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

                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Service Info */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className={`text-${service.accentColor} text-sm font-medium mb-4`}>
                    {service.subtitle}
                  </p>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm text-slate-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className={`w-1.5 h-1.5 bg-${service.accentColor} rounded-full mr-3`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="bg-slate-900/50 rounded-xl p-4 mb-6 backdrop-blur-sm border border-slate-700/50">
                    <div className={`text-3xl font-bold text-${service.accentColor} mb-1`}>
                      {service.metrics.value}
                    </div>
                    <div className="text-white text-sm font-medium mb-1">
                      {service.metrics.label}
                    </div>
                    <div className="text-green-400 text-xs flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {service.metrics.trend}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Button 
                      variant="ghost"
                      size="sm"
                      className={`text-${service.accentColor} hover:text-white hover:bg-${service.accentColor}/20 group/btn transition-all duration-300`}
                    >
                      Explore Solution
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* 3D Depth Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.1) 0%, 
                      rgba(255, 255, 255, 0.02) 50%, 
                      rgba(0, 0, 0, 0.1) 100%)`,
                    transform: activeService === service.id ? 'translateZ(20px)' : 'translateZ(0px)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                initial={{ x: '-100%', skewX: -15 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                Start Your Digital Evolution
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FuturisticServices