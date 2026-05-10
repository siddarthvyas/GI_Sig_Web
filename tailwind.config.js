/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2D4A',
        'navy-light': '#1a3d5c',
        cream: '#F4F1EA',
        brand: '#E07A2F',
        'brand-dark': '#c96820',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
