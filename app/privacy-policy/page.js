export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> December 30, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                subscribe to our newsletter, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send you important updates about your orders</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With service providers who help us operate our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> privacy@kitchenstack.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> 1-800-KITCHEN (1-800-548-2436)
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Culinary Street, Food City, FC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
