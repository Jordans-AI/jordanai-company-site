'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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
            className="relative aspect-[4/3] rounded-sm overflow-hidden"
          >
            <Image
              src="/liquid-glass2.PNG"
              alt="Jordan-AI"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* AI Services Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-accent/20 border-l-4 border-primary/30 p-8 rounded-sm">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="space-y-3">
                <h3 className="font-playfair text-xl text-primary">
                  Understanding AI Services
                </h3>
                <div className="text-sm text-secondary leading-relaxed space-y-2">
                  <p>
                    <strong>Our AI implementations</strong> are designed to improve efficiency and productivity.
                    However, AI technology has inherent limitations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-3">
                    <li>AI outputs may be inaccurate or unexpected</li>
                    <li>Results vary based on data quality and implementation</li>
                    <li>Human oversight is always required for critical decisions</li>
                    <li>We do not guarantee specific outcomes or ROI</li>
                  </ul>
                  <p className="mt-4 text-xs">
                    <strong>Important:</strong> Our services provide technical AI implementation consulting,
                    not legal, financial, or regulatory advice. We recommend consulting licensed professionals
                    for compliance matters specific to your industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
