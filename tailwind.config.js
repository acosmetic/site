/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nivea-blue': '#005A9C',
        'nivea-light-blue': '#0078D4',
        'nivea-gray': '#F5F5F5',
        'nivea-dark': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
