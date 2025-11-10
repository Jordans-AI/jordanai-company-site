'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start with an introduction meeting to understand your business, challenges, and goals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We research and propose tailored AI tools and automation strategies that fit your workflow.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'We implement quick, high-value solutions so you can see results fast and build momentum.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">How We Work</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A simple, proven process designed to deliver value quickly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-playfair text-secondary/30 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-playfair mb-3">{step.title}</h3>
              <p className="text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg text-secondary/90 italic max-w-3xl mx-auto"
        >
          We believe in starting small for maximum value — then growing together as your needs evolve.
        </motion.p>
      </div>
    </section>
  );
}
