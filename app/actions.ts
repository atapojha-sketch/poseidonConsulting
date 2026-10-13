"use server";

import { SITE } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handles the enquiry form. Sends via the Resend HTTP API when configured:
 *
 *   RESEND_API_KEY     — API key from the Resend dashboard
 *   ENQUIRY_FROM_EMAIL — a "from" address on a domain verified with Resend
 *   ENQUIRY_TO_EMAIL   — optional override of the default recipient
 *
 * Until those are set, submissions are logged server-side and the visitor is
 * told plainly that online enquiries aren't switched on yet — with phone and
 * email fallbacks — rather than a false "message sent".
 */
/**
 * Handles consultation booking requests from /book. Same Resend-backed
 * delivery and honest fallback as submitEnquiry; the chosen slot is a
 * request until confirmed by email, and the copy on /book says so.
 */
export async function submitBooking(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  if (formData.get("website")) {
    return { status: "success", message: "Thanks. We'll confirm your time by email." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const slot = String(formData.get("slot") ?? "").trim();

  if (!slot) {
    return { status: "error", message: "Please pick a date and time first." };
  }
  if (!name || !email) {
    return { status: "error", message: "Please fill in your name and email." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email address doesn't look right. Please check it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || SITE.email;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

  const body = [
    `Requested slot: ${slot} (AEST)`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    notes && `\nNotes:\n${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey || !fromEmail) {
    console.warn("[booking] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set — booking not emailed:", body);
    return {
      status: "error",
      message: `Online booking isn't switched on yet. Please call ${SITE.phoneDisplay} or email ${SITE.email} to book.`,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Consultation booking request — ${slot} — ${name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("[booking] Resend API error", res.status, await res.text());
      return {
        status: "error",
        message: `Something went wrong sending your booking. Please call ${SITE.phoneDisplay} instead.`,
      };
    }

    return {
      status: "success",
      message: `Request received for ${slot} AEST. We'll confirm your time by email.`,
    };
  } catch (err) {
    console.error("[booking] failed to send", err);
    return {
      status: "error",
      message: `Something went wrong sending your booking. Please call ${SITE.phoneDisplay} instead.`,
    };
  }
}

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Honeypot: a real visitor never fills this hidden field in.
  if (formData.get("website")) {
    return { status: "success", message: "Thanks. We'll be in touch within two working days." };
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const interests = formData.getAll("interests").map(String);

  if (!firstName || !lastName || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email and a few words about your project.",
    };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "That email address doesn't look right. Please check it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || SITE.email;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;

  const body = [
    `Name: ${firstName} ${lastName}`,
    company && `Company: ${company}`,
    phone && `Phone: ${phone}`,
    `Email: ${email}`,
    interests.length > 0 && `Interested in: ${interests.join("; ")}`,
    "",
    "Project:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey || !fromEmail) {
    console.warn("[enquiry] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set — enquiry not emailed:", body);
    return {
      status: "error",
      message: `Online enquiries aren't switched on yet. Please call ${SITE.phoneDisplay} or email ${SITE.email} directly.`,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New enquiry from ${firstName} ${lastName} via ${SITE.name} website`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("[enquiry] Resend API error", res.status, await res.text());
      return {
        status: "error",
        message: `Something went wrong sending your enquiry. Please call ${SITE.phoneDisplay} instead.`,
      };
    }

    return {
      status: "success",
      message: "Thanks. Your enquiry is on its way — we'll contact you within two working days.",
    };
  } catch (err) {
    console.error("[enquiry] failed to send", err);
    return {
      status: "error",
      message: `Something went wrong sending your enquiry. Please call ${SITE.phoneDisplay} instead.`,
    };
  }
}
