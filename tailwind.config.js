/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark__primary': '#292929',
      'dark__secondary': '#333333',
      'dark__third': '#666666',
      'light__primary': '#E4E9F2',
      'light__secondary': '#D0D3D4',
      'blue__primary': '#3498DB',
      'blue__secondary': '#5FA8D3',
      'light__theme': '#f1f1f1',
      'linkedin__theme': '#0077B5',
      'github__theme': '#181717',
      'gmail__theme': '#EA4335',
      'whats__theme': '#25D366',
      'insta__theme': '#833AB4',
    },
  },
  plugins: [],
}

