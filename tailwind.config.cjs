// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        faro: ["Faro", "sans-serif"],
        aerotype: ["Aerotype"],
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-10rem)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translate3d(0,5rem,0)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-10rem)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(10rem)" },
          "100%": { opacity: 1, transform: "none" },
        },
        scaleUp: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "none" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s",
        fadeInUp: "fadeInUp 1s",
        fadeInRight: "fadeInRight 1s",
        fadeInLeft: "fadeInLeft 1s",
        scaleUp: "scaleUp 1s",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container-fluid": {
          paddingLeft: theme("spacing.32"),
          paddingRight: theme("spacing.32"),
        },
      });
    }),
  ],
};
