import { ContactFormData } from './validation';
import nodemailer from 'nodemailer'; // Import nodemailer

// Email HTML template
const createEmailHTML = (data: ContactFormData) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
    <h2 style="color: #333;">New Contact Form Submission</h2>
    <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
      <p><strong>From:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <div style="margin-top: 20px;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
    </div>
    <p style="color: #666; font-size: 12px;">This email was sent from your website's contact form.</p>
  </div>
`;

// Create email transporter
const createTransporter = () => {
  if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email configuration is missing');
  }

  return nodemailer.createTransport({ // Use nodemailer to create transport
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send email function
export async function sendEmail(data: ContactFormData) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      replyTo: data.email,
      subject: `Website Contact: ${data.subject}`,
      text: `From: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`,
      html: createEmailHTML(data),
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}