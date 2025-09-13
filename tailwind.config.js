/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graycolor: "#2A2A2A",
        primarycolor: "#FF6000",
        greyG75: "#B3B3B3"
      }
    },
  },
  plugins: [],
}

