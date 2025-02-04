/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",    
  ],
  theme: {
    extend: {
        colors: {
        　oasis: '#5a7be0',
        }
    },
    fontFamily: {
      brand: ['Kosugi Maru', 'sans-serif']
    }
  },
  plugins: [],
}

