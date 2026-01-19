module.exports = {
  trailingComma: "none",
  plugins: ["prettier-plugin-go-template", "prettier-plugin-tailwindcss"],
  proseWrap: "always",

  overrides: [
    {
      files: ["*.svg", "*.xml"],
      options: { parser: "html" }
    },
    {
      files: ["*.html"],
      options: { parser: "go-template" }
    }
  ]
};
