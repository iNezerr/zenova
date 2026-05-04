import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: January 23, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Zenova, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and use our services. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
              policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Fill out contact forms on our website</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Request information about our services</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Personal information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information about your 
              device and browsing activity, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of visits</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you information about our services, updates, and promotions</li>
              <li>To improve our website and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To detect, prevent, and address technical issues or security concerns</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party 
              service providers who assist us in operating our website and delivering our services 
              (e.g., email service providers, hosting services).</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by 
              law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
              of assets, your information may be transferred to the acquiring entity.</li>
              <li><strong>Protection of Rights:</strong> We may disclose information when necessary to 
              protect our rights, property, or safety, or that of our users or others.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted 
              by law. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing 
              experience. Cookies are small files stored on your device that help us understand how you 
              use our website. You can control cookie settings through your browser preferences, but 
              disabling cookies may limit some functionality of our website.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review the 
              privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If we become aware that we have collected 
              information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your country 
              of residence. These countries may have different data protection laws. By using our services, 
              you consent to the transfer of your information to these countries.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              for legal, operational, or regulatory reasons. We will notify you of any material changes by 
              posting the updated policy on this page with a new "Last Updated" date. We encourage you to 
              review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
              <p className="text-gray-700 mb-2"><strong>Zenova</strong></p>
              <p className="text-gray-700 mb-2">Email: privacy@zenova.com</p>
              <p className="text-gray-700">
                You can also reach us through our <Link href="/#contact" className="text-blue-600 hover:text-blue-800">contact form</Link>.
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Consent</h2>
            <p className="text-gray-700 mb-4">
              By using our website and services, you consent to the collection, use, and disclosure of 
              your information as described in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
