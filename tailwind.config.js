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
    colors: {
      "page-black": "#000000",
      "page-white": "#FFFFFF",
      "page-color": "#1b0428",
      "text-color": "#ee82ee",
      "text-white": "#FFFFFF",
      "text-neon": "",
      "button-color": "",
      "component-color": "",
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
            background: "#Color",
            foreground: "#Color",
            divider: "#Color",
            DEFAULT: "#Color",
          },
        },
        dark: {
          colors: {
            background: "#052814",
            foreground: "#Color",
            divider: "#Color",
            DEFAULT: "#Color",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
