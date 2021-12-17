module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FCFBFF",
          200: "#F4F6F6",
          300: "#EEEEEE",
          500: "#5F5F64",
          600: "#64717C",
          700: "#3D3D3F",
        },
        sapGreen: {
          100: "#3A5F5F",
          600: "#244D4D",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Noto: ["Noto Serif JP", "serif"],
      },
    },
  },
  plugins: [],
};
