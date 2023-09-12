/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#faffad",

          secondary: "#ef1cda",

          accent: "#aedffc",

          neutral: "#232834",

          "base-100": "#f7f7f8",

          info: "#47a9cd",

          success: "#2eccac",

          warning: "#f1cb22",

          error: "#e81748",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
