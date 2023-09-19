// const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: "#18181b",
        customGreen: "#009688",
        customOrange: "#FF5722",
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        serif: ["Inter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
