export interface ToolItem {
  id: string;
  name: string;
  category: 'real-estate' | 'crm-communications' | 'lead-outreach' | 'productivity';
  categoryLabel: string;
  roleContext: string;
  brandColor: string;
  badgeBg: string;
}

export const TOOLS_DATA: ToolItem[] = [
  // 1. Podio CRM
  {
    id: 'podio',
    name: 'Podio CRM',
    category: 'crm-communications',
    categoryLabel: 'CRM & Deal Tracking',
    roleContext: 'Lead tracking, real estate deal pipelines, and automated disposition workflows.',
    brandColor: '#0082CA',
    badgeBg: '#E0F2FE'
  },
  // 2. DialPad
  {
    id: 'dialpad',
    name: 'DialPad',
    category: 'crm-communications',
    categoryLabel: 'VoIP & Calling',
    roleContext: 'Inbound/outbound call management, SMS outreach, and call logging.',
    brandColor: '#8E24AA',
    badgeBg: '#F3E8FF'
  },
  // 3. REI Automator
  {
    id: 'rei-automator',
    name: 'REI Automator',
    category: 'real-estate',
    categoryLabel: 'Real Estate Data',
    roleContext: 'Property data mining, motivated seller filtering, and comp analysis.',
    brandColor: '#DC2626',
    badgeBg: '#FEE2E2'
  },
  // 4. MLS
  {
    id: 'mls',
    name: 'MLS',
    category: 'real-estate',
    categoryLabel: 'Property Listings',
    roleContext: 'Drafting deal updates, syndicating listings, and cross-brokerage coordination.',
    brandColor: '#1E3A8A',
    badgeBg: '#DBEAFE'
  },
  // 5. Call Rail
  {
    id: 'callrail',
    name: 'Call Rail',
    category: 'crm-communications',
    categoryLabel: 'Call Tracking & Analytics',
    roleContext: 'Dynamic call tracking, campaign attribution, and marketing conversion metrics.',
    brandColor: '#F95738',
    badgeBg: '#FFEDD5'
  },
  // 6. DotLoop
  {
    id: 'dotloop',
    name: 'DotLoop',
    category: 'real-estate',
    categoryLabel: 'Transaction Management',
    roleContext: 'Real estate transaction loops, document compliance, and digital broker sharing.',
    brandColor: '#00A389',
    badgeBg: '#CCFBF1'
  },
  // 7. DocuSign
  {
    id: 'docusign',
    name: 'DocuSign',
    category: 'real-estate',
    categoryLabel: 'E-Signatures & Compliance',
    roleContext: 'Securing legally compliant electronic signatures on purchase agreements and deeds.',
    brandColor: '#FFB800',
    badgeBg: '#FEF3C7'
  },
  // 8. Unreal Estate
  {
    id: 'unreal-estate',
    name: 'Unreal Estate',
    category: 'real-estate',
    categoryLabel: 'PropTech & Marketplace',
    roleContext: 'Direct-to-consumer property listings and discount MLS syndication pipelines.',
    brandColor: '#7C3AED',
    badgeBg: '#EDE9FE'
  },
  // 9. Congress Realty
  {
    id: 'congress-realty',
    name: 'Congress Realty',
    category: 'real-estate',
    categoryLabel: 'Flat-Fee MLS Brokerage',
    roleContext: 'Direct listing input, regional MLS coordination, and broker compliance verification.',
    brandColor: '#1B365D',
    badgeBg: '#E2E8F0'
  },
  // 10. InvestorBootz
  {
    id: 'investorbootz',
    name: 'InvestorBootz',
    category: 'real-estate',
    categoryLabel: 'Investor Network',
    roleContext: 'Wholesale deal distribution, buyers list outreach, and investment syndication.',
    brandColor: '#D97706',
    badgeBg: '#FEF3C7'
  },
  // 11. Simplifile
  {
    id: 'simplifile',
    name: 'Simplifile',
    category: 'real-estate',
    categoryLabel: 'E-Recording & County Filing',
    roleContext: 'Submitting deeds, memorandums, and lien releases directly to county recorder offices.',
    brandColor: '#00A3E0',
    badgeBg: '#E0F2FE'
  },
  // 12. Deeds.com
  {
    id: 'deeds-com',
    name: 'Deeds.com',
    category: 'real-estate',
    categoryLabel: 'Legal Real Estate Documents',
    roleContext: 'County-compliant deed templates, legal description verification, and fee schedules.',
    brandColor: '#2563EB',
    badgeBg: '#DBEAFE'
  },
  // 13. Microsoft 365
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'productivity',
    categoryLabel: 'Office Suite & Excel',
    roleContext: 'High-volume Excel record keeping, formatted Word agreements, and Outlook communication.',
    brandColor: '#D83B01',
    badgeBg: '#FFEDD5'
  },
  // 14. Google Workspace
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'productivity',
    categoryLabel: 'Cloud Collaboration',
    roleContext: 'Shared Sheets tracking, Docs preparation, Google Drive filing, and Calendar scheduling.',
    brandColor: '#4285F4',
    badgeBg: '#DBEAFE'
  },
  // 15. Zoom Video
  {
    id: 'zoom',
    name: 'Zoom Video',
    category: 'crm-communications',
    categoryLabel: 'Video Conferencing',
    roleContext: 'Client consultations, buyer/seller interviews, and team coordination meetings.',
    brandColor: '#2D8CFF',
    badgeBg: '#EFF6FF'
  },
  // 16. Slack
  {
    id: 'slack',
    name: 'Slack',
    category: 'productivity',
    categoryLabel: 'Team Messaging',
    roleContext: 'Internal real-time operational communications and deal notification channels.',
    brandColor: '#4A154B',
    badgeBg: '#F3E8FF'
  },
  // 17. Discord
  {
    id: 'discord',
    name: 'Discord',
    category: 'crm-communications',
    categoryLabel: 'Community & Channels',
    roleContext: 'Real estate investor groups, agency discussions, and community moderation.',
    brandColor: '#5865F2',
    badgeBg: '#EEF2FF'
  },
  // 18. LinkedIn Sales Navigator
  {
    id: 'linkedin-sales-nav',
    name: 'LinkedIn Sales Navigator',
    category: 'lead-outreach',
    categoryLabel: 'B2B Lead Prospecting',
    roleContext: 'Identifying high-intent decision-makers, lead list building, and InMail campaigns.',
    brandColor: '#0A66C2',
    badgeBg: '#E0F2FE'
  },
  // 19. Apollo.io
  {
    id: 'apollo-io',
    name: 'Apollo.io',
    category: 'lead-outreach',
    categoryLabel: 'Outreach & Prospect Data',
    roleContext: 'Verified contact discovery, email sequencing, and outbound prospecting databases.',
    brandColor: '#F59E0B',
    badgeBg: '#FEF3C7'
  },
  // 20. Canva
  {
    id: 'canva',
    name: 'Canva',
    category: 'lead-outreach',
    categoryLabel: 'Social Media & Design',
    roleContext: 'Creating branded graphics and promotional collateral for Instagram, TikTok, and Reddit.',
    brandColor: '#00C4CC',
    badgeBg: '#E6FFFA'
  }
];
