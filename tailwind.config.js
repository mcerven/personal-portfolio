const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./styles/**/*.css', './pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        primaryBg: 'var(--color-primaryBg)',
        secondaryBg: 'var(--color-secondaryBg)',
        accentBg: 'var(--color-accentBg)',
        onSecondaryBg: 'var(--color-onSecondaryBg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
