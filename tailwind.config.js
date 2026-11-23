/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#090312',
        'brand-surface': '#150526',
        'brand-border': '#3B0764',
        'brand-accent': '#7A00FF',
        'brand-accent-bright': '#9333EA',
        'brand-accent-light': '#C084FC',
        'brand-text': '#F5F0FF',
        'brand-muted': '#B8A6CC',
        'brand-success': '#34D399',
        'brand-error': '#F87171'
      }
    },
  },
  plugins: [],
}