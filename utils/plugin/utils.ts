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
    dark: {},
    darkAlpha: {},
  }
  if (RADIX_COLOR_LABELS.includes(color)) {
    colors.light = radix[color]
    colors.alpha = radix[`${color}A`]
    colors.dark = radix[`${color}Dark`]
    colors.darkAlpha = radix[`${color}DarkA`]
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

const colorTokenMappings = {
  background: 'white',
  foreground: 'var(--grey-12)',
  card: 'var(--white-a12)',
  'card-foreground': 'var(--grey-12)',
  popover: 'var(--white-a12)',
  'popover-foreground': 'var(--grey-12)',
  primary: 'var(--black-a12)',
  'primary-foreground': 'var(--white-a12)',
  secondary: 'var(--grey-4)',
  'secondary-foreground': 'var(--grey-12)',
  muted: 'var(--grey-3)',
  'muted-foreground': 'var(--grey-10)',
  accent: 'var(--grey-4)',
  'accent-foreground': 'var(--grey-11)',
  destructive: 'var(--red-9, theme(colors.red.500))',
  'destructive-foreground': 'white',
  border: 'var(--grey-6)',
  input: 'var(--grey-7)',
  ring: 'var(--grey-8)',
}
