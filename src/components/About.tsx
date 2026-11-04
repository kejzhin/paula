import { motion } from 'motion/react';
import { ShieldCheck, FileCheck, Layers, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const highlights = [
    {
      icon: FileCheck,
      title: "Real Estate & Legal Operations",
      description: "Proven track record formulating deeds, memorandums, lien releases, and coordinating with county recorders and title departments."
    },
    {
      icon: Layers,
      title: "Multi-Platform Growth & Outreach",
      description: "Managing organic content channels with +30% engagement lift and driving qualified B2B prospect pipelines across email, SMS, and LinkedIn."
    },
    {
      icon: ShieldCheck,
      title: "Strict Confidentiality & Compliance",
      description: "Extensive background handling protected clinical records, legal real estate filings, and sensitive client communications."
    },
    {
      icon: Award,
      title: "Healthcare Foundation & Rigor",
      description: "Registered Midwife II credentialed by Dr. Jose Fabella Memorial Hospital, adhering to strict DOH clinical protocols and RA 7392 standards."
    }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 relative bg-[#FAF7FC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display text-balance mb-4">
            Bridging Precision Healthcare Discipline with Modern Business Operations
          </h2>
          <p className="text-base sm:text-lg text-[#3E235D]/85 leading-relaxed">
            {personal.bio}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100/90 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(124,58,237,0.12)] hover:border-purple-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E1035] mb-2 font-display group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4C2875]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
