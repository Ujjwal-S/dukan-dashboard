/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-primary": "#1E2640",
        "navbar-secondary": "#353C53",
        "navbar-active": "#ffffff1a",
        "off-black": "#4D4D4D",
        "search-bg": "#F2F2F2",
        "gray": "#808080"
      },
      boxShadow: {
        "card": "0px 2px 6px 0px rgba(26, 24, 30, 0.1)"
      }
    },
  },
  plugins: [],
}

