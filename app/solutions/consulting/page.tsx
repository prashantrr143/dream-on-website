"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Settings,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Workflow,
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  Map,
  Compass,
  Globe,
  Shield,
  Code,
  ArrowLeft,
  FileText,
  Presentation,
  Building
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const DigitalConsulting = () => {
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

  const consultingServices = [
    {
      icon: Compass,
      title: "Digital Strategy & Roadmap",
      description: "Comprehensive digital transformation strategy aligned with your business objectives",
      features: [
        "Current state assessment and gap analysis",
        "Future state vision and roadmap development",
        "Technology stack evaluation and recommendations",
        "ROI modeling and business case development"
      ],
      color: "blue",
      deliverables: ["Strategic roadmap", "Technology architecture", "Implementation plan"]
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through process reengineering",
      features: [
        "Business process mapping and analysis",
        "Automation opportunity identification",
        "Workflow optimization and redesign",
        "Performance metrics and KPI development"
      ],
      color: "green",
      deliverables: ["Process maps", "Automation strategy", "Performance framework"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through digital transformation with proven change methodologies",
      features: [
        "Stakeholder analysis and engagement",
        "Communication strategy and execution",
        "Training program development",
        "Adoption tracking and optimization"
      ],
      color: "purple",
      deliverables: ["Change strategy", "Training materials", "Communication plan"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics Strategy",
      description: "Unlock the power of your data with comprehensive analytics and insights strategy",
      features: [
        "Data maturity assessment",
        "Analytics use case identification",
        "Data governance framework",
        "Self-service analytics enablement"
      ],
      color: "orange",
      deliverables: ["Data strategy", "Analytics roadmap", "Governance framework"]
    },
    {
      icon: Shield,
      title: "Technology Risk Assessment",
      description: "Identify and mitigate technology risks across your digital transformation journey",
      features: [
        "Security and compliance gap analysis",
        "Risk identification and prioritization",
        "Mitigation strategy development",
        "Governance and oversight framework"
      ],
      color: "red",
      deliverables: ["Risk assessment", "Mitigation plan", "Governance model"]
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Maximize ROI and operational efficiency through continuous improvement methodologies",
      features: [
        "Performance baseline establishment",
        "Optimization opportunity analysis",
        "Continuous improvement framework",
        "Success metrics and monitoring"
      ],
      color: "cyan",
      deliverables: ["Performance baseline", "Optimization plan", "Monitoring dashboard"]
    }
  ]

  const consultingStats = [
    { icon: TrendingUp, metric: "85%", label: "Success Rate", description: "Transformation projects delivered successfully" },
    { icon: Clock, metric: "40%", label: "Faster Delivery", description: "Average project acceleration" },
    { icon: DollarSign, metric: "$2.5M", label: "Average ROI", description: "Typical cost savings achieved" },
    { icon: Users, metric: "500+", label: "Consultants", description: "Expert consultants worldwide" }
  ]

  const transformationPhases = [
    {
      phase: "Assess",
      duration: "2-4 weeks",
      icon: FileText,
      activities: [
        "Current state analysis",
        "Technology audit",
        "Process mapping",
        "Stakeholder interviews"
      ],
      outcomes: "Comprehensive assessment report"
    },
    {
      phase: "Strategize",
      duration: "3-6 weeks",
      icon: Map,
      activities: [
        "Vision and strategy development",
        "Roadmap creation",
        "Business case development",
        "Risk assessment"
      ],
      outcomes: "Digital transformation strategy"
    },
    {
      phase: "Plan",
      duration: "4-8 weeks",
      icon: Presentation,
      activities: [
        "Detailed implementation planning",
        "Resource allocation",
        "Change management strategy",
        "Success metrics definition"
      ],
      outcomes: "Implementation blueprint"
    },
    {
      phase: "Execute",
      duration: "6-18 months",
      icon: Rocket,
      activities: [
        "Phased implementation",
        "Change management execution",
        "Training and enablement",
        "Continuous monitoring"
      ],
      outcomes: "Successful transformation"
    },
    {
      phase: "Optimize",
      duration: "Ongoing",
      icon: TrendingUp,
      activities: [
        "Performance monitoring",
        "Continuous improvement",
        "Innovation identification",
        "Strategic refinement"
      ],
      outcomes: "Sustained value creation"
    }
  ]

  const industryExpertise = [
    { name: "Financial Services", projects: "150+", icon: Building },
    { name: "Healthcare", projects: "100+", icon: Users },
    { name: "Manufacturing", projects: "120+", icon: Settings },
    { name: "Technology", projects: "200+", icon: Code },
    { name: "E-commerce", projects: "80+", icon: Globe },
    { name: "Government", projects: "60+", icon: Shield }
  ]

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Solutions
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Badge 
                variant="secondary" 
                className="bg-cyan-50/10 text-cyan-400 hover:bg-cyan-50/20 px-6 py-3 text-sm font-semibold border border-cyan-500/20 rounded-full mb-8"
              >
                <Settings className="w-4 h-4 mr-2" />
                Digital Consulting
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Strategic Digital"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Transformation Consulting"
                animation="splitWords"
                className="gradient-text inline-block"
                stagger={0.1}
                delay={0.5}
              />
            </motion.h1>

            <motion.p 
              className="text-lead mb-12"
              variants={itemVariants}
            >
              Navigate your digital transformation journey with expert guidance. We help organizations develop 
              comprehensive strategies, optimize processes, and achieve sustainable digital success with proven methodologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
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
                  View Transformation Stories
                </Button>
              </Link>
            </motion.div>

            {/* Consulting Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {consultingStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.metric}</div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
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
                Consulting <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Comprehensive consulting services to guide your digital transformation journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="enterprise-card enterprise-card-hover p-8 h-full group">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0",
                            service.color === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                            service.color === 'green' && "bg-green-500/10 group-hover:bg-green-500/20",
                            service.color === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                            service.color === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20",
                            service.color === 'red' && "bg-red-500/10 group-hover:bg-red-500/20",
                            service.color === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                          )}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <IconComponent className={cn(
                            "w-8 h-8",
                            service.color === 'blue' && "text-blue-500",
                            service.color === 'green' && "text-green-500",
                            service.color === 'purple' && "text-purple-500",
                            service.color === 'orange' && "text-orange-500",
                            service.color === 'red' && "text-red-500",
                            service.color === 'cyan' && "text-cyan-500"
                          )} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6">
                            {service.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((deliverable, delIndex) => (
                                <Badge key={delIndex} variant="secondary" className="text-xs">
                                  {deliverable}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Process */}
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
                Transformation <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Our proven 5-phase methodology ensures successful digital transformation outcomes
              </p>
            </motion.div>

            <div className="space-y-8">
              {transformationPhases.map((phase, index) => {
                const IconComponent = phase.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Card className="enterprise-card p-8 group">
                      <div className="flex items-start gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                            {index + 1}
                          </div>
                          <IconComponent className="w-8 h-8 text-cyan-500 mx-auto" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {phase.phase}
                            </h3>
                            <Badge variant="outline" className="font-medium">
                              {phase.duration}
                            </Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                              <ul className="space-y-2">
                                {phase.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Expected Outcomes:</h4>
                              <p className="text-muted-foreground">{phase.outcomes}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise */}
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
                Industry <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Deep industry knowledge across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industryExpertise.map((industry, index) => {
                const IconComponent = industry.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="enterprise-card p-6 text-center group">
                      <IconComponent className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-accent transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {industry.projects} projects
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
              Let our expert consultants guide your digital transformation journey with proven strategies 
              and methodologies that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Schedule Strategy Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies/enterprise-ai-knowledge-assistant">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Transformation Case Study
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default DigitalConsulting