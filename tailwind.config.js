/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '380px'},
        'xs': {'max': '525px'},
        'sm': {'max':'640px'},
        'md': {'max':'780px'}, 
        'lg': {'max':'1024px'},
        'xl': {'max':'1280px'},
        '2xl': {'max':'1536px'},
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'mona': ['Playpen Sans', 'cursive'],
        'monaArabic': ["Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [],
}

