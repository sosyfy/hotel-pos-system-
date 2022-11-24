/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
       },
    },

  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}


