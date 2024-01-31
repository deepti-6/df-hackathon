/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

  module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#662671',
        buttonBg: '#5C218B',
        custom: '#32b4ff',
        heading: '#3e64ff',
        para: '#7D89A0',
        link: '#3ed1ff',
        inputBg: '#3e64ff33',
      }
    },
  },
  plugins: [],
  });

