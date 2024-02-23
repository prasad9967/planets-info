/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#D3D3D3',
        purple: '#6842EF'
      }
    },
  },
  screens: {
    sm: '425px',
    md: '768px',
    lg: '1024px'
  },
  plugins: [],
}

