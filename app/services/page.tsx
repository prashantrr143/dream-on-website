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
  Award,
  Sparkles,
  Globe,
  Building,
  Headphones,
  FileText,
  Search,
  Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const Services = () => {
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
    visible: { opacity: 1, y: 0 }
  }

  const serviceCategories = [
    {
      category: "Infrastructure & Platform Services",
      description: "Foundational technology services that power your digital transformation",
      services: [
        {
          title: "Cloud Infrastructure",
          description: "Multi-cloud strategy, migration, and optimization services",
          icon: Cloud,
          features: ["AWS, Azure, GCP expertise", "Migration & modernization", "Cost optimization", "Security & compliance"],
          pricing: "Starting from $5,000/month",
          href: "/solutions/cloud"
        },
        {
          title: "DevOps & Automation",
          description: "CI/CD pipelines, infrastructure as code, and deployment automation",
          icon: Workflow,
          features: ["CI/CD pipeline setup", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting"],
          pricing: "Starting from $8,000/month",
          href: "/solutions/devops"
        },
        {
          title: "Database Management",
          description: "High-performance database solutions and optimization",
          icon: Database,
          features: ["Database design & optimization", "Migration services", "Performance tuning", "Backup & recovery"],
          pricing: "Starting from $3,000/month",
          href: "/contact-us"
        },
        {
          title: "Infrastructure Monitoring",
          description: "Comprehensive monitoring and observability solutions",
          icon: Monitor,
          features: ["Real-time monitoring", "Performance analytics", "Alerting & notifications", "Capacity planning"],
          pricing: "Starting from $2,500/month",
          href: "/contact-us"
        }
      ]
    },
    {
      category: "AI & Data Services",
      description: "Intelligent solutions that drive innovation and data-driven decisions",
      services: [
        {
          title: "AI & Machine Learning",
          description: "Custom AI models, automation, and intelligent solutions",
          icon: Bot,
          features: ["Custom AI model development", "Process automation", "Predictive analytics", "MLOps platforms"],
          pricing: "Starting from $15,000/project",
          href: "/solutions/ai-ml"
        },
        {
          title: "Data Analytics & BI",
          description: "Transform data into actionable insights and business intelligence",
          icon: BarChart3,
          features: ["Real-time dashboards", "Predictive modeling", "Data warehousing", "Self-service analytics"],
          pricing: "Starting from $10,000/month",
          href: "/solutions/data"
        },
        {
          title: "System Integration",
          description: "Connect disparate systems and create unified data flows",
          icon: Cpu,
          features: ["API development & management", "Enterprise service bus", "Data synchronization", "Legacy system integration"],
          pricing: "Starting from $12,000/project",
          href: "/contact-us"
        }
      ]
    },
    {
      category: "Security & Compliance Services",
      description: "Comprehensive cybersecurity and regulatory compliance solutions",
      services: [
        {
          title: "Enterprise Security",
          description: "Advanced cybersecurity solutions and threat protection",
          icon: Shield,
          features: ["Zero-trust architecture", "Threat detection & response", "Security audits", "Compliance automation"],
          pricing: "Starting from $7,500/month",
          href: "/solutions/security"
        },
        {
          title: "Compliance & Governance",
          description: "Regulatory compliance and data governance frameworks",
          icon: Lock,
          features: ["SOC 2, HIPAA, PCI DSS", "Risk assessment", "Policy development", "Audit preparation"],
          pricing: "Starting from $5,000/month",
          href: "/contact-us"
        }
      ]
    },
    {
      category: "Development & Design Services",
      description: "Custom software development and user experience design",
      services: [
        {
          title: "Web Development",
          description: "Modern web applications and progressive web apps",
          icon: Code,
          features: ["React, Angular, Vue.js", "Progressive web apps", "E-commerce platforms", "API development"],
          pricing: "Starting from $20,000/project",
          href: "/contact-us"
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications",
          icon: Smartphone,
          features: ["iOS & Android native", "React Native & Flutter", "Backend integration", "App store deployment"],
          pricing: "Starting from $25,000/project",
          href: "/contact-us"
        },
        {
          title: "UI/UX Design",
          description: "User-centered design and experience optimization",
          icon: Palette,
          features: ["User research & testing", "Wireframing & prototyping", "Design systems", "Accessibility compliance"],
          pricing: "Starting from $8,000/project",
          href: "/contact-us"
        },
        {
          title: "Performance Optimization",
          description: "Application and system performance tuning",
          icon: Zap,
          features: ["Performance audits", "Code optimization", "Database tuning", "CDN implementation"],
          pricing: "Starting from $5,000/project",
          href: "/contact-us"
        }
      ]
    },
    {
      category: "Consulting & Strategy Services",
      description: "Strategic guidance and transformation consulting",
      services: [
        {
          title: "Digital Transformation",
          description: "Strategic consulting for comprehensive digital transformation",
          icon: Settings,
          features: ["Digital strategy development", "Process optimization", "Change management", "Technology roadmaps"],
          pricing: "Starting from $25,000/engagement",
          href: "/solutions/consulting"
        },
        {
          title: "Technology Assessment",
          description: "Comprehensive technology audits and recommendations",
          icon: Search,
          features: ["Current state analysis", "Gap assessment", "Technology recommendations", "ROI analysis"],
          pricing: "Starting from $10,000/assessment",
          href: "/contact-us"
        }
      ]
    }
  ]

  const supportServices = [
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support and monitoring",
      icon: Headphones,
      features: ["24/7 monitoring", "Incident response", "Escalation management", "Performance reporting"]
    },
    {
      title: "Training & Enablement",
      description: "Comprehensive training programs for your teams",
      icon: Users,
      features: ["Custom training programs", "Certification preparation", "Hands-on workshops", "Knowledge transfer"]
    },
    {
      title: "Documentation & Knowledge",
      description: "Complete documentation and knowledge management",
      icon: FileText,
      features: ["Technical documentation", "User guides", "Best practices", "Knowledge base creation"]
    },
    {
      title: "Strategic Planning",
      description: "Long-term technology planning and roadmap development",
      icon: Calendar,
      features: ["Technology roadmaps", "Budget planning", "Risk assessment", "Innovation strategy"]
    }
  ]

  const serviceStats = [
    { icon: Building, metric: "500+", label: "Enterprise Clients", description: "Successful implementations" },
    { icon: Globe, metric: "40+", label: "Countries", description: "Global presence" },
    { icon: Award, metric: "99.9%", label: "Uptime SLA", description: "Service reliability" },
    { icon: Users, metric: "1000+", label: "Certified Experts", description: "Technical specialists" }
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
                Complete Service Portfolio
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Comprehensive Technology"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Services Portfolio"
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
              From infrastructure and cloud services to AI solutions and strategic consulting, 
              we provide end-to-end technology services that drive innovation and business growth.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={itemVariants}
            >
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Discuss Your Needs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="font-semibold">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Service Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {serviceStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-2" />
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

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={cn("py-16 lg:py-24", categoryIndex % 2 === 1 && "bg-muted/20")}>
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
                  {category.category.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{category.category.split(' ').slice(-1)}</span>
                </h2>
                <p className="text-lead max-w-3xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => {
                  const IconComponent = service.icon
                  return (
                    <motion.div
                      key={serviceIndex}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="enterprise-card enterprise-card-hover p-8 h-full group">
                        <div className="flex items-start gap-6">
                          <motion.div 
                            className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            <IconComponent className="w-8 h-8 text-accent" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                {service.title}
                              </h3>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-accent">{service.pricing}</div>
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground mb-6">
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
                            
                            <Link href={service.href}>
                              <div className="flex items-center text-accent font-medium group-hover:text-accent-foreground transition-colors">
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </Link>
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
      ))}

      {/* Support Services */}
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
                Support & <span className="gradient-text">Enablement</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Comprehensive support services to ensure your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="enterprise-card p-6 h-full text-center group">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComponent className="w-6 h-6 text-accent" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lead mb-8">
              Let's discuss your technology needs and create a customized service plan 
              that delivers measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Client Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default Services