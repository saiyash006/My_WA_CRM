import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion Instructions',
};

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert mx-auto">
          <h1>Data Deletion Instructions</h1>

          <p>
            <strong>Last Updated:</strong> May 31, 2026
          </p>

          <p>
            We respect your right to privacy and control over your data. This page provides instructions on how to request the deletion of your data from our service.
          </p>

          <h2>How to Request Data Deletion</h2>
          <p>
            You can remove your data by following either of the two methods below.
          </p>

          <h3>Method 1: Remove the App from Facebook</h3>
          <p>
            This is the fastest way to have your data removed. By removing the app from your Facebook account, your data will be automatically scheduled for deletion from our systems.
          </p>
          <ol>
            <li>
              Go to your Facebook profile's{' '}
              <a
                href="https://www.facebook.com/settings/?tab=applications"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apps and Websites settings
              </a>
              .
            </li>
            <li>
              Find "astrology" in your list of active apps.
            </li>
            <li>Click the "Remove" button next to it.</li>
          </ol>

          <h3>Method 2: Request Deletion via Email</h3>
          <p>
            If you prefer, you can request deletion by sending us an email.
          </p>
          <ol>
            <li>
              Send an email to{' '}
              <a href="mailto:yaswanthprof2005@gmail.com">
                yaswanthprof2005@gmail.com
              </a>{' '}
              from the email address associated with your account.
            </li>
            <li>
              Use the subject line: "Data Deletion Request".
            </li>
            <li>
              In the body of the email, please include your full name and state that you wish to delete your account and all associated data.
            </li>
          </ol>

          <h2>What Happens Next</h2>
          <p>
            Once we receive your request, we will verify your identity and then proceed with deleting your data from our systems. This process may take up to 30 days. We will notify you by email once the deletion is complete.
          </p>
          <p>
            Please note that some data may be retained for legal or security purposes, as outlined in our Privacy Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about the data deletion process, please contact us at:
            <br />
            yaswanthprof2005@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
