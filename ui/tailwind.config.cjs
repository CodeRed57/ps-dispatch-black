module.exports = {
  darkmode: true,
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#151518cc',
        secondary: '#151518d8',
        tertiary: '#383838',
        priority_primary: '#332328',
        priority_secondary: '#3B252F',
        priority_tertiary: '#472F39',
        priority_quaternary: '#9A003A',
        accent: '#2f3c4700',
        accent_green: '#00A379',
        accent_dark_green: '#008563',
        accent_cyan: '#0098A3',
        accent_red: '#FF004E',
        accent_dark_red: '#850032',
        border_primary: '#373a40',
        hover_secondary: '#2c2e33',
      }
    },
  },
  plugins: [],
}
