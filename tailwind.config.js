/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        building: "/Building.svg",
      },
      fontFamily: {
        Madani: "var(--font-madani)",
        Noto_Kufi_Arabic: "var(--font-noto-kufi)",
      },
    },
  },
  plugins: [],
};
