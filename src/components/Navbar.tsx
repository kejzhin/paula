import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Tools', href: '#tools', id: 'tools' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'education', 'skills', 'tools', 'experience', 'about', 'hero'];
      const scrollPosition = window.scrollY + 150;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id === 'about' ? 'hero' : id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-[0_4px_24px_rgba(124,58,237,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="text-lg sm:text-xl font-bold tracking-tight text-[#2E1065] whitespace-nowrap shrink-0 hover:text-purple-700 transition-colors"
          >
            <span className="font-display">Ma. Francine Paula Javier</span>
          </a>

          {/* Zone 2: Navigation Links with Active Scroll Tracking */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-purple-50/70 border border-purple-100/80 rounded-full text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-purple-700 text-white font-semibold shadow-xs'
                      : 'text-[#4C2875] hover:text-purple-900 hover:bg-purple-100/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-800 transition-all duration-200 shadow-sm shadow-purple-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#2E1065] hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-purple-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-xl px-5 pt-3 pb-6 mt-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-100 text-purple-900 font-semibold'
                      : 'text-[#2E1065] hover:bg-purple-50 font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-purple-100">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
