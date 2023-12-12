/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ai-blue':'#2F4E91',
        'ai-orange': "#F17D2C",
      },
      fontFamily: {
        'kanit': ['kanit'],
        'sans': ['sans'],  
        'source-sans': ['Source Sans Pro', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

