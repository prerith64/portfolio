// tailwind.config.js (for Vite + Tailwind setup with ESM)
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}

console.log("Tailwind config loaded!");
