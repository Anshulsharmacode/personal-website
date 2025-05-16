import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/fotter";
import { FaWhatsapp } from "react-icons/fa";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anshul Sharma | Portfolio",
  description: "Biomedical Engineer & AI Machine Learning Expert",
  keywords: ["Portfolio", "Biomedical Engineering", "AI", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-sans antialiased bg-bc min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        <a
          href="https://wa.me/917489989634"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>
      </body>
    </html>
  );
}
