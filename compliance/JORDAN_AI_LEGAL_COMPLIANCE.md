# Legal Compliance Guide - Jordan-AI Website

**Last Updated:** November 24, 2025
**Business:** Jordan-AI - B2B AI Integration & Automation Services
**Location:** Israel
**Purpose:** Ensure Jordan-AI website complies with all Israeli legal requirements

---

## 🎯 Executive Summary

### Why This Matters

Operating a **B2B AI consulting business** in Israel requires compliance with:

1. **Privacy Protection Law (Amendment 13, Aug 2025)** - Fines up to 5% of revenue or ₪500K+
2. **Web Accessibility Law (IS 5568 / WCAG 2.1 AA)** - ₪50K statutory damages per person
3. **Consumer Protection Law** - Mandatory business disclosures
4. **Professional Services Liability** - Disclaimers for AI consulting advice

### Key Differences: Jordan-AI vs. Urban Age

| Aspect | Urban Age (Lead Gen) | Jordan-AI (B2B Consulting) |
|--------|---------------------|---------------------------|
| **Business Model** | B2C Lead Generation | B2B Professional Services |
| **Data Collected** | Personal + building addresses | Business contact info + project details |
| **Target Audience** | Individual residents | Business clients |
| **Primary Risk** | Real estate advice liability | AI implementation liability + professional advice |
| **Data Sharing** | With construction companies | With AI platform providers (APIs) |
| **Service Type** | Facilitator/matchmaker | Professional consulting/implementation |

### What This Guide Covers

✅ Israeli Privacy Law (Amendment 13) requirements
✅ Accessibility compliance (IS 5568)
✅ Consumer Protection requirements
✅ AI services-specific legal considerations
✅ B2B contract considerations
✅ Templates for all required legal pages
✅ Implementation checklists

---

## 📋 1. Privacy Protection Law (Amendment 13)

**Effective Date:** August 14, 2025
**Authority:** Privacy Protection Authority
**Risk Level:** 🔴 CRITICAL

### Key Requirements for Jordan-AI

#### A. Data Collection Notice

Jordan-AI likely collects:
- **Business contact information:** Name, email, phone
- **Company information:** Company name, industry, size
- **Project details:** Business needs, automation goals, workflows
- **Technical information:** IP addresses, browser data, geolocation
- **Communication records:** Email exchanges, call notes, meeting records
- **Third-party data:** API keys, system access credentials (if providing implementation)

#### B. Privacy Policy Requirements (Amendment 13)

Your Privacy Policy **must** include:

**Basic Disclosure:**
- ✅ What data is collected (be specific for B2B context)
- ✅ Why data is collected (consulting, project management, billing)
- ✅ Legal basis for processing (contract performance, legitimate interest)
- ✅ How data will be used
- ✅ Who data is shared with (AI platform providers: OpenAI, Anthropic, etc.)
- ✅ Where data is stored (Israel, cloud services like AWS/Azure)
- ✅ How long data is retained (recommend: active projects + 7 years for tax records)
- ✅ Individual rights (access, correction, deletion, portability, objection)
- ✅ How to exercise rights
- ✅ Contact information

**Enhanced Transparency (Amendment 13 Specific):**
- ✅ Automated decision-making disclosure (if AI is used for screening clients)
- ✅ Differentiation between provided vs. tracked data
- ✅ Risks associated with data collection
- ✅ International data transfers (if using US-based AI services)
- ✅ Sub-processor disclosure (third-party AI APIs)

#### C. Consent Requirements

**Granular Consent Model:**
```
□ I agree to Jordan-AI processing my business contact information to
  respond to my inquiry and provide consulting services. (REQUIRED)

□ I agree to Jordan-AI sharing project data with third-party AI
  service providers (e.g., OpenAI, Anthropic) necessary for service
  delivery. (REQUIRED for AI services)

□ I agree to receive marketing communications, case studies, and
  newsletters from Jordan-AI. (OPTIONAL)

□ I agree to Jordan-AI using anonymized project outcomes for marketing
  and case studies. (OPTIONAL)
```

**Important:**
- All checkboxes must be **unchecked by default** (opt-in)
- Each consent purpose must be **separate**
- Users must be able to **withdraw consent** at any time

#### D. Cookie Consent Banner

**Required Elements:**
- Must appear **before** any non-essential cookies are set
- Must be **opt-in** (not opt-out)
- Must categorize cookies:
  - **Essential:** Session management, security
  - **Analytics:** Google Analytics, usage tracking
  - **Marketing:** Remarketing, advertising (if used)

**Banner Text Example:**
```
🍪 We use cookies to improve your experience

Essential cookies are required for the website to function. We'd
also like to use analytics cookies to understand how you use our
site and improve our services.

[Essential Only] [Accept All] [Cookie Settings]
```

#### E. Data Subject Rights (Israeli Residents)

Users have the right to:
1. **Access** - Request copy of their data
2. **Correction** - Fix inaccurate information
3. **Deletion** - "Right to be forgotten" (with exceptions for legal obligations)
4. **Portability** - Receive data in machine-readable format
5. **Objection** - Stop processing for marketing/profiling
6. **Restriction** - Limit processing while investigating complaints
7. **Withdraw Consent** - Revoke consent at any time

**Your Obligation:** Respond within **30 days** of request.

#### F. Data Breach Notification

If a data breach occurs:
- **72 hours:** Notify Privacy Protection Authority
- **Without undue delay:** Notify affected individuals
- **Documentation:** Maintain breach response records

### Penalties for Non-Compliance

- **Administrative fines:** Up to **₪500,000** or **5% of annual turnover**
- **Civil claims:** Up to **₪100,000 per person** (no proof of harm required)
- **Reputational damage:** Loss of client trust

### Implementation Checklist

- [ ] Update Privacy Policy with Amendment 13 requirements (Hebrew + English)
- [ ] Add Privacy Policy link to every page footer
- [ ] Implement cookie consent banner with opt-in model
- [ ] Add granular consent checkboxes to contact form
- [ ] Create data retention policy (7 years for contracts, 2 years for leads)
- [ ] Establish data subject request process (email: privacy@jordan-ai.com)
- [ ] Document all third-party data processors (OpenAI, Anthropic, AWS, etc.)
- [ ] Create data processing agreements (DPAs) with clients who need them
- [ ] Set up encrypted data storage (HTTPS, database encryption)
- [ ] Implement access controls (who can view client data)

---

## 🦽 2. Web Accessibility Compliance (IS 5568)

**Legislation:** Equal Rights For Persons With Disabilities Law (1998), Israeli Standard 5568
**Standard:** WCAG 2.1 Level AA
**Authority:** Commission for Equal Rights of Persons with Disabilities
**Risk Level:** 🔴 CRITICAL

### Who Must Comply

✅ **Jordan-AI must comply** - B2B service provider serving Israeli businesses
✅ Applies even if clients are businesses (websites must be accessible to all)
✅ No exemption based on business model

### WCAG 2.1 Level AA Requirements

#### Current Status (Based on Code Review)

**✅ Already Implemented:**
- Semantic HTML structure (proper heading hierarchy)
- Form labels with `htmlFor` attributes
- Keyboard navigation support
- Color contrast (grayscale palette meets requirements)
- Mobile responsive design
- Focus states on interactive elements

**❌ Missing:**
- Language attribute: `lang="en"` in HTML (should be present for accessibility)
- Skip navigation link
- Accessibility Statement page (MANDATORY)
- ARIA labels on complex components
- Alt text verification on all images
- Screen reader testing documentation

#### Required WCAG 2.1 AA Checklist

**Perceivable:**
- [ ] All images have descriptive alt text
- [ ] Text contrast ratio ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
- [ ] Information not conveyed by color alone
- [ ] Text resizable to 200% without loss of functionality
- [ ] Video captions (if adding video testimonials)

**Operable:**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Skip to main content link
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] No time limits on forms (or user can extend)

**Understandable:**
- [ ] Language declared: `<html lang="en">` or `lang="he"` for Hebrew version
- [ ] Consistent navigation across pages
- [ ] Clear form error messages
- [ ] Labels and instructions for form inputs

**Robust:**
- [ ] Valid HTML markup (no critical errors)
- [ ] ARIA attributes used correctly
- [ ] Compatible with assistive technologies (screen readers)

### Accessibility Statement (MANDATORY)

**Must Include:**
- Commitment to accessibility
- Compliance level: "WCAG 2.1 Level AA, Israeli Standard 5568"
- Known limitations (if any)
- Date of last accessibility audit
- Accessibility coordinator contact information
- Process for reporting accessibility issues
- Expected response time (recommend: 7 business days)

**Template Provided Below** (Section 7)

### Penalties for Non-Compliance

- **Statutory damages:** Up to **₪50,000 per plaintiff**
- **No proof of harm required** - only need to show non-compliance
- **Class action lawsuits possible**
- Very active enforcement in Israel

### Implementation Checklist

- [ ] Verify `lang="en"` attribute in HTML
- [ ] Add skip navigation link at top of page
- [ ] Create Accessibility Statement page (English + Hebrew recommended)
- [ ] Audit all images for alt text
- [ ] Test keyboard-only navigation (Tab, Enter, Space, Arrow keys)
- [ ] Test with screen readers (NVDA free, JAWS, VoiceOver on Mac)
- [ ] Verify color contrast ratios (use WebAIM Contrast Checker)
- [ ] Add ARIA labels to social media icons (already present)
- [ ] Validate HTML markup (W3C Validator)
- [ ] Designate accessibility coordinator (likely: Shaylee)
- [ ] Plan bi-annual accessibility audits (every 6-12 months)

**Recommended Tools:**
- WAVE (Web Accessibility Evaluation Tool) - browser extension
- Axe DevTools - browser extension
- WebAIM Contrast Checker
- NVDA Screen Reader (free)
- Lighthouse (built into Chrome DevTools)

---

## 🛡️ 3. Consumer Protection Law

**Legislation:** Consumer Protection Law, 5741-1981
**Authority:** Consumer Protection and Fair Trade Authority
**Risk Level:** 🟠 HIGH

### Required Business Information Display

**Must display prominently on website:**

- [ ] **Business legal name:** Jordan-AI (or full legal entity name if registered as Ltd./בע״מ)
- [ ] **Company registration number:** ח.פ (Company ID) - REQUIRED
- [ ] **Physical address in Israel:** Street address, city, postal code
- [ ] **Contact information:**
  - Email: shaylee@jordan-ai.com ✅ (already displayed)
  - Phone: +972 054 972 8712 ✅ (already displayed)
- [ ] **VAT number (if applicable):** For B2B invoicing

**Where to Display:**
- Footer on every page
- Contact page
- Terms of Service page

### B2B Service Disclosure Requirements

For B2B consulting services:

- [ ] **Service description:** What AI services you provide
- [ ] **Pricing information:** General pricing structure or "Contact for quote"
- [ ] **Delivery terms:** Project timelines, deliverables
- [ ] **Cancellation policy:** Termination terms for projects
- [ ] **Warranty/Guarantee terms:** What you guarantee vs. don't guarantee

### Contract Requirements (B2B)

For B2B services in Israel:
- Contracts should be in **Hebrew or English** (client's preference)
- Israeli law governs disputes (even if client uses international services)
- Specify dispute resolution method (negotiation, mediation, arbitration)
- Include limitation of liability clauses
- Define intellectual property ownership

### Implementation Checklist

- [ ] Add company registration number to footer (get from business registry)
- [ ] Add physical business address to footer
- [ ] Create "About" or "Legal Information" page with full company details
- [ ] Add cancellation/termination policy to Terms of Service
- [ ] Ensure Israeli law is specified as governing law
- [ ] Review all website copy for misleading claims or guarantees

---

## ⚖️ 4. AI Services-Specific Legal Considerations

**Risk Level:** 🔴 CRITICAL
**Unique to Jordan-AI:** AI consulting carries specific liability risks

### Key Legal Risks for AI Consulting

#### A. Professional Liability (AI Implementation)

**Risks:**
- AI recommendations that don't achieve expected results
- AI systems that produce biased or inaccurate outputs
- Data breaches from AI integrations
- Client expectations vs. AI limitations
- Third-party AI platform failures (OpenAI outages, API changes)

#### B. Not Legal/Financial/Medical Advisors

Jordan-AI provides **technical AI implementation**, not:
- ❌ Legal advice (even if AI touches legal workflows)
- ❌ Financial advice (even if building financial dashboards)
- ❌ Medical advice (even if AI touches healthcare)
- ❌ Regulatory compliance advice (client responsible for their own compliance)

#### C. AI Output Disclaimer

**Critical:** AI systems can:
- Produce inaccurate or misleading information ("hallucinations")
- Exhibit bias based on training data
- Fail unexpectedly or produce inconsistent results
- Violate copyright (if generating content)
- Expose sensitive data (if not properly secured)

### Recommended Disclaimers

#### On Website (General AI Disclaimer)

```markdown
## Important Information About AI Services

Jordan-AI provides AI integration and automation consulting services.
Please understand:

**No Guarantees of AI Performance**
- AI technology has inherent limitations and may produce unexpected
  or inaccurate results
- We do not guarantee specific outcomes, ROI, or performance metrics
- AI outputs should be reviewed by qualified professionals before use

**Not Professional Advice**
- Our services do not constitute legal, financial, medical, or
  regulatory advice
- You are responsible for ensuring AI implementations comply with
  your industry regulations
- We recommend consulting licensed professionals for compliance matters

**Third-Party AI Platforms**
- We integrate with third-party AI services (OpenAI, Anthropic, etc.)
- We are not responsible for third-party platform performance,
  availability, or policy changes
- Third-party AI models may change, affecting your implementations

**Data Security & Privacy**
- You are responsible for ensuring your data handling complies with
  applicable privacy laws
- AI platforms may process data outside Israel - you must ensure
  compliance with data transfer regulations
- We assist with security implementation but cannot guarantee
  absolute security

**Human Oversight Required**
- AI systems require human oversight and validation
- Critical decisions should not rely solely on AI outputs
- You are responsible for monitoring and validating AI performance

**Rapidly Evolving Technology**
- AI technology evolves rapidly; implementations may require updates
- What works today may not work the same way in the future
- Ongoing maintenance and adaptation may be necessary
```

#### On Contact Form (Brief Disclaimer)

```
⚠️ AI Services Disclaimer
Jordan-AI provides technical AI implementation and consulting.
This is not legal, financial, or regulatory advice. AI systems
have limitations and do not guarantee specific results. By
submitting this form, you acknowledge these limitations.
```

#### In Terms of Service (Detailed Legal Language)

Already included in current Terms of Service ✅ (Section: "AI Services Disclaimer")

**Verify it includes:**
- ✅ No guarantees of AI performance
- ✅ Limitations of AI technology
- ✅ Human oversight requirement
- ✅ Not professional advice disclaimer
- ✅ Third-party platform disclaimers
- ✅ Data quality dependencies

### Professional Liability Insurance

**HIGHLY RECOMMENDED:**
- Professional liability insurance (E&O insurance)
- Cyber liability insurance (data breach coverage)
- Coverage for AI-specific risks

**Why:**
- If AI implementation causes client losses
- If data breach occurs through your integration
- If AI produces harmful outputs affecting client's business

**Estimated Cost:** ₪5,000 - ₪15,000 per year (depending on revenue)

### Client Contracts - Key Clauses

**Must Include:**

1. **Scope of Services**
   - What you will deliver
   - What you won't deliver (ongoing support, guarantees)

2. **Limitation of Liability**
   - Cap liability at project fees paid
   - Exclude consequential damages

3. **AI-Specific Disclaimers**
   - AI limitations acknowledgment
   - Client responsibility for validation
   - Third-party platform dependencies

4. **Intellectual Property**
   - Custom code: transfers to client upon payment
   - General methodologies: retained by Jordan-AI
   - Third-party licenses: client responsible

5. **Confidentiality**
   - Mutual NDA
   - Data handling obligations

6. **Termination**
   - Notice period (30-60 days recommended)
   - Payment for work completed
   - Data return/deletion procedures

7. **Governing Law**
   - Israeli law
   - Israeli court jurisdiction or arbitration

### Implementation Checklist

- [ ] Add AI services disclaimer to website (homepage or about page)
- [ ] Add brief disclaimer to contact form
- [ ] Verify Terms of Service includes comprehensive AI disclaimers ✅
- [ ] Review all marketing copy for guarantee language ("will increase efficiency" → "may improve efficiency")
- [ ] Create standard client contract template with AI-specific clauses
- [ ] Get professional liability insurance (E&O + cyber)
- [ ] Have Israeli attorney review disclaimers and contract template
- [ ] Document all AI platform dependencies (OpenAI, Anthropic, etc.)
- [ ] Create internal policy for handling AI-related client complaints

### What You CAN Say vs. CANNOT Say

**✅ You CAN Say:**
- "We implement AI automations that may improve efficiency"
- "Our clients typically see improved workflows, though results vary"
- "We'll assess your needs and recommend suitable AI solutions"
- "AI tools can assist with customer support, data analysis, and automation"
- "We provide technical implementation; you're responsible for compliance"

**❌ You CANNOT Say:**
- "We guarantee 50% cost savings"
- "Our AI will definitely increase your revenue"
- "You don't need to worry about data privacy"
- "This AI solution will never make mistakes"
- "We'll handle all your compliance requirements"

---

## 📄 5. Required Legal Pages

### A. Privacy Policy (מדיניות פרטיות)

**Status:** ✅ EXISTS - Needs Israeli-specific updates
**Location:** `/app/privacy/page.tsx`
**Languages:** English (recommend adding Hebrew)

**Current Status:**
- ✅ Covers basic GDPR/CCPA requirements
- ✅ Mentions Resend (email service)
- ⚠️ **Needs updates for:**
  - Israeli Privacy Protection Law (Amendment 13) specific language
  - Hebrew version (recommended)
  - Third-party AI platforms disclosure (OpenAI, Anthropic, etc.)
  - Israeli data subject rights (in addition to GDPR/CCPA)
  - Cookie consent policy (Amendment 13 requirement)
  - Automated decision-making disclosure (if applicable)

**Recommended Additions:**

```markdown
## Compliance with Israeli Privacy Protection Law

Jordan-AI complies with the Israeli Privacy Protection Law, as amended
by Amendment 13 (effective August 14, 2025).

### Israeli Data Subject Rights

If you are an Israeli resident, you have the following rights:

1. **Right to Access:** Request a copy of your personal information
2. **Right to Correction:** Correct inaccurate information
3. **Right to Deletion:** Request deletion of your information
   (subject to legal retention requirements)
4. **Right to Data Portability:** Receive your data in a
   machine-readable format
5. **Right to Object:** Object to processing for marketing or profiling
6. **Right to Restriction:** Request restriction of processing
7. **Right to Withdraw Consent:** Withdraw consent at any time

To exercise these rights, contact us at privacy@jordan-ai.com.
We will respond within 30 days.

### Data Processing for Israeli Businesses

Your business contact information and project data is processed
on the legal basis of:
- **Contract Performance:** To deliver AI consulting services
- **Legitimate Interest:** To maintain client relationships and
  improve our services
- **Consent:** For marketing communications (opt-in)

### Third-Party AI Service Providers

To provide AI integration services, we may share your project data
with the following third-party AI platforms:
- **OpenAI (ChatGPT, GPT-4):** API integrations, AI implementations
- **Anthropic (Claude):** AI consulting and implementations
- **Other AI platforms:** As needed for specific project requirements

These platforms process data according to their own privacy policies.
Data may be transferred to the United States. We ensure appropriate
safeguards are in place for international data transfers.

### Data Retention

- **Active clients:** Data retained during project + 7 years (Israeli tax law)
- **Inactive leads:** Data deleted after 2 years of inactivity
- **Marketing contacts:** Until opt-out or 3 years of inactivity

### Israeli Data Protection Authority

If you have complaints about our data practices, you may contact:
Privacy Protection Authority (Israel)
Website: https://www.gov.il/en/departments/the_privacy_protection_authority
```

### B. Terms of Service (תנאי שימוש)

**Status:** ✅ EXISTS - Well-structured
**Location:** `/app/terms/page.tsx`
**Languages:** English (recommend adding Hebrew)

**Current Status:**
- ✅ Comprehensive AI Services Disclaimer section
- ✅ Covers limitation of liability
- ✅ Specifies Israeli law as governing law ✅
- ✅ Includes confidentiality, IP rights, payment terms
- ✅ No guarantee language (good!)

**Recommended Enhancements:**

1. **Add Hebrew Version** (תנאי שימוש)
   - Recommended for Israeli businesses
   - Can be separate page or toggle

2. **Add Specific AI Platform Mentions:**
```markdown
### Third-Party AI Platforms

Our services utilize the following third-party AI platforms:
- OpenAI (ChatGPT, GPT-4, DALL-E)
- Anthropic (Claude)
- Other AI platforms as needed for specific implementations

Your use of solutions we implement may be subject to these platforms'
terms of service. We are not responsible for:
- Changes to third-party AI platform terms or pricing
- Platform availability, performance, or outages
- Policy changes affecting your implementations
- Content policy violations by AI outputs
```

3. **Add Cancellation/Refund Policy:**
```markdown
### Cancellation and Refunds

**Project Cancellation:**
- Either party may terminate an ongoing project with 30 days'
  written notice
- Client will be billed for all work completed up to termination date
- Deliverables completed will be provided to client upon payment

**Refund Policy:**
- Refunds are considered on a case-by-case basis
- No refunds for completed work
- Partial refunds may be issued for work not yet started (at our discretion)
- Deposits are generally non-refundable once work has commenced
```

### C. Accessibility Statement (הצהרת נגישות)

**Status:** ❌ MISSING - MUST CREATE
**Required By:** IS 5568 / Accessibility Law
**Risk Level:** 🔴 CRITICAL

**Template:**

```markdown
# Accessibility Statement

**Last Updated:** [Current Date]

## Our Commitment

Jordan-AI is committed to ensuring digital accessibility for people
with disabilities. We continually work to improve the accessibility
and usability of our website to provide a positive experience for all visitors.

## Accessibility Standard

This website aims to comply with:
- **WCAG 2.1 Level AA** (Web Content Accessibility Guidelines)
- **Israeli Standard 5568** (Israeli accessibility standard)
- **Equal Rights for Persons with Disabilities Law (1998)**

## Accessibility Features

Our website includes the following accessibility features:

### Navigation
- Semantic HTML structure with proper heading hierarchy
- Keyboard navigation support for all interactive elements
- Logical tab order through page content
- Skip to main content link (at top of page)

### Visual Design
- High color contrast ratios (4.5:1 or higher)
- Text resizable to 200% without loss of functionality
- Responsive design for various screen sizes and devices
- No reliance on color alone to convey information

### Forms and Interaction
- Clear labels for all form fields
- Descriptive error messages
- Required fields clearly marked
- Sufficient time to complete forms (no time limits)

### Content
- Alternative text for images and icons
- Clear, simple language
- Consistent navigation across pages
- Proper language declarations in HTML

## Assistive Technologies

Our website has been designed to work with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Browser zoom and text-size adjustments
- Voice recognition software

## Known Limitations

We are continually working to improve accessibility. Currently identified areas for improvement:
- [List any known accessibility issues]
- [If none, state: "No known accessibility limitations at this time"]

## Accessibility Audits

- **Last accessibility audit:** [Date of last audit]
- **Next planned audit:** [Date - recommend every 6-12 months]
- **Audit method:** [Automated tools + manual testing with screen readers]

## Feedback and Assistance

We welcome your feedback on the accessibility of our website.

### Accessibility Coordinator
**Name:** Shaylee Jordan
**Email:** accessibility@jordan-ai.com (or shaylee@jordan-ai.com)
**Phone:** +972 054 972 8712

### Reporting Accessibility Issues

If you encounter any accessibility barriers on our website:

1. **Contact us** with details of the issue
2. **Include:**
   - Page URL where issue occurred
   - Description of the problem
   - Assistive technology being used (if applicable)
3. **We will respond** within 7 business days
4. **We will work** to resolve the issue or provide alternative access

### Alternative Access

If you have difficulty accessing any content on our website, please
contact us. We will provide the information in an alternative format
or assist you in accessing the content.

## Legal Compliance

This accessibility statement is made in accordance with:
- Israeli Equal Rights for Persons with Disabilities Law (1998)
- Israeli Standard 5568
- WCAG 2.1 Level AA

### Enforcement

If you are not satisfied with our response to your accessibility
concerns, you may contact:

**Commission for Equal Rights of Persons with Disabilities**
Ministry of Justice, Israel
Website: https://www.gov.il/en/departments/the_commission_for_equal_rights_of_persons_with_disabilities

## Updates to This Statement

We review and update this accessibility statement regularly as we
continue to improve the accessibility of our website.

---

**Questions?** Contact us at shaylee@jordan-ai.com or +972 054 972 8712
```

### D. Cookie Policy (מדיניות עוגיות)

**Status:** ⚠️ Partially covered in Privacy Policy
**Recommendation:** Create separate page OR enhance Privacy Policy section

**Required if using:**
- Google Analytics
- Facebook Pixel
- LinkedIn Insight Tag
- Any tracking/analytics cookies

**Template:**

```markdown
# Cookie Policy

## What Are Cookies?

Cookies are small text files stored on your device when you visit websites.
They help websites remember your preferences and improve your experience.

## Cookies We Use

### Essential Cookies (Required)
These cookies are necessary for the website to function:
- **Session cookies:** Maintain your session while browsing
- **Security cookies:** Prevent security threats
- **Form cookies:** Remember form data during your session

We do not need your consent for essential cookies.

### Analytics Cookies (Optional)
We use analytics cookies to understand how visitors use our website:
- **Google Analytics:** Traffic analysis, page views, user behavior
- **Purpose:** Improve website performance and user experience
- **Data collected:** Page views, time on site, browser type, device type
- **Retention:** 26 months

### Marketing Cookies (If Applicable)
[Only if using remarketing]
- **LinkedIn Insight Tag:** Track conversions from LinkedIn ads
- **Purpose:** Measure ad effectiveness
- **Data collected:** Page visits, conversions
- **Retention:** 90 days

## Your Cookie Choices

You can control cookies through:
1. **Cookie consent banner:** Choose which cookies to accept
2. **Browser settings:** Block or delete cookies
3. **Opt-out links:** Opt out of specific services

### How to Manage Cookies

**Chrome:** Settings > Privacy and security > Cookies and other site data
**Firefox:** Settings > Privacy & Security > Cookies and Site Data
**Safari:** Preferences > Privacy > Manage Website Data
**Edge:** Settings > Cookies and site permissions > Cookies and site data

## Third-Party Cookies

We use the following third-party services that may set cookies:
- **Google Analytics:** Privacy Policy at https://policies.google.com/privacy
- [Other services]

We do not control third-party cookies. Please review their privacy policies.

## Updates to This Policy

We may update this Cookie Policy to reflect changes in technology or
regulations. Check this page periodically for updates.

**Last Updated:** [Date]

---

**Questions?** Contact us at shaylee@jordan-ai.com
```

### E. About/Company Information Page

**Status:** ⚠️ Should add for transparency
**Not legally required, but HIGHLY RECOMMENDED**

**Should include:**
- Company story and mission
- Team introduction (Shaylee)
- Company registration details
- Physical address
- Contact information
- Social proof (if available): testimonials, case studies, certifications

---

## 🔒 6. Data Security Requirements

**Risk Level:** 🔴 CRITICAL
**Purpose:** Protect client business data from breaches

### Required Security Measures

#### Technical Security

- [ ] **HTTPS/TLS encryption:** Entire website (SSL certificate)
- [ ] **Database encryption:** Encrypt client data at rest
- [ ] **Secure API keys:** Never expose in client-side code
- [ ] **Input validation:** Prevent SQL injection, XSS attacks
- [ ] **Access controls:** Limit who at Jordan-AI can access client data
- [ ] **Two-factor authentication:** For admin access
- [ ] **Regular backups:** Encrypted, off-site backups
- [ ] **Logging and monitoring:** Track data access and changes
- [ ] **Secure development practices:** Code reviews, dependency updates

#### Organizational Security

- [ ] **Access control logs:** Who accessed what data, when
- [ ] **Data retention policy:** Delete data when no longer needed
- [ ] **Employee training:** Data protection and security awareness
- [ ] **Incident response plan:** What to do if breach occurs
- [ ] **Third-party agreements:** DPAs with all service providers
- [ ] **Regular security reviews:** Quarterly security audits

#### For Client Projects (AI Implementations)

- [ ] **Secure API key handling:** Never store in code repositories
- [ ] **Environment variables:** Use secure secret management
- [ ] **Data minimization:** Only process necessary data for AI tasks
- [ ] **Prompt engineering:** Avoid exposing sensitive data in AI prompts
- [ ] **Output filtering:** Screen AI outputs for sensitive data leakage

### Data Breach Response Plan

**If a data breach occurs:**

1. **Immediate (0-24 hours):**
   - Contain the breach
   - Preserve evidence
   - Assess scope and impact

2. **72 hours:**
   - Notify Privacy Protection Authority (if affects Israeli privacy rights)
   - Report to: https://www.gov.il/en/departments/the_privacy_protection_authority

3. **Without undue delay:**
   - Notify affected clients
   - Provide details: what data, when, what actions taken

4. **Documentation:**
   - Document incident timeline
   - Root cause analysis
   - Remediation steps taken
   - Lessons learned

### Implementation Checklist

- [ ] Enable HTTPS for entire website (already enabled via Vercel/Netlify)
- [ ] Implement secure environment variable handling (for API keys)
- [ ] Create data retention policy document
- [ ] Set up access controls (who can view contact form submissions)
- [ ] Implement logging for data access
- [ ] Create incident response plan document
- [ ] Get cyber liability insurance
- [ ] Train on security best practices
- [ ] Review third-party services for security compliance

---

## 📅 7. Pre-Launch Compliance Checklist

### 🔴 MUST COMPLETE (Cannot Launch Without)

**Legal Pages:**
- [x] Privacy Policy page exists ✅
- [ ] Privacy Policy updated with Israeli requirements
- [x] Terms of Service page exists ✅
- [ ] Terms of Service reviewed (appears complete ✅)
- [ ] Accessibility Statement page created ❌ **CRITICAL**
- [ ] Cookie Policy (separate page or in Privacy Policy)

**Website Elements:**
- [ ] Cookie consent banner implemented ❌ **CRITICAL**
- [ ] Contact form updated with granular consent checkboxes
- [ ] AI services disclaimer added to website
- [ ] Footer updated with company registration info ❌ **CRITICAL**
  - [ ] Company registration number (ח.פ)
  - [ ] Physical business address
  - [x] Email and phone (already present ✅)

**Technical:**
- [x] HTTPS/SSL enabled ✅ (via Vercel)
- [ ] Cookie consent tracking implemented
- [ ] Data security measures documented
- [ ] Backup system in place

**Documentation:**
- [ ] Data retention policy created
- [ ] Data breach response plan created
- [ ] Data subject request process defined

### 🟡 HIGHLY RECOMMENDED (Before Launch)

**Professional Review:**
- [ ] Israeli attorney review of legal pages (₪5K-₪15K)
- [ ] Professional accessibility audit (₪5K-₪15K)
- [ ] Security audit/penetration test

**Insurance:**
- [ ] Professional liability insurance (E&O)
- [ ] Cyber liability insurance

**Additional:**
- [ ] Client contract template with AI-specific clauses
- [ ] Internal data handling policy
- [ ] Marketing copy review (remove guarantee language)

### 🟢 CAN ADD AFTER LAUNCH (Ongoing)

**Maintenance:**
- [ ] Bi-annual accessibility audits (every 6-12 months)
- [ ] Annual legal page reviews
- [ ] Quarterly security reviews
- [ ] Privacy law monitoring (track changes)

**Enhancements:**
- [ ] Hebrew version of legal pages
- [ ] About/Company page
- [ ] Case studies page (with client consent)
- [ ] Blog for thought leadership

---

## 💰 Estimated Compliance Costs

### One-Time Costs

| Item | Estimated Cost |
|------|---------------|
| Israeli attorney review (legal pages) | ₪5,000 - ₪15,000 |
| Accessibility audit (professional) | ₪5,000 - ₪15,000 |
| Security audit/penetration test | ₪8,000 - ₪20,000 |
| Cookie consent banner implementation | ₪1,000 - ₪3,000 (if outsourced) |
| **Total One-Time:** | **₪19,000 - ₪53,000** |

### Annual Costs

| Item | Estimated Cost |
|------|---------------|
| Professional liability insurance (E&O) | ₪5,000 - ₪15,000 |
| Cyber liability insurance | ₪3,000 - ₪8,000 |
| Accessibility audits (bi-annual) | ₪10,000 - ₪30,000 |
| Legal consultation (retainer) | ₪3,000 - ₪10,000 |
| Security monitoring/tools | ₪2,000 - ₪5,000 |
| **Total Annual:** | **₪23,000 - ₪68,000** |

### DIY Option (Minimum Cost)

If you handle most items yourself:
- Attorney review (minimum): ₪5,000
- Accessibility tools (annual): ₪1,000
- Insurance (minimum): ₪8,000
- **Total First Year:** **₪14,000**

---

## 🚨 What Happens If You Don't Comply?

### Privacy Violations (Amendment 13)
- **Fines:** Up to ₪500,000 or 5% of annual turnover
- **Civil claims:** Up to ₪100,000 per person
- **Example:** 5 clients sue for unauthorized data use = ₪500,000 liability

### Accessibility Violations (IS 5568)
- **Statutory damages:** ₪50,000 per plaintiff
- **No proof of harm needed** (just show non-compliance)
- **Example:** 3 disabled users sue = ₪150,000 liability

### Consumer Protection Violations
- **Enforcement actions** by Consumer Protection Authority
- **Fines and penalties**
- **Requirement to correct violations**

### Professional Liability (AI Services)
- **Client lawsuits** for AI implementation failures
- **Damages claims** for business losses
- **Reputation damage** affecting future business

**Total Potential Exposure:** ₪500,000 - ₪1,000,000+ if multiple violations occur

---

## 📚 Additional Resources

### Israeli Government
- **Privacy Protection Authority:** https://www.gov.il/en/departments/the_privacy_protection_authority
- **Consumer Protection Authority:** https://www.gov.il/en/departments/consumer_protection_and_fair_trade_authority
- **Commission for Equal Rights (Accessibility):** https://www.gov.il/en/departments/the_commission_for_equal_rights_of_persons_with_disabilities

### Accessibility
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM:** https://webaim.org/
- **WAVE Accessibility Tool:** https://wave.webaim.org/
- **Axe DevTools:** https://www.deque.com/axe/devtools/

### Privacy & Security
- **Israeli Privacy Law (English):** Available on Privacy Protection Authority website
- **GDPR (for reference):** https://gdpr.eu/
- **OWASP Security:** https://owasp.org/

### AI-Specific
- **OpenAI Terms of Service:** https://openai.com/policies/terms-of-use
- **Anthropic Usage Policy:** https://www.anthropic.com/legal/aup
- **AI Liability Considerations:** Consult with tech attorney familiar with AI

---

## 📞 Contact for Legal Compliance

**Business Contact:**
- **Name:** Shaylee Jordan
- **Email:** shaylee@jordan-ai.com
- **Phone:** +972 054 972 8712

**Recommended Professional Services:**
- **Israeli tech attorney:** Recommended to review all legal documents
- **Accessibility consultant:** For WCAG 2.1 AA audit
- **Insurance broker:** For professional liability and cyber insurance

---

**Disclaimer:** This document is for informational purposes and does not constitute legal advice. Please consult with a licensed Israeli attorney for your specific situation.

**Prepared:** November 24, 2025
**For:** Jordan-AI Website Compliance
**Next Review:** Before website launch + annually thereafter
