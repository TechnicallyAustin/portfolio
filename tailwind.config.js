const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js, jsx}'",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Garamond", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#000000",
            divider: "#000000",
            DEFAULT: "#Color",
          },
        },
        dark: {
          colors: {
            background: "#22223b",
            foreground: "#f2e9e4",
            divider: "#f2e9e4",
            DEFAULT: "#Color",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
