/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        box14: "url('src/assets/images/box14.png')",
      },
    },
  },
  plugins: [],
};
