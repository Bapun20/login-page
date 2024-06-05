/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#334756',
        'secondary': '#3C9D9B',
        'accent': '#0D7377',
        'bg-dark': '#082032',
        'bg-input': '#2C394B',
      }
    },
  },
  plugins: [],
}
