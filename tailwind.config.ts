import type { Config } from 'tailwindcss'
import { defineTheme } from './plugin'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--grey-2)',
      },
      ringColor: {
        DEFAULT: 'var(--grey-a4)',
        ring: 'var(--grey-6)',
      },
    },
  },
  plugins: [tailwindcssAnimate, defineTheme({})],
} satisfies Config
