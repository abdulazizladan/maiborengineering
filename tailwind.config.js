/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0d47a1',
          dark: '#1a1a1a',
        }
      },
    },
    plugins: [],
  }