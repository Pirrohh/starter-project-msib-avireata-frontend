/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Orbitron",
  },
  extend: {
      colors: {
          primary: "#B809C3",
          secondary: "#ff014f",
          third: "#FEF6C7",
          fourth: "#011eff",
      },
  },
},
plugins: [],
}
