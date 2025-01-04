import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaKaggle } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Anshulsharmacodes",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/Anshulsharma-8386ansh",
      label: "LinkedIn",
    },
    {
      icon: FaMedium,
      href: "https://medium.com/@anshulsharmacodes",
      label: "Medium",
    },
    {
      icon: FaKaggle,
      href: "https://www.kaggle.com/anshulsharmacodes",
      label: "Kaggle",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative z-10 py-12 border-t backdrop-blur-sm bg-bc/50 border-h1/10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo */}
         

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-6 justify-center md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 text-dm hover:text-h1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center mb-8 space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-200 bg-h1/10 text-h1 hover:bg-h1/20"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-dm/60">
            <p>
              © {currentYear} Anshul Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;