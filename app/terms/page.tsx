import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Jordan-AI',
  description: 'Terms of Service for Jordan-AI - Legal terms and conditions for using our services.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair mb-8">Terms of Service</h1>
        <p className="text-sm text-secondary mb-12">Last Updated: November 11, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-playfair mb-4">Acceptance of Terms</h2>
            <p className="text-secondary leading-relaxed">
              By accessing or using the Jordan-AI website (jordan-ai.com) and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Description of Services</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Jordan-AI provides AI-powered business solutions and consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Workflow automation consulting and implementation</li>
              <li>AI-powered business intelligence tools</li>
              <li>Custom integration development</li>
              <li>AI strategy and training services</li>
              <li>Data dashboard development</li>
              <li>AI-powered customer support solutions</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Services are provided on a project-by-project basis as agreed upon between Jordan-AI and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Use of Website</h2>

            <h3 className="text-xl font-playfair mb-3 mt-6">Permitted Use</h3>
            <p className="text-secondary leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or unlawful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use automated systems to access the website without permission</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Account Security</h3>
            <p className="text-secondary leading-relaxed">
              If you create an account with us in the future, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">AI Services Disclaimer</h2>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>IMPORTANT:</strong> Our AI-powered services and recommendations are provided for business optimization purposes. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>No Guarantees:</strong> AI recommendations and implementations are not guaranteed to achieve specific results or outcomes</li>
              <li><strong>Limitations:</strong> AI technology has inherent limitations and may produce unexpected or inaccurate results</li>
              <li><strong>Human Oversight:</strong> AI outputs should be reviewed and validated by qualified professionals before implementation</li>
              <li><strong>Not Professional Advice:</strong> Our services do not constitute legal, financial, medical, or other professional advice</li>
              <li><strong>Evolving Technology:</strong> AI technology is rapidly evolving, and performance may vary over time</li>
              <li><strong>Data Quality:</strong> Results depend on the quality and accuracy of data provided by the client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Intellectual Property Rights</h2>

            <h3 className="text-xl font-playfair mb-3 mt-6">Our Content</h3>
            <p className="text-secondary leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of Jordan-AI or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Client Work Product</h3>
            <p className="text-secondary leading-relaxed mb-4">
              Ownership of deliverables and work product will be specified in individual service agreements. Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Custom implementations created for clients become client property upon full payment</li>
              <li>Jordan-AI retains rights to general methodologies, frameworks, and tools</li>
              <li>Jordan-AI may use anonymized case studies for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Payment and Fees</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Service fees, payment terms, and deliverables will be specified in individual service agreements or proposals. General terms include:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Fees are due as specified in the service agreement</li>
              <li>Late payments may incur additional charges</li>
              <li>Refunds are subject to the terms of the specific service agreement</li>
              <li>All fees are exclusive of applicable taxes unless otherwise stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Limitation of Liability</h2>
            <p className="text-secondary leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Jordan-AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Our total liability for any claims arising from services provided shall not exceed the fees paid by the client for the specific service giving rise to the claim</li>
              <li>We are not liable for damages resulting from AI output errors, data inaccuracies, or implementation issues</li>
              <li>We are not responsible for third-party services, APIs, or platforms used in implementations</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Some jurisdictions do not allow limitations on implied warranties or liability, so these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Warranties and Disclaimers</h2>
            <p className="text-secondary leading-relaxed mb-4">
              OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties that services will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of AI outputs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Indemnification</h2>
            <p className="text-secondary leading-relaxed">
              You agree to indemnify, defend, and hold harmless Jordan-AI, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Confidentiality</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Both parties agree to maintain confidentiality of proprietary information shared during the course of service delivery. This includes:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Business strategies and plans</li>
              <li>Technical specifications and data</li>
              <li>Financial information</li>
              <li>Customer information</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Detailed confidentiality terms will be specified in individual service agreements or Non-Disclosure Agreements (NDAs).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Termination</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Suspend or terminate your access to our website for violation of these Terms</li>
              <li>Discontinue services with notice as specified in service agreements</li>
              <li>Refuse service to anyone at our discretion</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Termination terms for ongoing services will be specified in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Third-Party Services</h2>
            <p className="text-secondary leading-relaxed">
              Our services may integrate with or utilize third-party platforms, APIs, and services. We are not responsible for the availability, performance, or policies of these third-party services. Your use of third-party services is subject to their respective terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-secondary leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Israel, without regard to conflict of law principles.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              Any disputes arising from these Terms or our services shall be resolved through:
            </p>
            <ol className="list-decimal pl-6 text-secondary space-y-2">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation, if negotiation fails</li>
              <li>Binding arbitration or litigation in the courts of Israel</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Changes to Terms</h2>
            <p className="text-secondary leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website or services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Severability</h2>
            <p className="text-secondary leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Entire Agreement</h2>
            <p className="text-secondary leading-relaxed">
              These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Jordan-AI regarding the use of our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Contact Information</h2>
            <p className="text-secondary leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="text-secondary space-y-2">
              <p><strong>Jordan-AI</strong></p>
              <p>Email: <a href="mailto:shaylee@jordan-ai.com" className="underline hover:text-primary">shaylee@jordan-ai.com</a></p>
              <p>Phone: <a href="tel:+972054972871" className="underline hover:text-primary">+972 054 972 8712</a></p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-accent/50">
          <a
            href="/"
            className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
