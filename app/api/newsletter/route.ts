import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/validation";

// Your dedicated email address for new subscriber notifications
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello.alraheemindustries@gmail.com";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY missing");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const email = String(body.email ?? "").trim();

    // Check basic email structure validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeEmail = escapeHtml(email);

    // Dynamic Environment Configuration Handler
    // Local development defaults to free testing sandbox; production setup expects verified domain.
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Al-Raheem Industries <onboarding@resend.dev>";
    const isSandboxMode = fromEmail.includes("onboarding@resend.dev");

    // ----------------------------------------------------------------
    // 1. ADMIN NOTIFICATION STREAM (Aapko Hamesha Alert Mil Jayega)
    // ----------------------------------------------------------------
    // We prioritize keeping you notified of new activity without triggering Resend blocking errors.
    const notificationResult = await resend.emails.send({
      from: isSandboxMode ? "Al-Raheem <onboarding@resend.dev>" : fromEmail,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `📢 New Newsletter Subscriber: ${safeEmail}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; font-size: 20px; margin: 0 0 12px 0;">New Subscription Received</h2>
          <p style="color: #475569; font-size: 14px; margin: 0 0 16px 0;">A user registered their address via the website footer newsletter module:</p>
          <div style="background-color: #f4f6ec; padding: 16px; border-radius: 8px; text-align: center;">
            <a href="mailto:${safeEmail}" style="color: #256428; font-size: 16px; font-weight: 700; text-decoration: none;">${safeEmail}</a>
          </div>
          <p style="color: #94a3b8; font-size: 11px; margin-top: 16px; text-align: center;">Al Raheem Industries Monitoring Bot</p>
        </div>
      `,
    });

    // ----------------------------------------------------------------
    // 2. PREMIUM WELCOME EMAIL STREAM (CLIENT DISPATCH)
    // ----------------------------------------------------------------
    // Smart Routing Logic: Welcome Email fires ONLY when verified domain is active to prevent sandbox 403 errors.
    if (!isSandboxMode) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: [email], // User input target
          subject: "Welcome to Al-Raheem Industries | Subscription Confirmed",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <div style="background-color: #256428; padding: 40px 32px; text-align: center;">
                <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: -0.02em;">AL RAHEEM INDUSTRIES</h1>
                <p style="color: #d1fae5; font-size: 13px; text-transform: uppercase; letter-spacing: 0.2em; margin: 8px 0 0 0; font-weight: 700;">Precision & Corporate Excellence</p>
              </div>
              <div style="padding: 32px; color: #334155;">
                <h2 style="color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">Thank You for Subscribing!</h2>
                <p style="font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px;">
                  We are pleased to confirm your subscription to the Al-Raheem Industries corporate network. Moving forward, you will receive priority access to our corporate documentation, advanced engineering catalogs, and exclusive announcements.
                </p>
                <div style="text-align: center; margin: 24px 0;">
                  <a href="https://alraheemindustries.com" style="display: inline-block; background-color: #256428; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 30px; font-weight: bold;">Visit Corporate Website</a>
                </div>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 24px;" />
                <p style="margin: 0; font-size: 13px; font-weight: 700; color: #0f172a;">Al-Raheem Operations Team</p>
              </div>
            </div>
          `,
        });
      } catch (welcomeMailError) {
        console.error("Welcome dispatch failure, notification still sent:", welcomeMailError);
        // We do not stop main execution flow if user welcome fails in production.
      }
    } else {
      console.log("⚠️ Resend Sandbox Mode Detected: Skip client Welcome Email stream to prevent blocking validation errors.");
    }

    if (notificationResult.error) {
      console.error("Resend Engine API Blocked:", notificationResult.error);
      return NextResponse.json({ error: "Email validation error." }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: notificationResult.data?.id });

  } catch (err: any) {
    console.error("Newsletter operation runtime catch:", err);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}