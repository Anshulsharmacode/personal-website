import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Text } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/fotter";



const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"], // Adjusted to match the expected type
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
        className={` ${crimsonText.variable} font-sans antialiased bg-bc min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
