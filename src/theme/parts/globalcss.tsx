import { Typeface } from './fonts'

export const globalStyle = {
  '@font-face': Typeface,

  '*': {
    boxSizing: 'border-box',
    fontFamily: '$sansSerif',
    color: 'inherit',
    fontWeight: 'normal',
    fontStyle: 'normal',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  img: {
    width: '100%'
  },

  svg: {
    width: '100%'
  },

  body: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1rem',
    background: '$siteBg',
    color: '$textPrimary'
  },

  strong: { fontFamily: '$sansSerifBold' },

  a: { 
    textDecoration: 'none',
    color: '$textLink'
  },

  button: { cursor: 'pointer' },

  p: { margin: 0 },

  'fieldset, ul, figure, button': {
    border: 'none',
    padding: 0,
    margin: 0,
    appearance: 'none',
    background: 'none'
  },

  'h1, h2, h3, h4, h5, h6': {
    margin: 0
  }
}
