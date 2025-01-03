/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#F1F6F9',
        'color-2': '#394867',
        'color-3': '#212A3E',
        'color-4': '#D9D9D9',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}

