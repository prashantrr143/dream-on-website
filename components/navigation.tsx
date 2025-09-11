"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Phone, ArrowRight, ChevronDown, Menu, X,
  Cloud, Bot,
  FileText, Users, Award, MessageSquare, Zap, Database,
  Lock, Briefcase, TrendingUp
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { 
          name: 'Cloud Infrastructure', 
          href: '/solutions/cloud', 
          desc: 'Enterprise-grade cloud migration, optimization & multi-cloud strategy',
          metric: '500+ Migrations',
          icon: Cloud,
          color: 'text-blue-600',
          bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
          hoverColor: 'hover:from-blue-100 hover:to-blue-150'
        },
        { 
          name: 'DevOps & Automation', 
          href: '/solutions/devops', 
          desc: 'CI/CD pipelines, infrastructure as code & automated deployments', 
          metric: '90% Faster',
          icon: Zap,
          color: 'text-green-600',
          bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
          hoverColor: 'hover:from-green-100 hover:to-green-150'
        },
        { 
          name: 'Data Analytics', 
          href: '/solutions/data', 
          desc: 'Real-time dashboards, predictive modeling & business intelligence', 
          metric: '10x Insights',
          icon: Database,
          color: 'text-purple-600',
          bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
          hoverColor: 'hover:from-purple-100 hover:to-purple-150'
        },
        { 
          name: 'AI & Machine Learning', 
          href: '/solutions/ai-ml', 
          desc: 'Custom AI models, process automation & intelligent analytics', 
          metric: '300% ROI',
          icon: Bot,
          color: 'text-orange-600',
          bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
          hoverColor: 'hover:from-orange-100 hover:to-orange-150'
        },
        { 
          name: 'Enterprise Security', 
          href: '/solutions/security', 
          desc: 'Zero-trust architecture, threat detection & compliance management', 
          metric: '99.9% Protected',
          icon: Lock,
          color: 'text-red-600',
          bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
          hoverColor: 'hover:from-red-100 hover:to-red-150'
        },
        { 
          name: 'Digital Transformation', 
          href: '/solutions/consulting', 
          desc: 'Strategic consulting, change management & technology roadmaps', 
          metric: '200% Growth',
          icon: TrendingUp,
          color: 'text-teal-600',
          bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
          hoverColor: 'hover:from-teal-100 hover:to-teal-150'
        }
      ]
    },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'About', href: '/about-us', icon: Users },
    { name: 'Contact', href: '/contact-us', icon: MessageSquare }
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          scrolled 
            ? "bg-background/95 shadow-xl border-b border-border/80 backdrop-blur-xl" 
            : "bg-background/90 backdrop-blur-lg border-b border-border/20"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="adaptive-container">
          <motion.div 
            className="flex items-center justify-between transition-all duration-500"
            animate={{
              height: scrolled ? "60px" : "72px"
            }}
            style={{
              height: scrolled ? "60px" : "72px"
            }}
          >
            
            {/* Premium Enterprise Logo */}
            <motion.div
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a href="/" className="flex items-center group">
                <motion.div 
                  className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/yati-sphere-logo.png"
                    alt="Yati Sphere Technologies"
                    width={scrolled ? 140 : 160}
                    height={scrolled ? 35 : 40}
                    className="transition-all duration-500 group-hover:brightness-90 group-hover:opacity-100"
                    style={{ 
                      filter: 'brightness(0.75)', 
                      opacity: '0.9'
                    }}
                    priority
                  />
                </motion.div>
              </a>
            </motion.div>

            {/* Premium Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name} 
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <div className="relative">
                      <motion.button
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className="flex items-center space-x-2 text-foreground hover:text-primary font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      
                      {/* Modern Solutions Mega Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[800px] bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 p-8 z-50"
                            onMouseLeave={closeDropdown}
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            {/* Header */}
                            <div className="text-center mb-6">
                              <h3 className="text-lg font-bold text-foreground mb-2">Enterprise Solutions</h3>
                              <p className="text-sm text-muted-foreground">Comprehensive technology solutions for modern enterprises</p>
                            </div>

                            {/* Solutions Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                              {item.dropdown.map((dropdownItem, idx) => {
                                const IconComponent = dropdownItem.icon
                                return (
                                  <motion.a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="group relative p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/20"
                                    onClick={closeDropdown}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                                    whileHover={{ y: -2 }}
                                  >
                                    {/* Icon with gradient background */}
                                    <div className="relative mb-3">
                                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                                        <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                                      </div>
                                      {/* Glow effect */}
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                      <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                                        {dropdownItem.name}
                                      </h4>
                                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                                        {dropdownItem.desc}
                                      </p>
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-medium text-green-600 group-hover:text-green-500 transition-colors">
                                          {dropdownItem.metric}
                                        </span>
                                      </div>
                                    </div>

                                    {/* Hover border effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  </motion.a>
                                )
                              })}
                            </div>

                            {/* CTA Footer */}
                            <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                              <div className="text-sm text-muted-foreground">
                                Need custom solutions? 
                                <span className="text-primary font-medium ml-1">Let's discuss your needs</span>
                              </div>
                              <motion.a
                                href="/contact-us"
                                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={closeDropdown}
                              >
                                Get Started
                              </motion.a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      className="flex items-center space-x-2 text-foreground hover:text-primary font-medium transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Premium Desktop CTA */}
            <motion.div 
              className="hidden lg:flex items-center space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="/contact-us"
                className="text-muted-foreground hover:text-primary font-semibold transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 py-2 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="lg:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="adaptive-container py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <motion.button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-left text-foreground font-bold py-3 text-lg"
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="mt-3 ml-4 space-y-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.dropdown.map((dropdownItem, idx) => {
                                const IconComponent = dropdownItem.icon
                                return (
                                  <motion.a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className={cn(
                                      "flex items-start space-x-4 p-3 rounded-xl transition-all duration-300",
                                      dropdownItem.bgColor
                                    )}
                                    onClick={closeMobileMenu}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                      <IconComponent className={cn("w-5 h-5", dropdownItem.color)} />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-bold text-slate-900 text-sm mb-1">
                                        {dropdownItem.name}
                                      </div>
                                      <div className="text-xs text-slate-600 mb-1">
                                        {dropdownItem.desc}
                                      </div>
                                      <div className={cn("text-xs font-semibold", dropdownItem.color)}>
                                        {dropdownItem.metric}
                                      </div>
                                    </div>
                                  </motion.a>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={item.href}
                        className="flex items-center space-x-4 text-foreground hover:text-primary font-bold py-3 text-lg transition-colors"
                        onClick={closeMobileMenu}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon && (
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <span>{item.name}</span>
                      </motion.a>
                    )}
                  </motion.div>
                ))}
                
                {/* Premium Mobile CTA */}
                <motion.div 
                  className="pt-6 border-t border-slate-200 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="/contact-us"
                    className="flex items-center space-x-4 text-slate-600 hover:text-blue-600 font-semibold p-3 bg-slate-50 rounded-xl transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </motion.a>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg"
                      onClick={closeMobileMenu}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    </>
  )
}

export default Navigation