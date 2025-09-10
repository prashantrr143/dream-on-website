"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Handshake,
  Award,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
  Building,
  Shield,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const Partners = () => {
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
    }
  }

  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Technology Partners",
      description: "Strategic alliances with leading technology providers",
      partners: ["AWS", "Microsoft Azure", "Google Cloud", "Salesforce"],
      color: "blue"
    },
    {
      icon: Building,
      title: "Channel Partners",
      description: "Trusted resellers and implementation partners worldwide",
      partners: ["Global Integrators", "Regional Partners", "Local Consultants"],
      color: "green"
    },
    {
      icon: Award,
      title: "Certification Partners",
      description: "Certified expertise across industry standards",
      partners: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA"],
      color: "purple"
    },
    {
      icon: Target,
      title: "Solution Partners",
      description: "Specialized partners for industry-specific solutions",
      partners: ["FinTech", "HealthTech", "EdTech", "E-commerce"],
      color: "orange"
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: "Accelerated Growth", description: "Expand market reach together" },
    { icon: Shield, title: "Enhanced Security", description: "Combined security expertise" },
    { icon: Zap, title: "Faster Innovation", description: "Joint technology development" },
    { icon: Globe, title: "Global Reach", description: "Worldwide partner network" }
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
                <Handshake className="w-4 h-4 mr-2" />
                Strategic Partnerships
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Building Success Through"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Strategic Partnerships"
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
              We collaborate with industry leaders to deliver comprehensive solutions that drive innovation, 
              accelerate growth, and create exceptional value for our clients worldwide.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/about-us">
                <Button variant="outline" size="lg" className="font-semibold">
                  Learn About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
                Partnership <span className="gradient-text">Types</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Diverse partnership opportunities designed to create mutual value and success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => {
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
                      
                      <div className="space-y-2">
                        {type.partners.map((partner, partnerIndex) => (
                          <div key={partnerIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {partner}
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

      {/* Partnership Benefits */}
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
                Partnership <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Why leading organizations choose to partner with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
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
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
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
              Ready to Partner with Us?
            </h2>
            <p className="text-lead mb-8">
              Join our global network of partners and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Start Partnership
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

export default Partners