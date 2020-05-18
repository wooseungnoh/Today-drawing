module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'prettier/react',
    'react-hooks/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks':'error',
    "react-hooks/exhaustive-deps": "warn",
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-unescaped-entities': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'jsx-curly-brace-presence': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
