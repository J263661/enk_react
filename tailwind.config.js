/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/react-tailwindcss-datepicker/dist/index.esm.js", // 👈 add this
   
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
