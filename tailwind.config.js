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
      },
      'boxShadow' : {
        'innerShadow' : 'inset 5px 5px 6px #777777, inset -5px -5px 6px #ffffff',
        'outerShadow' : '5px 5px 6px #777777, -5px -5px 6px #ffffff',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

