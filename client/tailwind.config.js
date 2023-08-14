/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        'shop-all': "url('../public/assets/shopall.png')",
        'lookbook': "url('../public/assets/lookbook.png')",
      },
      transitionDuration: {
        '10000': "10000ms",
      },
      transitionDelay: {
        '5000': "5000ms",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

