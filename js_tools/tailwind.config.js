const colors = require("material-ui-colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../*.html",
    "../*.md",
    "../**/*.html",
    "../**/*.md",
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
