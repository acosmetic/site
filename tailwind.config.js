/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'nivea-blue': '#005A9C',
        'nivea-light-blue': '#0078D4',
        'nivea-dark': '#333333',
        'nivea-gray': '#f5f5f5',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.nivea-dark'),
            h1: { color: theme('colors.nivea-dark') },
            h2: { color: theme('colors.nivea-dark') },
            h3: { color: theme('colors.nivea-dark') },
            strong: { color: theme('colors.nivea-dark') },
            a: { color: theme('colors.nivea-blue') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}