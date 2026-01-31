/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash-display)"],
        chakra: ["var(--font-chakra)"],
        ibm: ["var(--font-ibm)"],
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        soothing_black: "#050510", // Deep Space Black
        main_primary: "#00F0FF",   // Electric Cyan
        primary: "#020617",        // Midnight Blue
        gray: "#94a3b8",           // Slate Gray
        footer: "#0f172a",         // Slate 900
      },
      screens: {
        sm: "496px",
        md: "712px",
        lg: "900px",
        xl: "1142px",
        '2xl': "1536px",
      },
      boxShadow: {
        '3xl': '0 0px 5px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
