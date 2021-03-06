module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004727',
          light: '#009250',
          dark: '#012D19',
        },
      },
      fontFamily: {
        salsa: "'Salsa', cursive",
        roboto: "'Roboto', sans-serif",
        ibmmono: "'IBM Mono', monospace",
        mosaic: "'Palette Mosaic', cursive",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
