"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaMedium,
  FaPhone,
} from "react-icons/fa6";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "anshulsharma8386@gmail.com",
    link: "mailto:anshulsharma8386@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "7489989634",
    link: "tel:7489989634",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Anshulsharmacode",
    link: "https://github.com/Anshulsharmacode",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "@anshul-sharma-8386ansh",
    link: "https://linkedin.com/in/anshul-sharma-8386ansh",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    value: "@Anshulsh8386",
    link: "https://twitter.com/Anshulsh8386",
  },
  {
    icon: FaMedium,
    label: "Medium",
    value: "@anshulsharma8386",
    link: "https://medium.com/@anshulsharma8386",
  },
];

const ContactPage: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-16 min-h-screen pt-32">
      <div className="w-full max-w-3xl text-center">
        <h1 className="mb-8 text-4xl text-h1 font-bold font-raleway">
          Be <span className="text-h2">in Touch</span>
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-6 space-y-4 rounded-lg 
        transition-all duration-300 
        hover:scale-105
        group relative
        bg-background
        border border-transparent
        hover:border-cg
        hover:shadow-[0_0_15px_rgba(var(--hcf-rgb),0.3)]
        hover:bg-gradient-to-br from-hcf/5 to-hcf/5"
    >
      <Icon className="text-4xl text-h2 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(var(--h2-rgb),0.5)]" />
      <div className="text-center">
        <div className="font-bold text-h1/90 mb-1">{label}</div>
        <div className="text-h2 text-sm">{value}</div>
      </div>
    </a>
  );
};

export default ContactPage;
