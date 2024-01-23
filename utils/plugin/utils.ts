import * as radix from '@radix-ui/colors'

type GreyScale = 'gray' | 'slate' | 'mauve' | 'sage' | 'olive' | 'sand'

export const getRadixColors = (color: GreyScale) => {
  return {
    light: radix[color],
    alpha: radix[`${color}A`],
  }
}

function captureNumber(str) {
  const regex = /[a-zA-Z]+A?\d{1,2}/
  const match = str.match(regex)

  if (match) {
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
