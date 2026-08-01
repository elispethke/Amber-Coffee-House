import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        cream: '#FAF3E7',
        sand: '#F3E4D0',
        espresso: '#3A2A1E',
        mocha: '#6B4A32',
        gold: '#D9A441',
        ivory: '#FFFDF9',
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'serif'],
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        section: '6rem',
        'section-sm': '3.5rem',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(58, 42, 30, 0.08)',
        card: '0 12px 40px rgba(58, 42, 30, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
