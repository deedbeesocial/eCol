/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#f7f7f7",
        darkgray: "#1f242c",
        blue: "#2d6c00",
        orange1: "#f89202",
        green: "#57b33e",
        orange: "#ffb511",
        coustom1: "#f7f5f0",
      },
      screens: {
        "3xl": "104 0px",
      },
    },
  },
  plugins: [],
};
