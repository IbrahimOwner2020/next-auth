module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#F9F9F3",
        secondary: "#cfcfc8",
        brown: "#9C6644",
      }),
      colors: {
        primary: "#9C6644",
        primary40: "rgba(156, 102, 68, 0.4)",
      },
      width: {
        recipes: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
