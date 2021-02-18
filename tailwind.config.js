module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          medium: "#252836",
          DEFAULT: "#1F1D2B",
        },
      },
      fill: (theme) => ({
        black: theme("colors.black"),
        white: theme("colors.white"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};