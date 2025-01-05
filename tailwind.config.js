// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      backdropBlur: {
        '6': '6px', // Equivalent to backdrop-filter: blur(6px);
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this if you're using tailwindcss-filters
  ],
};
