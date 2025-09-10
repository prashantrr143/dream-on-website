"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
 ArrowRight, 
 Database, 
 BarChart3, 
 Shield, 
 TrendingUp,
 DollarSign,
 CheckCircle,
 Gauge,
 Target,
 Brain,
 Workflow,
 Activity
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

const DataEngineeringAnalytics = () => {
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
     icon: TrendingUp, 
     metric: "10x", 
     label: "Faster Insights",
     description: "Real-time data processing"
   },
   { 
     icon: Target, 
     metric: "95%", 
     label: "Data Accuracy",
     description: "Quality-assured pipelines"
   },
   { 
     icon: DollarSign, 
     metric: "60%", 
     label: "Cost Optimization",
     description: "Efficient data infrastructure"
   },
   { 
     icon: Gauge, 
     metric: "24/7", 
     label: "Real-time Analytics",
     description: "Continuous data streaming"
   }
 ]

 const solutions = [
   {
     icon: Database,
     title: "Data Pipeline Engineering",
     description: "Scalable ETL/ELT pipelines with real-time data ingestion, transformation, and validation for enterprise-grade data processing.",
     useCases: [
       "Real-time data streaming",
       "Batch processing automation",
       "Data quality validation",
       "Multi-source data integration"
     ],
     impact: {
       processing: "10x faster data processing",
       reliability: "99.9% pipeline uptime",
       scalability: "Petabyte-scale processing"
     },
     technologies: ["Apache Kafka", "Apache Spark", "Airflow", "Snowflake"],
     color: "from-purple-500 to-blue-500"
   },
   {
     icon: BarChart3,
     title: "Business Intelligence & Reporting",
     description: "Interactive dashboards and self-service analytics platforms that transform raw data into actionable business insights.",
     useCases: [
       "Executive dashboards",
       "Self-service analytics",
       "Automated reporting",
       "KPI monitoring"
     ],
     impact: {
       insights: "Real-time business insights",
       decisions: "Data-driven decision making",
       productivity: "5x faster report generation"
     },
     technologies: ["Tableau", "Power BI", "Looker", "Qlik"],
     color: "from-green-500 to-teal-500"
   },
   {
     icon: Brain,
     title: "Machine Learning & AI Analytics",
     description: "Advanced ML models and AI-powered analytics for predictive insights, anomaly detection, and intelligent automation.",
     useCases: [
       "Predictive analytics",
       "Anomaly detection",
       "Customer segmentation",
       "Recommendation engines"
     ],
     impact: {
       predictions: "95% prediction accuracy",
       automation: "Intelligent decision automation",
       revenue: "25% revenue optimization"
     },
     technologies: ["TensorFlow", "MLflow", "Databricks", "SageMaker"],
     color: "from-pink-500 to-purple-500"
   },
   {
     icon: Workflow,
     title: "Data Lake & Warehouse Architecture",
     description: "Modern data architecture with data lakes, warehouses, and lakehouses for unified data storage and analytics.",
     useCases: [
       "Data lake implementation",
       "Data warehouse modernization",
       "Lakehouse architecture",
       "Data governance frameworks"
     ],
     impact: {
       storage: "Unlimited scalable storage",
       query: "Sub-second query performance",
       governance: "Automated data governance"
     },
     technologies: ["Snowflake", "Databricks", "Azure Synapse", "BigQuery"],
     color: "from-blue-500 to-cyan-500"
   },
   {
     icon: Activity,
     title: "Real-time Analytics Platform",
     description: "Stream processing and real-time analytics for immediate insights and instant decision-making capabilities.",
     useCases: [
       "Real-time monitoring",
       "Event stream processing",
       "Live dashboard updates",
       "Instant alerting systems"
     ],
     impact: {
       latency: "Sub-millisecond processing",
       throughput: "Millions of events/second",
       insights: "Instant business insights"
     },
     technologies: ["Apache Kafka", "Apache Flink", "Redis", "ClickHouse"],
     color: "from-red-500 to-orange-500"
   },
   {
     icon: Shield,
     title: "Data Governance & Security",
     description: "Comprehensive data governance with privacy controls, lineage tracking, and compliance automation for regulated industries.",
     useCases: [
       "Data lineage tracking",
       "Privacy compliance (GDPR)",
       "Access control management",
       "Data cataloging"
     ],
     impact: {
       compliance: "100% regulatory compliance",
       governance: "Automated data governance",
       security: "Enterprise-grade data security"
     },
     technologies: ["Apache Atlas", "Collibra", "Alation", "DataHub"],
     color: "from-yellow-500 to-red-500"
   }
 ]

 const caseStudyHighlights = [
   {
     company: "Global Retail Chain",
     challenge: "Siloed data across 1000+ stores with delayed insights",
     solution: "Real-time data lake with ML-powered analytics",
     results: [
       "Real-time inventory optimization",
       "25% increase in sales through personalization", 
       "90% reduction in data processing time"
     ]
   },
   {
     company: "Healthcare Provider Network",
     challenge: "Patient data scattered across multiple systems",
     solution: "HIPAA-compliant data warehouse with BI platform",
     results: [
       "360° patient view achieved",
       "40% improvement in care outcomes",
       "Full HIPAA compliance maintained"
     ]
   },
   {
     company: "Financial Services Firm",
     challenge: "Manual risk analysis taking weeks to complete",
     solution: "Automated ML pipeline for real-time risk scoring",
     results: [
       "Real-time risk assessment",
       "60% reduction in loan defaults",
       "10x faster credit decisions"
     ]
   }
 ]

 return (
    <SharedLayout>
   <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
     {/* Hero Section */}
     <section className="relative py-20 lg:py-32 overflow-hidden">
       <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
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
               className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 px-6 py-3 text-sm font-semibold border border-purple-500/20 rounded-full mb-8"
             >
               <Database className="w-4 h-4 mr-2" />
               Data Engineering & Analytics Solutions
             </Badge>

             <h1 className="heading-hero mb-8 text-balance">
               Data Engineering & Analytics
               <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mt-2">
                 Intelligence at Scale
               </span>
             </h1>

             <p className="text-lead max-w-4xl mx-auto mb-12">
               Transform your data into competitive advantage with enterprise-grade data engineering, 
               real-time analytics, and AI-powered insights that drive 10x faster decision-making.
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
                   <IconComponent className="w-8 h-8 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                   <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
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
               className="bg-purple-500 hover:bg-purple-600 text-white h-14 px-12 text-lg group"
             >
               Get Data Strategy Assessment
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button 
               variant="outline" 
               size="xl"
               className="border-2 border-purple-500/30 hover:border-purple-500 hover:text-purple-500 h-14 px-12 text-lg"
             >
               Explore Analytics Demos
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
               Complete <span className="gradient-text">Data Platform</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               End-to-end data engineering and analytics solutions that turn your data into strategic assets
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
                         className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors flex-shrink-0"
                         whileHover={{ rotate: 5, scale: 1.1 }}
                       >
                         <IconComponent className="w-8 h-8 text-purple-500" />
                       </motion.div>
                       <div className="flex-1">
                         <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
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
                             <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0" />
                             <span className="text-muted-foreground">{useCase}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Impact Metrics */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                         Business Impact
                       </h4>
                       <div className="grid grid-cols-1 gap-2">
                         {Object.entries(solution.impact).map(([key, value], idx) => (
                           <div key={idx} className="flex items-center justify-between text-sm">
                             <span className="text-muted-foreground capitalize">{key}:</span>
                             <span className="font-semibold text-purple-500">{value}</span>
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
                             className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 text-xs"
                           >
                             {tech}
                           </Badge>
                         ))}
                       </div>
                     </div>

                     {/* CTA */}
                     <Button 
                       className="w-full group-hover:bg-purple-500 group-hover:text-white transition-colors group border border-purple-500/20"
                       variant="outline"
                     >
                       Explore Solution
                       <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>

                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
               Data-Driven <span className="gradient-text">Success Stories</span>
             </h2>
             <p className="text-lead max-w-3xl mx-auto">
               Real transformations that turned data challenges into competitive advantages
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
                   <h3 className="text-lg font-bold mb-4 group-hover:text-purple-500 transition-colors">
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
                           <BarChart3 className="w-3 h-3 text-green-500 flex-shrink-0" />
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
             Ready to Unlock Your <span className="gradient-text">Data's Potential</span>?
           </h2>
           
           <p className="text-lead mb-12">
             Get a comprehensive data maturity assessment and discover how modern data engineering 
             can transform your business intelligence and decision-making capabilities.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
             <Button 
               size="xl" 
               className="bg-purple-500 hover:bg-purple-600 text-white h-14 px-12 text-lg group"
             >
               Get Data Assessment
               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button 
               variant="outline" 
               size="xl"
               className="border-2 border-purple-500/30 hover:border-purple-500 hover:text-purple-500 h-14 px-12 text-lg"
             >
               Book Analytics Demo
             </Button>
           </div>

           <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
             {[
               "Free data strategy consultation",
               "Custom analytics roadmap",
               "ROI projection included",
               "Proof-of-concept available"
             ].map((feature, index) => (
               <div key={index} className="flex items-center gap-2">
                 <CheckCircle className="w-4 h-4 text-purple-500" />
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

export default DataEngineeringAnalytics