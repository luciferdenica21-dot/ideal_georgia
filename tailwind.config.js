/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ideal-green': '#2ecc71',
        'ideal-dark': '#1a1f24',
        'ideal-card': 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
