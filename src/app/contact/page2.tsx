"use client"
import { SetStateAction, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: Array<{ message: string }>;
}

function ContactPage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const resetForm = () => {
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully!' 
        });
        resetForm();
      } else {
        setStatus({ 
          type: 'error', 
          message: data.details?.[0]?.message || data.error || 'Failed to send message' 
        });
      }
    } catch {
      // Error handling removed as per instructions
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-16 min-h-screen bg-bc">
      <Card className="w-full max-w-2xl shadow-2xl bg-cc">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-h1">
            Get in Touch <FaEnvelope className="inline-block ml-2" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-bc text-dm border-hm focus:border-h2 focus:ring-h2"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="bg-bc text-dm border-hm focus:border-h2 focus:ring-h2"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setMessage(e.target.value)}
                required
                className="bg-bc text-dm border-hm focus:border-h2 focus:ring-h2 min-h-[150px]"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full font-semibold transition-colors duration-300 bg-h2 hover:bg-h1 text-bc"
            >
              Send Message
            </Button>
          </form>

          {status.message && (
            <p className={`mt-4 text-center font-medium ${
              status.type === 'success' ? 'text-green-500' : 
              status.type === 'error' ? 'text-red-500' : 
              'text-blue-500'
            }`}>
              {status.message}
            </p>
          )}

          <div className="flex flex-col items-center mt-8 space-y-6">
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors duration-300 text-h2 hover:text-h1"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors duration-300 text-h2 hover:text-h1"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </div>

            <Button 
              asChild
              className="font-semibold transition-colors duration-300 bg-h2 hover:bg-h1 text-bc"
            >
              <a href="/path/to/your/cv.pdf" download>
                <FaFileDownload className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactPage;
