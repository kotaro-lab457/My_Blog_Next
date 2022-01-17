const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Apple: 'Apple Chancery',
      Courier: 'Courier New',
    },
    colors: {
      gray: colors.coolGray,
    },
    // extends: {
    //   backgroundImage: {
    //     'top-back': "url('./public/images/2021sky-bg.jpeg')",
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
