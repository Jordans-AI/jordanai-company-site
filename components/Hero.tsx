'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20" />
          {/* Placeholder for hero image - you can replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-white/30 rounded-full" />
          </div>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair leading-tight">
              Empower your business with AI.
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
              Simplify, automate, and grow smarter with Jordan-AI
            </p>
          </div>

          <p className="text-lg text-secondary/80 leading-relaxed">
            Let's explore how AI can transform your workflow.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="self-start px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm font-medium"
          >
            Book a Discovery Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
