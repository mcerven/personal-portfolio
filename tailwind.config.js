const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './layouts/**/*.js', './components/**/*.js'],
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
        onSecondaryBgPrimary: 'var(--color-onSecondaryBgPrimary)',
        onSecondaryBgSecondary: 'var(--color-onSecondaryBgSecondary)',
        onSecondaryBgAccent: 'var(--color-onSecondaryBgAccent)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
