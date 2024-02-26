/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      lightgray: "#f4f4f4",
      orange: "#e4b248",
      white:"#ffffff",
      black:"#333"
    }
      ,
    extend: {
      fontFamily: {
        'varela-round': ['Varela Round', 'sans-serif'],
      },
      backgroundImage: {
        'sunrise': "url('./image/sunrise.jpg')",
        
       }
    },
  },
  plugins: [require("daisyui")],
};
