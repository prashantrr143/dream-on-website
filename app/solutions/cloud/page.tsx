"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
    ArrowRight,
    Cloud,
    Shield,
    Zap,
    Database,
    Server,
    Globe,
    TrendingUp,
    DollarSign,
    Clock,
    CheckCircle,
    ArrowUp,
    Gauge
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
const CloudInfrastructure = () => {
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
        visible: { opacity: 1, y: 0 }
    }

    const keyBenefits = [
        {
            icon: DollarSign,
            metric: "60%",
            label: "Cost Reduction",
            description: "Average infrastructure cost savings"
        },
        {
            icon: ArrowUp,
            metric: "99.9%",
            label: "Uptime SLA",
            description: "Enterprise-grade reliability"
        },
        {
            icon: Gauge,
            metric: "10x",
            label: "Faster Scaling",
            description: "Auto-scaling capabilities"
        },
        {
            icon: Clock,
            metric: "30 Days",
            label: "Migration Time",
            description: "Complete infrastructure migration"
        }
    ]

    const solutions = [
        {
            icon: Cloud,
            title: "Cloud Migration & Modernization",
            description: "Seamlessly migrate your existing infrastructure to cloud-native solutions with zero downtime and enhanced performance.",
            useCases: [
                "Legacy system modernization",
                "Hybrid cloud deployment",
                "Application containerization",
                "Database migration"
            ],
            impact: {
                cost: "45% cost reduction",
                performance: "3x faster deployment",
                reliability: "99.9% uptime"
            },
            technologies: ["AWS", "Azure", "Kubernetes", "Docker"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "Enterprise-grade security architecture with automated compliance monitoring and threat detection.",
            useCases: [
                "Zero-trust architecture",
                "Compliance automation (SOC2, ISO27001)",
                "Identity & access management",
                "Security monitoring"
            ],
            impact: {
                security: "100% compliance rate",
                threats: "99.8% threat detection",
                incidents: "85% reduction in security incidents"
            },
            technologies: ["AWS Security Hub", "Azure Sentinel", "Terraform", "Vault"],
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Database,
            title: "Data Platform & Analytics",
            description: "Scalable data infrastructure with real-time analytics, ML pipelines, and business intelligence capabilities.",
            useCases: [
                "Real-time data streaming",
                "ML/AI model deployment",
                "Business intelligence dashboards",
                "Data lake architecture"
            ],
            impact: {
                insights: "10x faster insights",
                processing: "Real-time data processing",
                decisions: "Data-driven decision making"
            },
            technologies: ["Snowflake", "Apache Kafka", "Databricks", "Power BI"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Zap,
            title: "DevOps & Automation",
            description: "Complete CI/CD pipelines with infrastructure as code, automated testing, and continuous monitoring.",
            useCases: [
                "CI/CD pipeline automation",
                "Infrastructure as code",
                "Automated testing & deployment",
                "Performance monitoring"
            ],
            impact: {
                deployment: "90% faster deployments",
                quality: "95% reduction in bugs",
                efficiency: "50% dev productivity gain"
            },
            technologies: ["Jenkins", "GitLab", "Terraform", "Prometheus"],
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: Server,
            title: "Microservices Architecture",
            description: "Transform monolithic applications into scalable microservices with API gateways and service mesh.",
            useCases: [
                "Monolith decomposition",
                "API gateway implementation",
                "Service mesh deployment",
                "Container orchestration"
            ],
            impact: {
                scalability: "Independent service scaling",
                resilience: "Fault-tolerant architecture",
                agility: "Faster feature delivery"
            },
            technologies: ["Kubernetes", "Istio", "Kong", "Consul"],
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: Globe,
            title: "Multi-Cloud & Hybrid Solutions",
            description: "Optimize across multiple cloud providers with unified management, cost optimization, and disaster recovery.",
            useCases: [
                "Multi-cloud strategy",
                "Hybrid cloud integration",
                "Disaster recovery planning",
                "Cost optimization"
            ],
            impact: {
                flexibility: "Cloud vendor independence",
                resilience: "Multi-region redundancy",
                optimization: "40% cost optimization"
            },
            technologies: ["AWS", "Azure", "GCP", "CloudFormation"],
            color: "from-red-500 to-pink-500"
        }
    ]

    const caseStudyHighlights = [
        {
            company: "Fortune 500 Retailer",
            challenge: "Scaling e-commerce during peak seasons",
            solution: "Auto-scaling cloud infrastructure",
            results: [
                "99.9% uptime during Black Friday",
                "10x traffic handling capability",
                "50% infrastructure cost reduction"
            ]
        },
        {
            company: "Global Financial Services",
            challenge: "Regulatory compliance & security",
            solution: "Zero-trust cloud architecture",
            results: [
                "100% SOC2 compliance maintained",
                "Zero security breaches",
                "60% faster audit processes"
            ]
        },
        {
            company: "Healthcare Technology",
            challenge: "HIPAA-compliant data processing",
            solution: "Secure cloud data platform",
            results: [
                "HIPAA compliance certified",
                "Real-time patient data insights",
                "40% faster diagnosis workflows"
            ]
        }
    ]

    return (
        <SharedLayout>
            <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
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
                                    className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 px-6 py-3 text-sm font-semibold border border-blue-500/20 rounded-full mb-8"
                                >
                                    <Cloud className="w-4 h-4 mr-2" />
                                    Cloud Infrastructure Solutions
                                </Badge>

                                <h1 className="heading-hero mb-8 text-balance">
                                    Enterprise Cloud Infrastructure
                                    <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mt-2">
                                        Built for Scale
                                    </span>
                                </h1>

                                <p className="text-lead max-w-4xl mx-auto mb-12">
                                    Transform your infrastructure with enterprise-grade cloud solutions that deliver
                                    unmatched performance, security, and cost efficiency. Built for Fortune 500 companies.
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
                                            <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                            <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
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
                                    className="bg-blue-500 hover:bg-blue-600 text-white h-14 px-12 text-lg group"
                                >
                                    Get Architecture Assessment
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="border-2 border-blue-500/30 hover:border-blue-500 hover:text-blue-500 h-14 px-12 text-lg"
                                >
                                    View Case Studies
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
                                    Comprehensive <span className="gradient-text">Cloud Solutions</span>
                                </h2>
                                <p className="text-lead max-w-3xl mx-auto">
                                    End-to-end cloud infrastructure solutions designed for enterprise scale and performance
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
                                                        className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors flex-shrink-0"
                                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                                    >
                                                        <IconComponent className="w-8 h-8 text-blue-500" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
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
                                                        Key Use Cases
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {solution.useCases.map((useCase, idx) => (
                                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                                <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
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
                                                                <span className="font-semibold text-blue-500">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                                                        Key Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {solution.technologies.map((tech, idx) => (
                                                            <Badge
                                                                key={idx}
                                                                variant="secondary"
                                                                className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 text-xs"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <Button
                                                    className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors group border border-blue-500/20"
                                                    variant="outline"
                                                >
                                                    Learn More
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>

                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
                                    Proven <span className="gradient-text">Results</span>
                                </h2>
                                <p className="text-lead max-w-3xl mx-auto">
                                    Real-world success stories from our enterprise cloud transformations
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
                                            <h3 className="text-lg font-bold mb-4 group-hover:text-blue-500 transition-colors">
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
                                                            <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0" />
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
                                Ready to Transform Your <span className="gradient-text">Infrastructure</span>?
                            </h2>

                            <p className="text-lead mb-12">
                                Get a free cloud architecture assessment and discover how we can optimize
                                your infrastructure for performance, security, and cost efficiency.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                                <Button
                                    size="xl"
                                    className="bg-blue-500 hover:bg-blue-600 text-white h-14 px-12 text-lg group"
                                >
                                    Get Free Assessment
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="border-2 border-blue-500/30 hover:border-blue-500 hover:text-blue-500 h-14 px-12 text-lg"
                                >
                                    Schedule Consultation
                                </Button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                                {[
                                    "Free 30-min consultation",
                                    "Custom architecture blueprint",
                                    "ROI analysis included",
                                    "No obligation"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-blue-500" />
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

export default CloudInfrastructure