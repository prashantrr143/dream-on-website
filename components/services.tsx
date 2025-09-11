"use client"

import { motion, Variants } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
// import { ScrollAnimation, StaggerAnimation, HoverAnimation } from '@/components/optimized-animations'
// import { CardLoadingSkeleton } from '@/components/loading-states'
// import ErrorBoundary from '@/components/error-boundary'
// import type { Service } from '@/types'

// Lazy load AnimatedText component
const AnimatedText = dynamic(() => import('@/components/animated-text'), {
  ssr: false,
  loading: () => <span className="opacity-0">Loading...</span>
})

const Services = () => {
  // Memoize static data
  const services = useMemo(() => [
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Transform your infrastructure with enterprise-grade cloud solutions designed for scale and performance.",
      metrics: "500+ migrations",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description: "Harness the power of generative AI and intelligent automation to revolutionize your business operations.",
      metrics: "300% efficiency gain",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: "🔧",
      title: "DevOps Engineering",
      description: "Accelerate delivery with robust CI/CD pipelines and infrastructure automation strategies.",
      metrics: "90% faster deployment",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Protect your enterprise with zero-trust architecture and advanced threat detection systems.",
      metrics: "99.9% threat prevention",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: "📊",
      title: "Data Intelligence",
      description: "Unlock insights with real-time analytics and business intelligence platforms.",
      metrics: "10x faster insights",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: "💡",
      title: "Digital Strategy",
      description: "Navigate digital transformation with strategic consulting and innovation frameworks.",
      metrics: "200% ROI average",
      gradient: "from-blue-500/20 to-green-500/20"
    }
  ], [])

  // Memoize animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }), [])

  const cardVariants: Variants = useMemo(() => ({
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }), [])

 return (
   <section 
     className="relative overflow-hidden min-h-[80vh] flex flex-col justify-center section-no-overlap bg-white" 
     style={{ 
       padding: 'clamp(4rem, 8vh, 6rem) 0',
       marginTop: '2rem' // Add margin to prevent overlap
     }}
     id="services"
   >
     {/* Premium Background Elements */}
     <div className="absolute inset-0">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl animate-float" />
       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-100/60 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
     </div>
     
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
       {/* Header */}
       <motion.div 
         className="text-center"
         style={{ marginBottom: 'clamp(2rem, 6vh, 3rem)' }}
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
       >
         <motion.div
           whileHover={{ scale: 1.05 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
         >
           <Badge 
             variant="secondary" 
             className="bg-white border border-blue-200 hover:border-green-200 hover:bg-green-50 transition-all duration-300 shadow-sm rounded-full"
             style={{
               padding: 'clamp(0.5rem, 1vh, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
               fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
               marginBottom: 'clamp(1rem, 3vh, 2rem)'
             }}
           >
             <Sparkles className="w-4 h-4 mr-2 animate-pulse text-blue-600" />
             Our Expertise
           </Badge>
         </motion.div>
         
         <h2 
           className="leading-tight text-balance max-w-4xl mx-auto font-heading"
           style={{ 
             fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
             marginBottom: 'clamp(1rem, 3vh, 1.5rem)'
           }}
         >
           <AnimatedText
             text="Enterprise Solutions That "
             animation="splitWords"
             className="inline-block"
             stagger={0.15}
           />
           <AnimatedText
             text="Drive Results"
             animation="splitChars"
             className="gradient-text animate-text-shimmer inline-block font-display"
             delay={0.8}
             stagger={0.1}
           />
         </h2>
         <p 
           className="text-gray-600 leading-relaxed max-w-3xl mx-auto"
           style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
         >
           Comprehensive technology solutions designed for enterprise excellence, 
           scalability, and measurable business impact
         </p>
       </motion.div>

       {/* Services Grid */}
       <motion.div 
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
         style={{ 
           gap: 'clamp(1rem, 3vw, 1.5rem)'
         }}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
       >
         {services.map((service, index) => (
           <motion.div
             key={index}
             variants={cardVariants}
             whileHover={{ 
               y: -12, 
               scale: 1.02,
               transition: { duration: 0.3, ease: "easeOut" }
             }}
             className="group"
           >
             <motion.div 
               className="bg-white border border-gray-200 hover:border-green-300 group-hover:shadow-2xl h-full relative overflow-hidden rounded-xl transition-all duration-300 transform-gpu"
               style={{ 
                 padding: 'clamp(1rem, 2vh, 1.5rem)',
                 minHeight: 'clamp(200px, 20vh, 250px)',
                 transformStyle: 'preserve-3d'
               }}
               whileHover={{ 
                 rotateY: 5,
                 scale: 1.02,
                 z: 30
               }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             >
               {/* Gradient Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* Futuristic Accent Border */}
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
               
               {/* Holographic Glow Effect */}
               <motion.div
                 className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100"
                 animate={{ 
                   background: [
                     "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                     "radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                     "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
                   ]
                 }}
                 transition={{ duration: 3, repeat: Infinity }}
               />
               
               {/* Content */}
               <div className="relative h-full flex flex-col">
                 {/* Icon & Metrics */}
                 <div 
                   className="flex items-start justify-between"
                   style={{ marginBottom: 'clamp(0.75rem, 2vh, 1rem)' }}
                 >
                   <motion.div 
                     className="rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300"
                     style={{
                       width: 'clamp(2.5rem, 4vw, 3rem)',
                       height: 'clamp(2.5rem, 4vw, 3rem)',
                       fontSize: 'clamp(1.25rem, 2vw, 1.5rem)'
                     }}
                     whileHover={{ rotate: 5 }}
                   >
                     {service.icon}
                   </motion.div>
                   <div className="text-right">
                     <div 
                       className="font-semibold text-blue-600 uppercase tracking-wider"
                       style={{ fontSize: 'clamp(0.625rem, 1.25vw, 0.75rem)' }}
                     >
                       Success Rate
                     </div>
                     <div 
                       className="font-bold text-gray-900"
                       style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
                     >
                       {service.metrics}
                     </div>
                   </div>
                 </div>
                 
                 {/* Title */}
                 <h3 
                   className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                   style={{ 
                     fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                     marginBottom: 'clamp(0.5rem, 1vh, 0.75rem)'
                   }}
                 >
                   {service.title}
                 </h3>
                 
                 {/* Description */}
                 <p 
                   className="text-gray-600 leading-relaxed flex-grow"
                   style={{ 
                     fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                     marginBottom: 'clamp(0.75rem, 2vh, 1rem)'
                   }}
                 >
                   {service.description}
                 </p>
                 
                 {/* CTA */}
                 <motion.div 
                   className="flex items-center justify-between pt-6 border-t border-gray-200"
                   whileHover={{ x: 5 }}
                   transition={{ duration: 0.2 }}
                 >
                   <span className="text-blue-600 font-semibold group-hover:text-green-600 transition-colors duration-300">
                     Learn More
                   </span>
                   <motion.div
                     className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <ArrowRight className="w-4 h-4" />
                   </motion.div>
                 </motion.div>
               </div>
               
               {/* Shine Effect */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
               </div>
             </motion.div>
           </motion.div>
         ))}
       </motion.div>

     </div>
   </section>
 )
}

export default Services