import plugin from 'tailwindcss/plugin'
import { pluginWithOptionsCreator } from './lib/plugin-creator.ts'
import { createTheme } from './lib/create-theme.ts'

export const defineTheme = plugin.withOptions(
  pluginWithOptionsCreator,
  createTheme
)
