/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        h1: "#F8FAFC", // Main Title Color (h1) - Light color for contrast against dark bg
        h2: "#60A5FA", // Section Titles (h2) - Bright blue that works on dark bg
        hm: "#E2E8F0", // Sub-headings & Skill Titles (hm) - Light gray for dark bg
        dm: "#CBD5E1", // Description Text (dm) - Medium gray for readability on dark
        bc: "#020617", // Background Color (bc) - Very dark blue/black
        cc: "#1E293B", // Card color - Dark slate for contrast against background
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
