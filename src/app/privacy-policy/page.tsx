import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert mx-auto">
          <h1>Privacy Policy for my-wa-crm</h1>

          <p>
            <strong>Last Updated:</strong> May 31, 2026
          </p>

          <p>
            Welcome to my-wa-crm. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Application includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Application.
            </li>
            <li>
              <strong>Data from Social Networks:</strong> We may collect information from social networking sites, such as Facebook, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. This application uses Facebook Login for authentication.
            </li>
             <li>
              <strong>WhatsApp Message Data:</strong> We access and store messages from your connected WhatsApp account to provide our CRM services. This data is handled securely and is only used to deliver the features of the app.
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Provide you with customer support.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.
            </li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            yaswanthprof2005@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
