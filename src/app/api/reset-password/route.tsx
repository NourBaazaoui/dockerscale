import { Resend } from "resend";
import { ResetPasswordEmail } from "@/components/email-templates/reset-password";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import crypto from "crypto";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  try { 
    const { email } = await req.json();


    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }


    // Find user
    const [user] = await db.select().from(users).where(eq(users.email, email));


    if (!user) {
      // For security reasons, we'll still return success even if user not found
      return NextResponse.json({
        message: "If an account exists with this email, you will receive password reset instructions.",
      });
    }


    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now


    // Store reset token in database
    await db
      .update(users)
      .set({
        resetToken,
        resetTokenExpiry,
      })
      .where(eq(users.id, user.id));


    // Generate reset link
    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/${resetToken}`;


    try {
      // Send email
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Use the verified domain from Resend
        to: [email],
        subject: "Reset Your Password",
        react: ResetPasswordEmail({
          userFirstName: user.firstName || 'User', // Fallback in case firstName is null
          resetLink,
        }) as React.ReactElement,
      });


      return NextResponse.json({
        message: "Password reset email sent successfully",
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "Failed to process reset password request" },
      { status: 500 }
    );
  }
}





