/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/*.vue", "./src/components/*.{vue,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
