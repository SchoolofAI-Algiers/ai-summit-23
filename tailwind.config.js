/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,jsx,html}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ai-blue':'#2F4E91',
        'ai-orange': "#F17D2C",
        blue: "#2F4E91",
				"red-rgba": "rgba(204, 36, 41, 0.4) ",
      },
      fontFamily: {
        'kanit': ['kanit'],
        'sans': ['sans'],  
        'source-sans': ['Source Sans Pro', 'sans-serif'], 
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

