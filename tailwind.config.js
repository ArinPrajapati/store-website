/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'edu':"'Edu SA Beginner', cursive",
        'Inter':"'Inter', sans-serif",
        'OpenSans':"'Open Sans', sans-serif",
        'Roboto':"'Roboto Slab', serif",
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
