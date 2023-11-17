/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: "hsl(0, 0%, 17%)",
        },
        secondary: {
          darkGray: "hsl(0, 0%, 59%)",
        },
      },
      backgroundImage: {
        desktop: "url('../images/pattern-bg-desktop.png')",
        mobile: "url('../images/pattern-bg-mobile.png')",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
