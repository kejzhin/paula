import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-purple-100 bg-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-base font-bold text-[#1E1035] font-display">
              {personal.fullName}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#4C2875]">
            <a href="#hero" className="hover:text-purple-700 transition-colors">Home</a>
            <a href="#experience" className="hover:text-purple-700 transition-colors">Experience</a>
            <a href="#tools" className="hover:text-purple-700 transition-colors">Tools</a>
            <a href="#skills" className="hover:text-purple-700 transition-colors">Skills</a>
            <a href="#education" className="hover:text-purple-700 transition-colors">Education</a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6B4E87]/70">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors border border-purple-100"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
