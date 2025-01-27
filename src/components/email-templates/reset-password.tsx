import * as React from 'react';


interface ResetPasswordEmailProps {
  userFirstName: string;
  resetLink: string;
}


export const ResetPasswordEmail: React.FC<Readonly<ResetPasswordEmailProps>> = ({
  userFirstName,
  resetLink,
}) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f9fafb',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  }}>
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{
        color: '#111827',
        fontSize: '24px',
        marginBottom: '16px',
      }}>Password Reset Request</h1>
      <p style={{ color: '#374151', marginBottom: '8px' }}>Hello {userFirstName},</p>
      <p style={{ color: '#374151', marginBottom: '16px' }}>
        We received a request to reset your password. Click the link below to reset it:
      </p>
      <a
        href={resetLink}
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        Reset Password
      </a>
      <p style={{
        color: '#6b7280',
        fontSize: '14px',
        marginTop: '24px',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '16px',
      }}>
        If you didn&apos;t request this, please ignore this email. The link will expire in 1 hour.
      </p>
    </div>
  </div>
);
