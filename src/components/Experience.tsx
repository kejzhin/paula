import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7FC] via-[#F6F0FA] to-[#FAF7FC] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-[#4C2875]/80 leading-relaxed">
            A documented career journey spanning real estate disposition, digital growth marketing, high-value client acquisition, and institutional healthcare.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-5">
          {experiences.map((exp) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div
                key={exp.id}
                className="bg-white rounded-2xl border border-purple-100/90 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:shadow-[0_12px_32px_-6px_rgba(124,58,237,0.08)] hover:border-purple-300 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle top pastel line accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 opacity-60" />

                {/* Card Header (Initially only this shows as requested) */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex-1">
                    {/* Role title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1035] font-display group-hover:text-purple-700 transition-colors">
                      {exp.role}
                    </h3>

                    {/* Metadata line */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#4C2875] font-medium mt-1.5">
                      <span className="inline-flex items-center gap-1.5 text-purple-900 font-semibold">
                        <Building2 className="w-4 h-4 text-purple-600" />
                        {exp.company}
                      </span>
                      <span aria-hidden="true" className="text-purple-300">·</span>
                      <span className="inline-flex items-center gap-1.5 text-[#5D3A7A]">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        {exp.period}
                      </span>
                      <span aria-hidden="true" className="text-purple-300">·</span>
                      <span className="text-xs text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md font-medium border border-purple-100">
                        {exp.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Expand / View Details Button */}
                  <div className="shrink-0 flex items-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 ${
                        isExpanded
                          ? 'bg-purple-100 text-purple-900 border-purple-200'
                          : 'bg-purple-50 text-purple-800 border-purple-200/70 hover:bg-purple-100'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Details: Bullets directly from CV */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-purple-100/80 bg-purple-50/20 space-y-3">
                    {exp.achievements.map((item, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                        <p className="text-sm sm:text-base text-[#3E235D]/90 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
