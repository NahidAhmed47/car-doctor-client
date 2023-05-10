/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f7b2b5",

          "secondary": "#78990c",

          "accent": "#f4b5f3",

          "neutral": "#1C1A2D",

          "base-100": "#FFFFFF",

          "info": "#A5CAE3",

          "success": "#35E9C8",

          "warning": "#FF3811",

          "error": "#E25A75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

