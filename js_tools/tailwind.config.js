const colors = require("material-ui-colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../*.html",
    "../*.md",
    "../_layouts/*.html",
    "../_layouts/*.md",
  ],
  theme: {
    extend: {
      colors: { ...colors }
    },
    fontFamily: {
      sans: ["Itim", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
