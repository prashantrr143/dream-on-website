"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Sparkles, Users, Trophy, Zap, Star, Calendar, Rocket, Award, Globe, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const CTA = () => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
 const [isHovered, setIsHovered] = useState(false)

 useEffect(() => {
   const handleMouseMove = (e: MouseEvent) => {
     const rect = document.querySelector('#cta-section')?.getBoundingClientRect()
     if (rect) {
       setMousePosition({
         x: e.clientX - rect.left,
         y: e.clientY - rect.top
       })
     }
   }
   window.addEventListener('mousemove', handleMouseMove)
   return () => window.removeEventListener('mousemove', handleMouseMove)
 }, [])

 const achievements = [
   { icon: Users, value: "500+", label: "Enterprise Clients", subtitle: "Fortune 500 companies", color: "from-blue-500 to-cyan-500" },
   { icon: Trophy, value: "99.9%", label: "Success Rate", subtitle: "Project completion", color: "from-green-500 to-emerald-500" },
   { icon: Zap, value: "24/7", label: "Global Support", subtitle: "Across 40+ countries", color: "from-yellow-500 to-orange-500" },
   { icon: Star, value: "4.9", label: "Client Rating", subtitle: "Average satisfaction", color: "from-purple-500 to-pink-500" }
 ]

 const trustIndicators = [
   { icon: Shield, text: "SOC 2 Certified" },
   { icon: Award, text: "ISO 27001" },
   { icon: Globe, text: "Global Presence" },
   { icon: Rocket, text: "99.9% SLA" }
 ]

 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.1,
       delayChildren: 0.2
     }
   }
 }

 const itemVariants = {
   hidden: { opacity: 0, y: 40, scale: 0.95 },
   visible: { 
     opacity: 1, 
     y: 0,
     scale: 1,
     transition: { 
       duration: 0.7
     }
   }
 }

 return (
   <section 
     id="cta-section"
     className="relative py-20 lg:py-32 xl:py-40 overflow-hidden"
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
   >
     {/* Revolutionary Background */}
     <div className="absolute inset-0">
       {/* Base Gradient */}
       <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
       
       {/* Dynamic Mesh Gradient */}
       <motion.div 
         className="absolute inset-0"
         animate={{
           background: [
             "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
             "radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
             "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)"
           ]
         }}
         transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
       />
       
       {/* Interactive Cursor Glow */}
       <motion.div
         className="absolute pointer-events-none"
         style={{
           left: mousePosition.x - 200,
           top: mousePosition.y - 200,
           width: 400,
           height: 400,
           background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
           borderRadius: "50%",
           filter: "blur(40px)"
         }}
         animate={{
           scale: isHovered ? 1.5 : 1,
           opacity: isHovered ? 0.8 : 0.4
         }}
         transition={{ type: "spring", stiffness: 200, damping: 30 }}
       />
       
       {/* Floating Geometric Shapes */}
       {[...Array(8)].map((_, i) => (
         <motion.div
           key={i}
           className="absolute opacity-20"
           animate={{
             x: [0, 100, 0],
             y: [0, -50, 0],
             rotate: [0, 180, 360],
             scale: [1, 1.2, 1]
           }}
           transition={{
             duration: 8 + i * 2,
             repeat: Infinity,
             delay: i * 0.5,
             ease: "easeInOut"
           }}
           style={{
             left: `${10 + i * 12}%`,
             top: `${15 + i * 8}%`
           }}
         >
           <div className={cn(
             "w-6 h-6 bg-accent/30",
             i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rounded-sm rotate-45" : "rounded-none"
           )} />
         </motion.div>
       ))}
       
       {/* Grid Pattern */}
       <div className="absolute inset-0 opacity-5">
         <div 
           className="w-full h-full"
           style={{
             backgroundImage: `
               linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px'
           }}
         />
       </div>
     </div>

     <div className="section-container relative z-10">
       <motion.div
         className="max-w-7xl mx-auto"
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
       >
         {/* Hero Content */}
         <div className="text-center mb-16 lg:mb-24">
           {/* Animated Badge */}
           <motion.div
             variants={itemVariants}
             className="inline-block mb-8"
           >
             <motion.div
               className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-full group relative overflow-hidden"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 400, damping: 17 }}
             >
               <motion.div
                 className="absolute inset-0 bg-gradient-to-r from-accent/10 to-chart-1/10"
                 initial={{ x: "-100%" }}
                 whileHover={{ x: "100%" }}
                 transition={{ duration: 0.6 }}
               />
               <Sparkles className="w-5 h-5 text-accent animate-pulse" />
               <span className="relative font-semibold text-foreground">Ready to Transform?</span>
             </motion.div>
           </motion.div>
           
           {/* Main Headline */}
           <motion.h2 
             className="heading-hero mb-8 text-balance"
             variants={itemVariants}
           >
             <motion.span
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
               Accelerate Your
             </motion.span>
             <motion.span 
               className="block gradient-text mt-4 relative"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
             >
               Digital Future
               <motion.div
                 className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent to-chart-1 rounded-full"
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 transition={{ duration: 0.8, delay: 0.8 }}
               />
             </motion.span>
           </motion.h2>
           
           <motion.p 
             className="text-lead max-w-4xl mx-auto mb-12"
             variants={itemVariants}
           >
             Join 500+ enterprise leaders who've transformed their technology infrastructure 
             with our cutting-edge solutions. Experience{" "}
             <motion.span 
               className="font-semibold text-accent"
               whileHover={{ scale: 1.05 }}
             >
               measurable results
             </motion.span>
             {" "}from day one.
           </motion.p>

           {/* Enhanced CTA Buttons */}
           <motion.div 
             className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
             variants={itemVariants}
           >
             <motion.div
               whileHover={{ scale: 1.02, y: -3 }}
               whileTap={{ scale: 0.98 }}
             >
               <Button 
                 size="xl" 
                 className="enterprise-button group h-16 px-12 text-xl font-bold relative overflow-hidden shadow-2xl"
               >
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-accent via-chart-1 to-accent"
                   initial={{ x: "-100%" }}
                   whileHover={{ x: "0%" }}
                   transition={{ duration: 0.3 }}
                 />
                 <span className="relative flex items-center gap-3">
                   <Rocket className="w-6 h-6" />
                   Start Free Consultation
                   <motion.div
                     animate={{ x: [0, 5, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <ArrowRight className="w-6 h-6" />
                   </motion.div>
                 </span>
               </Button>
             </motion.div>
             
             <motion.div
               whileHover={{ scale: 1.02, y: -3 }}
               whileTap={{ scale: 0.98 }}
             >
               <Button 
                 variant="outline" 
                 size="xl"
                 className="border-2 border-accent/30 hover:border-accent hover:bg-accent/5 h-16 px-12 text-xl font-semibold group relative overflow-hidden"
               >
                 <span className="relative flex items-center gap-3">
                   <Calendar className="w-6 h-6" />
                   Book Demo Call
                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                 </span>
               </Button>
             </motion.div>
           </motion.div>

           {/* Trust Indicators */}
           <motion.div 
             className="flex flex-wrap justify-center items-center gap-8 mb-20"
             variants={itemVariants}
           >
             {trustIndicators.map((indicator, index) => {
               const IconComponent = indicator.icon
               return (
                 <motion.div 
                   key={index}
                   className="flex items-center gap-3 px-6 py-3 bg-muted/30 rounded-full border border-gray-700/30 hover:border-accent/30 transition-colors group"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 + 0.6 }}
                   whileHover={{ scale: 1.05, y: -2 }}
                 >
                   <IconComponent className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                   <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                     {indicator.text}
                   </span>
                 </motion.div>
               )
             })}
           </motion.div>
         </div>

         {/* Achievement Cards */}
         <motion.div 
           className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
           variants={itemVariants}
         >
           {achievements.map((achievement, index) => {
             const IconComponent = achievement.icon
             return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 40, rotateY: -10 }}
                 whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                 transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                 whileHover={{ 
                   y: -12, 
                   rotateY: 5,
                   scale: 1.02
                 }}
                 className="group preserve-3d"
               >
                 <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm">
                   {/* Gradient Background */}
                   <motion.div 
                     className={cn(
                       "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                       achievement.color
                     )}
                   />
                   
                   {/* Glow Effect */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className={cn(
                       "absolute -inset-2 bg-gradient-to-br blur-xl",
                       achievement.color
                     )} />
                   </div>
                   
                   <div className="relative p-6 lg:p-8 text-center">
                     <motion.div 
                       className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                       whileHover={{ rotate: 10, scale: 1.1 }}
                     >
                       <IconComponent className="w-8 h-8 text-accent" />
                     </motion.div>
                     
                     <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                       {achievement.value}
                     </div>
                     <div className="text-lg font-semibold text-foreground mb-1">
                       {achievement.label}
                     </div>
                     <div className="text-sm text-muted-foreground">
                       {achievement.subtitle}
                     </div>
                   </div>
                   
                   {/* Shine Effect */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                       initial={{ x: "-100%" }}
                       whileHover={{ x: "100%" }}
                       transition={{ duration: 0.8 }}
                       style={{ transform: "skewX(-15deg)" }}
                     />
                   </div>
                 </Card>
               </motion.div>
             )
           })}
         </motion.div>

         {/* Final CTA */}
         <motion.div 
           className="text-center"
           variants={itemVariants}
         >
           <motion.div
             className="inline-flex items-center gap-4 px-8 py-4 bg-card/60 backdrop-blur-xl border border-accent/20 rounded-2xl"
             whileHover={{ scale: 1.02 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
           >
             <div className="flex -space-x-2">
               {[...Array(4)].map((_, i) => (
                 <div
                   key={i}
                   className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-chart-1 border-2 border-background flex items-center justify-center text-white text-sm font-bold"
                 >
                   {String.fromCharCode(65 + i)}
                 </div>
               ))}
             </div>
             <div className="text-left">
               <div className="text-sm font-semibold text-foreground">Join 500+ Leaders</div>
               <div className="text-xs text-muted-foreground">Transform your enterprise today</div>
             </div>
             <motion.div
               whileHover={{ x: 5 }}
               transition={{ type: "spring", stiffness: 400 }}
             >
               <ArrowRight className="w-5 h-5 text-accent" />
             </motion.div>
           </motion.div>
           
           <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
             Trusted by industry leaders worldwide • 99.9% success rate • 24/7 enterprise support
           </p>
         </motion.div>
       </motion.div>
     </div>
   </section>
 )
}

export default CTA