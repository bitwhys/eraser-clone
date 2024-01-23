import type { Config } from 'tailwindcss'
import { defineTheme } from './utils/plugin'
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
    },
  },
  plugins: [
    tailwindcssAnimate,
    defineTheme({
      radius: 'large',
      grey: 'sand',
      primary: 'orange',
    }),
  ],
} satisfies Config
