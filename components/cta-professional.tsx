"use client"

import { motion } from 'framer-motion'
import { 
  ArrowRight, Calendar, Users, Award, Shield, Globe,
  TrendingUp, BarChart3, CheckCircle, Building2, Phone
} from 'lucide-react'
import { useState } from 'react'

const ProfessionalCTA = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const achievements = [
    { 
      icon: Users, 
      value: "500+", 
      label: "Fortune 500 Clients",
      description: "Trusted by the world's largest enterprises"
    },
    { 
      icon: Award, 
      value: "99.9%", 
      label: "Project Success Rate",
      description: "Consistently delivering exceptional results"
    },
    { 
      icon: Globe, 
      value: "40+", 
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    { 
      icon: TrendingUp, 
      value: "$2.3B", 
      label: "Cost Savings Delivered",
      description: "Measurable ROI for our clients"
    }
  ]

  const testimonials = [
    {
      quote: "Yati Sphere Technologies transformed our entire infrastructure, delivering 300% ROI in the first year.",
      author: "Sarah Johnson",
      title: "CTO, Fortune 100 Financial Services",
      company: "Global Financial Corp"
    },
    {
      quote: "Their AI solutions reduced our processing time by 90% while maintaining 99.9% accuracy.",
      author: "Michael Chen",
      title: "VP of Operations, Manufacturing Leader",
      company: "Industrial Solutions Inc"
    },
    {
      quote: "The cybersecurity implementation prevented over 2 million threats with zero downtime.",
      author: "David Rodriguez",
      title: "CISO, Technology Conglomerate",
      company: "Tech Innovations Ltd"
    }
  ]

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Premium Enterprise Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 via-green-600 to-blue-700" />
        {/* Sophisticated geometric accents */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/3 to-green-500/2 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-green-500/2 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="adaptive-container relative z-10 ultra-wide-spacing ultra-4k-spacing">
        
        {/* Premium Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center glass-card px-8 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">PROVEN ENTERPRISE RESULTS</span>
            </motion.div>
            
            <h2 className="heading-section mb-8">
              <span className="block mb-2">Delivering Measurable</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 animate-text-shimmer">
                Business Impact
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-10 2xl:gap-16 ultra-wide-grid ultra-4k-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className="text-center enterprise-card p-10 hover-lift group"
                whileHover={{ y: -12, scale: 1.05 }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 glass-card rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500">
                    {(() => {
                      const IconComponent = achievement.icon
                      return <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-green-600 transition-all duration-500" />
                    })()}
                  </div>
                  {/* Premium glow effect */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-4">
                  {achievement.value}
                </div>
                <div className="text-base font-bold text-slate-700 mb-3 tracking-tight">
                  {achievement.label}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="enterprise-card bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-16 lg:p-20 text-center mb-24 relative overflow-hidden"
        >
          {/* Premium background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-green-600/5" />
          
          <motion.div 
            className="inline-flex items-center glass-card px-8 py-3 mb-10 bg-blue-600/10 border-blue-400/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CheckCircle className="w-5 h-5 mr-3 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">READY TO GET STARTED?</span>
          </motion.div>
          
          <motion.h3 
            className="heading-section text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transform Your Enterprise Today
          </motion.h3>
          
          <motion.p 
            className="text-lead text-slate-300 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Schedule a comprehensive consultation with our enterprise solution architects. 
            We'll analyze your current infrastructure, identify optimization opportunities, 
            and create a customized transformation roadmap with clear ROI projections.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="enterprise-button px-12 py-5 text-white text-lg font-bold flex items-center justify-center">
              <Calendar className="w-6 h-6 mr-4" />
              Schedule Free Consultation
              <ArrowRight className="w-6 h-6 ml-4" />
            </button>
            
            <button className="enterprise-card px-12 py-5 text-slate-200 font-bold text-lg border-2 border-slate-400 hover:border-blue-400 hover:text-blue-400 transition-all duration-400 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-4" />
              Call Enterprise Sales
            </button>
          </motion.div>

          {/* Enterprise Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Free Assessment</h4>
                <p className="text-slate-400 text-sm">Comprehensive infrastructure analysis at no cost</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Custom Roadmap</h4>
                <p className="text-slate-400 text-sm">Tailored transformation plan with clear milestones</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">ROI Guarantee</h4>
                <p className="text-slate-400 text-sm">Measurable results within 90 days</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            What Enterprise Leaders Say
          </h3>
          
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-2xl text-slate-400 mb-4">"</div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {testimonials[currentTestimonial]?.quote || 'Loading testimonial...'}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">
                    {testimonials[currentTestimonial]?.author?.split(' ').map(n => n[0]).join('') || 'NN'}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">{testimonials[currentTestimonial]?.author || 'Name'}</div>
                  <div className="text-sm text-slate-600">{testimonials[currentTestimonial]?.title || 'Title'}</div>
                  <div className="text-sm text-blue-600">{testimonials[currentTestimonial]?.company || 'Company'}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>99.9% Success Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalCTA