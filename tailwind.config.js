const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      main: {
        500: "#243C7A",
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { min: "1025px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
