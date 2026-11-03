import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Building2, Calendar, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Roles' },
    { id: 'real-estate', label: 'Real Estate & Legal' },
    { id: 'social-media', label: 'Social Media & Growth' },
    { id: 'lead-gen', label: 'Lead Generation' },
    { id: 'healthcare', label: 'Clinical Healthcare' }
  ];

  const filteredExperiences = activeFilter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7FC] via-[#F6F0FA] to-[#FAF7FC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Career Journey
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display">
                Work Experience
              </h2>
              <p className="mt-2 text-base text-[#4C2875]/80 max-w-xl">
                A track record spanning real estate disposition, digital growth marketing, high-value client acquisition, and institutional healthcare.
              </p>
            </div>

            {/* Filter buttons (Interactive filter controls allowed per frontend-design skill) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-purple-100/60 rounded-xl border border-purple-200/50">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    activeFilter === opt.id
                      ? 'bg-purple-700 text-white shadow-xs'
                      : 'text-[#4C2875] hover:text-purple-900 hover:bg-purple-100/80'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-purple-100/90 shadow-[0_4px_24px_rgba(124,58,237,0.04)] hover:border-purple-200/90 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top pastel line accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 opacity-60" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Role title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1035] font-display">
                      {exp.role}
                    </h3>

                    {/* Unboxed metadata line */}
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

                  {/* Authentic metric if present in CV */}
                  {exp.keyMetric && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-fuchsia-50 border border-fuchsia-200/70 rounded-xl text-fuchsia-800 text-xs font-semibold shrink-0">
                      <TrendingUp className="w-3.5 h-3.5 text-fuchsia-600" />
                      <span>{exp.keyMetric} documented impact</span>
                    </div>
                  )}
                </div>

                {/* Bullets directly from CV */}
                <div className="space-y-3">
                  {exp.achievements.map((item, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                      <p className="text-sm sm:text-base text-[#3E235D]/90 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
