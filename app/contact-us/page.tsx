"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MultiSelect, type Option } from '@/components/ui/multi-select'
import { 
 ArrowRight, 
 Mail, 
 Phone, 
 MapPin, 
 Clock,
 MessageCircle,
 Calendar,
 Users,
 Headphones,
 Building,
 Globe,
 CheckCircle,
 Loader2,
 Check,
 AlertCircle,
 Database,
 Smartphone,
 Code,
 BarChart3,
 Cpu,
 Lock,
 Workflow,
 Settings,
 Palette,
 Monitor,
 Cloud,
 Bot,
 Shield,
 Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useCallback } from 'react'

const ContactUs = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   company: '',
   phone: '',
   subject: '',
   message: '',
   services: [] as string[]
 })

 const [formState, setFormState] = useState({
   isSubmitting: false,
   isSubmitted: false,
   errors: {} as Record<string, string>
 })

 const [focusedField, setFocusedField] = useState('')

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
     transition: { 
       duration: 0.6, 
       ease: [0.25, 0.25, 0.25, 0.75]
     }
   }
 }

 const contactMethods = [
   {
     icon: Phone,
     title: "Call Us",
     subtitle: "Speak with our experts",
     content: "+1 (555) 123-4567",
     action: "Call Now",
     color: "from-green-500 to-emerald-500",
     availability: "24/7 Enterprise Support"
   },
   {
     icon: Mail,
     title: "Email Us",
     subtitle: "Send us a message",
     content: "hello@nexustech.com",
     action: "Send Email",
     color: "from-blue-500 to-cyan-500",
     availability: "Response within 2 hours"
   },
   {
     icon: Calendar,
     title: "Book a Meeting",
     subtitle: "Schedule consultation",
     content: "Choose your time",
     action: "Schedule Now",
     color: "from-purple-500 to-pink-500",
     availability: "Free 30-min consultation"
   },
   {
     icon: MessageCircle,
     title: "Live Chat",
     subtitle: "Instant support",
     content: "Chat with us now",
     action: "Start Chat",
     color: "from-orange-500 to-red-500",
     availability: "Online now"
   }
 ]

 const offices = [
   {
     city: "San Francisco",
     country: "USA",
     address: "100 California Street, Suite 500",
     phone: "+1 (555) 123-4567",
     email: "usa@nexustech.com",
     timezone: "PST (UTC-8)",
     isHeadquarters: true
   },
   {
     city: "London",
     country: "UK",
     address: "25 Old Broad Street, EC2N 1HN",
     phone: "+44 20 7123 4567",
     email: "uk@nexustech.com",
     timezone: "GMT (UTC+0)"
   },
   {
     city: "Singapore",
     country: "Singapore",
     address: "1 Raffles Place, #40-61",
     phone: "+65 6123 4567",
     email: "sg@nexustech.com",
     timezone: "SGT (UTC+8)"
   },
   {
     city: "Sydney",
     country: "Australia",
     address: "Level 25, 100 Miller Street",
     phone: "+61 2 1234 5678",
     email: "au@nexustech.com",
     timezone: "AEDT (UTC+11)"
   }
 ]

 const serviceOptions: Option[] = [
   { value: "cloud-infrastructure", label: "Cloud Infrastructure", icon: Cloud },
   { value: "ai-machine-learning", label: "AI & Machine Learning", icon: Bot },
   { value: "devops-automation", label: "DevOps & Automation", icon: Workflow },
   { value: "enterprise-security", label: "Enterprise Security", icon: Shield },
   { value: "data-analytics", label: "Data Analytics & BI", icon: BarChart3 },
   { value: "digital-consulting", label: "Digital Transformation", icon: Settings },
   { value: "database-management", label: "Database Management", icon: Database },
   { value: "mobile-development", label: "Mobile App Development", icon: Smartphone },
   { value: "web-development", label: "Web Development", icon: Code },
   { value: "infrastructure-monitoring", label: "Infrastructure Monitoring", icon: Monitor },
   { value: "performance-optimization", label: "Performance Optimization", icon: Zap },
   { value: "compliance-governance", label: "Compliance & Governance", icon: Lock },
   { value: "ui-ux-design", label: "UI/UX Design", icon: Palette },
   { value: "system-integration", label: "System Integration", icon: Cpu }
 ]

 const supportTypes = [
   { icon: Building, title: "Enterprise Sales", desc: "Large-scale implementations" },
   { icon: Users, title: "Technical Support", desc: "24/7 expert assistance" },
   { icon: Headphones, title: "Customer Success", desc: "Ongoing partnership" },
   { icon: Globe, title: "Global Partnerships", desc: "Strategic alliances" }
 ]

 const validateField = useCallback((name: string, value: string) => {
   const errors: Record<string, string> = {}
   
   switch (name) {
     case 'name':
       if (!value.trim()) errors.name = 'Name is required'
       else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters'
       break
     case 'email':
       if (!value.trim()) errors.email = 'Email is required'
       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email'
       break
     case 'subject':
       if (!value.trim()) errors.subject = 'Please select a subject'
       break
     case 'message':
       if (!value.trim()) errors.message = 'Message is required'
       else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters'
       break
     case 'phone':
       if (value && !/^[\+]?[1-9][\d\s\(\)\-\.]{8,}$/.test(value)) {
         errors.phone = 'Please enter a valid phone number'
       }
       break
   }
   
   return errors
 }, [])

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
   const { name, value } = e.target
   
   setFormData(prev => ({
     ...prev,
     [name]: value
   }))
   
   // Clear errors for this field and validate
   const fieldErrors = validateField(name, value)
   setFormState(prev => ({
     ...prev,
     errors: {
       ...prev.errors,
       [name]: fieldErrors[name] || undefined
     }
   }))
 }


 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
   
   // Validate all fields
   const allErrors: Record<string, string> = {}
   Object.entries(formData).forEach(([key, value]) => {
     if (key !== 'services') {
       const fieldErrors = validateField(key, value as string)
       Object.assign(allErrors, fieldErrors)
     }
   })
   
   if (Object.keys(allErrors).length > 0) {
     setFormState(prev => ({ ...prev, errors: allErrors }))
     return
   }
   
   setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }))
   
   try {
     // Simulate API call
     await new Promise(resolve => setTimeout(resolve, 2000))
     
     setFormState(prev => ({
       ...prev,
       isSubmitting: false,
       isSubmitted: true
     }))
     
     // Reset form after success
     setTimeout(() => {
       setFormData({
         name: '',
         email: '',
         company: '',
         phone: '',
         subject: '',
         message: '',
         services: []
       })
       setFormState({
         isSubmitting: false,
         isSubmitted: false,
         errors: {}
       })
     }, 3000)
     
   } catch (error) {
     setFormState(prev => ({
       ...prev,
       isSubmitting: false,
       errors: { submit: 'Failed to send message. Please try again.' }
     }))
   }
 }

 return (
   <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
     {/* Hero Section */}
     <section className="relative py-20 lg:py-32 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-1/5 rounded-full blur-3xl" />
       </div>

       <div className="section-container relative z-10">
         <motion.div
           className="max-w-4xl mx-auto text-center"
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           <motion.div variants={itemVariants}>
             <Badge 
               variant="secondary" 
               className="bg-accent/10 text-accent hover:bg-accent/20 px-6 py-3 text-sm font-semibold border border-accent/20 rounded-full mb-8"
             >
               Contact Nexus
             </Badge>
           </motion.div>

           <motion.h1 
             className="heading-hero mb-8 text-balance"
             variants={itemVariants}
           >
             Let's Transform Your
             <span className="block gradient-text mt-2">
               Enterprise Together
             </span>
           </motion.h1>

           <motion.p 
             className="text-lead max-w-3xl mx-auto mb-12"
             variants={itemVariants}
           >
             Ready to accelerate your digital transformation? Our enterprise technology experts 
             are here to help you build solutions that drive real business results.
           </motion.p>

           <motion.div 
             className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
             variants={itemVariants}
           >
             {[
               "Free consultation",
               "Response within 2 hours",
               "Enterprise-grade security",
               "Global support"
             ].map((feature, index) => (
               <div key={index} className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-accent" />
                 <span>{feature}</span>
               </div>
             ))}
           </motion.div>
         </motion.div>
       </div>
     </section>

     {/* Contact Methods */}
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
               Get in <span className="gradient-text">Touch</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               Choose the way that works best for you to connect with our team
             </p>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             {contactMethods.map((method, index) => {
               const IconComponent = method.icon
               return (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   whileHover={{ y: -8, scale: 1.02 }}
                 >
                   <Card className="enterprise-card enterprise-card-hover p-6 lg:p-8 h-full group text-center cursor-pointer">
                     <motion.div 
                       className="w-16 h-16 mx-auto rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors"
                       whileHover={{ rotate: 5, scale: 1.1 }}
                     >
                       <IconComponent className="w-8 h-8 text-accent" />
                     </motion.div>
                     
                     <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                       {method.title}
                     </h3>
                     <p className="text-sm text-muted-foreground mb-4">
                       {method.subtitle}
                     </p>
                     <p className="font-semibold text-foreground mb-4">
                       {method.content}
                     </p>
                     <p className="text-xs text-accent mb-6">
                       {method.availability}
                     </p>
                     
                     <Button 
                       size="sm" 
                       className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                     >
                       {method.action}
                       <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                     
                     <div className="accent-border absolute top-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                   </Card>
                 </motion.div>
               )
             })}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Contact Form & Support Types */}
     <section className="py-16 lg:py-24 bg-muted/20">
       <div className="section-container">
         <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <Card className="enterprise-card p-8 lg:p-10">
               <h3 className="heading-card mb-6">Send us a Message</h3>
               <p className="text-muted-foreground mb-8">
                 Fill out the form below and our team will get back to you within 2 hours.
               </p>

               {formState.isSubmitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-12"
                 >
                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Check className="w-8 h-8 text-green-600" />
                   </div>
                   <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                   <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   {formState.errors.submit && (
                     <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                       <AlertCircle className="w-5 h-5" />
                       <span className="text-sm">{formState.errors.submit}</span>
                     </div>
                   )}
                   
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="relative">
                       <input
                         type="text"
                         name="name"
                         required
                         value={formData.name}
                         onChange={handleInputChange}
                         onFocus={() => setFocusedField('name')}
                         onBlur={() => setFocusedField('')}
                         className={cn(
                           "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-200 peer placeholder-transparent focus:outline-none focus:ring-2",
                           formState.errors.name 
                             ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" 
                             : "border-border focus:ring-accent/50 focus:border-accent"
                         )}
                         placeholder="Your full name"
                       />
                       <label className={cn(
                         "absolute left-4 transition-all duration-200 pointer-events-none",
                         formData.name || focusedField === 'name'
                           ? "-top-2 text-xs bg-background px-1 text-accent"
                           : "top-3 text-sm text-muted-foreground"
                       )}>
                         Name *
                       </label>
                       {formState.errors.name && (
                         <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                           <AlertCircle className="w-3 h-3" />
                           {formState.errors.name}
                         </p>
                       )}
                     </div>
                     
                     <div className="relative">
                       <input
                         type="email"
                         name="email"
                         required
                         value={formData.email}
                         onChange={handleInputChange}
                         onFocus={() => setFocusedField('email')}
                         onBlur={() => setFocusedField('')}
                         className={cn(
                           "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-200 peer placeholder-transparent focus:outline-none focus:ring-2",
                           formState.errors.email 
                             ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" 
                             : "border-border focus:ring-accent/50 focus:border-accent"
                         )}
                         placeholder="your.email@company.com"
                       />
                       <label className={cn(
                         "absolute left-4 transition-all duration-200 pointer-events-none",
                         formData.email || focusedField === 'email'
                           ? "-top-2 text-xs bg-background px-1 text-accent"
                           : "top-3 text-sm text-muted-foreground"
                       )}>
                         Email *
                       </label>
                       {formState.errors.email && (
                         <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                           <AlertCircle className="w-3 h-3" />
                           {formState.errors.email}
                         </p>
                       )}
                     </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="relative">
                       <input
                         type="text"
                         name="company"
                         value={formData.company}
                         onChange={handleInputChange}
                         onFocus={() => setFocusedField('company')}
                         onBlur={() => setFocusedField('')}
                         className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                         placeholder="Your company name"
                       />
                       <label className={cn(
                         "absolute left-4 transition-all duration-200 pointer-events-none",
                         formData.company || focusedField === 'company'
                           ? "-top-2 text-xs bg-background px-1 text-accent"
                           : "top-3 text-sm text-muted-foreground"
                       )}>
                         Company
                       </label>
                     </div>
                     
                     <div className="relative">
                       <input
                         type="tel"
                         name="phone"
                         value={formData.phone}
                         onChange={handleInputChange}
                         onFocus={() => setFocusedField('phone')}
                         onBlur={() => setFocusedField('')}
                         className={cn(
                           "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2",
                           formState.errors.phone 
                             ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" 
                             : "border-border focus:ring-accent/50 focus:border-accent"
                         )}
                         placeholder="+1 (555) 123-4567"
                       />
                       <label className={cn(
                         "absolute left-4 transition-all duration-200 pointer-events-none",
                         formData.phone || focusedField === 'phone'
                           ? "-top-2 text-xs bg-background px-1 text-accent"
                           : "top-3 text-sm text-muted-foreground"
                       )}>
                         Phone
                       </label>
                       {formState.errors.phone && (
                         <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                           <AlertCircle className="w-3 h-3" />
                           {formState.errors.phone}
                         </p>
                       )}
                     </div>
                   </div>

                   <div className="relative">
                     <Select 
                       value={formData.subject} 
                       onValueChange={(value) => {
                         setFormData(prev => ({ ...prev, subject: value }))
                         // Clear errors for this field and validate
                         const fieldErrors = validateField('subject', value)
                         setFormState(prev => ({
                           ...prev,
                           errors: {
                             ...prev.errors,
                             subject: fieldErrors.subject || undefined
                           }
                         }))
                       }}
                     >
                       <SelectTrigger 
                         className={cn(
                           "w-full h-12 px-4 rounded-lg border bg-background transition-all duration-200 focus:outline-none focus:ring-2",
                           formState.errors.subject 
                             ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" 
                             : "border-border focus:ring-accent/50 focus:border-accent"
                         )}
                         onFocus={() => setFocusedField('subject')}
                         onBlur={() => setFocusedField('')}
                       >
                         <SelectValue placeholder="Select a subject" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="consultation">Free Consultation</SelectItem>
                         <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                         <SelectItem value="support">Technical Support</SelectItem>
                         <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                         <SelectItem value="other">Other</SelectItem>
                       </SelectContent>
                     </Select>
                     <label className={cn(
                       "absolute left-4 transition-all duration-200 pointer-events-none",
                       formData.subject || focusedField === 'subject'
                         ? "-top-2 text-xs bg-background px-1 text-accent"
                         : "top-3 text-sm text-muted-foreground"
                     )}>
                       Subject *
                     </label>
                     {formState.errors.subject && (
                       <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                         <AlertCircle className="w-3 h-3" />
                         {formState.errors.subject}
                       </p>
                     )}
                   </div>

                   <div className="relative">
                     <label className="block text-sm font-medium text-foreground mb-2">
                       Services of Interest
                     </label>
                     <MultiSelect
                       options={serviceOptions}
                       selected={formData.services}
                       onChange={(selected) => {
                         setFormData(prev => ({ ...prev, services: selected }))
                       }}
                       placeholder="Select services you're interested in..."
                       className={cn(
                         "w-full min-h-12 px-4 rounded-lg border bg-background transition-all duration-200 focus:outline-none focus:ring-2",
                         "border-border focus:ring-accent/50 focus:border-accent"
                       )}
                       maxCount={2}
                     />
                     <p className="mt-1 text-xs text-muted-foreground">
                       Select all services that apply to your project
                     </p>
                   </div>

                   <div className="relative">
                     <textarea
                       name="message"
                       required
                       rows={5}
                       value={formData.message}
                       onChange={handleInputChange}
                       onFocus={() => setFocusedField('message')}
                       onBlur={() => setFocusedField('')}
                       className={cn(
                         "w-full px-4 py-3 rounded-lg border bg-background transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2 resize-none",
                         formState.errors.message 
                           ? "border-red-500 focus:ring-red-500/50 focus:border-red-500" 
                           : "border-border focus:ring-accent/50 focus:border-accent"
                       )}
                       placeholder="Tell us about your project requirements, challenges, or questions..."
                     />
                     <label className={cn(
                       "absolute left-4 transition-all duration-200 pointer-events-none",
                       formData.message || focusedField === 'message'
                         ? "-top-2 text-xs bg-background px-1 text-accent"
                         : "top-3 text-sm text-muted-foreground"
                     )}>
                       Message *
                     </label>
                     {formState.errors.message && (
                       <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                         <AlertCircle className="w-3 h-3" />
                         {formState.errors.message}
                       </p>
                     )}
                   </div>

                   <Button 
                     type="submit"
                     size="lg" 
                     disabled={formState.isSubmitting}
                     className="w-full enterprise-button h-12 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {formState.isSubmitting ? (
                       <>
                         <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                         Sending Message...
                       </>
                     ) : (
                       <>
                         Send Message
                         <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                       </>
                     )}
                   </Button>
                 </form>
               )}
             </Card>
           </motion.div>

           {/* Support Types & Info */}
           <motion.div
             className="space-y-8"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
           >
             <div>
               <h3 className="heading-card mb-6">How Can We Help?</h3>
               <div className="space-y-4">
                 {supportTypes.map((type, index) => {
                   const IconComponent = type.icon
                   return (
                     <motion.div
                       key={index}
                       className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                       whileHover={{ x: 5 }}
                     >
                       <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                         <IconComponent className="w-6 h-6 text-accent" />
                       </div>
                       <div>
                         <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                         <p className="text-sm text-muted-foreground">{type.desc}</p>
                       </div>
                     </motion.div>
                   )
                 })}
               </div>
             </div>

             <Card className="enterprise-card p-6 lg:p-8">
               <div className="flex items-center gap-3 mb-4">
                 <Clock className="w-6 h-6 text-accent" />
                 <h4 className="text-lg font-semibold">Response Times</h4>
               </div>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Enterprise Inquiries</span>
                   <span className="font-medium">Within 1 hour</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">General Inquiries</span>
                   <span className="font-medium">Within 2 hours</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Technical Support</span>
                   <span className="font-medium">24/7 availability</span>
                 </div>
               </div>
             </Card>

             <Card className="enterprise-card p-6 lg:p-8">
               <h4 className="text-lg font-semibold mb-4">Emergency Support</h4>
               <p className="text-sm text-muted-foreground mb-4">
                 For critical issues requiring immediate attention, our enterprise clients can reach our emergency hotline:
               </p>
               <div className="text-center">
                 <div className="text-2xl font-bold text-accent mb-1">+1 (555) 911-HELP</div>
                 <div className="text-xs text-muted-foreground">Available 24/7 for enterprise clients</div>
               </div>
             </Card>
           </motion.div>
         </div>
       </div>
     </section>

     {/* Global Offices */}
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
               Global <span className="gradient-text">Presence</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               With offices across four continents, we provide local expertise with global capabilities
             </p>
           </motion.div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             {offices.map((office, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 whileHover={{ y: -5 }}
               >
                 <Card className={cn(
                   "enterprise-card enterprise-card-hover p-6 lg:p-8 h-full relative",
                   office.isHeadquarters && "ring-2 ring-accent/20"
                 )}>
                   {office.isHeadquarters && (
                     <Badge className="absolute -top-3 left-4 bg-accent text-accent-foreground">
                       Headquarters
                     </Badge>
                   )}
                   
                   <div className="flex items-center gap-3 mb-4">
                     <MapPin className="w-6 h-6 text-accent" />
                     <div>
                       <h3 className="text-lg font-bold">{office.city}</h3>
                       <p className="text-sm text-muted-foreground">{office.country}</p>
                     </div>
                   </div>
                   
                   <div className="space-y-3 text-sm">
                     <p className="text-muted-foreground">{office.address}</p>
                     <div className="space-y-1">
                       <p className="font-medium">{office.phone}</p>
                       <p className="text-accent">{office.email}</p>
                       <p className="text-muted-foreground">{office.timezone}</p>
                     </div>
                   </div>
                 </Card>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   </div>
 )
}

export default ContactUs