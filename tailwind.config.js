/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        color: colors.stone,
        primary: colors.amber,
      }
    },
  },
  plugins: [],
}
