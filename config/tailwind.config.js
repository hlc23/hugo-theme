const path = require("path");

// When a site vendors this theme, point baseDir at the *site* root so
// Tailwind also scans the site's own layouts/content for used classes.
const baseDir = path.join(__dirname, "..");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `${baseDir}/themes/**/layouts/**/*.html`,
    `${baseDir}/layouts/**/*.html`,
    `${baseDir}/content/**/*.html`,
    `${baseDir}/content/**/*.md`,
    `${baseDir}/exampleSite/content/**/*.md`,
    `${baseDir}/exampleSite/layouts/**/*.html`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Huninn"',
          '"Inter"',
          '"Noto Sans TC"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Consolas", '"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
};
