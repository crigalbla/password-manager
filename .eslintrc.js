module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
  ],
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
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'linebreak-style': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'no-promise-executor-return': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/alt-text': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': 0,
    'max-len': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-unused-vars': 1,
  },
};
