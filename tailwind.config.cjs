/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#252d37",
        "darkness-blue": "#121417",
      },
      height: {
        98: "26rem",
      },
      width: {
        98: "26rem",
      },
    },
  },
  plugins: [],
};
