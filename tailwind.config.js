// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ec7d10',
        primaryDark: '#c96b0d',
        primaryLight: '#fef3e8',
        secondary: '#1e293b',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'float-icons': 'float-icons 4s ease-in-out infinite'
      },
      keyframes: {
        'float-icons': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}