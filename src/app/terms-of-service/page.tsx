import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert mx-auto">
          <h1>Terms of Service for my-wa-crm</h1>

          <p>
            <strong>Last Updated:</strong> May 31, 2026
          </p>

          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the my-wa-crm application (the "Service") operated by us.
          </p>

          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <h2>1. Accounts</h2>
          <p>
            When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of my-wa-crm and its licensors.
          </p>

          <h2>3. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>4. Limitation Of Liability</h2>
          <p>
            In no event shall my-wa-crm, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2>6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            yaswanthprof2005@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
