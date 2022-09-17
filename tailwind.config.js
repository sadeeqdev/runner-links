/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'sub-white':'#efefef',
      'green': '#06BC5F',
      'activeclass': '#06BC5F',
      'blue': '#e0efff',
      'yellow': '#F0B90B',
      'greentext': '#0E9E55',
      'grey': '#D9D9D9',
      'liveborder':'#7C7C7C',
      'dark':'#1C1A1A',
      'sub-dark': '#222020',
      'navbar':'#030202',
      'btn-dark':'#121010',
      'footer': '#4E4B4B',
      'greenshadow': 'rgba(182, 250, 215, 0.21);',
      'blueshadow': 'rgba(182, 250, 215, 0.21);',
      'yellowshadow':'rgba(182, 250, 215, 0.21);',
      'dashFooter': '#555555',
      'red': '#990d0d',
      'redHover':'#d40d0d'
    },
    extend: {},
  },
  plugins: [],
}
