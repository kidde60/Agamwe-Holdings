/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#477c2c',
        leaf: '#6fae45',
        gold: '#f2b233',
        ink: '#172118',
        mist: '#f4f8f1'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(24, 48, 25, 0.10)'
      }
    }
  },
  plugins: []
}
