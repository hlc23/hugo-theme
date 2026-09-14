const path = require("path");

const siteRoot = path.join(__dirname, "..");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `${siteRoot}/themes/**/layouts/**/*.html`,
    `${siteRoot}/content/**/*.md`,
    `${siteRoot}/layouts/**/*.html`,
  ],
  safelist: ["highlight"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Huninn"', '"Inter"', '"Noto Sans TC"', "-apple-system", "sans-serif"],
        mono: ["Consolas", '"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
};
