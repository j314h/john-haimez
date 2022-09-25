module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['*.json', '*.css'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 0,
    'space-before-function-paren': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
  },
}
