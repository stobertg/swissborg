import { createStitches } from '@stitches/react'
import { globalStyle, breakpoints, colors, fonts, fontSizes, radius, transitions, lightThemeColors, darkThemeColors } from './parts'

export const { styled, globalCss, keyframes, theme, createTheme, config } = createStitches({
  theme: {
    fonts: { ...fonts },
    fontSizes: { ...fontSizes },
    colors: { ...colors },
    radii: { ...radius },
    transitions: { ...transitions },
  },
  media: { ...breakpoints },
})

export const globalStyles = globalCss({ ...globalStyle })
export const lightTheme = createTheme({ colors: { ...lightThemeColors }})
export const darkTheme = createTheme({ colors: { ...darkThemeColors }})
