import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, FileDown, ExternalLink } from 'lucide-react';
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
    <section id="contact" className="py-20 md:py-28 bg-[#FAF7FC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1035] font-display mb-4">
            Get in Touch
          </h2>
          <p className="text-base text-[#4C2875]/80 leading-relaxed">
            Reach out directly for disposition assistance, virtual operations, lead generation projects, or administrative roles.
          </p>
        </motion.div>

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

        {/* Direct Contact Cards (NO CONTACT FORM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-sm hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display">
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
                className="inline-flex items-center justify-center p-2 text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors"
                title="Open default email app"
                aria-label="Send email"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-sm hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display">
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
                className="inline-flex items-center justify-center p-2 text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-colors"
                title="Dial phone number"
                aria-label="Dial phone"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-sm hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 border border-purple-100">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1035] mb-1 font-display">
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
          </motion.div>
        </div>

        {/* CV Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-100 via-fuchsia-50 to-purple-50 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1E1035] font-display">
              Looking for a complete PDF copy of the resume?
            </h3>
            <p className="text-sm text-[#4C2875] mt-1">
              Download or view Paula's original document directly from the archive.
            </p>
          </div>

          <a
            href={personal.cvPdfUrl}
            target="_blank"
            rel="noreferrer"
            download="Paula_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-800 transition-colors shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Official CV (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
