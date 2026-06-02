import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "your@email.com";

  if (!RESEND_API_KEY) {
    console.log("No RESEND_API_KEY — form submission received:", data.name);
    return NextResponse.json({ success: true });
  }

  const html = buildEmail(data);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Velvet Concierge Care <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: data.email,
      subject: `New Consultation Request — ${data.name}`,
      html,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  }

  const err = await res.text();
  console.error("Resend error:", err);
  return NextResponse.json({ success: false }, { status: 500 });
}

function row(label: string, value: string) {
  if (!value?.trim()) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8d9c0;vertical-align:top;">
        <span style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.14em;color:#9E7A35;font-family:Arial,sans-serif;">${label}</span>
      </td>
      <td style="padding:10px 0 10px 24px;border-bottom:1px solid #e8d9c0;color:#1a1610;font-size:0.95rem;line-height:1.7;">
        ${value.replace(/\n/g, "<br>")}
      </td>
    </tr>`;
}

function section(title: string, rows: string) {
  if (!rows.trim()) return "";
  return `
    <h2 style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.2em;color:#9E7A35;margin:32px 0 4px;font-family:Arial,sans-serif;">${title}</h2>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>`;
}

function buildEmail(d: Record<string, string | string[]>) {
  const s = (v: unknown) => (Array.isArray(v) ? v.join(", ") : String(v ?? ""));

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f0e4d0;">
<div style="max-width:620px;margin:0 auto;background:#faf5ec;font-family:Georgia,serif;">

  <div style="background:#1a1610;padding:32px 36px;">
    <p style="color:#9E7A35;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.22em;margin:0 0 8px;font-family:Arial,sans-serif;">New Consultation Request</p>
    <h1 style="color:#faf5ec;font-size:1.6rem;margin:0;font-weight:400;">Velvet Concierge Care</h1>
  </div>

  <div style="padding:36px;">

    <p style="color:#7a6e60;font-size:0.9rem;line-height:1.8;margin:0 0 28px;font-family:Arial,sans-serif;">
      A family has submitted a consultation request. All information is below.
    </p>

    ${section("Contact Information", `
      ${row("Name", s(d.name))}
      ${row("Phone", s(d.phone))}
      ${row("Email", s(d.email))}
    `)}

    ${section("About Their Loved One", `
      ${row("Age", s(d.lovedOneAge))}
      ${row("Living Situation", s(d.livingSituation))}
      ${row("Diagnoses & Health Concerns", s(d.diagnoses))}
      ${row("Recent Hospitalizations", s(d.recentHospitalization))}
    `)}

    ${section("Their Current Situation", `
      ${row("Current Support System", s(d.supportSystem))}
      ${row("Biggest Challenge", s(d.biggestChallenge))}
      ${row("What Prompted Reaching Out", s(d.whatPrompted))}
      ${row("Situations Selected", s(d.situations))}
    `)}

    ${section("Their Goals", `
      ${row("Biggest Concerns", s(d.biggestConcerns))}
      ${row("What Success Looks Like", s(d.successLooksLike))}
      ${row("Anything Else", s(d.anythingElse))}
    `)}

    <div style="margin-top:36px;padding:24px;background:#1a1610;">
      <p style="color:#9E7A35;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.16em;margin:0 0 6px;font-family:Arial,sans-serif;">Next Step</p>
      <p style="color:rgba(255,255,255,0.7);font-size:0.88rem;margin:0;font-family:Arial,sans-serif;">
        Reply directly to this email to reach ${s(d.name)} at ${s(d.email)}, or call ${s(d.phone)}.
      </p>
    </div>

  </div>
</div>
</body>
</html>`;
}
