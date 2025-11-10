'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-playfair leading-tight">
              Clarity and purpose in every solution
            </h2>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                At <span className="text-primary font-medium">Jordan-AI</span>, we help businesses unlock the full potential of artificial intelligence - not through complexity, but with clarity and purpose.
              </p>
              <p>
                Our approach begins with understanding your unique challenges, researching the best solutions, and designing intelligent systems tailored to your workflow.
              </p>
              <p>
                We believe in empowering teams, not replacing them. AI should enhance human capability, streamline operations, and free you to focus on what truly matters.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/40 to-gray-500/40" />
            {/* Placeholder - replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
