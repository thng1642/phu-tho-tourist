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
        'deco-img': '0px 4px 21px 0px rgba(0, 0, 0, 0.25)',
        'mini-tag': '0px 2px 16px 0px rgba(0, 0, 0, 0.10)',
        'new-feed': '0px 2px 24px 0px rgba(0, 0, 0, 0.15)',
        'filter': '0px 2px 20px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

