"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
 ArrowRight, 
 Zap, 
 GitBranch, 
 Shield, 
 DollarSign,
 CheckCircle,
 ArrowUp,
 Gauge,
 Code,
 Workflow,
 Monitor,
 Rocket,
 Target,
 BarChart3
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

const DevOpsAutomation = () => {
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
       duration: 0.6
     }
   }
 }

 const keyBenefits = [
   { 
     icon: ArrowUp, 
     metric: "90%", 
     label: "Faster Deployments",
     description: "Automated CI/CD pipelines"
   },
   { 
     icon: Target, 
     metric: "99.5%", 
     label: "Deployment Success",
     description: "Reliable automated releases"
   },
   { 
     icon: DollarSign, 
     metric: "70%", 
     label: "Cost Reduction",
     description: "Infrastructure optimization"
   },
   { 
     icon: Gauge, 
     metric: "5x", 
     label: "Developer Velocity",
     description: "Streamlined workflows"
   }
 ]

 const solutions = [
   {
     icon: GitBranch,
     title: "CI/CD Pipeline Automation",
     description: "Complete continuous integration and deployment pipelines with automated testing, quality gates, and rollback capabilities.",
     useCases: [
       "Automated build & test pipelines",
       "Multi-environment deployments",
       "Quality gate enforcement",
       "Automated rollback strategies"
     ],
     impact: {
       deployment: "90% faster deployments",
       quality: "95% reduction in bugs",
       efficiency: "80% less manual effort"
     },
     technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"],
     color: "from-orange-500 to-red-500"
   },
   {
     icon: Code,
     title: "Infrastructure as Code",
     description: "Version-controlled, automated infrastructure provisioning with consistent environments and disaster recovery capabilities.",
     useCases: [
       "Environment provisioning",
       "Infrastructure versioning",
       "Disaster recovery automation",
       "Configuration management"
     ],
     impact: {
       provisioning: "10x faster provisioning",
       consistency: "100% environment consistency",
       recovery: "15-min disaster recovery"
     },
     technologies: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
     color: "from-blue-500 to-purple-500"
   },
   {
     icon: Monitor,
     title: "Monitoring & Observability",
     description: "Comprehensive monitoring, logging, and alerting systems with real-time insights and predictive analytics.",
     useCases: [
       "Application performance monitoring",
       "Infrastructure health tracking",
       "Log aggregation & analysis",
       "Predictive alerting"
     ],
     impact: {
       visibility: "360° system visibility",
       mttr: "75% faster issue resolution",
       uptime: "99.9% system availability"
     },
     technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
     color: "from-green-500 to-teal-500"
   },
   {
     icon: Shield,
     title: "Security & Compliance Automation",
     description: "Automated security scanning, compliance checks, and vulnerability management integrated into development workflows.",
     useCases: [
       "Security scanning automation",
       "Compliance policy enforcement",
       "Vulnerability assessment",
       "Secret management"
     ],
     impact: {
       security: "100% automated security scans",
       compliance: "Continuous compliance monitoring",
       vulnerabilities: "90% faster vulnerability fixes"
     },
     technologies: ["SonarQube", "HashiCorp Vault", "OWASP ZAP", "Snyk"],
     color: "from-red-500 to-pink-500"
   },
   {
     icon: Workflow,
     title: "Container Orchestration",
     description: "Kubernetes-based container orchestration with auto-scaling, service mesh, and advanced deployment strategies.",
     useCases: [
       "Container orchestration",
       "Auto-scaling policies",
       "Service mesh implementation",
       "Blue-green deployments"
     ],
     impact: {
       scalability: "Automatic resource scaling",
       efficiency: "60% resource optimization",
       deployment: "Zero-downtime deployments"
     },
     technologies: ["Kubernetes", "Docker", "Istio", "Helm"],
     color: "from-purple-500 to-indigo-500"
   },
   {
     icon: BarChart3,
     title: "Performance Optimization",
     description: "Application and infrastructure performance optimization with automated load testing and capacity planning.",
     useCases: [
       "Automated load testing",
       "Performance benchmarking",
       "Capacity planning",
       "Resource optimization"
     ],
     impact: {
       performance: "50% faster response times",
       capacity: "Predictive scaling",
       costs: "40% infrastructure cost savings"
     },
     technologies: ["JMeter", "K6", "New Relic", "AppDynamics"],
     color: "from-yellow-500 to-orange-500"
   }
 ]

 const caseStudyHighlights = [
   {
     company: "SaaS Platform Provider",
     challenge: "Manual deployments causing frequent outages",
     solution: "Automated CI/CD with blue-green deployments",
     results: [
       "Zero-downtime deployments achieved",
       "95% reduction in deployment failures", 
       "10x faster feature delivery"
     ]
   },
   {
     company: "E-commerce Marketplace",
     challenge: "Scaling infrastructure during peak traffic",
     solution: "Kubernetes auto-scaling with monitoring",
     results: [
       "Automatic traffic scaling",
       "60% reduction in infrastructure costs",
       "99.9% uptime during peak seasons"
     ]
   },
   {
     company: "Financial Technology",
     challenge: "Complex compliance and security requirements",
     solution: "Automated security scanning and compliance",
     results: [
       "100% automated security compliance",
       "SOC2 Type II certification",
       "80% faster security audits"
     ]
   }
 ]

 return (
    <SharedLayout>
   <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
     {/* Hero Section */}
     <section className="relative py-20 lg:py-32 overflow-hidden">
       <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
       </div>

       <div className="section-container relative z-10">
         <motion.div
           className="max-w-5xl mx-auto"
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           <motion.div 
             className="text-center mb-12"
             variants={itemVariants}
           >
             <Badge 
               variant="secondary" 
               className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 px-6 py-3 text-sm font-semibold border border-orange-500/20 rounded-full mb-8"
             >
               <Zap className="w-4 h-4 mr-2" />
               DevOps & Automation Solutions
             </Badge>

             <h1 className="heading-hero mb-8 text-balance">
               DevOps & Automation
               <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mt-2">
                 Excellence at Scale
               </span>
             </h1>

             <p className="text-lead max-w-4xl mx-auto mb-12">
               Accelerate your software delivery with enterprise-grade DevOps practices, automated pipelines, 
               and intelligent monitoring that reduce deployment time by 90% and eliminate manual errors.
             </p>
           </motion.div>

           {/* Key Benefits */}
           <motion.div 
             className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
             variants={itemVariants}
           >
             {keyBenefits.map((benefit, index) => {
               const IconComponent = benefit.icon
               return (
                 <Card key={index} className="enterprise-card enterprise-card-hover p-6 text-center group">
                   <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                   <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-orange-500 transition-colors">
                     {benefit.metric}
                   </div>
                   <div className="text-sm font-semibold text-foreground mb-1">
                     {benefit.label}
                   </div>
                   <div className="text-xs text-muted-foreground">
                     {benefit.description}
                   </div>
                 </Card>
               )
             })}
           </motion.div>

           <motion.div 
             className="flex flex-col sm:flex-row gap-6 justify-center"
             variants={itemVariants}
           >
             <Button 
               size="xl" 
               className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-12 text-lg group"
             >
               Get DevOps Assessment
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button 
               variant="outline" 
               size="xl"
               className="border-2 border-orange-500/30 hover:border-orange-500 hover:text-orange-500 h-14 px-12 text-lg"
             >
               View Success Stories
             </Button>
           </motion.div>
         </motion.div>
       </div>
     </section>

     {/* Solutions Grid */}
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
               Complete <span className="gradient-text">DevOps Ecosystem</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               End-to-end DevOps and automation solutions that transform your development lifecycle
             </p>
           </motion.div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             {solutions.map((solution, index) => {
               const IconComponent = solution.icon
               return (
                 <motion.div
                   key={index}
                   variants={itemVariants}
                   whileHover={{ y: -5 }}
                 >
                   <Card className="enterprise-card enterprise-card-hover p-8 lg:p-10 h-full group">
                     <div className="flex items-start gap-6 mb-6">
                       <motion.div 
                         className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors flex-shrink-0"
                         whileHover={{ rotate: 5, scale: 1.1 }}
                       >
                         <IconComponent className="w-8 h-8 text-orange-500" />
                       </motion.div>
                       <div className="flex-1">
                         <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                           {solution.title}
                         </h3>
                         <p className="text-muted-foreground leading-relaxed">
                           {solution.description}
                         </p>
                       </div>
                     </div>

                     {/* Use Cases */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                         Key Capabilities
                       </h4>
                       <div className="grid grid-cols-2 gap-2">
                         {solution.useCases.map((useCase, idx) => (
                           <div key={idx} className="flex items-center gap-2 text-sm">
                             <CheckCircle className="w-3 h-3 text-orange-500 flex-shrink-0" />
                             <span className="text-muted-foreground">{useCase}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Impact Metrics */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                         Performance Impact
                       </h4>
                       <div className="grid grid-cols-1 gap-2">
                         {Object.entries(solution.impact).map(([key, value], idx) => (
                           <div key={idx} className="flex items-center justify-between text-sm">
                             <span className="text-muted-foreground capitalize">{key}:</span>
                             <span className="font-semibold text-orange-500">{value}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Technologies */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                         Core Technologies
                       </h4>
                       <div className="flex flex-wrap gap-2">
                         {solution.technologies.map((tech, idx) => (
                           <Badge 
                             key={idx} 
                             variant="secondary" 
                             className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 text-xs"
                           >
                             {tech}
                           </Badge>
                         ))}
                       </div>
                     </div>

                     {/* CTA */}
                     <Button 
                       className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors group border border-orange-500/20"
                       variant="outline"
                     >
                       Explore Solution
                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>

                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                   </Card>
                 </motion.div>
               )
             })}
           </div>
         </motion.div>
       </div>
     </section>

     {/* Case Study Highlights */}
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
               Transformation <span className="gradient-text">Success Stories</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               Real DevOps transformations that delivered measurable business impact
             </p>
           </motion.div>

           <div className="grid lg:grid-cols-3 gap-8">
             {caseStudyHighlights.map((study, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 whileHover={{ y: -5 }}
               >
                 <Card className="enterprise-card enterprise-card-hover p-8 h-full group">
                   <h3 className="text-lg font-bold mb-4 group-hover:text-orange-500 transition-colors">
                     {study.company}
                   </h3>
                   
                   <div className="mb-4">
                     <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                       Challenge
                     </h4>
                     <p className="text-sm text-muted-foreground">
                       {study.challenge}
                     </p>
                   </div>

                   <div className="mb-6">
                     <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                       Solution
                     </h4>
                     <p className="text-sm text-muted-foreground">
                       {study.solution}
                     </p>
                   </div>

                   <div>
                     <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                       Results
                     </h4>
                     <div className="space-y-2">
                       {study.results.map((result, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-sm">
                           <Rocket className="w-3 h-3 text-green-500 flex-shrink-0" />
                           <span className="text-muted-foreground">{result}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   <div className="accent-border absolute top-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                 </Card>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>

     {/* CTA Section */}
     <section className="py-16 lg:py-24">
       <div className="section-container">
         <motion.div
           className="max-w-4xl mx-auto text-center"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
         >
           <h2 className="heading-section mb-6">
             Ready to Accelerate Your <span className="gradient-text">Development Velocity</span>?
           </h2>
           
           <p className="text-lead mb-12">
             Get a comprehensive DevOps maturity assessment and discover how automated pipelines 
             can transform your software delivery process.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
             <Button 
               size="xl" 
               className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-12 text-lg group"
             >
               Get DevOps Assessment
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button 
               variant="outline" 
               size="xl"
               className="border-2 border-orange-500/30 hover:border-orange-500 hover:text-orange-500 h-14 px-12 text-lg"
             >
               Book Strategy Session
             </Button>
           </div>

           <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
             {[
               "Free maturity assessment",
               "Custom automation roadmap",
               "ROI calculation included",
               "No long-term commitment"
             ].map((feature, index) => (
               <div key={index} className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-orange-500" />
                 <span>{feature}</span>
               </div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   </div>
   </SharedLayout>
 )
}

export default DevOpsAutomation