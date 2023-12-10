/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'rich-gradient': 'radial-gradient(circle at 0% 0%, rgba(70, 50, 0, 1) 0%, rgba(6, 6, 6, 1) 40%, rgba(6, 6, 6, 1) 60%, rgba(3, 0, 70, 1) 100%)',
        'silver-gradient': 'radial-gradient(45% 100% at 50% 50%,#fff 30%,hsla(0,0%,100%,.55) 100%)',
      },
      color: {

      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

