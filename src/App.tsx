import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { X, ExternalLink, Download } from 'lucide-react';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7FC] text-[#1E1035] selection:bg-purple-200 selection:text-purple-900 font-sans">
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal Viewer */}
      {resumeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-sm"
          onClick={() => setResumeModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-purple-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-100 bg-purple-50/50">
              <h3 className="text-base font-bold text-[#1E1035] font-display">
                Original Curriculum Vitae — Ma. Francine Paula Javier
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.cvPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-purple-700 hover:bg-purple-100 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.cvPdfUrl}
                  download="Paula_CV.pdf"
                  className="p-2 text-purple-700 hover:bg-purple-100 rounded-lg transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(false)}
                  className="p-2 text-purple-700 hover:bg-purple-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-purple-100/30 p-2 overflow-hidden">
              <iframe
                src={`${PORTFOLIO_DATA.personal.cvPdfUrl}#view=FitH`}
                title="Paula Javier Resume"
                className="w-full h-full rounded-xl border border-purple-200/50"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
