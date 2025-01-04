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

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: <FaHome className="w-4 h-4" /> },
    { label: "About", href: "/about", icon: <FaUser className="w-4 h-4" /> },
    {
      label: "Projects",
      href: "/project", // Corrected href to match the intended route
      icon: <FaProjectDiagram className="w-4 h-4" />,
    },
    { label: "Blogs", href: "/blog", icon: <FaBlog className="w-4 h-4" /> },
    {
      label: "Contact",
      href: "/contact",
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 z-10 w-full backdrop-blur-sm bg-bc/20 font-raleway`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl bg-clip-text bg-gradient-to-r transition-all duration-300 ext-transparent d font-dancing-script from-h1 via-h2 to-hm hover:opacity-80"
          >
            Anshul
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex gap-2 items-center font-medium transition-all duration-200 text-dm hover:text-h1 hover:scale-105"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="transition-all duration-300 border-h1/50 text-dm hover:bg-h1/10 hover:text-h1 hover:border-h1 hover:scale-105"
            >
              <FaFileDownload className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-all duration-200 text-dm hover:bg-h1/10 hover:text-h1"
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
                      className="flex gap-3 items-center text-lg font-medium transition-all duration-200 text-dm hover:text-h1 hover:translate-x-2"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 border-h1/50 text-dm hover:bg-h1/10 hover:text-h1 hover:border-h1"
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
