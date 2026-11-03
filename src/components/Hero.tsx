import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowDown, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const { personal, verifiedMetrics } = PORTFOLIO_DATA;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Delicate pastel background gradient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-purple-200/40 via-fuchsia-100/30 to-indigo-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-200/25 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-60 -right-20 w-96 h-96 bg-fuchsia-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed natural kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-purple-700 mb-3">
              <span>San Pedro, Laguna, PH</span>
              <span aria-hidden="true">·</span>
              <span>Available for New Roles</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1035] leading-[1.12] mb-5 font-display text-balance">
              Ma. Francine Paula Javier
            </h1>

            {/* Dynamic Roles Subheading */}
            <div className="text-lg sm:text-xl font-medium text-purple-800/90 mb-5 leading-relaxed">
              Disposition Assistant · Social Media Manager · Lead Generation Specialist · Registered Midwife II
            </div>

            {/* Editorial Bio Statement from CV */}
            <p className="text-base sm:text-lg text-[#3E235D]/80 leading-relaxed max-w-2xl mb-8">
              {personal.bio}
            </p>

            {/* Direct Contact Points (Clean unboxed inline list) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#4C2875] mb-8 font-medium">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-purple-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{personal.email}</span>
              </a>
              <span className="hidden sm:inline text-purple-300" aria-hidden="true">·</span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-purple-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{personal.phone}</span>
              </a>
              <span className="hidden sm:inline text-purple-300" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{personal.location}</span>
              </span>
            </div>

            {/* Primary Actions (No duplicate buttons) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                onClick={(e) => scrollToSection(e, '#experience')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-800 transition-all duration-200 shadow-md shadow-purple-300/40 hover:shadow-purple-400/50 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <span>View Work Experience</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#2E1065] bg-purple-50 hover:bg-purple-100 border border-purple-200/80 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <span>Direct Contact Information</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture (NO LABELS, NO BADGES) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft pastel ambient frame */}
              <div className="relative p-2.5 sm:p-3 rounded-3xl bg-gradient-to-b from-purple-200/70 via-fuchsia-100/50 to-purple-100/40 border border-purple-200/80 shadow-[0_16px_40px_rgba(124,58,237,0.12)]">
                <div className="overflow-hidden rounded-2xl bg-purple-100 aspect-[4/5]">
                  <img
                    src={personal.profileImageUrl}
                    alt="Portrait of Ma. Francine Paula Javier"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Authentic CV Metrics Row (Placed below the hero split) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-10 border-t border-purple-200/60"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {verifiedMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-purple-100/80 shadow-xs hover:border-purple-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-700 font-display tabular-nums mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#1E1035] mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-[#5D3A7A]/75">
                  {item.source}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
