const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./styles/**/*.css', './pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Zilla Slab','Roboto','-apple-system','BlinkMacSystemFont','"Segoe UI"','"Helvetica Neue"','"Noto Sans"','sans-serif','Arial'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        primaryBg: 'var(--color-primaryBg)',
        secondaryBg: 'var(--color-secondaryBg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
