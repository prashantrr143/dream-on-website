"use client"

import { Mail, Phone, Globe, ArrowRight, Users, Award, Sparkles, Shield, Zap, Target, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FooterStatic = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-blue-500/8 to-violet-500/8 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 opacity-5 grid-pattern" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 section-container">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info - 4 columns */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
                  <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                    Yati Sphere
                  </span>
                  <span className="text-blue-400 ml-1">.</span>
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
                Enterprise technology solutions that drive digital transformation and deliver measurable business results for Fortune 500 companies worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@yatisphere.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-semibold font-heading">Email</div>
                    <div className="text-sm">hello@yatisphere.com</div>
                  </div>
                </a>
                
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-green-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold font-heading">Phone</div>
                    <div className="text-sm">+1 (555) 123-4567</div>
                  </div>
                </a>
                
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
                      <div 
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border/30 hover:border-blue-400/30 transition-colors group"
                      >
                        <IconComponent className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold font-heading text-muted-foreground group-hover:text-foreground transition-colors">
                          {badge.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Solutions - 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Solutions</h4>
              <ul className="space-y-4">
                {solutions.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium font-heading">{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company - 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Company</h4>
              <ul className="space-y-4">
                {company.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium font-heading">{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Resources - 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Resources</h4>
              <ul className="space-y-4">
                {resources.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="flex items-center gap-3 text-muted-foreground hover:text-blue-400 transition-colors group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium font-heading">{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter - 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-foreground mb-6 font-heading">Stay Connected</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the latest enterprise insights, technology trends, and exclusive updates.
              </p>
              
              {/* Newsletter Form */}
              <div className="space-y-4 mb-8">
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
              </div>

              {/* Social Links */}
              <div>
                <div className="text-sm font-semibold font-heading text-foreground mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg border border-border/30 hover:border-blue-400/30 hover:bg-blue-500/10 transition-colors group text-sm font-medium font-heading"
                    >
                      <span>{social.icon}</span>
                      <span className="text-muted-foreground group-hover:text-blue-400 transition-colors">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground text-center lg:text-left font-heading">
              &copy; 2025 Yati Sphere Technologies Inc. All rights reserved. | Enterprise technology solutions worldwide.
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              {legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors relative group font-medium font-heading"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterStatic