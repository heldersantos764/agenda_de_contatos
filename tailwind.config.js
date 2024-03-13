/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C51BF',
        secondary: '#D1D5DB',
        accent: '#F97316',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

