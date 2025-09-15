const config = {
  trailingComma: "none",
  plugins: ["prettier-plugin-toml", "prettier-plugin-go-template"],
  proseWrap: "always",
  overrides: [
    {
      files: ["*.svg", "*.xml"],
      options: {
        parser: "html"
      }
    },
    {
      files: ["*.html"],
      options: {
        parser: "go-template"
      }
    }
  ]
};

module.exports = config;
