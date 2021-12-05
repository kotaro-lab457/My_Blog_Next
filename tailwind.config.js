const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js, ts, tsx}',
    './components/**/*.{js, ts, tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Apple': 'Apple Chancery',
      'Courier': 'Courier New',
    },
    colors: {
      gray: colors.coolGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
