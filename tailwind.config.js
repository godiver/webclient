module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      main: {
        500: "#243C7A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
