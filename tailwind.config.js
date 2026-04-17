/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00E676',
        'cream-paper': '#F5F5DC',
        'deep-slate': '#0F172A',
        'soft-gray': '#F3F4F6'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(15, 23, 42, 0.18)'
      },
      backdropBlur: {
        xs: '2px'
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.8'
          }
        }
      }
    }
  },
  plugins: []
};
