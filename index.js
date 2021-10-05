module.exports = {
  parserOptions: {
    sourceType: "module"
  },
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "prefer-const": "warn",
    "no-alert": "error",
    "no-else-return": "warn",
    "no-fallthrough": ["error", { commentPattern: "break[\\s\\w]*omitted" }],
    "no-use-before-define": ["error", { variables: true }],
    "prefer-template": "warn"
  },
  ignorePatterns: [
    "node_modules/**",
    "dist/**",
    ".next/**",
    "out/**",
    "build/**"
  ]
};
