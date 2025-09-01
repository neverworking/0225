/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#38b6ff',
      },
      boxShadow: {
        glow: '0 0 32px rgba(56,182,255,0.35)',
      },
      backgroundImage: {
        'romance-gradient': 'radial-gradient(1200px 800px at 20% -10%, rgba(56,182,255,.15), transparent), radial-gradient(1000px 600px at 80% 110%, rgba(56,182,255,.12), transparent), linear-gradient(180deg, #0f172a, #0a1226)',
      }
    },
  },
  plugins: [],
}