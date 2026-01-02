"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Phone, ArrowRight, ChevronDown, Menu, X,
  FileText, Users, Award, MessageSquare,
  Briefcase
} from 'lucide-react'

// Professional Custom Icons for Solutions
const CloudInfrastructureIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="m14.5 9.5-5 5"/>
    <path d="m9.5 9.5 5 5"/>
    <path d="M8 16v2"/>
    <path d="M16 16v2"/>
    <path d="M12 20v2"/>
  </svg>
)

const DevOpsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12l2 2 4-4"/>
    <path d="m3 12 3-3v6l-3-3z"/>
    <path d="m21 12-3-3v6l3-3z"/>
    <path d="M12 3v6"/>
    <path d="M12 15v6"/>
  </svg>
)

const DataAnalyticsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-4 4 4 6-6"/>
    <circle cx="7" cy="16" r="1"/>
    <circle cx="11" cy="12" r="1"/>
    <circle cx="15" cy="16" r="1"/>
    <circle cx="21" cy="10" r="1"/>
    <path d="M3 12h6"/>
    <path d="M9 8h6"/>
    <path d="M15 4h6"/>
  </svg>
)

const AIMLIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.46 9-11V7l-10-5Z"/>
    <path d="M9 12l2 2 4-4"/>
    <circle cx="12" cy="10" r="3"/>
    <path d="M12 1v6"/>
    <path d="m4.93 6.93 4.24 4.24"/>
    <path d="m14.83 11.17 4.24-4.24"/>
  </svg>
)

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.46 9-11V7l-10-5Z"/>
    <circle cx="12" cy="11" r="2"/>
    <path d="M12 8v2"/>
    <path d="M12 14v2"/>
    <path d="M9.5 9.5L8 8"/>
    <path d="M16 8l-1.5 1.5"/>
    <path d="M9.5 14.5L8 16"/>
    <path d="M16 16l-1.5-1.5"/>
  </svg>
)

const DigitalTransformationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.5 2v6h-6"/>
    <path d="M21.34 6.34a10 10 0 0 1-7.14 15.66c-4.42 0-8.05-2.58-9.8-6.34"/>
    <path d="M2.5 22v-6h6"/>
    <path d="M2.66 17.66a10 10 0 0 1 7.14-15.66c4.42 0 8.05 2.58 9.8 6.34"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>
)
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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
          icon: CloudInfrastructureIcon,
          color: 'text-blue-600',
          bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
          hoverColor: 'hover:from-blue-100 hover:to-blue-150'
        },
        { 
          name: 'DevOps & Automation', 
          href: '/solutions/devops', 
          desc: 'CI/CD pipelines, infrastructure as code & automated deployments', 
          metric: '90% Faster',
          icon: DevOpsIcon,
          color: 'text-green-600',
          bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
          hoverColor: 'hover:from-green-100 hover:to-green-150'
        },
        { 
          name: 'Data Analytics', 
          href: '/solutions/data', 
          desc: 'Real-time dashboards, predictive modeling & business intelligence', 
          metric: '10x Insights',
          icon: DataAnalyticsIcon,
          color: 'text-purple-600',
          bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
          hoverColor: 'hover:from-purple-100 hover:to-purple-150'
        },
        { 
          name: 'AI & Machine Learning', 
          href: '/solutions/ai-ml', 
          desc: 'Custom AI models, process automation & intelligent analytics', 
          metric: '300% ROI',
          icon: AIMLIcon,
          color: 'text-orange-600',
          bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
          hoverColor: 'hover:from-orange-100 hover:to-orange-150'
        },
        { 
          name: 'Enterprise Security', 
          href: '/solutions/security', 
          desc: 'Zero-trust architecture, threat detection & compliance management', 
          metric: '99.9% Protected',
          icon: SecurityIcon,
          color: 'text-red-600',
          bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
          hoverColor: 'hover:from-red-100 hover:to-red-150'
        },
        { 
          name: 'Digital Transformation', 
          href: '/solutions/consulting', 
          desc: 'Strategic consulting, change management & technology roadmaps', 
          metric: '200% Growth',
          icon: DigitalTransformationIcon,
          color: 'text-teal-600',
          bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
          hoverColor: 'hover:from-teal-100 hover:to-teal-150'
        }
      ]
    },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: Award },
    { name: 'Perspectives', href: '/perspectives', icon: FileText },
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
          mounted && scrolled 
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
              height: mounted && scrolled ? "60px" : "72px"
            }}
            style={{
              height: mounted && scrolled ? "60px" : "72px"
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
                    width={mounted && scrolled ? 140 : 160}
                    height={mounted && scrolled ? 35 : 40}
                    className="transition-all duration-500 brightness-75 opacity-90 group-hover:brightness-90 group-hover:opacity-100"
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
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[800px] bg-background rounded-2xl shadow-2xl border border-border p-8 z-50"
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
                                    {/* Professional Icon with enhanced styling */}
                                    <div className="relative mb-4">
                                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/30 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                                        <IconComponent className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300 stroke-2" />
                                      </div>
                                      {/* Enhanced glow effect */}
                                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-2xl" />
                                      {/* Additional shine effect */}
                                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              className={cn(
                "lg:hidden fixed inset-x-0 bg-background border-t border-border shadow-xl overflow-y-auto z-40",
                mounted && scrolled ? "top-[60px] max-h-[calc(100vh-60px)]" : "top-[72px] max-h-[calc(100vh-72px)]"
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.dropdown ? (
                      <div className="border-b border-border/30 last:border-b-0">
                        <motion.button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full text-left text-foreground hover:text-primary font-semibold py-4 text-base transition-colors"
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              className="pb-4 space-y-2"
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
                                    className="flex items-start space-x-3 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 border border-border"
                                    onClick={closeMobileMenu}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <div className="w-12 h-12 bg-gradient-to-br from-white/60 to-white/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20 backdrop-blur-sm">
                                      <IconComponent className="w-6 h-6 text-primary stroke-2" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-semibold text-foreground text-sm mb-1 truncate">
                                        {dropdownItem.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground mb-1 leading-relaxed line-clamp-2">
                                        {dropdownItem.desc}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-medium text-green-600">
                                          {dropdownItem.metric}
                                        </span>
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
                        className="flex items-center space-x-3 text-foreground hover:text-primary font-semibold py-4 text-base transition-colors border-b border-border/30 last:border-b-0"
                        onClick={closeMobileMenu}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.icon && (
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <span>{item.name}</span>
                      </motion.a>
                    )}
                  </motion.div>
                ))}
                
                {/* Premium Mobile CTA */}
                <motion.div 
                  className="pt-6 border-t border-border/50 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="/contact-us"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary font-semibold p-3 bg-muted rounded-xl transition-colors"
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-sm border border-border">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </motion.a>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 text-base rounded-xl shadow-lg transition-all duration-300"
                      onClick={closeMobileMenu}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
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