"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
    ArrowRight,
    Bot,
    Brain,
    MessageSquare,
    FileText,
    Image,
    TrendingUp,
    DollarSign,
    Clock,
    CheckCircle,
    Target,
    Sparkles,
    Code,
    BarChart3
} from 'lucide-react'
import SharedLayout from '@/components/shared-layout'

const AIMachineLearning = () => {
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
            metric: "300%",
            label: "ROI Increase",
            description: "Average return on AI investment"
        },
        {
            icon: Clock,
            metric: "80%",
            label: "Time Savings",
            description: "Automated task completion"
        },
        {
            icon: TrendingUp,
            metric: "45%",
            label: "Productivity Gain",
            description: "Employee efficiency improvement"
        },
        {
            icon: Target,
            metric: "95%",
            label: "Accuracy Rate",
            description: "ML model performance"
        }
    ]

    const solutions = [
        {
            icon: MessageSquare,
            title: "Intelligent Document Processing",
            description: "Transform unstructured documents into actionable insights with AI-powered extraction, classification, and analysis.",
            useCases: [
                "Contract analysis & extraction",
                "Invoice processing automation",
                "Legal document review",
                "Regulatory compliance checking"
            ],
            impact: {
                processing: "10x faster document processing",
                accuracy: "98% extraction accuracy",
                costs: "70% operational cost reduction"
            },
            technologies: ["GPT-4", "Azure Document Intelligence", "LangChain", "PyTorch"],
            color: "from-purple-500 to-pink-500",
            generativeAI: true
        },
        {
            icon: Bot,
            title: "Conversational AI & Chatbots",
            description: "Deploy intelligent virtual assistants that understand context, maintain conversations, and provide human-like interactions.",
            useCases: [
                "Customer service automation",
                "Internal helpdesk assistant",
                "Sales qualification bot",
                "HR onboarding assistant"
            ],
            impact: {
                support: "24/7 automated support",
                satisfaction: "85% customer satisfaction",
                resolution: "60% faster query resolution"
            },
            technologies: ["OpenAI GPT", "Azure OpenAI", "Rasa", "Dialogflow"],
            color: "from-blue-500 to-cyan-500",
            generativeAI: true
        },
        {
            icon: FileText,
            title: "Content Generation & Automation",
            description: "Scale content creation with AI that generates marketing copy, technical documentation, and personalized communications.",
            useCases: [
                "Marketing content generation",
                "Technical documentation",
                "Personalized email campaigns",
                "Product descriptions at scale"
            ],
            impact: {
                content: "10x content production speed",
                quality: "Consistent brand voice",
                personalization: "90% engagement improvement"
            },
            technologies: ["GPT-4", "Claude", "Jasper AI", "Copy.ai"],
            color: "from-green-500 to-emerald-500",
            generativeAI: true
        },
        {
            icon: Image,
            title: "Computer Vision & Image AI",
            description: "Advanced image analysis, object detection, and visual content generation for enhanced business processes.",
            useCases: [
                "Quality control automation",
                "Medical image analysis",
                "Visual content generation",
                "Security surveillance enhancement"
            ],
            impact: {
                detection: "99.5% defect detection rate",
                speed: "Real-time image processing",
                safety: "Enhanced security monitoring"
            },
            technologies: ["DALL-E", "Midjourney API", "OpenCV", "TensorFlow Vision"],
            color: "from-orange-500 to-red-500",
            generativeAI: true
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics & Forecasting",
            description: "Leverage machine learning to predict trends, optimize operations, and make data-driven business decisions.",
            useCases: [
                "Demand forecasting",
                "Customer churn prediction",
                "Inventory optimization",
                "Risk assessment modeling"
            ],
            impact: {
                accuracy: "92% prediction accuracy",
                planning: "Improved demand planning",
                retention: "35% churn reduction"
            },
            technologies: ["Prophet", "XGBoost", "TensorFlow", "Scikit-learn"],
            color: "from-indigo-500 to-purple-500",
            generativeAI: false
        },
        {
            icon: Code,
            title: "AI-Powered Development",
            description: "Accelerate software development with AI code generation, testing automation, and intelligent code review.",
            useCases: [
                "Automated code generation",
                "Bug detection & fixing",
                "Code review automation",
                "Documentation generation"
            ],
            impact: {
                development: "50% faster development",
                quality: "40% fewer bugs",
                documentation: "Automated docs generation"
            },
            technologies: ["GitHub Copilot", "CodeT5", "Amazon CodeWhisperer", "DeepCode"],
            color: "from-yellow-500 to-orange-500",
            generativeAI: true
        }
    ]

    const caseStudyHighlights = [
        {
            company: "Global Insurance Leader",
            challenge: "Manual claims processing taking weeks",
            solution: "AI-powered document analysis & fraud detection",
            results: [
                "95% faster claims processing",
                "60% fraud detection improvement",
                "$50M annual savings"
            ],
            aiType: "Generative AI + ML"
        },
        {
            company: "Fortune 500 Retailer",
            challenge: "Customer service scaling issues",
            solution: "Conversational AI with GPT-4 integration",
            results: [
                "85% of queries automated",
                "40% cost reduction",
                "24/7 multilingual support"
            ],
            aiType: "Generative AI"
        },
        {
            company: "Manufacturing Giant",
            challenge: "Quality control inconsistencies",
            solution: "Computer vision with predictive maintenance",
            results: [
                "99.8% defect detection rate",
                "30% reduction in downtime",
                "25% quality improvement"
            ],
            aiType: "Computer Vision + ML"
        }
    ]

    const aiCapabilities = [
        {
            category: "Generative AI",
            icon: Sparkles,
            capabilities: [
                "Large Language Models (LLM) Integration",
                "Custom GPT Model Fine-tuning",
                "Multimodal AI (Text + Image + Voice)",
                "Retrieval-Augmented Generation (RAG)"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            category: "Machine Learning",
            icon: Brain,
            capabilities: [
                "Deep Learning Model Development",
                "AutoML Pipeline Creation",
                "Real-time ML Inference",
                "MLOps & Model Governance"
            ],
            color: "from-blue-500 to-indigo-500"
        },
        {
            category: "Data Science",
            icon: BarChart3,
            capabilities: [
                "Advanced Analytics Platforms",
                "Statistical Modeling",
                "A/B Testing Frameworks",
                "Business Intelligence Integration"
            ],
            color: "from-green-500 to-teal-500"
        }
    ]

    return (
        <SharedLayout>
            <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />

                        {/* Floating AI Elements */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-4 h-4 bg-purple-500/20 rounded-full"
                                animate={{
                                    y: [0, -50, 0],
                                    x: [0, 30, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 6 + i * 2,
                                    repeat: Infinity,
                                    delay: i * 1,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    left: `${15 + i * 12}%`,
                                    top: `${20 + i * 8}%`
                                }}
                            />
                        ))}
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
                                    <Bot className="w-4 h-4 mr-2" />
                                    AI & Machine Learning Solutions
                                </Badge>

                                <h1 className="heading-hero mb-8 text-balance">
                                    Enterprise AI & Generative AI
                                    <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                                        That Drives Results
                                    </span>
                                </h1>

                                <p className="text-lead max-w-4xl mx-auto mb-12">
                                    Harness the power of advanced AI and machine learning to automate processes,
                                    generate intelligent insights, and create competitive advantages with cutting-edge
                                    generative AI solutions.
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
                                            <IconComponent className="w-6 h-6 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                            <div className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
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
                                    className="bg-purple-500 hover:bg-purple-600 text-white h-14 px-12 text-lg group relative overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative">
                                        Get AI Strategy Assessment
                                        <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="border-2 border-purple-500/30 hover:border-purple-500 hover:text-purple-500 h-14 px-12 text-lg"
                                >
                                    Explore Use Cases
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* AI Capabilities Overview */}
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
                                    AI <span className="gradient-text">Capabilities</span>
                                </h2>
                                <p className="text-lead max-w-3xl mx-auto">
                                    Comprehensive AI solutions spanning generative AI, machine learning, and data science
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {aiCapabilities.map((category, index) => {
                                    const IconComponent = category.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            whileHover={{ y: -5 }}
                                        >
                                            <Card className="enterprise-card enterprise-card-hover p-8 h-full group text-center">
                                                <motion.div
                                                    className="w-16 h-16 mx-auto rounded-2xl bg-muted/50 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors"
                                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                                >
                                                    <IconComponent className="w-6 h-6 text-purple-500" />
                                                </motion.div>

                                                <h3 className="text-xl font-bold mb-6 group-hover:text-purple-500 transition-colors">
                                                    {category.category}
                                                </h3>

                                                <div className="space-y-3">
                                                    {category.capabilities.map((capability, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                                            <CheckCircle className="w-3 h-3 text-purple-500 flex-shrink-0" />
                                                            <span className="text-muted-foreground text-left">{capability}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                            </Card>
                                        </motion.div>
                                    )
                                })}
                            </div>
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
                                    Enterprise AI <span className="gradient-text">Solutions</span>
                                </h2>
                                <p className="text-lead max-w-3xl mx-auto">
                                    Production-ready AI solutions designed for enterprise scale and performance
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
                                                        <IconComponent className="w-6 h-6 text-purple-500" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors">
                                                                {solution.title}
                                                            </h3>
                                                            {solution.generativeAI && (
                                                                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                                                                    Generative AI
                                                                </Badge>
                                                            )}
                                                        </div>
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
                                                        Key Technologies
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

                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
                                    AI Success <span className="gradient-text">Stories</span>
                                </h2>
                                <p className="text-lead max-w-3xl mx-auto">
                                    Real-world transformations powered by enterprise AI and generative AI solutions
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
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-bold group-hover:text-purple-500 transition-colors">
                                                    {study.company}
                                                </h3>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-purple-500/10 text-purple-600 text-xs"
                                                >
                                                    {study.aiType}
                                                </Badge>
                                            </div>

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
                                                    AI Solution
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
                                Ready to Unlock <span className="gradient-text">AI's Potential</span>?
                            </h2>

                            <p className="text-lead mb-12">
                                Get a comprehensive AI readiness assessment and discover how generative AI
                                and machine learning can transform your business operations and drive growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                                <Button
                                    size="xl"
                                    className="bg-purple-500 hover:bg-purple-600 text-white h-14 px-12 text-lg group relative overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative">
                                        Get AI Assessment
                                        <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="border-2 border-purple-500/30 hover:border-purple-500 hover:text-purple-500 h-14 px-12 text-lg"
                                >
                                    Book AI Consultation
                                </Button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                                {[
                                    "Free AI strategy session",
                                    "Custom use case analysis",
                                    "ROI projection included",
                                    "Implementation roadmap"
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

export default AIMachineLearning