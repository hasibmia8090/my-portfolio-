/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C16',
          900: '#0B1120',
          850: '#0F172A',
          800: '#142038',
          750: '#182744',
          700: '#1E293B',
          600: '#334155',
          500: '#475569',
        },
        electric: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#38BDF8',
          500: '#0066FF',
          600: '#2563EB',
          700: '#1D4ED8',
          accent: '#00D2FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 102, 255, 0.25)',
        'glow-md': '0 0 25px -5px rgba(0, 102, 255, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(0, 102, 255, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(0, 210, 255, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
