const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,ts,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        abc: "url('/abc.png')",
      }),
    },
    colors: {
      ...colors,
      blue: "#264653",
      green: "#2A9D8F",
      yellow: "#E9C46A",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
