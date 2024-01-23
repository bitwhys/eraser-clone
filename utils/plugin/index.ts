import plugin from 'tailwindcss/plugin'
import mapKeys from 'lodash.mapkeys'
import { CORE_VARIABLES } from './tokens/core/core.variables.ts'
import { CONFIG_COLORS } from './tokens/config/config.colors.ts'
import { CONFIG_RADIUS } from './tokens/config/config.radius.ts'
import { CONFIG_FONTS } from './tokens/config/config.fonts.ts'
import { CONFIG_KEYFRAMES } from './tokens/config/config.keyframes.ts'
import { CONFIG_ANIMATIONS } from './tokens/config/config.animations.ts'

export type PluginOptions = {
  /*
   * Grey is a neutral color and is the foundation of the color core.
   * Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray. */
  grey?: 'gray' | 'slate' | 'mauve' | 'sage' | 'olive' | 'sand'
  /*
   * The primary color is your "brand" color, and is used across all interactive elements such as buttons,
   * links, inputs, etc. This color can define the overall feel and can elicit emotion. */
  primary?: string
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
  scaling?: 0.9 | 0.95 | 1 | 1.05 | 1.1
  prefix?: string
  overrides?: Partial<typeof CORE_VARIABLES>
}

type PluginWithOptionsCreator = (
  options: PluginOptions
) => Parameters<typeof plugin>[0]

type PluginWithOptionsThemeCreator = (
  options: PluginOptions
) => Parameters<typeof plugin>[1]
const pluginCreator: PluginWithOptionsCreator = (options) => {
  const { scaling = 1, radius = 'medium' } = options
  let radiusFactor: string
  let radiusFull: string

  switch (radius) {
    case 'none':
      radiusFactor = '0'
      radiusFull = '1'
      break
    case 'small':
      radiusFactor = '0.75'
      radiusFull = '0px'
      break
    case 'medium':
      radiusFactor = '1'
      radiusFull = '0px'
      break
    case 'large':
      radiusFactor = '1.5'
      radiusFull = '0px'
      break
    case 'full':
      radiusFactor = '1.5'
      radiusFull = '9999px'
      break
    default:
      radiusFactor = '1'
      radiusFull = '0px'
  }
  return ({ addBase }) => {
    addBase([
      {
        ':root': {
          '--scaling': `${scaling}`,
          '--radius-factor': `${radiusFactor}`,
          '--radius-full': `${radiusFull}`,
          ...mapKeys(CORE_VARIABLES, (_, k) => `--${k}`),
        },
        '*': {
          borderColor: 'theme(colors.border)',
        },
        body: {
          backgroundColor: 'theme(colors.background)',
          color: 'theme(colors.foreground)',
        },
      },
    ])
  }
}

const themeCreator: PluginWithOptionsThemeCreator = (options) => {
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
        borderRadius: CONFIG_RADIUS,
        fontFamily: CONFIG_FONTS,
        keyframes: CONFIG_KEYFRAMES,
        animation: CONFIG_ANIMATIONS,
      },
    },
  }
}
// @ts-expect-error -- TS is mad `themeCreator` is never undefined 🤷
export const defineTheme = plugin.withOptions(pluginCreator, themeCreator)
