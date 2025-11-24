'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [consents, setConsents] = useState({
    privacy: false,
    dataSharing: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setConsents({ privacy: false, dataSharing: false, marketing: false });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Let's Connect</h2>
          <p className="text-lg text-secondary">
            Leave your details and we'll reach out to explore how AI can support your business.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/60 p-8 md:p-12 rounded-sm space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm tracking-wide mb-2 text-primary">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-accent/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm tracking-wide mb-2 text-primary">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-accent/50 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm tracking-wide mb-2 text-primary">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-accent/50 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm tracking-wide mb-2 text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-accent/50 focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
              {error}
            </div>
          )}

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded">
              Thank you! We'll get back to you soon.
            </div>
          )}

          {/* AI Services Brief Disclaimer */}
          <div className="bg-accent/20 border-l-2 border-primary/30 p-4 text-xs text-secondary leading-relaxed">
            <p>
              <strong className="text-primary">AI Services Disclaimer:</strong> Jordan-AI provides technical
              AI implementation consulting. This is not legal, financial, or regulatory advice. AI systems
              have limitations and do not guarantee specific results.
            </p>
          </div>

          {/* Granular Consent Checkboxes */}
          <div className="space-y-4 border-t border-accent/30 pt-6">
            <p className="text-sm font-medium text-primary">Required Consents *</p>

            {/* Privacy & Data Processing Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy-consent"
                required
                checked={consents.privacy}
                onChange={(e) => setConsents({ ...consents, privacy: e.target.checked })}
                className="mt-1 w-4 h-4 border border-accent/50 focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
              <label htmlFor="privacy-consent" className="text-sm text-secondary leading-relaxed">
                I agree to the{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>{' '}
                and consent to Jordan-AI processing my business contact information to respond to my
                inquiry and provide consulting services. *
              </label>
            </div>

            {/* Data Sharing with AI Platforms Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="data-sharing-consent"
                required
                checked={consents.dataSharing}
                onChange={(e) => setConsents({ ...consents, dataSharing: e.target.checked })}
                className="mt-1 w-4 h-4 border border-accent/50 focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
              <label htmlFor="data-sharing-consent" className="text-sm text-secondary leading-relaxed">
                I understand that Jordan-AI may need to share project data with third-party AI service
                providers (e.g., OpenAI, Anthropic) as necessary for service delivery. *
              </label>
            </div>

            {/* Optional Marketing Consent */}
            <div className="flex items-start gap-3 pt-3 border-t border-accent/30">
              <input
                type="checkbox"
                id="marketing-consent"
                checked={consents.marketing}
                onChange={(e) => setConsents({ ...consents, marketing: e.target.checked })}
                className="mt-1 w-4 h-4 border border-accent/50 focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
              <label htmlFor="marketing-consent" className="text-sm text-secondary leading-relaxed">
                <span className="text-xs text-primary font-medium">Optional:</span> I would like to
                receive occasional updates, case studies, and AI insights from Jordan-AI.
              </label>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full md:w-auto px-10 py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 tracking-wide text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Get in Touch'}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center space-y-3"
        >
          <a
            href="mailto:shaylee@jordan-ai.com"
            className="block text-secondary hover:text-primary transition-colors"
          >
            shaylee@jordan-ai.com
          </a>
          <a
            href="tel:+972054972871"
            className="block text-secondary hover:text-primary transition-colors"
          >
            +972 054 972 8712
          </a>
        </motion.div>
      </div>
    </section>
  );
}
