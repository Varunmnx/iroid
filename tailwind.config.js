/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
          themeClr :"#940D1B",
          iconClr:"#A4A4A4"
      },
      colors:{
        themeClr :"#940D1B",
        iconClr:"#A4A4A4",
        contentClr:"#515151"
      }
    },
  },
  plugins: [],
}