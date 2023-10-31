/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#282828',
      'white': '#F0F0F0',
      'grey': '#b8b3b3',
      'beige': '#E6E3DD',
      'primary': '#F06193',
      'secondary': '#F8BCD3',
      'tertiary': '#34344A',
    },
  },
  plugins: [],
}