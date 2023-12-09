/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ai-blue':'#2F4E91'
      },
      fontFamily: {
        'kanit': ['kanit'],
        'sans': ['sans'],
      },
    },
  },
  plugins: [],
}

