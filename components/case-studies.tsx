"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, Users, Clock, Award, Shield, Cloud, Bot, Zap, BarChart3, Target, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "enterprise-ai-knowledge-assistant",
      title: "Enterprise AI Knowledge Assistant",
      company: "Fortune 100 Technology Corporation",
      category: "Generative AI & Knowledge Management",
      challenge: "Knowledge silos preventing innovation at enterprise scale",
      solution: "AI-powered knowledge assistant serving 200K+ employees",
      results: {
        primary: "200K+ Users",
        secondary: "75% Time Savings",
        tertiary: "$120M Value"
      },
      metrics: [
        { icon: Users, label: "Active Users", value: "200K+" },
        { icon: Clock, label: "Time Savings", value: "75%" },
        { icon: TrendingUp, label: "Productivity Gain", value: "300%" },
        { icon: Award, label: "Annual Value", value: "$120M" }
      ],
      technologies: ["GPT-4", "LangChain", "Pinecone", "Azure OpenAI"],
      gradient: "from-violet-500/20 to-indigo-500/20",
      accentColor: "violet",
      icon: Bot,
      timeline: "14 months",
      industry: "Technology"
    },
    {
      id: "ai-powered-customer-service",
      title: "AI-Powered Customer Service",
      company: "Global Telecommunications Provider",
      category: "Generative AI & Customer Experience",
      challenge: "Managing 80M+ customers with quality service at scale",
      solution: "AI-powered omnichannel customer experience platform",
      results: {
        primary: "80M+ Customers",
        secondary: "92% Satisfaction",
        tertiary: "$320M Savings"
      },
      metrics: [
        { icon: Users, label: "Customers Served", value: "80M+" },
        { icon: Clock, label: "Response Time", value: "30 Sec" },
        { icon: TrendingUp, label: "Satisfaction", value: "92%" },
        { icon: Award, label: "Annual Savings", value: "$320M" }
      ],
      technologies: ["GPT-4 Turbo", "Azure Cognitive", "Rasa", "Twilio"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      accentColor: "cyan",
      icon: Users,
      timeline: "16 months",
      industry: "Telecommunications"
    },
    {
      id: "global-bank-transformation",
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      category: "Cloud Architecture & Security",
      challenge: "Legacy infrastructure migration to cloud with zero downtime",
      solution: "Multi-cloud strategy with advanced security protocols",
      results: {
        primary: "99.99% Uptime",
        secondary: "60% Cost Reduction",
        tertiary: "3x Performance"
      },
      metrics: [
        { icon: Users, label: "50M+ Users Migrated", value: "50M+" },
        { icon: Clock, label: "Zero Downtime", value: "0h" },
        { icon: Shield, label: "Security Compliance", value: "100%" },
        { icon: TrendingUp, label: "Performance Gain", value: "300%" }
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Zero Trust"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      icon: Building2,
      timeline: "18 months",
      industry: "Financial Services"
    },
    {
      id: "ai-automation-manufacturing",
      title: "AI-Powered Manufacturing Optimization",
      company: "Leading Automotive Manufacturer",
      category: "AI & Automation",
      challenge: "Manual quality control causing production delays",
      solution: "Computer vision AI for real-time defect detection",
      results: {
        primary: "95% Defect Reduction",
        secondary: "40% Faster Production",
        tertiary: "$50M Savings"
      },
      metrics: [
        { icon: Bot, label: "AI Models Deployed", value: "25+" },
        { icon: TrendingUp, label: "Quality Improvement", value: "95%" },
        { icon: Zap, label: "Speed Increase", value: "40%" },
        { icon: Award, label: "Annual Savings", value: "$50M" }
      ],
      technologies: ["TensorFlow", "OpenCV", "MLOps", "Edge Computing"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      icon: Bot,
      timeline: "12 months",
      industry: "Manufacturing"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section 
      className="relative overflow-hidden min-h-screen max-h-screen flex flex-col justify-center" 
      style={{ padding: 'clamp(4rem, 8vh, 6rem) 0' }}
      id="case-studies"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="section-container relative z-10 h-full flex flex-col justify-center">
        {/* Header */}
        <motion.div 
          className="text-center"
          style={{ marginBottom: 'clamp(2rem, 5vh, 3rem)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Badge 
              variant="secondary" 
              className="glass-card rounded-full"
              style={{
                padding: 'clamp(0.5rem, 1vh, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                marginBottom: 'clamp(1rem, 2vh, 1.5rem)'
              }}
            >
              <Award className="w-4 h-4 mr-2 animate-pulse" />
              Success Stories
            </Badge>
          </motion.div>
          
          <h2 
            className="leading-tight text-balance max-w-4xl mx-auto font-heading"
            style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: 'clamp(1rem, 2vh, 1.5rem)'
            }}
          >
            <AnimatedText
              text="Real Results, "
              animation="splitWords"
              className="inline-block"
              stagger={0.15}
            />
            <AnimatedText
              text="Proven Impact"
              animation="splitChars"
              className="gradient-text animate-text-shimmer inline-block font-display"
              delay={0.5}
              stagger={0.1}
            />
          </h2>
          <p 
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            Discover how we've transformed businesses across industries with measurable results
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ 
            gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            maxHeight: '65vh',
            overflow: 'hidden'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon
            return (
              <motion.div
                key={study.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Link href={`/case-studies/${study.id}`} className="block">
                  <div 
                    className="glass-card h-full relative overflow-hidden rounded-xl cursor-pointer"
                    style={{ 
                      padding: 'clamp(1rem, 2vh, 1.5rem)',
                      minHeight: 'clamp(280px, 30vh, 350px)',
                      maxHeight: 'clamp(280px, 30vh, 350px)'
                    }}
                  >
                    {/* Gradient Background */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      study.gradient
                    )} />
                    
                    {/* Accent Border */}
                    <div className={cn(
                      "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700",
                      study.accentColor === 'blue' && "from-blue-500 via-cyan-500 to-blue-600",
                      study.accentColor === 'purple' && "from-purple-500 via-pink-500 to-purple-600",
                      study.accentColor === 'green' && "from-green-500 via-emerald-500 to-green-600",
                      study.accentColor === 'orange' && "from-orange-500 via-red-500 to-orange-600",
                      study.accentColor === 'violet' && "from-violet-500 via-indigo-500 to-violet-600",
                      study.accentColor === 'cyan' && "from-cyan-500 via-teal-500 to-cyan-600"
                    )} />
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Header */}
                      <div 
                        className="flex items-start justify-between"
                        style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1rem)' }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className={cn(
                              "rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300",
                              study.accentColor === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                              study.accentColor === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                              study.accentColor === 'green' && "bg-green-500/10 group-hover:bg-green-500/20",
                              study.accentColor === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20",
                              study.accentColor === 'violet' && "bg-violet-500/10 group-hover:bg-violet-500/20",
                              study.accentColor === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                            )}
                            style={{
                              width: 'clamp(2.5rem, 4vw, 3rem)',
                              height: 'clamp(2.5rem, 4vw, 3rem)'
                            }}
                            whileHover={{ rotate: 5 }}
                          >
                            <IconComponent 
                              className={cn(
                                study.accentColor === 'blue' && "text-blue-500",
                                study.accentColor === 'purple' && "text-purple-500",
                                study.accentColor === 'green' && "text-green-500",
                                study.accentColor === 'orange' && "text-orange-500",
                                study.accentColor === 'violet' && "text-violet-500",
                                study.accentColor === 'cyan' && "text-cyan-500"
                              )}
                              style={{
                                width: 'clamp(1rem, 2vw, 1.25rem)',
                                height: 'clamp(1rem, 2vw, 1.25rem)'
                              }}
                            />
                          </motion.div>
                          <div>
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-muted/50 border-0"
                              style={{ fontSize: 'clamp(0.625rem, 1.25vw, 0.75rem)' }}
                            >
                              {study.industry}
                            </Badge>
                          </div>
                        </div>
                        
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                      
                      {/* Title & Company */}
                      <div style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1rem)' }}>
                        <h3 
                          className="font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight"
                          style={{ 
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)'
                          }}
                        >
                          {study.title}
                        </h3>
                        <p 
                          className="text-muted-foreground font-medium"
                          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                        >
                          {study.company}
                        </p>
                      </div>
                      
                      {/* Challenge & Solution */}
                      <div 
                        className="space-y-2 flex-grow"
                        style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1rem)' }}
                      >
                        <div>
                          <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Challenge:</span>
                          <p 
                            className="text-muted-foreground leading-snug"
                            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}
                          >
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Solution:</span>
                          <p 
                            className="text-muted-foreground leading-snug"
                            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}
                          >
                            {study.solution}
                          </p>
                        </div>
                      </div>
                      
                      {/* Key Results */}
                      <div 
                        className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50"
                        style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1rem)' }}
                      >
                        <div className="text-center">
                          <div 
                            className={cn(
                              "font-bold",
                              study.accentColor === 'blue' && "text-blue-400",
                              study.accentColor === 'purple' && "text-purple-400",
                              study.accentColor === 'green' && "text-green-400",
                              study.accentColor === 'orange' && "text-orange-400",
                              study.accentColor === 'violet' && "text-violet-400",
                              study.accentColor === 'cyan' && "text-cyan-400"
                            )}
                            style={{ fontSize: 'clamp(0.875rem, 1.75vw, 1rem)' }}
                          >
                            {study.results.primary}
                          </div>
                          <div 
                            className="text-muted-foreground text-xs"
                            style={{ fontSize: 'clamp(0.625rem, 1.25vw, 0.7rem)' }}
                          >
                            Primary KPI
                          </div>
                        </div>
                        <div className="text-center">
                          <div 
                            className="font-bold text-foreground"
                            style={{ fontSize: 'clamp(0.875rem, 1.75vw, 1rem)' }}
                          >
                            {study.results.secondary}
                          </div>
                          <div 
                            className="text-muted-foreground text-xs"
                            style={{ fontSize: 'clamp(0.625rem, 1.25vw, 0.7rem)' }}
                          >
                            Impact
                          </div>
                        </div>
                        <div className="text-center">
                          <div 
                            className="font-bold text-foreground"
                            style={{ fontSize: 'clamp(0.875rem, 1.75vw, 1rem)' }}
                          >
                            {study.results.tertiary}
                          </div>
                          <div 
                            className="text-muted-foreground text-xs"
                            style={{ fontSize: 'clamp(0.625rem, 1.25vw, 0.7rem)' }}
                          >
                            Additional
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <motion.div 
                        className="flex items-center justify-between pt-3 border-t border-border/50"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center gap-2">
                          <span 
                            className={cn(
                              "font-semibold",
                              study.accentColor === 'blue' && "text-blue-400 group-hover:text-blue-300",
                              study.accentColor === 'purple' && "text-purple-400 group-hover:text-purple-300",
                              study.accentColor === 'green' && "text-green-400 group-hover:text-green-300",
                              study.accentColor === 'orange' && "text-orange-400 group-hover:text-orange-300",
                              study.accentColor === 'violet' && "text-violet-400 group-hover:text-violet-300",
                              study.accentColor === 'cyan' && "text-cyan-400 group-hover:text-cyan-300"
                            )}
                            style={{ fontSize: 'clamp(0.875rem, 1.75vw, 1rem)' }}
                          >
                            View Full Case Study
                          </span>
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{study.timeline}</span>
                        </div>
                        <motion.div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                            study.accentColor === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500 group-hover:text-white",
                            study.accentColor === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white",
                            study.accentColor === 'green' && "bg-green-500/10 group-hover:bg-green-500 group-hover:text-white",
                            study.accentColor === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500 group-hover:text-white",
                            study.accentColor === 'violet' && "bg-violet-500/10 group-hover:bg-violet-500 group-hover:text-white",
                            study.accentColor === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-white"
                          )}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center"
          style={{ marginTop: 'clamp(2rem, 4vh, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/case-studies">
            <Button 
              variant="outline" 
              size="lg"
              className="enterprise-button border-2 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-400/10 text-blue-300 hover:text-blue-200 font-semibold group transition-all duration-500"
              style={{
                padding: 'clamp(1rem, 2vh, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                <span>View All Case Studies</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies