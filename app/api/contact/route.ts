import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, escapeHtml } from "@/lib/validation";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "xyz@gmail.com";
console.log(TO_EMAIL)

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    
    // Extracting all fields from the new contact form payload
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "Product Quotation").trim();
    const message = String(body.message ?? "").trim();

    // Base validation for required elements
    const { valid, errors } = validateContactForm({ name, email, message });
    if (!valid) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Al-Raheem Inquiry <onboarding@resend.dev>";

    // Escaping and sanitizing all input parameters
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "<em>Not Provided</em>";
    const safePhone = phone ? escapeHtml(phone) : "<em>Not Provided</em>";
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[${safeSubject}] Business Inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 16px;">
          <!-- Header Accent Banner -->
          <div style="margin-bottom: 24px;">
            <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #859728; background-color: #f4f6ec; padding: 6px 12px; border-radius: 20px;">
              Industrial Inquiry Portal
            </span>
            <h2 style="color: #0f172a; font-size: 24px; font-weight: 800; margin: 14px 0 6px 0; tracking-tight: -0.02em;">
              New Business Message Recieved
            </h2>
            <p style="color: #64748b; font-size: 14px; margin: 0;">You have received a new dynamic form routing via Al-Raheem contact desk.</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 24px;" />

          <!-- Meta Content Matrix -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 130px; font-weight: 600;">Full Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #256428; text-decoration: none; font-weight: 600;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600;">Company Group:</td>
              <td style="padding: 10px 0; color: #334155; font-size: 14px;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600;">Phone Number:</td>
              <td style="padding: 10px 0; color: #334155; font-size: 14px;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 600;">Inquiry Subject:</td>
              <td style="padding: 10px 0; color: #859728; font-size: 14px; font-weight: 700;">${safeSubject}</td>
            </tr>
          </table>

          <!-- Message Block Container -->
          <div style="background-color: #f8fafc; border: 1px solid #f1f5f9; padding: 24px; border-radius: 12px;">
            <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">
              Client Requirement Message:
            </p>
            <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-line;">
              ${safeMessage}
            </p>
          </div>

          <!-- Footer Metadata -->
          <div style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">
              This automated transmission is routed via Resend Engine for Al-Raheem website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}