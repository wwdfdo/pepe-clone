/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgcow: "url('/src/images/banner-cow.webp)",
      },
    },
  },
  plugins: [],
};
