"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaMedium,
  
  FaPhone, // Importing the phone icon
} from "react-icons/fa6";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "yogendramanawat@gmail.com",
    link: "mailto:yogendramanawat@gmail.com",
  },
  {
    icon: FaEnvelope,
    label: "Coursefy Email",
    value: "yogendra@coursefy.online",
    link: "mailto:yogendra@coursefy.online",
  },
  {
    icon: FaPhone, // Adding phone icon
    label: "Phone",
    value: "7489989634",
    link: "tel:7489989634", // Link for dialing the number
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Anshulsharmacode",
    link: "https://github.com/Anshulsharmacode", // Updated link
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "@anshul-sharma-8386ansh",
    link: "https://linkedin.com/in/anshul-sharma-8386ansh", // Updated link
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    value: "@yogendramanawat",
    link: "https://twitter.com/Anshulsh8386",
  },
  {
    icon: FaMedium,
    label: "Medium",
    value: "@anshulsharma8386",
    link: "https://medium.com/@anshulsharma8386", // Updated link
  },
];

const ContactPage: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-16 min-h-screen">
      <div className="w-full max-w-3xl text-center">
        <h1 className="mb-8 text-4xl font-bold font-raleway">Get in Touch</h1>
        <p className="mb-12 text-l font-montserrat">
          Welcome to my contact page! I&apos;m open to professional inquiries
          and collaborations. Please include a proper introduction and purpose
          in your message. Note: Messages without clear context may not receive
          a response. I look forward to meaningful connections!
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactItems.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  link,
}) => {
  return (
    <a
      href={link}
      className="flex items-center p-4 space-x-4 rounded-lg transition-colors hover:bg-gray-100 group"
    >
      <Icon className="text-2xl text-gray-600 group-hover:text-black" />
      <div className="flex-1 text-left">
        <div className="font-bold group-hover:text-black">{label}</div>
        <div className="text-blue-500 group-hover:text-black">{value}</div>
      </div>
    </a>
  );
};

export default ContactPage;