/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner":"url('https://res.cloudinary.com/dsjsvmug6/image/upload/v1728654689/e-commerce/bg_1_efdzap.jpg')",
      }
    },
  },
  plugins: [],
}