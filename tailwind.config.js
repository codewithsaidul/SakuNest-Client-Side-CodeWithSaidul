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
        'custom': '0 4px 8px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

