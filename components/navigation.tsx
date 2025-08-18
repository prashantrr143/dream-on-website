"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Sparkles, Globe, Shield, Zap, Target, Users, Cloud, Workflow, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.98, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [12, 20])

  useEffect(() => {
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
          desc: 'Enterprise cloud migration & optimization with 99.9% uptime', 
          icon: Cloud,
          color: 'text-blue-600',
          bgColor: 'bg-blue-500/10'
        },
        { 
          name: 'DevOps & Automation', 
          href: '/solutions/devops', 
          desc: 'CI/CD pipelines & infrastructure automation', 
          icon: Workflow,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-500/10'
        },
        { 
          name: 'Data Analytics', 
          href: '/solutions/data', 
          desc: 'Real-time analytics & business intelligence', 
          icon: BarChart3,
          color: 'text-green-600',
          bgColor: 'bg-green-500/10'
        },
        { 
          name: 'Digital Consulting', 
          href: '/solutions/consulting', 
          desc: 'Strategic digital transformation consulting', 
          icon: Settings,
          color: 'text-purple-600',
          bgColor: 'bg-purple-500/10'
        },
        { 
          name: 'Enterprise Security', 
          href: '/solutions/security', 
          desc: 'Zero-trust architecture & threat protection', 
          icon: Shield,
          color: 'text-red-600',
          bgColor: 'bg-red-500/10'
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
            ? "bg-background shadow-2xl border-b border-border/30" 
            : "bg-background/98 backdrop-blur-xl border-b border-border/10"
        )}
        style={{ 
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 1)' : 'rgba(15, 23, 42, 0.98)',
          backdropFilter: `blur(${headerBlur.get()}px) saturate(180%)`
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        <div className="w-full max-w-none px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 xl:h-20">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight font-heading">
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
                  </div>
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

                    {/* Enhanced Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-4 w-96 bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
                        >
                          {/* Gradient header */}
                          <div className="bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 p-4 border-b border-border/30 bg-muted/30">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-blue-400" />
                              <span className="text-sm font-bold text-foreground font-heading uppercase tracking-wider">
                                {item.name}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/80 transition-all duration-300 group"
                                onClick={closeDropdown}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ x: 5, scale: 1.02 }}
                              >
                                <div className={cn(
                                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                  dropdownItem.bgColor
                                )}>
                                  <dropdownItem.icon className={cn("w-6 h-6", dropdownItem.color)} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className={cn(
                                    "font-bold text-base font-heading transition-colors duration-300",
                                    "text-foreground group-hover:text-blue-400"
                                  )}>
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                    {dropdownItem.desc}
                                  </div>
                                </div>
                                <motion.div
                                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  whileHover={{ x: 3 }}
                                >
                                  <ArrowRight className="w-5 h-5 text-blue-400" />
                                </motion.div>
                              </motion.a>
                            ))}
                          </div>
                          
                          {/* Footer */}
                          <div className="bg-muted/50 p-4 border-t border-border/30">
                            <a 
                              href="/solutions" 
                              className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                            >
                              View All Solutions
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
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
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
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
                    transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
                  />
                  <motion.div
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute w-6 h-0.5 bg-current transform top-2 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                    className="absolute w-6 h-0.5 bg-current transform origin-center rounded-full"
                    transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
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
                      
                      {/* Enhanced Mobile Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            className="ml-6 mt-2 space-y-2 bg-muted rounded-xl p-3"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.dropdown.map((dropdownItem, idx) => (
                              <motion.a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-start gap-3 px-4 py-3 text-sm hover:text-blue-400 hover:bg-background/80 rounded-lg transition-all duration-300 group"
                                onClick={closeMobileMenu}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", dropdownItem.bgColor)}>
                                  <dropdownItem.icon className={cn("w-4 h-4", dropdownItem.color)} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold font-heading text-foreground group-hover:text-blue-400 transition-colors">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                    {dropdownItem.desc}
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
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
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                      </motion.div>
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