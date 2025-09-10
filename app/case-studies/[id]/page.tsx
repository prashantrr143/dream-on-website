"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Building2, Bot, BarChart3, Zap, Calendar, TrendingUp, Users, Clock, Shield, DollarSign, CheckCircle, Target, Lightbulb, Cog, BarChart } from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'
import SharedLayout from '@/components/shared-layout'
import { notFound } from 'next/navigation'
import { use } from 'react'

interface CaseStudyPageProps {
  params: Promise<{
    id: string
  }>
}

const CaseStudyPage = ({ params }: CaseStudyPageProps) => {
  const { id } = use(params)
  const caseStudiesData = {
    "global-bank-transformation": {
      id: "global-bank-transformation",
      title: "Global Bank Digital Transformation",
      company: "Fortune 500 Financial Institution",
      category: "Cloud Architecture & Security",
      industry: "Financial Services",
      timeline: "18 months",
      teamSize: "45 engineers",
      client: "Leading global bank with $2.1T in assets",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
      icon: Building2,
      
      // Executive Summary
      overview: "Complete digital transformation of legacy banking infrastructure across 50+ countries, migrating mission-critical systems to multi-cloud architecture while maintaining 24/7 operations and regulatory compliance.",
      
      // Problem Statement
      problemStatement: {
        title: "The Challenge: Legacy Infrastructure at Scale",
        description: "The bank faced critical challenges with aging infrastructure that threatened competitive position and operational efficiency.",
        challenges: [
          {
            icon: Clock,
            title: "System Performance",
            description: "Legacy mainframe systems caused 15-minute transaction processing delays during peak hours",
            impact: "Customer satisfaction dropping 23% annually"
          },
          {
            icon: DollarSign,
            title: "Operational Costs",
            description: "On-premises infrastructure costs were escalating 12% year-over-year",
            impact: "$180M annual infrastructure spend with declining efficiency"
          },
          {
            icon: Shield,
            title: "Security & Compliance",
            description: "Fragmented security across 200+ legacy systems created compliance risks",
            impact: "Failed 3 regulatory audits in 18 months"
          },
          {
            icon: TrendingUp,
            title: "Scalability Limitations",
            description: "Unable to scale during peak trading volumes and seasonal demands",
            impact: "Lost $50M in potential revenue due to system unavailability"
          }
        ]
      },
      
      // Solution
      solution: {
        title: "Our Approach: Zero-Downtime Cloud Migration",
        description: "We designed and executed a comprehensive multi-cloud transformation strategy using advanced migration techniques and security frameworks.",
        approach: [
          {
            phase: "Phase 1: Assessment & Planning",
            duration: "3 months",
            activities: [
              "Comprehensive infrastructure audit and dependency mapping",
              "Risk assessment and regulatory compliance review", 
              "Multi-cloud architecture design and security framework",
              "Pilot system selection and testing strategy"
            ]
          },
          {
            phase: "Phase 2: Foundation & Security",
            duration: "4 months",
            activities: [
              "Multi-cloud landing zone setup with AWS and Azure",
              "Zero-trust security architecture implementation",
              "Identity and access management (IAM) consolidation",
              "Network security and encryption layer deployment"
            ]
          },
          {
            phase: "Phase 3: Core Systems Migration",
            duration: "8 months",
            activities: [
              "Gradual migration using blue-green deployment strategy",
              "Real-time data synchronization and validation",
              "Performance optimization and load balancing",
              "24/7 monitoring and alerting system deployment"
            ]
          },
          {
            phase: "Phase 4: Optimization & Handover",
            duration: "3 months",
            activities: [
              "System performance tuning and cost optimization",
              "Staff training and knowledge transfer",
              "Disaster recovery testing and documentation",
              "Ongoing support framework establishment"
            ]
          }
        ],
        technologies: [
          { name: "AWS", description: "Primary cloud platform for core banking systems" },
          { name: "Microsoft Azure", description: "Secondary cloud for DR and analytics workloads" },
          { name: "Kubernetes", description: "Container orchestration for microservices" },
          { name: "Terraform", description: "Infrastructure as Code for consistent deployments" },
          { name: "HashiCorp Vault", description: "Secrets management and encryption" },
          { name: "Istio", description: "Service mesh for secure microservices communication" },
          { name: "ELK Stack", description: "Centralized logging and monitoring" },
          { name: "Jenkins", description: "CI/CD pipeline automation" }
        ]
      },
      
      // Results & ROI
      results: {
        title: "Transformational Results & ROI",
        description: "The migration delivered exceptional business value with measurable improvements across all key metrics.",
        keyMetrics: [
          {
            icon: TrendingUp,
            metric: "99.99%",
            label: "System Uptime",
            description: "Achieved industry-leading reliability",
            improvement: "+15% from previous year"
          },
          {
            icon: DollarSign,
            metric: "60%",
            label: "Cost Reduction",
            description: "Annual infrastructure cost savings",
            improvement: "$108M saved annually"
          },
          {
            icon: Zap,
            metric: "300%",
            label: "Performance Gain",
            description: "Transaction processing speed improvement",
            improvement: "From 15min to 3sec average"
          },
          {
            icon: Shield,
            metric: "100%",
            label: "Compliance Score",
            description: "Passed all regulatory audits",
            improvement: "Zero compliance violations"
          },
          {
            icon: Users,
            metric: "50M+",
            label: "Users Migrated",
            description: "Customer accounts successfully migrated",
            improvement: "Zero data loss incidents"
          },
          {
            icon: Clock,
            metric: "0",
            label: "Downtime Hours",
            description: "Achieved zero-downtime migration",
            improvement: "Saved $25M in potential losses"
          }
        ],
        businessImpact: [
          {
            category: "Financial Impact",
            items: [
              "60% reduction in infrastructure costs ($108M annual savings)",
              "Increased trading volume capacity by 400%",
              "Avoided $50M in lost revenue from system outages",
              "ROI of 340% achieved within first 18 months"
            ]
          },
          {
            category: "Operational Excellence",
            items: [
              "99.99% system availability (industry-leading)",
              "75% reduction in incident response time",
              "90% automation of routine maintenance tasks",
              "50% reduction in time-to-market for new features"
            ]
          },
          {
            category: "Security & Compliance",
            items: [
              "100% compliance with SOC 2, PCI DSS, and regional regulations",
              "Advanced threat detection with 99.9% accuracy",
              "Zero security breaches post-migration",
              "Centralized security monitoring across all systems"
            ]
          },
          {
            category: "Customer Experience",
            items: [
              "95% improvement in customer satisfaction scores",
              "85% reduction in transaction processing time",
              "24/7 global availability across all services",
              "New mobile features launched 3x faster"
            ]
          }
        ]
      },
      
      // Testimonial
      testimonial: {
        quote: "This transformation didn't just modernize our infrastructure - it fundamentally changed how we operate. The zero-downtime migration was flawless, and the performance improvements have exceeded all expectations. We're now positioned to lead in the digital banking era.",
        author: "Sarah Chen",
        title: "Chief Technology Officer",
        company: "Global Banking Institution"
      }
    },
    
    "ai-automation-manufacturing": {
      id: "ai-automation-manufacturing",
      title: "AI-Powered Manufacturing Optimization",
      company: "Leading Automotive Manufacturer",
      category: "AI & Automation",
      industry: "Manufacturing",
      timeline: "12 months",
      teamSize: "32 specialists",
      client: "Fortune 100 automotive manufacturer producing 2M+ vehicles annually",
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      icon: Bot,
      
      overview: "Implementation of comprehensive AI-driven quality control and predictive maintenance system across 15 manufacturing facilities, transforming production efficiency and product quality.",
      
      problemStatement: {
        title: "The Challenge: Manual Quality Control at Scale",
        description: "The manufacturer faced quality control bottlenecks and unpredictable maintenance issues that impacted production efficiency and product quality.",
        challenges: [
          {
            icon: Target,
            title: "Quality Control Bottlenecks",
            description: "Manual inspection processes caught only 85% of defects, causing recalls",
            impact: "$75M annual cost from defective products reaching customers"
          },
          {
            icon: Clock,
            title: "Production Delays",
            description: "Unexpected equipment failures caused 15% unplanned downtime",
            impact: "Lost 180,000 units annually due to production stoppages"
          },
          {
            icon: Users,
            title: "Labor Dependencies",
            description: "Heavy reliance on skilled inspectors with 60% turnover rate",
            impact: "Inconsistent quality standards across shifts and facilities"
          },
          {
            icon: BarChart,
            title: "Data Silos",
            description: "Quality data trapped in isolated systems preventing insights",
            impact: "Unable to identify patterns or predict failure modes"
          }
        ]
      },
      
      solution: {
        title: "Our Approach: AI-First Manufacturing Intelligence",
        description: "We deployed computer vision AI and predictive analytics to automate quality control and optimize maintenance schedules.",
        approach: [
          {
            phase: "Phase 1: Data Foundation",
            duration: "2 months",
            activities: [
              "Installation of high-resolution cameras and IoT sensors",
              "Data pipeline setup for real-time image and sensor data",
              "Historical quality data analysis and pattern identification",
              "Baseline AI model training with existing defect samples"
            ]
          },
          {
            phase: "Phase 2: AI Model Development",
            duration: "4 months",
            activities: [
              "Computer vision models for defect detection training",
              "Predictive maintenance algorithms development",
              "Edge computing infrastructure deployment",
              "Model validation and accuracy optimization"
            ]
          },
          {
            phase: "Phase 3: Production Integration",
            duration: "4 months",
            activities: [
              "Gradual rollout across production lines",
              "Real-time monitoring and alert system integration",
              "Staff training on AI-assisted quality control",
              "Continuous model refinement and improvement"
            ]
          },
          {
            phase: "Phase 4: Scale & Optimization",
            duration: "2 months",
            activities: [
              "Deployment across all 15 manufacturing facilities",
              "Advanced analytics dashboard implementation",
              "ROI measurement and optimization recommendations",
              "Knowledge transfer and support framework"
            ]
          }
        ],
        technologies: [
          { name: "TensorFlow", description: "Deep learning framework for computer vision models" },
          { name: "OpenCV", description: "Computer vision library for image processing" },
          { name: "Apache Kafka", description: "Real-time data streaming platform" },
          { name: "MLflow", description: "ML lifecycle management and model versioning" },
          { name: "NVIDIA Jetson", description: "Edge computing for real-time inference" },
          { name: "InfluxDB", description: "Time-series database for sensor data" },
          { name: "Grafana", description: "Real-time monitoring and alerting" },
          { name: "Kubeflow", description: "ML workflow orchestration on Kubernetes" }
        ]
      },
      
      results: {
        title: "Revolutionary Manufacturing Results",
        description: "The AI implementation delivered unprecedented improvements in quality, efficiency, and cost reduction.",
        keyMetrics: [
          {
            icon: Target,
            metric: "95%",
            label: "Defect Reduction",
            description: "Dramatic improvement in quality control",
            improvement: "From 85% to 99.5% defect detection"
          },
          {
            icon: Zap,
            metric: "40%",
            label: "Production Speed",
            description: "Faster production with automated QC",
            improvement: "Eliminated inspection bottlenecks"
          },
          {
            icon: DollarSign,
            metric: "$50M",
            label: "Annual Savings",
            description: "Cost reduction from quality improvements",
            improvement: "ROI of 420% in first year"
          },
          {
            icon: Clock,
            metric: "85%",
            label: "Downtime Reduction",
            description: "Predictive maintenance effectiveness",
            improvement: "From 15% to 2.5% unplanned downtime"
          },
          {
            icon: Bot,
            metric: "25+",
            label: "AI Models Deployed",
            description: "Specialized models per product line",
            improvement: "Continuous learning and adaptation"
          },
          {
            icon: TrendingUp,
            metric: "99.5%",
            label: "Detection Accuracy",
            description: "AI-powered quality control precision",
            improvement: "Industry-leading performance"
          }
        ],
        businessImpact: [
          {
            category: "Quality Excellence",
            items: [
              "95% reduction in customer complaints",
              "99.5% defect detection accuracy vs 85% manual",
              "Zero product recalls since AI implementation",
              "Consistent quality across all facilities and shifts"
            ]
          },
          {
            category: "Operational Efficiency",
            items: [
              "40% increase in production throughput",
              "85% reduction in unplanned maintenance downtime",
              "60% reduction in quality inspection labor costs",
              "Real-time visibility into production metrics"
            ]
          },
          {
            category: "Financial Impact",
            items: [
              "$50M annual savings from quality improvements",
              "$30M additional revenue from increased production",
              "$15M savings from predictive maintenance",
              "420% ROI achieved within 12 months"
            ]
          },
          {
            category: "Innovation Acceleration",
            items: [
              "50% faster new product quality validation",
              "AI-driven insights for design optimization",
              "Automated quality reporting and analytics",
              "Foundation for future smart factory initiatives"
            ]
          }
        ]
      },
      
      testimonial: {
        quote: "The AI transformation has revolutionized our manufacturing operations. We've achieved quality levels we never thought possible while dramatically improving efficiency. This technology has positioned us as an industry leader in smart manufacturing.",
        author: "Michael Rodriguez",
        title: "VP of Manufacturing Operations",
        company: "Automotive Manufacturing Leader"
      }
    },
    
    "healthcare-data-platform": {
      id: "healthcare-data-platform",
      title: "Healthcare Data Intelligence Platform",
      company: "National Healthcare Network",
      category: "Data Intelligence & Analytics",
      industry: "Healthcare",
      timeline: "24 months",
      teamSize: "38 data specialists",
      client: "National healthcare network serving 10M+ patients across 200+ facilities",
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "green",
      icon: BarChart3,
      
      overview: "Development of unified real-time healthcare data platform enabling predictive analytics, population health management, and clinical decision support across a national network.",
      
      problemStatement: {
        title: "The Challenge: Fragmented Healthcare Data",
        description: "Critical patient data was siloed across hundreds of systems, preventing comprehensive care coordination and population health insights.",
        challenges: [
          {
            icon: BarChart,
            title: "Data Fragmentation",
            description: "Patient records scattered across 200+ hospitals with no unified view",
            impact: "Physicians missing 40% of relevant patient history"
          },
          {
            icon: Clock,
            title: "Delayed Insights",
            description: "Manual reporting processes took 2-4 weeks for basic analytics",
            impact: "Missed opportunities for early intervention and prevention"
          },
          {
            icon: Shield,
            title: "Compliance Complexity",
            description: "Inconsistent HIPAA compliance across legacy systems",
            impact: "Risk of violations and patient data breaches"
          },
          {
            icon: TrendingUp,
            title: "Limited Predictive Capabilities",
            description: "No ability to identify at-risk patients or predict outcomes",
            impact: "$200M annual cost from preventable readmissions"
          }
        ]
      },
      
      solution: {
        title: "Our Approach: Unified Healthcare Intelligence",
        description: "We built a comprehensive data platform with real-time analytics, ML-powered insights, and strict HIPAA compliance.",
        approach: [
          {
            phase: "Phase 1: Data Architecture Design",
            duration: "4 months",
            activities: [
              "Healthcare data model design following FHIR standards",
              "HIPAA-compliant cloud architecture planning",
              "Legacy system integration strategy development",
              "Data governance and security framework establishment"
            ]
          },
          {
            phase: "Phase 2: Platform Foundation",
            duration: "6 months",
            activities: [
              "Real-time data ingestion pipeline development",
              "Master patient index (MPI) implementation",
              "Data lake and warehouse setup with encryption",
              "API gateway and microservices architecture"
            ]
          },
          {
            phase: "Phase 3: Analytics & ML",
            duration: "8 months",
            activities: [
              "Predictive models for readmission risk scoring",
              "Population health analytics dashboard development",
              "Clinical decision support tools implementation",
              "Real-time alerting and notification system"
            ]
          },
          {
            phase: "Phase 4: Deployment & Adoption",
            duration: "6 months",
            activities: [
              "Phased rollout across all network facilities",
              "Clinician training and change management",
              "Performance monitoring and optimization",
              "Continuous model improvement and validation"
            ]
          }
        ],
        technologies: [
          { name: "Snowflake", description: "Cloud data warehouse for healthcare analytics" },
          { name: "Apache Kafka", description: "Real-time health data streaming" },
          { name: "Python", description: "ML model development and data processing" },
          { name: "FHIR", description: "Healthcare interoperability standard" },
          { name: "Tableau", description: "Clinical analytics and visualization" },
          { name: "Apache Airflow", description: "Data pipeline orchestration" },
          { name: "AWS HealthLake", description: "HIPAA-compliant data storage" },
          { name: "TensorFlow", description: "Predictive healthcare models" }
        ]
      },
      
      results: {
        title: "Healthcare Transformation Results",
        description: "The platform enabled unprecedented healthcare insights and improved patient outcomes across the network.",
        keyMetrics: [
          {
            icon: BarChart3,
            metric: "100B+",
            label: "Data Points Daily",
            description: "Real-time patient data processing",
            improvement: "From batch to real-time analytics"
          },
          {
            icon: Users,
            metric: "10M+",
            label: "Patients Served",
            description: "Unified care coordination",
            improvement: "Complete medical history access"
          },
          {
            icon: Target,
            metric: "92%",
            label: "Prediction Accuracy",
            description: "Readmission risk identification",
            improvement: "Early intervention capabilities"
          },
          {
            icon: Shield,
            metric: "100%",
            label: "HIPAA Compliance",
            description: "Zero privacy violations",
            improvement: "Centralized security controls"
          },
          {
            icon: TrendingUp,
            metric: "30%",
            label: "Better Outcomes",
            description: "Improved patient care metrics",
            improvement: "Reduced readmissions by 35%"
          },
          {
            icon: Clock,
            metric: "Real-time",
            label: "Clinical Insights",
            description: "Instant access to analytics",
            improvement: "From weeks to seconds"
          }
        ],
        businessImpact: [
          {
            category: "Patient Outcomes",
            items: [
              "35% reduction in 30-day readmissions",
              "25% improvement in chronic disease management",
              "50% faster diagnosis through comprehensive data access",
              "20% reduction in medical errors through alerts"
            ]
          },
          {
            category: "Operational Excellence",
            items: [
              "Real-time visibility into all 200+ facilities",
              "90% reduction in manual reporting time",
              "Unified patient view across entire network",
              "Automated quality measure calculations"
            ]
          },
          {
            category: "Financial Impact",
            items: [
              "$80M annual savings from reduced readmissions",
              "$45M savings through improved resource allocation",
              "$25M reduction in compliance and reporting costs",
              "ROI of 280% achieved within 18 months"
            ]
          },
          {
            category: "Research & Innovation",
            items: [
              "Population health trends identification",
              "Clinical research acceleration through data access",
              "Evidence-based treatment protocol development",
              "Predictive modeling for disease prevention"
            ]
          }
        ]
      },
      
      testimonial: {
        quote: "This platform has transformed how we deliver healthcare. Having real-time access to comprehensive patient data and predictive insights has dramatically improved our ability to provide proactive, coordinated care. The results speak for themselves - better outcomes for patients and significant cost savings.",
        author: "Dr. Jennifer Park",
        title: "Chief Medical Information Officer",
        company: "National Healthcare Network"
      }
    },
    
    "enterprise-ai-knowledge-assistant": {
      id: "enterprise-ai-knowledge-assistant",
      title: "Enterprise AI Knowledge Assistant",
      company: "Fortune 100 Technology Corporation",
      category: "Generative AI & Knowledge Management",
      industry: "Technology",
      timeline: "14 months",
      teamSize: "35 AI specialists",
      client: "Global technology corporation with 200,000+ employees worldwide",
      gradient: "from-violet-500/20 to-indigo-500/20",
      accentColor: "violet",
      icon: Bot,
      
      overview: "Implementation of enterprise-scale generative AI knowledge assistant that transformed how 200,000+ employees access, process, and utilize corporate knowledge across 50+ business units.",
      
      problemStatement: {
        title: "The Challenge: Knowledge Silos at Enterprise Scale",
        description: "Critical business knowledge was trapped in documents, systems, and employee expertise, creating massive inefficiencies and preventing innovation at scale.",
        challenges: [
          {
            icon: BarChart,
            title: "Knowledge Fragmentation",
            description: "10TB+ of business documents across 500+ systems with no unified access",
            impact: "Employees spending 40% of time searching for information"
          },
          {
            icon: Users,
            title: "Expert Dependencies",
            description: "Critical decisions delayed waiting for subject matter expert availability",
            impact: "$25M annual cost from project delays and bottlenecks"
          },
          {
            icon: Clock,
            title: "Onboarding Inefficiency",
            description: "New hires taking 6+ months to reach full productivity",
            impact: "200% longer ramp-time than industry average"
          },
          {
            icon: TrendingUp,
            title: "Innovation Barriers",
            description: "Teams reinventing solutions due to lack of institutional knowledge access",
            impact: "Duplicate R&D efforts costing $40M annually"
          }
        ]
      },
      
      solution: {
        title: "Our Approach: Enterprise Generative AI Platform",
        description: "We built a sophisticated generative AI system that understands, processes, and delivers enterprise knowledge through natural language interactions.",
        approach: [
          {
            phase: "Phase 1: Knowledge Architecture",
            duration: "3 months",
            activities: [
              "Enterprise knowledge audit and taxonomy development",
              "AI model architecture design for domain-specific knowledge",
              "Data pipeline setup for real-time knowledge ingestion",
              "Security framework for sensitive information handling"
            ]
          },
          {
            phase: "Phase 2: AI Model Development",
            duration: "5 months",
            activities: [
              "Custom LLM fine-tuning on enterprise domain knowledge",
              "Retrieval-Augmented Generation (RAG) system implementation",
              "Knowledge graph construction for contextual understanding",
              "Multi-modal AI for processing documents, code, and media"
            ]
          },
          {
            phase: "Phase 3: Integration & Deployment",
            duration: "4 months",
            activities: [
              "Enterprise system integration (Slack, Teams, SharePoint)",
              "Real-time knowledge update mechanisms",
              "User interface development for multiple touchpoints",
              "Governance and compliance controls implementation"
            ]
          },
          {
            phase: "Phase 4: Scale & Optimization",
            duration: "2 months",
            activities: [
              "Global rollout across all business units",
              "Performance optimization and cost management",
              "Advanced analytics and usage insights",
              "Continuous learning system establishment"
            ]
          }
        ],
        technologies: [
          { name: "GPT-4 / Claude", description: "Foundation models for natural language understanding" },
          { name: "LangChain", description: "AI application development framework" },
          { name: "Pinecone", description: "Vector database for semantic search" },
          { name: "Apache Airflow", description: "Knowledge pipeline orchestration" },
          { name: "Elasticsearch", description: "Enterprise search and indexing" },
          { name: "FastAPI", description: "High-performance API development" },
          { name: "React", description: "Interactive user interface development" },
          { name: "Azure OpenAI", description: "Secure enterprise AI model deployment" }
        ]
      },
      
      results: {
        title: "Revolutionary Knowledge Access Results",
        description: "The AI assistant transformed how employees access and utilize knowledge, delivering unprecedented productivity gains and innovation acceleration.",
        keyMetrics: [
          {
            icon: Users,
            metric: "200K+",
            label: "Active Users",
            description: "Enterprise-wide adoption achieved",
            improvement: "95% employee adoption rate"
          },
          {
            icon: Clock,
            metric: "75%",
            label: "Time Savings",
            description: "Reduction in information search time",
            improvement: "From 3.2 hours to 48 minutes daily"
          },
          {
            icon: TrendingUp,
            metric: "300%",
            label: "Productivity Increase",
            description: "Knowledge worker efficiency improvement",
            improvement: "Faster decision-making and execution"
          },
          {
            icon: Target,
            metric: "95%",
            label: "Answer Accuracy",
            description: "AI-generated response reliability",
            improvement: "Human expert validation score"
          },
          {
            icon: DollarSign,
            metric: "$120M",
            label: "Annual Value",
            description: "Total productivity and innovation gains",
            improvement: "ROI of 480% in first year"
          },
          {
            icon: Lightbulb,
            metric: "60%",
            label: "Faster Innovation",
            description: "Accelerated R&D and product development",
            improvement: "Reduced time-to-market significantly"
          }
        ],
        businessImpact: [
          {
            category: "Productivity Revolution",
            items: [
              "75% reduction in time spent searching for information",
              "40% faster project completion through instant expertise access",
              "90% reduction in duplicate work across teams",
              "3x improvement in cross-functional collaboration"
            ]
          },
          {
            category: "Innovation Acceleration",
            items: [
              "60% faster R&D cycles through knowledge discovery",
              "$40M savings from eliminated duplicate research efforts",
              "300% increase in patent filings due to prior art discovery",
              "50% faster competitive analysis and market research"
            ]
          },
          {
            category: "Operational Excellence",
            items: [
              "85% reduction in expert consultation bottlenecks",
              "24/7 availability of institutional knowledge",
              "Automated knowledge capture from meetings and documents",
              "Real-time insights from 10TB+ enterprise knowledge base"
            ]
          },
          {
            category: "Strategic Advantages",
            items: [
              "Democratized access to executive-level insights",
              "Predictive analysis of market trends and opportunities",
              "Automated competitive intelligence and risk assessment",
              "Enhanced decision-making through comprehensive context"
            ]
          }
        ]
      },
      
      testimonial: {
        quote: "This AI knowledge assistant has fundamentally transformed how we work. Our engineers can now access decades of institutional knowledge instantly, our sales teams have expert-level product insights at their fingertips, and our leadership makes decisions with unprecedented context. It's like having our entire organization's expertise available 24/7.",
        author: "Dr. Rachel Kim",
        title: "Chief Innovation Officer",
        company: "Fortune 100 Technology Corporation"
      }
    },

    "ai-powered-customer-service": {
      id: "ai-powered-customer-service",
      title: "AI-Powered Intelligent Customer Service",
      company: "Global Telecommunications Provider",
      category: "Generative AI & Customer Experience",
      industry: "Telecommunications",
      timeline: "16 months",
      teamSize: "42 AI engineers",
      client: "Leading telecom provider serving 80M+ customers across 25 countries",
      gradient: "from-cyan-500/20 to-teal-500/20",
      accentColor: "cyan",
      icon: Users,
      
      overview: "Revolutionary AI-powered customer service transformation using advanced generative AI to deliver personalized, context-aware support across multiple channels while reducing costs and improving satisfaction.",
      
      problemStatement: {
        title: "The Challenge: Scale vs. Quality in Customer Service",
        description: "Managing 80M+ customer interactions while maintaining high-quality, personalized service was becoming impossible with traditional approaches.",
        challenges: [
          {
            icon: Users,
            title: "Overwhelming Volume",
            description: "2M+ daily customer interactions across 15+ channels with peak loads",
            impact: "4-hour average wait times during peak periods"
          },
          {
            icon: DollarSign,
            title: "Escalating Costs",
            description: "25,000 customer service agents with $800M annual operating costs",
            impact: "18% year-over-year cost increase unsustainable"
          },
          {
            icon: TrendingUp,
            title: "Inconsistent Quality",
            description: "Service quality varying dramatically across agents and regions",
            impact: "Customer satisfaction declining 15% annually"
          },
          {
            icon: Clock,
            title: "Resolution Inefficiency",
            description: "65% of issues requiring multiple interactions to resolve",
            impact: "Customer frustration and 25% higher churn rate"
          }
        ]
      },
      
      solution: {
        title: "Our Approach: Generative AI Customer Experience Platform",
        description: "We developed an advanced AI system that understands customer context, provides personalized solutions, and learns continuously from every interaction.",
        approach: [
          {
            phase: "Phase 1: Customer Intelligence Foundation",
            duration: "4 months",
            activities: [
              "Customer journey mapping and interaction analysis",
              "Multi-modal AI architecture for voice, text, and video",
              "Real-time customer context and history integration",
              "Emotional intelligence and sentiment analysis systems"
            ]
          },
          {
            phase: "Phase 2: AI Agent Development",
            duration: "5 months",
            activities: [
              "Large language model fine-tuning for telecom domain",
              "Conversational AI with memory and context awareness",
              "Automated issue detection and solution recommendation",
              "Integration with billing, technical, and product systems"
            ]
          },
          {
            phase: "Phase 3: Omnichannel Integration",
            duration: "4 months",
            activities: [
              "Seamless handoffs between AI and human agents",
              "Voice AI for phone support with natural conversations",
              "Chat and messaging platform integration",
              "Mobile app and web portal AI assistance"
            ]
          },
          {
            phase: "Phase 4: Global Deployment",
            duration: "3 months",
            activities: [
              "Multi-language and cultural adaptation (25 countries)",
              "24/7 global support infrastructure deployment",
              "Advanced analytics and performance monitoring",
              "Continuous learning and model improvement systems"
            ]
          }
        ],
        technologies: [
          { name: "GPT-4 Turbo", description: "Advanced language model for customer interactions" },
          { name: "Azure Cognitive Services", description: "Speech recognition and synthesis" },
          { name: "Rasa", description: "Open-source conversational AI framework" },
          { name: "Apache Kafka", description: "Real-time customer data streaming" },
          { name: "Redis", description: "High-speed session and context management" },
          { name: "Twilio Flex", description: "Contact center infrastructure" },
          { name: "Salesforce Service Cloud", description: "CRM and case management integration" },
          { name: "TensorFlow", description: "Custom AI model development and training" }
        ]
      },
      
      results: {
        title: "Customer Service Transformation Results",
        description: "The AI-powered system revolutionized customer experience while dramatically reducing operational costs and improving efficiency.",
        keyMetrics: [
          {
            icon: Users,
            metric: "80M+",
            label: "Customers Served",
            description: "AI handling majority of interactions",
            improvement: "85% automated resolution rate"
          },
          {
            icon: Clock,
            metric: "30 Sec",
            label: "Average Response",
            description: "Instant AI-powered support",
            improvement: "95% reduction from 4 hours"
          },
          {
            icon: TrendingUp,
            metric: "92%",
            label: "Satisfaction Score",
            description: "Customer satisfaction rating",
            improvement: "+45% improvement from baseline"
          },
          {
            icon: DollarSign,
            metric: "$320M",
            label: "Annual Savings",
            description: "Operational cost reduction",
            improvement: "40% reduction in service costs"
          },
          {
            icon: Target,
            metric: "85%",
            label: "First-Call Resolution",
            description: "Issues resolved in first interaction",
            improvement: "+50% improvement rate"
          },
          {
            icon: Zap,
            metric: "24/7",
            label: "Global Coverage",
            description: "Consistent service across time zones",
            improvement: "No wait times, any time"
          }
        ],
        businessImpact: [
          {
            category: "Customer Experience Excellence",
            items: [
              "92% customer satisfaction score (industry-leading)",
              "85% first-call resolution rate vs 35% previously",
              "Personalized service based on full customer history",
              "Consistent quality across all channels and languages"
            ]
          },
          {
            category: "Operational Transformation",
            items: [
              "85% of interactions handled entirely by AI",
              "40% reduction in operational costs ($320M annually)",
              "50% improvement in agent productivity through AI assistance",
              "24/7 global coverage without staffing constraints"
            ]
          },
          {
            category: "Business Growth Impact",
            items: [
              "25% reduction in customer churn through better service",
              "30% increase in upsell success through AI recommendations",
              "$150M additional revenue from improved retention",
              "Faster expansion into new markets with AI scalability"
            ]
          },
          {
            category: "Innovation & Insights",
            items: [
              "Real-time customer sentiment and trend analysis",
              "Predictive issue identification before customer contact",
              "Automated service improvement recommendations",
              "Continuous learning from 2M+ daily interactions"
            ]
          }
        ]
      },
      
      testimonial: {
        quote: "This AI transformation has exceeded every expectation. Our customers now receive instant, personalized service that's more knowledgeable and helpful than ever before. We've achieved the impossible - dramatically better customer experience at a fraction of the cost. The AI understands context, shows empathy, and resolves issues that previously required our most experienced agents.",
        author: "Maria Santos",
        title: "Chief Customer Experience Officer", 
        company: "Global Telecommunications Provider"
      }
    },

    "devops-transformation": {
      id: "devops-transformation",
      title: "Enterprise DevOps Transformation",
      company: "Global E-commerce Platform",
      category: "DevOps Engineering",
      industry: "E-commerce",
      timeline: "9 months",
      teamSize: "28 engineers",
      client: "Global e-commerce platform serving 500M+ customers worldwide",
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange",
      icon: Zap,
      
      overview: "Complete DevOps transformation enabling continuous deployment, automated testing, and infrastructure as code across a global e-commerce platform serving millions of customers.",
      
      problemStatement: {
        title: "The Challenge: Legacy Development Bottlenecks",
        description: "Manual deployment processes and fragmented tooling created significant bottlenecks that hindered competitive response and innovation speed.",
        challenges: [
          {
            icon: Clock,
            title: "Slow Release Cycles",
            description: "Quarterly releases took 6 weeks to deploy with high failure rates",
            impact: "Missed seasonal opportunities worth $150M annually"
          },
          {
            icon: Target,
            title: "Manual Process Risks",
            description: "70% of deployments required rollbacks due to manual errors",
            impact: "Average 4-hour downtime per failed deployment"
          },
          {
            icon: Cog,
            title: "Infrastructure Sprawl",
            description: "200+ servers managed manually across multiple data centers",
            impact: "90% over-provisioning and $2M annual waste"
          },
          {
            icon: Users,
            title: "Team Dependencies",
            description: "Development teams blocked by operations bottlenecks",
            impact: "75% of developer time spent waiting for deployments"
          }
        ]
      },
      
      solution: {
        title: "Our Approach: Complete DevOps Automation",
        description: "We implemented a comprehensive DevOps platform with CI/CD automation, infrastructure as code, and comprehensive monitoring.",
        approach: [
          {
            phase: "Phase 1: Foundation Setup",
            duration: "2 months",
            activities: [
              "CI/CD pipeline architecture design and tooling selection",
              "Version control consolidation and branching strategy",
              "Infrastructure as Code (IaC) framework establishment",
              "Security and compliance integration planning"
            ]
          },
          {
            phase: "Phase 2: Pipeline Development",
            duration: "3 months",
            activities: [
              "Automated build and test pipeline implementation",
              "Deployment automation with blue-green strategies",
              "Infrastructure provisioning automation",
              "Monitoring and alerting system integration"
            ]
          },
          {
            phase: "Phase 3: Platform Integration",
            duration: "3 months",
            activities: [
              "Legacy application containerization",
              "Microservices architecture transition",
              "Database deployment automation",
              "Security scanning and compliance automation"
            ]
          },
          {
            phase: "Phase 4: Optimization & Training",
            duration: "1 month",
            activities: [
              "Performance optimization and fine-tuning",
              "Team training and knowledge transfer",
              "Best practices documentation and governance",
              "Continuous improvement process establishment"
            ]
          }
        ],
        technologies: [
          { name: "Jenkins", description: "CI/CD orchestration and pipeline automation" },
          { name: "Docker", description: "Application containerization and portability" },
          { name: "Kubernetes", description: "Container orchestration and scaling" },
          { name: "Ansible", description: "Configuration management and automation" },
          { name: "Terraform", description: "Infrastructure as Code provisioning" },
          { name: "Prometheus", description: "Monitoring and metrics collection" },
          { name: "Grafana", description: "Visualization and alerting dashboards" },
          { name: "SonarQube", description: "Code quality and security scanning" }
        ]
      },
      
      results: {
        title: "DevOps Transformation Results",
        description: "The transformation delivered dramatic improvements in deployment speed, reliability, and team productivity.",
        keyMetrics: [
          {
            icon: Zap,
            metric: "Daily",
            label: "Deployment Frequency",
            description: "From quarterly to multiple daily releases",
            improvement: "100x increase in deployment speed"
          },
          {
            icon: Clock,
            metric: "2 Hours",
            label: "Lead Time",
            description: "Code to production deployment time",
            improvement: "95% reduction from 6 weeks"
          },
          {
            icon: Shield,
            metric: "99.9%",
            label: "Success Rate",
            description: "Deployment success without rollbacks",
            improvement: "From 30% to 99.9% success"
          },
          {
            icon: TrendingUp,
            metric: "200%",
            label: "Productivity Gain",
            description: "Developer productivity improvement",
            improvement: "More time on feature development"
          },
          {
            icon: DollarSign,
            metric: "$8M",
            label: "Annual Savings",
            description: "Infrastructure and operational costs",
            improvement: "40% reduction in cloud spending"
          },
          {
            icon: Target,
            metric: "Zero",
            label: "Failed Deployments",
            description: "Production incidents from deployments",
            improvement: "Eliminated weekend war rooms"
          }
        ],
        businessImpact: [
          {
            category: "Speed to Market",
            items: [
              "Daily releases vs quarterly (100x improvement)",
              "Feature time-to-market reduced by 90%",
              "Instant rollback capabilities for failed features",
              "A/B testing deployed within hours of development"
            ]
          },
          {
            category: "Reliability & Quality",
            items: [
              "99.9% deployment success rate vs 30% previously",
              "Zero production outages from deployments",
              "Automated security and quality gates",
              "Comprehensive monitoring and alerting"
            ]
          },
          {
            category: "Cost Optimization",
            items: [
              "$8M annual savings through automation",
              "60% reduction in infrastructure costs",
              "90% reduction in manual deployment effort",
              "Eliminated weekend deployment overtime costs"
            ]
          },
          {
            category: "Team Productivity",
            items: [
              "200% increase in developer productivity",
              "75% reduction in deployment-related incidents",
              "Self-service deployment capabilities for all teams",
              "Focus shift from operations to innovation"
            ]
          }
        ]
      },
      
      testimonial: {
        quote: "This DevOps transformation has been game-changing for our business. We went from quarterly releases with constant issues to daily deployments with zero downtime. Our ability to respond to market demands and customer needs has improved dramatically. The ROI has exceeded all expectations.",
        author: "Alex Thompson",
        title: "VP of Engineering",
        company: "Global E-commerce Platform"
      }
    }
  }

  const caseStudy = caseStudiesData[id as keyof typeof caseStudiesData]

  if (!caseStudy) {
    notFound()
  }

  const IconComponent = caseStudy.icon

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ padding: 'clamp(6rem, 12vh, 8rem) 0 clamp(4rem, 8vh, 6rem) 0' }}>
        <div className="absolute inset-0">
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5", caseStudy.gradient)} />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className={cn(
                  "rounded-xl p-4",
                  caseStudy.accentColor === 'blue' && "bg-blue-500/10",
                  caseStudy.accentColor === 'purple' && "bg-purple-500/10",
                  caseStudy.accentColor === 'green' && "bg-green-500/10",
                  caseStudy.accentColor === 'orange' && "bg-orange-500/10",
                  caseStudy.accentColor === 'violet' && "bg-violet-500/10",
                  caseStudy.accentColor === 'cyan' && "bg-cyan-500/10"
                )}
                whileHover={{ scale: 1.05 }}
              >
                <IconComponent 
                  className={cn(
                    "w-8 h-8",
                    caseStudy.accentColor === 'blue' && "text-blue-500",
                    caseStudy.accentColor === 'purple' && "text-purple-500",
                    caseStudy.accentColor === 'green' && "text-green-500",
                    caseStudy.accentColor === 'orange' && "text-orange-500",
                    caseStudy.accentColor === 'violet' && "text-violet-500",
                    caseStudy.accentColor === 'cyan' && "text-cyan-500"
                  )}
                />
              </motion.div>
              
              <div>
                <Badge variant="secondary" className="mb-2">{caseStudy.industry}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {caseStudy.timeline}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {caseStudy.teamSize}
                  </span>
                </div>
              </div>
            </div>
            
            <h1 
              className="leading-tight text-balance font-heading mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              <AnimatedText
                text={caseStudy.title}
                animation="splitWords"
                className="inline-block"
                stagger={0.1}
              />
            </h1>
            
            <div className="mb-8">
              <p className="text-xl text-muted-foreground mb-4">{caseStudy.company}</p>
              <p className="text-lg text-foreground leading-relaxed">{caseStudy.overview}</p>
            </div>

            {/* Key Metrics Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.results.keyMetrics.slice(0, 4).map((metric, index) => {
                const MetricIcon = metric.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <MetricIcon className={cn(
                      "w-6 h-6 mx-auto mb-2",
                      caseStudy.accentColor === 'blue' && "text-blue-500",
                      caseStudy.accentColor === 'purple' && "text-purple-500",
                      caseStudy.accentColor === 'green' && "text-green-500",
                      caseStudy.accentColor === 'orange' && "text-orange-500",
                      caseStudy.accentColor === 'violet' && "text-violet-500",
                      caseStudy.accentColor === 'cyan' && "text-cyan-500"
                    )} />
                    <div className="text-2xl font-bold text-foreground">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">{caseStudy.problemStatement.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{caseStudy.problemStatement.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.problemStatement.challenges.map((challenge, index) => {
                const ChallengeIcon = challenge.icon
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-red-500/10 flex-shrink-0">
                        <ChallengeIcon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                        <p className="text-muted-foreground mb-3">{challenge.description}</p>
                        <p className="text-sm text-red-400 font-medium">{challenge.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">{caseStudy.solution.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{caseStudy.solution.description}</p>
            </div>

            {/* Implementation Phases */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Implementation Phases</h3>
              <div className="space-y-6">
                {caseStudy.solution.approach.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-xl"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg",
                        caseStudy.accentColor === 'blue' && "bg-blue-500",
                        caseStudy.accentColor === 'purple' && "bg-purple-500",
                        caseStudy.accentColor === 'green' && "bg-green-500",
                        caseStudy.accentColor === 'orange' && "bg-orange-500",
                        caseStudy.accentColor === 'violet' && "bg-violet-500",
                        caseStudy.accentColor === 'cyan' && "bg-cyan-500"
                      )}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-foreground">{phase.phase}</h4>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technologies & Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {caseStudy.solution.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 rounded-xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="font-semibold text-foreground mb-2">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & ROI */}
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
              <h2 className="text-3xl font-bold text-foreground mb-4">{caseStudy.results.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{caseStudy.results.description}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {caseStudy.results.keyMetrics.map((metric, index) => {
                const MetricIcon = metric.icon
                return (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <MetricIcon className={cn(
                      "w-8 h-8 mx-auto mb-4",
                      caseStudy.accentColor === 'blue' && "text-blue-500",
                      caseStudy.accentColor === 'purple' && "text-purple-500",
                      caseStudy.accentColor === 'green' && "text-green-500",
                      caseStudy.accentColor === 'orange' && "text-orange-500",
                      caseStudy.accentColor === 'violet' && "text-violet-500",
                      caseStudy.accentColor === 'cyan' && "text-cyan-500"
                    )} />
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.metric}</div>
                    <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
                    <p className="text-sm text-muted-foreground mb-2">{metric.description}</p>
                    <p className="text-sm font-medium text-green-400">{metric.improvement}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Business Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudy.results.businessImpact.map((category, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-16 bg-muted/20">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-xl">
              <div className="text-6xl text-muted-foreground mb-6">"</div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-8 italic">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-semibold text-foreground text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.title}</div>
                <div className="text-sm text-muted-foreground">{caseStudy.testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="section-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can deliver similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="enterprise-button text-white font-semibold group">
                  <span className="flex items-center gap-2">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="font-semibold">
                  <span className="flex items-center gap-2">
                    View More Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  )
}

export default CaseStudyPage