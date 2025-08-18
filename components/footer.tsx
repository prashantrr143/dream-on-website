"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, Globe, ArrowRight, Users, Award, Sparkles, Shield, Zap, Target, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/animated-text'

const Footer = () => {
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
        duration: 0.8, 
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const solutions = [
    { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', icon: '☁️' },
    { name: 'DevOps & Automation', href: '/solutions/devops-automation', icon: '⚡' }, 
    { name: 'Data Analytics', href: '/solutions/data-analytics', icon: '📊' },
    { name: 'Enterprise Security', href: '/solutions/security', icon: '🔒' },
    { name: 'AI & Machine Learning', href: '/solutions/ai-ml', icon: '🤖' }
  ]

  const company = [
    { name: 'About Us', href: '/about-us', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Partners', href: '/partners', icon: Globe },
    { name: 'Careers', href: '/careers', icon: Target },
    { name: 'Contact', href: '/contact-us', icon: Phone }
  ]

  const resources = [
    { name: 'Documentation', href: '/docs', icon: '📚' },
    { name: 'API Reference', href: '/api', icon: '🔧' },
    { name: 'Best Practices', href: '/best-practices', icon: '✨' },
    { name: 'White Papers', href: '/resources', icon: '📄' },
    { name: 'Blog', href: '/blog', icon: '📝' }
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '🐙' }
  ]


  const trustBadges = [
    { text: "SOC 2 Type II", icon: Shield },
    { text: "ISO 27001", icon: Award },
    { text: "99.9% SLA", icon: Zap },
    { text: "Enterprise Ready", icon: Star }
  ]

  return (
    <footer className="relative bg-background border-t border-border/30 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-blue-500/8 to-violet-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-5 grid-pattern" />
      </div>


      {/* Main Footer Content */}
      <div className="relative z-10 section-container">
        <motion.div 
          className="py-16 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info - 4 columns */}
            <motion.div className="lg:col-span-4" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent animate-text-shimmer">
                    Nexus
                  </span>
                  <motion.span 
                    className="text-blue-400 ml-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    .
                  </motion.span>
                </h3>
              </motion.div>
              
              <AnimatedText
                text="Enterprise technology solutions that drive digital transformation and deliver measurable business results for Fortune 500 companies worldwide."
                animation="splitWords"
                className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg"
                stagger={0.03}
                delay={0.5}
              />
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="mailto:hello@nexustech.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-semibold font-heading">Email</div>
                    <div className="text-sm">hello@nexustech.com</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold font-heading">Phone</div>
                    <div className="text-sm">+1 (555) 123-4567</div>
                  </div>
                </motion.a>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold font-heading">Global</div>
                    <div className="text-sm">40+ Countries Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div>
                <div className="text-sm font-semibold font-heading text-foreground mb-4">Security & Compliance</div>
                <div className="flex flex-wrap gap-3">
                  {trustBadges.map((badge, index) => {
                    const IconComponent = badge.icon
                    return (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border/30 hover:border-blue-400/30 transition-colors group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <IconComponent className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold font-heading text-muted-foreground group-hover:text-foreground transition-colors">
                          {badge.text}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Solutions - 2 columns */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Solutions</h4>
              <ul className="space-y-4">
                {solutions.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a 
                      href={item.href} 
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium font-heading">{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company - 2 columns */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Company</h4>
              <ul className="space-y-4">
                {company.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.a 
                        href={item.href} 
                        className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium font-heading">{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </motion.a>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Resources - 2 columns */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Resources</h4>
              <ul className="space-y-4">
                {resources.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a 
                      href={item.href} 
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium font-heading">{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter - 2 columns */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Stay Connected</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the latest enterprise insights, technology trends, and exclusive updates.
              </p>
              
              {/* Newsletter Form */}
              <motion.div 
                className="space-y-4 mb-8"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-heading"
                />
                <Button 
                  size="lg" 
                  className="w-full enterprise-button text-white font-semibold font-heading"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Subscribe to Updates
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              {/* Social Links */}
              <div>
                <div className="text-sm font-semibold font-heading text-foreground mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border/30 hover:border-blue-400/30 hover:bg-blue-500/10 transition-colors group text-sm font-medium font-heading"
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{social.icon}</span>
                      <span className="text-muted-foreground group-hover:text-blue-400 transition-colors">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border/30 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <motion.div 
              className="text-muted-foreground text-center lg:text-left font-heading"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              &copy; 2025 Nexus Technologies Inc. All rights reserved. | Enterprise technology solutions worldwide.
            </motion.div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              {legal.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors relative group font-medium font-heading"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer