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
        h1: "#FFF9F5", // Main Title Color - Softer warm white for better contrast
        h2: "#FF7D3C", // S// Section Titles - Electric mint
        hm: "#7C76F7", // Sub-headings - Bright purple
        dm: "#D1D5F5", // Description Text - Soft cool white
        bc: "#0A0C14", // Background Color - Deep space black
        cc: "#151823", // Card color - Rich charcoal
        cg: "#FF7D3C", // Card glow color
        hcf: "#FF7D3C", // Hover Card Glow Color
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
// colors: {
//       h1: "#FFF9F5", // Main Title Color - Softer warm white for better contrast
//       h2: "#FF7D3C", // S// Section Titles - Electric mint
//       hm: "#7C76F7", // Sub-headings - Bright purple
//       dm: "#D1D5F5", // Description Text - Soft cool white
//       bc: "#0A0C14", // Background Color - Deep space black
//       cc: "#151823", // Card color - Rich charcoal
//       cg: "#FF7D3C", // Card glow color
//       hcf: "#FF7D3C", // Hover Card Glow Color
//     },
