"use client"

import { motion } from 'framer-motion'
import { 
  ArrowRight, Bot, Shield, Cloud, Database, Rocket,
  BarChart3, TrendingUp
} from 'lucide-react'
const ProfessionalServices = () => {

  const services = [
    {
      id: 1,
      icon: Bot,
      title: "Custom Product Development",
      description: "Enterprise-grade software products from concept to deployment.",
      technologies: ["React", "Node.js", "Python", "Kubernetes"],
      roi: "Platform deployed in 12 weeks"
    },
    {
      id: 2,
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architectures with 99.9% uptime reliability.",
      technologies: ["AWS", "Azure", "GCP", "Terraform"],
      roi: "60% cost reduction achieved"
    },
    {
      id: 3,
      icon: Bot,
      title: "AI Agentic Systems",
      description: "Intelligent autonomous agents that execute complex business workflows.",
      technologies: ["OpenAI", "LangChain", "CrewAI", "Azure AI"],
      roi: "300% process automation"
    },
    {
      id: 4,
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive security solutions with compliance management.",
      technologies: ["Zero-Trust", "SIEM", "MFA", "SOC 2"],
      roi: "Zero security breaches"
    },
    {
      id: 5,
      icon: Database,
      title: "Data Analytics",
      description: "Real-time insights and predictive analytics platforms.",
      technologies: ["Power BI", "Tableau", "Snowflake", "Python"],
      roi: "30% revenue increase"
    },
    {
      id: 6,
      icon: Rocket,
      title: "DevOps Solutions",
      description: "Automated CI/CD pipelines with zero-downtime deployments.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab"],
      roi: "10x faster deployments"
    }
  ]

  return (
    <section className="relative bg-background py-16 overflow-hidden">
      {/* Premium Enterprise Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-gradient-to-tr from-accent/5 to-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="adaptive-container relative z-10 ultra-wide-spacing ultra-4k-spacing">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center glass-card px-8 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">ENTERPRISE TECHNOLOGY SOLUTIONS</span>
          </motion.div>
          
          <h2 className="heading-section mb-8">
            <span className="block mb-2">Enterprise-Grade</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 animate-text-shimmer">
              Technology Products
            </span>
          </h2>
          
          <p className="text-lead max-w-4xl mx-auto">
            We architect, develop, and deploy enterprise technology products that drive digital transformation 
            and competitive advantage. Our solutions power business growth with proven reliability and scalability.
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
              <div className="enterprise-card p-6 h-full">
                {/* Service Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all duration-300">
                  {(() => {
                    const IconComponent = service.icon
                    return (
                      <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-white transition-all duration-300" />
                    )
                  })()}
                </div>

                {/* Service Info */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* ROI Highlight */}
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="w-3 h-3 text-green-600 mr-2" />
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Impact</span>
                  </div>
                  <p className="text-green-600 font-semibold text-sm">{service.roi}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full enterprise-card px-4 py-3 text-foreground font-medium border border-border hover:border-primary transition-all duration-300 flex items-center justify-center group text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
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
        </motion.div> */}
      </div>
    </section>
  )
}

export default ProfessionalServices