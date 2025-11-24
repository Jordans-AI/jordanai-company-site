import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Jordan-AI',
  description: 'Jordan-AI is committed to ensuring digital accessibility for people with disabilities.',
};

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair mb-8">Accessibility Statement</h1>
        <p className="text-sm text-secondary mb-12">Last Updated: November 24, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-playfair mb-4">Our Commitment</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Jordan-AI is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the accessibility and usability of our website to provide a positive experience for all visitors, regardless of ability or technology used.
            </p>
            <p className="text-secondary leading-relaxed">
              We believe that everyone should have equal access to information and services online, and we take our responsibility seriously to make our digital presence accessible to the widest possible audience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Accessibility Standards</h2>
            <p className="text-secondary leading-relaxed mb-4">
              This website aims to comply with:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines published by the W3C</li>
              <li><strong>Israeli Standard 5568</strong> - Israeli accessibility standard for websites</li>
              <li><strong>Equal Rights for Persons with Disabilities Law (1998)</strong> - Israeli accessibility legislation</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              These standards ensure our website is accessible to people with a wide range of disabilities, including visual, auditory, motor, and cognitive impairments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Accessibility Features</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Our website includes the following accessibility features:
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Navigation and Structure</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Semantic HTML structure with proper heading hierarchy (H1-H6)</li>
              <li>Consistent navigation across all pages</li>
              <li>Logical reading order for screen readers</li>
              <li>Descriptive page titles for easy identification</li>
              <li>Keyboard navigation support for all interactive elements</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Visual Design</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>High color contrast ratios meeting WCAG AA standards (4.5:1 minimum)</li>
              <li>Text resizable up to 200% without loss of functionality</li>
              <li>Responsive design that adapts to different screen sizes and devices</li>
              <li>No reliance on color alone to convey information</li>
              <li>Clear focus indicators for keyboard navigation</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Forms and Interaction</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Clear, descriptive labels for all form fields</li>
              <li>Required fields clearly marked with asterisks (*)</li>
              <li>Helpful error messages that identify problems and suggest solutions</li>
              <li>Sufficient time to complete forms (no time limits)</li>
              <li>Visible focus states on all interactive elements</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Content</h3>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Alternative text descriptions for images and icons</li>
              <li>Clear, simple language throughout the site</li>
              <li>Proper use of headings to structure content</li>
              <li>ARIA labels for enhanced screen reader support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Assistive Technologies</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Our website has been designed and tested to work with commonly used assistive technologies, including:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><strong>Screen readers:</strong> NVDA, JAWS, VoiceOver (Mac/iOS), TalkBack (Android)</li>
              <li><strong>Keyboard-only navigation:</strong> All functionality accessible without a mouse</li>
              <li><strong>Browser zoom:</strong> Text and layout scale appropriately when zoomed</li>
              <li><strong>Voice recognition software:</strong> Compatible with voice control systems</li>
              <li><strong>Screen magnification:</strong> Works with magnification tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Known Limitations</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We are continually working to improve accessibility. Currently, we are aware of the following areas for improvement:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Some placeholder images in design sections will be replaced with properly tagged images</li>
              <li>We are working on adding a skip-to-content link for keyboard users</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              We are actively addressing these issues and plan to have them resolved in upcoming updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Accessibility Testing and Audits</h2>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>Testing Methods:</strong>
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Automated accessibility testing using industry-standard tools</li>
              <li>Manual keyboard navigation testing</li>
              <li>Screen reader compatibility testing</li>
              <li>Color contrast verification</li>
              <li>Responsive design testing across devices</li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              <strong>Audit Schedule:</strong> We conduct internal accessibility reviews regularly and plan professional accessibility audits every 6-12 months to ensure continued compliance.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              <strong>Last Internal Review:</strong> November 24, 2025
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Feedback and Assistance</h2>
            <p className="text-secondary leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
            </p>

            <h3 className="text-xl font-playfair mb-3 mt-6">Accessibility Coordinator</h3>
            <div className="text-secondary space-y-2 mb-6">
              <p><strong>Name:</strong> Shaylee Jordan</p>
              <p><strong>Email:</strong> <a href="mailto:shaylee@jordan-ai.com" className="underline hover:text-primary">shaylee@jordan-ai.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+972054972871" className="underline hover:text-primary">+972 054 972 8712</a></p>
            </div>

            <h3 className="text-xl font-playfair mb-3 mt-6">How to Report Accessibility Issues</h3>
            <p className="text-secondary leading-relaxed mb-4">
              If you encounter any accessibility barriers on our website, please contact us with the following information:
            </p>
            <ol className="list-decimal pl-6 text-secondary space-y-2">
              <li><strong>Page URL:</strong> The web address where you encountered the issue</li>
              <li><strong>Description:</strong> A detailed description of the problem</li>
              <li><strong>Assistive Technology:</strong> The assistive technology you were using (if applicable), including version</li>
              <li><strong>Browser and OS:</strong> Your web browser and operating system</li>
            </ol>

            <p className="text-secondary leading-relaxed mt-6">
              <strong>Response Time:</strong> We aim to respond to all accessibility inquiries within 7 business days. We will work diligently to resolve any issues or provide alternative access to the information you need.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Alternative Access</h2>
            <p className="text-secondary leading-relaxed">
              If you have difficulty accessing any content on our website or require information in an alternative format, please contact us. We will provide the information in an accessible format or assist you in accessing the content through alternative means, such as:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2 mt-4">
              <li>Email communication</li>
              <li>Phone consultation</li>
              <li>Document delivery in accessible formats</li>
              <li>Video call with screen sharing if needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Third-Party Content</h2>
            <p className="text-secondary leading-relaxed">
              While we strive to ensure accessibility across our entire website, some content may be provided by third-party services (such as social media embeds). We do not control the accessibility of third-party content but encourage our partners to maintain accessibility standards. If you encounter accessibility issues with third-party content on our site, please let us know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Legal Compliance and Enforcement</h2>
            <p className="text-secondary leading-relaxed mb-4">
              This accessibility statement is made in accordance with:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li>Israeli Equal Rights for Persons with Disabilities Law (1998)</li>
              <li>Israeli Standard 5568 for Website Accessibility</li>
              <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
            </ul>

            <h3 className="text-xl font-playfair mb-3 mt-6">Filing a Complaint</h3>
            <p className="text-secondary leading-relaxed mb-4">
              If you are not satisfied with our response to your accessibility concerns, you may contact:
            </p>
            <div className="bg-accent/20 p-6 rounded space-y-2 text-secondary">
              <p><strong>Commission for Equal Rights of Persons with Disabilities</strong></p>
              <p>Ministry of Justice, Israel</p>
              <p>Website: <a href="https://www.gov.il/en/departments/the_commission_for_equal_rights_of_persons_with_disabilities" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">gov.il/en/departments/the_commission_for_equal_rights_of_persons_with_disabilities</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Ongoing Commitment</h2>
            <p className="text-secondary leading-relaxed">
              Accessibility is an ongoing effort. We are committed to continually improving the accessibility of our website and ensuring that our digital presence is inclusive for all users. We regularly review our accessibility practices, stay informed about new accessibility guidelines and best practices, and update our website accordingly.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              We view accessibility not as a one-time project, but as a fundamental aspect of our digital presence and our values as a company.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Updates to This Statement</h2>
            <p className="text-secondary leading-relaxed">
              We review and update this accessibility statement regularly as we continue to improve the accessibility of our website and as accessibility standards evolve. Any significant changes will be reflected in the "Last Updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair mb-4">Additional Resources</h2>
            <p className="text-secondary leading-relaxed mb-4">
              For more information about web accessibility, please visit:
            </p>
            <ul className="list-disc pl-6 text-secondary space-y-2">
              <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">W3C Web Accessibility Initiative (WAI)</a></li>
              <li><a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">WebAIM - Web Accessibility In Mind</a></li>
              <li><a href="https://www.gov.il/en/departments/the_commission_for_equal_rights_of_persons_with_disabilities" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Israeli Commission for Equal Rights</a></li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-accent/50">
            <h2 className="text-2xl font-playfair mb-4">Contact Us</h2>
            <p className="text-secondary leading-relaxed mb-4">
              For any questions, concerns, or feedback about accessibility, please contact:
            </p>
            <div className="text-secondary space-y-2">
              <p><strong>Jordan-AI</strong></p>
              <p>Email: <a href="mailto:shaylee@jordan-ai.com" className="underline hover:text-primary">shaylee@jordan-ai.com</a></p>
              <p>Phone: <a href="tel:+972054972871" className="underline hover:text-primary">+972 054 972 8712</a></p>
              <p>Location: Tel Aviv, Israel</p>
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
