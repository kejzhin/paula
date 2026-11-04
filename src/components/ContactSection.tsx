import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 md:py-32 bg-[#FAF7FC] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-base text-[#4C2875]/80 leading-relaxed">
            Reach out directly for disposition assistance, virtual operations, lead generation projects, or administrative roles.
          </p>
        </div>

        {/* Copy Toast Alert */}
        <div className="h-8 mb-4 flex items-center justify-center">
          <AnimatePresence>
            {copiedKey && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-900 text-white text-xs font-medium rounded-full shadow-md"
              >
                <Check className="w-3.5 h-3.5 text-purple-300" />
                <span>{copiedKey} copied to clipboard!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:border-purple-300 hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display group-hover:text-purple-700 transition-colors">
                Email Address
              </h3>
              <p className="text-xs text-[#5D3A7A]/75 mb-4">
                Primary inbox for all business & role inquiries
              </p>
              <div className="text-sm font-semibold text-purple-900 break-all select-all mb-6">
                {personal.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-purple-100">
              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'Email address')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2E1065] bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200/60"
              >
                {copiedKey === 'Email address' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center p-2 text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors shadow-xs"
                title="Open default email app"
                aria-label="Send email"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:border-purple-300 hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display group-hover:text-purple-700 transition-colors">
                Direct Phone
              </h3>
              <p className="text-xs text-[#5D3A7A]/75 mb-4">
                Available for SMS, call, or messaging
              </p>
              <div className="text-sm font-semibold text-purple-900 select-all mb-6">
                {personal.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-purple-100">
              <button
                type="button"
                onClick={() => handleCopy(personal.phone, 'Phone number')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2E1065] bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200/60"
              >
                {copiedKey === 'Phone number' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center p-2 text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors shadow-xs"
                title="Dial phone number"
                aria-label="Dial phone"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-[0_2px_12px_rgba(124,58,237,0.03)] hover:border-purple-300 hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display group-hover:text-purple-700 transition-colors">
                Location
              </h3>
              <p className="text-xs text-[#5D3A7A]/75 mb-4">
                Philippine Standard Time (UTC+8)
              </p>
              <div className="text-sm font-semibold text-purple-900 mb-6">
                {personal.location}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-purple-100">
              <button
                type="button"
                onClick={() => handleCopy(personal.location, 'Location')}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2E1065] bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200/60"
              >
                {copiedKey === 'Location' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-700" />
                    <span>Copy Location</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
