/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        card: "url('/src/assets/images/CardBG.svg')",
      },
      colors: {
        brand: {
          indigo: {
            100: "#211c5c",
          },
          pink: {
            100: "#ed0e61",
          },
        },
        cool: {
          grey: {
            70: "#9ea6b4",
          },
        },
      },
    },
  },
  plugins: [],
};
