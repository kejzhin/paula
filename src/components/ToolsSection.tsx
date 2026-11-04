import { useState } from 'react';
import { motion } from 'motion/react';
import { TOOLS_DATA } from '../data/toolsData';
import { ToolIcon } from './ToolIcon';

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Tools (20)' },
    { id: 'real-estate', label: 'Real Estate & E-Recording' },
    { id: 'crm-communications', label: 'CRM & Communications' },
    { id: 'lead-outreach', label: 'Lead Gen & Outreach' },
    { id: 'productivity', label: 'Productivity & Office' }
  ];

  const filteredTools = activeCategory === 'all'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((tool) => tool.category === activeCategory);

  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 bg-[#FAF7FC] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Tools & Technical Ecosystem
          </h2>
          <p className="text-base text-[#4C2875]/80 leading-relaxed">
            Hands-on daily proficiency across real estate transaction hubs, county recording platforms, CRM pipelines, and multi-channel prospecting suites.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-purple-700 text-white shadow-xs font-semibold'
                    : 'bg-purple-50 hover:bg-purple-100 text-[#4C2875] border border-purple-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-2xl p-5 border border-purple-100/90 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.1)] hover:border-purple-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Top row: Official Icon + Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center p-1.5 bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                    <ToolIcon id={tool.id} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[11px] font-medium text-[#6B4E87] bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100/60">
                    {tool.categoryLabel}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="text-base font-bold text-[#1E1035] font-display group-hover:text-purple-700 transition-colors mb-1.5">
                  {tool.name}
                </h3>

                {/* Context Description */}
                <p className="text-xs text-[#4C2875]/80 leading-relaxed">
                  {tool.roleContext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
