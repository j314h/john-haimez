/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        styling: ['Rubik Distressed', 'cursive'],
      },
      colors: {
        fond_claire: '#F5F5F5',
        fond2_claire: '#ffffff',
        fond_dark: '#141414',
        fond2_dark: '#000000',
        high: '#F54B02',
        action: '#19A7FF',
        'action-hover': '#0096F3',
        'action-bg-hover': '#DDDDDD',
        'action-bg-dark-hover': '#2F2F2F',
        warning: '#FFB300',
        error: '#DF0000',

        // divisor
        'divisor-bg': '#848484',

        // input
        'input-bg': '#F5F5F5',
        'input-dark-bg': '#141414',
        'input-border-focus': '#70C3FF',
        'input-color-text': '#000000',
        'input-dark-color-text': '#ffffff',
        'input-icon-color': '#F54B02',
        'input-icon-dark-color': '#F54B02',
        'btn-reset-input-color': '#000000',
        'btn-reset-input-dark-color': '#ffffff',
        'btn-reset-input-hover-color': '#EB0000',
        'btn-reset-input-hover-dark-color': '#EB0000',
      },
      fontSize: {
        // input
        'input-size-text': '1rem',
      },
    },
  },
  plugins: [require('daisyui')],
}
