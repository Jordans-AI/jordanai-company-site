'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    title: 'Workflow Automations',
    description: 'Streamline repetitive tasks and connect your tools for seamless operations.',
  },
  {
    title: 'Smart Data Dashboards',
    description: 'Transform raw data into actionable insights with custom analytics solutions.',
  },
  {
    title: 'AI-powered Customer Support',
    description: 'Enhance customer experience with intelligent chatbots and support systems.',
  },
  {
    title: 'Business Intelligence Tools',
    description: 'Make data-driven decisions with advanced reporting and forecasting.',
  },
  {
    title: 'Custom Integrations',
    description: 'Connect your existing systems for unified, efficient workflows.',
  },
  {
    title: 'Strategy & Training',
    description: 'Empower your team with AI knowledge and strategic implementation plans.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Our Services</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Tailored AI solutions to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white/40 p-8 rounded-sm border border-transparent hover:border-accent hover:bg-white/60 transition-all duration-300 cursor-default"
            >
              <h3 className="text-xl font-playfair mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p
                className={`text-secondary leading-relaxed transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
