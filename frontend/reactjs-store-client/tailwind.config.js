/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      width: {
        1920: "1920px",
      },
    },
  },
  plugins: [require("tw-animate-css")],
};
