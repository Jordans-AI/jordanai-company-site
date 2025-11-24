import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jordan-AI',
  description: 'Privacy Policy for Jordan-AI - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair mb-8">Privacy Policy</h1>
        <p className="text-sm text-secondary mb-12">Last Updated: November 11, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-playfair mb-4">Introduction</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Jordan-AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jordan-ai.com and use our services.
            </p>
            <p className="text-secondary leading-relaxed">
              By using our website or services, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Information We Collect</h2>

            <h3 className="text-xl font-playfair mb-3 mt-6">Personal Information</h3>
            <p className="text-secondary leading-relaxed mb-4">
              When you contact us through our website, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Message content and any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-secondary leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">How We Use Your Information</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Respond to your inquiries and contact requests</li>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about our services, updates, or promotional offers (with your consent)</li>
              <li>Analyze website usage and trends to improve our offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">How We Share Your Information</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Service Providers</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We use third-party service providers to facilitate our services:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Resend</strong> - Email delivery service for contact form submissions</li>
              <li><strong>Web hosting providers</strong> - To host and maintain our website</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              These service providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Legal Requirements</h3>
            <p className="text-secondary leading-relaxed">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government agencies).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Data Retention</h2>
            <p className="text-secondary leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form submissions are typically retained for up to 2 years for business record-keeping purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Your Privacy Rights</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">GDPR Rights (European Union)</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">CCPA Rights (California)</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Know:</strong> Request disclosure of personal information collected</li>
              <li><strong>Delete:</strong> Request deletion of personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of sale of personal information (we do not sell data)</li>
              <li><strong>Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
            </ul>

            <p className="text-secondary leading-relaxed mt-6">
              To exercise any of these rights, please contact us at <a href="mailto:shaylee@jordan-ai.com" className="underline hover:text-primary">shaylee@jordan-ai.com</a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Data Security</h2>
            <p className="text-secondary leading-relaxed">
              We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We use only essential cookies necessary for the website to function properly. These include:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Essential cookies:</strong> Session management, security, and user preferences</li>
              <li><strong>Consent cookies:</strong> To remember your cookie consent preferences</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              <strong>We do not use:</strong> Analytics cookies, advertising cookies, or tracking technologies.
              If we implement such technologies in the future, we will update this Privacy Policy and obtain
              your explicit consent as required by Israeli law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Israeli Privacy Protection Law Compliance</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Jordan-AI complies with the Israeli Privacy Protection Law, 5741-1981, as amended by Amendment No. 13
              (effective August 14, 2025). We are committed to protecting the privacy rights of Israeli residents.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Legal Basis for Processing</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We process your business contact information and project data based on:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Contract Performance:</strong> To deliver AI consulting services you've requested</li>
              <li><strong>Legitimate Interest:</strong> To maintain client relationships and improve our services</li>
              <li><strong>Consent:</strong> For marketing communications (you can opt-in or opt-out at any time)</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Israeli Data Subject Rights</h3>
            <p className="text-secondary leading-relaxed mb-4">
              If you are an Israeli resident, you have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of your personal information we hold</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal information for marketing or profiling purposes</li>
              <li><strong>Right to Restriction:</strong> Request restriction of processing under certain circumstances</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent</li>
            </ul>

            <p className="text-secondary leading-relaxed mt-6">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:shaylee@jordan-ai.com" className="underline hover:text-primary">shaylee@jordan-ai.com</a>.
              We will respond to your request within <strong>30 days</strong> as required by Israeli law.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Third-Party AI Service Providers</h3>
            <p className="text-secondary leading-relaxed mb-4">
              To provide AI integration services, we may share your project data with the following third-party AI platforms:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>OpenAI:</strong> For ChatGPT, GPT-4 API integrations, and AI implementations</li>
              <li><strong>Anthropic:</strong> For Claude AI consulting and implementations</li>
              <li><strong>Other AI platforms:</strong> As needed for specific project requirements (with your knowledge)</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              These platforms process data according to their own privacy policies. Data may be transferred to the
              United States or other countries. We ensure appropriate safeguards are in place for international data
              transfers as required by Israeli law.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Data Retention Policy</h3>
            <p className="text-secondary leading-relaxed mb-4">
              We retain your personal information for the following periods:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Active clients:</strong> During project duration + 7 years (Israeli tax law requirement)</li>
              <li><strong>Inactive leads:</strong> Contact form data deleted after 2 years of inactivity</li>
              <li><strong>Marketing contacts:</strong> Until opt-out or 3 years of inactivity</li>
              <li><strong>Legal obligations:</strong> As required by Israeli law for accounting and legal purposes</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Israeli Privacy Protection Authority</h3>
            <p className="text-secondary leading-relaxed mb-4">
              If you have complaints about our data practices that we cannot resolve, you may contact:
            </p>
            <div className="bg-accent/20 p-4 rounded space-y-2 text-secondary">
              <p><strong>Privacy Protection Authority (Israel)</strong></p>
              <p>Ministry of Justice, Israel</p>
              <p>Website: <a href="https://www.gov.il/en/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">gov.il/en/departments/the_privacy_protection_authority</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Third-Party Links</h2>
            <p className="text-secondary leading-relaxed">
              Our website may contain links to third-party websites (e.g., social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Children's Privacy</h2>
            <p className="text-secondary leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">International Data Transfers</h2>
            <p className="text-secondary leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Changes to This Privacy Policy</h2>
            <p className="text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a new "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Contact Us</h2>
            <p className="text-secondary leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
