module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "xo",
    "xo-react",
    "xo-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:react-hooks/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "default", format: ["PascalCase", "camelCase"] },
      {
        selector: "property",
        format: ["PascalCase", "camelCase", "snake_case"],
      },

      //Ignore destructured names
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
