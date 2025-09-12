"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Award, TrendingUp, Users, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

const CaseStudies = () => {
  const stats = [
    { value: "50+", label: "Solutions", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "200%", label: "ROI", icon: TrendingUp },
    { value: "24/7", label: "Support", icon: Clock }
  ]

  return (
    <section className="py-8 bg-background">
      <div className="section-container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center glass-card px-4 py-1 mb-4">
            <Award className="w-4 h-4 mr-2 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">RESULTS</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Enterprise Technology <span className="text-primary">Delivery</span>
          </h2>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center glass-card p-3 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-4 h-4 mx-auto mb-1 text-primary" />
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <Link href="/case-studies">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 text-sm">
              View Portfolio
              <ArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies