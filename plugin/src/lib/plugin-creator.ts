import mapKeys from 'lodash.mapkeys'
import plugin from 'tailwindcss/plugin'
import { PluginOptions } from './types.ts'
import { getRadixColors, format } from '../utils.ts'
import {
  CORE_COLORS,
  CORE_RADIUS,
  CORE_SHADOWS,
  CORE_TOKENS,
} from '../tokens/core'

type PluginCreator = Parameters<typeof plugin>[0]

export const pluginWithOptionsCreator = (options: PluginOptions) => {
  const {
    scaling = 1,
    radius = 'large',
    grey = 'olive',
    primary = 'lime',
  } = options
  let radiusFactor: string
  let radiusFull: string

  const {
    light: greyBase,
    alpha: greyAlpha,
    dark: inverseBase,
    darkAlpha: inverseAlpha,
  } = getRadixColors(grey)
  const { light: primaryBase, alpha: primaryAlpha } = getRadixColors(primary)

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
      radiusFactor = '1.625'
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

  const pluginCreator: PluginCreator = ({ addBase }) => {
    addBase([
      {
        ':root': {
          '--scaling': `${scaling}`,
          '--radius-factor': `${radiusFactor}`,
          '--radius-full': `${radiusFull}`,
          ...mapKeys(CORE_RADIUS, (_, k) => `--${k}`),
          ...mapKeys(CORE_TOKENS, (_, k) => `--${k}`),
          ...mapKeys(CORE_SHADOWS, (_, k) => `--${k}`),
          ...mapKeys(CORE_COLORS, (_, k) => `--${k}`),
          ...mapKeys(greyBase, (_, k) => `--grey-${format(k)}`),
          ...mapKeys(greyAlpha, (_, k) => `--grey-a${format(k)}`),
          ...mapKeys(inverseBase, (_, k) => `--inverse-${format(k)}`),
          ...mapKeys(inverseAlpha, (_, k) => `--inverse-a${format(k)}`),
          ...mapKeys(primaryBase, (_, k) => `--primary-${format(k)}`),
          ...mapKeys(primaryAlpha, (_, k) => `--primary-a${format(k)}`),
        },
        '*': {
          borderColor: 'theme(colors.border.DEFAULT)',
        },
        body: {
          backgroundColor: 'theme(colors.background)',
          color: 'theme(textColor.body)',
        },
        '*::selection': {
          backgroundColor: 'theme(colors.primary.9)',
          color: 'theme(colors.primary.12)',
        },
      },
    ])
  }
  return pluginCreator
}
