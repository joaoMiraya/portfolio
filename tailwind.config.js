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
      'dark': '#181717',
      'red': '#EA4335',
      'green': '#25D366',
      'purple': '#833AB4',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [],
}

