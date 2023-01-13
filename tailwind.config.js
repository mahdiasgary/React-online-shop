/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'a': 'repeat(auto-fit, minmax(190px, 1fr))'},
        screens: {
          'xsm': '400px',
        
          '2xsm': '250',
          
        }
    },
  },
  plugins: [    require('tailwind-scrollbar')({ nocompatible: true }),
],
}
