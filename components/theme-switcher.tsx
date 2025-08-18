"use client"

import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Palette, ChevronDown, Check, Sparkles, Eye, Heart, Zap, Leaf, Crown, Snowflake, Sun, Coffee, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { themes, getThemeCSS } from '@/lib/themes'

// Memoize theme icons mapping
const themeIcons = {
  darkProfessional: Eye,
  cyberpunkNeon: Zap,
  forestZen: Leaf,
  sunsetLuxury: Heart,
  arcticMinimal: Snowflake,
  royalPurple: Crown,
  premiumLight: Sun,
  elegantCream: Coffee,
  pureMonochrome: Circle
} as const

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('darkProfessional')
  const [previewTheme, setPreviewTheme] = useState<string | null>(null)

  // Memoize theme entries to avoid recreation on every render
  const themeEntries = useMemo(() => Object.entries(themes), [])

  // Optimized theme application with debouncing
  const applyTheme = useCallback((themeKey: string) => {
    const theme = themes[themeKey]
    if (!theme) return

    const css = getThemeCSS(theme)
    let existingStyle = document.getElementById('dynamic-theme')
    
    if (!existingStyle) {
      existingStyle = document.createElement('style')
      existingStyle.id = 'dynamic-theme'
      document.head.appendChild(existingStyle)
    }
    
    existingStyle.textContent = css
  }, [])

  // Apply theme changes with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const themeToApply = previewTheme || currentTheme
      applyTheme(themeToApply)
    }, 50) // 50ms debounce

    return () => clearTimeout(timeoutId)
  }, [currentTheme, previewTheme, applyTheme])

  const handleThemeSelect = useCallback((themeKey: string) => {
    setCurrentTheme(themeKey)
    setPreviewTheme(null)
    setIsOpen(false)
  }, [])

  const handleThemePreview = useCallback((themeKey: string) => {
    setPreviewTheme(themeKey)
  }, [])

  const handlePreviewEnd = useCallback(() => {
    setPreviewTheme(null)
  }, [])

  return (
    <div className="fixed top-20 right-4 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Theme Switcher Button */}
        <Button
          variant="outline"
          size="lg"
          className="glass-card border-2 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-400/10 text-blue-300 hover:text-blue-200 font-semibold group transition-all duration-500 hover-glow flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Palette className="w-5 h-5" />
          </motion.div>
          <span className="hidden sm:inline">Themes</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Button>

        {/* Theme Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full right-0 mt-4 w-80 glass-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 p-4 border-b border-border/30 bg-muted/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold text-foreground font-heading uppercase tracking-wider">
                    Choose Your Theme
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Hover to preview, click to apply
                </p>
              </div>

              {/* Theme Options */}
              <div className="p-2 max-h-96 overflow-y-auto">
                {themeEntries.map(([key, theme], index) => {
                  const IconComponent = themeIcons[key as keyof typeof themeIcons]
                  const isActive = currentTheme === key
                  const isPreviewing = previewTheme === key
                  
                  return (
                    <motion.div
                      key={key}
                      className={cn(
                        "p-4 rounded-xl cursor-pointer transition-all duration-300 group relative overflow-hidden",
                        isActive ? "bg-blue-500/20 border border-blue-400/30" : "hover:bg-muted/50",
                        isPreviewing && "bg-violet-500/20 border border-violet-400/30"
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleThemeSelect(key)}
                      onMouseEnter={() => handleThemePreview(key)}
                      onMouseLeave={handlePreviewEnd}
                    >
                      {/* Theme Preview Colors */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-blue-400" />
                          <div className="flex gap-1">
                            <div 
                              className="w-4 h-4 rounded-full border border-white/20"
                              style={{ backgroundColor: theme.colors.gradientPrimary }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-white/20"
                              style={{ backgroundColor: theme.colors.gradientSecondary }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-white/20"
                              style={{ backgroundColor: theme.colors.gradientAccent }}
                            />
                          </div>
                        </div>
                        
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto"
                          >
                            <Check className="w-5 h-5 text-green-400" />
                          </motion.div>
                        )}
                      </div>

                      {/* Theme Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-foreground group-hover:text-blue-400 transition-colors">
                            {theme.name}
                          </h4>
                          {isPreviewing && (
                            <Badge variant="secondary" className="text-xs">
                              Previewing
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {theme.description}
                        </p>
                        
                        <div className="space-y-1">
                          <div className="text-xs">
                            <span className="font-semibold text-violet-400">Psychology:</span>
                            <span className="text-muted-foreground ml-1">{theme.psychology}</span>
                          </div>
                          <div className="text-xs">
                            <span className="font-semibold text-green-400">Best for:</span>
                            <span className="text-muted-foreground ml-1">{theme.bestFor}</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                        style={{ transform: "skewX(-15deg)" }}
                      />
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="bg-muted/50 p-4 border-t border-border/30">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Themes are applied instantly • 
                    <span className="text-blue-400 ml-1">
                      {Object.keys(themes).length} professional options
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ThemeSwitcher