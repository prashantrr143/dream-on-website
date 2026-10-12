import type { Article } from '../types'

export const article: Article = {
  slug: 'soc-2-evidence-from-pipelines',
  title: 'SOC 2 evidence your delivery pipeline can produce',
  summary:
    'How GitHub Actions, Azure DevOps and an Azure estate map to SOC 2 change, access and operations criteria, and how to export evidence an auditor can sample.',
  category: 'Security & Compliance',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'draft',
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'The first enterprise security questionnaire usually arrives before a SaaS company has a SOC 2 report, and the second one asks when it will have one. Most of the controls an auditor will test already exist in some form inside the delivery pipeline: who approved a change, what was deployed, who had production access and when. The problem is rarely that the controls are missing. It is that the evidence is scattered, partly retained and hard to export.',
        'This article maps the SOC 2 criteria that engineering teams own to artifacts that GitHub Actions, Azure DevOps and Azure itself can produce, and covers what to fix so the evidence still exists at the end of an audit period.',
      ],
    },
    {
      heading: 'Type I and Type II test different things',
      paragraphs: [
        'SOC 2 examinations use the AICPA 2017 Trust Services Criteria. They cover five categories: security, availability, processing integrity, confidentiality and privacy. The security criteria, known as the common criteria, apply to every SOC 2 engagement; the other categories are added depending on what you commit to customers.',
        'A Type II report includes an opinion on whether controls operated effectively throughout a specified period, along with the auditor\'s description of the tests performed and their results. A Type I report addresses the same system description and control design but contains neither an operating effectiveness opinion nor the detailed tests. In practice, a Type I shows the controls exist on a date. A Type II shows they kept working for months, and that is the report enterprise buyers usually ask for.',
        'That distinction is why pipelines matter. A Type II auditor will want evidence from across the whole period, not a screenshot of today\'s settings.',
      ],
    },
    {
      heading: 'Change management (CC8.1): the pipeline already records most of it',
      paragraphs: [
        'CC8.1 says the entity authorizes, designs, develops or acquires, configures, documents, tests, approves and implements changes to infrastructure, data, software and procedures. A pipeline with the right settings produces a record of each of those steps for every change.',
      ],
      bullets: [
        'Protected branches or rulesets in GitHub: require a set number of approving reviews before merge, require code owner review, dismiss stale approvals when new commits change the diff, and require the most recent push to be approved by someone other than the person who pushed it. Turn on the setting that applies these rules to administrators too; by default they can bypass them.',
        'Required status checks: tests and scans must pass before a pull request can merge. The check results attached to each pull request are your test evidence.',
        'GitHub Actions environments: up to six required reviewers per environment, a "prevent self-review" option, and restrictions on which branches and tags can deploy. Environment secrets are only released to a job after those rules pass. On GitHub Free, environments are only available for public repositories.',
        'Azure Pipelines approvals and checks: approvals on environments, service connections and other resources, an option to stop approvers approving their own runs, branch control, and a required template check. These checks are managed outside the YAML file, so someone editing the pipeline cannot remove them. If an administrator bypasses a check, the checks panel records who did it.',
        'Infrastructure as code: keep the Bicep what-if output or the saved Terraform plan with each production change, so the approver can see exactly what they approved.',
      ],
    },
    {
      heading: 'Access (CC6.1 to CC6.3): reviews and just-in-time elevation',
      paragraphs: [
        'CC6.2 requires that users are registered and authorized before credentials are issued and that credentials are removed when access is no longer authorized. CC6.3 covers granting, changing and removing access based on roles, with attention to least privilege and segregation of duties. Periodic review of access is one of the points of focus under both.',
        'In an Azure estate, Microsoft Entra access reviews handle the periodic part. They can review group membership, application assignments, Entra roles and Azure resource roles, and they can recur weekly, monthly, quarterly or annually. Privileged Identity Management (PIM) handles elevation: eligible rather than standing assignments, time-bound activation, approval, MFA and a recorded justification for each activation, plus downloadable audit history. Both are licensed features: access reviews need Microsoft Entra ID Governance or Microsoft Entra Suite, with some capabilities available on Entra ID P2, so check licensing before you build controls around them.',
        'Physical access (CC6.4) for Azure data centers is Microsoft\'s control, not yours. Download Azure\'s SOC 2 Type 2 report from the Service Trust Portal and read its "User Entity Responsibilities" section. It lists what Microsoft expects you to do for the overall system to meet the criteria, and your auditor will read it too.',
      ],
    },
    {
      heading: 'System operations (CC7): scanning, drift and logs',
      paragraphs: [
        'CC7.1 asks for detection and monitoring procedures that identify configuration changes that introduce vulnerabilities, and exposure to newly discovered vulnerabilities. CC7.2 asks you to monitor system components for anomalies and analyze them as possible security events.',
      ],
      bullets: [
        'Vulnerability scanning: GitHub code scanning alerts carry created, dismissed and fixed timestamps and can be listed by API for a repository or an organization. That gives you time-to-remediate and a record of who dismissed what, which a screenshot cannot.',
        'Drift detection: a scheduled terraform plan with -detailed-exitcode returns 2 when the live estate differs from code, and -refresh-only shows changes made outside Terraform. A scheduled Bicep what-if does the same job for Bicep. Keep the output of every run, including runs that found no changes.',
        'Control-plane logs: Azure keeps activity log events for 90 days and then deletes them. If your audit period is longer than that, which a Type II period usually is, create a diagnostic setting that sends them to a Log Analytics workspace (retention configurable up to 12 years) or a storage account. Do this before the audit period starts.',
      ],
    },
    {
      heading: 'What gets sampled, and how to make it exportable',
      paragraphs: [
        'For a Type II, expect the auditor to ask for a full population and then pick items from it: every production deployment in the period, every access grant and removal, every quarterly access review, every high-severity vulnerability and how long it stayed open. Then they ask for the evidence behind each sampled item. The questions are predictable. Was this change reviewed by someone other than its author? Was the deployment approved? Was this leaver\'s access removed? Did the review happen on schedule?',
        'Three habits make this cheap instead of painful.',
      ],
      bullets: [
        'Export on a schedule, not on request. The GitHub organization audit log covers 180 days and can be exported as JSON or CSV; enterprise accounts on GitHub Enterprise Cloud can stream audit and Git events to destinations including Azure Blob Storage and Azure Event Hubs. GitHub deployment records can be deleted through the API, so do not treat them as your system of record.',
        'Store evidence where it cannot be edited. Azure Blob immutable storage holds data in a write-once, read-many state under a time-based retention policy, and once that policy is locked its retention period can be extended but not shortened.',
        'Join records on identifiers. A pull request number, commit SHA, pipeline run ID and Azure deployment correlation ID let you trace one change from review to production without anyone hunting through screenshots.',
      ],
    },
    {
      heading: 'Where to start',
      paragraphs: [
        'Settings take an afternoon. The harder work is deciding which controls you will claim, writing them as they actually operate, and setting up retention early enough that the evidence covers the whole period. If you are not yet ready for an auditor but need to answer enterprise questionnaires now, YatiSphere can help produce questionnaire answers, an evidence pack and a gap list, with all code and configuration kept in your own GitHub, Azure DevOps and Azure accounts. YatiSphere is not an audit firm. The SOC 2 opinion itself comes from an independent CPA firm.',
      ],
    },
  ],
  sources: [
    {
      title: '2017 Trust Services Criteria (with revised points of focus, 2022)',
      url: 'https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022',
      publisher: 'AICPA & CIMA',
    },
    {
      title: 'System and Organization Controls (SOC) 2 Type 2 - Azure compliance',
      url: 'https://learn.microsoft.com/en-us/azure/compliance/offerings/offering-soc-2',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'System and Organization Controls (SOC) 2 Type 2 - Microsoft compliance',
      url: 'https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'About protected branches',
      url: 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches',
      publisher: 'GitHub Docs',
    },
    {
      title: 'Managing environments for deployment',
      url: 'https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment',
      publisher: 'GitHub Docs',
    },
    {
      title: 'Pipeline deployment approvals',
      url: 'https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'What are access reviews?',
      url: 'https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'What is Privileged Identity Management?',
      url: 'https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Bicep what-if: preview changes before deployment',
      url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-what-if',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Command: plan',
      url: 'https://developer.hashicorp.com/terraform/cli/commands/plan',
      publisher: 'HashiCorp',
    },
    {
      title: 'REST API endpoints for code scanning',
      url: 'https://docs.github.com/en/rest/code-scanning/code-scanning',
      publisher: 'GitHub Docs',
    },
    {
      title: 'REST API endpoints for deployments',
      url: 'https://docs.github.com/en/rest/deployments/deployments',
      publisher: 'GitHub Docs',
    },
    {
      title: 'Activity log in Azure Monitor',
      url: 'https://learn.microsoft.com/en-us/azure/azure-monitor/platform/activity-log',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Reviewing the audit log for your organization',
      url: 'https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization',
      publisher: 'GitHub Docs',
    },
    {
      title: 'Streaming the audit log for your enterprise',
      url: 'https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise',
      publisher: 'GitHub Docs',
    },
    {
      title: 'Immutable storage for blob data overview',
      url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview',
      publisher: 'Microsoft Learn',
    },
  ],
  related: [
    { label: 'Security and compliance engineering', href: '/what-we-do/services/security-compliance' },
    { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering' },
    { label: 'Software and SaaS', href: '/what-we-do/industries/software-saas' },
  ],
}
