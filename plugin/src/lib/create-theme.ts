import type { Config } from 'tailwindcss'
import { PluginOptions } from './types.ts'
import tailwindcssAnimatePlugin from 'tailwindcss-animate'
import { CONFIG_COLORS } from '../tokens/config/config.colors.ts'
import { CONFIG_RADIUS } from '../tokens/config/config.radius.ts'
import { CONFIG_FONTS } from '../tokens/config/config.fonts.ts'
import { CONFIG_KEYFRAMES } from '../tokens/config/config.keyframes.ts'
import { CONFIG_ANIMATIONS } from '../tokens/config/config.animations.ts'

export const createTheme = (options: PluginOptions) => {
  const { prefix = '' } = options
  return {
    darkMode: ['class'],
    prefix,
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: CONFIG_COLORS,
        borderColor: {
          DEFAULT: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
        },
        textColor: {
          DEFAULT: 'var(--grey-12)',
          body: 'var(--grey-12)',
          'on-primary': 'var(--primary-foreground)',
          muted: 'var(--grey-10)',
          secondary: 'var(--grey-11)',
        },
        borderRadius: CONFIG_RADIUS,
        fontFamily: CONFIG_FONTS,
        keyframes: CONFIG_KEYFRAMES,
        animation: CONFIG_ANIMATIONS,
        boxShadow: {
          DEFAULT: 'var(--shadow-2)',
          sm: 'var(--shadow-1)',
          md: 'var(--shadow-2)',
          lg: 'var(--shadow-3)',
          xl: 'var(--shadow-4)',
          '2xl': 'var(--shadow-5)',
          '3xl': 'var(--shadow-6)',
        },
      },
    },
    plugins: [tailwindcssAnimatePlugin],
  } satisfies Partial<Config>
}
