const config = {
  trailingComma: "none",
  proseWrap: "always",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.svg", "*.xml"],
      options: {
        parser: "html"
      }
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro"
      }
    }
  ]
};

export default config;
