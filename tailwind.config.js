/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      },
      fontFamily: {
        'primary': ['playfair-display', 'serif']
      },

      backgroundImage: {
        'bg-1': 'url("https://preview.colorlib.com/theme/suites/images/hero_1.jpg.webp")',
        'bg-2': 'url("https://preview.colorlib.com/theme/suites/images/hero_2.jpg.webp")',
        'bg-3': 'url("https://preview.colorlib.com/theme/suites/images/hero_3.jpg.webp")',
      }

    },
  },
  plugins: [],
}