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
        'Bestsellers': "url('https://thesusoutdoors.com/cdn/shop/files/Beige_Collection_Page.png?v=1686860778&width=1500')",
        'New-In': "url('https://thesusoutdoors.com/cdn/shop/files/New_In_Collection.png?v=1686861434&width=1500')",
        'The-Weekend-Boot': "url('https://thesusoutdoors.com/cdn/shop/files/Bestsellers_Collection.png?v=1686861210&width=750')",
        'The-Terrus': "url('https://thesusoutdoors.com/cdn/shop/files/Terrus_Collection.png?v=1686861571&width=1500')",
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

