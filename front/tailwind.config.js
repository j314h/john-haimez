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
        primary: '#F5F5F5',
        'primary-dark': '#141414',
        secondary: '#ffffff',
        'secondary-dark': '#000000',
        // tertiary: '#000000',
        // 'tertiary-dark': '#000000',
        action: '#19A7FF',
        'action-dark': '#19A7FF',
        'action-move': '#0096F3',
        // 'action-move-dark': '#000',
        // 'action-secondary': '#DDDDDD',
        // 'action-secondary-dark': '#2F2F2F',
        'action-move-secondary': '#DDDDDD',
        'action-move-secondary-dark': '#2F2F2F',
        high: '#F54B02',
        'high-dark': '#F54B02',
        'high-move': '#F54B02',
        'high-move-dark': '#F54B02',
        error: '#DF0000',
        'error-dark': '#DF0000',
        success: '#0BD600',
        'success-dark': '#0BD600',
        warning: '#FFB300',
        'warning-dark': '#FFB300',
        'divisor-bg': '#848484',
      },
      fontSize: {
        // input primary
        'input-primary-first': '1rem', // mobile
        'input-primary-second': '1rem', // tablette
        'input-primary-third': '1.1rem', // pc

        // btn primary
        'btn-primary-first': '1rem', // mobile
        'btn-primary-second': '1rem', // tablette
        'btn-primary-third': '1.2rem', // pc

        // btn text primary
        'btn-text-primary-first': '1rem', // mobile
        'btn-text-primary-second': '1rem', // tablette
        'btn-text-primary-third': '1rem', // pc

        // link text primary
        'link-text-primary-first': '1rem', // mobile
        'link-text-primary-second': '1rem', // tablette
        'link-text-primary-third': '1rem', // pc

        // link primary
        'link-primary-first': '1rem', // mobile
        'link-primary-second': '1rem', // tablette
        'link-primary-third': '1rem', // pc
      },
    },
  },
  plugins: [require('daisyui')],
}
