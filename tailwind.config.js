/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C1FD33",
        secondary: "#ffffff60",
        black: "#111315",
      },
      backgroundColor: {
        primary: "#1020AE",
        secondary: "#4D5EF6",
      },
      fontFamily: {
        primary: ["Archivo", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
