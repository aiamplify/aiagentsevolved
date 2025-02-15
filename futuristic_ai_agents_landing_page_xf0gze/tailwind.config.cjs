/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050508',
        'neon-blue': '#29d9d5',
        'neon-purple': '#9b51e0',
        'neon-green': '#6fdd83',
        'glow-effect': 'rgba(41, 217, 213, 0.25)'
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px 5px rgba(41, 217, 213, 0.4)',
        'glow': '0 0 40px 8px rgba(41, 217, 213, 0.3)'
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
