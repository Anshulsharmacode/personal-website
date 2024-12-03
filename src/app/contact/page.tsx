// pages/contact.js
"use client"
import { useState } from 'react';

function ContactPage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email. Try again later.');
      }
    } catch (error) {
      setStatus('Error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactPage;
