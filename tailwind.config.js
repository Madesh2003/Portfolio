/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,html}',
  ],
  theme: {
    
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const screens = theme('screens', {});
      const newUtilities = Object.keys(screens).reduce((acc, screen) => {
        acc[`.max-${screen}`] = { '@media (max-width: ${screens[screen]})': {} };
        return acc;
      }, {});
      addUtilities(newUtilities, ['responsive']);
    },
  ],
}

