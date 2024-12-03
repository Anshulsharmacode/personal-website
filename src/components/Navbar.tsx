import React from "react";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { Button } from "@/components/ui/button"; // ShadCN Button Component
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ShadCN Sheet Component for mobile menu

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/project" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
          Anshul
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline">Download CV</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="outline" className="w-full">
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
