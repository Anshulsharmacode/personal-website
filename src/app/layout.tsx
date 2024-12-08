import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});



const raleway = Raleway({
  subsets: ['latin'], 
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
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
        className={`${montserrat.variable}  ${raleway.variable} font-sans antialiased bg-bc min-h-screen`}
      >
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
