/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        perfume_red: {
          light: "#9c191e",
          bg: "#f5f6f8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
