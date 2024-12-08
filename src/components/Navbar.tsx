"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaHome, FaUser, FaProjectDiagram, FaBlog, FaEnvelope, FaFileDownload, FaBars } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#", icon: <FaHome className="h-4 w-4" /> },
    { label: "About", href: "/about", icon: <FaUser className="h-4 w-4" /> },
    { label: "Projects", href: "/project", icon: <FaProjectDiagram className="h-4 w-4" /> },
    { label: "Blogs", href: "/blog", icon: <FaBlog className="h-4 w-4" /> },
    { label: "Contact", href: "/contact", icon: <FaEnvelope className="h-4 w-4" /> },
  ];

  return (
    <nav className="bg-bc/80 backdrop-blur-lg border-b border-h1/20 fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-h1 via-h2 to-hm text-transparent bg-clip-text hover:opacity-80 transition-opacity">
          Anshul
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-dm hover:text-h1 transition-colors duration-200"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="border-h1 text-dm hover:bg-h1/20 hover:text-h1 transition-all duration-200"
          >
            <FaFileDownload className="mr-2 h-4 w-4" />
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
                className="text-dm hover:bg-h1/20 hover:text-h1"
              >
                <FaBars className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-bc/95 backdrop-blur-lg border-h1/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-dm hover:text-h1 transition-colors duration-200"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full border-h1 text-dm hover:bg-h1/20 hover:text-h1 transition-all duration-200"
                >
                  <FaFileDownload className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
