const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: 10,
      },
    },
    screens: {
      xl: { max: '1600px' },
      lg: { max: '1199px' },
      md: { max: '991px' },
      sm: { max: '767px' },
      xs: { max: '575px' },
      xxs: { max: '480px' },
      mxl: { raw: '(min-width: 1921px)' },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}  