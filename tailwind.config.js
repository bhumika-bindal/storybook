/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cartoon: ["Comic Sans MS", "cursive"], // playful cartoon font
      },
      colors: {
        primary: "#FF6F61",   // coral
        secondary: "#FFD93D", // yellow
        accent: "#6BCB77",    // green
      },
    },
  },
  plugins: [],
}
