"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Award, Building2, Bot, BarChart3, Zap, Calendar, TrendingUp, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'

const CaseStudiesPage = () => {
  const allCaseStudies = [
    {
      id: "enterprise-ai-knowledge-assistant",
      title: "Enterprise AI Knowledge Assistant",
      company: "Fortune 100 Technology Corporation",
      category: "Generative AI & Knowledge Management",
      description: "AI-powered knowledge assistant transforming how 200,000+ employees access and utilize corporate knowledge across 50+ business units.",
      results: ["200K+ Users", "75% Time Savings", "$120M Annual Value"],
      industry: "Technology",
      timeline: "14 months",
      technologies: ["GPT-4", "LangChain", "Pinecone", "Azure OpenAI"],
      gradient: "from-violet-500/20 to-indigo-500/20",
      accentColor: "violet",
      icon: Bot
    },
    {
      id: "ai-powered-customer-service",
      title: "AI-Powered Intelligent Customer Service",
      company: "Global Telecommunications Provider",
      category: "Generative AI & Customer Experience",
      description: "Revolutionary AI customer service platform serving 80M+ customers with personalized, context-aware support across multiple channels.",
      results: ["80M+ Customers", "92% Satisfaction", "$320M Savings"],
      industry: "Telecommunications",
      timeline: "16 months",
      technologies: ["GPT-4 Turbo", "Azure Cognitive Services", "Rasa", "Twilio"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      accentColor: "cyan",
      icon: Users
    },
    {
      id: "global-bank-transformation",
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      category: "Cloud Architecture & Security",
      description: "Complete migration of legacy infrastructure to multi-cloud environment with zero downtime and enhanced security protocols.",
      results: ["99.99% Uptime", "60% Cost Reduction", "3x Performance"],
      industry: "Financial Services",
      timeline: "18 months",
      technologies: ["AWS", "Kubernetes", "Terraform", "Zero Trust"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      icon: Building2
    },
    {
      id: "ai-automation-manufacturing",
      title: "AI-Powered Manufacturing Optimization",
      company: "Leading Automotive Manufacturer",
      category: "AI & Automation", 
      description: "Implementation of computer vision AI for real-time quality control and defect detection in production lines.",
      results: ["95% Defect Reduction", "40% Faster Production", "$50M Annual Savings"],
      industry: "Manufacturing",
      timeline: "12 months",
      technologies: ["TensorFlow", "OpenCV", "MLOps", "Edge Computing"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      icon: Bot
    },
    {
      id: "healthcare-data-platform",
      title: "Healthcare Data Intelligence Platform",
      company: "National Healthcare Network",
      category: "Data Intelligence & Analytics",
      description: "Unified real-time analytics platform processing patient data across 200+ hospitals with ML-powered insights.",
      results: ["Real-time Insights", "30% Better Outcomes", "HIPAA Compliant"],
      industry: "Healthcare",
      timeline: "24 months",
      technologies: ["Snowflake", "Apache Kafka", "Python", "FHIR"],
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      icon: BarChart3
    },
    {
      id: "devops-transformation",
      title: "Enterprise DevOps Transformation",
      company: "Global E-commerce Platform",
      category: "DevOps Engineering",
      description: "Complete CI/CD pipeline automation enabling daily deployments with comprehensive monitoring and rollback capabilities.",
      results: ["Daily Deployments", "90% Faster Releases", "Zero Rollbacks"],
      industry: "E-commerce",
      timeline: "9 months", 
      technologies: ["Jenkins", "Docker", "Ansible", "Prometheus"],
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange",
      icon: Zap
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <SharedLayout>
      {/* Header */}
      <section className="relative overflow-hidden" style={{ padding: 'clamp(6rem, 12vh, 8rem) 0 clamp(4rem, 8vh, 6rem) 0' }}>
        <div className="section-container relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <Badge 
              variant="secondary" 
              className="glass-card rounded-full mb-6"
              style={{
                padding: 'clamp(0.5rem, 1vh, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
              }}
            >
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            
            <h1 
              className="leading-tight text-balance font-heading mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              <AnimatedText
                text="Case Studies & "
                animation="splitWords"
                className="inline-block"
                stagger={0.15}
              />
              <AnimatedText
                text="Success Stories"
                animation="splitChars"
                className="gradient-text animate-text-shimmer inline-block font-display"
                delay={0.5}
                stagger={0.1}
              />
            </h1>
            
            <p 
              className="text-muted-foreground leading-relaxed max-w-2xl"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)' }}
            >
              Explore detailed case studies showcasing how we've transformed businesses across industries with measurable results and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative" style={{ padding: '0 0 clamp(4rem, 8vh, 6rem) 0' }}>
        <div className="section-container">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allCaseStudies.map((study) => {
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
                    <div className="glass-card h-full relative overflow-hidden rounded-xl cursor-pointer p-8">
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
                      <div className="relative space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className={cn(
                                "rounded-xl p-3 group-hover:scale-110 transition-all duration-300",
                                study.accentColor === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                                study.accentColor === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                                study.accentColor === 'green' && "bg-green-500/10 group-hover:bg-green-500/20",
                                study.accentColor === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20",
                                study.accentColor === 'violet' && "bg-violet-500/10 group-hover:bg-violet-500/20",
                                study.accentColor === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                              )}
                              whileHover={{ rotate: 5 }}
                            >
                              <IconComponent 
                                className={cn(
                                  "w-6 h-6",
                                  study.accentColor === 'blue' && "text-blue-500",
                                  study.accentColor === 'purple' && "text-purple-500",
                                  study.accentColor === 'green' && "text-green-500",
                                  study.accentColor === 'orange' && "text-orange-500",
                                  study.accentColor === 'violet' && "text-violet-500",
                                  study.accentColor === 'cyan' && "text-cyan-500"
                                )}
                              />
                            </motion.div>
                            <div>
                              <Badge variant="secondary" className="text-xs bg-muted/50 border-0">
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
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                            {study.title}
                          </h3>
                          <p className="text-muted-foreground font-medium text-lg">
                            {study.company}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {study.category}
                          </p>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {study.description}
                        </p>
                        
                        {/* Key Results */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                              <div 
                                className={cn(
                                  "font-bold text-sm",
                                  idx === 0 && study.accentColor === 'blue' && "text-blue-400",
                                  idx === 0 && study.accentColor === 'purple' && "text-purple-400",
                                  idx === 0 && study.accentColor === 'green' && "text-green-400",
                                  idx === 0 && study.accentColor === 'orange' && "text-orange-400",
                                  idx === 0 && study.accentColor === 'violet' && "text-violet-400",
                                  idx === 0 && study.accentColor === 'cyan' && "text-cyan-400",
                                  idx !== 0 && "text-foreground"
                                )}
                              >
                                {result}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {study.timeline}
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {study.technologies.length} technologies
                            </div>
                          </div>
                          
                          <motion.div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
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
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
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
        </div>
      </section>
    </SharedLayout>
  )
}

export default CaseStudiesPage