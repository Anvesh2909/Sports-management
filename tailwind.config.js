/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50', // Dark Blue
        secondary: '#34495E', // Slate Blue
        accent: '#1ABC9C',   // Teal
        background: '#ECF0F1', // Light Gray
        text: '#2C3E50',     // Dark Blue
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Use Montserrat throughout your app
      },
    },
  },
  plugins: [],
};
