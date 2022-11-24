/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('/src/assets/heroWatch.jpg')",
      },
    },
  },
  plugins: [],
};
