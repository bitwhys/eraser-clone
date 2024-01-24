import { GreyScale, RADIX_COLOR_LABELS } from '../utils.ts'
import { CORE_TOKENS } from '../tokens/core'

export type PluginOptions = {
  /*
   * Grey is a neutral color and is the foundation of the color core.
   * Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray. */
  grey?: GreyScale
  /*
   * The primary color is your "brand" color, and is used across all interactive elements such as buttons,
   * links, inputs, etc. This color can define the overall feel and can elicit emotion. */
  primary?: (typeof RADIX_COLOR_LABELS)[number]
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
  scaling?: 0.9 | 0.95 | 1 | 1.05 | 1.1
  prefix?: string
  overrides?: Partial<typeof CORE_TOKENS>
}
