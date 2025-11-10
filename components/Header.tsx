'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
        <button className="md:hidden text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}
