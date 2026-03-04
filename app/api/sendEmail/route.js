import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configura il transporter con Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gerardonastri.dev@gmail.com", // la tua email Gmail
        pass: process.env.GMAIL_PASS, // password per app
      },
    });

    // Crea l’email
    await transporter.sendMail({
      from: "gerardonastri.dev@gmail.com",
      to: "gerardonastri.dev@gmail.com", // la ricevi tu, puoi anche aggiungere più destinatari
      subject: `Nuovo messaggio dal portfolio da ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Messaggio: ${message}
      `,
    });

    return NextResponse.json({ success: true, message: "Email inviata!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Errore invio email" }, { status: 500 });
  }
}
