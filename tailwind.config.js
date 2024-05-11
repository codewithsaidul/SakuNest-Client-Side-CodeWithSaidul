/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'all': 'Roboto, sans-serif',
        'title': 'Briem Hand, cursive'
      },
      'colors': {
        'primary': '#faa300'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

