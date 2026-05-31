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
            To request the deletion of your account and all associated data, please follow these steps:
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
