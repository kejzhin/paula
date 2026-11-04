import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckSquare,
  FileText,
  Clock,
  Mail,
  Target,
  Home,
  Database,
  Archive,
  Users
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    "Calendar Management": Calendar,
    "Task tracking": CheckSquare,
    "Task Tracking": CheckSquare,
    "Document preparation": FileText,
    "Document Preparation": FileText,
    "Scheduling": Clock,
    "Email Management": Mail,
    "Lead Generation": Target,
    "Real Estate Support": Home,
    "Data Entry": Database,
    "Record keeping": Archive,
    "Record Keeping": Archive,
    "Client Coordination": Users
  };

  const categories = ['all', 'Administrative Operations', 'Communications', 'Real Estate', 'Legal & Documentation', 'Outreach & Growth'];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(s.category.toLowerCase()));

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 bg-[#FAF7FC] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Core Skills & Execution
          </h2>
          <p className="text-base text-[#4C2875]/80 leading-relaxed">
            Every capability documented in practice through high-volume operations, legal real estate support, and healthcare records management.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                  selectedCategory === cat
                    ? 'bg-purple-700 text-white shadow-xs font-semibold'
                    : 'bg-purple-50 hover:bg-purple-100 text-[#4C2875] border border-purple-100'
                }`}
              >
                {cat === 'all' ? 'All Skills (10)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.name] || FileText;
            return (
              <div
                key={skill.name}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-purple-100/80 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:border-purple-300 hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-[#6B4E87] bg-purple-50/70 px-2.5 py-0.5 rounded-md font-medium border border-purple-100/50">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1035] mb-2 font-display group-hover:text-purple-700 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4C2875]/80 leading-relaxed">
                    {skill.description}
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
