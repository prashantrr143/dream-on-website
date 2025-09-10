"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Cloud,
  Bot,
  Shield,
  Workflow,
  BarChart3,
  Database,
  Smartphone,
  Code,
  Monitor,
  Zap,
  Lock,
  Palette,
  Cpu,
  Settings,
  CheckCircle,
  Users,
  DollarSign,
  Sparkles,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const coreServices = [
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions that transform your infrastructure for the modern era",
      icon: Cloud,
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      features: ["Multi-cloud strategy", "Migration & modernization", "Cost optimization", "24/7 monitoring"],
      href: "/solutions/cloud",
      stats: { metric: "99.99%", label: "Uptime SLA" }
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent automation and AI solutions that drive innovation and competitive advantage",
      icon: Bot,
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      features: ["Custom AI models", "Process automation", "Predictive analytics", "MLOps platforms"],
      href: "/solutions/ai-ml",
      stats: { metric: "300%", label: "ROI Increase" }
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      description: "Streamlined development pipelines and automated infrastructure for rapid deployment",
      icon: Workflow,
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting"],
      href: "/solutions/devops",
      stats: { metric: "10x", label: "Faster Deployments" }
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity solutions protecting your digital assets and compliance",
      icon: Shield,
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      features: ["Zero-trust architecture", "Threat detection", "Compliance automation", "Security audits"],
      href: "/solutions/security",
      stats: { metric: "100%", label: "Compliance Rate" }
    },
    {
      id: "data",
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics and visualization",
      icon: BarChart3,
      gradient: "from-violet-500/20 to-indigo-500/20",
      accentColor: "violet",
      features: ["Real-time dashboards", "Predictive modeling", "Data warehousing", "Self-service analytics"],
      href: "/solutions/data",
      stats: { metric: "85%", label: "Better Decisions" }
    },
    {
      id: "digital-consulting",
      title: "Digital Transformation",
      description: "Strategic consulting and implementation for comprehensive digital transformation",
      icon: Settings,
      gradient: "from-cyan-500/20 to-teal-500/20",
      accentColor: "cyan",
      features: ["Digital strategy", "Process optimization", "Change management", "Technology roadmaps"],
      href: "/solutions/consulting",
      stats: { metric: "60%", label: "Efficiency Gain" }
    }
  ]

  const additionalServices = [
    { title: "Database Management", icon: Database, description: "High-performance database solutions and optimization" },
    { title: "Mobile App Development", icon: Smartphone, description: "Native and cross-platform mobile applications" },
    { title: "Web Development", icon: Code, description: "Modern web applications and progressive web apps" },
    { title: "Infrastructure Monitoring", icon: Monitor, description: "Comprehensive monitoring and observability" },
    { title: "Performance Optimization", icon: Zap, description: "Application and system performance tuning" },
    { title: "Compliance & Governance", icon: Lock, description: "Regulatory compliance and data governance" },
    { title: "UI/UX Design", icon: Palette, description: "User-centered design and experience optimization" },
    { title: "System Integration", icon: Cpu, description: "Enterprise system integration and APIs" }
  ]

  const industries = [
    { name: "Financial Services", icon: DollarSign, count: "50+" },
    { name: "Healthcare", icon: Users, count: "30+" },
    { name: "Manufacturing", icon: Settings, count: "40+" },
    { name: "Technology", icon: Code, count: "60+" },
    { name: "E-commerce", icon: Globe, count: "35+" },
    { name: "Government", icon: Shield, count: "25+" }
  ]

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge 
                variant="secondary" 
                className="bg-blue-50/10 text-blue-400 hover:bg-blue-50/20 px-6 py-3 text-sm font-semibold border border-blue-500/20 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Transform Your Business with"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Enterprise Technology Solutions"
                animation="splitWords"
                className="gradient-text inline-block"
                stagger={0.1}
                delay={0.5}
              />
            </motion.h1>

            <motion.p 
              className="text-lead max-w-3xl mx-auto mb-12"
              variants={itemVariants}
            >
              From cloud infrastructure to AI automation, we deliver comprehensive technology solutions 
              that drive innovation, reduce costs, and accelerate your digital transformation journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Success Stories
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="heading-section mb-6">
                Core <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Comprehensive technology solutions designed to address your most critical business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <Link href={service.href}>
                      <Card className="enterprise-card enterprise-card-hover p-8 h-full group cursor-pointer">
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-xl", service.gradient)} />
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <motion.div 
                              className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center",
                                service.accentColor === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                                service.accentColor === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                                service.accentColor === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20",
                                service.accentColor === 'green' && "bg-green-500/10 group-hover:bg-green-500/20",
                                service.accentColor === 'violet' && "bg-violet-500/10 group-hover:bg-violet-500/20",
                                service.accentColor === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                              )}
                              whileHover={{ rotate: 5, scale: 1.1 }}
                            >
                              <IconComponent className={cn(
                                "w-8 h-8",
                                service.accentColor === 'blue' && "text-blue-500",
                                service.accentColor === 'purple' && "text-purple-500",
                                service.accentColor === 'orange' && "text-orange-500",
                                service.accentColor === 'green' && "text-green-500",
                                service.accentColor === 'violet' && "text-violet-500",
                                service.accentColor === 'cyan' && "text-cyan-500"
                              )} />
                            </motion.div>
                            
                            <div className="text-right">
                              <div className={cn(
                                "text-2xl font-bold",
                                service.accentColor === 'blue' && "text-blue-500",
                                service.accentColor === 'purple' && "text-purple-500",
                                service.accentColor === 'orange' && "text-orange-500",
                                service.accentColor === 'green' && "text-green-500",
                                service.accentColor === 'violet' && "text-violet-500",
                                service.accentColor === 'cyan' && "text-cyan-500"
                              )}>
                                {service.stats.metric}
                              </div>
                              <div className="text-sm text-muted-foreground">{service.stats.label}</div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 line-clamp-2">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex items-center text-accent font-medium group-hover:text-accent-foreground transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="heading-section mb-6">
                Additional <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Specialized services to complement your technology transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="enterprise-card p-6 h-full text-center group cursor-pointer">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComponent className="w-6 h-6 text-accent" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="heading-section mb-6">
                Industries <span className="gradient-text">We Serve</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Trusted by leading organizations across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="enterprise-card p-6 text-center group cursor-pointer">
                      <IconComponent className="w-8 h-8 text-accent mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-accent transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {industry.count} clients
                      </p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lead mb-8">
              Let's discuss how our enterprise solutions can accelerate your digital transformation 
              and drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  Explore Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default Solutions