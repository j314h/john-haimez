module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'xo-react', 'xo-typescript', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    overrides: [
      {
        files: '*.json',
        quotes: 'double',
      },
    ],
  },
};
