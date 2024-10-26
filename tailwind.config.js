/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "12px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#E7FE29",
        color: "#131313",
        colors: "#FFFFFF",
        footer: "#06091A",
        subscribe: "#131313",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
