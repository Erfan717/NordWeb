import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "E-post er ikke konfigurert." },
        { status: 500 }
      );
    }

    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Fyll inn alle felter." },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM ?? "NordWeb <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO ?? "kontakt@nordweb.no";

    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2>Ny henvendelse via NordWeb</h2>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Melding:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Kunne ikke sende e-post akkurat nå." },
      { status: 500 }
    );
  }
}
