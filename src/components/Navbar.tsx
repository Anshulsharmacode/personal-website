"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaFileDownload,
  FaBars,
} from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import { usePathname } from "next/navigation";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: <FaHome className="w-4 h-4" /> },
    { label: "About", href: "/about", icon: <FaUser className="w-4 h-4" /> },
    {
      label: "Projects",
      href: "/project",
      icon: <FaProjectDiagram className="w-4 h-4" />,
    },
    { label: "Blogs", href: "/blog", icon: <FaBlog className="w-4 h-4" /> },
    {
      label: "Contact",
      href: "/contact",
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1UTEeYITEupaGHHtLshtvXBWQhw0d1KG3/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 z-10 w-full backdrop-blur-sm bg-bc/20 font-raleway`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`${dancingScript.className} text-3xl font-bold bg-gradient-to-r from-h1 via-h2 to-h1 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 hover:from-h2 hover:via-h1 hover:to-h2`}
          >
            Anshul
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex gap-2 items-center font-medium transition-all duration-200 ${
                  pathname === item.href ? "text-h2" : "text-dm hover:text-h1"
                } hover:scale-105`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              onClick={handleDownloadCV}
              className="transition-all duration-300 border-h1/50 text-dm hover:bg-gradient-to-br hover:from-hcf/5 hover:to-hcf/5 hover:text-h1 hover:border-cg hover:scale-105"
            >
              <FaFileDownload className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-all text-dm hover:bg-h1/10 hover:text-h1"
                >
                  <FaBars className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b backdrop-blur-xl from-bc/98 to-bc/95 border-h1/10">
                <div className="flex flex-col mt-12 space-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex gap-3 items-center text-lg font-medium transition-all duration-150 ${
                        pathname === item.href
                          ? "text-h2"
                          : "text-dm hover:text-h1"
                      } hover:translate-x-2`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleLinkClick();
                      handleDownloadCV();
                    }}
                    className="w-full transition-all duration-100 border-h1/50 text-dm hover:bg-gradient-to-br hover:from-hcf/5 hover:to-hcf/5 hover:text-h1 hover:border-cg"
                  >
                    <FaFileDownload className="mr-2 w-4 h-4" />
                    Download CV
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
