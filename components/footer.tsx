"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, Globe, ArrowRight, Users, Award, Sparkles, Shield, Zap, Target, Star } from 'lucide-react'
import Image from 'next/image'
const Footer = () => {

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
    <footer className="relative bg-background overflow-hidden">
      {/* Premium Enterprise Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
        
        {/* Sophisticated geometric patterns */}
        <motion.div 
          className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/3 to-green-500/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/2 to-blue-500/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 adaptive-container">
        <div className="py-20 ultra-wide-spacing ultra-4k-spacing">
          {/* Main Grid - Responsive */}
          <div className="footer-grid-balanced grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 gap-12 lg:gap-16 2xl:gap-12 mb-16">
            
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Image 
                    src="/yati-sphere-logo.png"
                    alt="Yati Sphere Technologies"
                    width={200}
                    height={50}
                    className="mb-4"
                  />
                </div>
                
                <p className="text-lead text-muted-foreground mb-8 max-w-md">
                  Enterprise technology solutions that drive digital transformation and deliver measurable business results.
                </p>
                
                {/* Premium Contact Info */}
                <div className="space-y-4 mb-8">
                  <motion.a
                    href="mailto:hello@yatisphere.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-card w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">hello@yatisphere.com</div>
                      <div className="text-sm font-medium">Enterprise Inquiries</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+15551234567"
                    className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-card w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">+1 (555) 123-4567</div>
                      <div className="text-sm font-medium">24/7 Enterprise Support</div>
                    </div>
                  </motion.a>
                </div>
                
                {/* Premium Trust Badges */}
                <div>
                  <div className="text-lg font-bold text-foreground mb-4">Security & Compliance</div>
                  <div className="flex flex-wrap gap-3">
                    {trustBadges.slice(0, 2).map((badge, index) => {
                      const IconComponent = badge.icon
                      return (
                        <motion.div 
                          key={index}
                          className="glass-card flex items-center gap-2 px-3 py-2 hover:scale-105 transition-all duration-300 group"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ y: -2 }}
                        >
                          <IconComponent className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-foreground">{badge.text}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-foreground mb-6 tracking-tight">Solutions</h4>
              <ul className="space-y-3">
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
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-foreground mb-6 tracking-tight">Company</h4>
              <ul className="space-y-3">
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
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium text-sm">{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </motion.a>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Resources & Newsletter */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-foreground mb-6 tracking-tight">Stay Connected</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Get enterprise insights and technology updates.
              </p>
              
              {/* Premium Newsletter Form */}
              <motion.div 
                className="space-y-4 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="w-full px-4 py-3 text-sm glass-card focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all font-medium rounded-xl"
                />
                <button className="w-full enterprise-button py-3 text-white font-semibold text-sm flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Social Links */}
              <div>
                <div className="text-sm font-bold text-foreground mb-4">Follow Us</div>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card w-10 h-10 flex items-center justify-center rounded-xl hover:scale-110 hover:border-blue-300 transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      title={social.name}
                    >
                      <span className="text-sm">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t-2 border-slate-200/50 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <motion.div 
                className="text-muted-foreground text-center lg:text-left font-medium"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                &copy; 2025 Yati Sphere Technologies Inc. All rights reserved. | Enterprise solutions worldwide.
              </motion.div>
              
              <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                {legal.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors relative group font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -1 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer