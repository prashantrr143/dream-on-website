import type { Article } from '../types'

export const article: Article = {
  slug: 'azure-finops-quick-wins',
  title: 'Azure FinOps quick wins, ordered by effort',
  summary:
    'Practical Azure cost actions, from tagging and anomaly alerts to commitment discounts and storage lifecycle rules, in the order most teams can deliver.',
  category: 'Cloud',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-10-19',
  tags: { industries: [], services: ['cloud', 'finops', 'managed-operations'], clouds: ['microsoft-azure'] },
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'Most Azure bills carry the same handful of avoidable costs: resources nobody owns, machines sized for a peak that never arrived, disks left behind after a VM was deleted, and steady workloads still paying on-demand rates. None of these need a new platform to fix. They need someone to look, decide and follow through, in a sensible order.',
        'The FinOps Foundation describes that work as three phases that repeat rather than finish. In Inform, teams examine cost, usage and efficiency data to understand what they spend and what they get for it. In Optimize, they use that picture to identify opportunities to improve efficiency and value. In Operate, they implement the changes identified in Optimize and loop back to the earlier phases. The actions below follow the same order: visibility first, then cleanup, then commitments.',
      ],
    },
    {
      heading: 'Start with ownership: tags, budgets and anomaly alerts',
      paragraphs: [
        'You cannot hold anyone accountable for a cost you cannot attribute. Agree a short set of required tags, such as owner, cost center and environment, and enforce them with Azure Policy rather than a wiki page. Built-in definitions such as "Require a tag on resource groups" deny deployments that skip the tag, and "Inherit a tag from the resource group if missing" fills gaps on child resources, with remediation tasks for resources that already exist.',
        'Cost Management can also apply subscription and resource group tags to usage records through tag inheritance, available for Enterprise Agreement, Microsoft Customer Agreement and Microsoft Partner Agreement accounts. It changes the cost data, not the resources, and it backfills the current month once enabled. That makes it a fast way to get usable cost allocation while policy cleanup catches up.',
        'With ownership in place, add two kinds of alerting in Microsoft Cost Management:',
      ],
      bullets: [
        'Budgets at subscription or resource group scope, with both actual and forecasted thresholds. Microsoft notes that budgets notify but do not stop resources, and that costs are evaluated every 24 hours, so treat them as an early warning, not a spending cap. Budgets at subscription and resource group scope can also trigger an action group for automation.',
        'Anomaly alerts, created per subscription. Cost Management compares each day against a forecast built from the previous 60 days of usage and emails the recipients once when it finds an outlier. Anomaly alerts are not available in Azure Government or other sovereign clouds.',
      ],
    },
    {
      heading: 'Remove what nobody is using',
      paragraphs: [
        'Azure Advisor is the cheapest second step because it is already running. For virtual machines and scale sets it recommends shutdown when CPU and outbound network use stay near zero, and resizing when the load would fit a cheaper SKU. The default lookback is seven days and can be extended to as long as 90, which is worth doing for workloads with monthly cycles. Two caveats from Microsoft matter for finance teams: Advisor estimates savings at retail rates, and it does not account for existing reservations or savings plans, so the real figure can be lower than the one shown.',
        'Then look for orphaned resources that keep billing after the workload has gone:',
      ],
      bullets: [
        'Unattached managed disks. Deleting a VM does not delete its disks by default, and Microsoft states plainly that you continue to pay for them. A disk with an empty ManagedBy property is unattached; list them first, confirm with the owner, then delete, because deletion is permanent.',
        'Unused public IP addresses. Microsoft bills a static public IP address in the Resource Manager model whether or not it is associated with a resource, until the IP resource itself is deleted.',
        'Old snapshots. Incremental snapshots are billed only for used size, but full snapshots and long chains of forgotten ones add up. Set a retention rule and delete snapshots that no longer back a recovery requirement.',
      ],
    },
    {
      heading: 'Put non-production on a schedule',
      paragraphs: [
        'Development and test VMs rarely need to run overnight or at weekends. The built-in auto-shutdown setting on each VM stops it at a set time and can send an email or webhook notification beforehand. Check the time zone, because the default is UTC.',
        'The billing detail matters here. A VM that is shut down from inside the guest operating system stays in the Stopped (allocated) state and is still billed for compute. Only a deallocated VM stops compute charges, and its disks and some networking resources keep billing either way. Auto-shutdown handles the stop; restarts in the morning need either a person or your own automation.',
      ],
    },
    {
      heading: 'Commit only to what you have already cleaned up',
      paragraphs: [
        'Commitment discounts reduce rates, not waste, which is why Microsoft itself recommends rightsizing before buying any. Its suggested order is to rightsize, exchange or trade in underused reservations, then buy new reservations for stable workloads, and finally add savings plans sized to the clean baseline.',
        'The choice between the two comes down to how settled the workload is. Reservations commit to a specific instance family or type in a specific region for one or three years, and give the greatest savings when fully used. Microsoft cites up to 72% off pay-as-you-go for Reserved VM Instances, based on a three-year term for one VM size in one region at January 2026 prices. Savings plans for compute commit to an hourly spend that applies across eligible compute services and regions, which suits estates that are still changing. Microsoft cites up to 65% for savings plans on the same basis. Both figures are best cases; Microsoft gives ranges starting at 36% and 11% respectively, and actual savings depend on region, instance type and usage. The two can be used together.',
        'Azure Hybrid Benefit is often the largest single line for Microsoft-heavy estates. If you hold Windows Server or SQL Server core licenses with active Software Assurance or qualifying subscriptions, you can apply them to Azure VMs. For an existing Windows VM it is a license-type change that Microsoft says does not restart the machine. Note the minimum of eight core licenses per VM for Windows Server, and that the benefit must be removed if Software Assurance lapses. Microsoft cites savings of up to 80% for Windows Server when the benefit is combined with reserved instances, and up to 85% for SQL Server, against pay-as-you-go rates.',
      ],
    },
    {
      heading: 'Tier storage and let lifecycle rules do the work',
      paragraphs: [
        'Blob storage defaults to the hot tier, and much of it never cools down unless someone moves it. Cool, cold and archive tiers trade lower storage prices for higher access costs and minimum retention periods of 30, 90 and 180 days, with prorated early deletion charges if data leaves sooner. Archive is offline: reading a blob means rehydrating it first, which can take up to 15 hours.',
        'Lifecycle management policies move or delete blobs, previous versions and snapshots based on creation, modification or last access time, filtered by prefix or blob index tag. The policies themselves are free; you pay normal transaction costs for the tier changes, and last-access tracking adds a small per-object charge at most once a day. Model the access pattern before archiving anything that compliance or analytics teams may need to read quickly.',
      ],
    },
    {
      heading: 'Where to begin',
      paragraphs: [
        'If you do only three things this quarter, enforce owner and cost center tags, turn on anomaly alerts for every production subscription, and clear unattached disks and unused public IPs. Then rightsize from Advisor, schedule non-production, and only after that size commitments against the smaller baseline.',
        'If you would like a second pair of eyes, our team can review your estate and produce a savings report with prioritized actions and an estimated savings range for each. Any changes are made in your own Azure accounts, not ours.',
      ],
    },
  ],
  sources: [
    {
      title: 'FinOps Framework Phases',
      url: 'https://www.finops.org/framework/phases/',
      publisher: 'FinOps Foundation',
    },
    {
      title: 'Policy definitions for tagging resources',
      url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Group and allocate costs using tag inheritance',
      url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/enable-tag-inheritance',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Tutorial: Create and manage budgets',
      url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Monitor usage and spending with cost alerts in Cost Management',
      url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Identify anomalies and unexpected changes in cost',
      url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/analyze-unexpected-charges',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Optimize VM or VMSS spend by resizing or shutting down underutilized instances',
      url: 'https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Find and delete unattached Azure managed and unmanaged disks',
      url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/windows/find-unattached-disks',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'IP Addresses pricing',
      url: 'https://azure.microsoft.com/en-us/pricing/details/ip-addresses/',
      publisher: 'Microsoft Azure',
    },
    {
      title: 'Create an incremental snapshot',
      url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/disks-incremental-snapshots',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Auto-shutdown a VM',
      url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/auto-shutdown-vm',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'States and billing status of Azure Virtual Machines',
      url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/states-billing',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Decide between a savings plan and a reservation',
      url: 'https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/decide-between-savings-plan-reservation',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Azure Reserved Virtual Machine Instances',
      url: 'https://azure.microsoft.com/en-us/pricing/reserved-vm-instances/',
      publisher: 'Microsoft Azure',
    },
    {
      title: 'Azure savings plan for compute',
      url: 'https://azure.microsoft.com/en-us/pricing/offers/savings-plan-compute/',
      publisher: 'Microsoft Azure',
    },
    {
      title: 'Azure Hybrid Benefit',
      url: 'https://azure.microsoft.com/en-us/pricing/offers/hybrid-benefit/',
      publisher: 'Microsoft Azure',
    },
    {
      title: 'Explore Azure Hybrid Benefit for Windows VMs',
      url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/windows/hybrid-use-benefit-licensing',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Access tiers for blob data',
      url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Azure Blob Storage lifecycle management overview',
      url: 'https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview',
      publisher: 'Microsoft Learn',
    },
  ],
  related: [
    { label: 'Cloud solutions', href: '/what-we-do/cloud' },
    { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering' },
    { label: 'Blueprint', href: '/blueprint' },
  ],
}
