const colors = require("material-ui-colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../*.html",
    "../*.md",
    "../_layouts/**/*.html",
    "../_layouts/**/*.md",
    "../_tabs/**/*.html",
    "../_tabs/**/*.md",
  ],
  theme: {
    extend: {
      colors: { ...colors }
    },
    fontFamily: {
      sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Modern Antiqua", ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
