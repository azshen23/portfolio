/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', "system-ui", "-apple-system", "sans-serif"],
        pokemon: ['"Pokemon"', "monospace"],
      },
      colors: {
        poke: {
          ink: "#0B1020",
          surface: "#121A2F",
          elevated: "#1A2542",
          crimson: "#E3350D",
          crimsonHover: "#FF4924",
          blue: "#2A75BB",
          sky: "#38BDF8",
          gold: "#F5B700",
          paper: "#F8FAFC",
          mist: "#EEF2F7",
        },
      },
      backgroundImage: {
        box14: "url('/src/assets/images/About/box14.png')",
      },
      boxShadow: {
        rpg: "0 10px 30px -10px rgba(11, 16, 32, 0.35)",
        "rpg-lg": "0 20px 45px -12px rgba(11, 16, 32, 0.45)",
      },
    },
  },
  plugins: [],
};
