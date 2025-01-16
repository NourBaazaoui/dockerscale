import * as React from 'react';

interface ResetPasswordEmailProps {
  userFirstName: string;
  resetLink: string;
}

export const ResetPasswordEmail: React.FC<Readonly<ResetPasswordEmailProps>> = ({
  userFirstName,
  resetLink,
}) => (
  <div>
    <h1>Password Reset Request</h1>
    <p>Hello {userFirstName},</p>
    <p>We received a request to reset your password. Click the link below to reset it:</p>
    <a href={resetLink} style={{ 
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#3b82f6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      marginTop: '15px'
    }}>
      Reset Password
    </a>
    <p style={{ marginTop: '20px' }}>
      If you didnt request this, please ignore this email.
    </p>
  </div>
); 