
module.exports = {

  content: ['./pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"], 
  darkMode: ' class', // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [require('flowbite/plugin')],
 }