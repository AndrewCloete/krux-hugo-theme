/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        khaki: "rgb(99, 80, 10)",
        lkhaki: "rgb(190, 175, 154)",
        blood: "rgb(132, 35, 0)",
        darkg: "rgb(39, 43, 42)",
      },
    },
  },
  plugins: [],
};
