module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react-hooks",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    "import/resolver": {
      node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "react": {
        version: "detect",
    },
  }
};
