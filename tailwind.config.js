/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-cow": "url('/src/images/banner-cow.webp)",
      },
    },
  },
  plugins: [],
};
