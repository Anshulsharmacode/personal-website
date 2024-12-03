"use client"
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Email validation
    if (!email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create a transporter object using SMTP transport (Example using Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use another service if required (e.g., Outlook, SendGrid)
      auth: {
        user: process.env.EMAIL_USER,  // Use environment variables for sensitive data
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,          // Sender's email address
      to: process.env.EMAIL_USER,  // Recipient's email address
      subject: subject,     // Subject of the email
      text: message,        // Body of the email
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
