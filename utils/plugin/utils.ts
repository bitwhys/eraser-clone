import * as radix from '@radix-ui/colors'
export const RADIX_COLOR_LABELS = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'mint',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'yellow',
  'amber',
  'orange',
  'brown',
] as const

export type GreyScale = 'gray' | 'slate' | 'mauve' | 'sage' | 'olive' | 'sand'

export const getRadixColors = (color: (typeof RADIX_COLOR_LABELS)[number]) => {
  const colors = {
    light: {},
    alpha: {},
  }
  if (RADIX_COLOR_LABELS.includes(color)) {
    colors.light = radix[color]
    colors.alpha = radix[`${color}A`]
  }
  return colors
}

function captureNumber(str: string) {
  const regex = /[a-zA-Z]+A?\d{1,2}/
  const match = str.match(regex)

  if (match) {
    // @ts-expect-error -- this should not error
    return match[0].match(/\d+/)[0] // Extracts only the number part
  } else {
    return null // No match found
  }
}
export const format = (str: string, frmt: string = '%d') => {
  switch (frmt) {
    default:
      return captureNumber(str)
  }
}
