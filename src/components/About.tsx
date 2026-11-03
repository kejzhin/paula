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
    <section id="about" className="py-20 md:py-28 relative bg-[#FAF7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display text-balance mb-4">
            Bridging Precision Healthcare Discipline with Modern Business Operations
          </h2>
          <p className="text-base sm:text-lg text-[#3E235D]/80 leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E1035] mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4C2875]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
