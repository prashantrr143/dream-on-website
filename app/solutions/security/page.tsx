"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Network,
  Fingerprint,
  FileCheck,
  TrendingUp,
  Clock,
  Award,
  ArrowLeft
} from 'lucide-react'
import { cn } from '@/lib/utils'
import SharedLayout from '@/components/shared-layout'
import Link from 'next/link'
import AnimatedText from '@/components/animated-text'

const EnterpriseSecurity = () => {
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

  const securityServices = [
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security models that verify every user and device",
      features: [
        "Identity verification at every access point",
        "Micro-segmentation of network resources",
        "Continuous monitoring and validation",
        "Policy-driven access controls"
      ],
      color: "emerald"
    },
    {
      icon: Eye,
      title: "Threat Detection & Response",
      description: "Advanced AI-powered threat detection with 24/7 security operations center",
      features: [
        "Real-time threat intelligence",
        "Behavioral anomaly detection",
        "Automated incident response",
        "Forensic analysis and reporting"
      ],
      color: "red"
    },
    {
      icon: Lock,
      title: "Data Protection & Encryption",
      description: "Comprehensive data security with end-to-end encryption and privacy controls",
      features: [
        "End-to-end data encryption",
        "Data loss prevention (DLP)",
        "Privacy compliance automation",
        "Secure key management"
      ],
      color: "blue"
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      description: "Automated compliance monitoring and reporting for industry regulations",
      features: [
        "SOC 2, HIPAA, PCI DSS compliance",
        "Automated audit trails",
        "Risk assessment frameworks",
        "Regulatory reporting automation"
      ],
      color: "purple"
    },
    {
      icon: Fingerprint,
      title: "Identity & Access Management",
      description: "Centralized identity management with multi-factor authentication",
      features: [
        "Single sign-on (SSO) integration",
        "Multi-factor authentication",
        "Privileged access management",
        "Identity lifecycle management"
      ],
      color: "orange"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Advanced network protection with firewall management and intrusion prevention",
      features: [
        "Next-generation firewalls",
        "Intrusion prevention systems",
        "VPN and secure remote access",
        "Network segmentation"
      ],
      color: "cyan"
    }
  ]

  const securityStats = [
    { icon: Shield, metric: "99.9%", label: "Threat Prevention", description: "Average threat blocking rate" },
    { icon: Clock, metric: "< 5 min", label: "Detection Time", description: "Average threat detection" },
    { icon: CheckCircle, metric: "100%", label: "Compliance Rate", description: "Regulatory compliance success" },
    { icon: TrendingUp, metric: "75%", label: "Risk Reduction", description: "Average security risk decrease" }
  ]

  const complianceFrameworks = [
    { name: "SOC 2 Type II", icon: Shield, description: "Security and availability controls" },
    { name: "ISO 27001", icon: Award, description: "Information security management" },
    { name: "HIPAA", icon: FileCheck, description: "Healthcare data protection" },
    { name: "PCI DSS", icon: Lock, description: "Payment card data security" },
    { name: "GDPR", icon: Globe, description: "European data privacy regulation" },
    { name: "FedRAMP", icon: Users, description: "Federal cloud security standards" }
  ]

  const threatTypes = [
    { name: "Ransomware", severity: "Critical", blocked: "99.8%" },
    { name: "Phishing", severity: "High", blocked: "99.5%" },
    { name: "Malware", severity: "High", blocked: "99.9%" },
    { name: "Data Breaches", severity: "Critical", blocked: "100%" },
    { name: "Insider Threats", severity: "Medium", blocked: "95%" },
    { name: "DDoS Attacks", severity: "High", blocked: "99.7%" }
  ]

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Solutions
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Badge 
                variant="secondary" 
                className="bg-green-50/10 text-green-400 hover:bg-green-50/20 px-6 py-3 text-sm font-semibold border border-green-500/20 rounded-full mb-8"
              >
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </Badge>
            </motion.div>

            <motion.h1 
              className="heading-hero mb-8 text-balance"
              variants={itemVariants}
            >
              <AnimatedText
                text="Comprehensive Enterprise"
                animation="splitWords"
                className="block mb-2"
                stagger={0.1}
              />
              <AnimatedText
                text="Security Solutions"
                animation="splitWords"
                className="gradient-text inline-block"
                stagger={0.1}
                delay={0.5}
              />
            </motion.h1>

            <motion.p 
              className="text-lead mb-12"
              variants={itemVariants}
            >
              Protect your organization with advanced cybersecurity solutions that defend against evolving threats, 
              ensure regulatory compliance, and provide comprehensive security across your entire digital infrastructure.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={itemVariants}
            >
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Get Security Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Security Case Studies
                </Button>
              </Link>
            </motion.div>

            {/* Security Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={itemVariants}
            >
              {securityStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.metric}</div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Services */}
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
                Security <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your organization from evolving cyber threats
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="enterprise-card enterprise-card-hover p-8 h-full group">
                      <motion.div 
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                          service.color === 'emerald' && "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                          service.color === 'red' && "bg-red-500/10 group-hover:bg-red-500/20",
                          service.color === 'blue' && "bg-blue-500/10 group-hover:bg-blue-500/20",
                          service.color === 'purple' && "bg-purple-500/10 group-hover:bg-purple-500/20",
                          service.color === 'orange' && "bg-orange-500/10 group-hover:bg-orange-500/20",
                          service.color === 'cyan' && "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                        )}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <IconComponent className={cn(
                          "w-8 h-8",
                          service.color === 'emerald' && "text-emerald-500",
                          service.color === 'red' && "text-red-500",
                          service.color === 'blue' && "text-blue-500",
                          service.color === 'purple' && "text-purple-500",
                          service.color === 'orange' && "text-orange-500",
                          service.color === 'cyan' && "text-cyan-500"
                        )} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Frameworks */}
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
                Compliance <span className="gradient-text">Frameworks</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Ensure your organization meets industry standards and regulatory requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => {
                const IconComponent = framework.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="enterprise-card p-6 text-center group">
                      <IconComponent className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {framework.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {framework.description}
                      </p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threat Protection */}
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
                Threat <span className="gradient-text">Protection</span>
              </h2>
              <p className="text-lead max-w-3xl mx-auto">
                Advanced protection against the most common and sophisticated cyber threats
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="enterprise-card p-8">
                <div className="space-y-6">
                  {threatTypes.map((threat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                      variants={itemVariants}
                    >
                      <div className="flex items-center gap-4">
                        <AlertTriangle className={cn(
                          "w-6 h-6",
                          threat.severity === 'Critical' && "text-red-500",
                          threat.severity === 'High' && "text-orange-500",
                          threat.severity === 'Medium' && "text-yellow-500"
                        )} />
                        <div>
                          <h3 className="font-semibold text-foreground">{threat.name}</h3>
                          <p className="text-sm text-muted-foreground">Severity: {threat.severity}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-500">{threat.blocked}</div>
                        <div className="text-sm text-muted-foreground">Blocked</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-lead mb-8">
              Don't wait for a security incident to protect your organization. Get a comprehensive 
              security assessment and start building your defense strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Schedule Security Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies/global-bank-transformation">
                <Button variant="outline" size="lg" className="font-semibold">
                  View Security Case Study
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default EnterpriseSecurity