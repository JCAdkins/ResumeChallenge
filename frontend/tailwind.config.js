/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrayBlue: "#D9E4E9",
        softGrayBlue: "#AAB8C2",
        mediumGrayBlue: "#6B7B8C",
        deepGrayBlue: "#42526E",
        darkGrayBlue: "#233040",
      },
    },
  },
  plugins: [],
};
