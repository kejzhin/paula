import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Smooth progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 12;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(8px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF7FC] via-[#F5EEFA] to-[#EDE4F7] select-none"
        >
          {/* Ambient soft glow background */}
          <div className="absolute w-96 h-96 rounded-full bg-purple-300/30 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute w-72 h-72 rounded-full bg-fuchsia-200/25 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 max-w-md w-full">
            {/* Animated Monogram Crest */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/90 border border-purple-200/80 shadow-[0_10px_30px_rgba(147,51,234,0.12)] flex items-center justify-center backdrop-blur-md">
                <span className="font-display font-extrabold text-2xl tracking-wider text-purple-700">
                  PJ
                </span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-1.5 -right-1.5 text-purple-400"
              >
                <Sparkles className="w-5 h-5 fill-purple-200" />
              </motion.div>
            </motion.div>

            {/* Name */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1035] font-display text-center mb-6 tracking-tight">
              Ma. Francine Paula Javier
            </h2>

            {/* Smooth Progress Bar */}
            <div className="w-56 sm:w-64 h-1.5 bg-purple-100/80 rounded-full overflow-hidden p-0.5 border border-purple-200/60 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Numeric percentage */}
            <div className="mt-3 text-[11px] font-mono text-[#5D3A7A]/70 tabular-nums">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
