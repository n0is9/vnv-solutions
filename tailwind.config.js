/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vnv: {
          milk: '#F8F8F8',
          black: '#0b090a',
        }
      },
      borderWidth: {
        '16':'16px',
        '4': '4px'
      },
        boxShadow: {
        'lightShadow': '0 5px 25px 5px rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '700': '700px'
      },
      backgroundImage: {
        'bg1': "url('./img/bg-1.jpg')",
        'proj1': "url('./img/projects/project1.png')",
        'proj2': "url('./img/projects/project2.png')",
        'proj3': "url('./img/projects/project3.png')",
      }
    },
  },
  plugins: [],
}