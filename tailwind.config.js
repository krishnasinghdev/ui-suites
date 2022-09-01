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
        'bg-1': 'url("https://preview.colorlib.com/theme/suites/images/xhero_2.jpg.pagespeed.ic.kt36xQm6lK.webp")',
        'bg-2': 'url("https://preview.colorlib.com/theme/suites/images/xhero_1.jpg.pagespeed.ic.WnC_CEjW9b.webp")',
        'bg-3': 'url("https://preview.colorlib.com/theme/suites/images/xhero_3.jpg.pagespeed.ic.0RfTZ9Ub16.webp")',
      }

    },
  },
  plugins: [],
}