"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  FileText,
  Download,
  BookOpen,
  Video,
  Newspaper,
  Calendar,
  Globe,
  Users,
  Trophy,
  Lightbulb,
  Target,
  TrendingUp,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const Resources = () => {
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
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const resourceTypes = [
    {
      icon: FileText,
      title: "Whitepapers & Reports",
      description: "In-depth research and industry insights",
      items: [
        "Digital Transformation Guide 2024",
        "Cloud Security Best Practices",
        "AI Implementation Framework",
        "DevOps Maturity Assessment"
      ],
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      items: [
        "Enterprise AI Transformation",
        "Global Banking Modernization",
        "Healthcare Data Analytics",
        "E-commerce Platform Migration"
      ],
      color: "green"
    },
    {
      icon: Video,
      title: "Webinars & Videos",
      description: "Expert-led sessions and technical demos",
      items: [
        "Future of Cloud Computing",
        "Zero Trust Security Model",
        "Machine Learning Best Practices",
        "Modern DevOps Workflows"
      ],
      color: "purple"
    },
    {
      icon: Newspaper,
      title: "Blog & Articles",
      description: "Latest insights and thought leadership",
      items: [
        "Technology Trends 2024",
        "Security Threat Landscape",
        "Cloud Cost Optimization",
        "Digital Innovation Strategies"
      ],
      color: "orange"
    }
  ]

  const upcomingEvents = [
    {
      title: "Digital Transformation Summit",
      date: "March 15, 2024",
      type: "Virtual Conference",
      description: "Join industry leaders discussing the future of digital transformation"
    },
    {
      title: "Cloud Security Workshop",
      date: "March 28, 2024",
      type: "Hands-on Workshop",
      description: "Deep dive into modern cloud security practices and tools"
    },
    {
      title: "AI Innovation Showcase",
      date: "April 10, 2024",
      type: "Product Demo",
      description: "See our latest AI solutions in action with live demonstrations"
    }
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
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Hub
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Resources & Insights for"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Technology Leaders"
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
              Access our comprehensive library of resources including whitepapers, case studies, 
              webinars, and expert insights to accelerate your digital transformation journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Get Expert Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
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
                Resource <span className="gradient-text">Categories</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Explore our comprehensive collection of resources designed to help you succeed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="enterprise-card enterprise-card-hover p-8 h-full group">
                      <motion.div 
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                          type.color === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                          type.color === 'green' && "bg-green-500/10 group-hover:bg-green-500/20",
                          type.color === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                          type.color === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20"
                        )}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <IconComponent className={cn(
                          "w-8 h-8",
                          type.color === 'blue' && "text-blue-500",
                          type.color === 'green' && "text-green-500",
                          type.color === 'purple' && "text-purple-500",
                          type.color === 'orange' && "text-orange-500"
                        )} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {type.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {type.description}
                      </p>
                      
                      <div className="space-y-3">
                        {type.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/item">
                            <Download className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="group-hover/item:text-accent transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Join our upcoming events and connect with industry experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <Card className="enterprise-card p-6 h-full group">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-accent">{event.date}</span>
                    </div>
                    <Badge variant="secondary" className="mb-4">
                      {event.type}
                    </Badge>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Register Now
                    </Button>
                  </Card>
                </motion.div>
              ))}
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
              Need Custom Resources?
            </h2>
            <p className="text-lead mb-8">
              Our experts can create customized resources and insights tailored to your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Contact Our Experts
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="font-semibold">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default Resources