import type { Config } from 'tailwindcss'
import { defineTheme } from './utils/plugin'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {},
  plugins: [
    tailwindcssAnimate,
    defineTheme({
      radius: 'large',
    }),
  ],
} satisfies Config
