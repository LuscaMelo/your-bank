/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A1A1A',
        'brand-primary': '#CAFF33',
        'brand-secondary': '#1C1C1C',
        'brand-grey': '#B3B3B3',
        'brand-active': '#262626',
      },
      lineHeight: {
        'brand': '1.5',
      }
    },
  },
  plugins: [],
}