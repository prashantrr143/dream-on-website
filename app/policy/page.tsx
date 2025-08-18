"use client"

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { 
 Shield, 
 Calendar,
 Mail,
 Phone,
 MapPin
} from 'lucide-react'

const PrivacyPolicy = () => {
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.05,
       delayChildren: 0.1
     }
   }
 }

 const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { 
     opacity: 1, 
     y: 0,
     transition: { 
       duration: 0.4
     }
   }
 }

 return (
   <div className="min-h-screen bg-background">
     {/* Header */}
     <section className="py-16 lg:py-20 border-b border-border">
       <div className="section-container">
         <motion.div
           className="max-w-4xl mx-auto"
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           <motion.div variants={itemVariants}>
             <Badge 
               variant="secondary" 
               className="mb-6"
             >
               <Shield className="w-4 h-4 mr-2" />
               Legal Document
             </Badge>

             <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
               Privacy Policy
             </h1>

             <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground mb-8">
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 <span>Effective Date: January 1, 2025</span>
               </div>
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 <span>Last Updated: January 1, 2025</span>
               </div>
             </div>

             <p className="text-lg text-muted-foreground leading-relaxed">
               This Privacy Policy describes how [Your Company Name] ("Company," "we," "our," or "us") 
               collects, uses, processes, and protects your personal information when you use our services, 
               website, and related platforms.
             </p>
           </motion.div>
         </motion.div>
       </div>
     </section>

     {/* Main Content */}
     <section className="py-16">
       <div className="section-container">
         <div className="max-w-4xl mx-auto">
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="space-y-12"
           >
             {/* Section 1 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">1. Information We Collect</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">1.1 Information You Provide Directly</h3>
                     <p className="text-muted-foreground mb-4">We collect information you voluntarily provide when using our services:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Contact information (name, email address, phone number, company details)</li>
                       <li className="list-disc">Account credentials and profile information</li>
                       <li className="list-disc">Payment and billing information</li>
                       <li className="list-disc">Communication preferences and marketing consents</li>
                       <li className="list-disc">Support requests, feedback, and correspondence</li>
                       <li className="list-disc">Content you upload, share, or transmit through our services</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">1.2 Information Collected Automatically</h3>
                     <p className="text-muted-foreground mb-4">We automatically collect certain information when you use our services:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Device information (IP address, browser type, operating system, device identifiers)</li>
                       <li className="list-disc">Usage data (pages visited, time spent, features used, click patterns)</li>
                       <li className="list-disc">Technical logs, performance metrics, and error reports</li>
                       <li className="list-disc">Cookies and similar tracking technologies</li>
                       <li className="list-disc">Location data (if enabled and consented to)</li>
                       <li className="list-disc">Service interaction data and API usage statistics</li>
                     </ul>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 2 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">2. How We Use Your Information</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">2.1 Primary Business Purposes</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Providing, maintaining, and improving our cloud infrastructure and related services</li>
                       <li className="list-disc">Processing payments, managing billing, and handling financial transactions</li>
                       <li className="list-disc">Delivering customer support, technical assistance, and account management</li>
                       <li className="list-disc">Authenticating users and preventing unauthorized access or fraud</li>
                       <li className="list-disc">Monitoring service performance, security, and system integrity</li>
                       <li className="list-disc">Sending important service notifications, updates, and security alerts</li>
                       <li className="list-disc">Complying with legal obligations and regulatory requirements</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">2.2 Secondary Purposes (with appropriate consent)</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Sending marketing communications about our services and industry insights</li>
                       <li className="list-disc">Conducting product development, research, and service improvement</li>
                       <li className="list-disc">Performing analytics and usage pattern analysis</li>
                       <li className="list-disc">Personalizing user experience and service recommendations</li>
                       <li className="list-disc">Conducting industry research, benchmarking, and market analysis</li>
                     </ul>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 3 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">3. Information Sharing and Disclosure</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">3.1 Authorized Third Parties</h3>
                     <p className="text-muted-foreground mb-4">We may share your information with trusted third parties in the following circumstances:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc"><strong>Service Providers:</strong> Vendors who help operate our business (hosting, analytics, customer support)</li>
                       <li className="list-disc"><strong>Cloud Partners:</strong> Infrastructure providers (AWS, Microsoft Azure, Google Cloud Platform)</li>
                       <li className="list-disc"><strong>Payment Processors:</strong> Financial institutions and payment service providers</li>
                       <li className="list-disc"><strong>Security Providers:</strong> Companies that help monitor and protect our systems</li>
                       <li className="list-disc"><strong>Business Partners:</strong> Joint service offerings (only with your explicit consent)</li>
                       <li className="list-disc"><strong>Legal Authorities:</strong> When required by law, court order, or regulatory request</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">3.2 Prohibited Uses</h3>
                     <p className="text-muted-foreground mb-4">We do NOT sell, rent, or share your personal information with:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Third-party marketers or advertisers for their own purposes</li>
                       <li className="list-disc">Data brokers or information aggregation services</li>
                       <li className="list-disc">Competitors or unauthorized parties</li>
                       <li className="list-disc">Any entity for commercial purposes unrelated to our services</li>
                     </ul>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 4 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">4. Data Security and Protection</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">4.1 Technical Safeguards</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">End-to-end encryption for data in transit and at rest using industry-standard protocols</li>
                       <li className="list-disc">Multi-factor authentication and role-based access controls</li>
                       <li className="list-disc">Regular security audits, vulnerability assessments, and penetration testing</li>
                       <li className="list-disc">SOC 2 Type II and ISO 27001 compliance certification</li>
                       <li className="list-disc">Automated threat detection, monitoring, and incident response systems</li>
                       <li className="list-disc">Regular security updates, patch management, and system hardening</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">4.2 Organizational Safeguards</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Comprehensive employee background checks and security training programs</li>
                       <li className="list-disc">Strict access controls based on principle of least privilege and need-to-know</li>
                       <li className="list-disc">Regular privacy and security policy reviews and updates</li>
                       <li className="list-disc">Documented incident response and data breach notification procedures</li>
                       <li className="list-disc">Third-party vendor security assessments and contractual obligations</li>
                       <li className="list-disc">Secure data retention, archival, and disposal policies</li>
                     </ul>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 5 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">5. Your Privacy Rights</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">5.1 Individual Rights</h3>
                     <p className="text-muted-foreground mb-4">Under applicable privacy laws (GDPR, CCPA, and others), you have the following rights:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc"><strong>Access:</strong> Request access to your personal data and obtain a copy</li>
                       <li className="list-disc"><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                       <li className="list-disc"><strong>Erasure:</strong> Request deletion of your personal data (right to be forgotten)</li>
                       <li className="list-disc"><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                       <li className="list-disc"><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                       <li className="list-disc"><strong>Objection:</strong> Object to certain types of processing, including marketing</li>
                       <li className="list-disc"><strong>Withdrawal:</strong> Withdraw previously given consent at any time</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">5.2 How to Exercise Your Rights</h3>
                     <p className="text-muted-foreground mb-4">To exercise any of these rights, please contact us using one of the following methods:</p>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Email our Privacy Officer at: <strong>privacy@company.com</strong></li>
                       <li className="list-disc">Use our online privacy request form on our website</li>
                       <li className="list-disc">Call our dedicated privacy hotline: <strong>+1 (555) 123-4567</strong></li>
                       <li className="list-disc">Submit requests through your account settings portal</li>
                     </ul>
                     <p className="text-muted-foreground mt-4">
                       We will respond to your request within 30 days. Identity verification may be required 
                       for security purposes before processing certain requests.
                     </p>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 6 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">6. Data Retention</h2>
                 
                 <p className="text-muted-foreground mb-6">
                   We retain your personal information only for as long as necessary to fulfill the purposes 
                   outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                 </p>

                 <div className="bg-muted/30 p-6 rounded-lg">
                   <h3 className="text-lg font-semibold mb-4 text-foreground">Retention Periods by Data Type:</h3>
                   <ul className="space-y-2 text-muted-foreground">
                     <li><strong>Account Data:</strong> Retained while your account is active plus 3 years after closure</li>
                     <li><strong>Transaction Records:</strong> Retained for 7 years for tax, audit, and legal compliance</li>
                     <li><strong>Marketing Data:</strong> Retained until you opt-out or after 2 years of inactivity</li>
                     <li><strong>Support Records:</strong> Retained for 3 years after case closure for quality assurance</li>
                     <li><strong>Security Logs:</strong> Retained for 1 year for security monitoring and incident response</li>
                     <li><strong>Analytics Data:</strong> Aggregated data retained indefinitely; personal identifiers removed after 2 years</li>
                   </ul>
                 </div>
               </Card>
             </motion.div>

             {/* Section 7 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">7. International Data Transfers</h2>
                 
                 <p className="text-muted-foreground mb-6">
                   Your personal information may be transferred to and processed in countries other than your 
                   country of residence. We ensure adequate protection for international transfers through:
                 </p>

                 <ul className="space-y-2 text-muted-foreground ml-6 mb-6">
                   <li className="list-disc">Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                   <li className="list-disc">Data Processing Agreements with all third-party processors and vendors</li>
                   <li className="list-disc">Adequacy decisions for transfers to countries with recognized data protection laws</li>
                   <li className="list-disc">Regular compliance audits of international data handling practices</li>
                   <li className="list-disc">Additional safeguards as required by applicable privacy laws</li>
                 </ul>

                 <p className="text-muted-foreground">
                   For transfers outside of jurisdictions with adequate data protection laws, we implement 
                   additional technical and organizational measures to ensure your data remains protected.
                 </p>
               </Card>
             </motion.div>

             {/* Section 8 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">8. Cookies and Tracking Technologies</h2>
                 
                 <div className="space-y-6">
                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">8.1 Types of Cookies We Use</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc"><strong>Essential Cookies:</strong> Required for website functionality, security, and basic operations</li>
                       <li className="list-disc"><strong>Performance Cookies:</strong> Help us analyze website usage and improve user experience</li>
                       <li className="list-disc"><strong>Functional Cookies:</strong> Remember your preferences and provide enhanced features</li>
                       <li className="list-disc"><strong>Marketing Cookies:</strong> Used for targeted advertising (only with your consent)</li>
                       <li className="list-disc"><strong>Third-party Cookies:</strong> Analytics and advertising cookies from trusted partners</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-xl font-semibold mb-4 text-foreground">8.2 Managing Cookie Preferences</h3>
                     <ul className="space-y-2 text-muted-foreground ml-6">
                       <li className="list-disc">Use our cookie consent banner to manage your preferences</li>
                       <li className="list-disc">Adjust settings in your browser's privacy and security controls</li>
                       <li className="list-disc">Opt-out of Google Analytics using their browser opt-out plugin</li>
                       <li className="list-disc">Disable third-party cookies through your browser settings</li>
                       <li className="list-disc">Clear existing cookies through your browser's privacy settings</li>
                     </ul>
                     <p className="text-muted-foreground mt-4">
                       <strong>Note:</strong> Disabling essential cookies may affect the functionality of our services.
                     </p>
                   </div>
                 </div>
               </Card>
             </motion.div>

             {/* Section 9 */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">9. Changes to This Privacy Policy</h2>
                 
                 <p className="text-muted-foreground mb-6">
                   We may update this Privacy Policy from time to time to reflect changes in our practices, 
                   technology, legal requirements, or other factors. When we make changes:
                 </p>

                 <ul className="space-y-2 text-muted-foreground ml-6 mb-6">
                   <li className="list-disc">We will notify registered users via email at least 30 days before changes take effect</li>
                   <li className="list-disc">We will post a prominent notice on our website for 30 days</li>
                   <li className="list-disc">The effective date at the top of this policy will be updated</li>
                   <li className="list-disc">For material changes, we may seek your explicit consent before implementing</li>
                   <li className="list-disc">Previous versions will be archived and available upon request</li>
                 </ul>

                 <p className="text-muted-foreground">
                   Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                 </p>
               </Card>
             </motion.div>

             {/* Contact Information */}
             <motion.div variants={itemVariants}>
               <Card className="p-8 lg:p-12">
                 <h2 className="text-2xl font-bold mb-6 text-foreground">10. Contact Information</h2>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                   <div>
                     <h3 className="text-lg font-semibold mb-4 text-foreground">Privacy Officer</h3>
                     <div className="space-y-3">
                       <div className="flex items-center gap-3">
                         <Mail className="w-5 h-5 text-muted-foreground" />
                         <span className="text-muted-foreground">privacy@company.com</span>
                       </div>
                       <div className="flex items-center gap-3">
                         <Phone className="w-5 h-5 text-muted-foreground" />
                         <span className="text-muted-foreground">+1 (555) 123-4567</span>
                       </div>
                       <div className="flex items-start gap-3">
                         <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                         <div className="text-muted-foreground">
                           [Your Company Name]<br />
                           123 Business Avenue, Suite 100<br />
                           San Francisco, CA 94105<br />
                           United States
                         </div>
                       </div>
                     </div>
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold mb-4 text-foreground">Response Commitments</h3>
                     <ul className="space-y-2 text-muted-foreground">
                       <li><strong>Privacy Rights Requests:</strong> 30 days maximum response time</li>
                       <li><strong>General Privacy Inquiries:</strong> 5 business days</li>
                       <li><strong>Data Breach Notifications:</strong> 72 hours to authorities, immediate to affected users</li>
                       <li><strong>Urgent Security Matters:</strong> 24-48 hours</li>
                     </ul>
                   </div>
                 </div>

                 <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                   <p className="text-sm text-muted-foreground">
                     If you have concerns about how we handle your personal information that we cannot resolve directly, 
                     you have the right to lodge a complaint with your local data protection authority.
                   </p>
                 </div>
               </Card>
             </motion.div>
           </motion.div>
         </div>
       </div>
     </section>
   </div>
 )
}

export default PrivacyPolicy