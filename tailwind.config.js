/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'gradient-glow': 'gradient-glow 3s ease-in infinite'
      },
      'keyframes': {
        'gradient-glow': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position-x': 'left',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position-x': 'right',
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "black",
    themes: ["light", "black"],
  },
}
