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
    <section id="skills" className="py-20 md:py-28 bg-[#FAF7FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Competencies & Toolset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Core Professional Skills
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
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'bg-purple-50 hover:bg-purple-100 text-[#4C2875] border border-purple-100'
                }`}
              >
                {cat === 'all' ? 'All Skills (10)' : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.name] || FileText;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-purple-100/80 shadow-xs hover:border-purple-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-[#6B4E87] bg-purple-50/70 px-2 py-0.5 rounded-md font-medium border border-purple-100/50">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1035] mb-2 font-display">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4C2875]/80 leading-relaxed">
                    {skill.description}
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
