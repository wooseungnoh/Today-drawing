module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-unescaped-entities': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak':0
  },
};
