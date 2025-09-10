"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight, Sparkles, Shield, Cloud, Workflow, BarChart3, Settings, Bot, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBlur = useTransform(scrollY, [0, 100], [12, 20])

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on window resize
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
          bgColor: 'bg-blue-500/10',
          hoverColor: 'hover:bg-blue-500/20'
        },
        { 
          name: 'DevOps & Automation', 
          href: '/solutions/devops', 
          desc: 'CI/CD pipelines, infrastructure as code & automated deployments', 
          metric: '90% Faster',
          icon: Workflow,
          color: 'text-green-600',
          bgColor: 'bg-green-500/10',
          hoverColor: 'hover:bg-green-500/20'
        },
        { 
          name: 'Data Analytics', 
          href: '/solutions/data', 
          desc: 'Real-time dashboards, predictive modeling & business intelligence', 
          metric: '10x Insights',
          icon: BarChart3,
          color: 'text-cyan-600',
          bgColor: 'bg-cyan-500/10',
          hoverColor: 'hover:bg-cyan-500/20'
        },
        { 
          name: 'AI & Machine Learning', 
          href: '/solutions/ai', 
          desc: 'Custom AI models, process automation & intelligent analytics', 
          metric: '300% ROI',
          icon: Bot,
          color: 'text-emerald-600',
          bgColor: 'bg-emerald-500/10',
          hoverColor: 'hover:bg-emerald-500/20'
        },
        { 
          name: 'Enterprise Security', 
          href: '/solutions/security', 
          desc: 'Zero-trust architecture, threat detection & compliance management', 
          metric: '99.9% Protected',
          icon: Shield,
          color: 'text-teal-600',
          bgColor: 'bg-teal-500/10',
          hoverColor: 'hover:bg-teal-500/20'
        },
        { 
          name: 'Digital Transformation', 
          href: '/solutions/consulting', 
          desc: 'Strategic consulting, change management & technology roadmaps', 
          metric: '200% Growth',
          icon: Settings,
          color: 'text-indigo-600',
          bgColor: 'bg-indigo-500/10',
          hoverColor: 'hover:bg-indigo-500/20'
        }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about-us' }
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
            ? "bg-background/95 shadow-2xl border-b border-border/50 backdrop-blur-xl" 
            : "bg-background/90 backdrop-blur-lg border-b border-border/20"
        )}
        style={{ 
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 1)' : 'rgba(15, 23, 42, 0.98)',
          backdropFilter: `blur(${headerBlur.get()}px) saturate(180%)`
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-none px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <motion.div 
            className="flex items-center justify-between transition-all duration-500"
            animate={{
              height: scrolled ? "56px" : "64px" // Shrink from 64px to 56px on scroll
            }}
            style={{
              height: scrolled ? "56px" : "64px"
            }}
          >
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              animate={{
                scale: scrolled ? 0.9 : 1 // Shrink logo on scroll
              }}
            >
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <motion.div 
                    className="font-bold tracking-tight font-heading"
                    animate={{
                      fontSize: scrolled ? "1.5rem" : "2rem" // Shrink text size on scroll
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 bg-clip-text text-transparent animate-text-shimmer">
                      Yati Sphere
                    </span>
                    {isClient ? (
                      <motion.span 
                        className="text-blue-400 ml-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        .
                      </motion.span>
                    ) : (
                      <span className="text-blue-400 ml-1">.</span>
                    )}
                  </motion.div>
                  {/* Subtle glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ zIndex: -1 }}
                  />
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-6 xl:mx-8">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    <motion.a
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 text-sm xl:text-base font-semibold font-heading transition-all duration-300",
                        "relative py-3 px-4 xl:px-5 rounded-xl hover:text-blue-400 hover:bg-blue-500/10",
                        "group whitespace-nowrap"
                      )}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.02, y: -1 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-all duration-300",
                            activeDropdown === item.name && "rotate-180 text-blue-400"
                          )} 
                        />
                      )}
                      {/* Enhanced hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                      <span className="absolute bottom-2 left-4 right-4 xl:left-5 xl:right-5 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                    </motion.a>

                    {/* Professional Responsive Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full right-0 mt-3 w-[500px] lg:w-[600px] max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden z-50"
                          style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.05)'
                          }}
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {/* Horizontal Professional Header */}
                          <div className="bg-gradient-to-r from-blue-50/80 to-green-50/80 px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                                  <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-base font-bold text-gray-900 font-heading">
                                    Enterprise {item.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Comprehensive technology solutions for modern enterprises
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex -space-x-1">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                                  <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="text-xs text-gray-600">
                                  <span className="font-semibold text-gray-900">500+</span> companies
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                              {item.dropdown.map((dropdownItem, idx) => (
                                <motion.a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className={cn(
                                    "flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group cursor-pointer",
                                    "hover:bg-gray-50/80 border border-transparent hover:border-gray-200/50"
                                  )}
                                  onClick={closeDropdown}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                                  whileHover={{ y: -2 }}
                                >
                                  <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-sm flex-shrink-0",
                                    dropdownItem.bgColor,
                                    dropdownItem.hoverColor
                                  )}>
                                    <dropdownItem.icon className={cn("w-6 h-6", dropdownItem.color)} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                      <h5 className="font-bold text-sm text-gray-900 font-heading group-hover:text-blue-600 transition-colors leading-tight">
                                        {dropdownItem.name}
                                      </h5>
                                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                                        {dropdownItem.metric}
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-2">
                                      {dropdownItem.desc}
                                    </p>
                                    <div className="flex items-center gap-1 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                      <span>Learn more</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                          
                          {/* Horizontal Footer */}
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 px-6 py-4 border-t border-gray-100">
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-gray-600">
                                Need help choosing? <span className="font-semibold text-gray-900">Contact our experts</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <a 
                                  href="/contact" 
                                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  Get Consultation
                                </a>
                                <a 
                                  href="/solutions" 
                                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50"
                                >
                                  View All Solutions
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 xl:gap-3"
              >
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="hidden xl:flex items-center gap-2 hover:bg-blue-500/10 hover:text-blue-400 group whitespace-nowrap font-semibold font-heading"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Contact Sales
                </Button>
                <Button 
                  size="lg"
                  className="enterprise-button text-white group relative overflow-hidden whitespace-nowrap font-semibold font-heading h-11 xl:h-12 px-6 xl:px-8"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10"
                    initial={{ x: "-100%", skewX: -15 }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isClient ? (
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative group h-10 w-10 sm:h-11 sm:w-11"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <motion.div
                    animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                    className="absolute w-6 h-0.5 bg-current transform origin-center rounded-full"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.div
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-6 h-0.5 bg-current transform top-2 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                    className="absolute w-6 h-0.5 bg-current transform origin-center rounded-full"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-full px-4 sm:px-6 py-6 max-h-[80vh] overflow-y-auto">
                {/* Mobile Menu Header */}
                <div className="border-b border-border/20 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span className="text-lg font-bold font-heading text-foreground">Navigation</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div 
                        className="flex items-center justify-between px-4 py-4 text-base font-semibold font-heading text-foreground hover:text-blue-400 hover:bg-blue-500/30 rounded-xl transition-all duration-300 cursor-pointer"
                        onClick={() => item.dropdown ? handleDropdownToggle(item.name) : closeMobileMenu()}
                      >
                        {!item.dropdown ? (
                          <a href={item.href} className="flex-1 flex items-center gap-3" onClick={closeMobileMenu}>
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            {item.name}
                          </a>
                        ) : (
                          <span className="flex-1 flex items-center gap-3">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            {item.name}
                          </span>
                        )}
                        {item.dropdown && (
                          <ChevronDown 
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              activeDropdown === item.name && "rotate-180 text-blue-400"
                            )}
                          />
                        )}
                      </div>
                      
                      {/* Professional Mobile Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            className="ml-4 mt-3 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50 shadow-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.dropdown.map((dropdownItem, idx) => (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-start gap-3 px-3 py-3 text-sm hover:bg-gray-50 rounded-lg transition-all duration-200 group border border-transparent hover:border-gray-200/50"
                                onClick={closeMobileMenu}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm", dropdownItem.bgColor, dropdownItem.hoverColor)}>
                                  <dropdownItem.icon className={cn("w-5 h-5", dropdownItem.color)} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="font-semibold font-heading text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                                      {dropdownItem.name}
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                      {dropdownItem.metric}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-600 leading-relaxed">
                                    {dropdownItem.desc}
                                  </div>
                                </div>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  
                  {/* Enhanced Mobile CTA Buttons */}
                  <motion.div 
                    className="px-4 pt-6 space-y-3 border-t border-border/20 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center group hover:bg-blue-500/30 hover:text-blue-400 font-semibold font-heading h-12"
                      onClick={closeMobileMenu}
                    >
                      <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Contact Sales
                    </Button>
                    <Button 
                      className="w-full enterprise-button text-white group font-semibold font-heading h-12"
                      onClick={closeMobileMenu}
                    >
                      {isClient ? (
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                        </motion.div>
                      ) : (
                        <Sparkles className="w-4 h-4 mr-2" />
                      )}
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation