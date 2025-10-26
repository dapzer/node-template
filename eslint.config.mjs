import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: false,
  stylistic: {
    indent: 2,
    quotes: "double",
  },
  typescript: {
    overrides: {
      "no-console": "warn",
      "new-cap": "warn",
      "unused-imports/no-unused-vars": "warn",
      "no-async-promise-executor": "warn",
    },
  },
  test: {
    overrides: {
      "test/no-import-node-test": "off",
    },
  },
})
