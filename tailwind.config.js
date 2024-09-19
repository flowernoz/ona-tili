/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#fff",
        lightText: "#1e90ff",
        boxBg: "#1e90ff", // Linear-gradient removed and solid color applied
        designColor: "#1e90ff",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px rgba(128, 128, 128, 0.1), -10px -10px 19px rgba(128, 128, 128, 0.1)", // Opacity decreased to 0.4
      }
    },
  },
  plugins: [],
};
