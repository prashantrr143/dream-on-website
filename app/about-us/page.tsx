"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, Award, Globe, Target, Heart, Lightbulb, Shield, Rocket, ArrowLeft, Sparkles, Bot, Zap, BarChart3, Cloud, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'
import Image from 'next/image'
import SharedLayout from '@/components/shared-layout'

const AboutUs = () => {
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
   hidden: { opacity: 0, y: 30 },
   visible: { 
     opacity: 1, 
     y: 0,
   }
 }


 const values = [
   {
     icon: Lightbulb,
     title: "Innovation",
     description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business transformation.",
     color: "from-yellow-500 to-orange-500"
   },
   {
     icon: Shield,
     title: "Trust",
     description: "Security and reliability are at the core of everything we do. We protect your data and business like our own.",
     color: "from-green-500 to-emerald-500"
   },
   {
     icon: Heart,
     title: "Excellence",
     description: "We're committed to delivering exceptional quality in every project, exceeding expectations at every turn.",
     color: "from-red-500 to-pink-500"
   },
   {
     icon: Rocket,
     title: "Growth",
     description: "We partner with you for long-term success, scaling solutions as your business grows and evolves.",
     color: "from-purple-500 to-indigo-500"
   }
 ]

 const team = [
   {
     name: "Ruchika Raturi",
     role: "Chief Executive Officer",
     bio: "Visionary leader with 14+ years of transformational experience across global financial services and telecommunications sectors. Drives enterprise growth through strategic innovation, risk management excellence, and market expansion. Led multi-million dollar business units while pioneering customer-centric solutions that deliver measurable results.",
     image: "/ruchika.jpeg"
   },
   {
     name: "Jyoti Mishra",
     role: "Chief Human Resources Officer",
     bio: "Strategic HR executive with 8+ years of building world-class organizations through innovative talent strategies and cultural transformation. Specializes in scaling high-performance teams, driving employee engagement, and implementing cutting-edge HR technologies that enable business growth and operational excellence."
   }
 ]

 const milestones = [
   { year: "2024", title: "Company Founded", description: "Started with a vision to transform enterprise technology and deliver cutting-edge solutions" },
   { year: "2024", title: "Leadership Team Established", description: "Assembled world-class executive team with decades of combined industry experience" },
   { year: "2024", title: "Technology Platform Launch", description: "Deployed advanced AI-driven enterprise solutions and cloud infrastructure capabilities" },
   { year: "2024", title: "Strategic Partnerships", description: "Secured key technology partnerships with leading cloud providers and innovation labs" },
   { year: "2025", title: "Market Expansion", description: "Scaling operations and expanding enterprise client portfolio across multiple industries" },
   { year: "2025", title: "Innovation Roadmap", description: "Continuing to pioneer next-generation solutions in AI, cloud, and digital transformation" }
 ]

 return (
   <SharedLayout>
     {/* Hero Section */}
     <section className="relative overflow-hidden" style={{ padding: 'clamp(6rem, 12vh, 8rem) 0 clamp(4rem, 8vh, 6rem) 0' }}>
       {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
         <div className="absolute inset-0 opacity-[0.02] grid-pattern" />
       </div>

       <div className="section-container relative z-10">
         <motion.div
           className="max-w-4xl"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
         >
           <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
             <ArrowLeft className="w-4 h-4" />
             Back to Home
           </Link>
           
           <Badge 
             variant="secondary" 
             className="glass-card rounded-full mb-6"
             style={{
               padding: 'clamp(0.5rem, 1vh, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
               fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
             }}
           >
             <Sparkles className="w-4 h-4 mr-2" />
             About Yati Sphere Technologies
           </Badge>
           
           <h1 
             className="leading-tight text-balance font-heading mb-6"
             style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
           >
             <AnimatedText
               text="Transforming Enterprise "
               animation="splitWords"
               className="inline-block"
               stagger={0.15}
             />
             <AnimatedText
               text="Technology Worldwide"
               animation="splitChars"
               className="gradient-text animate-text-shimmer inline-block font-display"
               delay={0.8}
               stagger={0.1}
             />
           </h1>
           
           <p 
             className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
             style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)' }}
           >
             Since our founding, we've rapidly established ourselves at the forefront of enterprise technology transformation, 
             helping Fortune 500 companies leverage cutting-edge solutions including AI, cloud infrastructure, 
             and digital innovation to drive growth and competitive advantage.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 mb-8">
             <Button 
               size="lg" 
               className="enterprise-button text-white font-semibold group"
               style={{
                 padding: 'clamp(1rem, 2vh, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                 fontSize: 'clamp(1rem, 2vw, 1.125rem)'
               }}
             >
               <span className="flex items-center gap-2">
                 Our Story
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
               </span>
             </Button>
             <Link href="/case-studies">
               <Button 
                 variant="outline" 
                 size="lg"
                 className="border-2 border-foreground/20 hover:border-blue-400/60 hover:bg-blue-400/5 text-foreground hover:text-blue-400 font-semibold"
                 style={{
                   padding: 'clamp(1rem, 2vh, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                   fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                 }}
               >
                 View Case Studies
               </Button>
             </Link>
           </div>

           {/* Key Highlights */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
             {[
               { value: "500+", label: "Enterprise Clients" },
               { value: "99.9%", label: "Success Rate" },
               { value: "40+", label: "Countries" },
               { value: "10+", label: "Years Experience" }
             ].map((stat, index) => (
               <motion.div
                 key={index}
                 className="text-center"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 + 1.2 }}
               >
                 <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                 <div className="text-sm text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Expertise Section */}
     <section className="relative py-16">
       <div className="section-container">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="max-w-6xl mx-auto"
         >
           <div className="text-center mb-12">
             <h2 className="text-2xl font-bold text-foreground mb-4">
               Our <span className="gradient-text">Expertise</span>
             </h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
               Comprehensive technology solutions across every aspect of enterprise transformation
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               {
                 icon: Bot,
                 title: "Generative AI & Automation",
                 description: "Enterprise AI assistants, automated workflows, and intelligent systems",
                 color: "text-violet-500",
                 bgColor: "bg-violet-500/10"
               },
               {
                 icon: Cloud,
                 title: "Cloud Infrastructure",
                 description: "Multi-cloud architecture, migration, and optimization services",
                 color: "text-blue-500",
                 bgColor: "bg-blue-500/10"
               },
               {
                 icon: Shield,
                 title: "Cybersecurity",
                 description: "Zero-trust architecture, threat detection, and compliance solutions",
                 color: "text-green-500",
                 bgColor: "bg-green-500/10"
               },
               {
                 icon: Zap,
                 title: "DevOps Engineering",
                 description: "CI/CD pipelines, infrastructure automation, and deployment strategies",
                 color: "text-orange-500",
                 bgColor: "bg-orange-500/10"
               },
               {
                 icon: BarChart3,
                 title: "Data Intelligence",
                 description: "Real-time analytics, business intelligence, and predictive modeling",
                 color: "text-cyan-500",
                 bgColor: "bg-cyan-500/10"
               },
               {
                 icon: Target,
                 title: "Digital Strategy",
                 description: "Innovation frameworks, digital transformation, and strategic consulting",
                 color: "text-purple-500",
                 bgColor: "bg-purple-500/10"
               }
             ].map((service, index) => {
               const IconComponent = service.icon
               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -4 }}
                   className="group"
                 >
                   <div className="glass-card h-full p-6 rounded-xl hover:border-blue-400/30 transition-all duration-300">
                     <div className="space-y-4">
                       <div className={cn("rounded-lg p-3 w-fit", service.bgColor)}>
                         <IconComponent className={cn("w-6 h-6", service.color)} />
                       </div>
                       <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                         {service.title}
                       </h3>
                       <p className="text-muted-foreground leading-relaxed">
                         {service.description}
                       </p>
                     </div>
                   </div>
                 </motion.div>
               )
             })}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Company Achievements */}
     <section className="relative py-16 bg-muted/20">
       <div className="section-container">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="max-w-6xl mx-auto"
         >
           <div className="text-center mb-12">
             <h2 className="text-2xl font-bold text-foreground mb-4">
               Industry <span className="gradient-text">Recognition</span>
             </h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
               Certified expertise and trusted partnerships with leading technology providers
             </p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 title: "AWS Advanced Partner",
                 description: "Advanced tier partnership with specialized competencies",
                 icon: CheckCircle
               },
               {
                 title: "Microsoft Gold Partner",
                 description: "Gold-level partnership across multiple solution areas",
                 icon: Award
               },
               {
                 title: "SOC 2 Type II",
                 description: "Independently audited security and availability controls",
                 icon: Shield
               },
               {
                 title: "ISO 27001 Certified",
                 description: "Information security management system certification",
                 icon: Globe
               }
             ].map((achievement, index) => {
               const IconComponent = achievement.icon
               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   viewport={{ once: true }}
                   className="text-center"
                 >
                   <div className="glass-card p-6 rounded-xl hover:border-blue-400/30 transition-all duration-300">
                     <div className="bg-blue-500/10 rounded-lg p-3 w-fit mx-auto mb-4">
                       <IconComponent className="w-6 h-6 text-blue-500" />
                     </div>
                     <h3 className="text-lg font-semibold text-foreground mb-2">
                       {achievement.title}
                     </h3>
                     <p className="text-sm text-muted-foreground">
                       {achievement.description}
                     </p>
                   </div>
                 </motion.div>
               )
             })}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Mission & Vision */}
     <section className="py-16 lg:py-24">
       <div className="section-container">
         <motion.div
           className="max-w-6xl mx-auto"
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.div 
             className="text-center mb-16"
             variants={itemVariants}
           >
             <h2 className="heading-section mb-6">
               Our <span className="gradient-text">Mission</span>
             </h2>
             <p className="text-lead max-w-4xl mx-auto">
               To empower enterprises with innovative technology solutions that drive digital transformation, 
               enhance operational efficiency, and create sustainable competitive advantages in an increasingly digital world.
             </p>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             <motion.div variants={itemVariants}>
               <Card className="enterprise-card enterprise-card-hover p-8 lg:p-10 h-full">
                 <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                   <Target className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="heading-card mb-4">Our Vision</h3>
                 <p className="text-body leading-relaxed">
                   To be the global leader in enterprise technology transformation, 
                   recognized for our innovation, expertise, and unwavering commitment 
                   to client success across all industries and markets.
                 </p>
               </Card>
             </motion.div>

             <motion.div variants={itemVariants}>
               <Card className="enterprise-card enterprise-card-hover p-8 lg:p-10 h-full">
                 <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                   <Globe className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="heading-card mb-4">Global Impact</h3>
                 <p className="text-body leading-relaxed">
                   With operations across 40+ countries and partnerships with leading 
                   technology providers, we deliver consistent, high-quality solutions 
                   that drive measurable business outcomes worldwide.
                 </p>
               </Card>
             </motion.div>
           </div>
         </motion.div>
       </div>
     </section>

     {/* Values */}
     <section className="py-16 lg:py-24">
       <div className="section-container">
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.div 
             className="text-center mb-16"
             variants={itemVariants}
           >
             <h2 className="heading-section mb-6">
               Our <span className="gradient-text">Values</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               These core values guide every decision we make and every solution we deliver
             </p>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             {values.map((value, index) => {
               const IconComponent = value.icon
               return (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   whileHover={{ y: -8, scale: 1.02 }}
                 >
                   <Card className="enterprise-card enterprise-card-hover p-6 lg:p-8 h-full group text-center">
                     <motion.div 
                       className="w-16 h-16 mx-auto rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors"
                       whileHover={{ rotate: 5, scale: 1.1 }}
                     >
                       <IconComponent className="w-6 h-6 text-accent" />
                     </motion.div>
                     <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                       {value.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed">
                       {value.description}
                     </p>
                     <div className="accent-border absolute top-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                   </Card>
                 </motion.div>
               )
             })}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Leadership Team */}
     <section className="py-16 lg:py-24 bg-muted/20">
       <div className="section-container">
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.div 
             className="text-center mb-16"
             variants={itemVariants}
           >
             <h2 className="heading-section mb-6">
               Leadership <span className="gradient-text">Team</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               Meet the visionary leaders driving our mission forward
             </p>
           </motion.div>

           <div className="space-y-16">
             {team.map((member, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-12 lg:gap-16`}
               >
                 {/* Executive Photo Section */}
                 <div className="flex-shrink-0">
                   <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                     {member.image ? (
                       <div className="relative w-full h-full group/image">
                         {/* Premium border with animated gradient */}
                         <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-1 animate-gradient-shift">
                           <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                             <Image
                               src={member.image}
                               alt={member.name}
                               width={256}
                               height={256}
                               className="w-full h-full object-cover object-center transition-all duration-500 group-hover/image:scale-105 filter saturate-110"
                               priority
                             />
                           </div>
                         </div>
                         {/* Executive overlay */}
                         <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                         {/* Premium shadow */}
                         <div className="absolute inset-0 rounded-2xl shadow-2xl group-hover/image:shadow-3xl group-hover/image:shadow-primary/20 transition-all duration-500" />
                       </div>
                     ) : (
                       <div className="relative w-full h-full group/image">
                         <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-1 animate-gradient-shift">
                           <div className="w-full h-full rounded-2xl bg-gradient-to-br from-muted to-background flex items-center justify-center text-4xl font-bold text-primary group-hover/image:text-accent transition-colors duration-500">
                             {member.name.split(' ').map(n => n[0]).join('')}
                           </div>
                         </div>
                         <div className="absolute inset-0 rounded-2xl shadow-2xl group-hover/image:shadow-3xl group-hover/image:shadow-accent/20 transition-all duration-500" />
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Executive Information Section */}
                 <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'} text-center lg:space-y-6`}>
                   <div className="space-y-4 mb-8">
                     {/* Executive Badge */}
                     <motion.div 
                       className={`inline-flex items-center px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm tracking-wide uppercase ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}
                       whileHover={{ scale: 1.05 }}
                     >
                       C-Suite Executive
                     </motion.div>
                     
                     {/* Name & Title */}
                     <h3 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                       {member.name}
                     </h3>
                     <div className="text-xl lg:text-2xl text-accent font-semibold mb-6">
                       {member.role}
                     </div>
                   </div>

                   {/* Executive Bio */}
                   <div className="space-y-6">
                     <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                       {member.bio}
                     </p>
                     
                     {/* Executive Credentials */}
                     <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                       <div className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium text-foreground">
                         Strategic Leadership
                       </div>
                       <div className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium text-foreground">
                         Enterprise Technology
                       </div>
                       <div className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm font-medium text-foreground">
                         Global Operations
                       </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Company Timeline */}
     <section className="py-16 lg:py-24">
       <div className="section-container">
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.div 
             className="text-center mb-16"
             variants={itemVariants}
           >
             <h2 className="heading-section mb-6">
               Our <span className="gradient-text">Journey</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               Our journey of innovation, rapid growth, and enterprise transformation
             </p>
           </motion.div>

           <div className="max-w-4xl mx-auto">
             <div className="relative">
               {/* Timeline Line */}
               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 lg:left-1/2 lg:transform lg:-translate-x-0.5"></div>
               
               {milestones.map((milestone, index) => (
                 <motion.div
                   key={index}
                   className={cn(
                     "relative flex items-center mb-12 lg:mb-16",
                     index % 2 === 0 ? "lg:flex-row-reverse" : ""
                   )}
                   variants={itemVariants}
                   whileHover={{ scale: 1.02 }}
                 >
                   {/* Timeline Node */}
                   <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10"></div>
                   
                   {/* Content */}
                   <div className={cn(
                     "ml-16 lg:ml-0 lg:w-5/12",
                     index % 2 === 0 ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                   )}>
                     <Card className="enterprise-card enterprise-card-hover p-6 lg:p-8">
                       <div className="text-2xl font-bold text-accent mb-2">
                         {milestone.year}
                       </div>
                       <h3 className="text-xl font-bold mb-3">
                         {milestone.title}
                       </h3>
                       <p className="text-muted-foreground">
                         {milestone.description}
                       </p>
                     </Card>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </motion.div>
       </div>
     </section>

     {/* CTA Section */}
     <section className="py-16 lg:py-24 bg-muted/20">
       <div className="section-container">
         <motion.div
           className="max-w-4xl mx-auto text-center"
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
         >
           <motion.h2 
             className="heading-section mb-6"
             variants={itemVariants}
           >
             Ready to <span className="gradient-text">Transform</span> Together?
           </motion.h2>
           
           <motion.p 
             className="text-lead mb-12"
             variants={itemVariants}
           >
             Join hundreds of enterprise leaders who've accelerated their digital transformation with Yati Sphere.
             Let's discuss how we can drive your business forward.
           </motion.p>

           <motion.div 
             className="flex flex-col sm:flex-row gap-6 justify-center"
             variants={itemVariants}
           >
             <Link href="/contact-us">
               <Button 
                 size="xl" 
                 className="enterprise-button group h-14 px-12 text-lg"
               >
                 Start Conversation
                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
             </Link>
             <Link href="/case-studies">
               <Button 
                 variant="outline" 
                 size="xl"
                 className="border-2 hover:border-accent hover:text-accent h-14 px-12 text-lg"
               >
                 View Case Studies
               </Button>
             </Link>
           </motion.div>
         </motion.div>
       </div>
     </section>
   </SharedLayout>
 )
}

export default AboutUs