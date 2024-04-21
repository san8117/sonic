import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky:colors.sky,
      blue: colors.blue,
      stone: colors.stone,
      cyan: colors.cyan,
    },
  },
  plugins: [],
}