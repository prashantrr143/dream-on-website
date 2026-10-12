import type { RegionPage } from './region-pages.types'

/**
 * Region pages (/regions/{slug}).
 *
 * Every factual claim traces to an entry in `sources`, checked on
 * `reviewedAt`. Commercial items only restate lib/regions.ts, plus the
 * owner-confirmed UK Cyber Essentials status. No office, entity, client
 * or certification is claimed.
 */

const AZURE_REGIONS = {
  title: 'List of Azure regions',
  url: 'https://learn.microsoft.com/en-us/azure/reliability/regions-list',
  publisher: 'Microsoft Learn',
}

const AZURE_DATA_RESIDENCY = {
  title: 'Data residency in Azure',
  url: 'https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency',
  publisher: 'Microsoft',
}

const RESIDENCY_IN_PRACTICE =
  'For regional services, Microsoft says it will not store or process customer data outside the geography you choose without your authorization, though it may replicate within that geography for redundancy. There are exceptions: Microsoft Entra ID may store directory data globally, preview services may store data outside the geography, and Foundry Models "Global" deployment types may process prompts and completions in any region. We list these exceptions for your workload and choose services and deployment types with them in mind.'

/** All drafted regional pages. Only those in PUBLISHED_REGION_PAGES go live. */
export const ALL_REGION_PAGES: RegionPage[] = [
  {
    slug: 'uk',
    name: 'United Kingdom',
    title: 'What UK regulated firms should know before working with us',
    lede: 'If you are regulated by the FCA or the PRA, bringing in an outside engineering team raises questions about resilience, data transfers and where your data lives. Here is how UK rules shape our work, which Azure regions keep data in the UK, and what we can and cannot offer today.',
    metaTitle: 'UK firms: FCA, UK GDPR and Azure UK | YatiSphere',
    metaDescription:
      'What UK regulated firms should know before working with us: FCA and PRA rules, UK GDPR and the 2025 Act, Azure UK South and UK West, and transfer terms.',
    reviewedAt: '2026-10-11',
    regulators: [
      {
        name: 'Financial Conduct Authority (FCA)',
        scope:
          'Regulates the conduct of UK financial services firms and prudentially supervises firms outside the PRA’s remit. Its operational resilience rules have applied since 31 March 2022, and in-scope firms had until 31 March 2025 to operate important business services within impact tolerances. New operational incident and third-party reporting requirements take effect on 18 March 2027. We are not authorized by the FCA; we design logging, incident evidence and third-party records so your firm can meet these rules.',
      },
      {
        name: 'Prudential Regulation Authority (PRA)',
        scope:
          'Part of the Bank of England. Prudentially regulates banks, building societies, credit unions, insurers and major investment firms, with rules on capital and risk controls. The PRA shares the operational resilience framework with the FCA, and works with the Bank of England on oversight of critical third parties. We are not regulated by the PRA; we build the controls and reporting your firm needs to evidence to it.',
      },
    ],
    privacy: [
      {
        name: 'UK GDPR and the Data Protection Act 2018',
        note: 'The UK’s data protection framework, overseen by the ICO. Organizations that use personal information generally pay a data protection fee to the ICO unless exempt. When we work with your data, we do so under your instructions and a written data processing agreement.',
      },
      {
        name: 'Data (Use and Access) Act 2025',
        note: 'Received Royal Assent on 19 June 2025. As of October 2026, the ICO states that all of the Act’s provisions affecting data protection law and the Privacy and Electronic Communications Regulations are in force.',
      },
      {
        name: 'Restricted transfers: the IDTA and the Addendum',
        note: 'Under the UK GDPR, a restricted transfer can rely on the ICO’s International Data Transfer Agreement (IDTA) or the International Data Transfer Addendum to the EU standard contractual clauses, together with a transfer risk assessment. As of October 2026, the ICO plans to update both documents during 2026 and says to keep using the current versions until then.',
      },
      {
        name: 'EU adequacy for the UK',
        note: 'The European Commission renewed its UK adequacy decisions on 19 December 2025, and they run until 27 December 2031. Personal data can flow from the EEA to the UK without additional safeguards.',
      },
    ],
    residency: [
      {
        region: 'UK South (London)',
        note: 'Three availability zones. Paired with UK West for disaster recovery within the UK geography.',
      },
      {
        region: 'UK West (Cardiff)',
        note: 'No availability zones listed. Paired with UK South, so a UK South and UK West design keeps primary and recovery copies in the UK.',
      },
      {
        region: 'What residency means in practice',
        note: RESIDENCY_IN_PRACTICE,
      },
    ],
    commercial: [
      {
        title: 'Overlapping working hours',
        body: 'Our working day overlaps UK business hours in full.',
      },
      {
        title: 'Your cloud, your region',
        body: 'We build in your Azure subscriptions and your chosen region, such as UK South, so data residency stays under your control rather than ours.',
      },
      {
        title: 'DPA and transfer terms as standard',
        body: 'We sign a data processing agreement. Where personal data leaves the UK, we use the IDTA or the Addendum to the EU standard contractual clauses.',
      },
      {
        title: 'UK Cyber Essentials: in progress',
        body: 'We are working toward UK Cyber Essentials, the government-backed baseline for cyber security. We are not certified yet and will say so until we are.',
      },
    ],
    presence:
      'We do not have a UK office or a UK entity yet. YatiSphere Technologies was incorporated in India in December 2025, and we deliver UK work remotely from India. We are an early-stage company, so we will not point to UK client work we have not done; we will tell you plainly what we have built and what we have not.',
    sources: [
      {
        title: 'About the FCA',
        url: 'https://www.fca.org.uk/about/what-we-do/the-fca',
        publisher: 'Financial Conduct Authority',
      },
      {
        title: 'Operational resilience',
        url: 'https://www.fca.org.uk/firms/operational-resilience',
        publisher: 'Financial Conduct Authority',
      },
      {
        title: 'Prudential regulation',
        url: 'https://www.bankofengland.co.uk/prudential-regulation',
        publisher: 'Bank of England',
      },
      {
        title: 'Data protection fee',
        url: 'https://ico.org.uk/for-organisations/data-protection-fee/',
        publisher: 'Information Commissioner’s Office',
      },
      {
        title: 'The Data (Use and Access) Act 2025',
        url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/',
        publisher: 'Information Commissioner’s Office',
      },
      {
        title: 'What are standard data protection clauses (the UK IDTA and the Addendum)?',
        url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/appropriate-safeguards/what-are-standard-data-protection-clauses-the-uk-idta-and-the-addendum',
        publisher: 'Information Commissioner’s Office',
      },
      {
        title: 'Data protection and the EU',
        url: 'https://ico.org.uk/for-organisations/data-protection-and-the-eu/',
        publisher: 'Information Commissioner’s Office',
      },
      {
        title: 'Cyber Essentials overview',
        url: 'https://www.ncsc.gov.uk/cyberessentials/overview',
        publisher: 'National Cyber Security Centre',
      },
      AZURE_REGIONS,
      AZURE_DATA_RESIDENCY,
    ],
  },
  {
    slug: 'middle-east',
    name: 'Middle East',
    title: 'What Gulf regulated firms should know before working with us',
    lede: 'In the UAE, your financial regulator and your data protection law depend on whether you are in the DIFC, in ADGM or elsewhere in the UAE, and Saudi Arabia has its own rules again. Here is how we account for each, which Azure regions keep data in the UAE, and what we can and cannot offer today.',
    metaTitle: 'Gulf firms: CBUAE, DIFC, ADGM, SAMA | YatiSphere',
    metaDescription:
      'What Gulf regulated firms should know before working with us: CBUAE, DFSA, FSRA and SAMA, UAE and Saudi data laws, Azure UAE regions and transfer terms.',
    reviewedAt: '2026-10-11',
    regulators: [
      {
        name: 'Central Bank of the UAE (CBUAE)',
        scope:
          'The federal supervisory and regulatory authority for the UAE banking and insurance sector, reporting directly to the President under the Federal Decree-Law of 2025 on the Central Bank. We are not licensed by the CBUAE; we design the audit trails, access controls and reporting your firm needs to evidence to it.',
      },
      {
        name: 'Dubai Financial Services Authority (DFSA)',
        scope:
          'The independent regulator of the Dubai International Financial Centre (DIFC). We are not regulated by the DFSA; we build controls and reporting for DIFC firms that are.',
      },
      {
        name: 'Financial Services Regulatory Authority (FSRA)',
        scope:
          'The financial services regulator of Abu Dhabi Global Market (ADGM). We are not regulated by the FSRA; we build controls and reporting for ADGM firms that are.',
      },
      {
        name: 'Saudi Central Bank (SAMA)',
        scope:
          'Regulates and supervises financial institutions in Saudi Arabia, issues the rules and instructions that govern them, and sets prudential policies. We are not licensed by SAMA; we design controls and reporting for firms that answer to it.',
      },
    ],
    privacy: [
      {
        name: 'UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data',
        note: 'In force since 2 January 2022, including requirements for cross-border transfer and sharing of personal data. The UAE Data Office is to act as the federal data regulator. As of October 2026, we could not find executive regulations referenced on the UAE government’s data protection page, so confirm the current position with your counsel before setting compliance dates.',
      },
      {
        name: 'DIFC Data Protection Law No. 5 of 2020',
        note: 'Enacted in May 2020 and supervised and enforced by the DIFC Commissioner of Data Protection. Transfers out of the DIFC need an adequate destination or an Article 27 safeguard, such as the DIFC standard contractual clauses.',
      },
      {
        name: 'ADGM Data Protection Regulations 2021',
        note: 'Enacted on 11 February 2021 and administered by the Commissioner of Data Protection, with the Office of Data Protection as ADGM’s independent supervisory authority. Transfers out of ADGM rely on adequacy, safeguards such as ADGM-approved standard contractual clauses or binding corporate rules, or a listed derogation.',
      },
      {
        name: 'Saudi Personal Data Protection Law (PDPL)',
        note: 'In force since 14 September 2023, with a one-year grace period that ran to 14 September 2024. The Saudi Data and AI Authority (SDAIA) is the competent authority, and its standard contractual clauses govern transfers outside the Kingdom to destinations without an adequate level of protection.',
      },
    ],
    residency: [
      {
        region: 'UAE North (Dubai)',
        note: 'Three availability zones, with no access restriction. Paired with UAE Central for disaster recovery within the UAE geography.',
      },
      {
        region: 'UAE Central (Abu Dhabi)',
        note: 'Access is restricted to specific scenarios, such as disaster recovery within the UAE. You request access through an Azure support request. No availability zones listed.',
      },
      {
        region: 'What residency means in practice',
        note: RESIDENCY_IN_PRACTICE,
      },
    ],
    commercial: [
      {
        title: 'Overlapping working hours',
        body: 'Our working day overlaps Gulf business hours in full.',
      },
      {
        title: 'Your cloud, your region',
        body: 'We build in your Azure subscriptions and your chosen region, such as UAE North, so data residency stays under your control rather than ours.',
      },
      {
        title: 'DPA and transfer terms as standard',
        body: 'We sign a data processing agreement, and use the standard contractual clauses that apply to you, whether DIFC, ADGM or SDAIA, where personal data crosses a border.',
      },
    ],
    presence:
      'We do not have an entity or an office in the UAE, Saudi Arabia or elsewhere in the Gulf yet. YatiSphere Technologies was incorporated in India in December 2025, and we deliver Gulf work remotely from India. We are an early-stage company, so we will not point to regional client work we have not done.',
    sources: [
      {
        title: 'Banking in the UAE',
        url: 'https://u.ae/en/information-and-services/finance-and-investment/banking-in-uae',
        publisher: 'The Official Portal of the UAE Government',
      },
      {
        title: 'Combatting money laundering',
        url: 'https://u.ae/en/information-and-services/business/Business-laws-and-compliance/combatting-money-laundering',
        publisher: 'The Official Portal of the UAE Government',
      },
      {
        title: 'Dubai Financial Services Authority publishes its 2024 annual report',
        url: 'https://www.mediaoffice.ae/en/news/2025/may/06-05/dubai-financial-services-authority-publishes-its-2024-annual-report',
        publisher: 'Dubai Media Office',
      },
      {
        title: 'Saudi Central Bank functions',
        url: 'https://www.sama.gov.sa/en-US/About/Pages/SAMAFunction.aspx',
        publisher: 'Saudi Central Bank',
      },
      {
        title: 'Data protection laws',
        url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws',
        publisher: 'The Official Portal of the UAE Government',
      },
      {
        title: 'Commissioner of Data Protection',
        url: 'https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection',
        publisher: 'Dubai International Financial Centre',
      },
      {
        title: 'Data export and sharing: transferring personal data',
        url: 'https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection/data-export-and-sharing',
        publisher: 'Dubai International Financial Centre',
      },
      {
        title: 'Overview of the ADGM Data Protection Regulations 2021',
        url: 'https://assets.adgm.com/download/assets/Overview+of+the+ADGM+Data+Protection+Regulations+2021+Brochure.pdf/b131764858a111efb6605e7c57113ad4',
        publisher: 'Abu Dhabi Global Market',
      },
      {
        title: 'Guide to the Saudi Personal Data Protection Law',
        url: 'https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES',
        publisher: 'Saudi Data and AI Authority',
      },
      {
        title: 'Standard contractual clauses for personal data transfer',
        url: 'https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/StandardContractualClauses/!ut/p/z1/jY_BCoJAFEW_xQ-IN84wVkuTIK2JwjSdTTwyTbBRdGzR1ze0TNLe7sK5l3dAQgJS4bMsUJe1wsrkVDoX3107Gzsk1I5XnDhM7DnfMkpOczh_AVG8NMCRisD1GTkwkP_0yY9zyVQ_mAKMAW2FJwqQDer7rFR5DUmoUWXYZl6tdItX3WPlVdh3t858JEc3F2wADKU_wIhV84iS1y4P_cKy3oCWFIU!/dz/d5/L0lDUmlTUSEhL3dHa0FKRnNBLzROV3FpQSEhL2Vu/',
        publisher: 'Saudi Data and AI Authority',
      },
      AZURE_REGIONS,
      {
        title: 'Azure region access request process',
        url: 'https://learn.microsoft.com/en-us/troubleshoot/azure/general/region-access-request-process',
        publisher: 'Microsoft Learn',
      },
      AZURE_DATA_RESIDENCY,
    ],
  },
]

/**
 * Regional pages currently published. Empty for now: the owner chose to
 * focus on India (2026-10-11). Add 'uk' or 'middle-east' to bring a page
 * back; its route, sitemap entry and search entry follow automatically.
 */
const PUBLISHED_REGION_PAGES: RegionPage['slug'][] = []

export const REGION_PAGES: RegionPage[] = ALL_REGION_PAGES.filter((p) => PUBLISHED_REGION_PAGES.includes(p.slug))
