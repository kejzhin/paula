export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  category: 'real-estate' | 'social-media' | 'lead-gen' | 'healthcare';
  categoryLabel: string;
  achievements: string[];
  keyMetric?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Ma. Francine Paula Javier",
    shortName: "Paula Javier",
    titles: [
      "Disposition Assistant",
      "Social Media Manager",
      "Lead Generation Specialist",
      "Registered Midwife II"
    ],
    primaryTagline: "Administrative Operations, Real Estate Support & Clinical Documentation Specialist",
    location: "San Pedro, Laguna, Philippines",
    phone: "+63 961 750 9061",
    email: "mfpolajav@gmail.com",
    cvPdfUrl: "/assets/aistudio/Paula_CV__69d0a5a7.pdf",
    profileImageUrl: "/assets/aistudio/Messenger_creation_394E66A9-C388-43B4-9731-80879F95AD24_1d4909bd.jpeg",
    bio: "Adaptable and detail-oriented professional with a strong foundation in direct healthcare as a Registered Midwife, combined with over 3 years of experience in administrative operations, virtual assistance, and real estate support. Adept at managing schedules, high-volume communications, and sensitive client and clinical documentation with accuracy and strict confidentiality."
  },

  // Authentic quantitative metrics taken directly from CV
  verifiedMetrics: [
    {
      value: "+30%",
      label: "Social Engagement Increase",
      source: "Your Eden Agency (IG, TikTok, Reddit)"
    },
    {
      value: "+20%",
      label: "Lead Quality Improvement",
      source: "ESP Solutions LLC"
    },
    {
      value: "3+ Years",
      label: "Administrative & Operations",
      source: "Real Estate & Virtual Assistance"
    },
    {
      value: "5+ Years",
      label: "Clinical Documentation",
      source: "Dr. Jose Fabella Memorial Hospital"
    }
  ],

  experiences: [
    {
      id: "disposition-assistant",
      role: "Disposition Assistant",
      company: "Good Neighbor Solutions LLC",
      period: "Feb 2025 – October 2026",
      category: "real-estate",
      categoryLabel: "Real Estate Support & Operations",
      achievements: [
        "Formulated, formatted, and tracked legal documents—including deeds, memorandums, and lien releases—ensuring precise compliance for county recording and filing.",
        "Coordinated directly with county recorder offices and title departments to submit documents, verify recording fees, and resolve filing rejections efficiently.",
        "Listed properties and drafted deal updates across public platforms, investment channels, and real estate broker networks to drive buyer reach.",
        "Maintained active communication with individual buyers, corporate brokers, and title entities to monitor transaction progress from initial listing to close."
      ]
    },
    {
      id: "social-media-manager",
      role: "Social Media Manager",
      company: "Your Eden Agency",
      period: "Jun 2023 – Feb 2025",
      category: "social-media",
      categoryLabel: "Digital Marketing & Branding",
      keyMetric: "+30% engagement",
      achievements: [
        "Created and scheduled content for Instagram, TikTok, and Reddit, increasing engagement by 30%.",
        "Analyzed social media analytics to refine content strategies, leading to improved audience interactions.",
        "Collaborated with creative teams to maintain consistent branding across platforms, enhancing brand recognition."
      ]
    },
    {
      id: "lead-generation-specialist",
      role: "Lead Generation Specialist",
      company: "ESP Solutions LLC",
      period: "Feb 2023 – Feb 2024",
      category: "lead-gen",
      categoryLabel: "Outreach & Client Acquisition",
      keyMetric: "+20% lead quality",
      achievements: [
        "Identified key decision-makers aligning with client profiles, enhancing lead quality by 20%.",
        "Conducted outreach via email, SMS, and LinkedIn, increasing lead engagement metrics.",
        "Maintained clean contact databases, tracking outreach metrics to optimize future engagement strategies."
      ]
    },
    {
      id: "registered-midwife-ii",
      role: "Registered Midwife II",
      company: "Dr. Jose Fabella Memorial Hospital",
      period: "Nov 2017 – Feb 2023",
      category: "healthcare",
      categoryLabel: "Healthcare & Clinical Operations",
      achievements: [
        "Managed patient records and clinical documentation in a busy hospital setting, ensuring accuracy and confidentiality.",
        "Supported medical staff with day-to-day operations, improving workflow efficiency in a high-pressure environment.",
        "Developed strong time management skills, consistently organizing multiple tasks to meet tight deadlines.",
        "Delivered comprehensive maternal and newborn care, including prenatal checkups, low-risk vaginal deliveries, and postpartum care following DOH clinical protocols and RA 7392 standards."
      ]
    }
  ] as ExperienceItem[],

  education: {
    degree: "Diploma in Midwifery",
    institution: "Dr. Jose Fabella Memorial Hospital",
    period: "2015 – 2017",
    highlights: [
      "Rigorous clinical training under the national premier maternal and infant healthcare institution.",
      "Comprehensive mastery in medical documentation, maternal-child health protocols, and precision under emergency conditions.",
      "Licensed healthcare professional adhering to RA 7392 standards and Department of Health clinical guidelines."
    ]
  },

  skills: [
    {
      name: "Calendar Management",
      category: "Administrative Operations",
      description: "Managing executive schedules, coordinating meetings across time zones, and prioritizing critical appointments."
    },
    {
      name: "Task Tracking",
      category: "Administrative Operations",
      description: "Monitoring deliverables, sprint status, and cross-departmental operations to ensure on-time completion."
    },
    {
      name: "Document Preparation",
      category: "Legal & Documentation",
      description: "Drafting, formatting, and tracking legal deeds, memorandums, lien releases, and compliance packets."
    },
    {
      name: "Scheduling",
      category: "Administrative Operations",
      description: "Optimizing daily agendas, client consultations, and operations workflows with conflict prevention."
    },
    {
      name: "Email Management",
      category: "Communications",
      description: "Handling high-volume inboxes, screening correspondence, drafting professional replies, and organizing records."
    },
    {
      name: "Lead Generation",
      category: "Outreach & Growth",
      description: "Targeted prospect prospecting via LinkedIn, email, and SMS, identifying key decision-makers."
    },
    {
      name: "Real Estate Support",
      category: "Real Estate",
      description: "Working with title companies, county recorder offices, buyer broker networks, and property listing platforms."
    },
    {
      name: "Data Entry",
      category: "Administrative Operations",
      description: "Maintaining accurate, clean databases and records with strict data fidelity and systematic tracking."
    },
    {
      name: "Record Keeping",
      category: "Legal & Clinical",
      description: "Managing clinical and corporate records with meticulous confidentiality, HIPAA/privacy adherence, and audit readiness."
    },
    {
      name: "Client Coordination",
      category: "Communications",
      description: "Liaising with individual buyers, corporate brokers, healthcare patients, and institutional stakeholders."
    }
  ] as SkillItem[]
};
