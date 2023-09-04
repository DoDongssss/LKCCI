/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         /* prettier-ignore */
         keyframes: {
            right: {
               '0%': { transform: 'translateX(0)' },
               '50%': { transform: 'translateX(25px)' },
               '100%': { transform: 'translateX(0)' },
            },
            
         },
         animation: {
            "move-right": "right 1.5s linear infinite",
         },
         /* /prettier-ignore */
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark", "cupcake"],
   },
}
