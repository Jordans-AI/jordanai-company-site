'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuRendered, setMenuRendered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Delayed render to ensure DOM settlement - fixes Safari rendering bug
  useEffect(() => {
    if (mobileMenuOpen) {
      // Small delay to ensure browser completes previous paint cycle
      const timer = setTimeout(() => {
        setMenuRendered(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setMenuRendered(false);
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-background focus:text-sm focus:tracking-wide"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center hover:opacity-70 transition-opacity"
        >
          <Image
            src="/jordan-ai-logo.png"
            alt="Jordan-AI"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm tracking-wide hover:text-secondary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm tracking-wide hover:text-secondary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-sm tracking-wide hover:text-secondary transition-colors"
          >
            Process
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm tracking-wide hover:text-secondary transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay and panel - CSS-based animation without AnimatePresence */}
      <>
        {/* Overlay backdrop */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.2)' }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile menu panel - with separate static background layer */}
        {menuRendered && (
        <div
          className="fixed z-50 md:hidden"
          style={{
            top: 0,
            right: 0,
            bottom: 0,
            width: '256px',
          }}
          id="mobile-menu-container"
        >
          {/* Static background - this div is ONLY for background, nothing else */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100vh',
              width: '256px',
              backgroundColor: '#F8F7F4',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Content layer */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', zIndex: 1 }}>
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary hover:text-secondary transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-2 px-6" aria-label="Mobile navigation">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-4 text-lg tracking-wide hover:text-secondary transition-colors border-b border-accent"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-4 text-lg tracking-wide hover:text-secondary transition-colors border-b border-accent"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-left py-4 text-lg tracking-wide hover:text-secondary transition-colors border-b border-accent"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-4 text-lg tracking-wide hover:text-secondary transition-colors border-b border-accent"
            >
              Contact
            </button>
          </nav>
          </div>
        </div>
        )}
      </>
    </header>
    </>
  );
}
