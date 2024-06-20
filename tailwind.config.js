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
        'brand-grey': '#344D67',
      },
    },
  },
  plugins: [],
}