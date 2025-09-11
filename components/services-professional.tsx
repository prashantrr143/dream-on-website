"use client"

import { motion } from 'framer-motion'
import { 
  ArrowRight, Bot, Shield, Cloud, Network, Database, Rocket,
  BarChart3, Award, TrendingUp, CheckCircle
} from 'lucide-react'
const ProfessionalServices = () => {

  const services = [
    {
      id: 1,
      icon: Bot,
      title: "AI & Machine Learning",
      subtitle: "Enterprise AI Solutions",
      description: "Transform your business operations with custom AI models, natural language processing, and intelligent automation designed for enterprise scalability.",
      keyBenefits: [
        "300% efficiency improvement",
        "60% cost reduction",
        "Real-time decision making",
        "Predictive analytics"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
      caseStudy: "Reduced processing time by 90% for Fortune 100 financial institution",
      roi: "300% ROI in first year"
    },
    {
      id: 2,
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "Zero-Trust Security",
      description: "Comprehensive cybersecurity solutions with zero-trust architecture, threat detection, and compliance management for enterprise environments.",
      keyBenefits: [
        "99.99% threat prevention",
        "Regulatory compliance",
        "24/7 monitoring",
        "Incident response"
      ],
      technologies: ["Kubernetes", "Istio", "HashiCorp", "CrowdStrike"],
      caseStudy: "Prevented 2M+ security threats for global technology company",
      roi: "250% cost savings vs traditional security"
    },
    {
      id: 3,
      icon: Cloud,
      title: "Cloud Infrastructure",
      subtitle: "Multi-Cloud Excellence",
      description: "Strategic cloud migration and optimization across AWS, Azure, and GCP with focus on cost efficiency, performance, and scalability.",
      keyBenefits: [
        "50% infrastructure cost savings",
        "99.99% uptime SLA",
        "Auto-scaling capabilities",
        "Global availability"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform"],
      caseStudy: "Migrated 500+ applications with zero downtime for healthcare network",
      roi: "40% reduction in operational costs"
    },
    {
      id: 4,
      icon: Database,
      title: "Data Analytics",
      subtitle: "Business Intelligence",
      description: "Advanced data analytics and business intelligence solutions that transform raw data into actionable insights for strategic decision making.",
      keyBenefits: [
        "Real-time dashboards",
        "Predictive modeling",
        "Data lake architecture",
        "Automated reporting"
      ],
      technologies: ["Snowflake", "Databricks", "Power BI", "Tableau"],
      caseStudy: "Processed 1PB+ data for manufacturing optimization",
      roi: "15x faster data processing"
    },
    {
      id: 5,
      icon: Network,
      title: "Digital Transformation",
      subtitle: "Process Optimization",
      description: "End-to-end digital transformation consulting that modernizes business processes, systems integration, and organizational workflows.",
      keyBenefits: [
        "Streamlined operations",
        "Integration expertise",
        "Change management",
        "Training programs"
      ],
      technologies: ["ServiceNow", "Salesforce", "Microsoft 365", "SAP"],
      caseStudy: "Transformed operations for 200+ retail locations globally",
      roi: "200% productivity increase"
    },
    {
      id: 6,
      icon: Rocket,
      title: "DevOps & Automation",
      subtitle: "CI/CD Excellence",
      description: "Advanced DevOps practices with automated CI/CD pipelines, infrastructure as code, and continuous monitoring for reliable deployments.",
      keyBenefits: [
        "90% faster deployments",
        "Zero-downtime releases",
        "Automated testing",
        "Infrastructure as code"
      ],
      technologies: ["Jenkins", "GitLab", "Docker", "Kubernetes"],
      caseStudy: "Achieved 99.9% deployment success rate for e-commerce platform",
      roi: "80% reduction in deployment time"
    }
  ]

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Premium Enterprise Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-gradient-to-tr from-accent/5 to-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="adaptive-container relative z-10 ultra-wide-spacing ultra-4k-spacing">
        {/* Premium Section Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center glass-card px-8 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">ENTERPRISE SOLUTIONS PORTFOLIO</span>
          </motion.div>
          
          <h2 className="heading-section mb-8">
            <span className="block mb-2">Comprehensive Technology</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 animate-text-shimmer">
              Solutions & Services
            </span>
          </h2>
          
          <p className="text-lead max-w-4xl mx-auto">
            Delivering enterprise-grade solutions that drive digital transformation, 
            optimize operations, and accelerate business growth with measurable results.
          </p>
        </motion.div>

        {/* Premium Services Grid - Balanced Layout */}
        <div className="services-grid-balanced grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 2xl:gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="enterprise-card p-8 h-full">
                
                {/* Service Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  {(() => {
                    const IconComponent = service.icon
                    return (
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                    )
                  })()}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                  {service.subtitle}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-bold text-green-600 uppercase tracking-wider">ROI Impact</span>
                  </div>
                  <p className="text-green-600 font-semibold">{service.roi}</p>
                </div>

                {/* Case Study */}
                <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-muted-foreground mr-2" />
                    <span className="text-sm font-bold text-foreground uppercase tracking-wider">Success Story</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.caseStudy}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full enterprise-card px-6 py-4 text-foreground font-semibold border-2 border-border hover:border-primary transition-all duration-400 flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center bg-slate-50 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our enterprise solution architects to discuss 
            your specific requirements and create a customized transformation roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="enterprise-button px-12 py-4 text-white text-lg font-semibold">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-3 inline" />
            </button>
            
            <button className="enterprise-card px-12 py-4 text-foreground font-semibold text-lg border-2 border-border hover:border-primary transition-all duration-400">
              Download Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalServices