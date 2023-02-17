/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "264/1920": "13.75%",
        "608/1920": "31.67%",
      },
      fontSize: {
        s5xl: "5rem",
      },
      backgroundImage: {
        "down-arrow": "url('/src/assets/icons/down-arrow.svg')",
      },
    },
    screens: {
      dashboardHeight: "100vh",
    },
  },
  plugins: [],
};
