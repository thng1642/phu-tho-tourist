/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'news-card': ' 0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
        'deco-img': '0px 4px 21px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

