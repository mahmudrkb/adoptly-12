const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
});
