// @import  url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Caveat&display=swap');
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    
    extend: {
      colors:{
        burlywood: '#3E2C23',
        accents:'#F5E9D8'
      }
      ,font: {
        archivo: ['Archivo','sans-serif'],
        caveat: ['Caveat', 'cursive']
    },
  },
  plugins: [],
}}
