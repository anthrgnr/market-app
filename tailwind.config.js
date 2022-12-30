/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/*.vue", "./src/components/*.{vue,ts,html}"],
  theme: {
    extend: {
      height: {
        '3/4screen': '75vh'
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
