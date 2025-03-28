/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3428",
        secondary: "#8B4513",
        accent: "#D2691E",
      },
    },
  },
  plugins: [],
}