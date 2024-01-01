/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        DM_Sans: ['DM Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}