'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user has already consented
    const consent = localStorage.getItem('jordan-ai-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('jordan-ai-cookie-consent', 'accepted');
    localStorage.setItem('jordan-ai-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  // Don't render anything on server-side
  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
          aria-describedby="cookie-consent-description"
        >
          <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm shadow-lg border border-accent/30 rounded-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3">
                  {/* Cookie icon */}
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <div>
                    <h2 className="font-playfair text-lg md:text-xl text-primary mb-2">
                      Cookie Notice
                    </h2>
                    <p id="cookie-consent-description" className="text-sm text-secondary leading-relaxed">
                      We use essential cookies to ensure our website functions properly and to remember your preferences.
                      We <strong>do not use</strong> tracking, analytics, or advertising cookies.
                      Your privacy is important to us.
                    </p>
                    <p className="text-xs text-secondary mt-2">
                      By continuing to use this site, you consent to our use of essential cookies.
                      For more information, see our{' '}
                      <a
                        href="/privacy"
                        className="underline hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 bg-primary text-background hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm font-medium whitespace-nowrap"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
