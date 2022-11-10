const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        primary: '#4389fd'
      }
    }
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}