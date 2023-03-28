/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0C29",
        secondary: "#d31027",
        whiteBlue: "#302b63",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
