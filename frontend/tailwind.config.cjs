/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        styling: ['Rubik Distressed', 'cursive'],
      },
      colors: {
        prim: '#F5F5F5',
        'prim-d': '#141414',
        sec: '#ffffff',
        'sec-d': '#000000',
        action: '#19A7FF',
        'action-d': '#19A7FF',
        'action-h': '#004B7A',
        'action-dh': '#5CC0FF',
        'action-sec-h': '#DDDDDD',
        'actiond-sec-dh': '#2F2F2F',
        high: '#F54B02',
        'high-d': '#F54B02',
        'high-h': '#F54B02',
        'high-dh': '#F54B02',
        error: '#DF0000',
        'error-d': '#DF0000',
        success: '#0BD600',
        'success-d': '#0BD600',
        warning: '#FFB300',
        'warning-d': '#FFB300',
        fondexception: '#848484',
      },
      fontSize: {
        s1: '0.688rem', // 11
        s2: '0.813rem', // 13
        s3: '1rem', // 16
        s4: '1.125rem', // 18
        s5: '1.25rem', // 20
        s6: '1.375rem', // 22
        s7: '1.5rem', // 24
        s8: '1.75rem', // 28
        s9: '2.25rem', // 36
        s10: '3rem', // 48
        s11: '3.25rem', // 52
        s12: '3.5rem', // 56
        s13: '3.75rem', // 60
        s14: '4rem', // 64
        s15: '4.5rem', // 72
        s16: '4.75rem', // 76
      },
    },
  },
  plugins: [],
}
