import { Resend } from 'resend';
import { ResetPasswordEmail } from '@/components/email-templates/reset-password';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Find user
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!user) {
      return NextResponse.json(
        { error: 'No user found with this email' },
        { status: 404 }
      );
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Store reset token in database
    await db
      .update(users)
      .set({
        resetToken,
        resetTokenExpiry: resetTokenExpiry.toISOString(),
      })
      .where(eq(users.id, user.id));

    // Generate reset link
    const resetLink = ${process.env.NEXTAUTH_URL="http://localhost:3000"}/reset-password/${resetToken};

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Your App <noreply@yourdomain.com>',
      to: [email],
      subject: 'Reset Your Password',
      react: ResetPasswordEmail({
        userFirstName: user.firstName,
        resetLink,
      }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Password reset email sent successfully',
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'Failed to send reset password email' },
      { status: 500 }
    );
  }
} 