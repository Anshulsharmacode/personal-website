import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const username = process.env.EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: username,
        pass: password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const formData = await request.json();
    // const name = formData.get('name')
    const email = formData.email;
    const message = formData.message;
    const subject = formData.subject;

    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: subject,
      html: `
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Success: msg was sent" });
}
