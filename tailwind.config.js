/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ai-blue':'#2F4E91',
        blue: "#2F4E91",
				orange: "#F17D2C",
				"red-rgba": "rgba(204, 36, 41, 0.4) ",
      },
      fontFamily: {
        'kanit': ['kanit'],
        'sans': ['sans'],
      },
    },
    container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "9%",
			},
		},
  },
  plugins: [],
}

