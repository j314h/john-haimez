module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'xo-react', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    '*.json',
    '*.css',
    '.eslintrc.cjs',
    'craco.config.js',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: 0,
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': [
      0,
      { selfClosing: 'props-aligned', nonEmpty: 'after-props' },
    ],
  },
};
