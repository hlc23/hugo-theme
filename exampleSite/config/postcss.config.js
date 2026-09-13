const path = require("path");

module.exports = {
  plugins: [
    require("tailwindcss")(path.join(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [require("cssnano")({ preset: "default" })]
      : []),
  ],
};
