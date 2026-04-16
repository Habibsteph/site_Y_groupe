import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("API KEY:", process.env.RESEND_API_KEY);
    console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);

    const body = await req.json();

    const name = body.name?.trim();
    const company = body.company?.trim() || "Non renseignée";
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Merci de remplir les champs obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { error: "CONTACT_TO_EMAIL est manquant." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [to],
      subject: `Nouveau message depuis le site Y Groupe — ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouveau message depuis le site Y Groupe</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Entreprise :</strong> ${company}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    console.log("RESEND DATA:", data);
    console.error("RESEND ERROR:", error);

    if (error) {
      return NextResponse.json(
        { error: "Impossible d’envoyer le message pour le moment." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}