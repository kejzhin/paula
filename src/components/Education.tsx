import { motion } from 'motion/react';
import { GraduationCap, Building2, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 bg-gradient-to-b from-[#FAF7FC] via-[#F4EDFA] to-[#FAF7FC] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Education & Clinical Credentials
          </h2>
          <p className="text-base text-[#4C2875]/80 leading-relaxed">
            Rigorous institutional training underpinning high ethical standards, precision documentation, and calm execution under pressure.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-9 border border-purple-100 shadow-[0_4px_24px_rgba(124,58,237,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(124,58,237,0.1)] hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200/60 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1035] font-display">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#4C2875] font-medium mt-1">
                  <span className="inline-flex items-center gap-1.5 text-purple-900 font-semibold">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    {education.institution}
                  </span>
                  <span aria-hidden="true" className="text-purple-300">·</span>
                  <span className="inline-flex items-center gap-1.5 text-[#5D3A7A]">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 border border-purple-200/70 rounded-xl text-purple-800 text-xs font-semibold shrink-0">
              <Award className="w-3.5 h-3.5 text-purple-600" />
              <span>Registered Healthcare Professional</span>
            </div>
          </div>

          <div className="pt-4 border-t border-purple-100 space-y-3">
            {education.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                <p className="text-sm sm:text-base text-[#3E235D]/90 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
